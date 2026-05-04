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
            BuySecureVPN earns revenue through affiliate partnerships with VPN
            providers. When you click on certain links on our site and make a
            purchase, we receive a commission at no additional cost to you. This
            page explains exactly how our affiliate relationships work.
          </p>

          <h2>Our Affiliate Partners</h2>
          <p>
            We currently participate in direct affiliate programs with the
            following providers:
          </p>
          <ul>
            <li><strong>NordVPN</strong> — Direct affiliate program via NordVPN&apos;s partner network</li>
            <li><strong>Surfshark</strong> — Direct affiliate program via Surfshark&apos;s partner network</li>
            <li><strong>Proton VPN</strong> — Direct affiliate program via Proton&apos;s partner network</li>
            <li><strong>FastestVPN</strong> — Direct affiliate program via FastestVPN&apos;s partner network</li>
          </ul>
          <p>
            We also review providers with <strong>no affiliate relationship</strong>,
            including ExpressVPN and CyberGhost. These reviews earn us zero
            revenue — they exist because our readers deserve comprehensive
            comparisons.
          </p>

          <h2>How Commissions Work</h2>
          <p>
            Affiliate commissions are paid by the VPN provider, not by you. When
            you purchase a subscription through one of our links, the provider
            pays us a percentage of the sale. You pay the same price as you would
            buying directly from the provider&apos;s website.
          </p>

          <h2>Editorial Independence</h2>
          <p>
            Our editorial process is completely separate from our affiliate
            relationships:
          </p>
          <ul>
            <li>Ratings are determined by our <strong>47-point testing rubric</strong> before any commercial considerations.</li>
            <li>Providers <strong>cannot pay for higher ratings</strong> or favorable placement.</li>
            <li>Commission rates do <strong>not</strong> influence which product ranks #1.</li>
            <li>Our team purchases every VPN at retail price for independent testing.</li>
            <li>Non-monetized providers (ExpressVPN, CyberGhost) receive the same rigorous testing as paying partners.</li>
          </ul>

          <h2>How to Identify Affiliate Links</h2>
          <p>
            Affiliate links on our site are marked with a disclosure banner near
            the first commercial link on every page. Links that include
            &quot;sponsored&quot; in the <code>rel</code> attribute are affiliate
            links. Our editorial and informational links (to NIST, EFF, or other
            references) are never affiliate links.
          </p>

          <h2>Revenue Use</h2>
          <p>
            Affiliate revenue directly funds our operations: purchasing VPN
            subscriptions at retail, maintaining multi-continent speed-testing
            infrastructure, and compensating our CISSP/CEH-certified editorial
            team. This model allows us to provide free, independent security
            guidance without paywalls or sponsored content.
          </p>
        </div>
      </article>
    </div>
  );
}
