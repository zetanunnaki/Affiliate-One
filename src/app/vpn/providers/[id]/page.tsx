import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProviders, getProviderById, getAllCountries, getProviderAffiliateUrl } from "@/lib/data";
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
  const affiliateUrl = getProviderAffiliateUrl(provider);
  const brandColor = provider.brandColor || "#3b82f6";
  const brandColorDark = provider.brandColorDark || "#1d4ed8";

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
    <>
      {/* ═══ BRAND-COLORED HERO ═══ */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${brandColorDark} 0%, ${brandColor}cc 50%, #0f172a 100%)`,
          }}
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]"
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="[&_nav]:text-white/60 [&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white/40">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "VPN Providers", href: "/vpn/providers" },
                { label: provider.name },
              ]}
            />
          </div>

          <div className="mt-6 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
            {/* Logo */}
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-white ring-1 ring-white/20 p-3 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/providers/${provider.id}.svg`}
                alt={`${provider.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Name + positioning */}
            <div>
              {provider.positioningLabel && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 mb-3 text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-sm ring-1 ring-white/20 text-white rounded-full">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {provider.positioningLabel}
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-[1.1] mb-3">
                {provider.name} Review (2026)
              </h1>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(provider.rating) ? "text-yellow-300" : "text-white/20"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">{provider.rating}/5</span>
                </div>
                <div className="text-sm text-white/70">{provider.priceRange}</div>
              </div>
            </div>

            {/* CTA button */}
            <a
              href={affiliateUrl}
              rel="noopener noreferrer sponsored"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm ring-1 ring-white/30 rounded-xl transition-all hover:-translate-y-0.5 shadow-xl"
            >
              Get {provider.name}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="mt-6 pt-5 border-t border-white/10 [&_a]:text-white/80 [&_a:hover]:text-white [&_span]:text-white/60 [&_time]:text-white/60 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0">
            <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
          </div>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductSchema provider={provider} />

        {/* ═══ Verdict card — quick at-a-glance summary ═══ */}
        <div className="relative overflow-hidden rounded-2xl mb-10 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/50 border border-slate-200 dark:border-slate-800">
          <div
            className="absolute inset-x-0 top-0 h-1"
            style={{ background: `linear-gradient(90deg, ${brandColor} 0%, ${brandColorDark} 100%)` }}
          />
          <div className="p-6 sm:p-7">
            <div className="flex items-start gap-4 flex-wrap mb-5">
              <div
                className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%)`,
                  boxShadow: `0 10px 20px -8px ${brandColor}60`,
                }}
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 mb-1">
                  Our verdict
                </p>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {provider.rating >= 4.5 ? "Exceptional choice for most users" : "Solid option with clear strengths"}
                </h2>
              </div>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {provider.notes} Our testing across speed, security, privacy, and usability gives {provider.name} a{" "}
              <span className="font-bold text-slate-900 dark:text-white">{provider.rating}/5 rating</span>
              {provider.positioning && (
                <> and our <span className="font-bold text-slate-900 dark:text-white">{provider.positioningLabel}</span> pick</>
              )}.
            </p>
          </div>
        </div>

        {/* ═══ Key features grid ═══ */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
              style={{ background: `linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%)` }}
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                What you get
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Key Features
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Protocols", value: provider.features.protocols.join(", ") },
              { label: "Devices", value: provider.features.devices === 0 ? "Unlimited" : String(provider.features.devices) },
              { label: "No-Logs Policy", value: provider.features.noLogsClaim ? "✓ Verified" : "Standard" },
              { label: "Kill Switch", value: provider.features.killSwitch ? "✓ Included" : "Limited" },
              { label: "Split Tunneling", value: provider.features.splitTunneling ? "✓ Supported" : "No" },
              { label: "Price Range", value: provider.priceRange },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  {item.label}
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Pros & Cons ═══ */}
        <section className="mb-10">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/30 dark:to-slate-900/40 border border-emerald-200/70 dark:border-emerald-900/40 p-5">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-green-500" />
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/30">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200">
                  Pros
                </h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  provider.features.noLogsClaim && "Audited no-logs policy",
                  provider.features.killSwitch && "Reliable kill switch",
                  provider.features.splitTunneling && "Split tunneling support",
                  `${provider.features.devices === 0 ? "Unlimited" : provider.features.devices} device connections`,
                  `${provider.features.protocols[0]} protocol for speed`,
                  "30-day money-back guarantee",
                ]
                  .filter(Boolean)
                  .map((pro) => (
                    <li key={pro as string} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <svg className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{pro}</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 to-white dark:from-rose-950/30 dark:to-slate-900/40 border border-rose-200/70 dark:border-rose-900/40 p-5">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-400 to-red-500" />
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center text-white shadow-md shadow-rose-500/30">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-rose-900 dark:text-rose-200">
                  Cons
                </h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Premium pricing on short-term plans",
                  "Server speeds can vary by region",
                  provider.affiliate.network === "none" && "No affiliate deals (buy at full price)",
                ]
                  .filter(Boolean)
                  .map((con) => (
                    <li key={con as string} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <svg className="w-4 h-4 mt-0.5 shrink-0 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>{con}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ CTA Banner ═══ */}
        <CTABanner provider={provider} />

        {/* ═══ Full review link ═══ */}
        {hasReview && (
          <div className="mb-10">
            <Link
              href={`/vpn/providers/${provider.id}/review`}
              className="group flex items-center justify-between gap-4 p-5 rounded-2xl border-2 bg-white dark:bg-slate-900 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              style={{ borderColor: `${brandColor}40` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md shrink-0"
                  style={{ background: `linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%)` }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    Read our full in-depth review
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Speed tests, security audit, detailed analysis
                  </div>
                </div>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}

        {/* ═══ Country links ═══ */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-500 to-slate-700 dark:from-slate-600 dark:to-slate-800 flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                Country guides
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {provider.name} by Country
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {countries.map((country) => (
              <Link
                key={country.iso2}
                href={`/vpn/best/${country.slug}`}
                className="group flex items-center gap-2 p-3 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-0.5 transition-all"
              >
                <span className="flex-1 font-semibold text-slate-900 dark:text-slate-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Best VPN for {country.nameEn}
                </span>
                <svg className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
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
    </>
  );
}
