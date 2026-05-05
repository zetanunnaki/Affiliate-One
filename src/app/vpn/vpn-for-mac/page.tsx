import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Best VPN for Mac (2026) — Native Apple Silicon Apps & Top Picks",
  description: "VPNs tested on macOS Sequoia with Apple Silicon. Native M-series support, split tunneling, iCloud compatibility, and which providers work best.",
  alternates: { canonical: "/vpn/vpn-for-mac/" },
  openGraph: {
    title: "Best VPN for Mac (2026)",
    description: "VPNs tested on macOS Sequoia with Apple Silicon. Native M-series support, split tunneling, iCloud compatibility, and which providers work best.",
    type: "article",
    url: "/vpn/vpn-for-mac/",
    images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: "Best VPN for Mac" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
};

export default function VpnForMacPage() {
  const faqs = [
    { question: "Are all VPNs optimized for Apple Silicon?", answer: "Yes — all major providers (NordVPN, Proton VPN, FastestVPN) now offer native Apple Silicon (M1/M2/M3/M4) apps. This means better performance and lower battery drain compared to Rosetta-translated Intel apps." },
    { question: "Does macOS have a built-in VPN?", answer: "macOS supports IKEv2 VPN natively in System Settings > VPN. But it lacks WireGuard support, kill switch, split tunneling, and auto-connect. A dedicated VPN app is strongly recommended." },
    { question: "Is iCloud Private Relay a VPN?", answer: "No. Private Relay only covers Safari traffic, doesn't let you choose locations, and isn't available in all countries. A real VPN protects ALL traffic from ALL apps and lets you choose your virtual location." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "VPN", href: "/vpn" }, { label: "VPN for Mac" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Best VPN for Mac (2026)</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">Native Apple Silicon apps, macOS Sequoia tested, and FileVault + VPN for complete protection. Here are our top picks for Mac users.</p>
        <Byline authorId="marcus-johnson" updatedAt="2026-02-02" />
      </header>
      {/* Our Top 5 Picks */}
      <TopVpnPicks heading="Our Top 5 VPN Picks" eyebrow="Expert-tested" />


      {/* Top picks */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Top 5 Mac VPNs</h2>
        <div className="space-y-3">
          {[
            { name: "NordVPN", badge: "Best Overall", desc: "Best macOS app with NordLynx. Split tunneling now available on Mac. Threat Protection. Meshnet. Native Apple Silicon. Menu bar integration." },
            { name: "Surfshark", badge: "Unlimited Devices", desc: "Unlimited devices — MacBook + iMac + iPhone + iPad on one subscription. CleanWeb. Split tunneling on Mac. Apple Silicon native." },
            { name: "Proton VPN", badge: "Best for Privacy", desc: "Open-source macOS app. Swiss jurisdiction. Secure Core routing. WireGuard + OpenVPN. VPN Accelerator for long-distance servers." },
            { name: "FastestVPN", badge: "Best Budget", desc: "Clean macOS-native design. WireGuard protocol. Automatic best-server. Lifetime deals available." },
          ].map((p, i) => (
            <div key={p.name} className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg flex items-start gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{i + 1}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100">{p.name}</h3>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">{p.badge}</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mac-specific features */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">macOS-Specific Features</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { feature: "Apple Silicon Native", desc: "All major VPNs now run natively on M-series chips. Better performance, lower battery drain than Rosetta translation." },
            { feature: "Network Extension Framework", desc: "macOS VPNs use Apple's Network Extension for system-level kill switch. More reliable than third-party methods." },
            { feature: "Split Tunneling", desc: "Now available on NordVPN and FastestVPN for macOS. Was previously missing. Route specific apps through VPN." },
            { feature: "Menu Bar Integration", desc: "Quick connect/disconnect from the macOS menu bar without opening the full app. Status at a glance." },
            { feature: "FileVault + VPN", desc: "Enable FileVault disk encryption alongside VPN for complete data protection. Both are essential for Mac security." },
            { feature: "Siri Shortcuts", desc: "Some VPN apps support Siri: 'Hey Siri, connect my VPN.' Useful for hands-free activation." },
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
        { label: "Mac VPN Guide", href: "/guides/vpn-for-mac", description: "Detailed Mac setup" },
        { label: "Apple Ecosystem VPN", href: "/money/best-vpn-apple", description: "iPhone + iPad + Mac + Apple TV" },
        { label: "VPN Protocols", href: "/vpn/protocols", description: "Protocol comparison" },
        { label: "Best VPN 2026", href: "/best/vpn", description: "Overall top picks" },
      ]} />
    </article>
  );
}
