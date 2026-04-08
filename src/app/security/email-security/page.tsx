import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Email Security for Remote Workers (2026) — Protect Your Inbox",
  description: "Comprehensive email security guide. Phishing defense, encrypted email, email forwarding rules, and protecting your most important account.",
};

export default function EmailSecurityPage() {
  const faqs = [
    { question: "Why is email the #1 attack vector?", answer: "Email is universal (everyone has it), it's trusted (people expect to receive emails), it's hard to verify authenticity (spoofing is easy), and one compromised email account unlocks everything else (password resets). Over 90% of cyberattacks begin with a phishing email." },
    { question: "Is Gmail/Outlook secure enough?", answer: "For transport encryption (TLS): yes. For content privacy: no — Google and Microsoft can read your emails for scanning and compliance. For truly private email, use ProtonMail or Tutanota. For most remote workers, Gmail/Outlook with 2FA and phishing awareness is adequate." },
    { question: "Should I use different emails for different purposes?", answer: "Yes. At minimum: (1) Primary email for important accounts, (2) Separate email for newsletters and signups, (3) Work email for professional communication. Use email aliases (Proton Pass, Apple Hide My Email) to create disposable addresses for each service." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Email Security" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Email Security for Remote Workers</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">Your email is the key to everything. If an attacker controls your email, they can reset passwords on every account you own. Here&apos;s the complete guide to securing it.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-07" />
      </header>

      {/* Why email is critical */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Why Email Is Your Most Important Account</h2>
        <div className="p-5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-sm text-zinc-700 dark:text-zinc-300">
          <p className="mb-2">Your email is the <strong>master key</strong> to your digital life:</p>
          <ul className="space-y-1">
            <li>- Password resets for every account go to your email</li>
            <li>- Banking notifications and verification codes arrive via email</li>
            <li>- Work communications contain sensitive business data</li>
            <li>- If compromised, attacker can lock you out of everything</li>
          </ul>
          <p className="mt-2 font-medium">Securing your email should be your #1 security priority.</p>
        </div>
      </section>

      {/* Security layers */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Email Security Layers</h2>
        <div className="space-y-3">
          {[
            { layer: "1", title: "Enable 2FA (Non-Negotiable)", desc: "Use an authenticator app (not SMS) or hardware key. This single step blocks 99.9% of automated attacks. Gmail: myaccount.google.com/security. Outlook: account.microsoft.com/security.", link: "/guides/two-factor-auth-setup" },
            { layer: "2", title: "Use a Strong, Unique Password", desc: "Your email password should be a 20+ character random string from your password manager. Never reuse it anywhere else.", link: "/security/password-hygiene" },
            { layer: "3", title: "Check Forwarding Rules", desc: "Attackers who gain temporary access often set up email forwarding rules to silently copy all your mail. Check: Gmail Settings > Forwarding. Outlook: Settings > Mail > Forwarding. Delete any rules you didn't create." },
            { layer: "4", title: "Review Connected Apps", desc: "Third-party apps with email access can read everything. Audit: Google: myaccount.google.com/permissions. Microsoft: account.microsoft.com/privacy. Revoke apps you don't actively use." },
            { layer: "5", title: "Use Email Aliases for Signups", desc: "Don't give your primary email to every service. Use aliases that forward to your main inbox: Apple Hide My Email, Proton Pass aliases, or Gmail '+' addresses (name+service@gmail.com)." },
            { layer: "6", title: "Enable Advanced Protection (High-Risk Users)", desc: "Google Advanced Protection Program requires hardware security keys and adds extra layers. For journalists, executives, and anyone handling sensitive data." },
          ].map((l) => (
            <div key={l.layer} className="flex gap-4 p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{l.layer}</span>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{l.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{l.desc}</p>
                {l.link && <Link href={l.link} className="text-sm text-blue-600 hover:underline mt-1 inline-block">Learn more &rarr;</Link>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Email provider comparison */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Email Provider Security Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Provider</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">E2E Encrypted</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Provider Can Read</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">2FA Options</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {[
                { name: "Gmail", e2e: "No", read: "Yes", twofa: "App, SMS, Key, Passkey", best: "Most users" },
                { name: "Outlook", e2e: "No", read: "Yes", twofa: "App, SMS, Key", best: "Microsoft 365 users" },
                { name: "ProtonMail", e2e: "Yes", read: "No", twofa: "App, Key", best: "Privacy-first" },
                { name: "Tutanota", e2e: "Yes", read: "No", twofa: "App, Key", best: "Budget privacy" },
                { name: "Apple iCloud", e2e: "Optional (ADP)", read: "Depends", twofa: "App, SMS, Key", best: "Apple ecosystem" },
              ].map((p) => (
                <tr key={p.name}>
                  <td className="px-3 py-2 font-medium text-zinc-900 dark:text-zinc-100">{p.name}</td>
                  <td className="px-3 py-2 text-center">{p.e2e === "Yes" ? <span className="text-green-600 font-bold">Yes</span> : <span className="text-red-500">No</span>}</td>
                  <td className="px-3 py-2 text-center">{p.read === "No" ? <span className="text-green-600 font-bold">No</span> : <span className="text-yellow-600">{p.read}</span>}</td>
                  <td className="px-3 py-2 text-center text-zinc-600 dark:text-zinc-400">{p.twofa}</td>
                  <td className="px-3 py-2 text-center text-zinc-600 dark:text-zinc-400">{p.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Email Encryption Guide", href: "/guides/email-encryption-guide", description: "ProtonMail, PGP, and more" },
        { label: "Phishing Guide", href: "/security/phishing", description: "Recognize phishing emails" },
        { label: "2FA Setup", href: "/guides/two-factor-auth-setup", description: "Protect your email with 2FA" },
        { label: "Password Manager", href: "/security/password-managers", description: "Generate strong email passwords" },
      ]} />
    </article>
  );
}
