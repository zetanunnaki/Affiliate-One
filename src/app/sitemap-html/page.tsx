import Link from "next/link";
import type { Metadata } from "next";
import { getAllCountries, getAllProviders, getAllIntents } from "@/lib/data";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Sitemap — All Pages",
  description: "Complete directory of all pages on BuySecureVPN. Browse countries, guides, reviews, and tools.",
};

export default function HtmlSitemapPage() {
  const countries = getAllCountries();
  const providers = getAllProviders();
  const intents = getAllIntents();
  const guides = getAllPosts("guides");

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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full text-[13px] text-blue-200 mb-5">
            <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Every page
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">
            Sitemap
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Complete directory of all pages on BuySecureVPN.
          </p>
        </div>
      </section>

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid sm:grid-cols-2 gap-8">
        {/* Main pages */}
        <section>
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.12em] mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">Main Pages</h2>
          <ul className="space-y-1 text-sm">
            {[
              { label: "Home", href: "/" }, { label: "Best VPN 2026", href: "/best/vpn" },
              { label: "Best Password Manager", href: "/best/password-manager" }, { label: "Best 2FA App", href: "/best/2fa-app" },
              { label: "Country Directory", href: "/countries" }, { label: "VPN Hub", href: "/vpn" },
              { label: "Security Hub", href: "/security" }, { label: "Guides", href: "/guides" },
              { label: "Resources", href: "/resources" }, { label: "Glossary", href: "/glossary" },
              { label: "Search", href: "/search" },
            ].map((l) => (
              <li key={l.href}><Link href={l.href} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </section>

        {/* Security guides */}
        <section>
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.12em] mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">Security Guides</h2>
          <ul className="space-y-1 text-sm">
            {[
              { label: "Remote Work Security", href: "/security/remote-work" }, { label: "Public Wi-Fi Safety", href: "/security/public-wifi" },
              { label: "2FA Guide", href: "/security/2fa" }, { label: "Password Managers", href: "/security/password-managers" },
              { label: "Travel Security", href: "/security/travel" }, { label: "Phishing Guide", href: "/security/phishing" },
            ].map((l) => (
              <li key={l.href}><Link href={l.href} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </section>

        {/* Guides */}
        <section>
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.12em] mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">Articles ({guides.length})</h2>
          <ul className="space-y-1 text-sm">
            {guides.map((g) => (
              <li key={g.slug}><Link href={`/guides/${g.slug}`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{g.frontmatter.title}</Link></li>
            ))}
          </ul>
        </section>

        {/* VPN pages */}
        <section>
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.12em] mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">VPN</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/vpn/protocols" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">VPN Protocols</Link></li>
            <li><Link href="/vpn/free" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Free VPNs</Link></li>
            <li><Link href="/vpn/vs" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">VPN Comparisons</Link></li>
            <li><Link href="/vpn/compare" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Compare Tool</Link></li>
            {providers.map((p) => (
              <li key={p.id}><Link href={`/vpn/providers/${p.id}`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{p.name} Review</Link></li>
            ))}
            {intents.map((i) => (
              <li key={i.id}><Link href={`/vpn/intent/${i.slug}`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">VPN for {i.label}</Link></li>
            ))}
          </ul>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.12em] mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">Tools</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/tools/wifi-audit" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Wi-Fi Risk Self-Audit</Link></li>
            <li><Link href="/tools/security-checklist" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Security Checklist</Link></li>
          </ul>
        </section>

        {/* Company */}
        <section>
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.12em] mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">Company</h2>
          <ul className="space-y-1 text-sm">
            {[
              { label: "About", href: "/about" }, { label: "Authors", href: "/authors" },
              { label: "Review Board", href: "/review-board" }, { label: "Editorial Policy", href: "/editorial-policy" },
              { label: "Affiliate Disclosure", href: "/affiliate-disclosure" }, { label: "Corrections", href: "/corrections" },
              { label: "Privacy Policy", href: "/privacy" }, { label: "Cookie Notice", href: "/cookies" },
              { label: "Contact", href: "/contact" }, { label: "Changelog", href: "/changelog" },
            ].map((l) => (
              <li key={l.href}><Link href={l.href} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </section>
      </div>

      {/* Countries */}
      <section className="mt-10">
        <h2 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.12em] mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          Countries ({countries.length})
        </h2>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-1 text-sm">
          {countries.map((c) => (
            <Link key={c.iso2} href={`/vpn/best/${c.slug}`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-0.5">
              {c.nameEn}
            </Link>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
}
