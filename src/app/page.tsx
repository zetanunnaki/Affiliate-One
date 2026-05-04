import type { Metadata } from "next";
import Link from "next/link";
import { getAllCountries } from "@/lib/data";
import SaveToPinterest from "@/components/ui/SaveToPinterest";
import TopVpnPicks from "@/components/ui/TopVpnPicks";
import FAQ from "@/components/ui/FAQ";
import LazyIntents from "@/components/ui/LazyIntents";
import LazyCountryGrid from "@/components/ui/LazyCountryGrid";
import { BUILD_MONTH_YEAR } from "@/lib/dates";

export const metadata: Metadata = {
  title: "BuySecureVPN — Best VPN Reviews & Security Guides 2026",
  description:
    "Expert-tested VPN reviews, 202-country coverage, and security guides. Compare NordVPN, Surfshark, Proton VPN & FastestVPN with our 47-point rubric.",
  alternates: {
    canonical: "https://buysecurevpn.com/",
    languages: {
      "x-default": "https://buysecurevpn.com/",
      en: "https://buysecurevpn.com/",
      fr: "https://buysecurevpn.com/fr/",
      es: "https://buysecurevpn.com/es/",
      pt: "https://buysecurevpn.com/pt/",
    },
  },
  openGraph: {
    title: "BuySecureVPN — Best VPN Reviews & Security Guides 2026",
    description:
      "Expert-tested VPN reviews, 202-country coverage, and security guides. Compare NordVPN, Surfshark, Proton VPN & FastestVPN.",
    url: "https://buysecurevpn.com/",
    type: "website",
    images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: "BuySecureVPN — Best VPN Reviews 2026" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
};

const homeFaqs = [
  {
    question: "What is a VPN and why do remote workers need one?",
    answer: "A VPN (Virtual Private Network) encrypts your internet connection and masks your IP address. Remote workers need VPNs to secure company data on public Wi-Fi, access geo-restricted resources, and prevent ISP throttling during video calls.",
  },
  {
    question: "How do you test and rate VPNs?",
    answer: "We use a 47-point rubric covering speed (multi-continent tests), security (leak tests, kill switch reliability), privacy (no-logs audit verification), usability, and value. Each provider is purchased at retail and tested for a minimum of 47 days before publishing.",
  },
  {
    question: "Which VPN is best for working from home in 2026?",
    answer: "NordVPN is our top pick for remote work in 2026, scoring 4.8/5 in our tests. It offers the fastest speeds, an audited no-logs policy, Threat Protection malware blocking, and 10 simultaneous device connections — ideal for home office setups.",
  },
  {
    question: "Are free VPNs safe for remote work?",
    answer: "Most free VPNs are not suitable for remote work due to data caps, slower speeds, limited server choices, and questionable privacy practices. Proton VPN offers a reputable free tier, but for full remote-work security we recommend a paid service with verified no-logs policies.",
  },
  {
    question: "How much does a good VPN cost?",
    answer: "Quality VPNs range from $1.11–$12.99/month depending on the provider and plan length. Multi-year plans offer the biggest savings. NordVPN starts at $3.39/mo, Surfshark at $1.99/mo, and FastestVPN offers lifetime plans from $1.11/mo.",
  },
  {
    question: "Can my employer see what I do on a VPN?",
    answer: "If you use a personal VPN, your employer cannot monitor your traffic. However, if your company provides a corporate VPN, they may log activity on their network. We recommend using your employer's VPN for work tasks and a personal VPN for private browsing on the same device.",
  },
  {
    question: "Do VPNs slow down internet speed?",
    answer: "All VPNs add some overhead, but top providers like NordVPN (NordLynx protocol) and Surfshark (WireGuard) typically reduce speeds by less than 10-15%. This is imperceptible for most remote work tasks including video conferencing and file transfers.",
  },
  {
    question: "How many devices can I protect with one VPN subscription?",
    answer: "It varies by provider: Surfshark offers unlimited simultaneous connections, NordVPN and Proton VPN allow 10 devices, and FastestVPN supports 10 devices. For households with many devices, Surfshark's unlimited plan offers the best value.",
  },
];

export default function Home() {
  const countries = getAllCountries();

  return (
    <div>
      {/* ═══════════════ EDITORIAL HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_1100px_700px_at_75%_30%,rgba(245,158,11,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_600px_at_10%_80%,rgba(37,99,235,0.18),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(2,6,23,0.6)_100%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-28">
          <div className="flex items-center justify-between gap-4 pb-8 mb-10 border-b border-white/10">
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              <span className="inline-flex items-center gap-2">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex w-full h-full bg-emerald-400 rounded-full opacity-75 animate-ping" />
                  <span className="relative inline-flex w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                </span>
                Live · {BUILD_MONTH_YEAR}
              </span>
              <span className="text-slate-700">|</span>
              <span className="hidden sm:inline">Issue 04 · Remote Security Quarterly</span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              <span>Independently audited</span>
              <span className="text-slate-700">·</span>
              <span>50k+ readers / mo</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="h-px w-10 bg-amber-400" />
                <span className="text-[11px] font-black uppercase tracking-[0.22em] text-amber-400">
                  The 2026 VPN Report
                </span>
              </div>

              <h1 className="font-black tracking-[-0.03em] leading-[0.92] text-[44px] sm:text-[72px] lg:text-[96px] xl:text-[112px]">
                <span className="block text-white">The best</span>
                <span className="block italic font-serif text-amber-300 -mt-1 lg:-mt-3">
                  VPNs we&apos;ve
                </span>
                <span className="block text-white">ever tested.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg sm:text-xl text-slate-300 leading-[1.55]">
                We bought every major VPN at retail, tested them across six continents, and put the results through a brutal 47-point rubric. Here are the three that actually earned their rank.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/best/vpn"
                  className="group relative inline-flex items-center justify-center px-7 py-4 text-sm font-black tracking-wide uppercase text-slate-950 bg-amber-400 rounded-full shadow-[0_20px_40px_-15px_rgba(245,158,11,0.55)] hover:bg-amber-300 hover:-translate-y-0.5 transition-all"
                >
                  Read the full ranking
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/countries"
                  className="inline-flex items-center justify-center px-7 py-4 text-sm font-black tracking-wide uppercase text-white bg-white/[0.04] hover:bg-white/10 border border-white/15 rounded-full backdrop-blur-sm transition-all"
                >
                  Browse by country
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                <span className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  By the BuySecureVPN editorial team
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Updated weekly
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  CISSP · CEH · CompTIA
                </span>
              </div>
            </div>

            <aside className="lg:col-span-4 lg:pt-2 max-w-sm mx-auto lg:max-w-none w-full">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-400/30 via-transparent to-blue-500/20 rounded-[28px] blur-2xl" aria-hidden />
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900/60 backdrop-blur-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/illustrations/hero-remote-work.webp"
                    srcSet="/images/illustrations/hero-remote-work-640w.webp 640w, /images/illustrations/hero-remote-work-1024w.webp 1024w, /images/illustrations/hero-remote-work.webp 1408w"
                    alt="Editorial: the 2026 VPN report"
                    className="w-full h-auto aspect-[4/5] object-cover"
                    loading="eager"
                    fetchPriority="high"
                    width={800}
                    height={1000}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <SaveToPinterest
                    imageSrc="/images/illustrations/hero-remote-work.webp"
                    pageUrl="https://buysecurevpn.com/"
                    description="Best VPN 2026 — Expert-tested & independently reviewed"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="h-px w-6 bg-amber-400" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-300">
                        Editor&apos;s pick
                      </span>
                    </div>
                    <div className="font-serif italic text-[28px] leading-[1.05] text-white">
                      NordVPN
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs font-black text-amber-400">★★★★★</span>
                      <span className="text-xs font-black text-white">4.8</span>
                      <span className="text-xs text-slate-400">Fastest servers · Audited no-logs</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-6 -bottom-8 hidden md:flex flex-col items-start gap-1 px-5 py-4 bg-white text-slate-950 rounded-2xl shadow-2xl rotate-[-3deg]">
                  <div className="text-[10px] font-black uppercase tracking-[0.15em] text-amber-600">Stat of the year</div>
                  <div className="font-black text-3xl leading-none">47pt</div>
                  <div className="text-[11px] font-semibold text-slate-600 leading-tight">testing rubric<br/>per provider</div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════ SOCIAL PROOF STRIP ═══════════════ */}
      <section className="bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Independently audited
            </span>
            <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-800" />
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              50,000+ readers monthly
            </span>
            <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-800" />
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
              CISSP · CEH · CompTIA
            </span>
            <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-800" />
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              202 countries covered
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════ TOP PICKS (above the fold) ═══════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4 relative z-10">
        <TopVpnPicks
          heading="Our Top VPN Picks for 2026"
          eyebrow="Expert-tested & independently reviewed"
        />
      </section>

      {/* ═══════════════ TOPICS ═══════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-3">
            What we cover
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Security Topics
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Everything you need to stay secure while working remotely.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "VPN Guides", desc: "Compare providers, learn setup, understand protocols", href: "/vpn", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            { title: "Public Wi-Fi", desc: "Stay safe on hotel, airport, and cafe networks", href: "/security/public-wifi", icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" },
            { title: "2FA & Accounts", desc: "Protect your accounts with two-factor auth", href: "/security/2fa", icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" },
            { title: "Password Managers", desc: "Never reuse a password again", href: "/security/password-managers", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
          ].map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              className="group relative overflow-hidden p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={hub.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5">
                {hub.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {hub.desc}
              </p>
              <span className="mt-4 inline-flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Explore
                <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════ COUNTRIES ═══════════════ */}
      <section className="relative bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-3">
                Global coverage
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                Best VPN by Country
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Expert-tested recommendations for {countries.length}+ countries
              </p>
            </div>
            <Link
              href="/countries"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-full transition-colors shrink-0"
            >
              View all
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <LazyCountryGrid />

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/countries"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full"
            >
              View all {countries.length} countries
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ TRUST / WHY US ═══════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { title: "100% Independent", desc: "We buy every VPN at retail price and test it ourselves. No pay-for-play, no sponsored rankings.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            { title: "Real-world tests", desc: "Speed-tested across 6 continents, streaming services, and restrictive networks. Results you can verify.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { title: "Certified experts", desc: "Written and fact-checked by CISSP, CEH, and CompTIA-certified security professionals with hands-on experience.", icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ USE CASES ═══════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-3">
            Find your match
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Find the Right VPN for Your Needs
          </h2>
        </div>
        <LazyIntents />
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FAQ items={homeFaqs} title="VPN Questions Answered" />
      </section>

      {/* ═══════════════ BOTTOM CTA ═══════════════ */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 dark:from-blue-700 dark:via-blue-800 dark:to-indigo-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready to Get Protected?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-xl mx-auto leading-relaxed">
            Compare the top VPN services and find the perfect match for your
            security needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/best/vpn"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-700 bg-white hover:bg-blue-50 rounded-xl transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5"
            >
              Compare VPNs Now
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/tools/country-quiz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl transition-all"
            >
              Take the VPN Quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
