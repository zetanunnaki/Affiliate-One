import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "QR Code Security (2026) — Quishing Attacks & How to Stay Safe",
  description: "QR codes can send you to phishing sites, install malware, or steal credentials. How 'quishing' works and how to protect yourself.",
};

export default function QrCodeSecurityPage() {
  const faqs = [
    { question: "What is quishing?", answer: "Quishing (QR phishing) uses malicious QR codes to direct victims to phishing websites, trigger malware downloads, or connect to attacker-controlled networks. It's particularly effective because you can't see the URL before scanning." },
    { question: "Are QR code payments safe?", answer: "Legitimate QR payment codes (Venmo, PayPal, WeChat Pay) are safe when scanned from trusted sources. The risk is scanning tampered codes — stickers placed over legitimate payment codes in restaurants, parking meters, etc." },
    { question: "Should I stop scanning QR codes?", answer: "No, but be cautious. Don't scan codes from unknown sources, emails, or stickers that look placed over original codes. Modern phone cameras show a URL preview before opening — always check the URL domain before proceeding." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "QR Code Security" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">QR Code Security: The Quishing Threat</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">QR codes are everywhere — menus, payments, Wi-Fi, boarding passes. But they can also be attack vectors. &quot;Quishing&quot; attacks are rising as attackers exploit QR code trust.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-02-14" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Common Quishing Attacks</h2>
        <div className="space-y-3">
          {[
            { attack: "Tampered Payment Codes", desc: "Attacker places a sticker with their own QR code over a restaurant's or parking meter's payment code. Your payment goes to the attacker.", where: "Restaurants, parking meters, vending machines, charity donation points" },
            { attack: "Phishing QR in Email", desc: "Email contains a QR code instead of a link — bypasses traditional email security filters that scan URLs but can't read QR codes.", where: "Emails pretending to be from IT department, banks, Microsoft 365" },
            { attack: "Malicious Wi-Fi", desc: "QR code that auto-connects your device to an attacker-controlled Wi-Fi network, enabling man-in-the-middle attacks.", where: "Cafés, conferences, hotels — fake 'Free Wi-Fi' QR codes" },
            { attack: "Fake Event/Product Codes", desc: "QR codes on flyers, posters, or products that redirect to phishing sites collecting personal information.", where: "Street flyers, concert posters, product packaging, business cards" },
          ].map((a) => (
            <div key={a.attack} className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{a.attack}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">{a.desc}</p>
              <p className="text-xs text-zinc-500"><strong>Found at:</strong> {a.where}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Protection Rules</h2>
        <div className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
          <ol className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>1. Check the URL preview</strong> — Modern phone cameras show the URL before opening. Verify the domain is legitimate.</li>
            <li><strong>2. Look for tampering</strong> — Is the QR code a sticker placed over another code? Is it aligned properly? Sticker overlays are a red flag.</li>
            <li><strong>3. Don&apos;t scan QR codes from emails</strong> — If a company sends you a QR code by email, go to their website directly instead.</li>
            <li><strong>4. Don&apos;t auto-connect to Wi-Fi via QR</strong> — Manually enter the network name and password from a trusted source.</li>
            <li><strong>5. Use your phone&apos;s built-in scanner</strong> — Don&apos;t use third-party QR scanner apps (many contain malware themselves).</li>
            <li><strong>6. Have a VPN active</strong> — If you do end up on a malicious network, your VPN encrypts your traffic.</li>
          </ol>
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Phishing Guide", href: "/security/phishing", description: "Traditional phishing defense" },
        { label: "Social Engineering", href: "/security/social-engineering", description: "How attackers exploit trust" },
        { label: "Public Wi-Fi Safety", href: "/security/public-wifi", description: "Malicious Wi-Fi protection" },
        { label: "Mobile Security", href: "/security/mobile", description: "Secure your phone" },
      ]} />
    </article>
  );
}
