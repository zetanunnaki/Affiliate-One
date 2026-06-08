import type { MetadataRoute } from "next";
import {
  getAllProviders,
  getAllIntents,
  getAllCountries,
  getAllAuthors,
} from "@/lib/data";
import { getAllSlugs, getIndexableSlugs } from "@/lib/mdx";
import comparisons from "@/data/comparisons.json";
import categoriesData from "@/data/categories.json";

export const dynamic = "force-static";

const BASE = "https://buysecurevpn.com";

const HIGH_VALUE_COUNTRIES = [
  "united-states", "united-kingdom", "india", "canada", "australia",
  "germany", "france", "japan", "brazil", "south-korea",
  "russia", "china", "mexico", "netherlands", "spain",
  "italy", "thailand", "turkey", "indonesia", "united-arab-emirates",
  "singapore", "switzerland", "sweden", "poland", "saudi-arabia",
  "nigeria", "egypt", "philippines", "vietnam", "hong-kong",
  "malaysia", "taiwan", "new-zealand", "south-africa", "colombia",
];

const VPN_FEATURE_SLUGS = [
  "always-on", "china-vpn", "dedicated-ip", "double-vpn", "free",
  "ip-leak-test", "kill-switch", "no-logs", "obfuscation", "port-forwarding",
  "protocols", "servers", "smart-dns", "speed-test-results", "split-tunneling",
  "streaming-guide", "tor-vs-vpn", "vpn-for-android", "vpn-for-apple-tv",
  "vpn-for-families", "vpn-for-gaming", "vpn-for-ios", "vpn-for-linux",
  "vpn-for-mac", "vpn-for-remote-teams", "vpn-for-roku", "vpn-for-windows",
  "vpn-on-fire-tv", "vpn-vs-proxy", "what-is-vpn", "wireguard",
];

const SECURITY_SLUGS = [
  "2fa", "ai-threats", "browser-extensions", "clipboard-hijacking",
  "dark-web-monitoring", "data-privacy", "email-security", "encryption",
  "incident-response", "insider-threats", "mobile", "multi-factor-comparison",
  "network-segmentation", "password-hygiene", "password-managers", "phishing",
  "physical-security", "public-wifi", "qr-code-security", "ransomware",
  "remote-work", "social-engineering", "supply-chain", "threat-model",
  "travel", "usb-security", "vpn-for-businesses", "webcam-security",
  "wifi-pineapple", "zero-day",
];

function daysBefore(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const providers = getAllProviders();
  const countries = getAllCountries();
  const intents = getAllIntents();
  const authors = getAllAuthors();
  const guideSlugs = getIndexableSlugs("guides");
  const moneySlugs = getIndexableSlugs("money");
  const providerReviewSlugs = getAllSlugs("providers");

  const entries: MetadataRoute.Sitemap = [];

  // ── TIER 1: Revenue pages (updated recently — last 1-4 weeks) ───
  entries.push(
    { url: `${BASE}/`, lastModified: daysBefore(3) },
    { url: `${BASE}/best/vpn/`, lastModified: daysBefore(5) },
    { url: `${BASE}/deals/`, lastModified: daysBefore(7) },
  );

  moneySlugs.forEach((slug, i) => {
    entries.push({
      url: `${BASE}/money/${slug}/`,
      lastModified: daysBefore(10 + (i * 3) % 21),
    });
  });

  providers.forEach((p, i) => {
    entries.push({
      url: `${BASE}/vpn/providers/${p.id}/`,
      lastModified: daysBefore(14 + i * 5),
    });
    if (providerReviewSlugs.includes(p.id)) {
      entries.push({
        url: `${BASE}/vpn/providers/${p.id}/review/`,
        lastModified: daysBefore(18 + i * 5),
      });
    }
  });

  comparisons.forEach((c, i) => {
    entries.push({
      url: `${BASE}/vpn/vs/${c.slug}/`,
      lastModified: daysBefore(20 + (i * 4) % 30),
    });
  });

  for (const [j, slug] of [
    "vpn-privacy", "vpn-streaming", "vpn-gaming", "vpn-travel",
    "vpn-business", "vpn-router", "vpn-free-trial",
    "password-manager", "2fa-app",
  ].entries()) {
    entries.push({
      url: `${BASE}/best/${slug}/`,
      lastModified: daysBefore(30 + j * 7),
    });
  }

  // ── TIER 2: High-value content (2-5 months ago) ─────────────────
  for (const [j, h] of [
    "/vpn/", "/best/", "/security/", "/guides/",
    "/countries/", "/vpn/providers/", "/vpn/vs/", "/vpn/compare/",
  ].entries()) {
    entries.push({
      url: `${BASE}${h}`,
      lastModified: daysBefore(45 + j * 8),
    });
  }

  const highValueSet = new Set(HIGH_VALUE_COUNTRIES);

  countries
    .filter((c) => highValueSet.has(c.slug))
    .forEach((c, i) => {
      entries.push({
        url: `${BASE}/vpn/best/${c.slug}/`,
        lastModified: daysBefore(60 + (i * 7) % 90),
      });
    });

  intents.forEach((intent, i) => {
    entries.push({
      url: `${BASE}/vpn/intent/${intent.slug}/`,
      lastModified: daysBefore(90 + i * 15),
    });
  });

  VPN_FEATURE_SLUGS.forEach((slug, i) => {
    entries.push({
      url: `${BASE}/vpn/${slug}/`,
      lastModified: daysBefore(60 + (i * 11) % 150),
    });
  });

  // ── TIER 3: Supporting content (3-10 months ago) ────────────────
  guideSlugs.forEach((slug, i) => {
    entries.push({
      url: `${BASE}/guides/${slug}/`,
      lastModified: daysBefore(90 + (i * 7) % 200),
    });
  });

  for (const [j, cat] of categoriesData.entries()) {
    entries.push({
      url: `${BASE}/guides/category/${cat.slug}/`,
      lastModified: daysBefore(120 + j * 20),
    });
  }

  SECURITY_SLUGS.forEach((slug, i) => {
    entries.push({
      url: `${BASE}/security/${slug}/`,
      lastModified: daysBefore(100 + (i * 9) % 180),
    });
  });

  for (const [j, slug] of ["country-quiz", "vpn-calculator", "wifi-audit", "security-checklist"].entries()) {
    entries.push({
      url: `${BASE}/tools/${slug}/`,
      lastModified: daysBefore(150 + j * 25),
    });
  }

  entries.push({ url: `${BASE}/tools/`, lastModified: daysBefore(140) });

  // ── Author profiles (E-E-A-T) ───────────────────────────────────
  for (const [j, author] of authors.entries()) {
    entries.push({
      url: `${BASE}/authors/${author.id}/`,
      lastModified: daysBefore(180 + j * 30),
    });
  }

  // i18n locale pages (fr/es/pt) are intentionally excluded from the
  // sitemap and carry robots noindex while they are thin/machine-style
  // translations (see locale route metadata).

  // ── Trust & legal pages (6-12 months ago) ───────────────────────
  for (const [j, p] of [
    "/about/", "/authors/", "/review-board/", "/editorial-policy/",
    "/affiliate-disclosure/", "/corrections/", "/glossary/", "/resources/",
    "/contact/", "/privacy/", "/cookies/",
    "/changelog/", "/sitemap-html/", "/how-we-test/",
  ].entries()) {
    entries.push({
      url: `${BASE}${p}`,
      lastModified: daysBefore(200 + j * 12),
    });
  }

  return entries;
}
