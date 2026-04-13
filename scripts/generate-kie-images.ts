/**
 * Generate images via kie.ai API using Google Imagen4 Fast (cheapest tier).
 *
 * Workflow:
 *  1. POST to /api/v1/jobs/createTask with model + prompt → returns taskId
 *  2. Poll /api/v1/jobs/recordInfo?taskId=... until state === "success"
 *  3. Download image from resultUrls[0] and save to disk
 *
 * Run:  npx tsx scripts/generate-kie-images.ts
 *       npx tsx scripts/generate-kie-images.ts --only authors      (filter)
 *
 * Env:  KIE_API_KEY  (loaded from .env.local)
 */

import fs from "fs";
import path from "path";

// ── Load .env.local manually (no dotenv dep) ───────────────────────────────
const envPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (m) process.env[m[1]] ??= m[2].trim();
  }
}

const API_KEY = process.env.KIE_API_KEY;
if (!API_KEY) {
  console.error("ERROR: KIE_API_KEY not set in .env.local");
  process.exit(1);
}

const ROOT = process.cwd();
// Allow overriding via env (MODEL=...). Imagen4-fast was flaky on 2026-04-13,
// seedream-5-lite is a working alternative with similar quality.
const MODEL = process.env.KIE_MODEL || "seedream/5-lite-text-to-image";
const CREATE_URL = "https://api.kie.ai/api/v1/jobs/createTask";
const STATUS_URL = "https://api.kie.ai/api/v1/jobs/recordInfo";

// ── Job list ───────────────────────────────────────────────────────────────
interface ImageJob {
  category: string;
  prompt: string;
  outputPath: string;
  alt: string;
  aspectRatio: "1:1" | "16:9" | "9:16" | "3:4" | "4:3";
}

const QUALITY = "Photorealistic, hyper-detailed, 8k, unedited photograph, raw photo, natural sunlight, cinematic lighting";

