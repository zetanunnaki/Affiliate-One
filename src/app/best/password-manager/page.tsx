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

interface Manager {
  name: string;
  rating: number;
  price: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  ctaUrl: string;
  ctaLabel: string;
  isAffiliate: boolean;
}

const managers: Manager[] = [
  {
    name: "1Password",
    rating: 4.8,
    price: "$2.99/mo",
    bestFor: "Families & teams",
    pros: ["Excellent UI across all platforms", "Travel Mode hides vaults at borders", "Watchtower breach monitoring", "Shared vaults for families/teams"],
    cons: ["No free tier", "Slightly higher price than competitors"],
    ctaUrl: "https://1password.com",
    ctaLabel: "Visit 1Password",
    isAffiliate: false,
  },
  {
    name: "Bitwarden",
    rating: 4.7,
    price: "Free–$10/yr",
    bestFor: "Budget & open-source",
    pros: ["Generous free tier", "Fully open-source", "Self-hosting option", "Excellent browser extensions"],
    cons: ["UI less polished than 1Password", "Auto-fill can be inconsistent"],
    ctaUrl: "https://bitwarden.com",
    ctaLabel: "Visit Bitwarden",
    isAffiliate: false,
  },
  {
    name: "Dashlane",
    rating: 4.5,
    price: "$4.99/mo",
    bestFor: "All-in-one security",
    pros: ["Built-in VPN included", "Dark web monitoring", "Password health dashboard", "One-click password changer"],
    cons: ["Most expensive option", "VPN is basic compared to dedicated VPNs"],
    ctaUrl: "https://dashlane.com",
    ctaLabel: "Visit Dashlane",
    isAffiliate: false,
  },
  {
    name: "Proton Pass",
    rating: 4.4,
    price: "Free–$4.99/mo",
    bestFor: "Privacy-first users",
    pros: ["End-to-end encrypted", "Email alias generation", "Swiss privacy laws", "Part of Proton ecosystem"],
    cons: ["Newer product, fewer features", "No standalone desktop app yet"],
    ctaUrl: "https://go.getproton.me/aff_c?offer_id=38&aff_id=17279",
    ctaLabel: "Get Proton Pass",
    isAffiliate: true,
  },
  {
    name: "NordPass",
    rating: 4.6,
    price: "Free–$2.49/mo",
    bestFor: "NordVPN users & simplicity",
    pros: ["XChaCha20 encryption", "Data breach scanner included", "Pairs with NordVPN ecosystem", "Clean cross-platform UI"],
    cons: ["Fewer advanced features than 1Password", "Free tier limits to one device at a time"],
    ctaUrl: "https://go.nordpass.io/aff_c?offer_id=488&aff_id=145368",
    ctaLabel: "Get NordPass",
    isAffiliate: true,
  },
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
        <Byline authorId="sarah-chen" updatedAt="2026-03-20" />
      </header>

      {/* Quick picks */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Our Top Picks</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {managers.map((m, i) => (
            <div key={m.name} className="p-5 bg-white dark:bg-slate-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl flex flex-col">
              {i === 0 && (
                <span className="inline-flex w-fit items-center gap-1 px-3 py-1 text-[11px] font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-sm mb-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Editor&apos;s Choice
                </span>
              )}
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{m.name}</h3>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{m.rating}/5</span>
                </div>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">{m.price} · Best for: {m.bestFor}</p>
              <div className="grid grid-cols-2 gap-3 mb-4 flex-1">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1.5">Pros</h4>
                  <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
                    {m.pros.map((p) => (
                      <li key={p} className="flex items-start gap-1">
                        <svg className="w-3 h-3 mt-0.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-1.5">Cons</h4>
                  <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
                    {m.cons.map((c) => (
                      <li key={c} className="flex items-start gap-1">
                        <svg className="w-3 h-3 mt-0.5 text-rose-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                href={m.ctaUrl}
                target="_blank"
                rel={m.isAffiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl shadow-md shadow-blue-600/25 transition-all hover:-translate-y-0.5"
              >
                {m.ctaLabel}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
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
