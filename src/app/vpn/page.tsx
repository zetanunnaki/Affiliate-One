import Link from "next/link";
import type { Metadata } from "next";
import { getAllProviders, getAllIntents, getAllCountries } from "@/lib/data";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "VPN Hub — Guides, Reviews & Comparisons",
  description:
    "Everything you need to know about VPNs. Expert guides, provider reviews, country-specific recommendations, and use-case comparisons.",
  alternates: { canonical: "/vpn/" },
  openGraph: {
    title: "VPN Hub — Guides, Reviews & Comparisons | BuySecureVPN",
    description: "Expert VPN guides, reviews, and country-specific recommendations.",
    type: "website",
    url: "/vpn/",
    images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: "BuySecureVPN — VPN Hub" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
};

export default function VpnHubPage() {
  const providers = getAllProviders();
  const intents = getAllIntents();
  const countries = getAllCountries().slice(0, 8);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full text-[13px] text-blue-200 mb-5">
            <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            VPN resources
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">
            VPN Hub
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Expert VPN guides, independent provider reviews, and country-specific
            recommendations to help you choose the right VPN for your needs.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 -mt-8 relative z-10">
        <TopVpnPicks heading="Top VPN Picks for 2026" eyebrow="Our editor's choices" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* By use case */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-2">
                Find your match
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                VPN by Use Case
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {intents.map((intent) => (
              <Link
                key={intent.id}
                href={`/vpn/intent/${intent.slug}`}
                className="group relative overflow-hidden p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-2xl group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-colors" />
                <div className="relative">
                  <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    VPN for {intent.label}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
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

        {/* Providers */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-2">
                Provider reviews
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Top Providers
              </h2>
            </div>
            <Link
              href="/vpn/providers"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-full transition-colors"
            >
              View all
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {providers.slice(0, 3).map((p) => (
              <Link
                key={p.id}
                href={`/vpn/providers/${p.id}`}
                className="group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/providers/${p.id}.svg`}
                    alt={`${p.name} logo`}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-xl object-contain bg-white p-1.5 ring-1 ring-slate-200 dark:ring-slate-700"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(p.rating) ? "text-yellow-400" : "text-slate-200 dark:text-slate-700"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{p.priceRange}</span>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                    Review &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Countries */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-2">
                By location
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Best VPN by Country
              </h2>
            </div>
            <Link
              href="/countries"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-full transition-colors"
            >
              All 202 countries
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {countries.map((c) => (
              <Link
                key={c.iso2}
                href={`/vpn/best/${c.slug}`}
                className="group flex items-center gap-2 p-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate flex-1">
                  Best VPN for {c.nameEn}
                </span>
                <svg className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