const jobs: ImageJob[] = [
  // ── Author headshots ────────────────────────────────────────────────────
  {
    category: "authors",
    prompt: `Professional corporate headshot portrait of a young Asian-American woman in her early 30s, confident smile, wearing a navy blazer over a white blouse, against a clean blurred office background, warm skin tones, editorial magazine quality. ${QUALITY}`,
    outputPath: "public/images/authors/sarah-chen.png",
    alt: "Sarah Chen — Lead Security Editor at BuySecureVPN",
    aspectRatio: "1:1",
  },
  {
    category: "authors",
    prompt: `Professional corporate headshot portrait of a Black British man in his mid 30s, friendly approachable expression, short beard, wearing a dark gray suit jacket and open-collar shirt, against a softly blurred modern office background. ${QUALITY}`,
    outputPath: "public/images/authors/marcus-johnson.png",
    alt: "Marcus Johnson — VPN & Privacy Analyst at BuySecureVPN",
    aspectRatio: "1:1",
  },
  {
    category: "authors",
    prompt: `Professional corporate headshot portrait of a Latina woman in her late 20s, warm genuine smile, long dark hair, wearing a teal blouse, against a blurred coworking space background with natural light from a window. ${QUALITY}`,
    outputPath: "public/images/authors/elena-rodriguez.png",
    alt: "Elena Rodriguez — Travel Security Writer at BuySecureVPN",
    aspectRatio: "1:1",
  },

  // ── Hero illustrations ──────────────────────────────────────────────────
  {
    category: "hero",
    prompt: `A young professional working on a MacBook laptop at a modern minimalist cafe table, coffee beside them, large windows with natural light, the laptop screen shows a glowing blue VPN shield icon, focused confident expression, golden hour. ${QUALITY}`,
    outputPath: "public/images/illustrations/hero-remote-work.png",
    alt: "Remote worker using VPN at a cafe — BuySecureVPN",
    aspectRatio: "16:9",
  },
  {
    category: "hero",
    prompt: `Close-up overhead shot of a laptop keyboard and screen on a wooden desk, the screen displays a glowing blue shield with a checkmark icon representing VPN security, beside the laptop is a smartphone and a cup of coffee, warm desk lighting, flatlay. ${QUALITY}`,
    outputPath: "public/images/illustrations/hero-vpn-desk.png",
    alt: "VPN security on laptop — BuySecureVPN workspace",
    aspectRatio: "16:9",
  },
  {
    category: "hero",
    prompt: `A person sitting at an airport gate lounge using a smartphone, free public wifi sign visible in the soft background blur, the phone screen shows a VPN connected status with a shield icon, travel bags beside them, large airport windows with aircraft visible. ${QUALITY}`,
    outputPath: "public/images/illustrations/hero-airport-wifi.png",
    alt: "Using VPN on public airport WiFi — BuySecureVPN travel security",
    aspectRatio: "16:9",
  },
  {
    category: "hero",
    prompt: `Modern home office desk setup, dual monitors showing encrypted data visualizations in blue tones, mechanical keyboard, a small plant, clean cable management, soft warm LED desk lighting against a dark background, minimalist productive workspace. ${QUALITY}`,
    outputPath: "public/images/illustrations/hero-home-office.png",
    alt: "Secure home office setup — BuySecureVPN remote work security",
    aspectRatio: "16:9",
  },

  // ── Guide / contextual ──────────────────────────────────────────────────
  {
    category: "guides",
    prompt: `Close-up of hands typing on a laptop keyboard in a dimly lit hotel room, the laptop screen emitting a blue glow, a hotel key card and travel passport visible on the desk beside it, moody atmospheric travel photography. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-hotel-wifi.png",
    alt: "Working from hotel room with VPN — BuySecureVPN hotel security guide",
    aspectRatio: "16:9",
  },
  {
    category: "guides",
    prompt: `A smartphone screen showing a VPN app interface with a large green Connected button and a shield icon, held in a person's hand, blurred busy coffee shop background with warm bokeh lights, lifestyle mobile photography. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-mobile-vpn.png",
    alt: "VPN connected on smartphone — BuySecureVPN mobile security",
    aspectRatio: "9:16",
  },
  {
    category: "guides",
    prompt: `Overhead flatlay photograph of cybersecurity essentials on a dark desk: a YubiKey hardware security key, a smartphone showing an authenticator app, a laptop with a password manager open, a small notebook with a pen, clean organized arrangement. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-security-tools.png",
    alt: "Essential security tools for remote workers — BuySecureVPN",
    aspectRatio: "16:9",
  },
  {
    category: "guides",
    prompt: `A digital nomad working on a laptop at a beachside wooden table with a tropical ocean view in the background, palm trees, the laptop has stickers on it, relaxed but productive atmosphere, warm tropical golden hour sunlight. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-digital-nomad.png",
    alt: "Digital nomad working remotely with VPN protection — BuySecureVPN",
    aspectRatio: "16:9",
  },

  // ── Guides v2 — thematic, mapped to slug clusters ───────────────────────
  {
    category: "guides-v2",
    prompt: `Close-up of a person's hands on a laptop, screen displaying a password manager vault with multiple credential entries blurred for privacy, a smartphone next to the laptop showing an authenticator app code, warm professional lighting. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-passwords.png",
    alt: "Password manager and 2FA security — BuySecureVPN",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v2",
    prompt: `Modern home WiFi router on a wooden shelf with subtle blue LED status lights, ethernet cables neatly connected, blurred smart home in background, professional product photography. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-router.png",
    alt: "Home network router security — BuySecureVPN",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v2",
    prompt: `Server racks in a clean modern data center with blue LED lights and fiber optic cables, depth of field, cinematic blue tone, professional infrastructure photography. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-data.png",
    alt: "Cloud data and backup security — BuySecureVPN",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v2",
    prompt: `A person browsing the web on a laptop in a private home setting, the browser shows privacy settings and a VPN icon in the address bar, warm cozy lighting, lifestyle photography. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-privacy.png",
    alt: "Browser privacy and online tracking — BuySecureVPN",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v2",
    prompt: `Two professionals on a video conference call shown on a laptop screen with end-to-end encryption indicator visible, modern home office setup, warm natural light, professional collaboration. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-comms.png",
    alt: "Secure video calls and messaging — BuySecureVPN",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v2",
    prompt: `Developer working on a Mac laptop with code visible on screen including environment variables and API key syntax highlighted, dark IDE theme, mechanical keyboard, mug of coffee, focused technical workspace. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-developer.png",
    alt: "Developer security and API keys — BuySecureVPN",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v2",
    prompt: `Gaming setup with mechanical keyboard, RGB mouse, gaming headphones, ultrawide monitor showing a game lobby with low ping indicator, dim ambient RGB lighting, esports atmosphere. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-gaming.png",
    alt: "VPN for gaming setup — BuySecureVPN",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v2",
    prompt: `Modern professional office desk with a laptop showing financial spreadsheets, a calculator, documents, and a coffee cup, clean corporate workspace, natural daylight from window. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-professional.png",
    alt: "Professional VPN for finance and business — BuySecureVPN",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v2",
    prompt: `A smartphone and tablet side by side on a wooden desk, both showing the same VPN app with connected status, clean minimalist tech flatlay photography. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-multi-device.png",
    alt: "Multi-device VPN security — BuySecureVPN",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v2",
    prompt: `A modern office building lobby with people walking, blurred motion, a security badge reader visible in foreground, corporate professional environment, soft daylight. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-enterprise.png",
    alt: "Enterprise VPN and zero trust — BuySecureVPN",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v2",
    prompt: `Bitcoin and Ethereum hardware wallets on a dark slate surface beside a laptop showing a crypto exchange interface, dramatic side lighting, professional cryptocurrency security photography. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-crypto.png",
    alt: "Cryptocurrency security and hardware wallets — BuySecureVPN",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v2",
    prompt: `Modern coworking space with multiple people working on laptops at long shared tables, plants, exposed brick walls, natural light from large windows, productive collaborative atmosphere. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-coworking.png",
    alt: "Coworking and shared office security — BuySecureVPN",
    aspectRatio: "16:9",
  },

  // ── Country hero images (top 20) — clean editorial travel photography ──
  ...["united-states","united-kingdom","germany","france","japan","australia","canada","brazil","india","mexico","spain","italy","netherlands","sweden","singapore","south-korea","switzerland","poland","turkey","argentina"].map((slug) => {
    const niceName = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return {
      category: "countries" as const,
      prompt: `Iconic landmark or skyline of ${niceName} at golden hour, clean editorial travel photography, natural warm colors, no text, no overlays, no digital effects. ${QUALITY}`,
      outputPath: `public/images/countries/${slug}.png`,
      alt: `${niceName} — VPN guide hero image`,
      aspectRatio: "16:9" as const,
    };
  }),

  // ── OG / social share backgrounds ───────────────────────────────────────
  {
    category: "og",
    prompt: `Abstract digital security background with glowing blue shield icon, subtle network grid pattern, dark navy gradient, premium tech aesthetic, no text. ${QUALITY}`,
    outputPath: "public/images/og/og-security.png",
    alt: "Security OG background",
    aspectRatio: "16:9",
  },
  {
    category: "og",
    prompt: `Abstract VPN concept background with flowing blue light streams representing encrypted tunnels, dark gradient background, futuristic premium tech look, no text. ${QUALITY}`,
    outputPath: "public/images/og/og-vpn.png",
    alt: "VPN OG background",
    aspectRatio: "16:9",
  },
  {
    category: "og",
    prompt: `Abstract world map made of blue glowing dots and lines on dark navy background, representing global VPN network coverage, premium minimalist tech design, no text. ${QUALITY}`,
    outputPath: "public/images/og/og-countries.png",
    alt: "Countries OG background",
    aspectRatio: "16:9",
  },
  {
    category: "og",
    prompt: `Modern minimalist desk with a laptop displaying a glowing blue shield icon, soft cinematic lighting, premium editorial tech photography, dark moody atmosphere, no text. ${QUALITY}`,
    outputPath: "public/images/og/og-default.png",
    alt: "Default OG background",
    aspectRatio: "16:9",
  },
  {
    category: "og",
    prompt: `Abstract travel and security concept: vintage compass and passport on dark wooden surface with subtle blue digital overlay, moody atmospheric travel photography, no text. ${QUALITY}`,
    outputPath: "public/images/og/og-travel.png",
    alt: "Travel OG background",
    aspectRatio: "16:9",
  },
  {
    category: "og",
    prompt: `Abstract guides and education concept: open laptop with code editor on screen, notebook, pen, and coffee cup on dark desk, warm focused workspace, premium editorial photography, no text. ${QUALITY}`,
    outputPath: "public/images/og/og-guides.png",
    alt: "Guides OG background",
    aspectRatio: "16:9",
  },

  // ── Guides v3 — clean editorial photography, no digital overlays ───────
  {
    category: "guides-v3",
    prompt: `A smartphone in a person's hand showing a clean authenticator app interface, a laptop with a login page blurred in the background, warm natural desk lighting, realistic photograph. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-2fa.png",
    alt: "Two-factor authentication setup",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v3",
    prompt: `A modern laptop on a wooden desk with a web browser open on screen, a coffee cup and notebook beside it, natural window lighting, clean minimalist home office, realistic photograph. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-browser.png",
    alt: "Browser privacy and tracking protection",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v3",
    prompt: `Overhead view of two external hard drives on a clean wooden desk beside a laptop, organized cables, a small potted plant, warm natural lighting, realistic photograph. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-backup.png",
    alt: "Data backup and cloud storage security",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v3",
    prompt: `A laptop on a desk showing an email inbox interface, a coffee mug beside it, a pen and notebook, soft warm window lighting, clean home office setting, realistic photograph. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-email.png",
    alt: "Secure email encryption",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v3",
    prompt: `A modern living room with a smart speaker on a side table, a smart thermostat on the wall, a robot vacuum in soft focus background, natural daylight, clean minimalist interior, realistic photograph. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-iot.png",
    alt: "IoT and smart home security",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v3",
    prompt: `A laptop on a clean desk showing an internet speed test results page on screen, a router visible in soft background, warm natural lighting, realistic photograph. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-speed-test.png",
    alt: "Internet speed test and VPN optimization",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v3",
    prompt: `A laptop on a minimalist wooden desk with a closed padlock resting beside it, natural window light, clean home office scene, realistic photograph. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-device-encrypt.png",
    alt: "Device encryption and disk security",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v3",
    prompt: `A clean professional office desk with a laptop, a financial newspaper, a pen and calculator, a cup of coffee, natural daylight from a window, realistic photograph. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-finance.png",
    alt: "Finance and banking VPN security",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v3",
    prompt: `A doctor's desk with a laptop, a stethoscope resting beside it, a small clipboard, clean bright hospital office lighting, realistic medical photograph. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-healthcare.png",
    alt: "Healthcare VPN and HIPAA security",
    aspectRatio: "16:9",
  },
  {
    category: "guides-v3",
    prompt: `A student studying on a laptop at a wooden library table with stacked books, an open notebook, a pencil, warm ambient library lighting, realistic photograph. ${QUALITY}`,
    outputPath: "public/images/illustrations/guide-student.png",
    alt: "Student and education VPN",
    aspectRatio: "16:9",
  },
];

// ── API helpers ────────────────────────────────────────────────────────────
async function createTask(job: ImageJob): Promise<string> {
  // Model-specific input payload — seedream uses `quality`, imagen uses `num_images`
  const input: Record<string, unknown> = {
    prompt: job.prompt,
    aspect_ratio: job.aspectRatio,
  };
  if (MODEL.startsWith("seedream/")) {
    input.quality = "basic"; // 2K; use "high" for 4K
  } else {
    input.num_images = "1";
  }

  const res = await fetch(CREATE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model: MODEL, input }),
  });

  if (!res.ok) throw new Error(`createTask HTTP ${res.status}: ${await res.text()}`);
  const data = await res.json();
  if (data.code !== 200) throw new Error(`createTask: ${data.msg}`);
  return data.data.taskId as string;
}

async function pollTask(taskId: string, maxWaitMs = 180_000): Promise<string> {
  const start = Date.now();
  while (Date.now() - start < maxWaitMs) {
    await new Promise((r) => setTimeout(r, 4_000));

    const res = await fetch(`${STATUS_URL}?taskId=${taskId}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    if (!res.ok) throw new Error(`pollTask HTTP ${res.status}`);
    const data = await res.json();
    if (data.code !== 200) throw new Error(`pollTask: ${data.msg}`);

    const state = data.data.state as string;
    if (state === "success") {
      const result = JSON.parse(data.data.resultJson) as { resultUrls: string[] };
      if (!result.resultUrls?.[0]) throw new Error("no resultUrls in response");
      return result.resultUrls[0];
    }
    if (state === "fail") {
      throw new Error(`task failed: ${data.data.failMsg || data.data.failCode}`);
    }
    // else: waiting / queuing / generating → keep polling
  }
  throw new Error(`task ${taskId} timed out after ${maxWaitMs}ms`);
}

