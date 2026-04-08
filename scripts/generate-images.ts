/**
 * Generate SVG image assets for BuySecureVPN.
 *
 * Creates:
 * - Author headshot SVGs (3)
 * - Provider logo SVGs (5)
 * - Hero illustration SVGs (3)
 *
 * For Gemini AI image generation, run separately with Python + google-genai.
 *
 * Run: npx tsx scripts/generate-images.ts
 */

import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const AUTHORS_DIR = path.join(ROOT, "public", "images", "authors");
const PROVIDERS_DIR = path.join(ROOT, "public", "images", "providers");
const ILLUSTRATIONS_DIR = path.join(ROOT, "public", "images", "illustrations");

// Ensure directories
for (const dir of [AUTHORS_DIR, PROVIDERS_DIR, ILLUSTRATIONS_DIR]) {
  fs.mkdirSync(dir, { recursive: true });
}

// --- Author Headshots ---
const authors = [
  { name: "Sarah Chen", role: "Lead Security Editor", color: "#2563eb", file: "sarah-chen.svg" },
  { name: "Marcus Johnson", role: "VPN & Privacy Analyst", color: "#059669", file: "marcus-johnson.svg" },
  { name: "Elena Rodriguez", role: "Travel Security Writer", color: "#d97706", file: "elena-rodriguez.svg" },
];

for (const a of authors) {
  const initials = a.name.split(" ").map(w => w[0]).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <title>${a.name} — ${a.role} at BuySecureVPN</title>
  <desc>Professional headshot of ${a.name}, ${a.role}. Expert security writer and VPN reviewer.</desc>
  <rect width="200" height="200" rx="100" fill="${a.color}"/>
  <defs>
    <radialGradient id="g_${initials}" cx="50%" cy="35%" r="55%">
      <stop offset="0%" stop-color="white" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="white" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="200" height="200" rx="100" fill="url(#g_${initials})"/>
  <circle cx="100" cy="75" r="36" fill="white" opacity="0.92"/>
  <ellipse cx="100" cy="172" rx="52" ry="42" fill="white" opacity="0.92"/>
  <text x="100" y="88" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" font-size="32" font-weight="700" fill="${a.color}" opacity="0.5">${initials}</text>
</svg>`;
  fs.writeFileSync(path.join(AUTHORS_DIR, a.file), svg);
  console.log(`  Author: ${a.file}`);
}

// --- Provider Logos ---
interface ProviderLogo {
  name: string;
  primary: string;
  accent: string;
  file: string;
  iconPath: string;
}

const providers: ProviderLogo[] = [
  {
    name: "NordVPN", primary: "#4687ff", accent: "#1a3a6b", file: "nordvpn.svg",
    iconPath: '<path d="M50 15L15 30V55C15 80 50 95 50 95C50 95 85 80 85 55V30L50 15Z" fill="#4687ff" stroke="#1a3a6b" stroke-width="2"/><path d="M38 52L47 61L65 43" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
  },
  {
    name: "Surfshark", primary: "#1fc8b0", accent: "#0d7a6a", file: "surfshark.svg",
    iconPath: '<circle cx="50" cy="50" r="33" fill="none" stroke="#1fc8b0" stroke-width="3"/><ellipse cx="50" cy="50" rx="15" ry="33" fill="none" stroke="#1fc8b0" stroke-width="2"/><line x1="17" y1="50" x2="83" y2="50" stroke="#1fc8b0" stroke-width="2"/><line x1="50" y1="17" x2="50" y2="83" stroke="#1fc8b0" stroke-width="2"/>'
  },
  {
    name: "ExpressVPN", primary: "#da3940", accent: "#8b1a1f", file: "expressvpn.svg",
    iconPath: '<rect x="30" y="45" width="40" height="35" rx="4" fill="#da3940"/><path d="M37 45V35C37 27 43 20 50 20C57 20 63 27 63 35V45" stroke="#da3940" stroke-width="4" fill="none"/><circle cx="50" cy="60" r="5" fill="white"/>'
  },
  {
    name: "Proton VPN", primary: "#6d4aff", accent: "#3d2a8f", file: "protonvpn.svg",
    iconPath: '<circle cx="40" cy="42" r="18" fill="none" stroke="#6d4aff" stroke-width="3"/><line x1="55" y1="55" x2="80" y2="80" stroke="#6d4aff" stroke-width="3"/><line x1="70" y1="70" x2="78" y2="62" stroke="#6d4aff" stroke-width="3"/><line x1="75" y1="75" x2="83" y2="67" stroke="#6d4aff" stroke-width="3"/>'
  },
  {
    name: "Mullvad", primary: "#294d73", accent: "#1a3350", file: "mullvad.svg",
    iconPath: '<ellipse cx="50" cy="50" rx="30" ry="20" fill="none" stroke="#294d73" stroke-width="3"/><circle cx="50" cy="50" r="10" fill="#294d73"/><circle cx="50" cy="50" r="4" fill="white"/>'
  },
];

for (const p of providers) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 60" width="220" height="60">
  <title>${p.name} — VPN Provider reviewed by BuySecureVPN</title>
  <desc>${p.name} logo. Independent VPN review on BuySecureVPN.com.</desc>
  <g transform="translate(5,2) scale(0.56)">${p.iconPath}</g>
  <text x="52" y="38" font-family="system-ui,-apple-system,sans-serif" font-size="18" font-weight="700" fill="${p.primary}">${p.name}</text>
</svg>`;
  fs.writeFileSync(path.join(PROVIDERS_DIR, p.file), svg);
  console.log(`  Provider: ${p.file}`);
}

