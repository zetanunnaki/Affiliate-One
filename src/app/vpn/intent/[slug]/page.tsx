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
  const title = `Best VPN for ${intent.label} (2026)`;
  const ogImage = slug === "travel" ? "/images/og/og-travel.webp" : "/images/og/og-vpn.webp";
  return {
    title,
    description: intent.description,
    alternates: { canonical: `/vpn/intent/${slug}/` },
    openGraph: {
      title,
      description: intent.description,
      type: "article",
      url: `/vpn/intent/${slug}/`,
      images: [{ url: ogImage, width: 1200, height: 675, alt: title }],
    },
    twitter: { card: "summary_large_image", images: [ogImage] },
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
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full text-[13px] text-blue-200 mb-5">
            <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Use case: {intent.label}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">
            Best VPN for {intent.label}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
            {intent.description}
          </p>
          <div className="pt-5 border-t border-white/10 max-w-md mx-auto [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-slate-400 [&_time]:text-slate-400 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0 [&>div]:justify-center">
            <Byline authorId="sarah-chen" updatedAt="2026-04-07" />
          </div>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/25">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
                Editor&apos;s picks
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Top {providers.length} VPNs for {intent.label}
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
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
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
                By location
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Popular Countries for {intent.label}
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {countries.map((c) => (
              <Link
                key={c.iso2}
                href={`/vpn/best/${c.slug}`}
                className="group flex items-center gap-2 p-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-0.5 transition-all"
              >
                <span className="flex-1 text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                  Best VPN for {c.nameEn}
                </span>
                <svg className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
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
    </>
  );
}
