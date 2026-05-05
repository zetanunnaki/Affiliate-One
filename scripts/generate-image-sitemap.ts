/**
 * Generate static image sitemap at build time.
 * Run: npx tsx scripts/generate-image-sitemap.ts
 */
import fs from "fs";
import path from "path";

const BASE_URL = "https://buysecurevpn.com";
const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "images");
const OUT_FILE = path.join(PUBLIC_DIR, "image-sitemap.xml");

/* ── helpers ─────────────────────────────────────────────────────── */

function slugToTitle(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function listWebpImages(dir: string): string[] {
  const full = path.join(IMAGES_DIR, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".webp"))
    .filter((f) => !f.match(/-\d+w\.webp$/)); // skip responsive variants
}

interface ImageEntry {
  pageUrl: string;
  imageLoc: string;
  imageTitle: string;
}

/* ── country images → /vpn/best/{slug}/ ──────────────────────────── */

function countryEntries(): ImageEntry[] {
  return listWebpImages("countries").map((file) => {
    const slug = file.replace(/\.webp$/, "");
    return {
      pageUrl: `${BASE_URL}/vpn/best/${slug}/`,
      imageLoc: `${BASE_URL}/images/countries/${file}`,
      imageTitle: `Best VPN for ${slugToTitle(slug)} 2026`,
    };
  });
}

/* ── author images → /authors/{id}/ ──────────────────────────────── */

function authorEntries(): ImageEntry[] {
  return listWebpImages("authors").map((file) => {
    const id = file.replace(/\.webp$/, "");
    return {
      pageUrl: `${BASE_URL}/authors/${id}/`,
      imageLoc: `${BASE_URL}/images/authors/${file}`,
      imageTitle: `${slugToTitle(id)} – VPN Security Expert`,
    };
  });
}

/* ── OG images → section pages ───────────────────────────────────── */

const OG_MAP: Record<string, { url: string; title: string }> = {
  "og-vpn": { url: "/best/vpn/", title: "Best VPN Services 2026" },
  "og-guides": { url: "/guides/", title: "VPN & Security Guides" },
  "og-security": { url: "/security/", title: "Online Security Resources" },
  "og-countries": { url: "/countries/", title: "VPN by Country" },
  "og-travel": { url: "/security/travel/", title: "Travel Security Guide" },
  "og-default": { url: "/", title: "BuySecureVPN – Expert VPN Reviews" },
};

function ogEntries(): ImageEntry[] {
  return listWebpImages("og")
    .map((file) => {
      const key = file.replace(/\.webp$/, "");
      const mapping = OG_MAP[key];
      if (!mapping) return null;
      return {
        pageUrl: `${BASE_URL}${mapping.url}`,
        imageLoc: `${BASE_URL}/images/og/${file}`,
        imageTitle: mapping.title,
      };
    })
    .filter((e): e is ImageEntry => e !== null);
}

/* ── illustration images → /guides/ (hero images for guide pages) ── */

function illustrationEntries(): ImageEntry[] {
  return listWebpImages("illustrations")
    .filter((f) => !f.startsWith("og-")) // skip OG variants in illustrations/
    .map((file) => {
      const slug = file.replace(/\.webp$/, "");
      const label = slug
        .replace(/^guide-/, "")
        .replace(/^hero-/, "");
      return {
        pageUrl: `${BASE_URL}/guides/`,
        imageLoc: `${BASE_URL}/images/illustrations/${file}`,
        imageTitle: `${slugToTitle(label)} – Security Guide Illustration`,
      };
    });
}

/* ── provider logos → /vpn/providers/{id}/ ─────────────────────────── */

function providerEntries(): ImageEntry[] {
  const full = path.join(IMAGES_DIR, "providers");
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".svg"))
    .map((file) => {
      const id = file.replace(/\.svg$/, "");
      return {
        pageUrl: `${BASE_URL}/vpn/providers/${id}/`,
        imageLoc: `${BASE_URL}/images/providers/${file}`,
        imageTitle: `${slugToTitle(id)} Logo`,
      };
    });
}

/* ── pin images → mapped to relevant guide/security pages ──────────── */

