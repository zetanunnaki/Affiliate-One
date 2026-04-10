import type { Metadata } from "next";
import Link from "next/link";
import { getAllProviders } from "@/lib/data";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "VPN for Small Teams & Businesses (2026) — Secure Your Remote Workforce",
  description: "How to choose and deploy a VPN for your small team. Compare business VPN features, pricing, and management tools.",
};

export default function VpnForBusinessesPage() {
  const providers = getAllProviders();

  const businessFeatures = [
    { feature: "Centralized management", nordvpn: "Yes (Teams/Business)", surfshark: "Limited", protonvpn: "Yes (Business)", mullvad: "No" },
    { feature: "Dedicated IP", nordvpn: "$3.69/mo extra", surfshark: "$3.75/mo extra", protonvpn: "Included (Business)", mullvad: "No" },
    { feature: "Team accounts", nordvpn: "Yes", surfshark: "Limited", protonvpn: "Yes", mullvad: "No" },
    { feature: "IP whitelisting", nordvpn: "Via dedicated IP", surfshark: "Via dedicated IP", protonvpn: "Via dedicated IP", mullvad: "No" },
    { feature: "SSO integration", nordvpn: "Enterprise only", surfshark: "No", protonvpn: "Business plan", mullvad: "No" },
    { feature: "Meshnet / site-to-site", nordvpn: "Yes (Meshnet)", surfshark: "No", protonvpn: "No", mullvad: "Via WireGuard" },
  ];

  const faqs = [
    { question: "Do small teams need a business VPN plan?", answer: "It depends on your needs. If you just need each team member to have a VPN for security, individual subscriptions work fine. If you need centralized management, dedicated IPs for IP whitelisting, or team billing, a business plan is worth it." },
    { question: "What's the difference between a business VPN and a consumer VPN?", answer: "Business VPN plans typically add: centralized user management (add/remove team members), dedicated static IPs, team billing, priority support, and sometimes SSO integration. The core VPN technology is the same." },
    { question: "Can we use NordVPN Meshnet instead of a corporate VPN?", answer: "For small teams, NordVPN's Meshnet can replace a traditional site-to-site VPN. It creates encrypted peer-to-peer connections between team devices, enabling LAN-like file sharing and resource access. It's free and doesn't require infrastructure." },
    { question: "How many licenses do we need?", answer: "One license per person, not per device. NordVPN allows 10 devices per license, Surfshark allows unlimited, and Proton VPN allows 10. Most team members need just 2-3 devices (laptop, phone, maybe tablet)." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "VPN for Businesses" }]} />

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          VPN for Small Teams & Businesses (2026)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          Your remote team needs secure connections. Here&apos;s how to choose
          the right VPN solution — from individual subscriptions for tiny teams
          to managed business plans for growing companies.
        </p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-07" />
      </header>

      {/* When you need what */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Choose Your Approach</h2>
        <div className="space-y-4">
          <div className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">1-5 people: Individual Subscriptions</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Buy individual VPN subscriptions. Surfshark&apos;s unlimited devices plan is ideal — one subscription per person covers all their devices. Total cost: $2-5/person/month.</p>
          </div>
          <div className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">5-25 people: NordVPN Teams or Proton VPN Business</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Centralized management lets you add/remove team members, enforce security policies, and handle billing centrally. Dedicated IPs available for IP-whitelisted services.</p>
          </div>
          <div className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">25+ people: Enterprise VPN or Zero Trust</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Consider enterprise VPN solutions (NordLayer, Perimeter 81) or Zero Trust alternatives (Cloudflare Access, Zscaler, Tailscale) that offer SSO, device management, and granular access controls.</p>
          </div>
        </div>
      </section>

      {/* Feature comparison */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Business Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Feature</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">NordVPN</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Surfshark</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Proton VPN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {businessFeatures.map((row) => (
                <tr key={row.feature}>
                  <td className="px-3 py-2 font-medium text-zinc-900 dark:text-zinc-100">{row.feature}</td>
                  <td className="px-3 py-2 text-center text-zinc-700 dark:text-zinc-300">{row.nordvpn}</td>
                  <td className="px-3 py-2 text-center text-zinc-700 dark:text-zinc-300">{row.surfshark}</td>
                  <td className="px-3 py-2 text-center text-zinc-700 dark:text-zinc-300">{row.protonvpn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Meshnet spotlight */}
      <section className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">NordVPN Meshnet: Free Team Networking</h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
          Meshnet creates encrypted peer-to-peer connections between team members&apos; devices.
          It&apos;s like a virtual office LAN — team members can share files, access shared printers,
          and connect to local network resources as if they were in the same room.
        </p>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Best part: Meshnet is <strong>free</strong> for all NordVPN users, even on the basic plan.
          Up to 60 devices can be linked.
        </p>
      </section>

      <FAQ items={faqs} />

      <InternalLinks links={[
        { label: "Enterprise vs Consumer VPN", href: "/guides/enterprise-vpn-vs-consumer", description: "Understand the differences" },
        { label: "Zero Trust Guide", href: "/guides/zero-trust-remote-work", description: "The future of corporate security" },
        { label: "Best VPN 2026", href: "/best/vpn", description: "Our top consumer picks" },
        { label: "VPN for Remote Work", href: "/vpn/intent/remote-work", description: "Best VPNs for remote workers" },
      ]} />
    </article>
  );
}
