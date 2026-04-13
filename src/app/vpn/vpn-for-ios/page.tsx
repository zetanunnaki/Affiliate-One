import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Best VPN for iPhone & iOS (2026) — Setup, Features & Top Picks",
  description: "The definitive iOS VPN guide. On Demand rules, protocol comparison, iCloud Private Relay vs VPN, and which apps work best on iPhone.",
};

export default function VpnForIosPage() {
  const faqs = [
    { question: "Is iCloud Private Relay the same as a VPN?", answer: "No. Private Relay only covers Safari browser traffic. It doesn't protect non-Safari apps, doesn't let you choose server locations, and doesn't work in all countries. A real VPN protects ALL device traffic and lets you choose your virtual location." },
    { question: "Can I use split tunneling on iPhone?", answer: "No. Apple's iOS platform restrictions prevent VPN apps from implementing split tunneling. All traffic either goes through the VPN or none does. This is an iOS limitation, not a VPN provider limitation." },
    { question: "Which VPN protocol is best on iPhone?", answer: "IKEv2 for best network switching (Wi-Fi to cellular transitions). WireGuard for best speed and battery life. Most apps auto-select the optimal protocol." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "VPN", href: "/vpn" }, { label: "VPN for iOS" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Best VPN for iPhone & iOS (2026)</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">iOS VPN apps are polished but face Apple platform restrictions. Here&apos;s what works, what doesn&apos;t, and which providers offer the best iPhone experience.</p>
        <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
      </header>

      {/* Top picks */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Top 3 iOS VPNs</h2>
        <div className="space-y-3">
          {[
            { name: "FastestVPN", badge: "Best Value iOS", desc: "Affordable iOS VPN with WireGuard support. Clean native iOS design. Great value for iPhone and iPad users." },
            { name: "NordVPN", badge: "Best Features", desc: "NordLynx for top speeds. Threat Protection on iOS. Meshnet. Dark Web Monitor. The most feature-rich iOS VPN." },
            { name: "FastestVPN", badge: "Best Value", desc: "Unlimited devices — iPhone, iPad, Mac all on one subscription. CleanWeb blocks Safari trackers. Most affordable." },
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

      {/* iOS limitations */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">iOS VPN Limitations (Apple Restrictions)</h2>
        <div className="space-y-2">
          {[
            { limit: "No split tunneling", desc: "Apple doesn't allow per-app VPN routing. All traffic goes through VPN or none." },
            { limit: "No system-level always-on", desc: "iOS uses 'Connect on Demand' rules instead. Works well but requires VPN app to configure." },
            { limit: "No sideloading", desc: "VPN apps must come from the App Store. Can't install APKs like Android." },
            { limit: "Background restrictions", desc: "iOS may disconnect VPN when app is backgrounded for a long time. On Demand rules help but aren't perfect." },
          ].map((l) => (
            <div key={l.limit} className="p-3 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">{l.limit}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Setup */}
      <section className="mb-10 p-5 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">iPhone Setup (2 Minutes)</h2>
        <ol className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          <li><strong>1.</strong> Download VPN from App Store</li>
          <li><strong>2.</strong> Open app, log in</li>
          <li><strong>3.</strong> Tap Connect — approve the VPN configuration prompt</li>
          <li><strong>4.</strong> In app settings: enable &quot;Connect on Demand&quot;</li>
          <li><strong>5.</strong> Optional: add VPN widget to home screen for quick status check</li>
        </ol>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "iOS VPN Guide", href: "/guides/vpn-for-ios", description: "Detailed iOS setup" },
        { label: "Apple Ecosystem VPN", href: "/money/best-vpn-apple", description: "iPhone + iPad + Mac + Apple TV" },
        { label: "Mobile Security", href: "/security/mobile", description: "Complete mobile security" },
        { label: "Best VPN 2026", href: "/best/vpn", description: "Overall top picks" },
      ]} />
    </article>
  );
}
