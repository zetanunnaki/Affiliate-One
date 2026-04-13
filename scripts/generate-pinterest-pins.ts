/**
 * Pinterest Pin Generator — composites brand-styled text overlays onto
 * existing AI-generated hero images. Outputs 1000×1500 (2:3) PNG + WebP.
 *
 * Design system:
 *  - Deep navy/blue overlay gradient for legibility
 *  - Top eyebrow pill with category
 *  - Huge extrabold title (80-100px)
 *  - Supporting subtitle
 *  - Brand stamp (shield mark + BuySecureVPN wordmark) at bottom
 *  - Blue accent bar
 *
 * Sizing follows Pinterest best practices: 1000×1500, ≥2.5x viewport text
 * for mobile thumbnails, high contrast, 3-7 word title.
 *
 * Run: npx tsx scripts/generate-pinterest-pins.ts
 */

import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, "public", "images", "pins");
const IMAGES = path.join(ROOT, "public", "images");

const PIN_WIDTH = 1000;
const PIN_HEIGHT = 1500;

interface PinConfig {
  slug: string;
  background: string; // relative to public/images/
  category: string;
  title: string[];    // array = explicit line breaks
  subtitle: string;
  url: string;        // short URL shown at bottom
}

const pins: PinConfig[] = [
  {
    slug: "best-vpn-2026",
    background: "illustrations/hero-vpn-desk.webp",
    category: "VPN Guide",
    title: ["Best VPN", "2026"],
    subtitle: "Expert-tested & independently reviewed",
    url: "buysecurevpn.com/best/vpn",
  },
  {
    slug: "public-wifi-dangers",
    background: "illustrations/hero-airport-wifi.webp",
    category: "Security",
    title: ["5 Public Wi-Fi", "Dangers"],
    subtitle: "What hackers target on hotel & airport networks",
    url: "buysecurevpn.com/security/public-wifi",
  },
  {
    slug: "remote-work-security",
    background: "illustrations/hero-home-office.webp",
    category: "Remote Work",
    title: ["Remote Work", "Security Kit"],
    subtitle: "The 45-item checklist every nomad needs",
    url: "buysecurevpn.com/tools/security-checklist",
  },
  {
    slug: "hotel-wifi-mistakes",
    background: "illustrations/guide-hotel-wifi.webp",
    category: "Travel",
    title: ["Hotel Wi-Fi", "Mistakes"],
    subtitle: "Stop making these 7 costly errors",
    url: "buysecurevpn.com/guides/wifi-security-hotel-airport",
  },
  {
    slug: "digital-nomad-kit",
    background: "illustrations/guide-digital-nomad.webp",
    category: "Digital Nomad",
    title: ["Digital Nomad", "Security Kit"],
    subtitle: "Everything you need to work from anywhere",
    url: "buysecurevpn.com/guides/digital-nomad-security-kit",
  },
  {
    slug: "password-manager-setup",
    background: "illustrations/guide-passwords.webp",
    category: "Passwords",
    title: ["Password Setup", "in 15 Minutes"],
    subtitle: "Never reuse a password again",
    url: "buysecurevpn.com/guides/password-manager-setup",
  },
  {
    slug: "vpn-beginners",
    background: "illustrations/guide-mobile-vpn.webp",
    category: "Beginner",
    title: ["VPN Setup", "for Beginners"],
    subtitle: "Step-by-step in 5 minutes",
    url: "buysecurevpn.com/guides/vpn-setup-beginners",
  },
  {
    slug: "best-vpn-usa",
    background: "countries/united-states.webp",
    category: "USA",
    title: ["Best VPN", "for USA"],
    subtitle: "Our top picks tested from coast to coast",
    url: "buysecurevpn.com/vpn/best/united-states",
  },
  {
    slug: "best-vpn-japan",
    background: "countries/japan.webp",
    category: "Japan",
    title: ["Best VPN", "for Japan"],
    subtitle: "Anime, banking, travel — all covered",
    url: "buysecurevpn.com/vpn/best/japan",
  },
  {
    slug: "router-security",
    background: "illustrations/guide-router.webp",
    category: "Home Network",
    title: ["Secure Your", "Router TODAY"],
    subtitle: "10 settings most people never change",
    url: "buysecurevpn.com/guides/router-security-guide",
  },
  {
    slug: "data-breach-response",
    background: "illustrations/guide-data.webp",
    category: "Incident",
    title: ["Data Breach?", "Do This First"],
    subtitle: "The 5-step response plan that actually works",
    url: "buysecurevpn.com/guides/data-breach-response",
  },
  {
    slug: "vpn-for-travel",
    background: "countries/italy.webp",
    category: "Travel",
    title: ["Travel VPN", "Essentials"],
    subtitle: "What to pack before your next trip",
    url: "buysecurevpn.com/security/travel",
  },
];

