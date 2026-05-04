import type { MetadataRoute } from "next";
import {
  getAllProviders,
  getAllIntents,
  getAllCountries,
  getAllAuthors,
} from "@/lib/data";
import { getAllSlugs } from "@/lib/mdx";
import comparisons from "@/data/comparisons.json";
import categoriesData from "@/data/categories.json";
import { TOP_COUNTRIES } from "@/lib/i18n";

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

const COUNTRIES_WITH_INTENTS = HIGH_VALUE_COUNTRIES.slice(0, 20);
const INTENT_SLUGS = ["privacy", "remote-work", "streaming", "teams", "travel"];

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
  const guideSlugs = getAllSlugs("guides");
  const moneySlugs = getAllSlugs("money");

  const entries: MetadataRoute.Sitemap = [];

  // ── TIER 1: Revenue pages ────────────────────────────────────────
  entries.push(
    { url: `${BASE}/`, lastModified: daysBefore(0) },
    { url: `${BASE}/best/vpn/`, lastModified: daysBefore(0) },
    { url: `${BASE}/deals/`, lastModified: daysBefore(0) },
  );

  moneySlugs.forEach((slug, i) => {
    entries.push({
      url: `${BASE}/money/${slug}/`,
      lastModified: daysBefore(1 + (i % 7)),
    });
  });

  providers.forEach((p, i) => {
    entries.push({
      url: `${BASE}/vpn/providers/${p.id}/`,
      lastModified: daysBefore(1 + i * 2),
    });
  });

  comparisons.forEach((c, i) => {
    entries.push({
      url: `${BASE}/vpn/vs/${c.slug}/`,
      lastModified: daysBefore(2 + (i % 5)),
    });
  });

  for (const slug of [
    "vpn-privacy", "vpn-streaming", "vpn-gaming", "vpn-travel",
    "vpn-business", "vpn-router", "vpn-free-trial",
    "password-manager", "2fa-app",
  ]) {
    entries.push({
      url: `${BASE}/best/${slug}/`,
      lastModified: daysBefore(3),
    });
  }

  // ── TIER 2: High-value content ───────────────────────────────────
  for (const h of [
    "/vpn/", "/best/", "/security/", "/guides/",
    "/countries/", "/vpn/providers/", "/vpn/vs/", "/vpn/compare/",
  ]) {
    entries.push({
      url: `${BASE}${h}`,
      lastModified: daysBefore(2),
    });
  }

  const highValueSet = new Set(HIGH_VALUE_COUNTRIES);
  const intentCountrySet = new Set(COUNTRIES_WITH_INTENTS);

  countries
    .filter((c) => highValueSet.has(c.slug))
    .forEach((c, i) => {
      entries.push({
        url: `${BASE}/vpn/best/${c.slug}/`,
        lastModified: daysBefore(5 + (i % 10)),
      });
      if (intentCountrySet.has(c.slug)) {
        for (const intent of INTENT_SLUGS) {
          entries.push({
            url: `${BASE}/vpn/best/${c.slug}/${intent}/`,
            lastModified: daysBefore(7 + (i % 12)),
          });
        }
      }
    });

  intents.forEach((intent, i) => {
    entries.push({
      url: `${BASE}/vpn/intent/${intent.slug}/`,
      lastModified: daysBefore(5 + i),
    });
  });

  VPN_FEATURE_SLUGS.forEach((slug, i) => {
    entries.push({
      url: `${BASE}/vpn/${slug}/`,
      lastModified: daysBefore(8 + (i % 14)),
    });
  });

  // ── TIER 3: Supporting content ───────────────────────────────────
  guideSlugs.forEach((slug, i) => {
    entries.push({
      url: `${BASE}/guides/${slug}/`,
      lastModified: daysBefore(5 + (i % 20)),
    });
  });

  for (const cat of categoriesData) {
    entries.push({
      url: `${BASE}/guides/category/${cat.slug}/`,
      lastModified: daysBefore(10),
    });
  }

  SECURITY_SLUGS.forEach((slug, i) => {
    entries.push({
      url: `${BASE}/security/${slug}/`,
      lastModified: daysBefore(10 + (i % 15)),
    });
  });

  for (const slug of ["country-quiz", "vpn-calculator", "wifi-audit", "security-checklist"]) {
    entries.push({
      url: `${BASE}/tools/${slug}/`,
      lastModified: daysBefore(15),
    });
  }

  entries.push({ url: `${BASE}/tools/`, lastModified: daysBefore(10) });

  // ── Author profiles (E-E-A-T) ───────────────────────────────────
  for (const author of authors) {
    entries.push({
      url: `${BASE}/authors/${author.id}/`,
      lastModified: daysBefore(10),
    });
  }

  // ── i18n locales ─────────────────────────────────────────────────
  for (const locale of ["fr", "es", "pt"] as const) {
    entries.push(
      { url: `${BASE}/${locale}/`, lastModified: daysBefore(3) },
      { url: `${BASE}/${locale}/best/vpn/`, lastModified: daysBefore(3) },
      { url: `${BASE}/${locale}/deals/`, lastModified: daysBefore(4) },
      { url: `${BASE}/${locale}/guides/`, lastModified: daysBefore(5) },
    );
    for (const slug of TOP_COUNTRIES[locale]) {
      entries.push({
        url: `${BASE}/${locale}/vpn/${slug}/`,
        lastModified: daysBefore(7),
      });
    }
    for (const slug of [
      "vpn-setup-beginners", "vpn-protocols-explained", "vpn-speed-optimization",
      "vpn-logging-policies", "digital-nomad-security-kit", "vpn-for-gamers-advanced",
      "travel-esim-guide", "multi-device-security", "password-manager-setup", "data-breach-response",
    ]) {
      entries.push({
        url: `${BASE}/${locale}/guides/${slug}/`,
        lastModified: daysBefore(10),
      });
    }
  }

  // ── Trust & legal pages ──────────────────────────────────────────
  for (const p of [
    "/about/", "/authors/", "/review-board/", "/editorial-policy/",
    "/affiliate-disclosure/", "/corrections/", "/glossary/", "/resources/",
    "/contact/", "/privacy/", "/terms/", "/cookies/",
    "/changelog/", "/sitemap-html/",
  ]) {
    entries.push({
      url: `${BASE}${p}`,
      lastModified: daysBefore(20),
    });
  }

  return entries;
}
