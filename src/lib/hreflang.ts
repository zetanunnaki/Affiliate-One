/**
 * hreflang infrastructure for multi-language support.
 *
 * Currently English-only but structured for future expansion.
 * When adding a new language:
 * 1. Add the locale to SUPPORTED_LOCALES
 * 2. Create content in the locale's subdirectory (e.g., /es/...)
 * 3. Use generateAlternates() in page metadata
 */

export const SUPPORTED_LOCALES = ["en"] as const;
export const DEFAULT_LOCALE = "en";
export const BASE_URL = "https://buysecurevpn.com";

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export interface AlternateLink {
  hrefLang: string;
  href: string;
}

/**
 * Generate hreflang alternate links for a given path.
 * Used in generateMetadata() for each page.
 */
export function generateAlternates(path: string): {
  canonical: string;
  languages: Record<string, string>;
} {
  const canonical = `${BASE_URL}${path}`;
  const languages: Record<string, string> = {
    "x-default": canonical,
  };

  for (const locale of SUPPORTED_LOCALES) {
    if (locale === DEFAULT_LOCALE) {
      languages[locale] = canonical;
    } else {
      languages[locale] = `${BASE_URL}/${locale}${path}`;
    }
  }

  return { canonical, languages };
}

/**
 * Get the localized path for a given path and locale.
 */
export function getLocalizedPath(path: string, locale: SupportedLocale): string {
  if (locale === DEFAULT_LOCALE) return path;
  return `/${locale}${path}`;
}
