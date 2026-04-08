// Country data model
export interface Country {
  iso2: string;
  iso3: string;
  nameEn: string;
  slug: string;
  region: string;
  languages: string[];
  currencyCode: string;
  timeZonePrimary: string;
  internetNotes: string;
  vpnNotes: string;
  paymentNotes: string;
  travelNotes: string;
  riskFlags: RiskFlag[];
}

export type RiskFlag =
  | "censorship"
  | "high-fraud"
  | "restricted-platforms"
  | "tourist-wifi";

// VPN Provider data model
export interface Provider {
  id: string;
  name: string;
  website: string;
  affiliate: {
    network: string;
    trackingBaseUrl: string;
    disclosureLabel: string;
  };
  features: {
    protocols: string[];
    noLogsClaim: boolean;
    killSwitch: boolean;
    splitTunneling: boolean;
    devices: number; // 0 = unlimited
  };
  positioningTags: string[];
  notes: string;
  rating: number;
  priceRange: string;
}

// Intent data model
export interface Intent {
  id: string;
  label: string;
  slug: string;
  description: string;
  recommendedProviders: string[];
}

// Author data model
export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  location: string;
  headshot: string;
  sameAs: string[];
}

// MDX Frontmatter
export interface PostFrontmatter {
  title: string;
  description: string;
  updatedAt: string;
  author: string;
  category: string;
  countryIso2?: string;
  intent?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  toc?: boolean;
  citations?: string[];
  adsEnabled?: boolean;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// FAQ
export interface FAQItem {
  question: string;
  answer: string;
}

// Comparison table row
export interface ComparisonRow {
  provider: Provider;
  bestFor: string;
  keyFeatures: string;
  countryNotes: string;
}
