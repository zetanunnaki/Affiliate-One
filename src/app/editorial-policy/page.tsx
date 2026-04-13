import type { Metadata } from "next";
import Link from "next/link";
import LegalPageHero from "@/components/layouts/LegalPageHero";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "BuySecureVPN's editorial policy outlines our commitment to accuracy, independence, and transparency in all content.",
};

export default function EditorialPolicyPage() {
  return (
    <div>
      <LegalPageHero
        eyebrow="Editorial standards"
        title="Editorial Policy"
        description="Our commitment to accuracy, independence, and transparency in everything we publish."
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Last updated: April 7, 2026
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight">
          <h2>Our Commitment</h2>
          <p>
            BuySecureVPN is committed to providing accurate, independent, and
            useful security guidance for remote workers. Our editorial content
            is never influenced by advertisers, affiliate partners, or product
            providers.
          </p>

          <h2>Independence</h2>
          <p>
            Our editorial and commercial teams operate independently. Product
            ratings and recommendations are based solely on our testing and
            evaluation criteria. Affiliate relationships do not influence
            editorial decisions, ratings, or product placement.
          </p>

          <h2>Accuracy & Verification</h2>
          <p>
            All factual claims in our content are verified before publication.
            For security-related claims, we document our testing methodology,
            devices used, and test dates. We clearly distinguish between
            factual statements, recommendations, and opinions.
          </p>

          <h2>Updates & Corrections</h2>
          <p>
            We review and update content regularly. Every article displays a
            &quot;Last Updated&quot; date. If we discover an error, we correct
            it promptly and note the correction. See our{" "}
            <Link href="/corrections">Corrections Policy</Link>{" "}
            for details.
          </p>

          <h2>Author Qualifications</h2>
          <p>
            All content is written or reviewed by team members with relevant
            expertise. Author profiles include credentials, experience, and
            links to professional profiles. Our review board provides
            additional oversight for technical accuracy.
          </p>

          <h2>Affiliate Disclosure</h2>
          <p>
            Some links on BuySecureVPN are affiliate links. When you purchase
            through these links, we may earn a commission at no additional cost
            to you. Affiliate relationships are clearly disclosed on every page
            that contains them. Read our full{" "}
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>.
          </p>
        </div>
      </article>
    </div>
  );
}