// --- Hero / OG Illustrations ---
const heroes = [
  { title: "BuySecureVPN — Work Securely From Anywhere", subtitle: "Independent VPN reviews and security guides for remote workers", file: "og-default.svg" },
  { title: "Best VPN 2026", subtitle: "Expert-tested and independently reviewed", file: "og-best-vpn.svg" },
  { title: "VPN Country Guide", subtitle: "Coverage for 200+ countries worldwide", file: "og-countries.svg" },
];

for (const h of heroes) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <title>${h.title}</title>
  <desc>${h.subtitle}</desc>
  <defs>
    <linearGradient id="hbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a5f"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="sg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#hbg)"/>
  <circle cx="900" cy="200" r="180" fill="#1e40af" opacity="0.12"/>
  <circle cx="1050" cy="420" r="120" fill="#3b82f6" opacity="0.08"/>
  <circle cx="180" cy="480" r="100" fill="#1e40af" opacity="0.08"/>
  <g transform="translate(520, 120) scale(2.8)">
    <path d="M32 5L5 18V42C5 65 32 80 32 80C32 80 59 65 59 42V18L32 5Z" fill="url(#sg)" stroke="#60a5fa" stroke-width="1.2"/>
    <path d="M20 40L29 49L46 32" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <text x="600" y="400" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" font-size="52" font-weight="700" fill="white">BuySecureVPN</text>
  <text x="600" y="450" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" font-size="22" fill="#94a3b8">${h.subtitle}</text>
  <g opacity="0.15" stroke="#60a5fa" stroke-width="1" fill="#60a5fa">
    <circle cx="140" cy="140" r="3"/><circle cx="280" cy="90" r="2.5"/><circle cx="90" cy="280" r="2.5"/>
    <circle cx="1060" cy="140" r="3"/><circle cx="1110" cy="290" r="2.5"/><circle cx="960" cy="490" r="2.5"/>
    <line x1="140" y1="140" x2="280" y2="90" stroke="#60a5fa"/><line x1="140" y1="140" x2="90" y2="280" stroke="#60a5fa"/>
    <line x1="1060" y1="140" x2="1110" y2="290" stroke="#60a5fa"/><line x1="1110" y1="290" x2="960" y2="490" stroke="#60a5fa"/>
  </g>
</svg>`;
  fs.writeFileSync(path.join(ILLUSTRATIONS_DIR, h.file), svg);
  console.log(`  Hero: ${h.file}`);
}

// --- Gemini AI Generation ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (GEMINI_API_KEY) {
  console.log("\nGEMINI_API_KEY found. To generate AI images, run the Python script:");
  console.log("  python scripts/generate-images.py");
} else {
  console.log("\nGEMINI_API_KEY not set. SVG assets generated successfully.");
  console.log("To generate AI raster images, set GEMINI_API_KEY and run the Python script.");
}

console.log(`\n=== Done ===`);
console.log(`  ${authors.length} author headshots`);
console.log(`  ${providers.length} provider logos`);
console.log(`  ${heroes.length} hero illustrations`);
console.log(`  All SVGs include <title> and <desc> for SEO/accessibility.`);
