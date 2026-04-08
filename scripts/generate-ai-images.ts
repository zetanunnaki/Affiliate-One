/**
 * Generate photorealistic images using Google Gemini API (Imagen 3).
 *
 * Generates:
 * - Author headshots (professional portraits)
 * - Hero images for landing pages
 * - Contextual images for guides
 *
 * Run: npx tsx scripts/generate-ai-images.ts
 * Requires: GEMINI_API_KEY environment variable
 */

import fs from "fs";
import path from "path";

const API_KEY = process.env.GEMINI_API_KEY || "AIzaSyD1jtZMIbUP3QoFNcsptZhqNXzTtl76vJs";
const ROOT = process.cwd();

// Camera/quality suffix for all prompts
const CAMERA = "Shot on 35mm lens, DSLR, f/1.8 aperture, shallow depth of field";
const LIGHTING = "Natural sunlight, soft studio lighting, cinematic lighting";
const QUALITY = "Photorealistic, hyper-detailed, 8k, unedited photograph, raw photo";
const NEGATIVE = "Do NOT produce an illustration, painting, 3D render, digital art, cartoon, or plastic texture. This must look like an unedited real photograph.";

function buildPrompt(subject: string): string {
  return `${subject}. ${CAMERA}. ${LIGHTING}. ${QUALITY}. ${NEGATIVE}`;
}

interface ImageJob {
  prompt: string;
  outputPath: string;
  alt: string;
  aspectRatio: string;
}

const jobs: ImageJob[] = [
  // --- Author Headshots ---
  {
    prompt: buildPrompt("Professional corporate headshot portrait of a young Asian-American woman in her early 30s, confident smile, wearing a navy blazer over a white blouse, against a clean blurred office background, warm skin tones, editorial magazine quality portrait photography"),
    outputPath: "public/images/authors/sarah-chen.png",
    alt: "Sarah Chen — Lead Security Editor at BuySecureVPN",
    aspectRatio: "1:1",
  },
  {
    prompt: buildPrompt("Professional corporate headshot portrait of a Black British man in his mid 30s, friendly approachable expression, short beard, wearing a dark gray suit jacket and open-collar shirt, against a softly blurred modern office background, warm tones, editorial portrait photography"),
    outputPath: "public/images/authors/marcus-johnson.png",
    alt: "Marcus Johnson — VPN & Privacy Analyst at BuySecureVPN",
    aspectRatio: "1:1",
  },
  {
    prompt: buildPrompt("Professional corporate headshot portrait of a Latina woman in her late 20s, warm genuine smile, long dark hair, wearing a teal blouse, against a blurred coworking space background with natural light from a window, editorial portrait photography"),
    outputPath: "public/images/authors/elena-rodriguez.png",
    alt: "Elena Rodriguez — Travel Security Writer at BuySecureVPN",
    aspectRatio: "1:1",
  },

  // --- Hero Images ---
  {
    prompt: buildPrompt("A young professional working on a MacBook laptop at a modern minimalist cafe table, coffee beside them, large windows with natural light streaming in, the laptop screen shows a VPN shield lock icon glowing blue, the person looks focused and confident, cozy warm atmosphere, golden hour light"),
    outputPath: "public/images/illustrations/hero-remote-work.png",
    alt: "Remote worker using VPN at a cafe — BuySecureVPN",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt("Close-up overhead shot of a laptop keyboard and screen on a wooden desk, the screen displays a glowing blue shield with a checkmark icon representing VPN security, beside the laptop is a smartphone and a cup of coffee, warm ambient desk lighting, professional workspace flatlay photography"),
    outputPath: "public/images/illustrations/hero-vpn-desk.png",
    alt: "VPN security on laptop — BuySecureVPN workspace",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt("A person sitting at an airport gate lounge, using their smartphone, free public wifi sign visible in the soft background blur, the phone screen shows a VPN connected status with a shield icon, travel bags beside them, large airport windows with aircraft visible, natural daylight"),
    outputPath: "public/images/illustrations/hero-airport-wifi.png",
    alt: "Using VPN on public airport WiFi — BuySecureVPN travel security",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt("Professional photograph of a modern home office desk setup, dual monitors showing encrypted data visualizations in blue tones, mechanical keyboard, a small plant, clean cable management, soft warm LED desk lighting against a dark background, minimalist productive workspace"),
    outputPath: "public/images/illustrations/hero-home-office.png",
    alt: "Secure home office setup — BuySecureVPN remote work security",
    aspectRatio: "16:9",
  },

  // --- Contextual / Guide Images ---
  {
    prompt: buildPrompt("Close-up of hands typing on a laptop keyboard in a dimly lit hotel room, the laptop screen emitting a blue glow, a hotel key card and travel passport visible on the desk beside it, moody atmospheric travel photography"),
    outputPath: "public/images/illustrations/guide-hotel-wifi.png",
    alt: "Working from hotel room with VPN — BuySecureVPN hotel security guide",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt("A smartphone screen showing a VPN app interface with a large green Connected button and a shield icon, the phone is held in a persons hand, blurred busy coffee shop background with warm bokeh lights, lifestyle mobile photography"),
    outputPath: "public/images/illustrations/guide-mobile-vpn.png",
    alt: "VPN connected on smartphone — BuySecureVPN mobile security",
    aspectRatio: "9:16",
  },
  {
    prompt: buildPrompt("Overhead flatlay photograph of cybersecurity essentials on a dark desk: a YubiKey hardware security key, a smartphone showing an authenticator app, a laptop with a password manager open, a small notebook with a pen, clean organized arrangement, professional product photography"),
    outputPath: "public/images/illustrations/guide-security-tools.png",
    alt: "Essential security tools for remote workers — BuySecureVPN",
    aspectRatio: "16:9",
  },
  {
    prompt: buildPrompt("A digital nomad working on a laptop at a beachside wooden table with a tropical ocean view in the background, palm trees, the laptop has stickers on it, relaxed but productive atmosphere, warm tropical golden hour sunlight, travel lifestyle photography"),
    outputPath: "public/images/illustrations/guide-digital-nomad.png",
    alt: "Digital nomad working remotely with VPN protection — BuySecureVPN",
    aspectRatio: "16:9",
  },
];

