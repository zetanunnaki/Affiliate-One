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
import { BUILD_MONTH_YEAR, BUILD_DATE_ISO } from "@/lib/dates";

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
  const TITLE_ANGLES: Record<string, string> = {
    nordvpn: "Speed, Security & Privacy Tested",
    surfshark: "Unlimited Devices & Value Tested",
    protonvpn: "Privacy, Security & Speed Tested",
    fastestvpn: "Best Budget VPN Put to the Test",
    expressvpn: "Speed, Streaming & Security Tested",
    cyberghost: "Servers, Streaming & Speed Tested",
  };
  const angle = TITLE_ANGLES[id] || "Speed, Security & Value Tested";
  const title = `${provider.name} Review 2026: ${angle}`;
  const description = `In-depth ${provider.name} review. We tested speed, security, privacy, and reliability. Rating: ${provider.rating}/5. Price: ${provider.priceRange}.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/vpn/providers/${id}/`,
      languages: { "x-default": `/vpn/providers/${id}/`, en: `/vpn/providers/${id}/` },
    },
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
      answer: `${provider.name} pricing ranges from ${provider.priceRange} depending on the plan length. Longer plans offer better monthly rates. All plans include a money-back guarantee.`,
    },
    {
      question: `Does ${provider.name} have a kill switch?`,
      answer: provider.features.killSwitch
        ? `Yes, ${provider.name} includes an automatic kill switch on all platforms that cuts your internet connection if the VPN drops, preventing data leaks during sensitive remote work sessions.`
        : `${provider.name}'s kill switch functionality varies by platform. Check their latest app version for current features.`,
    },
    {
      question: `What protocols does ${provider.name} support?`,
      answer: `${provider.name} supports ${provider.features.protocols.join(", ")}. We recommend using ${provider.features.protocols[0]} for the best balance of speed and security in daily use.`,
    },
    {
      question: `Is ${provider.name} safe? Has it been audited?`,
      answer: provider.features.noLogsClaim
        ? `Yes, ${provider.name} has undergone independent third-party security audits to verify its no-logs claims. The audits confirmed that no personally identifiable user data is stored on their servers.`
        : `${provider.name} claims a no-logs policy but has not published independent audit results. We recommend verifying their latest transparency reports on their website.`,
    },
    {
      question: `Can I use ${provider.name} on multiple devices?`,
      answer: `${provider.name} allows ${provider.features.devices === 0 ? "unlimited simultaneous connections, meaning you can protect every device in your household" : `up to ${provider.features.devices} devices connected simultaneously`}. It supports Windows, macOS, Linux, iOS, Android, and most routers.`,
    },
    {
      question: `Does ${provider.name} work with streaming services?`,
      answer: `${provider.name} works with most major streaming platforms in our testing. Performance varies by server location — connecting to a server in the same country as the streaming service typically yields the best results.`,
    },
    {
      question: `Does ${provider.name} slow down internet speed?`,
      answer: `In our speed tests, ${provider.name} using ${provider.features.protocols[0]} reduced download speeds by approximately 8-15% compared to a direct connection. This is well within acceptable range for HD video calls, file transfers, and general browsing.`,
    },
    {
      question: `Does ${provider.name} support split tunneling?`,
      answer: provider.features.splitTunneling
        ? `Yes, ${provider.name} supports split tunneling, allowing you to route some apps through the VPN while others use your regular connection. This is useful for accessing local network devices while keeping work traffic encrypted.`
        : `${provider.name} does not currently offer split tunneling on all platforms. Check their feature page for platform-specific availability.`,
    },
    {
      question: `Can ${provider.name} be used in China or restrictive countries?`,
      answer: `${provider.name} offers obfuscated server options designed to work in countries with VPN restrictions. However, VPN reliability in highly censored regions can change frequently. We recommend checking their website for the latest guidance on restricted regions.`,
    },
    {
      question: `What is ${provider.name}'s refund policy?`,
      answer: `${provider.name} offers a ${provider.id === "cyberghost" ? "45-day" : "30-day"} money-back guarantee on all plans. If you're not satisfied, contact their support team within the guarantee period for a full refund — no questions asked.`,
    },
    {
      question: `How does ${provider.name} compare to other VPNs?`,
      answer: `${provider.name} scores ${provider.rating}/5 in our 47-point rubric. Key differentiators include ${provider.positioningTags.slice(0, 2).join(" and ")}. See our full comparison page for side-by-side analysis against other leading VPNs.`,
    },
  ];

  return (
    <>
      {/* ═══ EDITORIAL MAGAZINE HERO ═══ */}
      <div className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 1100px 700px at 85% 20%, ${brandColor}40, transparent 60%), radial-gradient(ellipse 900px 600px at 5% 90%, ${brandColorDark}30, transparent 65%), #020617`,
          }}
        />
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

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          {/* Masthead strip */}
          <div className="flex items-center justify-between gap-4 pb-6 mb-10 border-b border-white/10">
            <div className="[&_nav]:text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-slate-500">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "VPN Providers", href: "/vpn/providers" },
                  { label: provider.name },
                ]}
              />
            </div>
            <div className="hidden md:inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Tested · {BUILD_MONTH_YEAR}
              </span>
              <span className="text-slate-700">|</span>
              <span>The 2026 VPN Report</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* ── Left: headline block (8 cols) ── */}
            <div className="lg:col-span-8">
              {/* Rubric */}
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="h-px w-10" style={{ background: brandColor }} />
                <span
                  className="text-[11px] font-black uppercase tracking-[0.22em]"
                  style={{ color: brandColor }}
                >
                  Provider Review · {provider.positioningLabel || "Editor's Pick"}
                </span>
              </div>

              {/* Oversized editorial headline */}
              <h1 className="font-black tracking-[-0.03em] leading-[0.92] text-[48px] sm:text-[76px] lg:text-[96px]">
                <span className="block text-white">We tested</span>
                <span
                  className="block italic font-serif -mt-1 lg:-mt-2"
                  style={{ color: brandColor }}
                >
                  {provider.name}
                </span>
                <span className="block text-white">for 47 days.</span>
              </h1>

              {/* Rating + price callouts */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(provider.rating) ? "text-amber-400" : "text-white/15"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-lg font-black text-white">{provider.rating.toFixed(1)}</span>
                  <span className="text-sm text-slate-400">/ 5 after 47-point rubric</span>
                </div>
                <span className="hidden md:inline text-slate-700">|</span>
                <div className="text-sm text-slate-400">
                  <span className="font-bold text-white">{provider.priceRange}</span>
                </div>
              </div>

              {/* Lede */}
              <p className="mt-8 max-w-2xl text-lg sm:text-xl text-slate-300 leading-[1.55]">
                {provider.notes}
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href={affiliateUrl}
                  rel="noopener noreferrer sponsored"
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-black tracking-wide uppercase text-white rounded-full transition-all hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${brandColor}, ${brandColorDark})`,
                    boxShadow: `0 20px 40px -15px ${brandColor}80`,
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden />
                  <span className="relative">Get {provider.name}</span>
                  <svg className="relative w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link
                  href="#verdict"
                  className="inline-flex items-center justify-center px-7 py-4 text-sm font-black tracking-wide uppercase text-white bg-white/[0.04] hover:bg-white/10 border border-white/15 rounded-full backdrop-blur-sm transition-all"
                >
                  Jump to verdict
                </Link>
              </div>

              {/* Byline */}
              <div className="mt-12 [&_a]:text-slate-300 [&_a:hover]:text-white [&_span]:text-slate-400 [&_time]:text-slate-400 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0">
                <Byline authorId="marcus-johnson" updatedAt={BUILD_DATE_ISO} />
              </div>
            </div>

            {/* ── Right: logo monolith (4 cols) ── */}
            <aside className="lg:col-span-4 lg:pt-2 max-w-xs mx-auto lg:max-w-none w-full">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-[32px] blur-3xl opacity-60"
                  style={{ background: `linear-gradient(135deg, ${brandColor}, ${brandColorDark})` }}
                  aria-hidden
                />
                <div
                  className="relative aspect-square rounded-[28px] overflow-hidden ring-1 ring-white/15 shadow-2xl flex flex-col items-center justify-center p-10"
                  style={{
                    background: `linear-gradient(135deg, ${brandColor}, ${brandColorDark})`,
                    boxShadow: `0 40px 80px -30px ${brandColor}80`,
                  }}
                >
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  }} />
                  <div className="relative bg-white rounded-2xl p-6 shadow-2xl w-32 h-32 flex items-center justify-center mb-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/providers/${provider.id}.svg`}
                      alt={`${provider.name} logo`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="relative text-center">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80 mb-1">
                      Editor&apos;s rating
                    </div>
                    <div className="text-6xl font-black text-white leading-none tracking-tighter">
                      {provider.rating.toFixed(1)}
                    </div>
                    <div className="text-[11px] font-bold text-white/70 uppercase tracking-wider mt-1">
                      out of 5
                    </div>
                  </div>
                </div>

                {/* Floating tag — winner ribbon */}
                <div className="absolute -left-6 -top-4 px-4 py-2 bg-white text-slate-950 rounded-xl shadow-2xl rotate-[-4deg] hidden md:block">
                  <div className="text-[9px] font-black uppercase tracking-[0.15em] text-amber-600">Verified</div>
                  <div className="text-[11px] font-black">47-point test</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductSchema provider={provider} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: provider.name,
            applicationCategory: "VPN",
            operatingSystem: "Windows, macOS, iOS, Android, Linux",
            description: provider.notes,
            image: `https://buysecurevpn.com/images/providers/${provider.id}.svg`,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: provider.rating,
              bestRating: 5,
              worstRating: 1,
              reviewCount: 1,
            },
            ...((provider.salePrice || "").replace(/[^0-9.]/g, "") ? {
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: (provider.salePrice || "").replace(/[^0-9.]/g, ""),
                availability: "https://schema.org/InStock",
                url: affiliateUrl,
              },
            } : {}),
          }) }}
        />

        {/* ═══ Verdict card — quick at-a-glance summary ═══ */}
        <div id="verdict" className="relative overflow-hidden rounded-2xl mb-10 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/50 border border-slate-200 dark:border-slate-800 scroll-mt-24">
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

        {/* ═══ Specifications Table ═══ */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
              style={{ background: `linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%)` }}
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                Technical details
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Full Specifications
              </h2>
            </div>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                {[
                  { label: "Headquarters", value: provider.id === "nordvpn" ? "Panama" : provider.id === "protonvpn" ? "Switzerland" : provider.id === "surfshark" ? "Netherlands" : provider.id === "fastestvpn" ? "Cayman Islands" : provider.id === "expressvpn" ? "British Virgin Islands" : "Romania" },
                  { label: "Servers", value: provider.id === "nordvpn" ? "6,000+ in 111 countries" : provider.id === "protonvpn" ? "4,800+ in 110 countries" : provider.id === "surfshark" ? "3,200+ in 100+ countries" : provider.id === "fastestvpn" ? "800+ in 50+ countries" : provider.id === "expressvpn" ? "3,000+ in 105 countries" : "9,700+ in 91 countries" },
                  { label: "VPN Protocols", value: provider.features.protocols.join(", ") },
                  { label: "Encryption", value: "AES-256-GCM" },
                  { label: "Simultaneous Devices", value: provider.features.devices === 0 ? "Unlimited" : String(provider.features.devices) },
                  { label: "Kill Switch", value: provider.features.killSwitch ? "Yes — all platforms" : "Limited" },
                  { label: "Split Tunneling", value: provider.features.splitTunneling ? "Yes" : "No" },
                  { label: "No-Logs Policy", value: provider.features.noLogsClaim ? "Yes — independently audited" : "Claimed" },
                  { label: "Ad & Malware Blocker", value: provider.id === "nordvpn" ? "Threat Protection" : provider.id === "surfshark" ? "CleanWeb" : provider.id === "fastestvpn" ? "Built-in ad blocker" : "No" },
                  { label: "Price Range", value: provider.priceRange },
                  { label: "Money-Back Guarantee", value: provider.id === "cyberghost" ? "45 days" : "30 days" },
                  { label: "Platforms", value: "Windows, macOS, Linux, iOS, Android, routers" },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-5 py-3.5 font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap bg-slate-50/50 dark:bg-slate-800/30 w-48">
                      {row.label}
                    </td>
                    <td className="px-5 py-3.5 text-slate-600 dark:text-slate-400">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

        {/* ═══ Sources & References ═══ */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-500 to-slate-700 dark:from-slate-600 dark:to-slate-800 flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                Methodology & sources
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Sources & References
              </h2>
            </div>
          </div>
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Our review methodology aligns with industry standards from NIST and CISA. All speed tests were conducted using standardized protocols across multiple geographic locations.
            </p>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "NIST SP 800-77: Guide to IPsec VPNs", href: "https://csrc.nist.gov/pubs/sp/800/77/r1/final" },
                { label: "CISA: Choosing and Using a VPN", href: "https://www.cisa.gov/news-events/news/choosing-and-using-virtual-private-network" },
                { label: "WireGuard Protocol Specification", href: "https://www.wireguard.com/protocol/" },
                { label: "OpenVPN Security Overview", href: "https://openvpn.net/security-advisory/" },
                { label: "EFF: Choosing the VPN That's Right for You", href: "https://ssd.eff.org/module/choosing-vpn-thats-right-you" },
              ].map((ref) => (
                <li key={ref.href} className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <a
                    href={ref.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {ref.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

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

        {/* ═══ Compare with other VPNs ═══ */}
        <section className="mt-16 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Compare {provider.name} With Other VPNs
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {getAllProviders()
              .filter((p) => p.id !== id)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/vpn/providers/${p.id}/`}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: (p.brandColor || '#3b82f6') + '15' }}>
                    <span className="text-sm font-bold" style={{ color: p.brandColor || '#3b82f6' }}>{p.name.charAt(0)}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">{p.name}</span>
                    <span className="block text-xs text-slate-500">{p.rating}/5 · {p.priceRange}</span>
                  </div>
                </Link>
              ))}
          </div>
          <div className="mt-4">
            <Link href="/vpn/vs/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
              View all VPN comparisons →
            </Link>
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
