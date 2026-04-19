import type { MetadataRoute } from "next";
import {
  getAllCountries,
  getAllProviders,
  getAllIntents,
} from "@/lib/data";
import { getAllSlugs } from "@/lib/mdx";
import comparisons from "@/data/comparisons.json";
import { TOP_COUNTRIES } from "@/lib/i18n";

export const dynamic = "force-static";

const BASE = "https://buysecurevpn.com";
const now = new Date("2026-04-15").toISOString();

const STATIC_ROUTES: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "/", priority: 1.0, changeFrequency: "daily" },
  { path: "/best/vpn/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/deals/", priority: 0.95, changeFrequency: "daily" },
  { path: "/vpn/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/best/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/security/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/guides/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/countries/", priority: 0.85, changeFrequency: "weekly" },
  { path: "/vpn/providers/", priority: 0.85, changeFrequency: "weekly" },
  { path: "/vpn/vs/", priority: 0.85, changeFrequency: "weekly" },
  { path: "/vpn/free/", priority: 0.85, changeFrequency: "monthly" },
  { path: "/best/vpn-privacy/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/best/vpn-streaming/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/best/vpn-gaming/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/best/vpn-travel/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/best/vpn-business/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/best/vpn-router/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/best/vpn-free-trial/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/best/password-manager/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/best/2fa-app/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/authors/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/editorial-policy/", priority: 0.4, changeFrequency: "yearly" },
  { path: "/affiliate-disclosure/", priority: 0.4, changeFrequency: "yearly" },
  { path: "/privacy/", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms/", priority: 0.3, changeFrequency: "yearly" },
  { path: "/contact/", priority: 0.3, changeFrequency: "yearly" },
  { path: "/about/", priority: 0.5, changeFrequency: "yearly" },
  { path: "/changelog/", priority: 0.3, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const providers = getAllProviders();
  const countries = getAllCountries();
  const intents = getAllIntents();
  const guideSlugs = getAllSlugs("guides");

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const providerEntries: MetadataRoute.Sitemap = providers.map((p) => ({
    url: `${BASE}/vpn/providers/${p.id}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const comparisonEntries: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${BASE}/vpn/vs/${c.slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const countryEntries: MetadataRoute.Sitemap = countries.map((c) => ({
    url: `${BASE}/vpn/best/${c.slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const intentEntries: MetadataRoute.Sitemap = intents.map((i) => ({
    url: `${BASE}/vpn/intent/${i.slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  const guideEntries: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${BASE}/guides/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // i18n locale pages (fr, es, pt)
  const localeEntries: MetadataRoute.Sitemap = [];
  for (const locale of ["fr", "es"] as const) {
    localeEntries.push(
      { url: `${BASE}/${locale}/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
      { url: `${BASE}/${locale}/best/vpn/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
      { url: `${BASE}/${locale}/deals/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
      { url: `${BASE}/${locale}/guides/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    );
    for (const slug of TOP_COUNTRIES[locale]) {
      localeEntries.push({
        url: `${BASE}/${locale}/vpn/${slug}/`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
    for (const slug of ["vpn-setup-beginners","vpn-protocols-explained","vpn-speed-optimization","vpn-logging-policies","digital-nomad-security-kit","vpn-for-gamers-advanced","travel-esim-guide","multi-device-security","password-manager-setup","data-breach-response"]) {
      localeEntries.push({
        url: `${BASE}/${locale}/guides/${slug}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return [
    ...staticEntries,
    ...providerEntries,
    ...comparisonEntries,
    ...countryEntries,
    ...intentEntries,
    ...guideEntries,
    ...localeEntries,
  ];
}
