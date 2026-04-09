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
const MODEL = "google/imagen4-fast"; // cheapest text-to-image tier
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
];

// ── API helpers ────────────────────────────────────────────────────────────
async function createTask(job: ImageJob): Promise<string> {
  const res = await fetch(CREATE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      input: {
        prompt: job.prompt,
        aspect_ratio: job.aspectRatio,
        num_images: "1",
      },
    }),
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
