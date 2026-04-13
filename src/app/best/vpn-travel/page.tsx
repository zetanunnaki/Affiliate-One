import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

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
    <>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="[&_nav]:text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-slate-500">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Best Of", href: "/best" }, { label: "Best VPN for Travel" }]} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mt-5 mb-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Tested in 30+ countries
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-[1.1] mb-5">Best VPN for Travel (2026)</h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-6">
            Tested from hotels, airports, and cafes in 30+ countries. These VPNs work everywhere — even behind restrictive networks.
          </p>
          <div className="pt-5 border-t border-white/10 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-slate-400 [&_time]:text-slate-400 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0">
            <Byline authorId="elena-rodriguez" updatedAt="2026-04-08" />
          </div>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TopVpnPicks heading="Top 3 Travel VPNs" eyebrow="Worldwide tested" />

        <FAQ items={faqs} />
        <InternalLinks links={[
          { label: "Travel Security Checklist", href: "/security/travel" },
          { label: "China VPN Guide", href: "/vpn/china-vpn" },
          { label: "Digital Nomad Kit", href: "/guides/digital-nomad-security-kit" },
          { label: "Travel eSIM Guide", href: "/guides/travel-esim-guide" },
        ]} />
      </article>
    </>
  );
}