/**
 * Escape XML special characters for safe SVG embedding.
 */
function xml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Build the SVG text overlay that gets composited on top of the background.
 * Includes: dark gradient, category pill, multi-line title, subtitle,
 * brand stamp (shield mark + wordmark), and blue accent bar.
 */
function buildOverlay(pin: PinConfig): string {
  const titleSize = pin.title.length >= 2 ? 110 : 130;
  const lineHeight = titleSize * 1.05;
  // Title baseline for first line. Pill sits at y=470 with height 48 (bottom=518).
  // For a font-size X, we need baseline ≈ pill_bottom + 40 + 0.8*X to avoid overlap.
  const titleStartY = 518 + 40 + Math.round(titleSize * 0.8) + (pin.title.length === 1 ? 20 : 0);

  const titleLines = pin.title
    .map(
      (line, i) =>
        `<text x="60" y="${titleStartY + i * lineHeight}" class="title">${xml(line)}</text>`
    )
    .join("\n");

  return `<svg width="${PIN_WIDTH}" height="${PIN_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="darkGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a" stop-opacity="0.35"/>
      <stop offset="45%" stop-color="#0f172a" stop-opacity="0.70"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="0.95"/>
    </linearGradient>
    <linearGradient id="topGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="pillGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="55%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <style>
      .title {
        font-family: -apple-system, "Segoe UI", Roboto, sans-serif;
        font-weight: 900;
        font-size: ${titleSize}px;
        fill: white;
        letter-spacing: -4px;
        paint-order: stroke;
        stroke: rgba(0,0,0,0.25);
        stroke-width: 2px;
      }
      .subtitle {
        font-family: -apple-system, "Segoe UI", Roboto, sans-serif;
        font-weight: 500;
        font-size: 34px;
        fill: #e2e8f0;
        letter-spacing: -0.5px;
      }
      .category {
        font-family: -apple-system, "Segoe UI", Roboto, sans-serif;
        font-weight: 800;
        font-size: 22px;
        fill: white;
        letter-spacing: 3px;
        text-transform: uppercase;
      }
      .brand {
        font-family: -apple-system, "Segoe UI", Roboto, sans-serif;
        font-weight: 900;
        font-size: 28px;
        fill: white;
        letter-spacing: -0.5px;
      }
      .url {
        font-family: -apple-system, "Segoe UI", Roboto, sans-serif;
        font-weight: 600;
        font-size: 22px;
        fill: #93c5fd;
        letter-spacing: 0.3px;
      }
    </style>
  </defs>

  <!-- Top fade -->
  <rect x="0" y="0" width="${PIN_WIDTH}" height="260" fill="url(#topGrad)"/>

  <!-- Bottom dark gradient (main text area) -->
  <rect x="0" y="420" width="${PIN_WIDTH}" height="${PIN_HEIGHT - 420}" fill="url(#darkGrad)"/>

  <!-- Top-right brand stamp (small) -->
  <g transform="translate(850, 50)">
    <rect x="0" y="0" width="110" height="50" rx="25" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
    <text x="55" y="33" text-anchor="middle" class="category" style="font-size: 18px; letter-spacing: 2px;">BSVPN</text>
  </g>

  <!-- Category pill (top-left on main content area) -->
  ${(() => {
    const text = pin.category.toUpperCase();
    // Per-char width for font-size 22 bold with letter-spacing 3: ~17px
    const charW = 17;
    const padX = 28;
    const pillW = padX * 2 + text.length * charW;
    return `<g transform="translate(60, 470)">
    <rect x="0" y="0" width="${pillW}" height="48" rx="24" fill="url(#pillGrad)"/>
    <text x="${pillW / 2}" y="31" text-anchor="middle" class="category">${xml(text)}</text>
  </g>`;
  })()}

  <!-- Title (multi-line) -->
  ${titleLines}

  <!-- Subtitle -->
  <text x="60" y="${titleStartY + pin.title.length * lineHeight + 30}" class="subtitle">
    <tspan x="60" dy="0">${xml(pin.subtitle)}</tspan>
  </text>

  <!-- Blue accent bar above brand footer -->
  <rect x="60" y="1320" width="120" height="6" rx="3" fill="#3b82f6"/>

  <!-- Brand footer: shield mark + wordmark + URL -->
  <g transform="translate(60, 1355)">
    <!-- Shield mark (scaled 2x) -->
    <g transform="scale(1.8)">
      <path d="M 10 3 L 30 3 L 37 10 L 37 23 Q 37 25 35.8 26.5 L 21.2 41.8 Q 20 43 18.8 41.8 L 4.2 26.5 Q 3 25 3 23 L 3 10 Z"
            fill="url(#shieldGrad)"/>
      <path d="M 12 22 L 18 28 L 29 15"
            stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>
    <text x="90" y="55" class="brand">
      <tspan fill="#cbd5e1" font-weight="500">Buy</tspan><tspan fill="white" font-weight="900">Secure</tspan><tspan fill="#60a5fa" font-weight="900">VPN</tspan>
    </text>
    <text x="90" y="82" class="url">${xml(pin.url)}</text>
  </g>
</svg>`;
}

