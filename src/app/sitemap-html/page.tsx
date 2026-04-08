import Link from "next/link";
import type { Metadata } from "next";
import { getAllCountries, getAllProviders, getAllIntents } from "@/lib/data";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Sitemap — All Pages",
  description: "Complete directory of all pages on SecureWork. Browse countries, guides, reviews, and tools.",
};

export default function HtmlSitemapPage() {
  const countries = getAllCountries();
  const providers = getAllProviders();
  const intents = getAllIntents();
  const guides = getAllPosts("guides");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">Sitemap</h1>

      <div className="grid sm:grid-cols-2 gap-8">
        {/* Main pages */}
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Main Pages</h2>
          <ul className="space-y-1 text-sm">
            {[
              { label: "Home", href: "/" }, { label: "Best VPN 2026", href: "/best/vpn" },
              { label: "Best Password Manager", href: "/best/password-manager" }, { label: "Best 2FA App", href: "/best/2fa-app" },
              { label: "Country Directory", href: "/countries" }, { label: "VPN Hub", href: "/vpn" },
              { label: "Security Hub", href: "/security" }, { label: "Guides", href: "/guides" },
              { label: "Resources", href: "/resources" }, { label: "Glossary", href: "/glossary" },
              { label: "Search", href: "/search" },
            ].map((l) => (
              <li key={l.href}><Link href={l.href} className="text-blue-600 hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </section>

        {/* Security guides */}
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Security Guides</h2>
          <ul className="space-y-1 text-sm">
            {[
              { label: "Remote Work Security", href: "/security/remote-work" }, { label: "Public Wi-Fi Safety", href: "/security/public-wifi" },
              { label: "2FA Guide", href: "/security/2fa" }, { label: "Password Managers", href: "/security/password-managers" },
              { label: "Travel Security", href: "/security/travel" }, { label: "Phishing Guide", href: "/security/phishing" },
            ].map((l) => (
              <li key={l.href}><Link href={l.href} className="text-blue-600 hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </section>

        {/* Guides */}
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Articles ({guides.length})</h2>
          <ul className="space-y-1 text-sm">
            {guides.map((g) => (
              <li key={g.slug}><Link href={`/guides/${g.slug}`} className="text-blue-600 hover:underline">{g.frontmatter.title}</Link></li>
            ))}
          </ul>
        </section>

        {/* VPN pages */}
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">VPN</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/vpn/protocols" className="text-blue-600 hover:underline">VPN Protocols</Link></li>
            <li><Link href="/vpn/free" className="text-blue-600 hover:underline">Free VPNs</Link></li>
            <li><Link href="/vpn/vs" className="text-blue-600 hover:underline">VPN Comparisons</Link></li>
            <li><Link href="/vpn/compare" className="text-blue-600 hover:underline">Compare Tool</Link></li>
            {providers.map((p) => (
              <li key={p.id}><Link href={`/vpn/providers/${p.id}`} className="text-blue-600 hover:underline">{p.name} Review</Link></li>
            ))}
            {intents.map((i) => (
              <li key={i.id}><Link href={`/vpn/intent/${i.slug}`} className="text-blue-600 hover:underline">VPN for {i.label}</Link></li>
            ))}
          </ul>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Tools</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/tools/wifi-audit" className="text-blue-600 hover:underline">Wi-Fi Risk Self-Audit</Link></li>
            <li><Link href="/tools/security-checklist" className="text-blue-600 hover:underline">Security Checklist</Link></li>
          </ul>
        </section>

        {/* Company */}
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Company</h2>
          <ul className="space-y-1 text-sm">
            {[
              { label: "About", href: "/about" }, { label: "Authors", href: "/authors" },
              { label: "Review Board", href: "/review-board" }, { label: "Editorial Policy", href: "/editorial-policy" },
              { label: "Affiliate Disclosure", href: "/affiliate-disclosure" }, { label: "Corrections", href: "/corrections" },
              { label: "Privacy Policy", href: "/privacy" }, { label: "Cookie Notice", href: "/cookies" },
              { label: "Contact", href: "/contact" }, { label: "Changelog", href: "/changelog" },
            ].map((l) => (
              <li key={l.href}><Link href={l.href} className="text-blue-600 hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </section>
      </div>

      {/* Countries */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Countries ({countries.length})</h2>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-1 text-sm">
          {countries.map((c) => (
            <Link key={c.iso2} href={`/vpn/best/${c.slug}`} className="text-blue-600 hover:underline py-0.5">
              {c.nameEn}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
