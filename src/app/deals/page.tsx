import type { Metadata } from "next";
import Link from "next/link";
import { getAllProviders } from "@/lib/data";
import Disclosure from "@/components/ui/Disclosure";
import Byline from "@/components/ui/Byline";

export const metadata: Metadata = {
  title: "VPN Deals & Coupons (April 2026) — Best Current Offers",
  description: "Current VPN deals and discount codes. Save up to 85% on NordVPN, Surfshark, ExpressVPN, and more.",
};

export default function DealsPage() {
  const providers = getAllProviders();

  const deals = [
    { providerId: "nordvpn", discount: "74% off", plan: "2-year plan", price: "$3.39/mo", extra: "+ 3 months free", highlight: true },
    { providerId: "surfshark", discount: "85% off", plan: "2-year plan", price: "$2.29/mo", extra: "+ 2 months free", highlight: false },
    { providerId: "expressvpn", discount: "49% off", plan: "1-year plan", price: "$6.67/mo", extra: "+ 3 months free", highlight: false },
    { providerId: "protonvpn", discount: "50% off", plan: "2-year plan", price: "$4.99/mo", extra: "Includes Proton ecosystem", highlight: false },
    { providerId: "mullvad", discount: "Flat rate", plan: "Monthly", price: "€5/mo", extra: "No discounts, no tricks", highlight: false },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          VPN Deals & Coupons (April 2026)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
          Current VPN promotions and discount codes. We update this page weekly
          with verified deals from providers we&apos;ve tested and reviewed.
        </p>
        <Disclosure />
        <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
      </header>

      <div className="space-y-4 mb-10">
        {deals.map((deal) => {
          const provider = providers.find((p) => p.id === deal.providerId);
          if (!provider) return null;
          return (
            <div
              key={deal.providerId}
              className={`p-6 border rounded-xl ${
                deal.highlight
                  ? "border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/10"
                  : "border-zinc-200 dark:border-zinc-700"
              }`}
            >
              {deal.highlight && (
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30 rounded-full mb-3">
                  Editor&apos;s Pick
                </span>
              )}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {provider.name}
                  </h2>
                  <p className="text-sm text-zinc-500 mt-1">
                    {deal.plan} &middot; Rating: {provider.rating}/5
                  </p>
                </div>
                <div className="text-right sm:text-right">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {deal.discount}
                  </div>
                  <div className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {deal.price}
                  </div>
                  <div className="text-xs text-zinc-500">{deal.extra}</div>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <Link
                  href={`/vpn/providers/${provider.id}`}
                  className="flex-1 text-center px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Get This Deal
                </Link>
                <Link
                  href={`/vpn/providers/${provider.id}`}
                  className="px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                >
                  Read Review
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tips */}
      <section className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl mb-8">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
          VPN Deal Tips
        </h2>
        <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
          <li>Longer plans always offer better monthly rates — 2-year plans save the most</li>
          <li>All providers listed offer 30-day money-back guarantees — you can try risk-free</li>
          <li>Watch for holiday sales (Black Friday, Cyber Monday) for the deepest discounts</li>
          <li>Avoid &quot;lifetime&quot; VPN deals — they&apos;re almost always scams or unsustainable businesses</li>
          <li>We verify all deals on this page — prices shown are current as of the last update date</li>
        </ul>
      </section>

      <p className="text-xs text-zinc-500 italic">
        Deals and pricing last verified: April 7, 2026. Prices may change without notice.
        This page contains affiliate links. See our{" "}
        <Link href="/affiliate-disclosure" className="underline">affiliate disclosure</Link>.
      </p>
    </article>
  );
}