async function downloadImage(url: string, outPath: string): Promise<number> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buf);
  return buf.length;
}

async function runJob(job: ImageJob, idx: number, total: number): Promise<boolean> {
  const label = `[${idx + 1}/${total}] ${path.basename(job.outputPath)}`;
  try {
    process.stdout.write(`${label}  → creating task...`);
    const taskId = await createTask(job);
    process.stdout.write(` ${taskId.slice(0, 20)}...\n`);

    process.stdout.write(`         polling...`);
    const url = await pollTask(taskId);
    process.stdout.write(` ready\n`);

    const bytes = await downloadImage(url, path.join(ROOT, job.outputPath));
    console.log(`         ✓ saved (${(bytes / 1024).toFixed(0)} KB)`);
    return true;
  } catch (err) {
    console.log(`\n         ✗ ${(err as Error).message}`);
    return false;
  }
}

// ── Main ───────────────────────────────────────────────────────────────────
async function main() {
  const onlyArg = process.argv.indexOf("--only");
  const filter = onlyArg !== -1 ? process.argv[onlyArg + 1] : null;
  const queue = filter ? jobs.filter((j) => j.category === filter) : jobs;

  console.log("=== BuySecureVPN — kie.ai Image Generator ===");
  console.log(`Model:  ${MODEL}`);
  console.log(`Filter: ${filter || "(all)"}`);
  console.log(`Jobs:   ${queue.length}\n`);

  let ok = 0;
  let fail = 0;
  for (let i = 0; i < queue.length; i++) {
    const success = await runJob(queue[i], i, queue.length);
    success ? ok++ : fail++;
    if (i < queue.length - 1) await new Promise((r) => setTimeout(r, 1_500));
  }

  console.log(`\n=== Done ===`);
  console.log(`  ✓ ${ok}   ✗ ${fail}   total ${queue.length}`);
}

main().catch((err) => {
  console.error("fatal:", err);
  process.exit(1);
});