const PIN_MAP: Record<string, { url: string; title: string }> = {
  "best-vpn-2026": { url: "/best/vpn/", title: "Best VPN Services 2026" },
  "public-wifi-dangers": { url: "/security/public-wifi/", title: "Public Wi-Fi Security Dangers" },
  "remote-work-security": { url: "/security/remote-work/", title: "Remote Work Security Guide" },
  "hotel-wifi-mistakes": { url: "/guides/wifi-security-hotel-airport/", title: "Hotel Wi-Fi Security Mistakes" },
  "digital-nomad-kit": { url: "/guides/digital-nomad-security-kit/", title: "Digital Nomad Security Kit" },
  "password-manager-setup": { url: "/guides/password-manager-setup/", title: "Password Manager Setup Guide" },
  "vpn-beginners": { url: "/guides/vpn-setup-beginners/", title: "VPN for Beginners" },
  "best-vpn-usa": { url: "/vpn/best/united-states/", title: "Best VPN for USA" },
  "best-vpn-japan": { url: "/vpn/best/japan/", title: "Best VPN for Japan" },
  "router-security": { url: "/guides/router-security-guide/", title: "Router Security Guide" },
  "data-breach-response": { url: "/guides/data-breach-response/", title: "Data Breach Response Guide" },
  "vpn-for-travel": { url: "/security/travel/", title: "VPN for Travel" },
};

function pinEntries(): ImageEntry[] {
  return listWebpImages("pins")
    .map((file) => {
      const key = file.replace(/\.webp$/, "");
      const mapping = PIN_MAP[key];
      if (!mapping) return null;
      return {
        pageUrl: `${BASE_URL}${mapping.url}`,
        imageLoc: `${BASE_URL}/images/pins/${file}`,
        imageTitle: mapping.title,
      };
    })
    .filter((e): e is ImageEntry => e !== null);
}

/* ── social cover images → section pages ───────────────────────────── */

const SOCIAL_MAP: Record<string, { url: string; title: string }> = {
  "cover-facebook": { url: "/", title: "BuySecureVPN – Facebook Cover" },
  "cover-twitter": { url: "/", title: "BuySecureVPN – Twitter Cover" },
  "cover-linkedin": { url: "/", title: "BuySecureVPN – LinkedIn Cover" },
  "cover-youtube": { url: "/", title: "BuySecureVPN – YouTube Cover" },
  "cover-pinterest": { url: "/countries/", title: "BuySecureVPN – Pinterest Cover" },
};

function socialEntries(): ImageEntry[] {
  return listWebpImages("social")
    .map((file) => {
      const key = file.replace(/\.webp$/, "");
      const mapping = SOCIAL_MAP[key];
      if (!mapping) return null;
      return {
        pageUrl: `${BASE_URL}${mapping.url}`,
        imageLoc: `${BASE_URL}/images/social/${file}`,
        imageTitle: mapping.title,
      };
    })
    .filter((e): e is ImageEntry => e !== null);
}

/* ── build XML ───────────────────────────────────────────────────── */

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildXml(entries: ImageEntry[]): string {
  // Group entries by page URL so each <url> can have multiple <image:image>
  const grouped = new Map<string, ImageEntry[]>();
  for (const e of entries) {
    const list = grouped.get(e.pageUrl) || [];
    list.push(e);
    grouped.set(e.pageUrl, list);
  }

  const urlBlocks: string[] = [];
  for (const [pageUrl, images] of grouped) {
    const imageBlocks = images
      .map(
        (img) =>
          `    <image:image>\n      <image:loc>${escapeXml(img.imageLoc)}</image:loc>\n      <image:title>${escapeXml(img.imageTitle)}</image:title>\n    </image:image>`
      )
      .join("\n");
    urlBlocks.push(
      `  <url>\n    <loc>${escapeXml(pageUrl)}</loc>\n${imageBlocks}\n  </url>`
    );
  }

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`,
    ...urlBlocks,
    `</urlset>`,
    ``,
  ].join("\n");
}

/* ── main ────────────────────────────────────────────────────────── */

function main() {
  const entries: ImageEntry[] = [
    ...countryEntries(),
    ...authorEntries(),
    ...ogEntries(),
    ...illustrationEntries(),
    ...providerEntries(),
    ...pinEntries(),
    ...socialEntries(),
  ];

  const xml = buildXml(entries);
  fs.writeFileSync(OUT_FILE, xml, "utf-8");

  // Stats
  const grouped = new Map<string, number>();
  for (const e of entries) {
    grouped.set(e.pageUrl, (grouped.get(e.pageUrl) || 0) + 1);
  }
  console.log(`Image sitemap generated: ${OUT_FILE}`);
  console.log(`  ${entries.length} images across ${grouped.size} pages`);
  console.log(
    `  Countries: ${countryEntries().length}, Authors: ${authorEntries().length}, OG: ${ogEntries().length}, Illustrations: ${illustrationEntries().length}, Providers: ${providerEntries().length}, Pins: ${pinEntries().length}, Social: ${socialEntries().length}`
  );
}

main();
