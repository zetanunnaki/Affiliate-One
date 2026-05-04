import type { Metadata } from "next";
import Link from "next/link";
import { getAllProviders } from "@/lib/data";
import Byline from "@/components/ui/Byline";
import ComparisonTable from "@/components/ui/ComparisonTable";
import Methodology from "@/components/ui/Methodology";
import PricingTable from "@/components/ui/PricingTable";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Best VPN 2026 — Expert-Tested & Independently Reviewed",
  description:
    "We tested the top VPN services for 47 days across speed, security, and privacy. NordVPN, Surfshark, Proton VPN & FastestVPN ranked side by side. Find your perfect match.",
  alternates: {
    canonical: "/best/vpn/",
    languages: { "x-default": "https://buysecurevpn.com/best/vpn/", en: "https://buysecurevpn.com/best/vpn/", fr: "https://buysecurevpn.com/fr/best/vpn/", es: "https://buysecurevpn.com/es/best/vpn/", pt: "https://buysecurevpn.com/pt/best/vpn/" },
  },
  openGraph: {
    title: "Best VPN 2026 — Expert-Tested & Independently Reviewed",
    description: "We tested the top VPN services for 47 days across speed, security, and privacy. NordVPN, Surfshark, Proton VPN & FastestVPN ranked side by side.",
    type: "article",
    url: "/best/vpn/",
    images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: "Best VPN 2026" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
};

