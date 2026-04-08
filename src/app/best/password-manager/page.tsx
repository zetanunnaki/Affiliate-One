import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import FAQ from "@/components/ui/FAQ";
import Methodology from "@/components/ui/Methodology";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Best Password Manager 2026 — Expert-Tested Comparison",
  description:
    "We tested the top password managers for security, usability, and value. Compare 1Password, Bitwarden, Dashlane, and Proton Pass.",
};

const managers = [
  { name: "1Password", rating: 4.8, price: "$2.99/mo", bestFor: "Families & teams", pros: ["Excellent UI across all platforms", "Travel Mode hides vaults at borders", "Watchtower breach monitoring", "Shared vaults for families/teams"], cons: ["No free tier", "Slightly higher price than competitors"] },
  { name: "Bitwarden", rating: 4.7, price: "Free–$10/yr", bestFor: "Budget & open-source", pros: ["Generous free tier", "Fully open-source", "Self-hosting option", "Excellent browser extensions"], cons: ["UI less polished than 1Password", "Auto-fill can be inconsistent"] },
  { name: "Dashlane", rating: 4.5, price: "$4.99/mo", bestFor: "All-in-one security", pros: ["Built-in VPN included", "Dark web monitoring", "Password health dashboard", "One-click password changer"], cons: ["Most expensive option", "VPN is basic compared to dedicated VPNs"] },
  { name: "Proton Pass", rating: 4.4, price: "Free–$4.99/mo", bestFor: "Privacy-first users", pros: ["End-to-end encrypted", "Email alias generation", "Swiss privacy laws", "Part of Proton ecosystem"], cons: ["Newer product, fewer features", "No standalone desktop app yet"] },
];

export default function BestPasswordManagerPage() {
  const faqs = [
    { question: "What is the best free password manager?", answer: "Bitwarden offers the best free tier with unlimited passwords, unlimited devices, and core features. Proton Pass also offers a solid free plan with email aliases included." },
    { question: "Is 1Password worth the price?", answer: "For families and teams, yes. 1Password's shared vaults, Travel Mode, and Watchtower features justify the premium. For individual users on a budget, Bitwarden offers similar core functionality for free." },
    { question: "Can password managers be hacked?", answer: "While no system is 100% immune, reputable password managers use zero-knowledge encryption — your vault is encrypted with your master password, which never leaves your device. Even in a breach, attackers get encrypted data they can't read." },
    { question: "Should I use my browser's password manager instead?", answer: "Browser password managers are improving but lack features like cross-browser sync, secure sharing, emergency access, and advanced security monitoring. A dedicated password manager is recommended for remote workers and anyone managing sensitive accounts." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Best Password Manager 2026: Expert-Tested Comparison
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
          We tested the top password managers for security, usability, and
          value. Here are our recommendations for remote workers, families,
          and privacy-conscious users.
        </p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-07" />
      </header>

      {/* Quick picks */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Our Top Picks</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {managers.map((m, i) => (
            <div key={m.name} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              {i === 0 && <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 rounded-full mb-2">Editor&apos;s Choice</span>}
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{m.name}</h3>
                <span className="text-sm font-semibold text-green-700 dark:text-green-400">{m.rating}/5</span>
              </div>
              <p className="text-sm text-zinc-500 mb-3">{m.price} · Best for: {m.bestFor}</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h4 className="text-xs font-semibold text-green-800 dark:text-green-300 mb-1">Pros</h4>
                  <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-0.5">
                    {m.pros.map((p) => <li key={p}>+ {p}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-red-800 dark:text-red-300 mb-1">Cons</h4>
                  <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-0.5">
                    {m.cons.map((c) => <li key={c}>- {c}</li>)}
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
        { label: "Password Manager Guide", href: "/security/password-managers", description: "Learn how password managers work" },
        { label: "2FA Guide", href: "/security/2fa", description: "Pair with 2FA for maximum security" },
        { label: "Best VPN 2026", href: "/best/vpn", description: "Our top VPN picks" },
      ]} />
    </article>
  );
}
