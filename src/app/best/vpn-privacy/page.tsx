import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Best VPN for Privacy (2026) — Maximum Anonymity & Minimum Logging",
  description:
    "VPNs ranked by privacy, not speed. Audited no-logs policies, open-source code, and jurisdiction compared.",
};

export default function BestVpnPrivacyPage() {
  const faqs = [
    {
      question: "Which VPN is the most private?",
      answer:
        "Proton VPN. Swiss jurisdiction (no mandatory data retention), open-source apps, Secure Core multi-hop routing, independent audits by Securitum, and a free tier that funds the paid product — not your data.",
    },
    {
      question: "Is a privacy VPN slower?",
      answer:
        "Not necessarily. Proton VPN and NordVPN both deliver excellent speeds. Proton's Secure Core (multi-hop) adds latency, but standard connections are fast. Privacy doesn't require sacrificing speed.",
    },
    {
      question: "Do I need a privacy-focused VPN?",
      answer:
        "For most remote workers, NordVPN or FastestVPN provide sufficient privacy with audited no-logs policies. Privacy-maximum VPNs like Proton VPN are ideal for journalists, activists, and anyone with a higher threat model.",
    },
  ];

  return (
    <>
      {/* ═══ DARK HERO ═══ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="[&_nav]:text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-slate-500">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Best Of", href: "/best" }, { label: "Best VPN for Privacy" }]} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mt-5 mb-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Privacy focus
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-[1.1] mb-5">
            Best VPN for Privacy (2026)
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-6">
            VPNs ranked by privacy metrics — not speed or streaming. Logging
            policies, jurisdiction, audits, and anonymity compared.
          </p>
          <div className="pt-5 border-t border-white/10 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-slate-400 [&_time]:text-slate-400 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0">
            <Byline authorId="sarah-chen" updatedAt="2026-04-08" />
          </div>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top picks widget */}
        <TopVpnPicks heading="Our Privacy Rankings" eyebrow="Editor's picks" />

        <FAQ items={faqs} />
        <InternalLinks
          links={[
            { label: "VPN No-Logs Explained", href: "/vpn/no-logs", description: "What no-logs really means" },
            { label: "VPN Logging Policies", href: "/guides/vpn-logging-policies", description: "Provider-by-provider analysis" },
            { label: "Privacy Money Page", href: "/money/best-vpn-privacy", description: "Full privacy comparison" },
            { label: "Threat Modeling", href: "/security/threat-model", description: "Assess your privacy needs" },
          ]}
        />
      </article>
    </>
  );
}
