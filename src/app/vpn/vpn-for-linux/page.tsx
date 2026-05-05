import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Best VPN for Linux (2026) — Ubuntu, Fedora, Arch & More",
  description: "Linux VPN guide with native apps, CLI tools, and WireGuard setup. Which providers have the best Linux support in 2026.",
};

export default function VpnForLinuxPage() {
  const faqs = [
    { question: "Which VPN has the best Linux support?", answer: "Proton VPN — full open-source GUI app, CLI, Secure Core, and kill switch on Linux. Proton VPN is a close second with a polished native GUI. NordVPN's CLI is powerful but lacks a GUI." },
    { question: "Can I use WireGuard directly on Linux?", answer: "Yes — WireGuard is built into the Linux kernel since 5.6. Download config files from your VPN provider and use wg-quick to connect. This is the fastest and most lightweight option." },
    { question: "Does Linux need a VPN?", answer: "Yes. Linux is more secure than Windows against malware, but your network traffic is equally visible to ISPs and attackers on shared networks. A VPN encrypts your traffic regardless of OS." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "VPN", href: "/vpn" }, { label: "VPN for Linux" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Best VPN for Linux (2026)</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">Linux has the best VPN support of any OS — WireGuard in the kernel, native apps from top providers, and full CLI control. Here are our picks.</p>
        <Byline authorId="marcus-johnson" updatedAt="2026-04-15" />
      </header>
      {/* Our Top 5 Picks */}
      <TopVpnPicks heading="Our Top 5 VPN Picks" eyebrow="Expert-tested" />


      {/* Top picks */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Our Linux VPN Rankings</h2>
        <div className="space-y-3">
          {[
            { rank: "1", name: "Proton VPN", badge: "Best Linux Experience", desc: "Full open-source GUI app (GTK). CLI also available. Secure Core, kill switch, split tunneling. The most polished Linux VPN experience. Supports Ubuntu, Fedora, Arch, Debian, and more." },
            { rank: "2", name: "Proton VPN", badge: "Best Privacy on Linux", desc: "Beautiful native GUI. WireGuard-first. No account needed. Open-source. Supports Debian, Ubuntu, Fedora. The privacy purist's choice." },
            { rank: "3", name: "NordVPN", badge: "Best CLI", desc: "Powerful CLI with NordLynx (WireGuard). Kill switch, auto-connect, Meshnet from command line. No GUI but the most feature-rich CLI. Supports Ubuntu, Debian, Fedora, RHEL, Arch (AUR)." },
          ].map((p) => (
            <div key={p.name} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">{p.rank}</span>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{p.name}</h3>
                </div>
                <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">{p.badge}</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methods */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Installation Methods</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Method</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">GUI</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Difficulty</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {[
                { method: "Provider GUI App", gui: "Yes", diff: "Easy", best: "Desktop Linux users (Proton VPN)" },
                { method: "Provider CLI", gui: "No", diff: "Easy", best: "Server/headless (NordVPN, Proton VPN)" },
                { method: "WireGuard (wg-quick)", gui: "No", diff: "Medium", best: "Maximum performance, any provider" },
                { method: "OpenVPN", gui: "Optional", diff: "Medium", best: "Maximum compatibility" },
                { method: "NetworkManager", gui: "Yes", diff: "Easy", best: "GNOME/KDE users importing configs" },
              ].map((m) => (
                <tr key={m.method}>
                  <td className="px-3 py-2 font-medium text-zinc-900 dark:text-zinc-100">{m.method}</td>
                  <td className="px-3 py-2 text-center">{m.gui === "Yes" ? <span className="text-green-600 font-bold">Yes</span> : m.gui === "Optional" ? <span className="text-yellow-600">Optional</span> : <span className="text-zinc-500">No</span>}</td>
                  <td className="px-3 py-2 text-center text-zinc-700 dark:text-zinc-300">{m.diff}</td>
                  <td className="px-3 py-2 text-zinc-600 dark:text-zinc-400">{m.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Linux VPN Guide", href: "/guides/vpn-for-linux", description: "Detailed setup instructions" },
        { label: "WireGuard Deep Dive", href: "/vpn/wireguard", description: "WireGuard protocol explained" },
        { label: "VPN Protocols", href: "/vpn/protocols", description: "Protocol comparison" },
        { label: "Best VPN 2026", href: "/best/vpn", description: "Overall top picks" },
      ]} />
    </article>
  );
}
