import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "How SecureWork earns revenue through affiliate partnerships and how this affects (or doesn't affect) our editorial content.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
        Affiliate Disclosure
      </h1>
      <p className="text-sm text-zinc-500 mb-8">Last updated: April 7, 2026</p>

      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-4 text-zinc-700 dark:text-zinc-300">
        <p>
          SecureWork participates in affiliate programs with VPN providers and
          other security tool companies. When you click on certain links on our
          site and make a purchase, we may earn a commission at no additional
          cost to you.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          What This Means for You
        </h2>
        <ul>
          <li>You never pay more by using our links.</li>
          <li>
            Our editorial ratings and recommendations are based solely on our
            testing — not on commission rates.
          </li>
          <li>
            We review products that do not have affiliate programs (such as
            Mullvad VPN) with the same rigor.
          </li>
          <li>
            Affiliate links are clearly identified on our site with a
            disclosure notice near the first commercial link on each page.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          How We Select Products
        </h2>
        <p>
          Products are selected for review based on relevance to our audience,
          not affiliate availability. We have reviewed and will continue to
          review products that do not offer affiliate commissions. The presence
          or absence of an affiliate relationship does not influence product
          placement, rating, or recommendation status.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Revenue Use
        </h2>
        <p>
          Affiliate revenue supports our operations, including purchasing
          products for testing, maintaining our testing infrastructure, and
          paying our editorial team. This enables us to continue providing
          free, high-quality security guidance.
        </p>
      </div>
    </div>
  );
}
