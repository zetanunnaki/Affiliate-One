import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "MFA Methods Compared: Passkeys vs Authenticator vs SMS vs Hardware Keys (2026)",
  description: "Deep comparison of every multi-factor authentication method. Security ratings, phishing resistance, recovery options, and recommendations by use case.",
};

export default function MultiFactorComparisonPage() {
  const methods = [
    { name: "Passkeys (FIDO2)", security: "Excellent", phishing: "Immune", convenience: "Excellent", recovery: "Device-based", cost: "Free", support: "Growing fast", desc: "Cryptographic credential stored on your device, verified biometrically. The future of authentication — more secure than passwords + 2FA combined." },
    { name: "Hardware Security Key (YubiKey)", security: "Excellent", phishing: "Immune", convenience: "Good", recovery: "Need backup key", cost: "$25-75", support: "Major sites", desc: "Physical USB/NFC device. Must be present to authenticate. The gold standard for high-value accounts." },
    { name: "Authenticator App (TOTP)", security: "Very Good", phishing: "Partial", convenience: "Good", recovery: "Backup codes", cost: "Free", support: "Very wide", desc: "Time-based codes from Authy, Google Authenticator, etc. Can be phished if you enter the code on a fake site, but blocks automated attacks." },
    { name: "Push Notification", security: "Good", phishing: "Partial", convenience: "Excellent", recovery: "Via app", cost: "Free", support: "Growing", desc: "Approve/deny notification on phone (Microsoft Authenticator, Duo). Convenient but susceptible to MFA fatigue attacks (repeated notifications)." },
    { name: "SMS Code", security: "Fair", phishing: "No", convenience: "Excellent", recovery: "Phone number", cost: "Free", support: "Universal", desc: "Text message code. Vulnerable to SIM swap attacks and SS7 interception. Better than nothing but the weakest 2FA method." },
    { name: "Email Code", security: "Poor", phishing: "No", convenience: "Good", recovery: "Email access", cost: "Free", support: "Wide", desc: "Code sent to email. If your email is compromised, this provides zero protection. Avoid when better options exist." },
  ];

  const faqs = [
    { question: "Which MFA method should I use?", answer: "Use passkeys where available (Google, Apple, Microsoft, GitHub). For accounts without passkey support, use an authenticator app (Authy). For your most critical accounts (email, banking), add a hardware key as well. Avoid SMS when any better option exists." },
    { question: "What is MFA fatigue?", answer: "MFA fatigue (prompt bombing) is when an attacker who has your password sends repeated push notifications hoping you'll approve one out of annoyance or confusion. Microsoft and others now require number matching — you must type a number shown on the login screen into the authenticator app." },
    { question: "Can I use multiple MFA methods on one account?", answer: "Yes, and you should. Most services let you register multiple methods — e.g., passkey as primary, authenticator app as backup, and printed recovery codes stored in a safe. This ensures you're never locked out." },
    { question: "What about biometric-only (Face ID, fingerprint)?", answer: "Biometrics alone are NOT multi-factor — they're 'something you are' but on the same device as 'something you have.' Biometrics are best used to unlock a second factor (passkey stored on phone, unlocked with Face ID). True MFA requires factors from different categories." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "MFA Comparison" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Multi-Factor Authentication: Every Method Compared</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">Not all MFA is equal. Passkeys are phishing-immune. SMS codes aren&apos;t. Here&apos;s a deep comparison of every authentication method available in 2026.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-02-02" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      {/* Comparison table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Method Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Method</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Security</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Phishing Proof</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Convenience</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {methods.map((m) => (
                <tr key={m.name}>
                  <td className="px-3 py-2 font-medium text-zinc-900 dark:text-zinc-100">{m.name}</td>
                  <td className="px-3 py-2 text-center"><span className={`text-xs font-bold px-2 py-0.5 rounded ${m.security === "Excellent" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : m.security === "Very Good" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" : m.security === "Good" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : m.security === "Fair" ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"}`}>{m.security}</span></td>
                  <td className="px-3 py-2 text-center">{m.phishing === "Immune" ? <span className="text-green-600 dark:text-green-400 font-bold">Immune</span> : m.phishing === "Partial" ? <span className="text-yellow-600">Partial</span> : <span className="text-red-500">No</span>}</td>
                  <td className="px-3 py-2 text-center text-zinc-700 dark:text-zinc-300">{m.convenience}</td>
                  <td className="px-3 py-2 text-center text-zinc-700 dark:text-zinc-300">{m.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed cards */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Detailed Analysis</h2>
        <div className="space-y-4">
          {methods.map((m) => (
            <div key={m.name} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{m.name}</h3>
                <span className={`text-xs font-bold px-2 py-1 rounded ${m.security === "Excellent" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : m.security === "Very Good" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" : m.security === "Good" ? "bg-yellow-100 text-yellow-800" : m.security === "Fair" ? "bg-orange-100 text-orange-800" : "bg-red-100 text-red-800"}`}>{m.security}</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{m.desc}</p>
              <div className="grid grid-cols-3 gap-2 text-xs text-zinc-500">
                <div><strong>Recovery:</strong> {m.recovery}</div>
                <div><strong>Support:</strong> {m.support}</div>
                <div><strong>Cost:</strong> {m.cost}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendation */}
      <section className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Our Recommendation Stack</h2>
        <ol className="text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
          <li><strong>1. Passkeys</strong> wherever available (Google, Apple, Microsoft, GitHub, Cloudflare)</li>
          <li><strong>2. Hardware key (YubiKey)</strong> for email, password manager, and financial accounts</li>
          <li><strong>3. Authenticator app</strong> (Authy) for everything else that supports 2FA</li>
          <li><strong>4. SMS</strong> only when it&apos;s the ONLY 2FA option — still better than no 2FA</li>
          <li><strong>5. Recovery codes</strong> saved in password manager + printed in a safe</li>
        </ol>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "2FA Setup Guide", href: "/security/2fa", description: "How to enable 2FA" },
        { label: "Best 2FA App", href: "/best/2fa-app", description: "Authenticator apps compared" },
        { label: "SIM Swap Protection", href: "/guides/sim-swap-protection", description: "Why SMS 2FA is risky" },
        { label: "Password Hygiene", href: "/security/password-hygiene", description: "Passwords + MFA together" },
      ]} />
    </article>
  );
}
