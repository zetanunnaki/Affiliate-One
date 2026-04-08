import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Tools — Interactive Audits & Checklists",
  description: "Free interactive security tools for remote workers. Wi-Fi audit, security checklist, VPN comparison, and more.",
};

const tools = [
  {
    title: "Wi-Fi Risk Self-Audit",
    href: "/tools/wifi-audit",
    description: "12-question assessment of your public Wi-Fi security posture. Get a score and personalized recommendations.",
    badge: "Interactive",
  },
  {
    title: "Security Checklist",
    href: "/tools/security-checklist",
    description: "45-item printable checklist covering network, account, device, data, behavioral, and travel security.",
    badge: "Printable",
  },
  {
    title: "VPN Comparison Tool",
    href: "/vpn/compare",
    description: "Pick any two VPN providers and see a side-by-side feature comparison table instantly.",
    badge: "Interactive",
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Security Tools
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Free interactive tools to assess and improve your security posture.
          No account required, no data collected.
        </p>
      </header>

      <div className="space-y-6">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="block p-6 border-2 border-blue-200 dark:border-blue-800 rounded-xl hover:shadow-md hover:border-blue-400 dark:hover:border-blue-600 transition-all group bg-blue-50/30 dark:bg-blue-900/10"
          >
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600">
                {tool.title}
              </h2>
              <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30 rounded-full shrink-0">
                {tool.badge}
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {tool.description}
            </p>
            <span className="inline-block mt-3 text-sm font-medium text-blue-600">
              Launch tool &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
