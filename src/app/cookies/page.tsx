import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: "Information about how BuySecureVPN uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Cookie Notice</h1>
      <p className="text-sm text-zinc-500 mb-8">Last updated: April 7, 2026</p>
      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-4 text-zinc-700 dark:text-zinc-300">
        <p>
          This notice explains how BuySecureVPN uses cookies and similar
          technologies to recognize you when you visit our website.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What Are Cookies</h2>
        <p>
          Cookies are small text files placed on your device when you visit a
          website. They are widely used to make websites work efficiently and
          to provide information to site owners.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Cookies We Use</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Type</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Purpose</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-sm">
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Essential</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Required for the website to function. Includes session management and security tokens.</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Session</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Analytics</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Help us understand how visitors use our site. We use privacy-respecting analytics that do not track you across websites.</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">1 year</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Preference</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">Remember your settings (like dark mode preference, cookie consent).</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">1 year</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Third-Party Cookies</h2>
        <p>
          When you click an affiliate link, the destination site may set its
          own cookies to track the referral. These are governed by the
          third party&apos;s privacy policy, not ours. We do not use
          third-party advertising cookies or cross-site tracking.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Managing Cookies</h2>
        <p>
          You can control cookies through your browser settings. Most browsers
          allow you to block or delete cookies. Note that blocking essential
          cookies may affect site functionality.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Contact</h2>
        <p>
          Questions about our cookie practices? <a href="/contact" className="text-blue-600 hover:text-blue-700">Contact us</a>.
        </p>
      </div>
    </div>
  );
}
