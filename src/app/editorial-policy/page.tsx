import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "BuySecureVPN's editorial policy outlines our commitment to accuracy, independence, and transparency in all content.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
        Editorial Policy
      </h1>
      <p className="text-sm text-zinc-500 mb-8">Last updated: April 7, 2026</p>

      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-zinc-700 dark:text-zinc-300">
        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Our Commitment
          </h2>
          <p>
            BuySecureVPN is committed to providing accurate, independent, and
            useful security guidance for remote workers. Our editorial content
            is never influenced by advertisers, affiliate partners, or product
            providers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Independence
          </h2>
          <p>
            Our editorial and commercial teams operate independently. Product
            ratings and recommendations are based solely on our testing and
            evaluation criteria. Affiliate relationships do not influence
            editorial decisions, ratings, or product placement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Accuracy & Verification
          </h2>
          <p>
            All factual claims in our content are verified before publication.
            For security-related claims, we document our testing methodology,
            devices used, and test dates. We clearly distinguish between
            factual statements, recommendations, and opinions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Updates & Corrections
          </h2>
          <p>
            We review and update content regularly. Every article displays a
            &quot;Last Updated&quot; date. If we discover an error, we correct
            it promptly and note the correction. See our{" "}
            <a href="/corrections" className="text-blue-600 hover:text-blue-700">
              Corrections Policy
            </a>{" "}
            for details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Author Qualifications
          </h2>
          <p>
            All content is written or reviewed by team members with relevant
            expertise. Author profiles include credentials, experience, and
            links to professional profiles. Our review board provides
            additional oversight for technical accuracy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Affiliate Disclosure
          </h2>
          <p>
            Some links on BuySecureVPN are affiliate links. When you purchase
            through these links, we may earn a commission at no additional cost
            to you. Affiliate relationships are clearly disclosed on every page
            that contains them. Read our full{" "}
            <a
              href="/affiliate-disclosure"
              className="text-blue-600 hover:text-blue-700"
            >
              Affiliate Disclosure
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
