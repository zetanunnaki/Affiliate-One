import Link from "next/link";
import { getAllCountries, getAllProviders, getAllIntents } from "@/lib/data";
import Flag from "@/components/ui/Flag";

export default function Home() {
  const countries = getAllCountries();
  const providers = getAllProviders();
  const intents = getAllIntents();
  const featuredCountries = countries.slice(0, 12);

  return (
    <div>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.1),transparent_60%)]" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
          {/* Trust badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-sm text-blue-200">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Independently tested &middot; {providers.length} VPNs reviewed &middot; {countries.length}+ countries
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center text-white leading-[1.1] tracking-tight mb-6">
            Find the Best VPN
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              for Your Needs
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            Expert-tested VPN reviews, security guides, and country-specific recommendations.
            We help remote workers stay protected — everywhere.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/best/vpn"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              Best VPN 2026
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/countries"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white border border-white/20 hover:bg-white/10 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              Find Your Country
            </Link>
          </div>

          {/* Provider logos strip */}
          <div className="mt-16 flex items-center justify-center gap-8 sm:gap-12 opacity-40">
            {providers.slice(0, 5).map((p) => (
              <span key={p.id} className="text-white/80 text-sm font-semibold tracking-wide">
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TOPICS ═══════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Security Topics
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Everything you need to stay secure while working remotely.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "VPN Guides", desc: "Compare providers, learn setup, understand protocols", href: "/vpn", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>) },
            { title: "Public Wi-Fi", desc: "Stay safe on hotel, airport, and cafe networks", href: "/security/public-wifi", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" /></svg>) },
            { title: "2FA & Accounts", desc: "Protect your accounts with two-factor auth", href: "/security/2fa", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>) },
            { title: "Password Managers", desc: "Never reuse a password again", href: "/security/password-managers", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>) },
          ].map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              className="group relative p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                {hub.icon}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5">
                {hub.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {hub.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════ COUNTRIES ═══════════════ */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                Best VPN by Country
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Expert-tested recommendations for {countries.length}+ countries
              </p>
            </div>
            <Link
              href="/countries"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
            >
              View all countries
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {featuredCountries.map((country) => (
              <Link
                key={country.iso2}
                href={`/vpn/best/${country.slug}`}
                className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl hover:shadow-lg hover:shadow-slate-200/30 dark:hover:shadow-black/20 hover:border-blue-200 dark:hover:border-blue-700 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Flag iso2={country.iso2} name={country.nameEn} size="lg" />
                <div>
                  <span className="font-semibold text-sm text-slate-900 dark:text-white block">{country.nameEn}</span>
                  <span className="text-xs text-slate-400">Best VPN 2026</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link href="/countries" className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              View all {countries.length} countries &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ TOP PROVIDERS ═══════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Top VPN Providers
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Independently tested and reviewed. No pay-for-play.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.slice(0, 3).map((provider, i) => (
            <Link
              key={provider.id}
              href={`/vpn/providers/${provider.id}`}
              className="group relative p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300"
            >
              {i === 0 && (
                <span className="absolute -top-3 left-6 px-3 py-1 text-[11px] font-bold text-white bg-blue-600 rounded-full shadow-sm">
                  Editor&apos;s Choice
                </span>
              )}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {provider.name}
                </h3>
                <div className="flex items-center gap-1 px-2.5 py-1 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="text-sm font-bold text-green-700 dark:text-green-400">{provider.rating}</span>
                  <span className="text-xs text-green-600 dark:text-green-500">/5</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{provider.notes}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">{provider.priceRange}</span>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  Read review &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════ USE CASES ═══════════════ */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Find the Right VPN for Your Needs
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {intents.map((intent) => (
              <Link
                key={intent.id}
                href={`/vpn/intent/${intent.slug}`}
                className="group p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  VPN for {intent.label}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {intent.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BOTTOM CTA ═══════════════ */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ready to Get Protected?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Compare the top VPN services and find the perfect match for your security needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/best/vpn"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-xl transition-all shadow-lg shadow-black/10 hover:-translate-y-0.5"
            >
              Compare VPNs Now
            </Link>
            <Link
              href="/tools/country-quiz"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-xl transition-all"
            >
              Take the VPN Quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
