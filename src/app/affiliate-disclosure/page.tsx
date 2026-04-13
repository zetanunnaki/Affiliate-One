import type { Metadata } from "next";
import LegalPageHero from "@/components/layouts/LegalPageHero";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "How BuySecureVPN earns revenue through affiliate partnerships and how this affects (or doesn't affect) our editorial content.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div>
      <LegalPageHero
        eyebrow="Transparency"
        title="Affiliate Disclosure"
        description="How we earn revenue through affiliate partnerships and how this affects (or doesn't affect) our editorial content."
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Last updated: April 7, 2026
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight">
          <p className="lead">
            BuySecureVPN participates in affiliate programs with VPN providers and
            other security tool companies. When you click on certain links on our
            site and make a purchase, we may earn a commission at no additional
            cost to you.
          </p>

          <h2>What This Means for You</h2>
          <ul>
            <li>You never pay more by using our links.</li>
            <li>Our editorial ratings and recommendations are based solely on our testing — not on commission rates.</li>
            <li>We review products that do not have affiliate programs (such as Mullvad VPN) with the same rigor.</li>
            <li>Affiliate links are clearly identified on our site with a disclosure notice near the first commercial link on each page.</li>
          </ul>

          <h2>How We Select Products</h2>
          <p>
            Products are selected for review based on relevance to our audience,
            not affiliate availability. We have reviewed and will continue to
            review products that do not offer affiliate commissions. The presence
            or absence of an affiliate relationship does not influence product
            placement, rating, or recommendation status.
          </p>

          <h2>Revenue Use</h2>
          <p>
            Affiliate revenue supports our operations, including purchasing
            products for testing, maintaining our testing infrastructure, and
            paying our editorial team. This enables us to continue providing
            free, high-quality security guidance.
          </p>
        </div>
      </article>
    </div>
  );
}
