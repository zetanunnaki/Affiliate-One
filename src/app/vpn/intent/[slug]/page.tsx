import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllIntents,
  getIntentBySlug,
  getProvidersForIntent,
  getAllCountries,
} from "@/lib/data";
import Byline from "@/components/ui/Byline";
import ProviderCard from "@/components/ui/ProviderCard";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllIntents().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const intent = getIntentBySlug(slug);
  if (!intent) return {};
  return {
    title: `Best VPN for ${intent.label} (2026)`,
    description: intent.description,
  };
}

export default async function IntentPage(props: PageProps) {
  const { slug } = await props.params;
  const intent = getIntentBySlug(slug);
  if (!intent) notFound();

  const providers = getProvidersForIntent(slug);
  const countries = getAllCountries().slice(0, 6);

  const faqs = [
    {
      question: `What makes a good VPN for ${intent.label.toLowerCase()}?`,
      answer: `A VPN for ${intent.label.toLowerCase()} should prioritize speed, security, and reliability. Key features include a kill switch, no-logs policy, and servers in locations relevant to your use case.`,
    },
    {
      question: `Do I need a VPN for ${intent.label.toLowerCase()}?`,
      answer: `${intent.description} A VPN adds an essential layer of security and privacy to protect your data and online activity.`,
    },
    {
      question: "Are free VPNs safe?",
      answer:
        "Free VPNs often come with significant drawbacks: limited bandwidth, slower speeds, fewer server locations, and some monetize user data. For serious use, we recommend a paid VPN with a verified no-logs policy.",
    },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Best VPN for {intent.label} (2026)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
          {intent.description}
        </p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-07" />
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Our Top Picks for {intent.label}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {providers.map((provider, i) => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              badge={i === 0 ? "Top Pick" : i === 1 ? "Runner Up" : "Also Great"}
            />
          ))}
        </div>
      </section>

      {/* Country suggestions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Popular Countries for {intent.label}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {countries.map((c) => (
            <Link
              key={c.iso2}
              href={`/vpn/best/${c.slug}`}
              className="p-3 text-sm border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors font-medium text-zinc-900 dark:text-zinc-100"
            >
              Best VPN for {c.nameEn}
            </Link>
          ))}
        </div>
      </section>

      <FAQ items={faqs} title={`${intent.label} VPN FAQ`} />

      <InternalLinks
        links={[
          { label: "Best VPN 2026", href: "/best/vpn" },
          { label: "All Provider Reviews", href: "/vpn/providers" },
          { label: "Country Directory", href: "/countries" },
          { label: "Public Wi-Fi Safety", href: "/security/public-wifi" },
        ]}
      />
    </article>
  );
}
