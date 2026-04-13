import type { Metadata } from "next";
import Link from "next/link";
import LegalPageHero from "@/components/layouts/LegalPageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BuySecureVPN's privacy policy explains how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div>
      <LegalPageHero
        eyebrow="Your privacy"
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information."
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
            BuySecureVPN (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects
            your privacy. This policy explains what data we collect and how we use it.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li><strong>Analytics data:</strong> We use privacy-respecting analytics to understand how visitors use our site. This includes page views, referral sources, and general geographic region (country level).</li>
            <li><strong>Cookies:</strong> We use essential cookies for site functionality and optional analytics cookies. See our Cookie Notice for details.</li>
            <li><strong>Contact information:</strong> If you contact us, we collect the information you provide (name, email, message).</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To operate and improve our website</li>
            <li>To respond to your inquiries</li>
            <li>To understand content performance</li>
          </ul>

          <h2>Third Parties</h2>
          <p>
            We do not sell your personal information. When you click an affiliate
            link, you are directed to the provider&apos;s website, which has its
            own privacy policy. We recommend reviewing their policies before
            making purchases.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal data by <Link href="/contact">contacting us</Link>.
          </p>
        </div>
      </article>
    </div>
  );
}
