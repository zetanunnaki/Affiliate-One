import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Best VPN for Business (2026) — Team Plans & Enterprise Solutions",
  description: "VPN solutions for businesses of all sizes. Individual subscriptions for tiny teams, managed plans for 5-50, and Zero Trust for 50+.",
};

export default function BestVpnBusinessPage() {
  const faqs = [
    { question: "Do small businesses need a business VPN plan?", answer: "Teams under 10 can use individual subscriptions (NordVPN, Proton VPN, or FastestVPN). Teams of 10-50 benefit from NordVPN Teams or Proton VPN Business with centralized management. Over 50 employees should evaluate Zero Trust solutions." },
    { question: "What about NordVPN Meshnet for teams?", answer: "Meshnet creates encrypted peer-to-peer connections between team devices — like a virtual office LAN. Free for all NordVPN users. Up to 60 devices. Great for file sharing, LAN access, and secure team networking without a corporate VPN." },
    { question: "Is a business VPN HIPAA/SOX/PCI compliant?", answer: "A VPN provides encryption in transit which helps meet compliance requirements. But compliance requires additional measures: access controls, audit logs, encryption at rest, and documented policies. Proton VPN Business can sign BAAs for HIPAA." },
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="[&_nav]:text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-slate-500">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Best Of", href: "/best" }, { label: "Best VPN for Business" }]} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mt-5 mb-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Team & enterprise
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-[1.1] mb-5">Best VPN for Business (2026)</h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-6">
            From 2-person startups to 50-person companies. The right VPN solution for every team size and budget.
          </p>
          <div className="pt-5 border-t border-white/10 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-slate-400 [&_time]:text-slate-400 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0">
            <Byline authorId="sarah-chen" updatedAt="2026-04-08" />
          </div>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TopVpnPicks heading="Our Business VPN Picks" eyebrow="Team-ready" />

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/25">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">By team size</p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Team Size Recommendations</h2>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { size: "2-10 people", pick: "FastestVPN", price: "$1.11/user/mo", desc: "Individual subscriptions. Unlimited devices per person. No admin overhead. Cheapest option." },
              { size: "10-25 people", pick: "NordVPN Teams", price: "~$7-9/user/mo", desc: "Centralized dashboard. Add/remove users. Dedicated IPs. Meshnet for virtual office. Priority support." },
              { size: "25-50 people", pick: "Proton VPN Business", price: "$9.99/user/mo", desc: "SSO integration. Swiss privacy. Includes Mail, Drive, Calendar, Pass. BAA available for HIPAA." },
              { size: "50+ people", pick: "Zero Trust (Cloudflare/Zscaler)", price: "Custom", desc: "Per-application access control. Device trust. Beyond traditional VPN. See our Zero Trust guide." },
            ].map((t) => (
              <div key={t.size} className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2 gap-3 flex-wrap">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.size}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 rounded-full">{t.price}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">Pick: {t.pick}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <FAQ items={faqs} />
        <InternalLinks links={[
          { label: "VPN for Businesses Guide", href: "/security/vpn-for-businesses" },
          { label: "VPN for Remote Teams", href: "/vpn/vpn-for-remote-teams" },
          { label: "Best VPN for Teams", href: "/money/best-vpn-teams" },
          { label: "Zero Trust Guide", href: "/guides/zero-trust-remote-work" },
        ]} />
      </article>
    </>
  );
}