async function generatePin(pin: PinConfig): Promise<{ pngBytes: number; webpBytes: number }> {
  const bgPath = path.join(IMAGES, pin.background);
  if (!fs.existsSync(bgPath)) {
    throw new Error(`background not found: ${pin.background}`);
  }

  // Step 1: load background, resize to 1000×1500 cover, slight darken + blur edges
  const background = await sharp(bgPath)
    .resize(PIN_WIDTH, PIN_HEIGHT, { fit: "cover", position: "center" })
    .modulate({ saturation: 1.1, brightness: 0.92 })
    .toBuffer();

  // Step 2: build SVG overlay with text + gradients
  const overlaySvg = Buffer.from(buildOverlay(pin));

  // Step 3: composite
  const composited = await sharp(background)
    .composite([{ input: overlaySvg, top: 0, left: 0 }])
    .toBuffer();

  // Step 4: output PNG (Pinterest preferred) + WebP (for site use)
  const pngPath = path.join(OUTPUT, `${pin.slug}.png`);
  const webpPath = path.join(OUTPUT, `${pin.slug}.webp`);

  await sharp(composited).png({ quality: 90, compressionLevel: 9 }).toFile(pngPath);
  await sharp(composited).webp({ quality: 88 }).toFile(webpPath);

  const pngBytes = fs.statSync(pngPath).size;
  const webpBytes = fs.statSync(webpPath).size;
  return { pngBytes, webpBytes };
}

async function main() {
  fs.mkdirSync(OUTPUT, { recursive: true });

  console.log("=== BuySecureVPN — Pinterest Pin Generator ===");
  console.log(`Output: ${path.relative(ROOT, OUTPUT)}`);
  console.log(`Pins: ${pins.length}\n`);

  let success = 0;
  let totalBytes = 0;

  for (let i = 0; i < pins.length; i++) {
    const pin = pins[i];
    const label = `[${(i + 1).toString().padStart(2)}/${pins.length}] ${pin.slug}`;
    try {
      const { pngBytes, webpBytes } = await generatePin(pin);
      totalBytes += pngBytes;
      console.log(
        `${label.padEnd(30)} ✓ ${(pngBytes / 1024).toFixed(0).padStart(4)} KB png, ${(webpBytes / 1024).toFixed(0).padStart(3)} KB webp`
      );
      success++;
    } catch (err) {
      console.log(`${label.padEnd(30)} ✗ ${(err as Error).message}`);
    }
  }

  // Write a manifest JSON for easy reference
  const manifest = pins.map((p) => ({
    slug: p.slug,
    title: p.title.join(" "),
    subtitle: p.subtitle,
    category: p.category,
    targetUrl: `https://${p.url}`,
    png: `/images/pins/${p.slug}.png`,
    webp: `/images/pins/${p.slug}.webp`,
  }));
  fs.writeFileSync(path.join(OUTPUT, "manifest.json"), JSON.stringify(manifest, null, 2));

  console.log(`\n=== Done ===`);
  console.log(`  ✓ ${success} / ${pins.length} pins generated`);
  console.log(`  Total PNG size: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
  console.log(`  Manifest: public/images/pins/manifest.json`);
}

main().catch((err) => {
  console.error("fatal:", err);
  process.exit(1);
});
