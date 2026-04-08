import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Threat Modeling for Remote Workers (2026) — Assess Your Real Risks",
  description: "Not everyone faces the same threats. Learn how to assess your personal risk level and build a security stack that matches your actual needs.",
};

export default function ThreatModelPage() {
  const profiles = [
    { name: "Standard Remote Worker", risk: "Medium", threats: "ISP monitoring, public Wi-Fi attacks, phishing, weak passwords", stack: "VPN (NordVPN/Surfshark), password manager, 2FA (authenticator app), software updates", overkill: "Tor, Tails OS, hardware security keys for every account" },
    { name: "Freelancer Handling Client Data", risk: "Medium-High", threats: "Data breaches exposing client info, insecure file sharing, phishing targeting invoices", stack: "VPN, password manager, 2FA, encrypted file sharing (Proton Drive), client data encryption, cyber insurance", overkill: "Air-gapped computers, Faraday bags" },
    { name: "Executive / Decision Maker", risk: "High", threats: "Spear phishing, CEO fraud, business email compromise, targeted attacks, deep fakes", stack: "VPN with dedicated IP, hardware security keys (YubiKey), encrypted communications (Signal), executive protection training", overkill: "Tor for daily browsing (too slow for work)" },
    { name: "Journalist / Activist", risk: "Very High", threats: "State surveillance, targeted hacking, device seizure at borders, source protection", stack: "VPN (Mullvad/Proton), Tor Browser, Signal, full-disk encryption, hardware keys, Tails OS for sensitive work, travel devices", overkill: "Nothing is overkill at this threat level" },
    { name: "Developer with Production Access", risk: "High", threats: "Supply chain attacks, credential theft, compromised CI/CD, insider threats", stack: "VPN, hardware security keys, signed commits, secrets manager, least-privilege IAM, endpoint detection", overkill: "Disconnecting from internet entirely" },
  ];

  const faqs = [
    { question: "What is threat modeling?", answer: "Threat modeling is the process of identifying what you're protecting, who might attack you, how they might attack, and what defenses are proportionate. It prevents both under-protection (leaving real risks unaddressed) and over-protection (wasting time and money on unlikely threats)." },
    { question: "Am I being paranoid?", answer: "If you're a standard remote worker using a VPN, password manager, and 2FA — you've covered 95% of realistic threats. You don't need Tor for checking email. Match your security to your actual risk level, not your anxiety level." },
    { question: "How do I know my threat level?", answer: "Ask yourself: (1) What data do I handle? (personal, client, financial, classified), (2) Who would want to access it? (opportunistic hackers, competitors, governments), (3) What would happen if it was exposed? (embarrassment, financial loss, legal liability, physical danger). Higher stakes = higher threat level." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Threat Modeling" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Threat Modeling for Remote Workers</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">Not everyone needs the same level of security. A freelance writer and an investigative journalist face very different threats. Here&apos;s how to assess your actual risk level and build the right security stack.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-07" />
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Security Profiles</h2>
        <div className="space-y-4">
          {profiles.map((p) => (
            <div key={p.name} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{p.name}</h3>
                <span className={`px-2 py-1 text-xs font-bold rounded ${
                  p.risk === "Very High" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" :
                  p.risk === "High" ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" :
                  p.risk === "Medium-High" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" :
                  "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                }`}>{p.risk}</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-3 text-sm">
                <div><strong className="text-zinc-800 dark:text-zinc-200 block mb-1">Main Threats</strong><span className="text-zinc-600 dark:text-zinc-400">{p.threats}</span></div>
                <div><strong className="text-green-800 dark:text-green-300 block mb-1">Recommended Stack</strong><span className="text-zinc-600 dark:text-zinc-400">{p.stack}</span></div>
                <div><strong className="text-zinc-500 block mb-1">Probably Overkill</strong><span className="text-zinc-600 dark:text-zinc-400">{p.overkill}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">The Universal Baseline (Everyone)</h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">Regardless of your threat level, everyone should have:</p>
        <div className="grid sm:grid-cols-2 gap-2 text-sm text-zinc-700 dark:text-zinc-300">
          <div>1. Password manager with unique passwords</div>
          <div>2. 2FA on email and critical accounts</div>
          <div>3. VPN on all devices</div>
          <div>4. Full-disk encryption enabled</div>
          <div>5. Automatic software updates</div>
          <div>6. Regular backups (3-2-1 rule)</div>
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Security Checklist", href: "/tools/security-checklist", description: "45-item comprehensive checklist" },
        { label: "Best VPN 2026", href: "/best/vpn", description: "Choose the right VPN" },
        { label: "Phishing Guide", href: "/security/phishing", description: "Defend against the #1 attack" },
        { label: "Zero-Day Guide", href: "/security/zero-day", description: "Defend against unknown threats" },
      ]} />
    </article>
  );
}
