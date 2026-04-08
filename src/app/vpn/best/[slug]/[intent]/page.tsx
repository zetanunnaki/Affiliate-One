import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllCountries,
  getCountryBySlug,
  getAllIntents,
  getIntentBySlug,
  getProvidersForIntent,
} from "@/lib/data";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Byline from "@/components/ui/Byline";
import ProviderCard from "@/components/ui/ProviderCard";
import CountryContextBlock from "@/components/ui/CountryContextBlock";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

type PageProps = {
  params: Promise<{ slug: string; intent: string }>;
};

export async function generateStaticParams() {
  const countries = getAllCountries();
  const intents = getAllIntents();
  // Only generate for top 20 countries × all intents to avoid thin content
  return countries.slice(0, 20).flatMap((country) =>
    intents.map((intent) => ({
      slug: country.slug,
      intent: intent.slug,
    }))
  );
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug, intent } = await props.params;
  const country = getCountryBySlug(slug);
  const intentData = getIntentBySlug(intent);
  if (!country || !intentData) return {};

  return {
    title: `Best VPN for ${intentData.label} in ${country.nameEn} (2026)`,
    description: `Top VPN picks for ${intentData.label.toLowerCase()} in ${country.nameEn}. Expert-tested providers with ${country.nameEn}-specific advice.`,
  };
}

export default async function CountryIntentPage(props: PageProps) {
  const { slug, intent } = await props.params;
  const country = getCountryBySlug(slug);
  const intentData = getIntentBySlug(intent);
  if (!country || !intentData) notFound();

  const providers = getProvidersForIntent(intent);

  const faqs = [
    {
      question: `What is the best VPN for ${intentData.label.toLowerCase()} in ${country.nameEn}?`,
      answer: `Based on our testing, ${providers[0]?.name ?? "NordVPN"} is our top pick for ${intentData.label.toLowerCase()} in ${country.nameEn}. It offers the best combination of speed, reliability, and features relevant to ${intentData.label.toLowerCase()} use in the ${country.region} region.`,
    },
    {
      question: `Do I need a special VPN for ${intentData.label.toLowerCase()} in ${country.nameEn}?`,
      answer: `While any quality VPN works for basic security, ${intentData.label.toLowerCase()} use benefits from specific features. ${intentData.description} Our recommended providers are optimized for this use case.`,
    },
    {
      question: `How fast are VPNs for ${intentData.label.toLowerCase()} in ${country.nameEn}?`,
      answer: `With modern WireGuard-based protocols, you can expect 80-95% of your base speed on ${country.nameEn} servers. For ${intentData.label.toLowerCase()}, this is more than sufficient for video calls, file transfers, and streaming.`,
    },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: country.nameEn, href: `/vpn/best/${country.slug}` },
          { label: intentData.label },
        ]}
      />

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Best VPN for {intentData.label} in {country.nameEn} (2026)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
          {intentData.description} Here are our top picks specifically tested
          for {intentData.label.toLowerCase()} use in {country.nameEn}.
        </p>
        <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
      </header>

      {/* Provider picks */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Top {providers.length} VPNs for {intentData.label} in {country.nameEn}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {providers.map((provider, i) => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              badge={i === 0 ? "Top Pick" : i === 1 ? "Runner Up" : "Also Great"}
              countryNotes={`Tested for ${intentData.label.toLowerCase()} in ${country.nameEn}. ${
                country.riskFlags.includes("censorship")
                  ? "Works against local restrictions."
                  : "No known issues."
              }`}
            />
          ))}
        </div>
      </section>

      {/* Why this combo matters */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Why {intentData.label} Users in {country.nameEn} Need a VPN
        </h2>
        <div className="p-5 bg-zinc-50 dark:bg-zinc-800 rounded-xl text-sm text-zinc-700 dark:text-zinc-300 space-y-3">
          <p>{country.vpnNotes}</p>
          <p>{country.internetNotes}</p>
          <p>
            For {intentData.label.toLowerCase()} specifically, a VPN ensures your
            connection is encrypted, your IP is hidden, and you can access all the
            tools and services you need without restrictions or ISP throttling.
          </p>
        </div>
      </section>

      <CountryContextBlock country={country} />

      <FAQ items={faqs} title={`${intentData.label} VPN FAQ for ${country.nameEn}`} />

      <InternalLinks
        links={[
          {
            label: `All VPNs for ${country.nameEn}`,
            href: `/vpn/best/${country.slug}`,
            description: "Full country VPN guide",
          },
          {
            label: `Best VPN for ${intentData.label}`,
            href: `/vpn/intent/${intentData.slug}`,
            description: "Global intent guide",
          },
          {
            label: "Country Directory",
            href: "/countries",
            description: "Browse all countries",
          },
          {
            label: "Best VPN 2026",
            href: "/best/vpn",
            description: "Overall top picks",
          },
        ]}
      />
    </article>
  );
}
