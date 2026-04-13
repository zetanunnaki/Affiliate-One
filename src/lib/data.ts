import countriesData from "@/data/countries.json";
import providersData from "@/data/providers.json";
import intentsData from "@/data/intents.json";
import authorsData from "@/data/authors.json";
import type { Country, Provider, Intent, Author } from "@/types";

// Countries
export function getAllCountries(): Country[] {
  return countriesData as Country[];
}

export function getCountryBySlug(slug: string): Country | undefined {
  return getAllCountries().find((c) => c.slug === slug);
}

export function getCountryByIso2(iso2: string): Country | undefined {
  return getAllCountries().find((c) => c.iso2 === iso2);
}

export function getCountriesByRegion(region: string): Country[] {
  return getAllCountries().filter((c) => c.region === region);
}

export function getAllRegions(): string[] {
  return [...new Set(getAllCountries().map((c) => c.region))];
}

// Providers
export function getAllProviders(): Provider[] {
  return providersData as Provider[];
}

export function getProviderById(id: string): Provider | undefined {
  return getAllProviders().find((p) => p.id === id);
}

export function getProvidersByTag(tag: string): Provider[] {
  return getAllProviders().filter((p) => p.positioningTags.includes(tag));
}

/**
 * Resolve the affiliate URL for a provider, preferring country-specific
 * overrides when the reader is on a country page. Falls back to the
 * default trackingBaseUrl.
 *
 * Example: NordVPN has a dedicated Korean affiliate link that pays more
 * for Korean traffic — this returns that link on /vpn/best/south-korea/
 * but the global link everywhere else.
 */
export function getProviderAffiliateUrl(
  provider: Provider,
  countrySlug?: string
): string {
  if (countrySlug && provider.affiliate.countryOverrides?.[countrySlug]) {
    return provider.affiliate.countryOverrides[countrySlug];
  }
  return provider.affiliate.trackingBaseUrl;
}

// Intents
export function getAllIntents(): Intent[] {
  return intentsData as Intent[];
}

export function getIntentBySlug(slug: string): Intent | undefined {
  return getAllIntents().find((i) => i.slug === slug);
}

export function getProvidersForIntent(intentSlug: string): Provider[] {
  const intent = getIntentBySlug(intentSlug);
  if (!intent) return [];
  return intent.recommendedProviders
    .map((id) => getProviderById(id))
    .filter((p): p is Provider => p !== undefined);
}

// Authors
export function getAllAuthors(): Author[] {
  return authorsData as Author[];
}

export function getAuthorById(id: string): Author | undefined {
  return getAllAuthors().find((a) => a.id === id);
}

// Recommended providers for a country (based on risk flags + positioning)
export function getRecommendedProviders(country: Country): {
  overall: Provider;
  budget: Provider;
  travel: Provider;
} {
  const providers = getAllProviders();
  const overall =
    providers.find((p) => p.positioningTags.includes("overall")) ||
    providers[0];
  const budget =
    providers.find((p) => p.positioningTags.includes("budget")) || providers[1];
  const travel =
    providers.find((p) => p.positioningTags.includes("travel")) || providers[2];
  return { overall, budget, travel };
}
