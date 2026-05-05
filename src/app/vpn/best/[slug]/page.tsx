import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { customMDXComponents } from "@/lib/mdx-custom-components";
import {
  getAllCountries,
  getCountryBySlug,
  getAllProviders,
  getRecommendedProviders,
} from "@/lib/data";
import { generateCountryFAQs } from "@/lib/country-faqs";
import { generateAlternates } from "@/lib/hreflang";
import { getCountryContent } from "@/lib/country-content";
import CountryBestVpnLayout from "@/components/layouts/CountryBestVpnLayout";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCountries().map((country) => ({
    slug: country.slug,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const country = getCountryBySlug(slug);
  if (!country) return {};

  const alternates = generateAlternates(`/vpn/best/${slug}`);

  // Use country-specific hero if available, otherwise fall back to OG countries banner
  const COUNTRIES_WITH_HERO = new Set([
    "united-states","united-kingdom","germany","france","japan","australia",
    "canada","brazil","india","mexico","spain","italy","netherlands","sweden",
    "singapore","south-korea","switzerland","poland","turkey","argentina",
  ]);
  const ogImage = COUNTRIES_WITH_HERO.has(slug)
    ? `/images/countries/${slug}.webp`
    : "/images/og/og-countries.webp";

  return {
    title: `Best VPN for ${country.nameEn} (2026): Remote Work Security & Privacy`,
    description: `Compare the top VPN services for ${country.nameEn}. Expert-tested recommendations for remote work, travel, and online privacy in ${country.nameEn}.`,
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    openGraph: {
      title: `Best VPN for ${country.nameEn} (2026)`,
      description: `Expert-tested VPN recommendations for ${country.nameEn}. Compare NordVPN, Proton VPN, FastestVPN, and more.`,
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 675, alt: `Best VPN for ${country.nameEn}` }],
    },
    twitter: { card: "summary_large_image", images: [ogImage] },
  };
}

export default async function CountryBestVpnPage(props: PageProps) {
  const { slug } = await props.params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  const providers = getRecommendedProviders(country);
  const allProviders = getAllProviders();
  const faqs = generateCountryFAQs(country);

  // Render editorial MDX content if available
  let editorialContent: React.ReactNode = null;
  const countryPost = getCountryContent(slug);
  if (countryPost) {
    const { content } = await compileMDX({
      source: countryPost.content,
      components: customMDXComponents,
      options: { parseFrontmatter: false, mdxOptions: { remarkPlugins: [remarkGfm] } },
    });
    editorialContent = content;
  }

  return (
    <CountryBestVpnLayout
      country={country}
      providers={providers}
      faqs={faqs}
      allProviders={allProviders}
      editorialContent={editorialContent}
    />
  );
}
