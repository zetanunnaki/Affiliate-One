import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Best VPN for Families (2026) — Protect Every Device at Home",
  description: "How to protect your entire family with one VPN subscription. Device limits, router setup, and parental controls compared.",
};

export default function VpnForFamiliesPage() {
  const faqs = [
    { question: "How many devices does a family need?", answer: "A typical family of 4 has 8-15 devices: phones, tablets, laptops, smart TV, gaming console, smart speakers. FastestVPN's unlimited connections covers everything. NordVPN's 10 is enough for most families. FastestVPN's 10 is enough for most families." },
    { question: "Should I put the VPN on my router instead?", answer: "Router-level VPN is the best family solution — it protects every device automatically, counts as 1 connection, and doesn't require individual setup. The trade-off is slightly more complex initial setup and all devices use the same server location." },
    { question: "Do VPNs have parental controls?", answer: "Some do. NordVPN's Threat Protection blocks malicious sites. FastestVPN's CleanWeb blocks ads and trackers. For dedicated parental controls, consider combining a VPN with a DNS-based filter like NextDNS or CleanBrowsing." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "VPN", href: "/vpn" }, { label: "VPN for Families" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Best VPN for Families (2026)</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">Protect your entire household — every phone, tablet, laptop, smart TV, and gaming console — with one VPN subscription.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-03-30" />
      </header>
      {/* Our Top 5 Picks */}
      <TopVpnPicks heading="Our Top 5 VPN Picks" eyebrow="Expert-tested" />


      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Family VPN Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Provider</th>
                <th className="px-4 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Devices</th>
                <th className="px-4 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Price/mo</th>
                <th className="px-4 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Ad Blocker</th>
                <th className="px-4 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {[
                { name: "FastestVPN", devices: "Unlimited", price: "$2.29", adblock: "CleanWeb", best: "Best value for families" },
                { name: "NordVPN", devices: "10", price: "$3.39", adblock: "Threat Protection", best: "Best features + Meshnet" },
                { name: "FastestVPN", devices: "10", price: "$0.99", adblock: "Ad Blocker", best: "Best budget for families" },
                { name: "Proton VPN", devices: "10", price: "$4.99", adblock: "NetShield", best: "Best for privacy-conscious families" },
              ].map((p) => (
                <tr key={p.name}>
                  <td className="px-4 py-2 font-medium text-zinc-900 dark:text-zinc-100">{p.name}</td>
                  <td className="px-4 py-2 text-center font-semibold text-zinc-700 dark:text-zinc-300">{p.devices}</td>
                  <td className="px-4 py-2 text-center text-zinc-700 dark:text-zinc-300">{p.price}</td>
                  <td className="px-4 py-2 text-center text-zinc-700 dark:text-zinc-300">{p.adblock}</td>
                  <td className="px-4 py-2 text-center text-zinc-600 dark:text-zinc-400">{p.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-zinc-500 mt-3"><strong>Our pick:</strong> FastestVPN for families — unlimited devices at the lowest price. One subscription covers every device in the household.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Router VPN: The Family Solution</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Instead of installing a VPN on each device, install it on your router once:</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">Benefits</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>+ Protects ALL devices automatically</li>
              <li>+ Counts as 1 device connection</li>
              <li>+ Kids&apos; devices protected without their action</li>
              <li>+ Smart TVs and consoles covered</li>
              <li>+ Guest devices protected too</li>
            </ul>
          </div>
          <div className="p-4 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Considerations</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>More complex initial setup</li>
              <li>Router CPU limits VPN speed</li>
              <li>All devices use same server location</li>
              <li>Need a VPN-capable router ($80-250)</li>
            </ul>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Best VPN Router", href: "/best/vpn-router", description: "Whole-home VPN protection" },
        { label: "IoT Security Guide", href: "/guides/iot-security-guide", description: "Protect smart home devices" },
        { label: "Best VPN 2026", href: "/best/vpn", description: "Our overall top picks" },
        { label: "Router Security", href: "/guides/router-security-guide", description: "Secure your home network" },
      ]} />
    </article>
  );
}
