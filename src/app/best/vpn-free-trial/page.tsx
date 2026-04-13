import type { Metadata } from "next";
import Link from "next/link";
import { getAllProviders } from "@/lib/data";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "VPN Free Trials & Money-Back Guarantees (2026) — Try Before You Buy",
  description: "Every VPN free trial and money-back guarantee in one place. Test NordVPN, Proton VPN, FastestVPN risk-free for 30 days.",
};

export default function VpnFreeTrialPage() {
  const trials = [
    { name: "NordVPN", trial: "No free trial", guarantee: "30-day money-back", free: "No", notes: "Full refund within 30 days, no questions asked. Contact support via live chat for fastest refund." },
    { name: "FastestVPN", trial: "7-day free trial (mobile only)", guarantee: "30-day money-back", free: "No", notes: "Free trial available on iOS and Android only. Desktop requires purchase with 30-day guarantee." },
    { name: "FastestVPN", trial: "No free trial", guarantee: "31-day money-back", free: "No", notes: "Lifetime plans available. All plans include 31-day money-back guarantee." },
    { name: "Proton VPN", trial: "Unlimited free tier", guarantee: "30-day money-back (paid plans)", free: "Yes", notes: "Genuine free tier with no data caps. 3 countries, 1 device. Upgrade to Plus for full features." },
    { name: "Proton VPN", trial: "No free trial", guarantee: "30-day money-back", free: "No", notes: "€5/month flat rate. Refund available within 30 days via support." },
  ];

  const faqs = [
    { question: "Which VPN has the best free trial?", answer: "Proton VPN offers the only truly free VPN tier from a reputable provider — no data caps, no speed throttle, no time limit. For paid VPN trials, FastestVPN offers a 7-day free trial on mobile. FastestVPN offers a 31-day money-back guarantee." },
    { question: "How do money-back guarantees work?", answer: "Sign up, use the VPN for up to 30 days. If unsatisfied, contact support before day 30 for a full refund. All major providers honor this without hassle. The fastest method is usually live chat." },
    { question: "Can I use the free trial and then the money-back guarantee?", answer: "Yes — on mobile, use the 7-day free trial first. If you want to continue, subscribe and you still get the 30-day guarantee. That's effectively 37 days of risk-free testing." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Best Of", href: "/best" }, { label: "Free Trials" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">VPN Free Trials & Money-Back Guarantees (2026)</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">Don&apos;t commit before you test. Every major VPN offers either a free trial or a 30-day money-back guarantee — here&apos;s how to take advantage.</p>
        <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
      </header>

      {/* Comparison table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Free Trial & Guarantee Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Provider</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Free Trial</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Money-Back</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Free Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {trials.map((t) => (
                <tr key={t.name}>
                  <td className="px-3 py-2 font-medium text-zinc-900 dark:text-zinc-100">{t.name}</td>
                  <td className="px-3 py-2 text-center text-zinc-700 dark:text-zinc-300">{t.trial}</td>
                  <td className="px-3 py-2 text-center text-green-600 dark:text-green-400 font-semibold">{t.guarantee}</td>
                  <td className="px-3 py-2 text-center">{t.free === "Yes" ? <span className="text-green-600 dark:text-green-400 font-bold">Yes</span> : <span className="text-zinc-500">No</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Details */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Provider Details</h2>
        <div className="space-y-3">
          {trials.map((t) => (
            <div key={t.name} className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{t.name}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{t.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best strategy */}
      <section className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Our Recommended Testing Strategy</h2>
        <ol className="text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
          <li><strong>1.</strong> Start with <strong>Proton VPN Free</strong> — no cost, no commitment. Test basic VPN features.</li>
          <li><strong>2.</strong> Try <strong>FastestVPN 7-day trial</strong> on mobile — test premium features for free.</li>
          <li><strong>3.</strong> Subscribe to your preferred VPN with the <strong>30-day money-back guarantee</strong>.</li>
          <li><strong>4.</strong> Test thoroughly: speed, kill switch, streaming, video calls, your specific use case.</li>
          <li><strong>5.</strong> If satisfied, keep it. If not, request a refund before day 30.</li>
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
  );
}
