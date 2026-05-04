import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";
import { BUILD_MONTH_YEAR } from "@/lib/dates";

export const metadata: Metadata = {
  title: "Two-Factor Authentication Guide (2026) — Secure Your Accounts",
  description:
    "Learn how to set up two-factor authentication (2FA) on all your accounts. Compare authenticator apps, hardware keys, and SMS verification.",
  alternates: { canonical: "/security/2fa/" },
  openGraph: {
    title: "Two-Factor Authentication Guide (2026) — Secure Your Accounts",
    description: "Learn how to set up two-factor authentication (2FA) on all your accounts. Compare authenticator apps, hardware keys, and SMS verification.",
    type: "article",
    url: "/security/2fa/",
    images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: "2fa Guide" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
};

export default function TwoFactorAuthPage() {
  const methods = [
    { name: "Authenticator App", security: "High", convenience: "High", examples: "Google Authenticator, Authy, Microsoft Authenticator", recommendation: "Best for most people", color: "border-green-200 dark:border-green-800" },
    { name: "Hardware Security Key", security: "Very High", convenience: "Medium", examples: "YubiKey, Google Titan, SoloKeys", recommendation: "Best for high-value accounts", color: "border-blue-200 dark:border-blue-800" },
    { name: "Passkeys", security: "Very High", convenience: "Very High", examples: "Built into iOS 19, Android 16, Windows 11, macOS", recommendation: "The future — use when available", color: "border-blue-200 dark:border-blue-800" },
    { name: "SMS Verification", security: "Low-Medium", convenience: "Very High", examples: "Text message codes", recommendation: "Better than nothing, but vulnerable to SIM swap", color: "border-yellow-200 dark:border-yellow-800" },
    { name: "Email Verification", security: "Low", convenience: "High", examples: "Codes sent via email", recommendation: "Avoid if better options available", color: "border-red-200 dark:border-red-800" },
  ];

  const faqs = [
    {
      question: "What is two-factor authentication (2FA)?",
      answer: "Two-factor authentication adds a second verification step when logging in. After entering your password (something you know), you provide a second factor: a code from an app (something you have), a biometric scan (something you are), or a hardware key. This means a stolen password alone isn't enough to access your account.",
    },
    {
      question: "Which 2FA method is the most secure?",
      answer: "Hardware security keys (like YubiKey) are the most phishing-resistant 2FA method because they verify the website's identity cryptographically. Passkeys offer similar security with better convenience. Authenticator apps are a strong second choice. SMS-based 2FA is the weakest due to SIM swap attacks.",
    },
    {
      question: "What should I do if I lose my 2FA device?",
      answer: "Always save your backup/recovery codes when setting up 2FA — store them in your password manager or printed in a secure location. Most services let you recover access with backup codes. If you use an authenticator app, Authy offers encrypted cloud backup of your 2FA tokens.",
    },
    {
      question: "Which accounts should I protect with 2FA first?",
      answer: "Prioritize: (1) Email — your email is the recovery method for most accounts, (2) Banking and financial accounts, (3) Cloud storage (Google Drive, Dropbox), (4) Password manager, (5) Social media and work accounts. Start with email — if an attacker controls your email, they can reset passwords on everything else.",
    },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Two-Factor Authentication Guide (2026)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          Passwords alone aren&apos;t enough. Two-factor authentication (2FA)
          is the single most effective way to prevent unauthorized access to
          your accounts. Here&apos;s how to set it up correctly.
        </p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-01" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      {/* Why 2FA matters */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Why 2FA Matters
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">99.9%</div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">of automated attacks blocked by 2FA (Google)</p>
          </div>
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">80%</div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">of breaches involve weak or stolen passwords (Verizon DBIR)</p>
          </div>
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">&lt;2 min</div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">to set up 2FA on most accounts</p>
          </div>
        </div>
      </section>

      {/* 2FA methods comparison */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          2FA Methods Compared
        </h2>
        <div className="space-y-3">
          {methods.map((m) => (
            <div key={m.name} className={`p-4 border ${m.color} rounded-lg`}>
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{m.name}</h3>
                <span className="text-xs font-medium text-zinc-500">{m.recommendation}</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <div><strong>Security:</strong> {m.security}</div>
                <div><strong>Convenience:</strong> {m.convenience}</div>
                <div><strong>Examples:</strong> {m.examples}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Setup priority */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Setup Priority Order
        </h2>
        <div className="space-y-2">
          {[
            { priority: "Critical", accounts: "Email (Gmail, Outlook), Password Manager", reason: "Gateway to all other accounts" },
            { priority: "High", accounts: "Banking, Cloud Storage, Company/Work accounts", reason: "Financial and sensitive data" },
            { priority: "Medium", accounts: "Social Media, Shopping, Subscriptions", reason: "Personal data and payment info" },
            { priority: "Optional", accounts: "Forums, newsletters, low-value accounts", reason: "Limited exposure if compromised" },
          ].map((item) => (
            <div key={item.priority} className="flex items-start gap-3 p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <span className={`px-2 py-1 text-xs font-semibold rounded ${
                item.priority === "Critical" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" :
                item.priority === "High" ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" :
                item.priority === "Medium" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" :
                "bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300"
              }`}>{item.priority}</span>
              <div>
                <span className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{item.accounts}</span>
                <span className="block text-xs text-zinc-500">{item.reason}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg mb-8 text-sm text-blue-800 dark:text-blue-200">
        <strong>How we verified:</strong> Security ratings based on NIST SP
        800-63B authentication guidelines and FIDO Alliance standards.
        Convenience ratings based on user testing across iOS, Android, Windows,
        and macOS ({BUILD_MONTH_YEAR}).
      </div>

      <FAQ items={faqs} />

      <InternalLinks
        links={[
          { label: "Best 2FA Apps (2026)", href: "/best/2fa-app", description: "Our top authenticator app picks" },
          { label: "Password Manager Guide", href: "/security/password-managers", description: "Pair 2FA with strong passwords" },
          { label: "Remote Work Security", href: "/security/remote-work", description: "Complete security guide" },
        ]}
      />
    </article>
  );
}
