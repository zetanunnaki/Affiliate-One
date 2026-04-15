import type { Metadata } from "next";
import EditorialHero from "@/components/ui/EditorialHero";
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
      <EditorialHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Best Of", href: "/best" }, { label: "Best VPN for Business" }]}
        eyebrow="Business · Team & Enterprise"
        headlineTop="From two-person"
        headlineItalic="startups to fifty-"
        headlineBottom="person teams."
        lede="Individual subscriptions, managed business plans, and Zero Trust alternatives — the right VPN architecture for every team size. Compliance-aware picks included."
        authorId="sarah-chen"
        updatedAt="2026-04-08"
      />

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
