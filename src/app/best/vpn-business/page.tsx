import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Best VPN for Business (2026) — Team Plans & Enterprise Solutions",
  description: "VPN solutions for businesses of all sizes. Individual subscriptions for tiny teams, managed plans for 5-50, and Zero Trust for 50+.",
};

export default function BestVpnBusinessPage() {
  const faqs = [
    { question: "Do small businesses need a business VPN plan?", answer: "Teams under 10 can use individual FastestVPN subscriptions ($2.29/user/month). Teams of 10-50 benefit from NordVPN Teams or Proton VPN Business with centralized management. Over 50 employees should evaluate Zero Trust solutions." },
    { question: "What about NordVPN Meshnet for teams?", answer: "Meshnet creates encrypted peer-to-peer connections between team devices — like a virtual office LAN. Free for all NordVPN users. Up to 60 devices. Great for file sharing, LAN access, and secure team networking without a corporate VPN." },
    { question: "Is a business VPN HIPAA/SOX/PCI compliant?", answer: "A VPN provides encryption in transit which helps meet compliance requirements. But compliance requires additional measures: access controls, audit logs, encryption at rest, and documented policies. Proton VPN Business can sign BAAs for HIPAA." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Best Of", href: "/best" }, { label: "Best VPN for Business" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Best VPN for Business (2026)</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">From 2-person startups to 50-person companies. The right VPN solution for every team size and budget.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-08" />
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">By Team Size</h2>
        <div className="space-y-4">
          {[
            { size: "2-10 people", pick: "FastestVPN", price: "$2.29/user/mo", desc: "Individual subscriptions. Unlimited devices per person. No admin overhead. Cheapest option." },
            { size: "10-25 people", pick: "NordVPN Teams", price: "~$7-9/user/mo", desc: "Centralized dashboard. Add/remove users. Dedicated IPs. Meshnet for virtual office. Priority support." },
            { size: "25-50 people", pick: "Proton VPN Business", price: "$9.99/user/mo", desc: "SSO integration. Swiss privacy. Includes Mail, Drive, Calendar, Pass. BAA available for HIPAA." },
            { size: "50+ people", pick: "Zero Trust (Cloudflare/Zscaler)", price: "Custom", desc: "Per-application access control. Device trust. Beyond traditional VPN. See our Zero Trust guide." },
          ].map((t) => (
            <div key={t.size} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{t.size}</h3>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{t.price}</span>
              </div>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">Pick: {t.pick}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "VPN for Businesses Guide", href: "/security/vpn-for-businesses" },
        { label: "VPN for Remote Teams", href: "/vpn/vpn-for-remote-teams" },
        { label: "Best VPN for Teams (MDX)", href: "/money/best-vpn-teams" },
        { label: "Zero Trust Guide", href: "/guides/zero-trust-remote-work" },
      ]} />
    </article>
  );
}
