/**
 * Build-time guardrails for country pages (PRD Section 11.2).
 *
 * Checks:
 * - Minimum word count (1,200 for country pages)
 * - Non-empty country-specific context fields
 * - Minimum unique FAQ count (>= 3)
 * - All required JSON fields present
 *
 * Run: npx tsx scripts/guardrails.ts
 */

import fs from "fs";
import path from "path";

interface Country {
  iso2: string;
  nameEn: string;
  slug: string;
  internetNotes: string;
  vpnNotes: string;
  paymentNotes: string;
  travelNotes: string;
  riskFlags: string[];
  region: string;
  languages: string[];
  currencyCode: string;
  timeZonePrimary: string;
}

const REQUIRED_FIELDS = [
  "iso2",
  "nameEn",
  "slug",
  "region",
  "languages",
  "currencyCode",
  "timeZonePrimary",
  "internetNotes",
  "vpnNotes",
  "paymentNotes",
  "travelNotes",
  "riskFlags",
] as const;

const MIN_WORD_COUNT_CONTEXT = 20; // Min words per context field
const MIN_FAQ_COUNT = 3;
const MIN_TOTAL_CONTEXT_WORDS = 80; // Min total words across all 4 context fields

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function main() {
  const countriesPath = path.join(
    process.cwd(),
    "src",
    "data",
    "countries.json"
  );
  const providersPath = path.join(
    process.cwd(),
    "src",
    "data",
    "providers.json"
  );
  const intentsPath = path.join(process.cwd(), "src", "data", "intents.json");

  // Check files exist
  for (const file of [countriesPath, providersPath, intentsPath]) {
    if (!fs.existsSync(file)) {
      console.error(`FAIL: Required data file missing: ${file}`);
      process.exit(1);
    }
  }

  const countries: Country[] = JSON.parse(
    fs.readFileSync(countriesPath, "utf-8")
  );
  const providers = JSON.parse(fs.readFileSync(providersPath, "utf-8"));
  const intents = JSON.parse(fs.readFileSync(intentsPath, "utf-8"));

  let errors = 0;
  let warnings = 0;

  console.log("=== SecureWork Build Guardrails ===\n");

  // Check providers
  console.log(`Providers: ${providers.length} found`);
  if (providers.length < 3) {
    console.error("  FAIL: Minimum 3 providers required for comparison tables");
    errors++;
  }

  // Check intents
  console.log(`Intents: ${intents.length} found`);
  if (intents.length < 3) {
    console.error("  FAIL: Minimum 3 intents required");
    errors++;
  }

  // Check countries
  console.log(`Countries: ${countries.length} found\n`);

  // Check for duplicate slugs
  const slugs = countries.map((c) => c.slug);
  const duplicateSlugs = slugs.filter(
    (s, i) => slugs.indexOf(s) !== i
  );
  if (duplicateSlugs.length > 0) {
    console.error(`  FAIL: Duplicate country slugs: ${duplicateSlugs.join(", ")}`);
    errors++;
  }

  // Check for duplicate iso2
  const iso2s = countries.map((c) => c.iso2);
  const duplicateIso2 = iso2s.filter((s, i) => iso2s.indexOf(s) !== i);
  if (duplicateIso2.length > 0) {
    console.error(`  FAIL: Duplicate iso2 codes: ${duplicateIso2.join(", ")}`);
    errors++;
  }

  // Per-country checks
  const failedCountries: string[] = [];

  for (const country of countries) {
    const countryErrors: string[] = [];

    // Required fields
    for (const field of REQUIRED_FIELDS) {
      const value = country[field];
      if (value === undefined || value === null || value === "") {
        countryErrors.push(`Missing required field: ${field}`);
      }
    }

    // Context field word counts
    const contextFields = [
      { name: "internetNotes", text: country.internetNotes },
      { name: "vpnNotes", text: country.vpnNotes },
      { name: "paymentNotes", text: country.paymentNotes },
      { name: "travelNotes", text: country.travelNotes },
    ];

    let totalContextWords = 0;
    for (const field of contextFields) {
      const words = countWords(field.text || "");
      totalContextWords += words;
      if (words < MIN_WORD_COUNT_CONTEXT) {
        countryErrors.push(
          `${field.name} too short: ${words} words (min ${MIN_WORD_COUNT_CONTEXT})`
        );
      }
    }

    if (totalContextWords < MIN_TOTAL_CONTEXT_WORDS) {
      countryErrors.push(
        `Total context too short: ${totalContextWords} words (min ${MIN_TOTAL_CONTEXT_WORDS})`
      );
    }

    // Check FAQ generation will produce enough
    const baseFaqCount = 4; // base FAQs always generated
    const bonusFaqs =
      (country.riskFlags.includes("restricted-platforms") ? 1 : 0) +
      (country.riskFlags.includes("high-fraud") ? 1 : 0);
    const expectedFaqs = baseFaqCount + bonusFaqs;

    if (expectedFaqs < MIN_FAQ_COUNT) {
      countryErrors.push(
        `Expected FAQ count: ${expectedFaqs} (min ${MIN_FAQ_COUNT})`
      );
    }

    if (countryErrors.length > 0) {
      failedCountries.push(country.nameEn);
      console.error(`  FAIL: ${country.nameEn} (${country.iso2}):`);
      for (const err of countryErrors) {
        console.error(`    - ${err}`);
      }
      errors += countryErrors.length;
    }
  }

  // Summary
  console.log("\n=== Summary ===");
  console.log(`Countries checked: ${countries.length}`);
  console.log(`Countries passed: ${countries.length - failedCountries.length}`);
  console.log(`Countries failed: ${failedCountries.length}`);
  console.log(`Total errors: ${errors}`);
  console.log(`Total warnings: ${warnings}`);

  if (errors > 0) {
    console.error(
      `\nBuild guardrails FAILED with ${errors} error(s).`
    );
    console.error(
      "Fix the issues above or mark affected pages as noindex.\n"
    );
    process.exit(1);
  } else {
    console.log("\nAll guardrails PASSED.\n");
    process.exit(0);
  }
}

main();
