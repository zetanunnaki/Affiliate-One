import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Always-On VPN Setup Guide (2026) — Never Forget to Connect",
  description: "How to configure your VPN to connect automatically and stay connected. Auto-connect, kill switch, and always-on settings for every platform.",
};

export default function AlwaysOnPage() {
  const faqs = [
    { question: "Will an always-on VPN slow down my device?", answer: "With WireGuard protocol, the overhead is minimal — 5-10% speed reduction and 3-5% extra battery on mobile. Most users won't notice. The security benefit far outweighs the tiny performance cost." },
    { question: "What if the VPN blocks a local service?", answer: "Use split tunneling to exclude specific apps or local network resources from the VPN tunnel. This lets you access printers, smart home devices, and local services while keeping everything else encrypted." },
    { question: "Should I keep VPN on at home?", answer: "Yes. Your ISP monitors and logs your browsing even at home. An always-on VPN prevents ISP surveillance, protects against router compromises, and ensures you're protected when switching between home Wi-Fi and mobile data." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "VPN", href: "/vpn" }, { label: "Always-On VPN" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Always-On VPN Setup Guide</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">The best VPN is one you never forget to turn on. Here&apos;s how to configure automatic, always-on VPN protection on every device.</p>
        <Byline authorId="marcus-johnson" updatedAt="2026-02-18" />
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Platform-by-Platform Setup</h2>
        <div className="space-y-4">
          {[
            { platform: "Windows", steps: ["Open your VPN app settings", "Enable 'Launch at startup'", "Enable 'Auto-connect when app starts'", "Enable kill switch", "Set protocol to WireGuard/NordLynx for minimal overhead"] },
            { platform: "macOS", steps: ["Open your VPN app settings", "Enable 'Launch at login'", "Enable 'Auto-connect'", "Enable kill switch", "Grant VPN the necessary macOS permissions (System Settings > Privacy)"] },
            { platform: "Android", steps: ["Open your VPN app and enable auto-connect", "Go to Settings > Network > VPN > your VPN > gear icon", "Enable 'Always-on VPN'", "Enable 'Block connections without VPN' (OS-level kill switch)", "This creates a system-level always-on VPN that survives app restarts"] },
            { platform: "iOS", steps: ["Open your VPN app settings", "Enable 'Connect on Demand'", "Enable 'Auto-connect for Wi-Fi networks'", "Note: iOS doesn't have a system-level always-on VPN like Android", "The VPN app manages reconnection — choose a provider with reliable iOS app"] },
            { platform: "Router", steps: ["Install VPN on your router (see our router VPN guide)", "All devices on the network are always protected", "No per-device configuration needed", "Perfect for smart TVs, IoT devices, and guests", "Consider GL.iNet travel router for portable always-on VPN"] },
          ].map((p) => (
            <div key={p.platform} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">{p.platform}</h3>
              <ol className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                {p.steps.map((s, i) => <li key={i}>{i + 1}. {s}</li>)}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">The Three Essential Settings</h2>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div><strong className="block text-zinc-900 dark:text-zinc-100 mb-1">1. Auto-Connect</strong><span className="text-zinc-600 dark:text-zinc-400">VPN connects automatically when your device starts or joins a network</span></div>
          <div><strong className="block text-zinc-900 dark:text-zinc-100 mb-1">2. Kill Switch</strong><span className="text-zinc-600 dark:text-zinc-400">Blocks all traffic if VPN drops — prevents accidental exposure</span></div>
          <div><strong className="block text-zinc-900 dark:text-zinc-100 mb-1">3. Auto-Reconnect</strong><span className="text-zinc-600 dark:text-zinc-400">VPN automatically reconnects after drops — no manual intervention</span></div>
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "VPN Kill Switch", href: "/vpn/kill-switch" },
        { label: "VPN Split Tunneling", href: "/vpn/split-tunneling" },
        { label: "Best VPN Router", href: "/best/vpn-router" },
        { label: "VPN Setup Guide", href: "/guides/vpn-setup-beginners" },
      ]} />
    </article>
  );
}
