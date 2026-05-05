import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Double VPN (Multi-Hop) Explained (2026) — Is It Worth the Speed Trade-Off?",
  description: "Double VPN routes traffic through two servers for extra encryption. When it's useful, when it's overkill, and which providers support it.",
};

export default function DoubleVpnPage() {
  const faqs = [
    { question: "What is Double VPN?", answer: "Double VPN (also called Multi-Hop) routes your traffic through two VPN servers instead of one. Your data is encrypted twice — once for each hop. This means even if one server is compromised, the attacker only sees encrypted traffic heading to another server, not your real activity." },
    { question: "Does Double VPN make me twice as secure?", answer: "Not exactly 'twice as secure,' but it adds meaningful protection. The main benefit is that no single server sees both your real IP and your destination. Server 1 sees your IP but not where you're going. Server 2 sees where you're going but not your real IP." },
    { question: "How much does Double VPN slow down my connection?", answer: "Expect 30-50% speed reduction compared to single-hop VPN. The extra hop adds latency and the double encryption requires more processing. For browsing and messaging, it's fine. For video calls and large file transfers, single-hop is better." },
    { question: "Who actually needs Double VPN?", answer: "Journalists in hostile countries, activists under surveillance, whistleblowers, and anyone whose threat model includes a compromised VPN server. For typical remote workers, single-hop VPN with a no-logs provider is sufficient." },
  ];

  const providers = [
    { name: "NordVPN", feature: "Double VPN", servers: "15+ Double VPN locations", speed: "30-40% slower", notes: "Dedicated Double VPN servers with pre-configured routes" },
    { name: "FastestVPN", feature: "MultiHop", servers: "Custom 2-server routes", speed: "35-45% slower", notes: "Dynamic MultiHop — choose any two server locations" },
    { name: "Proton VPN", feature: "Secure Core", servers: "Switzerland, Iceland, Sweden entry points", speed: "30-50% slower", notes: "Routes through privacy-friendly countries first, then to exit server" },
    { name: "Proton VPN", feature: "Multihop (WireGuard)", servers: "Any two servers", speed: "25-40% slower", notes: "Manual WireGuard multihop configuration available" },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "VPN", href: "/vpn" }, { label: "Double VPN" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Double VPN (Multi-Hop) Explained
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          Double VPN adds an extra layer of encryption by routing your traffic
          through two servers. Here&apos;s when it&apos;s worth the speed trade-off
          and when single-hop is better.
        </p>
        <Byline authorId="marcus-johnson" updatedAt="2026-01-13" />
      </header>
      {/* Our Top 5 Picks */}
      <TopVpnPicks heading="Our Top 5 VPN Picks" eyebrow="Expert-tested" />


      {/* How it works */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">How Double VPN Works</h2>
        <div className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-center font-medium">Your Device</div>
            <span className="text-zinc-400 text-lg">&rarr;</span>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-center">
              <strong>Server 1</strong><br /><span className="text-xs">Encrypts + forwards</span>
            </div>
            <span className="text-zinc-400 text-lg">&rarr;</span>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-center">
              <strong>Server 2</strong><br /><span className="text-xs">Decrypts + exits</span>
            </div>
            <span className="text-zinc-400 text-lg">&rarr;</span>
            <div className="p-3 bg-zinc-200 dark:bg-zinc-700 rounded-lg text-center font-medium">Internet</div>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4">
            Server 1 sees your real IP but only encrypted traffic heading to Server 2.
            Server 2 sees your destination but thinks Server 1 is the source — not you.
          </p>
        </div>
      </section>

      {/* When to use */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">When to Use Double VPN</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">Good Use Cases</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>+ Journalism in hostile countries</li>
              <li>+ Activist communications under surveillance</li>
              <li>+ Whistleblowing / sensitive disclosures</li>
              <li>+ When you don&apos;t trust a single VPN server</li>
              <li>+ Maximum anonymity requirements</li>
            </ul>
          </div>
          <div className="p-4 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Overkill For</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>- Regular remote work browsing</li>
              <li>- Video calls (speed penalty hurts quality)</li>
              <li>- Streaming or gaming</li>
              <li>- General ISP privacy (single-hop is enough)</li>
              <li>- Public Wi-Fi protection (single-hop is enough)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Provider support */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Provider Support</h2>
        <div className="space-y-3">
          {providers.map((p) => (
            <div key={p.name} className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{p.name}: {p.feature}</h3>
                <span className="text-xs text-zinc-500">{p.speed}</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.servers}</p>
              <p className="text-xs text-zinc-500 mt-1">{p.notes}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-zinc-500 mt-3">Note: FastestVPN does not offer Double VPN / Multi-Hop.</p>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "VPN Kill Switch", href: "/vpn/kill-switch" },
        { label: "VPN No-Logs", href: "/vpn/no-logs" },
        { label: "VPN Obfuscation", href: "/vpn/obfuscation" },
        { label: "Best VPN for Privacy", href: "/money/best-vpn-privacy" },
      ]} />
    </article>
  );
}
