import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Byline from "@/components/ui/Byline";
import ArticleSchema from "@/components/seo/ArticleSchema";

export const metadata: Metadata = {
  title: "How We Test VPNs — Our 47-Point Testing Methodology (2026)",
  description:
    "Our complete VPN testing methodology: 47 criteria across speed, security, privacy, usability, and value. Every provider purchased at retail, tested for 47+ days.",
  alternates: { canonical: "/how-we-test/" },
  openGraph: {
    title: "How We Test VPNs — Our 47-Point Methodology",
    description: "Our complete VPN testing methodology: 47 criteria across speed, security, privacy, usability, and value.",
    url: "/how-we-test/",
    type: "article",
    images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: "BuySecureVPN Testing Methodology" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
};

const categories = [
  {
    name: "Speed & Performance",
    weight: "25%",
    color: "from-blue-500 to-indigo-600",
    criteria: [
      "Download speed (same country server)",
      "Download speed (cross-continent server)",
      "Upload speed (local and remote)",
      "Latency / ping (idle and loaded)",
      "Speed consistency over 24-hour period",
      "WireGuard vs OpenVPN protocol comparison",
      "Speed retention percentage (vs baseline)",
      "Connection establishment time",
      "Reconnection speed after network switch",
      "Performance under network congestion",
    ],
  },
  {
    name: "Security & Encryption",
    weight: "25%",
    color: "from-emerald-500 to-teal-600",
    criteria: [
      "Encryption standard (AES-256 / ChaCha20)",
      "Kill switch reliability (network disconnect test)",
      "DNS leak protection (IPv4 and IPv6)",
      "WebRTC leak prevention",
      "IPv6 leak test",
      "Perfect forward secrecy implementation",
      "RAM-only server infrastructure",
      "Multi-hop / Double VPN availability",
      "Obfuscation / stealth mode effectiveness",
      "Third-party security audit (date and auditor)",
    ],
  },
  {
    name: "Privacy & Logging",
    weight: "20%",
    color: "from-violet-500 to-purple-600",
    criteria: [
      "No-logs policy (verified by audit)",
      "Jurisdiction and data retention laws",
      "Payment anonymity options (crypto)",
      "Account creation data minimization",
      "Third-party tracker presence in apps",
      "Warrant canary or transparency report",
      "Open-source client code",
      "Independent infrastructure (own DNS, no rented servers with logging)",
    ],
  },
  {
    name: "Usability & Features",
    weight: "15%",
    color: "from-amber-500 to-orange-600",
    criteria: [
      "App design and ease of use (all platforms)",
      "Server selection interface",
      "Split tunneling support",
      "Simultaneous device connections",
      "Platform coverage (Windows, macOS, iOS, Android, Linux, routers)",
      "Browser extensions quality",
      "Smart DNS / streaming optimization",
      "Ad/malware blocking features",
      "Customer support responsiveness (live chat, email)",
      "Documentation and help center quality",
    ],
  },
  {
    name: "Value & Pricing",
    weight: "15%",
    color: "from-rose-500 to-pink-600",
    criteria: [
      "Monthly price (longest plan)",
      "Monthly price (monthly plan)",
      "Money-back guarantee duration",
      "Free tier availability and limitations",
      "Feature-to-price ratio vs competitors",
      "Family/team plan options",
      "Lifetime deal availability and trustworthiness",
      "Price transparency (hidden fees, auto-renewal clarity)",
      "Student/non-profit discounts",
    ],
  },
];

export default function HowWeTestPage() {
  return (
    <div>
      <ArticleSchema
        title="How We Test VPNs — Our 47-Point Testing Methodology (2026)"
        description="Our complete VPN testing methodology: 47 criteria across speed, security, privacy, usability, and value."
        url="/how-we-test/"
        authorName="Sarah Chen"
        authorUrl="https://buysecurevpn.com/authors/sarah-chen/"
        image="https://buysecurevpn.com/images/og/og-vpn.webp"
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full text-[13px] text-blue-200 mb-5">
            <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            47 criteria · 5 categories
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            How We Test VPNs
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every VPN we review is purchased at retail price, tested for a minimum of 47 days, and evaluated against our 47-point rubric. No provider pays for placement or higher scores.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "How We Test" }]} />
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Byline authorId="sarah-chen" updatedAt="2026-04-28" />

        <section className="mt-10 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Testing Philosophy</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-4">
            <p>
              We believe VPN reviews should be based on measurable, reproducible data — not marketing claims. Every provider goes through the same standardized process regardless of their affiliate relationship with us.
            </p>
            <p>
              Our team purchases each VPN subscription at the publicly available retail price. We never accept free accounts, review copies, or early access that might bias our evaluation. The testing period spans a minimum of 47 days to capture performance variance across different times, network conditions, and server loads.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Testing Infrastructure</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Baseline Connection", value: "1 Gbps symmetric fiber (Hetzner)" },
              { label: "Test Locations", value: "6 continents, 12 cities" },
              { label: "Devices Tested", value: "Windows 11, macOS Sequoia, iOS 19, Android 16" },
              { label: "Protocol Priority", value: "WireGuard (primary), OpenVPN (secondary)" },
              { label: "Test Duration", value: "Minimum 47 days per provider" },
              { label: "Speed Samples", value: "3 tests/day × 47 days = 141+ data points" },
            ].map((item) => (
              <div key={item.label} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">{item.label}</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The 47-Point Rubric</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">
            Our rubric is divided into 5 weighted categories. Each criterion is scored on a pass/fail or 1-5 scale, then weighted to produce the final rating.
          </p>

          <div className="space-y-8">
            {categories.map((cat) => (
              <div key={cat.name} className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className={`h-1 bg-gradient-to-r ${cat.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cat.name}</h3>
                    <span className="inline-flex items-center px-2.5 py-1 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-full">
                      Weight: {cat.weight}
                    </span>
                  </div>
                  <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {cat.criteria.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <span className="shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 mt-0.5">
                          {i + 1}
                        </span>
                        {c}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Scoring & Ratings</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-4">
            <p>
              Each criterion receives a score, which is weighted according to its category. The final rating is expressed as X/5 stars, with the following thresholds:
            </p>
          </div>
          <div className="mt-4 overflow-x-auto rounded-xl ring-1 ring-slate-200 dark:ring-slate-800">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                  <th className="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-slate-500">Rating</th>
                  <th className="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-slate-500">Meaning</th>
                  <th className="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-slate-500">Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/50">
                <tr><td className="px-5 py-3 font-bold">4.5–5.0</td><td className="px-5 py-3">Exceptional</td><td className="px-5 py-3 text-emerald-600 dark:text-emerald-400 font-semibold">Strongly recommended</td></tr>
                <tr><td className="px-5 py-3 font-bold">4.0–4.4</td><td className="px-5 py-3">Very good</td><td className="px-5 py-3 text-blue-600 dark:text-blue-400 font-semibold">Recommended</td></tr>
                <tr><td className="px-5 py-3 font-bold">3.5–3.9</td><td className="px-5 py-3">Good with caveats</td><td className="px-5 py-3 text-amber-600 dark:text-amber-400 font-semibold">Situationally recommended</td></tr>
                <tr><td className="px-5 py-3 font-bold">Below 3.5</td><td className="px-5 py-3">Not recommended</td><td className="px-5 py-3 text-red-600 dark:text-red-400 font-semibold">Avoid</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Independence & Transparency</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-4">
            <p>
              BuySecureVPN earns revenue through affiliate commissions when readers purchase VPN subscriptions through our links. This financial relationship <strong>never influences our ratings or rankings</strong>. Our testing methodology is applied identically regardless of affiliate status.
            </p>
            <p>
              Proof of independence: We have removed providers from our recommendations (ExpressVPN in 2025, CyberGhost in 2025) when they no longer met our standards — despite active affiliate relationships. Revenue follows recommendations; recommendations never follow revenue.
            </p>
          </div>
        </section>

        <section className="mb-12 p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Questions About Our Methodology?</h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            We welcome scrutiny. If you have questions about our testing process or want to report an inaccuracy, contact our editorial team.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/editorial-policy" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
              Editorial Policy
            </Link>
            <Link href="/corrections" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
              Corrections
            </Link>
            <Link href="/affiliate-disclosure" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
              Affiliate Disclosure
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
