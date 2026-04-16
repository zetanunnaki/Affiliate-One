import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Ransomware Protection for Remote Workers (2026)",
  description: "How to prevent, detect, and recover from ransomware attacks. Backup strategies, security practices, and what to do if you're hit.",
};

export default function RansomwarePage() {
  const faqs = [
    { question: "Can a VPN prevent ransomware?", answer: "A VPN alone cannot prevent ransomware, but it helps. VPN encrypts your traffic (preventing some delivery methods on public Wi-Fi) and some VPNs include threat protection that blocks known malicious domains. But ransomware primarily spreads through phishing emails and malicious downloads — you need a multi-layered defense." },
    { question: "Should I pay the ransom?", answer: "Law enforcement agencies universally recommend NOT paying. Payment funds criminal organizations, doesn't guarantee you'll get your data back, and marks you as a target for future attacks. Instead, restore from backups and report to authorities." },
    { question: "How does ransomware infect remote workers?", answer: "Common vectors: (1) Phishing emails with malicious attachments or links, (2) Compromised websites (drive-by downloads), (3) Exploiting unpatched software vulnerabilities, (4) Malicious USB devices, (5) Compromised remote desktop (RDP) connections." },
    { question: "Are Macs and phones vulnerable to ransomware?", answer: "Yes, though less common than Windows. Mac ransomware exists (KeRanger, ThiefQuest). Mobile ransomware typically locks the screen rather than encrypting files. All platforms benefit from the same prevention measures: backups, updates, and caution with downloads." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Ransomware" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Ransomware Protection for Remote Workers</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">Ransomware encrypts your files and demands payment. For remote workers without corporate IT backup, an attack can be devastating. Here&apos;s how to prevent, detect, and recover.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-07" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Prevention Layers</h2>
        <div className="space-y-3">
          {[
            { layer: "1", title: "Backups (Most Important)", desc: "Follow the 3-2-1 rule: 3 copies, 2 storage types, 1 offsite. If ransomware hits, you restore from backup and lose nothing. Keep at least one backup disconnected from your network.", link: "/guides/secure-backups-guide" },
            { layer: "2", title: "Software Updates", desc: "Most ransomware exploits known vulnerabilities that have patches available. Enable automatic updates for OS, browser, and all applications." },
            { layer: "3", title: "Email Caution", desc: "70% of ransomware arrives via email. Don't open unexpected attachments. Verify links before clicking. Report suspicious emails. See our phishing guide.", link: "/security/phishing" },
            { layer: "4", title: "Endpoint Protection", desc: "Use Windows Defender (built-in, adequate for most users) or a reputable third-party solution. Enable ransomware protection features like Controlled Folder Access (Windows)." },
            { layer: "5", title: "VPN + Threat Protection", desc: "A VPN prevents network-level attacks on public Wi-Fi. VPN providers like NordVPN include Threat Protection that blocks known malicious domains." },
            { layer: "6", title: "Principle of Least Privilege", desc: "Don't use an admin account for daily work. Create a standard user account. This limits ransomware's ability to encrypt system files and spread." },
          ].map((l) => (
            <div key={l.layer} className="flex gap-4 p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{l.layer}</span>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{l.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">If You&apos;re Hit: Emergency Steps</h2>
        <ol className="text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
          <li><strong>1. Disconnect immediately</strong> — Unplug ethernet, disable Wi-Fi. Prevent spread to other devices and network drives.</li>
          <li><strong>2. Do NOT pay the ransom</strong> — Payment doesn&apos;t guarantee recovery and funds criminal operations.</li>
          <li><strong>3. Document everything</strong> — Take photos of ransom screens, note the variant name if shown.</li>
          <li><strong>4. Report</strong> — To your company IT, local law enforcement, and FBI IC3 (ic3.gov) or equivalent.</li>
          <li><strong>5. Check No More Ransom</strong> — nomoreransom.org may have a free decryption tool for your variant.</li>
          <li><strong>6. Restore from backup</strong> — Wipe the infected device and restore from a clean backup.</li>
          <li><strong>7. Change all passwords</strong> — From a clean device, change passwords for all accounts.</li>
        </ol>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Secure Backups Guide", href: "/guides/secure-backups-guide", description: "The #1 ransomware defense" },
        { label: "Phishing Guide", href: "/security/phishing", description: "Stop ransomware at the door" },
        { label: "Incident Response", href: "/security/incident-response", description: "What to do when things go wrong" },
        { label: "Device Encryption", href: "/guides/device-encryption-guide", description: "Protect data on all devices" },
      ]} />
    </article>
  );
}
