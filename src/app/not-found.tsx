import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Browse our most popular guides, country VPN recommendations, and security tools.",
  robots: { index: false, follow: true },
};

const POPULAR_PAGES: Array<{ category: string; items: { label: string; href: string; desc: string }[] }> = [
  {
    category: "Top Guides",
    items: [
      { label: "Best VPN 2026", href: "/best/vpn", desc: "Our top 10 picks tested" },
      { label: "VPN Setup for Beginners", href: "/guides/vpn-setup-beginners", desc: "Step-by-step tutorial" },
      { label: "Public Wi-Fi Safety", href: "/security/public-wifi", desc: "Stay safe on hotel & airport networks" },
      { label: "Password Manager Setup", href: "/guides/password-manager-setup", desc: "Secure your accounts in 15 min" },
    ],
  },
  {
    category: "By Country",
    items: [
      { label: "Best VPN for USA", href: "/vpn/best/united-states", desc: "Top picks for US users" },
      { label: "Best VPN for UK", href: "/vpn/best/united-kingdom", desc: "Privacy & streaming" },
      { label: "Best VPN for Japan", href: "/vpn/best/japan", desc: "Anime, banking, travel" },
      { label: "All 202 Countries", href: "/countries", desc: "Browse country directory" },
    ],
  },
  {
    category: "Tools & Resources",
    items: [
      { label: "Wi-Fi Audit Tool", href: "/tools/wifi-audit", desc: "12-question risk audit" },
      { label: "Security Checklist", href: "/tools/security-checklist", desc: "45-item printable list" },
      { label: "VPN Comparison", href: "/vpn/compare", desc: "Compare any two VPNs" },
      { label: "Glossary", href: "/glossary", desc: "26 security terms explained" },
    ],
  },
];

export default function NotFound() {
  return (
    <>
      {/* ═══ Hero ═══ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.1),transparent_60%)]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Error 404
          </div>

          <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight bg-gradient-to-br from-white via-blue-100 to-blue-300 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            This page took a wrong turn
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Try the search below or browse our most popular content.
          </p>

          {/* Search box */}
          <form action="/search" method="get" className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="search"
                name="q"
                placeholder="Search guides, countries, tools..."
                aria-label="Search the site"
                className="w-full pl-12 pr-32 py-4 rounded-2xl bg-white/95 dark:bg-slate-100 text-slate-900 placeholder:text-slate-400 border border-white/10 ring-1 ring-black/5 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-2xl"
                autoFocus
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <Link href="/" className="text-blue-300 hover:text-white transition-colors underline underline-offset-4 decoration-blue-400/40 hover:decoration-white">
              Return home
            </Link>
            <span className="text-slate-600">·</span>
            <Link href="/sitemap-html" className="text-blue-300 hover:text-white transition-colors underline underline-offset-4 decoration-blue-400/40 hover:decoration-white">
              Browse sitemap
            </Link>
            <span className="text-slate-600">·</span>
            <Link href="/contact" className="text-blue-300 hover:text-white transition-colors underline underline-offset-4 decoration-blue-400/40 hover:decoration-white">
              Report broken link
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ Popular pages ═══ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Popular destinations
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Where most of our visitors are headed today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {POPULAR_PAGES.map((section) => (
            <div
              key={section.category}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-slate-900/40 p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700/60 transition-all"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group block -mx-2 px-2 py-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
                    >
                      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                        {item.label}
                        <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {item.desc}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
