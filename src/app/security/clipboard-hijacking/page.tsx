import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Clipboard Hijacking Attacks (2026) — How Malware Steals What You Copy",
  description:
    "Clipboard hijacking malware replaces copied data — crypto addresses, passwords, bank details. How it works and how to protect yourself.",
  alternates: { canonical: "/security/clipboard-hijacking/" },
  openGraph: {
    title: "Clipboard Hijacking Attacks (2026) — How Malware Steals What You Copy",
    description: "Clipboard hijacking malware replaces copied data — crypto addresses, passwords, bank details. How it works and how to protect yourself.",
    type: "article",
    url: "/security/clipboard-hijacking/",
    images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: "Clipboard Hijacking Guide" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
};

export default function ClipboardHijackingPage() {
  const faqs = [
    { question: "What is clipboard hijacking?", answer: "Malware that monitors your clipboard and replaces copied content with the attacker's data. Most commonly used to swap cryptocurrency wallet addresses — you copy your friend's address, the malware replaces it with the attacker's, and your crypto goes to the wrong wallet." },
    { question: "How do I know if my clipboard is compromised?", answer: "Always verify what you paste matches what you copied. For crypto: check the first and last 6 characters of the address after pasting. For passwords: paste into a visible text field first. If what appears doesn't match what you copied, you may have clipboard malware." },
    { question: "Can a VPN prevent clipboard hijacking?", answer: "No — clipboard hijacking is local malware on your device, not a network attack. A VPN protects network traffic. You need antivirus/endpoint protection, safe downloading habits, and verification practices to prevent clipboard attacks." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Clipboard Hijacking" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Clipboard Hijacking Attacks</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">Clipboard hijacking silently replaces what you copy — crypto addresses, passwords, and bank details. It&apos;s invisible, automatic, and has cost millions in stolen cryptocurrency.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-07" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">How It Works</h2>
        <div className="p-5 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
          <ol className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>1. Infection:</strong> Malware installed via phishing, malicious download, or compromised software</li>
            <li><strong>2. Monitoring:</strong> Malware runs silently in the background, watching clipboard content</li>
            <li><strong>3. Pattern matching:</strong> When you copy something that matches a pattern (crypto address, bank number, URL), the malware activates</li>
            <li><strong>4. Replacement:</strong> Your clipboard content is instantly replaced with the attacker&apos;s data</li>
            <li><strong>5. You paste:</strong> Without checking, you paste the attacker&apos;s address/number instead of the intended one</li>
            <li><strong>6. Theft:</strong> Crypto sent to wrong wallet. Payment made to wrong account. Irreversible.</li>
          </ol>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">What Gets Targeted</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { target: "Cryptocurrency Addresses", risk: "Critical", desc: "Bitcoin, Ethereum, and other crypto addresses replaced with attacker's wallet. Transactions are irreversible." },
            { target: "Bank Account Numbers", risk: "High", desc: "IBAN, routing numbers, and account details swapped during copy-paste for wire transfers." },
            { target: "Payment Links", risk: "High", desc: "PayPal, Venmo, and payment URLs modified to redirect to attacker-controlled accounts." },
            { target: "Passwords", risk: "Medium", desc: "Less common but possible — copied passwords modified to log you into attacker-controlled sites." },
          ].map((t) => (
            <div key={t.target} className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{t.target}</h3>
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${t.risk === "Critical" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" : t.risk === "High" ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"}`}>{t.risk}</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Protection</h2>
        <div className="space-y-3">
          {[
            { step: "1", title: "Always verify after pasting", desc: "Check that pasted content matches what you copied. For crypto: verify first AND last 6 characters." },
            { step: "2", title: "Use QR codes for crypto", desc: "Scan QR codes instead of copy-pasting addresses. Harder for malware to intercept." },
            { step: "3", title: "Send test transactions", desc: "For large crypto or wire transfers, send a tiny amount first to verify the recipient." },
            { step: "4", title: "Keep software updated", desc: "Clipboard malware exploits known vulnerabilities. Updates patch these." },
            { step: "5", title: "Run endpoint protection", desc: "Windows Defender, Malwarebytes, or similar detects most clipboard hijackers." },
            { step: "6", title: "Don't download from untrusted sources", desc: "Pirated software, game cracks, and unofficial apps are common clipboard malware vectors." },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{s.step}</span>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{s.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Cryptocurrency Security", href: "/guides/cryptocurrency-security", description: "Full crypto security guide" },
        { label: "Ransomware Protection", href: "/security/ransomware", description: "Another common malware type" },
        { label: "Social Engineering", href: "/security/social-engineering", description: "How malware gets installed" },
        { label: "Password Manager Guide", href: "/security/password-managers", description: "Auto-fill instead of copy-paste" },
      ]} />
    </article>
  );
}
