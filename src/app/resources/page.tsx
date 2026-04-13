import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Resources — All Guides, Tools & Checklists",
  description: "Every security resource in one place. Guides, interactive tools, printable checklists, and glossary for remote workers.",
};

const tools = [
  {
    title: "Wi-Fi Risk Self-Audit",
    href: "/tools/wifi-audit",
    description: "12-question assessment of your public Wi-Fi security posture",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0",
  },
  {
    title: "Security Checklist",
    href: "/tools/security-checklist",
    description: "45-item printable remote work security checklist",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
];

const references = [
  { title: "VPN Protocols Explained", href: "/vpn/protocols", description: "Compare WireGuard, OpenVPN, IKEv2, and more" },
  { title: "Security & VPN Glossary", href: "/glossary", description: "26 security terms defined in plain language" },
  { title: "Free VPN Analysis", href: "/vpn/free", description: "Which free VPNs are actually safe?" },
  { title: "VPN Comparisons", href: "/vpn/vs", description: "Head-to-head provider comparisons" },
];

export default function ResourcesPage() {
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Everything in one place
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">
            Resources
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Every security guide, tool, and reference in one place. Bookmark this
            page for quick access to all BuySecureVPN resources.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Interactive tools */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-3">
            Interactive
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Tools
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex items-start gap-4 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl ${tool.iconBg} ${tool.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={tool.icon} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Guides */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-2">
                Long-form
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Guides ({guides.length})
              </h2>
            </div>
            <Link
              href="/guides"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-full transition-colors"
            >
              View all
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {guides.slice(0, 12).map((post) => (
              <Link
                key={post.slug}
                href={`/guides/${post.slug}`}
                className="group flex items-center justify-between gap-3 p-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                    {post.frontmatter.title}
                  </h3>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {post.frontmatter.category}
                  </span>
                </div>
                <svg className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </section>

        {/* References */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-3">
            Deep dives
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Reference Pages
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {references.map((ref) => (
              <Link
                key={ref.href}
                href={ref.href}
                className="group p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-0.5 transition-all"
              >
                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                  {ref.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{ref.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick links */}
        <section className="p-7 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/50 border border-slate-200 dark:border-slate-800">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
            Quick Links
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Best VPN 2026", href: "/best/vpn" },
              { label: "Best Password Manager", href: "/best/password-manager" },
              { label: "Best 2FA App", href: "/best/2fa-app" },
              { label: "Country Directory", href: "/countries" },
              { label: "Provider Reviews", href: "/vpn/providers" },
              { label: "RSS Feed", href: "/feed.xml" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 rounded-full transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
