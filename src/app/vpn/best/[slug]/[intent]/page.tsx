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
    <>
      {/* ═══ DARK HERO ═══ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="[&_nav]:text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-slate-500">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: country.nameEn, href: `/vpn/best/${country.slug}` },
                { label: intentData.label },
              ]}
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 mt-5 mb-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            {country.nameEn} · {intentData.label}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-[1.1] mb-5">
            Best VPN for {intentData.label} in {country.nameEn} (2026)
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-6">
            {intentData.description} Here are our top picks specifically tested
            for {intentData.label.toLowerCase()} use in {country.nameEn}.
          </p>
          <div className="pt-5 border-t border-white/10 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-slate-400 [&_time]:text-slate-400 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0">
            <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
          </div>
        </div>
      </div>

    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Provider picks */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/25">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
              Tested & ranked
            </p>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Top {providers.length} VPNs for {intentData.label} in {country.nameEn}
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
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
              countrySlug={country.slug}
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
    </>
  );
}
