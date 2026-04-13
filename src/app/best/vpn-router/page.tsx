import type { Metadata } from "next";
import Link from "next/link";
import { getAllProviders } from "@/lib/data";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Best VPN for Routers (2026) — Protect Every Device on Your Network",
  description: "Install a VPN on your router to protect all devices at once — laptops, phones, smart TVs, and IoT. Compatible routers, setup guides, and provider picks.",
};

export default function BestVpnRouterPage() {
  const providers = getAllProviders();

  const routerSupport = [
    { name: "NordVPN", native: "Yes (select ASUS, Netgear)", manual: "DD-WRT, OpenWrt, Tomato", app: "Yes (Vilfo, FlashRouters)", difficulty: "Easy-Medium" },
    { name: "FastestVPN", native: "No", manual: "DD-WRT, OpenWrt, ASUS Merlin", app: "No", difficulty: "Medium" },
    { name: "FastestVPN", native: "Limited", manual: "DD-WRT, OpenWrt, Tomato", app: "No", difficulty: "Medium" },
    { name: "Proton VPN", native: "No", manual: "OpenWrt, DD-WRT (WireGuard config)", app: "No", difficulty: "Hard" },
    { name: "Proton VPN", native: "No", manual: "WireGuard config on any compatible router", app: "No", difficulty: "Medium-Hard" },
  ];

  const compatibleRouters = [
    { name: "ASUS RT-AX86U Pro", price: "$250", vpn: "NordVPN, FastestVPN, others", best: "Best performance + native VPN client" },
    { name: "Netgear Nighthawk R7000", price: "$150", vpn: "Most providers (DD-WRT)", best: "Great DD-WRT support" },
    { name: "GL.iNet Beryl AX (GL-MT3000)", price: "$80", vpn: "WireGuard, OpenVPN built-in", best: "Best travel router" },
    { name: "Vilfo", price: "$400", vpn: "Multi-VPN support", best: "Run multiple VPNs simultaneously" },
  ];

  const faqs = [
    { question: "Why install a VPN on my router?", answer: "A router VPN protects every device on your network — including devices that can't run VPN apps like smart TVs, gaming consoles, IoT devices, and guest devices. One setup protects everything." },
    { question: "Will a router VPN slow down my internet?", answer: "It depends on your router's CPU. Budget routers with weak processors will struggle with VPN encryption, causing significant slowdowns. Mid-range and high-end routers (ASUS RT-AX86U, Netgear R7000) handle it well with 10-20% speed loss." },
    { question: "Can I use split tunneling on a router VPN?", answer: "Some routers support policy-based routing, which is the router equivalent of split tunneling. ASUS routers with Merlin firmware and GL.iNet routers support this. It lets you choose which devices use the VPN and which connect directly." },
    { question: "Does a router VPN count as one device connection?", answer: "Yes — most VPN providers count a router as a single device connection, regardless of how many devices connect through it. This is one of the biggest advantages of a router VPN." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Best Of", href: "/best" }, { label: "Best VPN Router" }]} />

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Best VPN for Routers (2026)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
          A VPN on your router protects every device on your network with one
          setup — laptops, phones, smart TVs, gaming consoles, and IoT devices.
          Here&apos;s how to set it up and which routers and providers work best.
        </p>
        <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
      </header>

      {/* Why router VPN */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Why Use a Router VPN</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "Protect All Devices", desc: "Smart TVs, consoles, IoT — devices that can't run VPN apps get protected automatically." },
            { title: "One Connection", desc: "Counts as 1 device with your VPN provider, regardless of how many devices connect through it." },
            { title: "Always-On", desc: "No need to remember to connect. Every device is protected the moment it joins your Wi-Fi." },
          ].map((item) => (
            <div key={item.title} className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">{item.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Provider router support */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">VPN Provider Router Support</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Provider</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Native App</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Manual Config</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Difficulty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {routerSupport.map((r) => (
                <tr key={r.name}>
                  <td className="px-3 py-2 font-medium text-zinc-900 dark:text-zinc-100">{r.name}</td>
                  <td className="px-3 py-2 text-center text-zinc-700 dark:text-zinc-300">{r.native}</td>
                  <td className="px-3 py-2 text-center text-zinc-700 dark:text-zinc-300">{r.manual}</td>
                  <td className="px-3 py-2 text-center text-zinc-700 dark:text-zinc-300">{r.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recommended routers */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Recommended VPN Routers</h2>
        <div className="space-y-3">
          {compatibleRouters.map((r, i) => (
            <div key={r.name} className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{i === 0 && <span className="text-blue-600 mr-1">Top Pick:</span>}{r.name}</h3>
                <span className="text-sm font-medium text-zinc-500">{r.price}</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">VPN: {r.vpn}</p>
              <p className="text-sm text-zinc-500">Best for: {r.best}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqs} />

      <InternalLinks links={[
        { label: "Router Security Guide", href: "/guides/router-security-guide", description: "Secure your home router" },
        { label: "VPN Kill Switch", href: "/vpn/kill-switch", description: "Essential VPN feature" },
        { label: "VPN Split Tunneling", href: "/vpn/split-tunneling", description: "Route only what matters" },
        { label: "Best VPN 2026", href: "/best/vpn", description: "Our top picks" },
      ]} />
    </article>
  );
}
