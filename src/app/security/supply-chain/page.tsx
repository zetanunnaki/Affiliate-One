import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Supply Chain Attacks Explained (2026) — How They Work & How to Defend",
  description:
    "Supply chain attacks compromise trusted software to reach thousands of victims. SolarWinds, Codecov, and beyond — what remote workers need to know.",
  alternates: { canonical: "/security/supply-chain/" },
  openGraph: {
    title: "Supply Chain Attacks Explained (2026) — How They Work & How to Defend",
    description: "Supply chain attacks compromise trusted software to reach thousands of victims. SolarWinds, Codecov, and beyond — what remote workers need to know.",
    type: "article",
    url: "/security/supply-chain/",
    images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: "Supply Chain Guide" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
};

export default function SupplyChainPage() {
  const faqs = [
    { question: "What is a supply chain attack?", answer: "Instead of attacking you directly, attackers compromise a trusted vendor or software update you already use. When you install the compromised update, the malware comes along. It's especially dangerous because you're trusting software you've been using safely for years." },
    { question: "Can I prevent supply chain attacks?", answer: "You can't fully prevent them (you can't audit every line of code in every tool you use), but you can limit the damage: keep software updated (paradoxically), use defense-in-depth, monitor for unusual behavior, minimize the number of tools/extensions you use, and prefer open-source software where code is publicly auditable." },
    { question: "How does this affect remote workers?", answer: "Remote workers often use more third-party tools than office workers (VPNs, collaboration apps, cloud services). Each tool is a potential supply chain target. Use reputable, audited tools, keep them updated, and prefer providers with transparency reports and open-source code." },
  ];

  const incidents = [
    { name: "SolarWinds (2020)", impact: "18,000 organizations including US government agencies", method: "Malicious code injected into Orion software update", lesson: "Even government-trusted software can be compromised" },
    { name: "Codecov (2021)", impact: "Thousands of CI/CD pipelines", method: "Bash Uploader script modified to exfiltrate credentials", lesson: "Verify integrity of scripts you pipe to bash" },
    { name: "Log4Shell (2021)", impact: "Millions of Java applications worldwide", method: "Zero-day in widely-used logging library", lesson: "Dependencies of dependencies can be attack vectors" },
    { name: "3CX (2023)", impact: "600,000 companies using 3CX phone system", method: "Compromised desktop app update distributed through official channels", lesson: "Legitimate update mechanisms can be weaponized" },
    { name: "xz Utils (2024)", impact: "Nearly all Linux distributions", method: "Social engineering of open-source maintainer to inject backdoor", lesson: "Even critical open-source infrastructure is vulnerable to long-term social engineering" },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Supply Chain Attacks" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Supply Chain Attacks Explained</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">Instead of attacking you directly, sophisticated attackers compromise trusted software you already use. Here&apos;s how supply chain attacks work and how to defend against them.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-02-16" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Notable Supply Chain Attacks</h2>
        <div className="space-y-3">
          {incidents.map((inc) => (
            <div key={inc.name} className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{inc.name}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400"><strong>Impact:</strong> {inc.impact}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400"><strong>Method:</strong> {inc.method}</p>
              <p className="text-sm text-blue-700 dark:text-blue-400 mt-1"><strong>Lesson:</strong> {inc.lesson}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">How Remote Workers Can Defend</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Minimize Your Tool Surface", items: ["Use fewer browser extensions", "Audit installed apps quarterly", "Remove unused software", "Prefer built-in OS tools when possible"] },
            { title: "Prefer Audited & Open-Source", items: ["VPN: Proton VPN (open-source)", "Password manager: Bitwarden (open-source)", "Messaging: Signal (open-source)", "Browser: Firefox (open-source)"] },
            { title: "Monitor & Detect", items: ["Enable OS security notifications", "Watch for unusual app behavior", "Check for unauthorized network connections", "Subscribe to security advisories for tools you use"] },
            { title: "Limit Blast Radius", items: ["Use separate accounts for work and personal", "Don't run as admin for daily work", "Encrypt your disk", "Keep 3-2-1 backups current"] },
          ].map((col) => (
            <div key={col.title} className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-2">{col.title}</h3>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                {col.items.map((item) => <li key={item}>+ {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Zero-Day Vulnerabilities", href: "/security/zero-day" },
        { label: "AI-Powered Threats", href: "/security/ai-threats" },
        { label: "Ransomware Protection", href: "/security/ransomware" },
        { label: "API Key Security", href: "/guides/api-key-security" },
      ]} />
    </article>
  );
}
