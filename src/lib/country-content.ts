import { getPostBySlug, getAllSlugs } from "@/lib/mdx";

/**
 * Check if a country has editorial MDX content.
 */
export function hasCountryContent(countrySlug: string): boolean {
  return getAllSlugs("countries").includes(countrySlug);
}

/**
 * Get the editorial MDX content for a country, if it exists.
 */
export function getCountryContent(countrySlug: string) {
  return getPostBySlug("countries", countrySlug);
}
