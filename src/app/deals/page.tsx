import type { Metadata } from "next";
import Link from "next/link";
import { getAllProviders } from "@/lib/data";
import Byline from "@/components/ui/Byline";

export const metadata: Metadata = {
  title: "VPN Deals & Coupons (April 2026) — Best Current Offers",
  description: "Current VPN deals and discount codes for April 2026. Save up to 89% on NordVPN, Surfshark, Proton VPN, and FastestVPN. Verified weekly — all deals include 30-day money-back guarantees.",
  alternates: {
    canonical: "/deals/",
    languages: { "x-default": "https://buysecurevpn.com/deals/", en: "https://buysecurevpn.com/deals/", fr: "https://buysecurevpn.com/fr/deals/", es: "https://buysecurevpn.com/es/deals/", pt: "https://buysecurevpn.com/pt/deals/" },
  },
  openGraph: {
    title: "VPN Deals & Coupons (2026) | BuySecureVPN",
    description: "Verified VPN discounts updated weekly. Save up to 89% on NordVPN, Proton VPN, and FastestVPN.",
    type: "website",
    url: "/deals/",
    images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: "VPN Deals & Coupons" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
};

export default function DealsPage() {
  const providers = getAllProviders();

  const deals = [
    { providerId: "nordvpn", discount: "Save 74%", plan: "2-year plan", price: "$3.39/mo", wasPrice: "$12.99/mo", extra: "+ 3 months free · 30-day refund", highlight: true },
    { providerId: "surfshark", discount: "Save 87%", plan: "2-year plan", price: "$1.99/mo", wasPrice: "$15.45/mo", extra: "Unlimited devices · 30-day refund", highlight: false },
    { providerId: "protonvpn", discount: "50% off", plan: "2-year plan", price: "$4.99/mo", wasPrice: "$9.99/mo", extra: "Includes Proton ecosystem · 30-day refund", highlight: false },
    { providerId: "fastestvpn", discount: "Save 89%", plan: "Lifetime deal", price: "$1.11/mo", wasPrice: "$10.00/mo", extra: "31-day refund · 15 devices", highlight: false },
  ];

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-500/10 backdrop-blur-sm border border-red-400/20 rounded-full text-[13px] text-red-200 mb-5">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 bg-red-400 rounded-full" />
            </span>
            Live deals · Updated weekly
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">
            VPN Deals & Coupons
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-6">
            Current VPN promotions and discount codes. We update this page weekly
            with verified deals from providers we&apos;ve tested and reviewed.
          </p>
          <div className="pt-5 border-t border-white/10 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-slate-400 [&_time]:text-slate-400 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0">
            <Byline authorId="marcus-johnson" updatedAt="2026-01-01" />
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-5 mb-10">
          {deals.map((deal) => {
            const provider = providers.find((p) => p.id === deal.providerId);
            if (!provider) return null;
            return (
              <div
                key={deal.providerId}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  deal.highlight
                    ? "border-2 border-blue-400 dark:border-blue-600 bg-gradient-to-br from-blue-50/60 to-white dark:from-blue-950/30 dark:to-slate-900 shadow-xl shadow-blue-500/10"
                    : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700"
                }`}
              >
                {deal.highlight && (
                  <span className="absolute -top-px right-6 inline-flex items-center gap-1 px-3 py-1 text-[11px] font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-b-lg shadow-md">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Editor&apos;s Pick
                  </span>
                )}
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/images/providers/${provider.id}.svg`}
                        alt={`${provider.name} logo`}
                        width={56}
                        height={56}
                        className="w-14 h-14 shrink-0 rounded-xl object-contain bg-white p-2 ring-1 ring-slate-200 dark:ring-slate-700 shadow-sm"
                      />
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                          {provider.name}
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {deal.plan} · Rating: {provider.rating}/5
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center px-2.5 py-1 text-[11px] font-bold text-white rounded-full shadow-sm" style={{ background: `linear-gradient(135deg, ${provider.brandColor}, ${provider.brandColorDark})` }}>
                        {deal.discount}
                      </div>
                      <div className="mt-1.5 flex items-baseline justify-end gap-2">
                        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 line-through">{deal.wasPrice}</span>
                        <span className="text-2xl font-black text-slate-900 dark:text-white">{deal.price}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{deal.extra}</div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-5 pt-5 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href={provider.affiliate.trackingBaseUrl}
                      rel="noopener noreferrer sponsored"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-semibold text-white rounded-xl shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110"
                      style={{
                        background: `linear-gradient(135deg, ${provider.brandColor}, ${provider.brandColorDark})`,
                        boxShadow: `0 8px 24px -8px ${provider.brandColor}66`,
                      }}
                    >
                      Get This Deal
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <Link
                      href={`/vpn/providers/${provider.id}`}
                      className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl transition-colors"
                    >
                      Read Review
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tips */}
        <section className="p-7 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              VPN Deal Tips
            </h2>
          </div>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Longer plans always offer better monthly rates — 2-year plans save the most
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              All providers listed offer 30-day money-back guarantees — you can try risk-free
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Watch for holiday sales (Black Friday, Cyber Monday) for the deepest discounts
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Avoid &quot;lifetime&quot; VPN deals — they&apos;re almost always scams or unsustainable businesses
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              We verify all deals on this page — prices shown are current as of the last update date
            </li>
          </ul>
        </section>

        <p className="text-xs text-slate-500 dark:text-slate-400 italic text-center">
          Deals and pricing last verified: April 7, 2026. Prices may change without notice.
          This page contains affiliate links. See our{" "}
          <Link href="/affiliate-disclosure" className="underline hover:text-blue-600 dark:hover:text-blue-400">affiliate disclosure</Link>.
        </p>
      </article>
    </div>
  );
}
