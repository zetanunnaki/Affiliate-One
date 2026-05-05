import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Best VPN for Windows 11 (2026) — Download, Setup & Top Picks",
  description: "The definitive Windows VPN guide. Download links, setup walkthrough, Windows-specific features, and which providers have the best Windows apps.",
  alternates: { canonical: "/vpn/vpn-for-windows/" },
  openGraph: {
    title: "Best VPN for Windows 11 (2026)",
    description: "The definitive Windows VPN guide. Download links, setup walkthrough, Windows-specific features, and which providers have the best Windows apps.",
    type: "article",
    url: "/vpn/vpn-for-windows/",
    images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: "Best VPN for Windows 11" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
};

export default function VpnForWindowsPage() {
  const faqs = [
    { question: "Does Windows 11 have a built-in VPN?", answer: "Windows 11 has built-in VPN client support for IKEv2, L2TP, PPTP, and SSTP protocols. However, it lacks WireGuard support, kill switch, split tunneling, and auto-connect. A dedicated VPN app from NordVPN, FastestVPN, or FastestVPN provides far better features and protection." },
    { question: "Does a VPN conflict with Windows Defender?", answer: "No. All major VPN providers work perfectly alongside Windows Defender. No conflicts, no false positives, no need to add exceptions. They complement each other — Defender protects against malware, VPN encrypts your traffic." },
    { question: "Will a VPN slow down my Windows PC?", answer: "With WireGuard/NordLynx protocol: barely noticeable (5-10% speed reduction). CPU impact is minimal on any modern PC. The VPN app uses about 50-100MB RAM. For 99% of tasks, you won't notice it's running." },
    { question: "Should I use a VPN on Windows at home?", answer: "Yes. Your ISP can see and log every website you visit. A VPN prevents this. It also protects against router-level attacks, adds encryption to all traffic, and ensures consistent security whether you're at home or on public Wi-Fi." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "VPN", href: "/vpn" }, { label: "VPN for Windows" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Best VPN for Windows 11 (2026)</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">Windows is the #1 platform for VPN usage — and the #1 target for cyberattacks. Here&apos;s how to set up a VPN on Windows 11 and which providers offer the best experience.</p>
        <Byline authorId="marcus-johnson" updatedAt="2026-02-24" />
      </header>
      {/* Our Top 5 Picks */}
      <TopVpnPicks heading="Our Top 5 VPN Picks" eyebrow="Expert-tested" />


      {/* Top 5 picks */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Our Top 5 Windows VPN Picks</h2>
        <div className="space-y-3">
          {[
            { rank: "1", name: "NordVPN", badge: "Best Overall", price: "$3.39/mo", desc: "Most feature-rich Windows app. NordLynx (WireGuard) for top speeds. System-level kill switch via WFP. Split tunneling per app. Threat Protection blocks malware. Meshnet for virtual LAN. Microsoft Store available." },
            { rank: "2", name: "Surfshark", badge: "Unlimited Devices", price: "$1.99/mo", desc: "Unlimited simultaneous connections — cover every Windows PC in the house. CleanWeb blocks ads and malware at DNS level. Bypasser split tunneling. RAM-only servers. Microsoft Store available." },
            { rank: "3", name: "Proton VPN", badge: "Best for Privacy", price: "$4.99/mo", desc: "Open-source Windows client, audited no-logs, Swiss jurisdiction. Secure Core multi-hop routing. Kill switch enforced at the adapter level. Full WireGuard and OpenVPN support." },
            { rank: "4", name: "FastestVPN", badge: "Best Budget", price: "$1.11/mo", desc: "Clean Windows UI. WireGuard protocol for fast connections. Automatic best-server selection. Exceptional value with lifetime plans available." },
          ].map((p) => (
            <div key={p.name} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">{p.rank}</span>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{p.name}</h3>
                    <span className="text-sm text-zinc-500">{p.price}</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">{p.badge}</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Setup guide */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Windows Setup (3 Minutes)</h2>
        <div className="p-5 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
          <ol className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>1.</strong> Download your VPN from the provider&apos;s website or Microsoft Store</li>
            <li><strong>2.</strong> Install and launch the app</li>
            <li><strong>3.</strong> Log in with your credentials</li>
            <li><strong>4.</strong> Go to Settings and enable: Kill Switch ON, Auto-Connect ON, Launch at Startup ON</li>
            <li><strong>5.</strong> Set protocol to WireGuard/NordLynx/Lightway (fastest)</li>
            <li><strong>6.</strong> Click Connect — you&apos;re protected</li>
          </ol>
        </div>
      </section>

      {/* Windows-specific features */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Windows-Specific Features</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { feature: "System-Level Kill Switch", desc: "Uses Windows Filtering Platform (WFP) to block ALL traffic if VPN drops. More reliable than app-level kill switches." },
            { feature: "Split Tunneling", desc: "Route specific apps through VPN while others connect directly. Available on NordVPN, Proton VPN, FastestVPN." },
            { feature: "Startup Launch", desc: "VPN starts automatically with Windows. Combined with auto-connect, you're protected from boot." },
            { feature: "Microsoft Store", desc: "NordVPN and some others available from Microsoft Store for easy install and updates." },
            { feature: "BitLocker + VPN", desc: "Enable BitLocker for disk encryption alongside VPN for complete data protection." },
            { feature: "Controlled Folder Access", desc: "Windows Security feature that protects important folders from ransomware. Works alongside VPN." },
          ].map((f) => (
            <div key={f.feature} className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">{f.feature}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Best VPN for Windows", href: "/money/best-vpn-windows", description: "Detailed Windows VPN comparison" },
        { label: "VPN Setup Guide", href: "/guides/vpn-setup-beginners", description: "Complete beginner setup" },
        { label: "VPN for Windows Guide", href: "/guides/vpn-for-windows", description: "In-depth Windows guide" },
        { label: "Best VPN 2026", href: "/best/vpn", description: "Overall top picks" },
      ]} />
    </article>
  );
}
