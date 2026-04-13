import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Best VPN for Routers (2026) — Protect Every Device on Your Network",
  description: "Install a VPN on your router to protect all devices at once — laptops, phones, smart TVs, and IoT. Compatible routers, setup guides, and provider picks.",
};

export default function BestVpnRouterPage() {
  const routerSupport = [
    { name: "NordVPN", native: "Yes (select ASUS, Netgear)", manual: "DD-WRT, OpenWrt, Tomato", difficulty: "Easy-Medium" },
    { name: "Proton VPN", native: "No", manual: "OpenWrt, DD-WRT (WireGuard config)", difficulty: "Medium-Hard" },
    { name: "FastestVPN", native: "No", manual: "DD-WRT, OpenWrt, ASUS Merlin", difficulty: "Medium" },
  ];

  const compatibleRouters = [
    { name: "ASUS RT-AX86U Pro", price: "$250", vpn: "NordVPN native, all via OpenVPN", best: "Best performance + native VPN client" },
    { name: "Netgear Nighthawk R7000", price: "$150", vpn: "All major providers via DD-WRT", best: "Great DD-WRT support" },
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
    <>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="[&_nav]:text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-slate-500">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Best Of", href: "/best" }, { label: "Best VPN Router" }]} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mt-5 mb-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
            </svg>
            Home network coverage
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-[1.1] mb-5">Best VPN for Routers (2026)</h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-6">
            A VPN on your router protects every device on your network with one setup — laptops, phones, smart TVs, gaming consoles, and IoT devices.
          </p>
          <div className="pt-5 border-t border-white/10 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-slate-400 [&_time]:text-slate-400 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0">
            <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
          </div>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TopVpnPicks heading="Our Router VPN Picks" eyebrow="Tested on router firmware" />

        {/* Why router VPN */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/25">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">Why it matters</p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Why Use a Router VPN</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "Protect All Devices", desc: "Smart TVs, consoles, IoT — devices that can't run VPN apps get protected automatically." },
              { title: "One Connection", desc: "Counts as 1 device with your VPN provider, regardless of how many devices connect through it." },
              { title: "Always-On", desc: "No need to remember to connect. Every device is protected the moment it joins your Wi-Fi." },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-md transition-shadow">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Provider router support */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">VPN Provider Router Support</h2>
          <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 bg-white dark:bg-slate-900">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                  <th className="px-5 py-4 text-left text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Provider</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Native App</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Manual Config</th>
                  <th className="px-5 py-4 text-center text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Difficulty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {routerSupport.map((r) => (
                  <tr key={r.name}>
                    <td className="px-5 py-4 font-bold text-slate-900 dark:text-white">{r.name}</td>
                    <td className="px-5 py-4 text-center text-slate-700 dark:text-slate-300">{r.native}</td>
                    <td className="px-5 py-4 text-center text-slate-700 dark:text-slate-300">{r.manual}</td>
                    <td className="px-5 py-4 text-center text-slate-700 dark:text-slate-300">{r.difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommended routers */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">Recommended VPN Routers</h2>
          <div className="space-y-3">
            {compatibleRouters.map((r, i) => (
              <div key={r.name} className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2 gap-3 flex-wrap">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {i === 0 && <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-2">TOP PICK</span>}
                    {r.name}
                  </h3>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{r.price}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">VPN: {r.vpn}</p>
                <p className="text-sm text-slate-500 dark:text-slate-500 italic">Best for: {r.best}</p>
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
    </>
  );
}
