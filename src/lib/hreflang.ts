/**
 * hreflang infrastructure for multi-language support.
 *
 * Supported locales: en (default), fr, es, pt.
 * Use generateAlternates() in generateMetadata() for each page
 * to emit proper hreflang alternate links.
 */

import { TOP_COUNTRIES } from "@/lib/i18n";

export const SUPPORTED_LOCALES = ["en", "fr", "es"] as const;
export const DEFAULT_LOCALE = "en";
export const BASE_URL = "https://buysecurevpn.com";

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

/** Pages that exist in all locales */
const UNIVERSAL_PATHS = ["/best/vpn/", "/deals/", "/guides/"];

/** Top guide slugs available in all locales */
const I18N_GUIDE_SLUGS = new Set([
  "vpn-setup-beginners", "vpn-protocols-explained", "vpn-speed-optimization",
  "vpn-logging-policies", "digital-nomad-security-kit", "vpn-for-gamers-advanced",
  "travel-esim-guide", "multi-device-security", "password-manager-setup",
  "data-breach-response",
]);

/**
 * Check if a given path has a localized variant for a specific locale.
 */
function hasLocalizedVariant(path: string, locale: SupportedLocale): boolean {
  if (locale === DEFAULT_LOCALE) return true;

  // Universal pages (best/vpn, deals, guides hub)
  if (UNIVERSAL_PATHS.some((p) => path === p || path === p.slice(0, -1))) return true;

  // Country pages: /vpn/best/{slug}/ → /{locale}/vpn/{slug}/
  const countryMatch = path.match(/^\/vpn\/best\/([^/]+)/);
  if (countryMatch) {
    const slug = countryMatch[1];
    return (TOP_COUNTRIES[locale] || []).includes(slug);
  }

  // Guide pages: /guides/{slug}/ → /{locale}/guides/{slug}/
  const guideMatch = path.match(/^\/guides\/([^/]+)/);
  if (guideMatch) {
    return I18N_GUIDE_SLUGS.has(guideMatch[1]);
  }

  return false;
}

/**
 * Generate hreflang alternate links for a given English path.
 */
export function generateAlternates(path: string): {
  canonical: string;
  languages: Record<string, string>;
} {
  const cleanPath = path.endsWith("/") ? path : `${path}/`;
  const canonical = `${BASE_URL}${cleanPath}`;
  const languages: Record<string, string> = {
    "x-default": canonical,
    en: canonical,
  };

  for (const locale of SUPPORTED_LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    if (hasLocalizedVariant(cleanPath, locale)) {
      // Map English path to locale path structure
      let localePath: string;
      const countryMatch = cleanPath.match(/^\/vpn\/best\/([^/]+)\//);
      if (countryMatch) {
        localePath = `/${locale}/vpn/${countryMatch[1]}/`;
      } else {
        localePath = `/${locale}${cleanPath}`;
      }
      languages[locale] = `${BASE_URL}${localePath}`;
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
