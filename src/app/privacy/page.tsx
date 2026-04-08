import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SecureWork's privacy policy explains how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Privacy Policy</h1>
      <p className="text-sm text-zinc-500 mb-8">Last updated: April 7, 2026</p>
      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-4 text-zinc-700 dark:text-zinc-300">
        <p>SecureWork (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy explains what data we collect and how we use it.</p>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Information We Collect</h2>
        <ul>
          <li><strong>Analytics data:</strong> We use privacy-respecting analytics to understand how visitors use our site. This includes page views, referral sources, and general geographic region (country level).</li>
          <li><strong>Cookies:</strong> We use essential cookies for site functionality and optional analytics cookies. See our Cookie Notice for details.</li>
          <li><strong>Contact information:</strong> If you contact us, we collect the information you provide (name, email, message).</li>
        </ul>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How We Use Your Information</h2>
        <ul>
          <li>To operate and improve our website</li>
          <li>To respond to your inquiries</li>
          <li>To understand content performance</li>
        </ul>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Third Parties</h2>
        <p>We do not sell your personal information. When you click an affiliate link, you are directed to the provider&apos;s website, which has its own privacy policy. We recommend reviewing their policies before making purchases.</p>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data by <a href="/contact" className="text-blue-600 hover:text-blue-700">contacting us</a>.</p>
      </div>
    </div>
  );
}
