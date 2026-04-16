/**
 * Generate favicons and apple-touch-icon from the shield SVG.
 * Run: npx tsx scripts/generate-favicons.ts
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";

const OUT = path.join(process.cwd(), "public");

const shieldSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="sh" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="55%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>
  <circle cx="256" cy="230" r="200" fill="#3b82f6" opacity="0.08"/>
  <g transform="translate(76, 56) scale(9)">
    <path d="M 10 3 L 30 3 L 37 10 L 37 23 Q 37 25 35.8 26.5 L 21.2 41.8 Q 20 43 18.8 41.8 L 4.2 26.5 Q 3 25 3 23 L 3 10 Z" fill="url(#sh)"/>
    <path d="M 12 7 L 28 7 L 33 12 L 33 22 L 20 37 L 7 22 L 7 12 Z" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="0.8" stroke-linejoin="round"/>
    <path d="M 12 22 L 18 28 L 29 15" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </g>
</svg>`;

const sizes = [
  { name: "favicon-32x32.png", size: 32 },
  { name: "favicon-16x16.png", size: 16 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];

async function main() {
  const buf = Buffer.from(shieldSvg);
  for (const s of sizes) {
    await sharp(buf).resize(s.size, s.size).png().toFile(path.join(OUT, s.name));
    console.log(`✓ ${s.name}`);
  }

  // Also create favicon.ico from 32px PNG
  const ico32 = await sharp(buf).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(OUT, "favicon.ico"), ico32);
  console.log("✓ favicon.ico");

  console.log("\nDone → public/");
}

main().catch((e) => { console.error(e); process.exit(1); });
