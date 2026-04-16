/**
 * Export the BuySecureVPN shield mark to PNG at multiple sizes
 * for social media profile pictures.
 *
 * Run: npx tsx scripts/export-logo.ts
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";

const OUT_DIR = path.join(process.cwd(), "public/images/social");
fs.mkdirSync(OUT_DIR, { recursive: true });

// Full shield mark SVG with blue gradient background circle for social profiles
const shieldSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="shield" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="55%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <linearGradient id="edge" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#93c5fd" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#1e3a8a" stop-opacity="0.6"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="20" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="shadow">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#1e3a8a" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Dark background with subtle noise -->
  <rect width="800" height="800" rx="160" fill="url(#bg)"/>

  <!-- Subtle radial accent -->
  <circle cx="400" cy="350" r="300" fill="#3b82f6" opacity="0.08"/>

  <!-- Shield — centered and scaled up -->
  <g transform="translate(200, 120) scale(10)" filter="url(#shadow)">
    <path d="M 10 3 L 30 3 L 37 10 L 37 23 Q 37 25 35.8 26.5 L 21.2 41.8 Q 20 43 18.8 41.8 L 4.2 26.5 Q 3 25 3 23 L 3 10 Z"
          fill="url(#shield)"/>
    <path d="M 10 3 L 30 3 L 37 10 L 37 23 Q 37 25 35.8 26.5 L 21.2 41.8 Q 20 43 18.8 41.8 L 4.2 26.5 Q 3 25 3 23 L 3 10 Z"
          fill="none" stroke="url(#edge)" stroke-width="0.8"/>
    <path d="M 12 7 L 28 7 L 33 12 L 33 22 L 20 37 L 7 22 L 7 12 Z"
          fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="0.8" stroke-linejoin="round"/>
    <path d="M 12 22 L 18 28 L 29 15"
          stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="14" cy="9" r="1" fill="rgba(255,255,255,0.5)"/>
  </g>

  <!-- Brand name below shield -->
  <text x="400" y="640" text-anchor="middle" font-family="system-ui,-apple-system,'Segoe UI',sans-serif" font-size="52" letter-spacing="-1">
    <tspan fill="#94a3b8" font-weight="500">Buy</tspan><tspan fill="white" font-weight="800">Secure</tspan><tspan fill="#60a5fa" font-weight="900">VPN</tspan>
  </text>
  <text x="400" y="680" text-anchor="middle" font-family="system-ui,-apple-system,'Segoe UI',sans-serif" font-size="22" fill="#64748b" font-weight="600" letter-spacing="4">
    INDEPENDENT VPN REVIEWS
  </text>
</svg>`;

// Shield-only version (no text, for favicon-style tiny icons)
const shieldOnlySvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="sh2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="55%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" rx="80" fill="url(#bg2)"/>
  <circle cx="200" cy="180" r="150" fill="#3b82f6" opacity="0.08"/>
  <g transform="translate(60, 40) scale(7)">
    <path d="M 10 3 L 30 3 L 37 10 L 37 23 Q 37 25 35.8 26.5 L 21.2 41.8 Q 20 43 18.8 41.8 L 4.2 26.5 Q 3 25 3 23 L 3 10 Z"
          fill="url(#sh2)"/>
    <path d="M 12 7 L 28 7 L 33 12 L 33 22 L 20 37 L 7 22 L 7 12 Z"
          fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="0.8" stroke-linejoin="round"/>
    <path d="M 12 22 L 18 28 L 29 15"
          stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </g>
</svg>`;

const sizes = [
  { name: "profile-800.png", svg: shieldSvg, w: 800, h: 800 },
  { name: "profile-400.png", svg: shieldSvg, w: 400, h: 400 },
  { name: "profile-180.png", svg: shieldSvg, w: 180, h: 180 },
  { name: "icon-512.png", svg: shieldOnlySvg, w: 512, h: 512 },
  { name: "icon-192.png", svg: shieldOnlySvg, w: 192, h: 192 },
];

async function main() {
  for (const s of sizes) {
    const buf = Buffer.from(s.svg);
    await sharp(buf)
      .resize(s.w, s.h)
      .png({ quality: 95 })
      .toFile(path.join(OUT_DIR, s.name));
    console.log(`✓ ${s.name} (${s.w}×${s.h})`);
  }
  console.log(`\nDone → ${OUT_DIR}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
