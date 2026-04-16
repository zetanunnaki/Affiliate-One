import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import FAQ from "@/components/ui/FAQ";
import Methodology from "@/components/ui/Methodology";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Best 2FA App 2026 — Authenticator App Comparison",
  description:
    "We compared the top authenticator apps for security, backup, and ease of use. Authy, Google Authenticator, Microsoft Authenticator, and more.",
};

const apps = [
  { name: "Authy (Twilio)", rating: 4.7, price: "Free", bestFor: "Most users", pros: ["Encrypted cloud backup", "Multi-device sync", "Desktop app available", "Intuitive interface"], cons: ["Closed-source", "Requires phone number to sign up"] },
  { name: "Google Authenticator", rating: 4.3, price: "Free", bestFor: "Simplicity", pros: ["Simple and fast", "Now supports cloud backup (Google account)", "Widely recognized", "No phone number needed"], cons: ["No desktop app", "Limited organization features", "Google ecosystem dependency"] },
  { name: "Microsoft Authenticator", rating: 4.4, price: "Free", bestFor: "Microsoft 365 users", pros: ["Passwordless sign-in for Microsoft", "Cloud backup via Microsoft account", "Auto-fill passwords (phone)", "Number matching for push notifications"], cons: ["Heavier app than alternatives", "Best features tied to Microsoft ecosystem"] },
  { name: "Aegis Authenticator", rating: 4.6, price: "Free", bestFor: "Android open-source", pros: ["Fully open-source", "Encrypted local vault", "Multiple backup options (file, cloud)", "No account required"], cons: ["Android only", "No cloud sync (by design)", "Manual backup management"] },
  { name: "Hardware Key (YubiKey)", rating: 4.9, price: "$25–$75", bestFor: "Maximum security", pros: ["Phishing-resistant", "No battery needed", "Works offline", "FIDO2/WebAuthn support"], cons: ["Physical item to carry", "One-time cost per key", "Need backup key", "Not supported by all services"] },
];

export default function Best2FAAppPage() {
  const faqs = [
    { question: "Which 2FA app is the most secure?", answer: "For software-based 2FA, Aegis (Android) offers the best security with open-source code and encrypted local storage. For maximum security, a hardware key like YubiKey is phishing-resistant and doesn't rely on your phone. For most users, Authy provides the best balance of security and convenience with encrypted cloud backups." },
    { question: "What happens if I lose my phone with my 2FA app?", answer: "If you use Authy or Google Authenticator with cloud backup enabled, you can restore your tokens on a new device. If you use a local-only app like Aegis, you'll need your exported backup file. Always save the recovery codes provided when setting up 2FA — store them in your password manager." },
    { question: "Is SMS 2FA better than no 2FA?", answer: "Yes, SMS 2FA is much better than no 2FA at all. However, it's vulnerable to SIM swap attacks where an attacker convinces your carrier to transfer your number. Use an authenticator app or hardware key when available, but don't skip 2FA entirely just because SMS is the only option." },
    { question: "Can I use multiple 2FA methods?", answer: "Yes, and you should. Many services let you register multiple 2FA methods — for example, a hardware key as primary and an authenticator app as backup. This ensures you're never locked out while maintaining strong security." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Best 2FA App 2026: Authenticator App Comparison
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
          We compared the top authenticator apps and hardware keys for
          security, backup options, and ease of use. Here are our picks.
        </p>
        <Byline authorId="sarah-chen" updatedAt="2026-02-16" />
      </header>

      {/* Comparison */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Our Rankings</h2>
        <div className="space-y-4">
          {apps.map((app, i) => (
            <div key={app.name} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-bold text-sm">
                    #{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{app.name}</h3>
                    <p className="text-sm text-zinc-500">{app.price} · Best for: {app.bestFor}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">{app.rating}/5</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-semibold text-green-800 dark:text-green-300 mb-1">Pros</h4>
                  <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-0.5">
                    {app.pros.map((p) => <li key={p}>+ {p}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-red-800 dark:text-red-300 mb-1">Cons</h4>
                  <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-0.5">
                    {app.cons.map((c) => <li key={c}>- {c}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Methodology />
      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "2FA Setup Guide", href: "/security/2fa", description: "How to set up 2FA step by step" },
        { label: "Best Password Manager 2026", href: "/best/password-manager", description: "Pair 2FA with strong passwords" },
        { label: "Remote Work Security", href: "/security/remote-work", description: "Complete security checklist" },
      ]} />
    </article>
  );
}
