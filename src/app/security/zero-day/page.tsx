import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Zero-Day Vulnerabilities Explained (2026) — What Remote Workers Should Know",
  description: "What are zero-day exploits, why they matter, and how to minimize your risk even against unknown vulnerabilities.",
};

export default function ZeroDayPage() {
  const faqs = [
    { question: "What is a zero-day vulnerability?", answer: "A zero-day is a software flaw unknown to the vendor. Attackers discover and exploit it before a patch exists — the vendor has 'zero days' to fix it. These are the most dangerous vulnerabilities because there's no defense through patching." },
    { question: "Can a VPN protect against zero-days?", answer: "A VPN can't directly prevent zero-day exploits, but it reduces your attack surface. By encrypting traffic and hiding your IP, you're harder to target. VPN providers with threat protection (NordVPN, FastestVPN) can block known malicious domains that distribute exploits." },
    { question: "How can I protect myself against unknown threats?", answer: "Layer your defenses: keep software updated (patches fix known vulnerabilities, reducing overall exposure), use a VPN, enable 2FA, run endpoint protection, and be cautious with email attachments and links. No single measure stops zero-days, but layers make exploitation much harder." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Zero-Day Vulnerabilities" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Zero-Day Vulnerabilities Explained</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">Zero-day exploits are the cybersecurity equivalent of an invisible enemy. You can&apos;t patch what you don&apos;t know is broken. Here&apos;s what they are, why they matter, and how to minimize your risk.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-07" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">The Zero-Day Timeline</h2>
        <div className="space-y-3">
          {[
            { phase: "Discovery", desc: "A researcher or attacker discovers a flaw in software that the vendor doesn't know about.", color: "border-blue-300 dark:border-blue-700" },
            { phase: "Weaponization", desc: "An attacker develops an exploit that takes advantage of the vulnerability.", color: "border-yellow-300 dark:border-yellow-700" },
            { phase: "Attack", desc: "The exploit is used in the wild — targeting specific organizations or spread broadly.", color: "border-red-300 dark:border-red-700" },
            { phase: "Detection", desc: "Security researchers or the vendor discover the vulnerability is being exploited.", color: "border-orange-300 dark:border-orange-700" },
            { phase: "Patch Released", desc: "The vendor creates and releases a patch. The 'zero-day' window closes for those who update.", color: "border-green-300 dark:border-green-700" },
            { phase: "Adoption", desc: "Users install the patch. Those who delay remain vulnerable to now-known attacks.", color: "border-green-300 dark:border-green-700" },
          ].map((p, i) => (
            <div key={p.phase} className={`flex gap-4 p-4 border ${p.color} rounded-lg`}>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-bold text-zinc-600 dark:text-zinc-400 shrink-0">{i + 1}</span>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{p.phase}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Defense-in-Depth Strategy</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Since you can&apos;t patch a zero-day before it&apos;s known, your defense must be layered:</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Reduce Attack Surface", items: ["Use a VPN to hide your IP", "Disable unnecessary services/ports", "Remove unused software", "Use a firewall"] },
            { title: "Limit Damage", items: ["Don't use admin account daily", "Enable disk encryption", "Segment work from personal", "Regular backups (3-2-1 rule)"] },
            { title: "Detect Quickly", items: ["Enable OS security notifications", "Use endpoint protection", "Monitor account activity", "Enable 2FA (limits account takeover)"] },
            { title: "Recover Fast", items: ["Automated cloud backups", "Know your incident response plan", "Document your setup for rebuilds", "Keep recovery codes accessible"] },
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

      <section className="mb-10 p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">The #1 Thing You Can Do</h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-300"><strong>Enable automatic updates everywhere.</strong> While auto-updates don&apos;t help during the zero-day window, they instantly close the vulnerability the moment a patch is released. Most attacks exploit <em>known</em> vulnerabilities that already have patches — not zero-days.</p>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "AI-Powered Threats", href: "/security/ai-threats" },
        { label: "Ransomware Protection", href: "/security/ransomware" },
        { label: "Incident Response", href: "/security/incident-response" },
        { label: "Security Checklist", href: "/tools/security-checklist" },
      ]} />
    </article>
  );
}
