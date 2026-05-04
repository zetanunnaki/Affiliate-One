import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Password Manager Guide (2026) — Stop Reusing Passwords",
  description:
    "Everything you need to know about password managers. How they work, which to choose, and how to set one up in under 10 minutes.",
  alternates: { canonical: "/security/password-managers/" },
  openGraph: {
    title: "Password Manager Guide (2026) — Stop Reusing Passwords",
    description: "Everything you need to know about password managers. How they work, which to choose, and how to set one up in under 10 minutes.",
    type: "article",
    url: "/security/password-managers/",
    images: [{ url: "/images/og/og-security.webp", width: 1200, height: 675, alt: "Password Managers Guide" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-security.webp"] },
};

export default function PasswordManagersPage() {
  const faqs = [
    {
      question: "Are password managers safe?",
      answer: "Yes — reputable password managers use zero-knowledge encryption, meaning even the provider can't see your passwords. Your vault is encrypted with a master password that never leaves your device. The risk of one strong vault is far lower than reusing weak passwords across accounts.",
    },
    {
      question: "What happens if a password manager gets hacked?",
      answer: "Your vault is encrypted, so even in a breach, attackers get encrypted data they can't read without your master password. This is why choosing a strong, unique master password is critical. Notable breaches (like LastPass in 2022) exposed encrypted vaults but not plaintext passwords.",
    },
    {
      question: "Should I use my browser's built-in password manager?",
      answer: "Browser password managers (Chrome, Safari, Firefox) are convenient and increasingly secure. However, dedicated password managers offer better features: cross-browser support, secure sharing, emergency access, breach monitoring, and more granular security controls. For remote workers, a dedicated tool is recommended.",
    },
    {
      question: "How do I choose a master password?",
      answer: "Use a passphrase: 4-6 random words (e.g., 'correct-horse-battery-staple'). Avoid names, dates, or dictionary words. Make it at least 16 characters. Never reuse it anywhere else. Enable 2FA on your password manager for an additional layer of protection.",
    },
  ];

  const managers = [
    { name: "1Password", type: "Premium", price: "$2.99/mo", best: "Families & teams", features: "Travel mode, Watchtower breach alerts, shared vaults" },
    { name: "Bitwarden", type: "Free / Premium", price: "Free–$10/yr", best: "Budget & open-source", features: "Open-source, self-host option, generous free tier" },
    { name: "Dashlane", type: "Premium", price: "$4.99/mo", best: "VPN + password manager bundle", features: "Built-in VPN, dark web monitoring, password health" },
    { name: "Proton Pass", type: "Free / Premium", price: "Free–$4.99/mo", best: "Privacy-focused", features: "End-to-end encrypted, email aliases, Swiss-based" },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Password Manager Guide (2026)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          The average person has 100+ online accounts. Reusing passwords across
          them is the #1 security mistake. A password manager generates and
          stores unique, strong passwords for every account — you only remember
          one master password.
        </p>
        <Byline authorId="sarah-chen" updatedAt="2026-01-25" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      {/* Why you need one */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Why You Need a Password Manager
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg">
            <h3 className="text-sm font-semibold text-red-800 dark:text-red-300 mb-2">Without a Password Manager</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>- Same password across 5+ accounts</li>
              <li>- One breach exposes all accounts</li>
              <li>- Weak passwords you can remember</li>
              <li>- Sticky notes or spreadsheets for storage</li>
              <li>- Tedious manual password resets</li>
            </ul>
          </div>
          <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">With a Password Manager</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>+ Unique password for every account</li>
              <li>+ One breach affects only one account</li>
              <li>+ 20+ character random passwords</li>
              <li>+ Encrypted vault with zero-knowledge</li>
              <li>+ Auto-fill across all devices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick comparison */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Top Password Managers at a Glance
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Manager</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Type</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Price</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Best For</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Key Features</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {managers.map((m) => (
                <tr key={m.name} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                  <td className="px-4 py-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">{m.name}</td>
                  <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">{m.type}</td>
                  <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">{m.price}</td>
                  <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">{m.best}</td>
                  <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">{m.features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Setup steps */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Set Up in 10 Minutes
        </h2>
        <div className="space-y-3">
          {[
            { step: "1", title: "Choose a password manager", desc: "Bitwarden for free/budget, 1Password for families/teams, Proton Pass for privacy." },
            { step: "2", title: "Create a strong master password", desc: "Use a 4-6 word passphrase. Write it down and store it somewhere secure (not digital)." },
            { step: "3", title: "Install the browser extension and mobile app", desc: "Available for Chrome, Firefox, Safari, Edge, iOS, and Android." },
            { step: "4", title: "Import existing passwords", desc: "Export from your browser and import into the manager. Then delete the browser copies." },
            { step: "5", title: "Enable 2FA on the password manager itself", desc: "Use an authenticator app (not SMS) to protect your vault." },
            { step: "6", title: "Start replacing weak/reused passwords", desc: "Use the password health tool to find and replace your worst passwords first." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.step}</span>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{item.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqs} />

      <InternalLinks
        links={[
          { label: "Best Password Manager (2026)", href: "/best/password-manager", description: "Our top picks compared" },
          { label: "2FA Guide", href: "/security/2fa", description: "Pair with 2FA for maximum security" },
          { label: "Remote Work Security", href: "/security/remote-work", description: "Complete security checklist" },
        ]}
      />
    </article>
  );
}
