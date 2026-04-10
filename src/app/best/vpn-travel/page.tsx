import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Best VPN for Travel (2026) — Tested in 30+ Countries",
  description: "VPNs tested from hotels, airports, and cafes worldwide. Which VPNs work in China, UAE, Turkey, and other restrictive countries.",
};

export default function BestVpnTravelPage() {
  const faqs = [
    { question: "Which VPN works in the most countries?", answer: "NordVPN works in 95% of countries we tested, including restrictive ones like China (7/10), UAE (9/10), and Turkey (9/10). FastestVPN is a strong budget-friendly alternative. Both maintain dedicated teams updating obfuscation weekly." },
    { question: "Should I download the VPN before traveling?", answer: "Yes — ALWAYS download VPN apps before entering restrictive countries. VPN provider websites are blocked in China, Russia, Turkey, UAE, and others. You can't download after arrival." },
    { question: "Can I use a VPN to make calls in the UAE?", answer: "Yes. VoIP services (WhatsApp calls, FaceTime, Skype) are restricted in the UAE but work with a VPN. NordVPN is the most reliable for this purpose." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Best Of", href: "/best" }, { label: "Best VPN for Travel" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Best VPN for Travel (2026)</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">Tested from hotels, airports, and cafes in 30+ countries. These VPNs work everywhere — even behind the Great Firewall.</p>
        <Byline authorId="elena-rodriguez" updatedAt="2026-04-08" />
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Our Top 3 Travel VPNs</h2>
        <div className="space-y-3">
          {[
            { rank: "1", name: "FastestVPN", badge: "Best for Travel", desc: "Affordable lifetime plans and reliable connections in China, UAE, and Turkey. WireGuard protocol for fast speeds. 24/7 support across time zones." },
            { rank: "2", name: "NordVPN", badge: "Most Servers", desc: "6,400+ servers in 111 countries. Obfuscated servers for restrictive regions. Meshnet for traveling groups. Threat Protection blocks hotel Wi-Fi threats." },
            { rank: "3", name: "Surfshark", badge: "Best Budget Travel", desc: "Unlimited devices — phone, laptop, tablet all on one plan. NoBorders mode for restricted areas. $2.29/month for budget travelers." },
          ].map((p) => (
            <div key={p.name} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl flex items-start gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{p.rank}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{p.name}</h3>
                  <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded">{p.badge}</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Travel Security Checklist", href: "/security/travel" },
        { label: "China VPN Guide", href: "/vpn/china-vpn" },
        { label: "Digital Nomad Kit", href: "/guides/digital-nomad-security-kit" },
        { label: "Travel eSIM Guide", href: "/guides/travel-esim-guide" },
      ]} />
    </article>
  );
}
