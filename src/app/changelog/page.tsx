import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — What's New on BuySecureVPN",
  description: "Transparency log of updates, new content, and corrections on BuySecureVPN.",
};

const entries = [
  { date: "2026-04-07", title: "Site Launch", items: ["Published 101 country VPN pages with unique editorial content", "Launched 14 in-depth guides across VPN, security, and travel categories", "Added 5 provider MDX reviews (NordVPN, Surfshark, ExpressVPN, Proton VPN, Mullvad)", "Created 5 head-to-head VPN comparison pages", "Published Wi-Fi Risk Self-Audit tool and printable security checklist", "Launched glossary with 26 security terms"] },
  { date: "2026-04-07", title: "Country Intent Pages", items: ["Added 100 country + intent variant pages for top 20 countries", "Each page provides intent-specific recommendations (remote work, travel, privacy, streaming, teams)"] },
  { date: "2026-04-07", title: "E-E-A-T Pages", items: ["Published Editorial Policy, Corrections Policy, Affiliate Disclosure", "Created Review Board page with editorial process details", "Added author pages with credentials and professional links"] },
  { date: "2026-04-07", title: "Technical Infrastructure", items: ["Build-time guardrails prevent thin content from being published", "Dynamic OG images for all country pages", "RSS feed for guide articles", "JSON-LD structured data: Article, FAQ, Product, BreadcrumbList, WebSite, Organization"] },
];

export default function ChangelogPage() {
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
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full text-[13px] text-blue-200 mb-5">
            <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Transparency log
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">
            Changelog
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            A transparent log of updates, new content, and changes on BuySecureVPN.
            We believe in documenting what we publish and when.
          </p>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative">
          {/* Vertical timeline rail */}
          <div className="absolute left-[22px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent" />

          <div className="space-y-8">
            {entries.map((entry, i) => (
              <div key={i} className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 ring-4 ring-white dark:ring-slate-950">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all">
                  <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                    <time className="inline-flex items-center px-2.5 py-0.5 text-[11px] font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                      {entry.date}
                    </time>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      {entry.title}
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {entry.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <svg className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
