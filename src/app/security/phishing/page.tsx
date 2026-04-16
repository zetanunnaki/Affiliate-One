import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Phishing & Social Engineering Guide (2026) — Recognize & Avoid Attacks",
  description:
    "Learn how to recognize phishing emails, social engineering attacks, and scams targeting remote workers. Practical examples and prevention steps.",
};

export default function PhishingPage() {
  const redFlags = [
    { flag: "Urgency or fear", example: "\"Your account will be suspended in 24 hours!\"", tip: "Legitimate companies rarely impose tight deadlines via email." },
    { flag: "Unexpected sender", example: "Email from IT department you didn't expect", tip: "Verify through a separate channel (Slack, phone) before clicking." },
    { flag: "Mismatched URLs", example: "Link text says 'google.com' but URL is 'g00gle-login.com'", tip: "Hover over links to see the real destination before clicking." },
    { flag: "Generic greeting", example: "\"Dear Customer\" instead of your name", tip: "Legitimate services typically address you by name." },
    { flag: "Requests for credentials", example: "\"Please verify your password by clicking here\"", tip: "No legitimate service asks for your password via email." },
    { flag: "Attachments from unknown senders", example: "\"Invoice attached\" from unknown company", tip: "Don't open unexpected attachments. Verify with the sender first." },
    { flag: "Too good to be true", example: "\"You've won a $1,000 gift card!\"", tip: "If you didn't enter a contest, you didn't win." },
  ];

  const faqs = [
    { question: "What is phishing?", answer: "Phishing is a social engineering attack where an attacker impersonates a trusted entity (company, colleague, bank) to trick you into revealing sensitive information like passwords, credit card numbers, or 2FA codes. It's the most common cyber attack vector." },
    { question: "What should I do if I clicked a phishing link?", answer: "Don't panic. (1) Disconnect from the internet immediately, (2) Change the password for the affected account from a different device, (3) Enable 2FA if not already active, (4) Run a malware scan, (5) Monitor the account for unauthorized activity, (6) Report the phishing email to your IT department and the impersonated company." },
    { question: "Can a VPN protect against phishing?", answer: "A VPN protects your network traffic but doesn't prevent phishing — phishing relies on tricking you, not intercepting your data. However, some VPN providers include malware/phishing protection features (like NordVPN's Threat Protection) that can block known phishing domains." },
    { question: "How are remote workers targeted differently?", answer: "Remote workers face unique phishing vectors: fake VPN login pages, impersonation of IT support ('we need to update your remote access'), fake video call links, compromised collaboration tools, and business email compromise where attackers impersonate executives requesting wire transfers." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Phishing & Social Engineering Guide (2026)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          Phishing is the #1 attack vector for breaches. As a remote worker,
          you&apos;re an especially attractive target. Learn to recognize and
          avoid these attacks.
        </p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-07" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      {/* Red flags */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          7 Red Flags of a Phishing Attempt
        </h2>
        <div className="space-y-3">
          {redFlags.map((r, i) => (
            <div key={i} className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{r.flag}</h3>
                  <p className="text-sm text-zinc-500 italic mb-1">Example: {r.example}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{r.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Types of phishing */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Types of Phishing Attacks
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { type: "Email Phishing", desc: "Mass emails impersonating trusted brands. Most common form. Usually detectable by red flags above." },
            { type: "Spear Phishing", desc: "Targeted at specific individuals using personal information. Much harder to detect. Common in business contexts." },
            { type: "Smishing (SMS)", desc: "Phishing via text message. Often impersonates banks, delivery services, or government agencies." },
            { type: "Vishing (Voice)", desc: "Phone-based social engineering. Attacker calls impersonating tech support, your bank, or a colleague." },
            { type: "Business Email Compromise", desc: "Attacker compromises or impersonates an executive's email to request wire transfers or sensitive data." },
            { type: "Clone Phishing", desc: "Attacker copies a legitimate email you previously received and replaces links/attachments with malicious ones." },
          ].map((t) => (
            <div key={t.type} className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{t.type}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prevention */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Prevention Checklist
        </h2>
        <div className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li>1. Enable 2FA on all accounts (authenticator app, not SMS)</li>
            <li>2. Use a password manager so you never type passwords on fake sites</li>
            <li>3. Verify unexpected requests through a separate communication channel</li>
            <li>4. Hover over links before clicking to check the real URL</li>
            <li>5. Keep your browser and OS updated for latest phishing protections</li>
            <li>6. Use a VPN with threat protection features (blocks known phishing domains)</li>
            <li>7. Report phishing emails to your IT department and the impersonated brand</li>
            <li>8. Never share passwords, 2FA codes, or recovery keys via email or chat</li>
          </ul>
        </div>
      </section>

      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg mb-8 text-sm text-blue-800 dark:text-blue-200">
        <strong>How we verified:</strong> Attack descriptions are based on
        MITRE ATT&CK framework, CISA advisories, and Verizon Data Breach
        Investigations Report (2026). Prevention steps tested across current
        email clients and browsers.
      </div>

      <FAQ items={faqs} />

      <InternalLinks links={[
        { label: "2FA Guide", href: "/security/2fa", description: "Set up two-factor authentication" },
        { label: "Password Manager Guide", href: "/security/password-managers", description: "Use auto-fill to avoid fake login pages" },
        { label: "Remote Work Security", href: "/security/remote-work", description: "Complete remote security guide" },
      ]} />
    </article>
  );
}
