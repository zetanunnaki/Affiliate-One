import Link from "next/link";
import { getAllCountries, getAllProviders, getAllIntents } from "@/lib/data";
import Flag from "@/components/ui/Flag";

// Countries with hero images — rendered with photo background
const COUNTRIES_WITH_HERO = new Set([
  "united-states", "united-kingdom", "germany", "france", "japan",
  "australia", "canada", "brazil", "india", "mexico", "spain", "italy",
  "netherlands", "sweden", "singapore", "south-korea", "switzerland",
  "poland", "turkey", "argentina",
]);

export default function Home() {
  const countries = getAllCountries();
  const providers = getAllProviders();
  const intents = getAllIntents();

  // Prefer countries with hero photos for the showcase
  const featuredCountries = countries
    .filter((c) => COUNTRIES_WITH_HERO.has(c.slug))
    .slice(0, 8);

  const topProviders = providers.slice(0, 3);

  return (
    <div>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/90 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_15%_20%,rgba(59,130,246,0.25),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_500px_at_85%_80%,rgba(99,102,241,0.18),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_400px_300px_at_50%_50%,rgba(14,165,233,0.08),transparent_70%)]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Animated glow orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* ── Left: headline + CTA ── */}
            <div>
              {/* Trust pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full text-[13px] text-blue-200 mb-7">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 bg-green-400 rounded-full" />
                </span>
                Independently tested &middot; Updated weekly
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-extrabold text-white leading-[1.05] tracking-tight mb-6">
                Find the Best VPN
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
                  for Your Needs
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed">
                Expert-tested VPN reviews, security guides, and country-specific
                recommendations. We help remote workers stay protected —
                everywhere.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
                <Link
                  href="/best/vpn"
                  className="group inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
                >
                  Best VPN 2026
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/countries"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all duration-200 backdrop-blur-sm"
                >
                  Find Your Country
                </Link>
              </div>

              {/* Live stats strip */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/10 max-w-lg">
                {[
                  { value: `${countries.length}+`, label: "Countries covered" },
                  { value: "75", label: "Security guides" },
                  { value: `${providers.length}`, label: "VPNs tested" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: visual showcase ── */}
            <div className="relative lg:pl-8">
              {/* Decorative glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent rounded-3xl blur-2xl" />

              {/* Main hero image card */}
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-blue-950/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/illustrations/hero-remote-work.webp"
                  alt="Remote worker using VPN at a cafe"
                  className="w-full h-auto aspect-[16/10] object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width={1280}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Overlay: top pick card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 rounded-full">
                      Editor&apos;s pick
                    </span>
                    <div className="flex items-center gap-1 text-xs text-yellow-300">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      4.8 / 5
                    </div>
                  </div>
                  <div className="text-white font-bold text-lg mb-0.5">NordVPN</div>
                  <p className="text-xs sm:text-sm text-slate-200/90">
                    Fastest servers, audited no-logs, 10 devices
                  </p>
                </div>
              </div>

              {/* Floating badge — Bottom-left */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2 px-4 py-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-xl shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-semibold text-slate-900 dark:text-white">100% Independent</div>
                  <div className="text-[10px] text-slate-500">No pay-for-play</div>
                </div>
              </div>

              {/* Floating badge — Top-right */}
              <div className="hidden sm:flex absolute -top-4 -right-2 items-center gap-2 px-4 py-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-xl shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-semibold text-slate-900 dark:text-white">Expert tested</div>
                  <div className="text-[10px] text-slate-500">By certified pros</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none" />
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
            {
              title: "VPN Guides",
              desc: "Compare providers, learn setup, understand protocols",
              href: "/vpn",
              color: "blue",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
            {
              title: "Public Wi-Fi",
              desc: "Stay safe on hotel, airport, and cafe networks",
              href: "/security/public-wifi",
              color: "cyan",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                </svg>
              ),
            },
            {
              title: "2FA & Accounts",
              desc: "Protect your accounts with two-factor auth",
              href: "/security/2fa",
              color: "indigo",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              ),
            },
            {
              title: "Password Managers",
              desc: "Never reuse a password again",
              href: "/security/password-managers",
              color: "violet",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
            },
          ].map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              className="group relative overflow-hidden p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:scale-110 transition-all duration-300">
                {hub.icon}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5">
                {hub.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {hub.desc}
              </p>
              <div className="mt-4 inline-flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Explore
                <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════ COUNTRIES with hero images ═══════════════ */}
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
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredCountries.map((country) => (
              <Link
                key={country.iso2}
                href={`/vpn/best/${country.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] ring-1 ring-slate-200 dark:ring-slate-700/60 hover:ring-blue-400 dark:hover:ring-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/countries/${country.slug}.webp`}
                  alt={`${country.nameEn} landmark`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Flag iso2={country.iso2} name={country.nameEn} size="sm" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">
                      Best VPN 2026
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {country.nameEn}
                  </h3>
                  <div className="flex items-center text-sm text-blue-200 font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View guide
                    <svg className="ml-1 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

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
            {
              title: "100% Independent",
              desc: "We buy every VPN at retail price and test it ourselves. No pay-for-play, no sponsored rankings.",
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
            {
              title: "Real-world tests",
              desc: "Speed-tested across 6 continents, streaming services, and restrictive networks. Results you can verify.",
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
            },
            {
              title: "Certified experts",
              desc: "Written and fact-checked by CISSP, CEH, and CompTIA-certified security professionals with hands-on experience.",
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 mb-5">
                {item.icon}
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

      {/* ═══════════════ TOP PROVIDERS ═══════════════ */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-3">
              Our recommendations
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Top VPN Providers
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Independently tested and reviewed. No pay-for-play.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topProviders.map((provider, i) => (
              <Link
                key={provider.id}
                href={`/vpn/providers/${provider.id}`}
                className="group relative p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300"
              >
                {i === 0 && (
                  <span className="absolute -top-3 left-6 px-3 py-1 text-[11px] font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-md">
                    Editor&apos;s Choice
                  </span>
                )}
                <div className="flex items-start gap-4 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/providers/${provider.id}.svg`}
                    alt={`${provider.name} logo`}
                    width={48}
                    height={48}
                    className="w-12 h-12 shrink-0 rounded-xl object-contain bg-white p-1.5 ring-1 ring-slate-200 dark:ring-slate-700"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                      {provider.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <svg
                            key={idx}
                            className={`w-3.5 h-3.5 ${idx < Math.floor(provider.rating) ? "text-yellow-400" : "text-slate-200 dark:text-slate-700"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                        {provider.rating}/5
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5 line-clamp-2">
                  {provider.notes}
                </p>
                {/* Feature chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {provider.features.noLogsClaim && (
                    <span className="px-2 py-0.5 text-[11px] font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 rounded">
                      No logs
                    </span>
                  )}
                  {provider.features.killSwitch && (
                    <span className="px-2 py-0.5 text-[11px] font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 rounded">
                      Kill switch
                    </span>
                  )}
                  {provider.features.splitTunneling && (
                    <span className="px-2 py-0.5 text-[11px] font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-400 rounded">
                      Split tunneling
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {provider.priceRange}
                  </span>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                    Read review &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {intents.map((intent) => (
            <Link
              key={intent.id}
              href={`/vpn/intent/${intent.slug}`}
              className="group relative overflow-hidden p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-2xl group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-colors" />
              <div className="relative">
                <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  VPN for {intent.label}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {intent.description}
                </p>
                <div className="inline-flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  Explore guide
                  <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════ BOTTOM CTA ═══════════════ */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 dark:from-blue-700 dark:via-blue-800 dark:to-indigo-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl" />

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
