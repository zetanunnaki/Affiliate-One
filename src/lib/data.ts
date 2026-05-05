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
  return (providersData as Provider[]).filter((p) => p.monetized !== false);
}

export function getProviderById(id: string): Provider | undefined {
  return (providersData as Provider[]).find((p) => p.id === id);
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

// Recommended providers for a country — returns the 5 monetized picks.
// NordVPN = Best Overall, Surfshark = Unlimited Devices,
// Proton VPN = Best Privacy, FastestVPN = Best Budget, IPVanish = Best Streaming
export function getRecommendedProviders(country: Country): {
  overall: Provider;
  families: Provider;
  privacy: Provider;
  budget: Provider;
  streaming: Provider;
} {
  const providers = getAllProviders();
  const overall =
    providers.find((p) => p.id === "nordvpn") ||
    providers.find((p) => p.positioningTags.includes("overall")) ||
    providers[0];
  const families =
    providers.find((p) => p.id === "surfshark") ||
    providers.find((p) => p.positioningTags.includes("unlimited-devices")) ||
    providers[1];
  const privacy =
    providers.find((p) => p.id === "protonvpn") ||
    providers.find((p) => p.positioningTags.includes("privacy")) ||
    providers[2];
  const budget =
    providers.find((p) => p.id === "fastestvpn") ||
    providers.find((p) => p.positioningTags.includes("budget")) ||
    providers[3];
  const streaming =
    providers.find((p) => p.id === "ipvanish") ||
    providers.find((p) => p.positioningTags.includes("streaming")) ||
    providers[4];
  return { overall, families, privacy, budget, streaming };
}

/**
 * Get the monetized providers in canonical ranking order.
 * Used by TopVpnPicks and any widget promoting the earning products.
 * Order: NordVPN (overall) → Surfshark (unlimited devices) → Proton VPN (privacy) → FastestVPN (budget) → IPVanish (streaming)
 */
export function getFeaturedProviders(): Provider[] {
  const all = getAllProviders();
  const order = ["nordvpn", "surfshark", "protonvpn", "fastestvpn", "ipvanish"];
  return order
    .map((id) => all.find((p) => p.id === id))
    .filter((p): p is Provider => p !== undefined);
}
