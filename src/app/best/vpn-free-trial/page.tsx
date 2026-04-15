import type { Metadata } from "next";
import EditorialHero from "@/components/ui/EditorialHero";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "VPN Free Trials & Money-Back Guarantees (2026) — Try Before You Buy",
  description: "Every VPN free trial and money-back guarantee in one place. Test NordVPN, Proton VPN, and FastestVPN risk-free.",
};

export default function VpnFreeTrialPage() {
  const trials = [
    {
      name: "NordVPN",
      trial: "No free trial",
      guarantee: "30-day money-back",
      free: "No",
      notes: "Full refund within 30 days, no questions asked. Contact support via live chat for fastest refund.",
    },
    {
      name: "Proton VPN",
      trial: "Unlimited free tier",
      guarantee: "30-day money-back (paid plans)",
      free: "Yes",
      notes: "Genuine free tier with no data caps. 3 countries, 1 device. Upgrade to Plus for full features.",
    },
    {
      name: "FastestVPN",
      trial: "No free trial",
      guarantee: "31-day money-back",
      free: "No",
      notes: "Lifetime plans available. All plans include 31-day money-back guarantee.",
    },
  ];

  const faqs = [
    {
      question: "Which VPN has the best free trial?",
      answer: "Proton VPN offers the only truly free VPN tier from a reputable provider — no data caps, no speed throttle, no time limit. For paid VPN trials, all three of our top picks offer a 30-day money-back guarantee that works as a risk-free trial.",
    },
    {
      question: "How do money-back guarantees work?",
      answer: "Sign up, use the VPN for up to 30 days. If unsatisfied, contact support before day 30 for a full refund. All major providers honor this without hassle. The fastest method is usually live chat.",
    },
    {
      question: "Can I test a VPN before committing?",
      answer: "Yes. Start with Proton VPN's free tier for zero-commitment testing, then use the 30-day money-back guarantee on your preferred paid VPN for unrestricted full-feature testing.",
    },
  ];

  return (
    <>
      <EditorialHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Best Of", href: "/best" }, { label: "Free Trials" }]}
        eyebrow="Free Trials · 30-day refund rubric"
        headlineTop="Try them all."
        headlineItalic="Keep the one"
        headlineBottom="that earns it."
        lede="Every major VPN offers a free trial or 30-day money-back guarantee. Here's every loophole, refund window, and free-tier gotcha — organized so you can test risk-free."
        authorId="marcus-johnson"
        updatedAt="2026-04-07"
      />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TopVpnPicks heading="Try These VPNs Risk-Free" eyebrow="Money-back guaranteed" />

        {/* Comparison table */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md shadow-emerald-500/25">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-400">Side-by-side</p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Free Trial & Guarantee Comparison</h2>
            </div>
          </div>
          <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 bg-white dark:bg-slate-900">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                  <th className="px-5 py-4 text-left text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Provider</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Free Trial</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Money-Back</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Free Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {trials.map((t) => (
                  <tr key={t.name}>
                    <td className="px-5 py-4 font-bold text-slate-900 dark:text-white">{t.name}</td>
                    <td className="px-5 py-4 text-center text-slate-700 dark:text-slate-300">{t.trial}</td>
                    <td className="px-5 py-4 text-center text-emerald-600 dark:text-emerald-400 font-semibold">{t.guarantee}</td>
                    <td className="px-5 py-4 text-center">
                      {t.free === "Yes" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 rounded-full">✓ Yes</span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Best strategy */}
        <section className="mb-10 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/60 dark:from-blue-950/30 dark:to-indigo-950/20 border border-blue-200/60 dark:border-blue-900/40">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/25">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Our Recommended Testing Strategy</h2>
          </div>
          <ol className="text-sm text-slate-700 dark:text-slate-300 space-y-2.5">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center">1</span>
              <span>Start with <strong>Proton VPN Free</strong> — no cost, no commitment. Test basic VPN features.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center">2</span>
              <span>Subscribe to your preferred paid VPN with the <strong>30-day money-back guarantee</strong>.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center">3</span>
              <span>Test thoroughly: speed, kill switch, streaming, video calls, your specific use case.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center">4</span>
              <span>If satisfied, keep it. If not, request a refund before day 30.</span>
            </li>
          </ol>
        </section>

        <FAQ items={faqs} />
        <InternalLinks links={[
          { label: "Free VPN Analysis", href: "/vpn/free", description: "Are free VPNs safe?" },
          { label: "Best VPN 2026", href: "/best/vpn", description: "Our top picks" },
          { label: "VPN Deals", href: "/deals", description: "Current promotions" },
          { label: "Proton VPN Review", href: "/vpn/providers/protonvpn", description: "Best free tier" },
        ]} />
      </article>
    </>
  );
}
