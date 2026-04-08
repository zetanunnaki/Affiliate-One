import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — What's New on SecureWork",
  description: "Transparency log of updates, new content, and corrections on SecureWork.",
};

const entries = [
  { date: "2026-04-07", title: "Site Launch", items: ["Published 101 country VPN pages with unique editorial content", "Launched 14 in-depth guides across VPN, security, and travel categories", "Added 5 provider MDX reviews (NordVPN, Surfshark, ExpressVPN, Proton VPN, Mullvad)", "Created 5 head-to-head VPN comparison pages", "Published Wi-Fi Risk Self-Audit tool and printable security checklist", "Launched glossary with 26 security terms"] },
  { date: "2026-04-07", title: "Country Intent Pages", items: ["Added 100 country + intent variant pages for top 20 countries", "Each page provides intent-specific recommendations (remote work, travel, privacy, streaming, teams)"] },
  { date: "2026-04-07", title: "E-E-A-T Pages", items: ["Published Editorial Policy, Corrections Policy, Affiliate Disclosure", "Created Review Board page with editorial process details", "Added author pages with credentials and professional links"] },
  { date: "2026-04-07", title: "Technical Infrastructure", items: ["Build-time guardrails prevent thin content from being published", "Dynamic OG images for all country pages", "RSS feed for guide articles", "JSON-LD structured data: Article, FAQ, Product, BreadcrumbList, WebSite, Organization"] },
];

export default function ChangelogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Changelog</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        A transparent log of updates, new content, and changes on SecureWork.
        We believe in documenting what we publish and when.
      </p>

      <div className="space-y-8">
        {entries.map((entry, i) => (
          <div key={i} className="border-l-2 border-blue-600 pl-6 pb-2">
            <time className="text-sm font-medium text-blue-600 dark:text-blue-400">{entry.date}</time>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-1 mb-2">{entry.title}</h2>
            <ul className="space-y-1">
              {entry.items.map((item, j) => (
                <li key={j} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                  <span className="text-blue-600 mt-1">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
