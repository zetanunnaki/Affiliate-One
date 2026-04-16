import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Password Hygiene Guide (2026) — The Complete Password Security Playbook",
  description: "Everything about password security: creation, storage, sharing, rotation, and breach response. The definitive guide for remote workers.",
};

export default function PasswordHygienePage() {
  const faqs = [
    { question: "How long should my passwords be?", answer: "At minimum 16 characters for human-created passwords (passphrases). For password manager-generated passwords, use 20+ characters with full complexity. Length matters more than complexity — 'correct-horse-battery-staple' is stronger than 'P@$$w0rd!'." },
    { question: "How often should I change my passwords?", answer: "NIST now recommends against mandatory rotation unless a breach occurs. Frequent forced changes lead to weaker passwords (Password1!, Password2!). Instead: use unique strong passwords, enable 2FA, and change immediately if a breach is detected." },
    { question: "Are passphrases better than complex passwords?", answer: "Yes. A 4-word passphrase like 'telescope-sandwich-railroad-genuine' has more entropy than 'P@$$w0rd!' and is easier to remember. For your master password (the one you memorize), passphrases are the way to go. For everything else, let your password manager generate random strings." },
    { question: "What about passwordless authentication?", answer: "Passkeys and FIDO2 hardware keys are the future — they're more secure than passwords + 2FA and more convenient. Use them wherever available (Google, Apple, Microsoft, GitHub). Keep your password manager as backup until passkey adoption is universal." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Password Hygiene" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">The Complete Password Security Playbook</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">Passwords are the keys to your digital life. This guide covers everything: creation, storage, sharing, rotation, breach response, and the passwordless future.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-03-08" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      {/* The password hierarchy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">The Password Security Hierarchy</h2>
        <div className="space-y-3">
          {[
            { level: "Best", method: "Passkeys / FIDO2 Hardware Keys", desc: "Passwordless. Cryptographic proof. Phishing-immune. Use wherever available.", color: "border-green-300 dark:border-green-700 bg-green-50/30 dark:bg-green-900/10" },
            { level: "Great", method: "Password Manager + Authenticator 2FA", desc: "Unique random 20+ char passwords + TOTP codes. Current best practice for most accounts.", color: "border-blue-300 dark:border-blue-700 bg-blue-50/30 dark:bg-blue-900/10" },
            { level: "Good", method: "Password Manager + SMS 2FA", desc: "Better than no 2FA. Vulnerable to SIM swap but blocks most automated attacks.", color: "border-yellow-300 dark:border-yellow-700" },
            { level: "Weak", method: "Memorized Unique Passwords", desc: "Better than reusing, but humans create predictable patterns. Limited to ~5-10 accounts.", color: "border-orange-300 dark:border-orange-700" },
            { level: "Terrible", method: "Reused Passwords Without 2FA", desc: "One breach exposes all accounts. This is how most account takeovers happen.", color: "border-red-300 dark:border-red-700" },
          ].map((l) => (
            <div key={l.level} className={`p-4 border ${l.color} rounded-lg`}>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{l.level}</span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">{l.method}</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick wins */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">5-Minute Quick Wins</h2>
        <div className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
          <ol className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>1.</strong> Install a password manager right now (<Link href="/guides/password-manager-setup" className="text-blue-600 hover:underline">setup guide</Link>)</li>
            <li><strong>2.</strong> Enable 2FA on your email (<Link href="/guides/two-factor-auth-setup" className="text-blue-600 hover:underline">2FA setup guide</Link>)</li>
            <li><strong>3.</strong> Check haveibeenpwned.com for all your emails</li>
            <li><strong>4.</strong> Change any password flagged as breached or reused</li>
            <li><strong>5.</strong> Enable passkeys on Google, Apple, and Microsoft accounts</li>
          </ol>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Password Mistakes to Stop Making</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { mistake: "Using the same password everywhere", fix: "One unique password per account. Let your password manager handle it." },
            { mistake: "Password123! style patterns", fix: "Use random generated passwords (20+ chars) or 4-6 word passphrases." },
            { mistake: "Storing passwords in a spreadsheet", fix: "Use an encrypted password manager (Bitwarden is free)." },
            { mistake: "Sharing passwords via Slack/email", fix: "Use password manager sharing or self-destructing encrypted links." },
            { mistake: "Ignoring breach notifications", fix: "Change the password immediately. Check for reuse. Enable 2FA." },
            { mistake: "Using security questions honestly", fix: "Treat security questions as extra passwords. Store fake answers in your password manager." },
          ].map((m) => (
            <div key={m.mistake} className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <h3 className="text-sm font-semibold text-red-700 dark:text-red-400 mb-1">Stop: {m.mistake}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Instead: {m.fix}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Password Manager Setup", href: "/guides/password-manager-setup", description: "Get started in 15 minutes" },
        { label: "Password Audit Guide", href: "/guides/password-audit-guide", description: "Find and fix weak passwords" },
        { label: "Password Sharing Safely", href: "/guides/password-sharing-safely", description: "Share credentials securely" },
        { label: "2FA Setup Guide", href: "/guides/two-factor-auth-setup", description: "Add second factor everywhere" },
        { label: "Best Password Manager", href: "/best/password-manager", description: "Our top picks compared" },
      ]} />
    </article>
  );
}
