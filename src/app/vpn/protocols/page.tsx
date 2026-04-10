import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/components/ui/Byline";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "VPN Protocols Explained (2026) — WireGuard, OpenVPN, IKEv2 & More",
  description: "Understand VPN protocols: WireGuard, OpenVPN, IKEv2, NordLynx, and Lightway compared. Which should you use?",
};

const protocols = [
  { name: "WireGuard", speed: 5, security: 5, compat: 4, age: "2020", rec: "Most users", color: "border-green-300 dark:border-green-700" },
  { name: "OpenVPN (UDP)", speed: 3, security: 5, compat: 5, age: "2001", rec: "Maximum compatibility", color: "border-blue-300 dark:border-blue-700" },
  { name: "OpenVPN (TCP)", speed: 2, security: 5, compat: 5, age: "2001", rec: "Restrictive networks", color: "border-blue-300 dark:border-blue-700" },
  { name: "IKEv2/IPSec", speed: 4, security: 4, compat: 4, age: "2005", rec: "Mobile devices", color: "border-yellow-300 dark:border-yellow-700" },
  { name: "NordLynx", speed: 5, security: 5, compat: 2, age: "2020", rec: "NordVPN users", color: "border-green-300 dark:border-green-700" },
  { name: "Lightway", speed: 5, security: 5, compat: 2, age: "2021", rec: "Speed enthusiasts", color: "border-green-300 dark:border-green-700" },
  { name: "PPTP", speed: 5, security: 1, compat: 3, age: "1999", rec: "NEVER use", color: "border-red-300 dark:border-red-700" },
];

function Dots({ count, max = 5 }: { count: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={`w-2.5 h-2.5 rounded-full ${i < count ? "bg-blue-600 dark:bg-blue-400" : "bg-zinc-200 dark:bg-zinc-700"}`} />
      ))}
    </div>
  );
}

export default function ProtocolsPage() {
  const faqs = [
    { question: "Which VPN protocol is fastest?", answer: "WireGuard and its derivatives (NordLynx, Lightway) are the fastest VPN protocols available in 2026. They use modern cryptography with minimal overhead, resulting in speeds within 5-15% of your base connection." },
    { question: "Which VPN protocol is most secure?", answer: "WireGuard and OpenVPN both offer excellent security. WireGuard uses modern cryptography (ChaCha20, Poly1305) with a minimal, auditable codebase. OpenVPN uses AES-256 with a 20+ year track record. Both are considered unbreakable with current technology." },
    { question: "What protocol should I use on mobile?", answer: "WireGuard is the best choice for mobile — it's fast, battery-efficient, and handles network switches well. IKEv2 is also good on mobile thanks to its MOBIKE protocol for seamless Wi-Fi to cellular transitions." },
    { question: "Why is PPTP still listed by some VPNs?", answer: "PPTP's encryption was broken in 2012 and it should never be used. Some VPN providers still offer it for legacy device compatibility, but it provides no real security. Always choose WireGuard, OpenVPN, or IKEv2 instead." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          VPN Protocols Explained (2026)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          Your VPN protocol determines your speed, security, and compatibility.
          Here&apos;s everything you need to know to choose the right one.
        </p>
        <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
      </header>

      {/* Protocol cards */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Protocol Comparison
        </h2>
        <div className="space-y-3">
          {protocols.map((p) => (
            <div key={p.name} className={`p-4 border ${p.color} rounded-lg`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{p.name}</h3>
                  <span className="text-xs text-zinc-500">Since {p.age} · Best for: {p.rec}</span>
                </div>
                {p.security === 1 && (
                  <span className="px-2 py-1 text-xs font-bold bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded">AVOID</span>
                )}
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-xs text-zinc-500 block mb-1">Speed</span>
                  <Dots count={p.speed} />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block mb-1">Security</span>
                  <Dots count={p.security} />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block mb-1">Compatibility</span>
                  <Dots count={p.compat} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendation flowchart */}
      <section className="mb-10 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Quick Decision Guide
        </h2>
        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          <p><strong>Default choice:</strong> WireGuard (or your provider&apos;s &quot;Automatic&quot; setting)</p>
          <p><strong>Restrictive network/firewall:</strong> OpenVPN TCP on port 443</p>
          <p><strong>Mobile with frequent Wi-Fi switching:</strong> IKEv2 or WireGuard</p>
          <p><strong>NordVPN user:</strong> NordLynx</p>
          <p><strong>Speed priority:</strong> Lightway or WireGuard</p>
          <p><strong>Maximum privacy:</strong> OpenVPN with custom configuration</p>
        </div>
      </section>

      <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-sm text-blue-800 dark:text-blue-200">
        <strong>Deep dive:</strong>{" "}
        <Link href="/guides/vpn-protocols-explained" className="underline hover:text-blue-700">
          Read our full VPN Protocols Guide
        </Link>{" "}
        for detailed technical analysis of each protocol.
      </div>

      <FAQ items={faqs} />

      <InternalLinks links={[
        { label: "Best VPN 2026", href: "/best/vpn" },
        { label: "VPN Setup Guide", href: "/guides/vpn-setup-beginners" },
        { label: "VPN Speed Optimization", href: "/guides/vpn-speed-optimization" },
        { label: "All VPN Provider Reviews", href: "/vpn/providers" },
      ]} />
    </article>
  );
}
