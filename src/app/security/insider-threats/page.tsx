import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Insider Threats for Remote Teams (2026) — Prevention & Detection",
  description: "Insider threats are harder to detect in remote teams. How to prevent data theft, detect suspicious behavior, and build a security-aware culture.",
};

export default function InsiderThreatsPage() {
  const faqs = [
    { question: "What is an insider threat?", answer: "An insider threat is a security risk from someone within the organization — current employees, former employees, contractors, or partners with authorized access. They may intentionally steal data, accidentally expose it, or have their credentials compromised by external attackers." },
    { question: "Are insider threats more common with remote work?", answer: "Remote work increases certain insider threat risks: less physical oversight, more use of personal devices, data accessed from various locations, harder to notice unusual behavior. But it also reduces others (no physical USB theft from office). The key is visibility and access controls." },
    { question: "How can I protect against insider threats without spying on employees?", answer: "Focus on access controls (least privilege), audit logs (what was accessed, not surveillance), data loss prevention (alert on unusual data movement), and security culture (training, clear policies). The goal is protecting data, not monitoring people." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Insider Threats" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Insider Threats for Remote Teams</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">The biggest security risk may not be a hacker — it could be a disgruntled employee, a careless contractor, or a compromised credential. Insider threats are the hardest to detect and the most damaging.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-07" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      {/* Types */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Three Types of Insider Threats</h2>
        <div className="space-y-4">
          {[
            { type: "Malicious Insider", risk: "High", desc: "Intentionally steals data, sabotages systems, or sells access. Often a disgruntled employee, someone about to leave, or an employee bribed by competitors.", indicators: "Accessing data outside their role, downloading large amounts of data, working unusual hours, expressing dissatisfaction" },
            { type: "Negligent Insider", risk: "Medium-High", desc: "Accidentally exposes data through carelessness — weak passwords, phishing clicks, unsecured devices, sharing files incorrectly. The most common insider threat type.", indicators: "Ignoring security policies, using personal devices without protection, clicking phishing links, sharing credentials" },
            { type: "Compromised Insider", risk: "High", desc: "An employee whose credentials are stolen by an external attacker. The attacker uses the legitimate credentials to access data, appearing as a normal employee.", indicators: "Logins from unusual locations, access at unusual times, accessing data outside normal patterns" },
          ].map((t) => (
            <div key={t.type} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{t.type}</h3>
                <span className={`text-xs font-bold px-2 py-1 rounded ${t.risk === "High" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"}`}>{t.risk}</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{t.desc}</p>
              <p className="text-sm text-zinc-500"><strong>Warning signs:</strong> {t.indicators}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prevention */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Prevention for Remote Teams</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Least Privilege Access", desc: "Each person should only have access to data they need for their role. Review permissions quarterly. Remove access when roles change." },
            { title: "Strong Authentication", desc: "MFA on all accounts. Passkeys or hardware keys for sensitive systems. Password manager required. No shared credentials." },
            { title: "VPN + Encryption", desc: "VPN on all remote connections. Full-disk encryption on all devices. Encrypted cloud storage for sensitive files." },
            { title: "Offboarding Procedures", desc: "When someone leaves: revoke all access immediately, change shared passwords, recover company devices, audit their recent data access." },
            { title: "Security Culture", desc: "Regular training on phishing and social engineering. Clear security policies. Encourage reporting of suspicious behavior without blame." },
            { title: "Audit Logs", desc: "Log who accesses what, when. Review unusual patterns. Don't surveil — but do maintain visibility into data access." },
          ].map((p) => (
            <div key={p.title} className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">{p.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Incident Response", href: "/security/incident-response", description: "What to do when insider threat is detected" },
        { label: "Data Privacy Guide", href: "/security/data-privacy", description: "Protecting sensitive data" },
        { label: "Secure File Sharing", href: "/guides/secure-file-sharing", description: "Control who has access" },
        { label: "Password Sharing Safely", href: "/guides/password-sharing-safely", description: "No shared credentials" },
      ]} />
    </article>
  );
}
