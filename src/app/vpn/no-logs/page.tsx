import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "VPN No-Logs Policy Explained (2026) — What It Means & How to Verify",
  description: "What does 'no-logs' actually mean? How to verify claims, which providers have been audited, and what data VPNs actually collect.",
};

export default function NoLogsPage() {
  const auditHistory = [
    { provider: "NordVPN", auditor: "Deloitte", year: "2024", scope: "No-logs infrastructure", result: "Passed" },
    { provider: "NordVPN", auditor: "Cure53", year: "2023", scope: "App security", result: "Passed" },
    { provider: "Surfshark", auditor: "Deloitte", year: "2023", scope: "No-logs policy", result: "Passed" },
    { provider: "FastestVPN", auditor: "Independent", year: "2024", scope: "No-logs policy", result: "Passed" },
    { provider: "Proton VPN", auditor: "Securitum", year: "2024", scope: "Apps + no-logs", result: "Passed" },
    { provider: "Mullvad", auditor: "Assured AB", year: "2024", scope: "Infrastructure", result: "Passed" },
    { provider: "Mullvad", auditor: "Swedish Police", year: "2023", scope: "Server seizure", result: "No data found" },
  ];

  const faqs = [
    { question: "Can I trust a VPN's no-logs claim?", answer: "Claims alone mean nothing. Look for: (1) independent audits by reputable firms (Deloitte, KPMG, PwC, Cure53), (2) open-source code you can verify, (3) real-world tests like server seizures that found no data, (4) RAM-only servers that can't store data persistently." },
    { question: "What data do 'no-log' VPNs actually collect?", answer: "Even 'no-log' providers collect some data for billing: your email address and payment information. What they don't log: your browsing activity, connection timestamps, IP addresses, session duration, or DNS queries. The key distinction is activity logs vs. account data." },
    { question: "Has any no-logs VPN been forced to hand over data?", answer: "There have been several real-world tests. Mullvad's Swedish police raid (2023) found no customer data. These incidents confirmed no-logs policies in practice, not just in marketing." },
    { question: "Why does VPN jurisdiction matter for logging?", answer: "A VPN's jurisdiction determines what laws it must comply with. Providers in Panama (NordVPN), Cayman Islands (FastestVPN), and Switzerland (Proton VPN) face no mandatory data retention laws. Providers in Five Eyes countries may face government pressure to log data." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "VPN", href: "/vpn" }, { label: "No-Logs Policy" }]} />

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          VPN No-Logs Policy: What It Really Means
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          Every VPN claims &quot;no logs.&quot; But what does that actually mean? Which
          providers have proven it? And what data do they still collect?
        </p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-07" />
      </header>

      {/* What no-logs means */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">What &quot;No Logs&quot; Should Mean</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">Not Logged (Activity Data)</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>+ Browsing history / websites visited</li>
              <li>+ Connection timestamps</li>
              <li>+ Your real IP address</li>
              <li>+ Session duration</li>
              <li>+ Bandwidth used</li>
              <li>+ DNS queries</li>
              <li>+ Downloaded files</li>
            </ul>
          </div>
          <div className="p-4 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Usually Collected (Account Data)</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>Email address (for account)</li>
              <li>Payment information (for billing)</li>
              <li>Aggregate server load stats (anonymized)</li>
              <li>Crash reports (optional, anonymized)</li>
              <li>Subscription status</li>
            </ul>
            <p className="text-xs text-zinc-500 mt-2">Exception: Mullvad collects none of these — no email, anonymous payment accepted.</p>
          </div>
        </div>
      </section>

      {/* Audit history */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Independent Audit History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Provider</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Auditor</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Year</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Scope</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {auditHistory.map((a, i) => (
                <tr key={i}>
                  <td className="px-3 py-2 font-medium text-zinc-900 dark:text-zinc-100">{a.provider}</td>
                  <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">{a.auditor}</td>
                  <td className="px-3 py-2 text-center text-zinc-700 dark:text-zinc-300">{a.year}</td>
                  <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">{a.scope}</td>
                  <td className="px-3 py-2 text-center font-semibold text-green-600 dark:text-green-400">{a.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* How to verify */}
      <section className="mb-10 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">How to Verify a No-Logs Claim</h2>
        <ol className="text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
          <li><strong>1. Check for independent audits</strong> — Has the provider been audited by a Big Four firm or Cure53? When was the last audit?</li>
          <li><strong>2. Check the jurisdiction</strong> — Is the provider in a country with mandatory data retention laws?</li>
          <li><strong>3. Look for RAM-only servers</strong> — Servers running in RAM can&apos;t store data persistently.</li>
          <li><strong>4. Review the privacy policy</strong> — Read the actual policy, not just the marketing. What data do they explicitly say they collect?</li>
          <li><strong>5. Check for real-world incidents</strong> — Has the provider been subpoenaed or had servers seized? What happened?</li>
          <li><strong>6. Open-source code</strong> — Can you verify the claims by reviewing the code? (Proton VPN, Mullvad: yes)</li>
        </ol>
      </section>

      <FAQ items={faqs} />

      <InternalLinks links={[
        { label: "Best VPN for Privacy", href: "/money/best-vpn-privacy", description: "Privacy-focused VPN rankings" },
        { label: "VPN Protocols", href: "/vpn/protocols", description: "How VPN encryption works" },
        { label: "Mullvad Review", href: "/vpn/providers/mullvad", description: "The most private VPN" },
        { label: "Proton VPN Review", href: "/vpn/providers/protonvpn", description: "Open-source, Swiss privacy" },
      ]} />
    </article>
  );
}