async function generateImage(job: ImageJob): Promise<boolean> {
  // Use gemini-2.5-flash-image which supports image generation via generateContent
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

  const body = {
    contents: [{
      parts: [{ text: `Generate a photorealistic image: ${job.prompt}` }]
    }],
    generationConfig: {
      responseModalities: ["IMAGE", "TEXT"],
      responseMimeType: "text/plain",
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error(`  ERROR (${response.status}): ${errText.slice(0, 300)}`);
      return false;
    }

    const data = await response.json();

    // Extract image from Gemini response
    const candidates = data.candidates;
    if (candidates && candidates.length > 0) {
      const parts = candidates[0].content?.parts || [];
      const imagePart = parts.find((p: any) => p.inlineData?.mimeType?.startsWith("image/"));
      if (imagePart) {
        const b64 = imagePart.inlineData.data;
        const buffer = Buffer.from(b64, "base64");
        const outPath = path.join(ROOT, job.outputPath);
        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.writeFileSync(outPath, buffer);
        console.log(`  SAVED: ${job.outputPath} (${(buffer.length / 1024).toFixed(0)}KB)`);
        return true;
      }
    }
    console.error(`  No image in response for: ${job.outputPath}`);
    return false;
  } catch (err) {
    console.error(`  FETCH ERROR for ${job.outputPath}: ${err}`);
    return false;
  }
}

async function main() {
  console.log("=== BuySecureVPN AI Image Generator ===");
  console.log(`API Key: ${API_KEY.slice(0, 10)}...`);
  console.log(`Jobs: ${jobs.length} images to generate\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    console.log(`[${i + 1}/${jobs.length}] Generating: ${path.basename(job.outputPath)}...`);

    const ok = await generateImage(job);
    if (ok) success++;
    else failed++;

    // Rate limit: wait 2s between requests
    if (i < jobs.length - 1) {
      await new Promise((r) => setTimeout(r, 2000));
    }
  }

  console.log(`\n=== Done ===`);
  console.log(`  Success: ${success}`);
  console.log(`  Failed:  ${failed}`);
  console.log(`  Total:   ${jobs.length}`);

  // Generate alt text manifest for SEO
  const manifest = jobs.map((j) => ({
    path: j.outputPath.replace("public/", "/"),
    alt: j.alt,
    aspectRatio: j.aspectRatio,
  }));
  fs.writeFileSync(
    path.join(ROOT, "public", "images", "manifest.json"),
    JSON.stringify(manifest, null, 2)
  );
  console.log(`\n  Image manifest saved: public/images/manifest.json`);
}

main().catch(console.error);
