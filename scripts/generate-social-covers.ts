/**
 * Generate social media cover images via kie.ai.
 *
 * Creates editorial-quality backgrounds for:
 * - Twitter/X banner: 1500×500
 * - LinkedIn banner: 1584×396
 * - Facebook cover: 820×312
 * - YouTube banner: 2560×1440
 * - Pinterest board cover: 800×450
 * - OG default: 1200×675
 *
 * Run: npx tsx scripts/generate-social-covers.ts
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const envPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (m) process.env[m[1]] ??= m[2].trim();
  }
}

const API_KEY = process.env.KIE_API_KEY;
if (!API_KEY) { console.error("KIE_API_KEY not set"); process.exit(1); }

const MODEL = process.env.KIE_MODEL || "seedream/5-lite-text-to-image";
const CREATE_URL = "https://api.kie.ai/api/v1/jobs/createTask";
const STATUS_URL = "https://api.kie.ai/api/v1/jobs/recordInfo";
const OUT_DIR = path.join(process.cwd(), "public/images/social");
fs.mkdirSync(OUT_DIR, { recursive: true });

interface CoverJob {
  name: string;
  prompt: string;
  width: number;
  height: number;
  aspectRatio: string;
}

const STYLE = "clean editorial photography, shallow depth of field, natural warm light, no text, no overlays, no digital effects, professional magazine quality, soft bokeh background";

const jobs: CoverJob[] = [
  {
    name: "cover-twitter",
    prompt: `Wide panoramic photo of a modern home office desk with a laptop, coffee cup, warm morning light streaming through floor-to-ceiling windows, city skyline visible outside, clean desk setup. ${STYLE}`,
    width: 1500, height: 500,
    aspectRatio: "16:9",
  },
  {
    name: "cover-linkedin",
    prompt: `Wide panoramic photo of a professional co-working space, person working on laptop at a clean wooden desk, large window with a leafy green courtyard visible, natural daylight, contemporary minimalist interior. ${STYLE}`,
    width: 1584, height: 396,
    aspectRatio: "16:9",
  },
  {
    name: "cover-facebook",
    prompt: `Wide panoramic photo of a traveler working on a laptop at a cafe terrace overlooking a Mediterranean coastal town, blue sea in background, golden hour light, relaxed professional atmosphere. ${STYLE}`,
    width: 820, height: 312,
    aspectRatio: "16:9",
  },
  {
    name: "cover-youtube",
    prompt: `Wide cinematic photo of a modern cybersecurity operations center, multiple monitors showing network dashboards (no readable text), blue ambient lighting, clean desk setup, professional tech environment. ${STYLE}`,
    width: 2560, height: 1440,
    aspectRatio: "16:9",
  },
  {
    name: "cover-pinterest",
    prompt: `Overhead flat-lay of a digital nomad travel kit on a white marble surface: laptop, passport, noise-cancelling headphones, smartphone, travel adapter, coffee cup, small succulent plant. ${STYLE}`,
    width: 800, height: 450,
    aspectRatio: "16:9",
  },
];

async function createTask(prompt: string, ar: string): Promise<string> {
  const input: Record<string, unknown> = {
    prompt,
    aspect_ratio: ar,
  };
  if (MODEL.startsWith("seedream/")) {
    input.quality = "basic";
  } else {
    input.num_images = "1";
  }

  const res = await fetch(CREATE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}` },
    body: JSON.stringify({ model: MODEL, input }),
  });
  if (!res.ok) throw new Error(`createTask HTTP ${res.status}: ${await res.text()}`);
  const data = await res.json();
  if (data.code !== 200) throw new Error(`createTask: ${data.msg}`);
  return data.data.taskId as string;
}

async function pollResult(taskId: string): Promise<string> {
  for (let i = 0; i < 120; i++) {
    await new Promise((r) => setTimeout(r, 4000));
    const res = await fetch(`${STATUS_URL}?taskId=${taskId}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    if (!res.ok) throw new Error(`pollResult HTTP ${res.status}`);
    const data = await res.json();
    if (data.code !== 200) throw new Error(`pollResult: ${data.msg}`);
    const state = data.data?.state;
    if (state === "success") {
      // URLs can be in resultUrls, result.urls, or inside resultJson string
      let urls = data.data?.resultUrls;
      if (!urls && data.data?.resultJson) {
        try {
          const parsed = JSON.parse(data.data.resultJson);
          urls = parsed.resultUrls || parsed.urls;
        } catch { /* ignore */ }
      }
      if (urls?.[0]) return urls[0];
      throw new Error(`No URL in result`);
    }
    if (state === "failed") throw new Error(`Task failed: ${data.data?.failMsg || "unknown"}`);
    process.stdout.write(".");
  }
  throw new Error("Timeout");
}

async function downloadImage(url: string, outPath: string, w: number, h: number) {
  const res = await fetch(url);
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf)
    .resize(w, h, { fit: "cover" })
    .png({ quality: 90 })
    .toFile(outPath.replace(/\.webp$/, ".png"));
  await sharp(buf)
    .resize(w, h, { fit: "cover" })
    .webp({ quality: 85 })
    .toFile(outPath);
  return outPath;
}

async function main() {
  console.log(`Model: ${MODEL}\n`);

  for (const job of jobs) {
    const outWebp = path.join(OUT_DIR, `${job.name}.webp`);
    if (fs.existsSync(outWebp)) {
      console.log(`⏭ ${job.name} exists, skipping`);
      continue;
    }
    process.stdout.write(`⏳ ${job.name} (${job.width}×${job.height})`);
    try {
      const taskId = await createTask(job.prompt, job.aspectRatio);
      const url = await pollResult(taskId);
      await downloadImage(url, outWebp, job.width, job.height);
      console.log(` ✓`);
    } catch (e: any) {
      console.log(` ✗ ${e.message}`);
    }
  }

  console.log(`\nDone → ${OUT_DIR}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
