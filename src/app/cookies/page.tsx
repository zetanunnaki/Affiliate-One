import type { Metadata } from "next";
import Link from "next/link";
import LegalPageHero from "@/components/layouts/LegalPageHero";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: "Information about how BuySecureVPN uses cookies and similar technologies.",
};

const cookieTypes = [
  {
    type: "Essential",
    purpose: "Required for the website to function. Includes session management and security tokens.",
    duration: "Session",
  },
  {
    type: "Analytics",
    purpose: "Help us understand how visitors use our site. We use privacy-respecting analytics that do not track you across websites.",
    duration: "1 year",
  },
  {
    type: "Preference",
    purpose: "Remember your settings (like dark mode preference, cookie consent).",
    duration: "1 year",
  },
];

export default function CookiesPage() {
  return (
    <div>
      <LegalPageHero
        eyebrow="Cookies"
        title="Cookie Notice"
        description="How we use cookies and similar technologies to recognize you when you visit our site."
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Last updated: April 7, 2026
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight">
          <p>
            This notice explains how BuySecureVPN uses cookies and similar
            technologies to recognize you when you visit our website.
          </p>

          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files placed on your device when you visit a
            website. They are widely used to make websites work efficiently and
            to provide information to site owners.
          </p>

          <h2>Cookies We Use</h2>
        </div>

        {/* Custom styled table */}
        <div className="not-prose mt-4 mb-8 overflow-x-auto rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 bg-white dark:bg-slate-900">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                <th className="px-5 py-4 text-left text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Type</th>
                <th className="px-5 py-4 text-left text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Purpose</th>
                <th className="px-5 py-4 text-left text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {cookieTypes.map((c) => (
                <tr key={c.type}>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                      {c.type}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-400">{c.purpose}</td>
                  <td className="px-5 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">{c.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight">
          <h2>Third-Party Cookies</h2>
          <p>
            When you click an affiliate link, the destination site may set its
            own cookies to track the referral. These are governed by the third
            party&apos;s privacy policy, not ours. We do not use third-party
            advertising cookies or cross-site tracking.
          </p>

          <h2>Managing Cookies</h2>
          <p>
            You can control cookies through your browser settings. Most browsers
            allow you to block or delete cookies. Note that blocking essential
            cookies may affect site functionality.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about our cookie practices?{" "}
            <Link href="/contact">Contact us</Link>.
          </p>
        </div>
      </article>
    </div>
  );
}