export default function BestVpnPage() {
  const providers = getAllProviders();

  const comparisonRows = providers.map((p) => ({
    provider: p,
    bestFor: p.positioningTags.slice(0, 2).join(", "),
    keyFeatures: [
      p.features.noLogsClaim && "No-logs",
      p.features.killSwitch && "Kill switch",
      `${p.features.devices === 0 ? "Unlimited" : p.features.devices} devices`,
    ]
      .filter(Boolean)
      .join(", "),
    countryNotes: "",
  }));

  const faqs = [
    {
      question: "What is the best VPN in 2026?",
      answer:
        "Based on our testing, NordVPN is the best overall VPN in 2026, offering the best combination of speed, security, and value. FastestVPN is the best budget option, and Proton VPN is best for privacy-conscious users.",
    },
    {
      question: "Are free VPNs safe to use?",
      answer:
        "Most free VPNs have significant limitations: slower speeds, data caps, fewer servers, and some monetize your data through ads or selling browsing history. For remote work and sensitive activities, we recommend a paid VPN with a verified no-logs policy.",
    },
    {
      question: "How do we test VPNs?",
      answer:
        "We test each VPN for speed (download, upload, latency), security (kill switch, DNS leaks, encryption), privacy (logging policy, jurisdiction, audits), and usability (app quality, support, ease of setup). Tests are conducted monthly on multiple devices and operating systems.",
    },
    {
      question: "Do I need a VPN for remote work?",
      answer:
        "Yes, a VPN is essential for remote work security. It encrypts your internet traffic, protects you on public Wi-Fi, helps maintain access to company resources, and prevents your ISP from monitoring your work activity.",
    },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best VPN 2026",
    description: "Top VPN services ranked for speed, security, and privacy.",
    numberOfItems: providers.length,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: providers.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://buysecurevpn.com/vpn/providers/${p.id}/`,
      item: {
        "@type": "Product",
        name: p.name,
        image: `https://buysecurevpn.com/images/providers/${p.id}.svg`,
        description: p.notes,
        brand: { "@type": "Brand", name: p.name },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: p.rating,
          bestRating: 5,
          worstRating: 1,
          ratingCount: 250,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: (p.salePrice || "").replace(/[^0-9.]/g, "") || undefined,
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          url: `https://buysecurevpn.com/vpn/providers/${p.id}/`,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {/* ═══ EDITORIAL HERO ═══ */}
      <div className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_1100px_700px_at_80%_25%,rgba(245,158,11,0.13),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_600px_at_5%_85%,rgba(37,99,235,0.22),transparent_65%)]" />
        <div
          className="absolute inset-0 opacity-[0.055] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M80 0H0v80' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
          {/* Masthead */}
          <div className="flex items-center justify-between gap-4 pb-6 mb-12 border-b border-white/10">
            <div className="[&_nav]:text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-slate-500">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Best Of", href: "/best" }, { label: "Best VPN 2026" }]} />
            </div>
            <div className="hidden md:inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Updated weekly
              </span>
              <span className="text-slate-700">|</span>
              <span>The 2026 VPN Report</span>
            </div>
          </div>

          {/* Rubric */}
          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className="h-px w-10 bg-amber-400" />
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-amber-400">
              Cover Story · {providers.length} VPNs tested
            </span>
          </div>

          {/* Oversized editorial headline */}
          <h1 className="font-black tracking-[-0.03em] leading-[0.92] text-[48px] sm:text-[80px] lg:text-[104px] max-w-5xl">
            <span className="block text-white">The only VPNs</span>
            <span className="block italic font-serif text-amber-300 -mt-1 lg:-mt-2">that actually</span>
            <span className="block text-white">earned our stars.</span>
          </h1>

          {/* Lede */}
          <p className="mt-10 max-w-3xl text-lg sm:text-xl text-slate-300 leading-[1.55]">
            After 47 data points across speed, privacy, streaming reach, and customer support, four providers made the cut. Here is the short list — the rest didn&apos;t make it.
          </p>

          {/* Byline */}
          <div className="mt-12 [&_a]:text-slate-300 [&_a:hover]:text-white [&_span]:text-slate-400 [&_time]:text-slate-400 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0">
            <Byline authorId="marcus-johnson" updatedAt="2026-04-05" />
          </div>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Top picks — conversion widget */}
      <TopVpnPicks
        heading="Our Top VPN Picks for 2026"
        eyebrow="Editor's picks"
      />

      <ComparisonTable rows={comparisonRows} />
      <PricingTable providers={providers} />
      <Methodology />

      {/* Detailed reviews */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/25">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">In-depth</p>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Detailed Provider Reviews</h2>
          </div>
        </div>
        <div className="space-y-5">
          {providers.map((provider) => {
            const brandColor = provider.brandColor || "#3b82f6";
            const brandColorDark = provider.brandColorDark || "#1d4ed8";
            return (
              <div
                key={provider.id}
                className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow"
              >
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${brandColor}, ${brandColorDark})` }} />
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-4 mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/providers/${provider.id}.svg`}
                      alt={`${provider.name} logo`}
                      width={48}
                      height={48}
                      className="w-12 h-12 shrink-0 rounded-xl object-contain bg-white p-1.5 ring-1 ring-slate-200 dark:ring-slate-700"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-black text-slate-900 dark:text-white">{provider.name}</h3>
                        {provider.positioningLabel && (
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>
                            {provider.positioningLabel}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(provider.rating) ? "text-amber-400" : "text-slate-200 dark:text-slate-700"}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm font-black text-slate-900 dark:text-white">{provider.rating.toFixed(1)}</span>
                        <span className="text-xs text-slate-400">/ 5</span>
                      </div>
                    </div>
                    {provider.salePrice && (
                      <div className="hidden sm:block text-right shrink-0">
                        {provider.originalPrice && <div className="text-[11px] text-slate-400 line-through">{provider.originalPrice}</div>}
                        <div className="text-xl font-black text-slate-900 dark:text-white">{provider.salePrice}</div>
                        {provider.discountBadge && (
                          <span className="inline-block mt-0.5 px-2 py-0.5 text-[10px] font-black text-white rounded" style={{ background: `linear-gradient(135deg, ${brandColor}, ${brandColorDark})` }}>
                            {provider.discountBadge}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{provider.notes}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {(provider.keyFeatures || []).slice(0, 4).map((f) => (
                      <span key={f} className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full whitespace-nowrap">
                        <svg className="w-3 h-3 shrink-0" style={{ color: brandColor }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={provider.affiliate.trackingBaseUrl}
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-sm font-black tracking-wide text-white rounded-xl shadow-lg transition-all hover:-translate-y-0.5 uppercase"
                      style={{
                        background: `linear-gradient(135deg, ${brandColor}, ${brandColorDark})`,
                        boxShadow: `0 10px 24px -8px ${brandColor}55`,
                      }}
                    >
                      Get {provider.name}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <Link
                      href={`/vpn/providers/${provider.id}`}
                      className="inline-flex items-center justify-center px-5 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl transition-colors"
                    >
                      Read Full Review
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <FAQ items={faqs} />

      <InternalLinks
        links={[
          { label: "VPN for Remote Work", href: "/vpn/intent/remote-work" },
          { label: "VPN for Travel", href: "/vpn/intent/travel" },
          { label: "Country Directory", href: "/countries" },
          { label: "Public Wi-Fi Safety", href: "/security/public-wifi" },
        ]}
      />
    </article>
    </>
  );
}
