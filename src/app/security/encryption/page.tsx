import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/components/ui/Byline";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";
import ArticleSchema from "@/components/seo/ArticleSchema";

export const metadata: Metadata = {
  title: "Encryption Guide for Remote Workers (2026)",
  description:
    "Everything remote workers need to know about encryption. Device encryption, email encryption, file encryption, and VPN encryption explained.",
  alternates: { canonical: "/security/encryption/" },
  openGraph: {
    title: "Encryption Guide for Remote Workers (2026)",
    description: "Everything remote workers need to know about encryption. Device encryption, email encryption, file encryption, and VPN encryption explained.",
    type: "article",
    url: "/security/encryption/",
    images: [{ url: "/images/og/og-security.webp", width: 1200, height: 675, alt: "Encryption Guide" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-security.webp"] },
};

export default function EncryptionHubPage() {
  const faqs = [
    { question: "What is encryption?", answer: "Encryption converts readable data (plaintext) into scrambled data (ciphertext) using a mathematical algorithm and a key. Only someone with the correct key can decrypt and read the data. Modern encryption like AES-256 is essentially unbreakable." },
    { question: "Is my data encrypted by default?", answer: "It depends. Modern iPhones and Android phones encrypt data by default when you set a passcode. Windows requires BitLocker (Pro edition) and macOS requires FileVault to be enabled. Web traffic is encrypted via HTTPS, but your ISP can still see which sites you visit without a VPN." },
    { question: "Does encryption slow down my device?", answer: "Modern hardware has dedicated encryption processors (AES-NI) that handle encryption with essentially zero performance impact. You won't notice any slowdown from full-disk encryption or VPN encryption on devices made in the last 5 years." },
    { question: "What happens if I forget my encryption password?", answer: "Without your password or recovery key, encrypted data is permanently inaccessible. This is by design — it's what protects you if your device is stolen. Always save recovery keys in your password manager and a printed backup in a secure location." },
  ];

  const types = [
    {
      title: "Device Encryption",
      desc: "Protects all data on your laptop, phone, or tablet. If your device is lost or stolen, data remains unreadable.",
      tools: "BitLocker (Windows), FileVault (macOS), built-in (iOS/Android)",
      link: { label: "Device Encryption Guide", href: "/guides/device-encryption-guide" },
    },
    {
      title: "VPN Encryption",
      desc: "Encrypts your internet traffic between your device and the VPN server. Protects against ISP monitoring and Wi-Fi eavesdropping.",
      tools: "AES-256 (OpenVPN), ChaCha20 (WireGuard)",
      link: { label: "VPN Protocols Explained", href: "/vpn/protocols" },
    },
    {
      title: "Email Encryption",
      desc: "End-to-end encryption ensures only sender and recipient can read email content. Prevents interception and provider access.",
      tools: "ProtonMail, Tutanota, PGP/GPG",
      link: { label: "Email Encryption Guide", href: "/guides/email-encryption-guide" },
    },
    {
      title: "File Encryption",
      desc: "Encrypts individual files or folders. Useful for sensitive documents stored in cloud services or shared drives.",
      tools: "VeraCrypt, 7-Zip (AES-256), Cryptomator",
      link: null,
    },
    {
      title: "Password Vault Encryption",
      desc: "Zero-knowledge encryption protects your password vault. Even the provider can't access your passwords.",
      tools: "Bitwarden, 1Password, Proton Pass",
      link: { label: "Password Manager Guide", href: "/security/password-managers" },
    },
    {
      title: "Messaging Encryption",
      desc: "End-to-end encryption for chat and voice. Ensures only participants can read messages or hear calls.",
      tools: "Signal, WhatsApp (messages), iMessage",
      link: null,
    },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ArticleSchema
        title="Encryption Guide for Remote Workers (2026)"
        description="Everything remote workers need to know about encryption. Device encryption, email encryption, file encryption, and VPN encryption explained."
        url="/security/encryption/"
        authorName="Sarah Chen"
        authorUrl="https://buysecurevpn.com/authors/sarah-chen/"
        image="https://buysecurevpn.com/images/og/og-security.webp"
      />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Encryption Guide for Remote Workers
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          Encryption is your last line of defense. If your device is stolen, your
          Wi-Fi is compromised, or your cloud account is breached — encryption
          ensures your data remains unreadable. Here&apos;s what to encrypt and how.
        </p>
        <Byline authorId="sarah-chen" updatedAt="2026-01-19" />
      </header>
      {/* Our Top 5 Picks */}
      <TopVpnPicks heading="Our Top 5 VPN Picks" eyebrow="Protect yourself" />


      {/* Types grid */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          6 Types of Encryption You Should Use
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {types.map((t) => (
            <div key={t.title} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{t.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{t.desc}</p>
              <p className="text-xs text-zinc-500 mb-3"><strong>Tools:</strong> {t.tools}</p>
              {t.link && (
                <Link href={t.link.href} className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  {t.link.label} &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Priority order */}
      <section className="mb-10 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
          Encryption Priority for Remote Workers
        </h2>
        <ol className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          <li><strong>1. Device encryption</strong> — Enable BitLocker/FileVault now. Takes 5 minutes, protects everything.</li>
          <li><strong>2. VPN</strong> — Encrypts all internet traffic. Essential on any network.</li>
          <li><strong>3. Password manager</strong> — Zero-knowledge encrypted vault for all credentials.</li>
          <li><strong>4. 2FA</strong> — Not encryption per se, but adds cryptographic proof of identity.</li>
          <li><strong>5. Email encryption</strong> — For sensitive communications. ProtonMail is the easiest option.</li>
          <li><strong>6. File encryption</strong> — For specific sensitive documents in cloud storage.</li>
        </ol>
      </section>

      <FAQ items={faqs} />

      <InternalLinks links={[
        { label: "Device Encryption Guide", href: "/guides/device-encryption-guide", description: "BitLocker, FileVault, iOS, Android" },
        { label: "Email Encryption Guide", href: "/guides/email-encryption-guide", description: "ProtonMail, PGP, and more" },
        { label: "VPN Protocols Explained", href: "/vpn/protocols", description: "How VPN encryption works" },
        { label: "Best VPN 2026", href: "/best/vpn", description: "Top encrypted VPNs compared" },
      ]} />
    </article>
  );
}
