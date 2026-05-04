import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Incident Response for Remote Teams (2026) — What to Do When Things Go Wrong",
  description:
    "Step-by-step incident response plan for remote teams. Compromised accounts, data breaches, lost devices, and phishing attacks handled.",
  alternates: { canonical: "/security/incident-response/" },
  openGraph: {
    title: "Incident Response for Remote Teams (2026) — What to Do When Things Go Wrong",
    description: "Step-by-step incident response plan for remote teams. Compromised accounts, data breaches, lost devices, and phishing attacks handled.",
    type: "article",
    url: "/security/incident-response/",
    images: [{ url: "/images/og/og-security.webp", width: 1200, height: 675, alt: "Incident Response Guide" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-security.webp"] },
};

export default function IncidentResponsePage() {
  const scenarios = [
    {
      title: "Compromised Account",
      urgency: "Critical",
      steps: [
        "Change the password immediately from a secure device",
        "Enable/verify 2FA on the compromised account",
        "Revoke all active sessions (force logout everywhere)",
        "Check for unauthorized changes (forwarding rules, recovery email, connected apps)",
        "Notify your team and IT — the attacker may have accessed shared resources",
        "Check if the same password was used elsewhere (change those too)",
        "Review account activity logs for the scope of unauthorized access",
      ],
    },
    {
      title: "Lost or Stolen Device",
      urgency: "Critical",
      steps: [
        "Use Find My Device to locate, lock, or remotely wipe",
        "Change passwords for all accounts logged in on the device",
        "Revoke the device's access tokens (Google, Microsoft, Slack, etc.)",
        "Notify your company's IT department immediately",
        "Report to local police (needed for insurance)",
        "Monitor accounts for unauthorized activity for the next 30 days",
        "If encrypted (BitLocker/FileVault): data is protected even without wipe",
      ],
    },
    {
      title: "Phishing Attack (Clicked a Link)",
      urgency: "High",
      steps: [
        "Disconnect from the internet immediately if malware is suspected",
        "If you entered credentials: change that password RIGHT NOW",
        "Run a full malware scan on the affected device",
        "Enable 2FA on the potentially compromised account",
        "Check for unauthorized activity on the account",
        "Report the phishing email to your IT team and the impersonated brand",
        "Alert colleagues who may have received the same phishing email",
      ],
    },
    {
      title: "Data Breach Notification",
      urgency: "High",
      steps: [
        "Identify what data was exposed (email, password, financial, personal)",
        "Change the compromised password (and anywhere it was reused)",
        "Enable 2FA on the breached service",
        "Check haveibeenpwned.com for all your email addresses",
        "If financial data was exposed: contact bank, enable fraud alerts",
        "If SSN/ID was exposed: freeze credit at all bureaus",
        "Monitor affected accounts for 90 days",
      ],
    },
    {
      title: "Suspicious Network Activity",
      urgency: "Medium",
      steps: [
        "Disconnect from the suspicious network immediately",
        "Connect via your phone's cellular hotspot instead",
        "Enable your VPN before reconnecting to any network",
        "Run a DNS leak test to ensure your VPN is working properly",
        "Check for unauthorized devices on your network (router admin panel)",
        "Change your Wi-Fi password if it's your home network",
        "If on public Wi-Fi: assume it's compromised and avoid sensitive activities",
      ],
    },
  ];

  const faqs = [
    { question: "How quickly do I need to respond?", answer: "For compromised accounts and lost devices: immediately (within minutes). Attackers move fast — the sooner you change passwords and revoke access, the less damage they can do. For data breach notifications: within 24 hours. For suspicious activity: investigate within the hour." },
    { question: "Should I tell my employer about a personal device breach?", answer: "Yes, if you use that device for work. Your employer needs to know so they can revoke access to company resources, check for unauthorized access to company data, and help you secure your accounts. Most companies have incident response procedures that include personal device compromises." },
    { question: "Do I need to report to law enforcement?", answer: "For stolen devices: yes, for insurance purposes. For identity theft: file at identitytheft.gov (US) or your country's equivalent. For financial fraud: report to your bank and local police. For corporate breaches: your company's legal team handles regulatory reporting." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Incident Response" }]} />

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Incident Response for Remote Teams
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          Security incidents happen. What matters is how quickly and effectively
          you respond. This guide covers the most common scenarios with step-by-step
          action plans.
        </p>
        <Byline authorId="sarah-chen" updatedAt="2026-01-15" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      {/* Scenarios */}
      <div className="space-y-6 mb-10">
        {scenarios.map((s) => (
          <section key={s.title} className="border border-zinc-200 dark:border-zinc-700 rounded-xl overflow-hidden">
            <div className={`px-5 py-3 flex items-center justify-between ${
              s.urgency === "Critical" ? "bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800" :
              s.urgency === "High" ? "bg-orange-50 dark:bg-orange-900/20 border-b border-orange-200 dark:border-orange-800" :
              "bg-yellow-50 dark:bg-yellow-900/20 border-b border-yellow-200 dark:border-yellow-800"
            }`}>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{s.title}</h2>
              <span className={`px-2 py-1 text-xs font-bold rounded ${
                s.urgency === "Critical" ? "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300" :
                s.urgency === "High" ? "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300" :
                "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300"
              }`}>{s.urgency}</span>
            </div>
            <div className="p-5">
              <ol className="space-y-2">
                {s.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-600 dark:text-zinc-400 shrink-0">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ))}
      </div>

      {/* Prevention */}
      <section className="mb-10 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Prevention Is Better Than Response</h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">Most incidents are preventable with basic security hygiene:</p>
        <div className="grid sm:grid-cols-2 gap-2 text-sm text-zinc-700 dark:text-zinc-300">
          <div>+ Password manager with unique passwords</div>
          <div>+ 2FA on every account (authenticator app)</div>
          <div>+ VPN on all networks</div>
          <div>+ Full-disk encryption enabled</div>
          <div>+ Software auto-updates enabled</div>
          <div>+ Phishing awareness training</div>
        </div>
      </section>

      <FAQ items={faqs} />

      <InternalLinks links={[
        { label: "Data Breach Response", href: "/guides/data-breach-response", description: "Detailed breach response guide" },
        { label: "Phishing Guide", href: "/security/phishing", description: "Recognize and avoid phishing" },
        { label: "Security Checklist", href: "/tools/security-checklist", description: "Prevention checklist" },
        { label: "Device Encryption", href: "/guides/device-encryption-guide", description: "Protect data on lost devices" },
      ]} />
    </article>
  );
}
