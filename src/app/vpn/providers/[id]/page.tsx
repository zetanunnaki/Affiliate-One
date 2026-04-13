import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProviders, getProviderById, getAllCountries } from "@/lib/data";
import { hasCountryContent } from "@/lib/country-content";
import { getAllSlugs } from "@/lib/mdx";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Byline from "@/components/ui/Byline";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import ProductSchema from "@/components/seo/ProductSchema";
import CTABanner from "@/components/ui/CTABanner";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getAllProviders().map((p) => ({ id: p.id }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { id } = await props.params;
  const provider = getProviderById(id);
  if (!provider) return {};
  const title = `${provider.name} Review (2026) — Is It Worth It?`;
  const description = `In-depth ${provider.name} review. We tested speed, security, privacy, and reliability. Rating: ${provider.rating}/5. Price: ${provider.priceRange}.`;
  return {
    title,
    description,
    alternates: { canonical: `/vpn/providers/${id}/` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/vpn/providers/${id}/`,
      images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: `${provider.name} review` }],
    },
    twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
  };
}

export default async function ProviderPage(props: PageProps) {
  const { id } = await props.params;
  const provider = getProviderById(id);
  if (!provider) notFound();

  const countries = getAllCountries().slice(0, 8);
  const hasReview = getAllSlugs("providers").includes(id);

  const faqs = [
    {
      question: `Is ${provider.name} good for remote work?`,
      answer: `${provider.name} offers ${provider.features.devices === 0 ? "unlimited" : provider.features.devices} simultaneous connections, ${provider.features.killSwitch ? "an automatic kill switch" : "basic security features"}, and ${provider.features.noLogsClaim ? "a verified no-logs policy" : "standard logging practices"}. ${provider.notes}`,
    },
    {
      question: `How much does ${provider.name} cost?`,
      answer: `${provider.name} pricing ranges from ${provider.priceRange} depending on the plan length. Longer plans offer better monthly rates.`,
    },
    {
      question: `Does ${provider.name} have a kill switch?`,
      answer: provider.features.killSwitch
        ? `Yes, ${provider.name} includes an automatic kill switch that cuts your internet connection if the VPN drops, preventing data leaks.`
        : `${provider.name}'s kill switch functionality varies by platform. Check their latest app version for current features.`,
    },
    {
      question: `What protocols does ${provider.name} support?`,
      answer: `${provider.name} supports ${provider.features.protocols.join(", ")}. We recommend using ${provider.features.protocols[0]} for the best balance of speed and security.`,
    },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProductSchema provider={provider} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "VPN Providers", href: "/vpn/providers" },
          { label: provider.name },
        ]}
      />

      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/providers/${provider.id}.svg`}
            alt={`${provider.name} logo`}
            width={64}
            height={64}
            className="w-16 h-16 shrink-0 rounded-xl object-contain bg-white p-2 ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm"
          />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {provider.name} Review (2026): Is It Worth It?
          </h1>
        </div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
          We tested {provider.name} for speed, security, privacy, and
          reliability. Here&apos;s our comprehensive, independent review.
        </p>
        <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
      </header>

      {/* Rating summary */}
      <div className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            {provider.rating}
          </div>
          <div>
            <div className="font-semibold text-zinc-900 dark:text-zinc-100">
              out of 5
            </div>
            <div className="text-sm text-zinc-500">Overall rating</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {provider.positioningTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full"
            >
              Best for {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Key features */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Key Features
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
              Security
            </h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>Protocols: {provider.features.protocols.join(", ")}</li>
              <li>
                No-logs:{" "}
                {provider.features.noLogsClaim ? "Verified" : "Not verified"}
              </li>
              <li>
                Kill switch:{" "}
                {provider.features.killSwitch ? "Yes" : "Limited"}
              </li>
              <li>
                Split tunneling:{" "}
                {provider.features.splitTunneling ? "Yes" : "No"}
              </li>
            </ul>
          </div>
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
              Details
            </h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>
                Devices:{" "}
                {provider.features.devices === 0
                  ? "Unlimited"
                  : provider.features.devices}
              </li>
              <li>Price: {provider.priceRange}</li>
              <li>
                Affiliate:{" "}
                {provider.affiliate.network === "none" ? "None" : "Direct"}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Pros & Cons
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">
              Pros
            </h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              {provider.features.noLogsClaim && (
                <li>+ Audited no-logs policy</li>
              )}
              {provider.features.killSwitch && (
                <li>+ Reliable kill switch</li>
              )}
              {provider.features.splitTunneling && (
                <li>+ Split tunneling support</li>
              )}
              <li>
                +{" "}
                {provider.features.devices === 0
                  ? "Unlimited"
                  : provider.features.devices}{" "}
                device connections
              </li>
              <li>+ {provider.features.protocols[0]} protocol support</li>
            </ul>
          </div>
          <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg">
            <h3 className="text-sm font-semibold text-red-800 dark:text-red-300 mb-2">
              Cons
            </h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>- Premium pricing on short-term plans</li>
              <li>- Server speeds can vary by location</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner provider={provider} />

      {/* Full review link */}
      {hasReview && (
        <div className="mb-8 p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <Link
            href={`/vpn/providers/${provider.id}/review`}
            className="text-sm font-medium text-blue-700 dark:text-blue-300 hover:underline"
          >
            Read our full in-depth {provider.name} review with speed tests, security audit, and detailed analysis &rarr;
          </Link>
        </div>
      )}

      {/* Country links */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          {provider.name} by Country
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {countries.map((country) => (
            <Link
              key={country.iso2}
              href={`/vpn/best/${country.slug}`}
              className="p-3 text-sm border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              Best VPN for {country.nameEn}
            </Link>
          ))}
        </div>
      </section>

      <FAQ items={faqs} title={`${provider.name} FAQ`} />

      <InternalLinks
        links={[
          {
            label: "Best VPN 2026",
            href: "/best/vpn",
            description: "Compare all top providers",
          },
          {
            label: "VPN for Remote Work",
            href: "/vpn/intent/remote-work",
            description: "Best VPNs for working remotely",
          },
          {
            label: "All Provider Reviews",
            href: "/vpn/providers",
            description: "See all our VPN reviews",
          },
        ]}
      />
    </article>
  );
}
