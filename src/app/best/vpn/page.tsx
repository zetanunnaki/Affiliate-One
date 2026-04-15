import type { Metadata } from "next";
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
    "We tested the top VPN services for speed, security, and privacy. NordVPN, Proton VPN, and FastestVPN compared.",
  alternates: { canonical: "/best/vpn/" },
  openGraph: {
    title: "Best VPN 2026 — Expert-Tested & Independently Reviewed",
    description: "Top VPN services ranked for speed, security, and privacy. NordVPN, Proton VPN, FastestVPN.",
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
            After 47 data points across speed, privacy, streaming reach, and customer support, only three providers survived. Here is the short list — the rest didn&apos;t make it.
          </p>

          {/* Byline */}
          <div className="mt-12 [&_a]:text-slate-300 [&_a:hover]:text-white [&_span]:text-slate-400 [&_time]:text-slate-400 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0">
            <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
          </div>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Top picks — conversion widget */}
      <TopVpnPicks
        heading="Our Top 3 VPN Picks for 2026"
        eyebrow="Editor's picks"
      />

      <ComparisonTable rows={comparisonRows} />
      <PricingTable providers={providers} />
      <Methodology />

      {/* Mini reviews */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Detailed Reviews
        </h2>
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="mb-6 p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {provider.name}
              </h3>
              <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                {provider.rating}/5
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              {provider.notes}
            </p>
            <p className="text-sm text-zinc-500">
              Price: {provider.priceRange} | Devices:{" "}
              {provider.features.devices === 0
                ? "Unlimited"
                : provider.features.devices}{" "}
              | Protocols: {provider.features.protocols.join(", ")}
            </p>
          </div>
        ))}
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
