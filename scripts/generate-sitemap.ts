/**
 * Generate static sitemap.xml at build time.
 * Run: npx tsx scripts/generate-sitemap.ts
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BASE_URL = "https://buysecurevpn.com";
const OUT_FILE = path.join(process.cwd(), "public", "sitemap.xml");

function loadJson(relPath: string) {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), relPath), "utf-8"));
}

function getSlugs(subdir: string): string[] {
  const dir = path.join(process.cwd(), "content", subdir);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith(".mdx")).map(f => f.replace(/\.mdx$/, ""));
}

function entry(url: string, priority: string, changefreq: string = "weekly"): string {
  return `  <url><loc>${url}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

function main() {
  const countries = loadJson("src/data/countries.json");
  const providers = loadJson("src/data/providers.json");
  const intents = loadJson("src/data/intents.json");
  const comparisons = loadJson("src/data/comparisons.json");
  const guideSlugs = getSlugs("guides");
  const moneySlugs = getSlugs("money");

  const urls: string[] = [];

  // Static pages
  const statics = [
    ["/", "1.0"], ["/vpn/", "0.9"], ["/security/", "0.9"], ["/countries/", "0.9"],
    ["/best/", "0.8"], ["/best/vpn/", "0.9"], ["/best/password-manager/", "0.8"], ["/best/2fa-app/", "0.8"],
    ["/vpn/providers/", "0.8"], ["/vpn/vs/", "0.7"], ["/vpn/compare/", "0.7"],
    ["/vpn/protocols/", "0.7"], ["/vpn/free/", "0.7"], ["/vpn/what-is-vpn/", "0.7"],
    ["/guides/", "0.8"], ["/resources/", "0.7"], ["/glossary/", "0.6"],
    ["/search/", "0.5"], ["/newsletter/", "0.5"], ["/deals/", "0.7"],
    ["/tools/wifi-audit/", "0.7"], ["/tools/security-checklist/", "0.7"],
    ["/security/remote-work/", "0.8"], ["/security/public-wifi/", "0.8"],
    ["/security/2fa/", "0.8"], ["/security/password-managers/", "0.8"],
    ["/security/travel/", "0.8"], ["/security/phishing/", "0.7"],
    ["/about/", "0.5"], ["/authors/", "0.5"], ["/editorial-policy/", "0.4"],
    ["/affiliate-disclosure/", "0.4"], ["/corrections/", "0.3"],
    ["/privacy/", "0.3"], ["/cookies/", "0.3"], ["/contact/", "0.4"],
    ["/review-board/", "0.4"], ["/changelog/", "0.3"], ["/sitemap-html/", "0.3"],
  ];
  for (const [p, pri] of statics) {
    urls.push(entry(`${BASE_URL}${p}`, pri));
  }

  // Countries
  for (const c of countries) {
    urls.push(entry(`${BASE_URL}/vpn/best/${c.slug}/`, "0.8"));
  }

  // Providers
  for (const p of providers) {
    urls.push(entry(`${BASE_URL}/vpn/providers/${p.id}/`, "0.7"));
  }

  // Provider reviews
  const providerReviewSlugs = getSlugs("providers");
  for (const s of providerReviewSlugs) {
    urls.push(entry(`${BASE_URL}/vpn/providers/${s}/review/`, "0.7"));
  }

  // Intents
  for (const i of intents) {
    urls.push(entry(`${BASE_URL}/vpn/intent/${i.slug}/`, "0.7"));
  }

  // Comparisons
  for (const c of comparisons) {
    urls.push(entry(`${BASE_URL}/vpn/vs/${c.slug}/`, "0.7"));
  }

  // Guides
  for (const s of guideSlugs) {
    urls.push(entry(`${BASE_URL}/guides/${s}/`, "0.7"));
  }

  // Money pages
  for (const s of moneySlugs) {
    urls.push(entry(`${BASE_URL}/money/${s}/`, "0.7"));
  }

  // Categories
  const categories = loadJson("src/data/categories.json");
  for (const c of categories) {
    urls.push(entry(`${BASE_URL}/guides/category/${c.slug}/`, "0.6"));
  }

  // Authors
  const authors = loadJson("src/data/authors.json");
  for (const a of authors) {
    urls.push(entry(`${BASE_URL}/authors/${a.id}/`, "0.4", "monthly"));
  }

  // Country intent variants (top 20 x 5)
  const top20 = countries.slice(0, 20);
  for (const c of top20) {
    for (const i of intents) {
      urls.push(entry(`${BASE_URL}/vpn/best/${c.slug}/${i.slug}/`, "0.6"));
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  fs.writeFileSync(OUT_FILE, sitemap);
  console.log(`Generated sitemap.xml with ${urls.length} URLs.`);
}

main();
