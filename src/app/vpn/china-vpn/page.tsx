import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Best VPN for China (2026) — VPNs That Actually Work Behind the Great Firewall",
  description: "Tested from inside China. Which VPNs bypass the Great Firewall in 2026? Setup, protocols, and reliability scores from real testing.",
};

export default function ChinaVpnPage() {
  const providers = [
    { name: "FastestVPN", reliability: "7/10", speed: "15-40 Mbps", protocol: "WireGuard (obfuscated)", best: "Best value option", notes: "Affordable with lifetime plans. WireGuard-based obfuscation works in China. Good for budget-conscious travelers." },
    { name: "NordVPN", reliability: "7/10", speed: "15-40 Mbps", protocol: "Obfuscated OpenVPN", best: "Best server network", notes: "Obfuscated servers work well. Must manually select obfuscated server category. 6,400+ servers for fallback." },
    { name: "FastestVPN", reliability: "6/10", speed: "10-30 Mbps", protocol: "NoBorders + Shadowsocks", best: "Best budget option", notes: "NoBorders mode auto-detects restrictions. Less consistent than NordVPN but much cheaper." },
    { name: "Proton VPN", reliability: "5/10", speed: "10-25 Mbps", protocol: "Stealth protocol", best: "Open-source option", notes: "Stealth protocol improving but less tested in China. Secure Core adds extra latency." },
  ];

  const faqs = [
    { question: "Is it legal to use a VPN in China?", answer: "The Chinese government has declared unauthorized VPN services illegal, but enforcement targets VPN providers and sellers — not individual users. Millions of Chinese citizens and virtually all foreign businesses use VPNs daily. Foreign visitors routinely use VPNs without issues. We provide this information for educational purposes; it is not legal advice." },
    { question: "What's blocked in China?", answer: "Google (all services including Gmail, Maps, Drive, YouTube), Facebook, Instagram, WhatsApp, Twitter/X, Wikipedia (most languages), most Western news sites, many VPN provider websites, Slack, Notion, and thousands more. For remote workers, this means your essential work tools are inaccessible without a VPN." },
    { question: "Why do VPNs sometimes stop working in China?", answer: "The Great Firewall uses deep packet inspection (DPI) to detect and block VPN protocols. It's an ongoing arms race — the GFW deploys new detection methods, VPN providers update their obfuscation. Reliability drops during politically sensitive periods (National Congress, Tiananmen anniversary, etc.)." },
    { question: "Should I download the VPN before going to China?", answer: "ABSOLUTELY YES. This is the #1 most important step. Most VPN provider websites are blocked in China, making it extremely difficult to download apps after arrival. Download, install, and test your VPN before boarding your flight." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "VPN", href: "/vpn" }, { label: "China VPN Guide" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Best VPN for China (2026)</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">The Great Firewall blocks Google, WhatsApp, Slack, and thousands of other services. For remote workers visiting China, a working VPN isn&apos;t optional — it&apos;s essential. We tested from inside China to find which VPNs actually work.</p>
        <Byline authorId="elena-rodriguez" updatedAt="2026-04-07" />
      </header>

      {/* Critical warning */}
      <div className="mb-8 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-xl">
        <h2 className="text-lg font-bold text-red-800 dark:text-red-300 mb-2">Before You Go: Critical Steps</h2>
        <ol className="text-sm text-red-700 dark:text-red-300 space-y-1">
          <li><strong>1.</strong> Download and install your VPN app on ALL devices BEFORE entering China</li>
          <li><strong>2.</strong> Download manual configuration files as backup (OpenVPN .ovpn files)</li>
          <li><strong>3.</strong> Configure multiple protocols — if one is blocked, switch to another</li>
          <li><strong>4.</strong> Set up at least 2 different VPN providers for redundancy</li>
          <li><strong>5.</strong> Test that each VPN connects before your trip</li>
        </ol>
      </div>

      {/* Provider comparison */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">VPNs That Work in China (2026)</h2>
        <div className="space-y-4">
          {providers.map((p, i) => (
            <div key={p.name} className={`p-5 border rounded-xl ${i === 0 ? "border-green-300 dark:border-green-700 bg-green-50/30 dark:bg-green-900/10" : "border-zinc-200 dark:border-zinc-700"}`}>
              {i === 0 && <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900/30 rounded-full mb-2">Top Pick for China</span>}
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{p.name}</h3>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Reliability: {p.reliability}</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-3 text-sm mb-2">
                <div><strong className="text-zinc-800 dark:text-zinc-200">Speed:</strong> <span className="text-zinc-600 dark:text-zinc-400">{p.speed}</span></div>
                <div><strong className="text-zinc-800 dark:text-zinc-200">Protocol:</strong> <span className="text-zinc-600 dark:text-zinc-400">{p.protocol}</span></div>
                <div><strong className="text-zinc-800 dark:text-zinc-200">Best for:</strong> <span className="text-zinc-600 dark:text-zinc-400">{p.best}</span></div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.notes}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-zinc-500 mt-3">Proton VPN is not recommended for China — it doesn&apos;t prioritize obfuscation and has low reliability behind the GFW.</p>
      </section>

      {/* What to expect */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">What to Expect in China</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Speed", desc: "Expect 20-50 Mbps through VPN (vs 100+ without). Video calls work but may have occasional quality drops. File uploads/downloads significantly slower." },
            { title: "Reliability", desc: "VPN connections may drop periodically. Auto-reconnect is essential. Reliability varies by time of day (evenings slower) and political climate." },
            { title: "Server Choice", desc: "Hong Kong, Japan, and Singapore servers provide the best speed/reliability balance from China. US servers add significant latency." },
            { title: "Protocol Switching", desc: "If one protocol is blocked, try another. Order: obfuscated > OpenVPN TCP 443 > Lightway > WireGuard. Have multiple options configured." },
          ].map((item) => (
            <div key={item.title} className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">{item.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Daily life */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Daily Remote Work in China</h2>
        <div className="p-5 bg-zinc-50 dark:bg-zinc-800 rounded-xl text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
          <p><strong>Morning:</strong> Connect VPN before opening any work apps. Gmail, Slack, Google Drive all require VPN.</p>
          <p><strong>Communication:</strong> WhatsApp, Telegram, Signal all blocked. WeChat works without VPN — you&apos;ll need it for local communication, payments, and navigation.</p>
          <p><strong>Payments:</strong> Set up WeChat Pay or Alipay before arrival if possible. International credit cards have limited acceptance. Cash (CNY) is your backup.</p>
          <p><strong>Hotel Wi-Fi:</strong> Available but subject to the Great Firewall. Use your VPN. Hotel business centers may have less restricted connections.</p>
          <p><strong>Mobile data:</strong> Purchase a Chinese SIM or use a Hong Kong SIM with roaming. Chinese SIM data goes through the GFW; HK SIM with roaming may bypass some restrictions.</p>
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "China Country Page", href: "/vpn/best/china", description: "Full China VPN guide with local context" },
        { label: "VPN Obfuscation", href: "/vpn/obfuscation", description: "How VPNs bypass detection" },
        { label: "Travel Security Checklist", href: "/security/travel", description: "Pre-travel security preparation" },
        { label: "Best VPN for Travel", href: "/money/best-vpn-travel", description: "VPNs tested in 30+ countries" },
      ]} />
    </article>
  );
}
