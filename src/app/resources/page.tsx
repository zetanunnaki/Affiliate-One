import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Resources — All Guides, Tools & Checklists",
  description: "Every security resource in one place. Guides, interactive tools, printable checklists, and glossary for remote workers.",
};

export default function ResourcesPage() {
  const guides = getAllPosts("guides");

  const tools = [
    { title: "Wi-Fi Risk Self-Audit", href: "/tools/wifi-audit", description: "12-question assessment of your public Wi-Fi security posture" },
    { title: "Security Checklist", href: "/tools/security-checklist", description: "45-item printable remote work security checklist" },
  ];

  const references = [
    { title: "VPN Protocols Explained", href: "/vpn/protocols", description: "Compare WireGuard, OpenVPN, IKEv2, and more" },
    { title: "Security & VPN Glossary", href: "/glossary", description: "26 security terms defined in plain language" },
    { title: "Free VPN Analysis", href: "/vpn/free", description: "Which free VPNs are actually safe?" },
    { title: "VPN Comparisons", href: "/vpn/vs", description: "Head-to-head provider comparisons" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Resources
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Every security guide, tool, and reference in one place. Bookmark this
          page for quick access to all SecureWork resources.
        </p>
      </header>

      {/* Interactive tools */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
          Interactive Tools
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="p-5 border-2 border-blue-200 dark:border-blue-800 rounded-xl hover:shadow-md hover:border-blue-400 dark:hover:border-blue-600 transition-all group bg-blue-50/50 dark:bg-blue-900/10">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 mb-1">{tool.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Guides ({guides.length})</h2>
          <Link href="/guides" className="text-sm text-blue-600 hover:text-blue-700">View all &rarr;</Link>
        </div>
        <div className="space-y-3">
          {guides.map((post) => (
            <Link key={post.slug} href={`/guides/${post.slug}`} className="flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group">
              <div className="min-w-0">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 truncate">{post.frontmatter.title}</h3>
                <span className="text-xs text-zinc-500">{post.frontmatter.category}</span>
              </div>
              <span className="text-zinc-400 group-hover:text-blue-600 shrink-0 ml-3">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* References */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Reference Pages</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {references.map((ref) => (
            <Link key={ref.href} href={ref.href} className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all group">
              <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 mb-1">{ref.title}</h3>
              <p className="text-xs text-zinc-500">{ref.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Quick Links</h2>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Best VPN 2026", href: "/best/vpn" },
            { label: "Best Password Manager", href: "/best/password-manager" },
            { label: "Best 2FA App", href: "/best/2fa-app" },
            { label: "Country Directory", href: "/countries" },
            { label: "Provider Reviews", href: "/vpn/providers" },
            { label: "RSS Feed", href: "/feed.xml" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="px-3 py-1.5 text-sm border border-zinc-300 dark:border-zinc-600 rounded-lg hover:bg-white dark:hover:bg-zinc-700 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
