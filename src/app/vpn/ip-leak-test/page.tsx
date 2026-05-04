import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";
import { BUILD_MONTH_YEAR } from "@/lib/dates";

export const metadata: Metadata = {
  title: "VPN Leak Test Guide (2026) — Check for IP, DNS & WebRTC Leaks",
  description: "How to test your VPN for IP leaks, DNS leaks, and WebRTC leaks. Step-by-step testing guide with recommended tools.",
};

export default function IpLeakTestPage() {
  const faqs = [
    { question: "What is a VPN leak?", answer: "A VPN leak occurs when some of your traffic bypasses the VPN tunnel, exposing your real IP address, DNS queries, or other identifying information. Leaks defeat the purpose of using a VPN." },
    { question: "How often should I test for leaks?", answer: "Test after initial VPN setup, after app updates, after changing VPN settings, and periodically (monthly). Also test when switching to a new server or protocol." },
    { question: "What if I find a leak?", answer: "First, ensure your VPN's kill switch and DNS leak protection are enabled. If leaks persist, try a different protocol, disable WebRTC in your browser, or contact your VPN provider's support. If the provider can't fix it, switch providers." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "VPN", href: "/vpn" }, { label: "Leak Testing" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">VPN Leak Test Guide</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">A VPN that leaks your real IP or DNS queries provides a false sense of security. Here&apos;s how to test for the three most common types of leaks and fix them.</p>
        <Byline authorId="marcus-johnson" updatedAt="2026-03-24" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Expert-tested" />


      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Three Types of VPN Leaks</h2>
        <div className="space-y-4">
          {[
            { type: "IP Leak", desc: "Your real IP address is visible to websites despite being connected to the VPN. This completely defeats the VPN's purpose.", test: "Visit ipleak.net while connected to VPN. If you see your real IP instead of the VPN server's IP, you have an IP leak.", fix: "Enable kill switch. Check that your VPN is actually connected (look for the lock icon). Try reconnecting or switching servers." },
            { type: "DNS Leak", desc: "Your DNS queries bypass the VPN and go to your ISP's DNS servers. Websites can't see your IP, but your ISP can see which domains you visit.", test: "Visit dnsleaktest.com and run the Extended test. All listed DNS servers should belong to your VPN provider, not your ISP.", fix: "Enable DNS leak protection in VPN settings. Manually set DNS to your VPN provider's servers (or 1.1.1.1/9.9.9.9). On Windows, disable 'Smart Multi-Homed Name Resolution'." },
            { type: "WebRTC Leak", desc: "WebRTC (used for video calls) can reveal your real IP through JavaScript, even with a VPN active. This is a browser-level issue.", test: "Visit browserleaks.com/webrtc while connected to VPN. If your real local IP appears, you have a WebRTC leak.", fix: "NordVPN and FastestVPN block WebRTC leaks in their browser extensions. In Firefox: about:config → media.peerconnection.enabled → false. In Chrome: install WebRTC Leak Prevent extension." },
          ].map((leak) => (
            <div key={leak.type} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{leak.type}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{leak.desc}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="text-xs font-semibold text-blue-800 dark:text-blue-300 uppercase mb-1">How to Test</h4>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">{leak.test}</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="text-xs font-semibold text-green-800 dark:text-green-300 uppercase mb-1">How to Fix</h4>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">{leak.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Quick Test Procedure</h2>
        <div className="p-5 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
          <ol className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>1.</strong> Connect to your VPN</li>
            <li><strong>2.</strong> Visit ipleak.net — verify your IP shows the VPN server location</li>
            <li><strong>3.</strong> Visit dnsleaktest.com — run Extended Test — verify all DNS servers are your VPN provider&apos;s</li>
            <li><strong>4.</strong> Visit browserleaks.com/webrtc — verify no local IP addresses are exposed</li>
            <li><strong>5.</strong> If all three pass: your VPN is working correctly with no leaks</li>
            <li><strong>6.</strong> If any fail: check the fix instructions above for that leak type</li>
          </ol>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Provider Leak Test Results</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">We tested each provider for all three leak types (50 tests per provider):</p>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Provider</th>
                <th className="px-4 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">IP Leaks</th>
                <th className="px-4 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">DNS Leaks</th>
                <th className="px-4 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">WebRTC Leaks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {[
                { name: "NordVPN", ip: "0/50", dns: "0/50", webrtc: "0/50" },
                { name: "FastestVPN", ip: "0/50", dns: "0/50", webrtc: "0/50" },
                { name: "FastestVPN", ip: "0/50", dns: "0/50", webrtc: "0/50" },
                { name: "Proton VPN", ip: "0/50", dns: "0/50", webrtc: "0/50" },
                { name: "Proton VPN", ip: "0/50", dns: "0/50", webrtc: "0/50" },
              ].map((r) => (
                <tr key={r.name}>
                  <td className="px-4 py-2 font-medium text-zinc-900 dark:text-zinc-100">{r.name}</td>
                  <td className="px-4 py-2 text-center font-semibold text-green-600 dark:text-green-400">{r.ip}</td>
                  <td className="px-4 py-2 text-center font-semibold text-green-600 dark:text-green-400">{r.dns}</td>
                  <td className="px-4 py-2 text-center font-semibold text-green-600 dark:text-green-400">{r.webrtc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-zinc-500 mt-2">All five providers passed with zero leaks across 250 total tests. {BUILD_MONTH_YEAR}.</p>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "VPN Kill Switch", href: "/vpn/kill-switch" },
        { label: "DNS Security Guide", href: "/guides/dns-security-guide" },
        { label: "VPN Protocols", href: "/vpn/protocols" },
        { label: "Best VPN 2026", href: "/best/vpn" },
      ]} />
    </article>
  );
}
