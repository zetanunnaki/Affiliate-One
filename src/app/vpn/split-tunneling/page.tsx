import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "VPN Split Tunneling Explained (2026) — Route Only What Matters",
  description: "What is split tunneling, how to set it up, and when to use it. Route work traffic through VPN while keeping personal traffic direct.",
};

export default function SplitTunnelingPage() {
  const faqs = [
    { question: "What is VPN split tunneling?", answer: "Split tunneling lets you choose which apps or traffic go through the VPN tunnel and which connect directly to the internet. For example, you can route Slack and your browser through the VPN for security while letting Spotify and your smart home apps connect directly for better performance." },
    { question: "Is split tunneling less secure?", answer: "Traffic that bypasses the VPN is not encrypted by the VPN. This is fine for non-sensitive activities (streaming, music) but anything work-related should go through the tunnel. The key is being intentional about what bypasses." },
    { question: "Why doesn't iOS support split tunneling?", answer: "Apple's iOS does not allow VPN apps to implement traditional split tunneling due to platform restrictions. On iOS, all traffic either goes through the VPN or doesn't. Some VPN providers offer 'Bypass VPN' for specific websites as a partial workaround." },
    { question: "Should remote workers use split tunneling?", answer: "Yes — it's ideal. Route work apps (email, Slack, cloud drives, company tools) through the VPN while letting personal apps (streaming, music, gaming) connect directly. This gives you security where it matters and performance where it doesn't." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "VPN", href: "/vpn" }, { label: "Split Tunneling" }]} />

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          VPN Split Tunneling Explained
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          Split tunneling lets you route only selected traffic through your
          VPN. It&apos;s the best way to balance security and performance for
          remote work.
        </p>
        <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
      </header>

      {/* Visual comparison */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Full Tunnel vs Split Tunnel</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-lg">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Full Tunnel (Default)</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">ALL traffic goes through VPN.</p>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>+ Maximum security — everything encrypted</li>
              <li>- Slower for non-work tasks</li>
              <li>- Can break local network devices</li>
              <li>- Uses more VPN bandwidth</li>
            </ul>
          </div>
          <div className="p-5 border border-blue-200 dark:border-blue-700 rounded-lg bg-blue-50/30 dark:bg-blue-900/10">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Split Tunnel (Recommended)</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Only selected traffic goes through VPN.</p>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>+ Work traffic secured, personal traffic fast</li>
              <li>+ Local devices still accessible</li>
              <li>+ Less VPN bandwidth used</li>
              <li>- Requires setup and intentional choices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What to route */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">What to Route Through VPN</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">Route Through VPN</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>Web browsers (for work)</li>
              <li>Email clients (Outlook, Thunderbird)</li>
              <li>Slack, Teams, Discord</li>
              <li>Cloud storage (Drive, Dropbox)</li>
              <li>Code editors with remote access</li>
              <li>Banking and financial apps</li>
            </ul>
          </div>
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Can Bypass VPN</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>Streaming (Netflix, Spotify)</li>
              <li>Gaming platforms</li>
              <li>Smart home apps</li>
              <li>Printer/scanner access</li>
              <li>Local file sharing</li>
              <li>System updates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Provider support */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Split Tunneling by Provider</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Provider</th>
                <th className="px-4 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Windows</th>
                <th className="px-4 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">macOS</th>
                <th className="px-4 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Android</th>
                <th className="px-4 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">iOS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {[
                { name: "NordVPN", win: "Yes", mac: "Yes", and: "Yes", ios: "No" },
                { name: "Surfshark", win: "Yes", mac: "Yes", and: "Yes", ios: "No" },
                { name: "ExpressVPN", win: "Yes", mac: "Yes", and: "Yes", ios: "No" },
                { name: "Proton VPN", win: "Yes", mac: "Yes", and: "Yes", ios: "No" },
                { name: "Mullvad", win: "Yes", mac: "Yes", and: "Yes", ios: "No" },
              ].map((r) => (
                <tr key={r.name}>
                  <td className="px-4 py-2 font-medium text-zinc-900 dark:text-zinc-100">{r.name}</td>
                  <td className="px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">{r.win}</td>
                  <td className="px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">{r.mac}</td>
                  <td className="px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">{r.and}</td>
                  <td className="px-4 py-2 text-center text-red-500">{r.ios}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-zinc-500 mt-2">iOS does not support split tunneling due to Apple platform restrictions. No VPN can offer it on iOS.</p>
      </section>

      <FAQ items={faqs} />

      <InternalLinks links={[
        { label: "VPN Kill Switch", href: "/vpn/kill-switch", description: "The other essential VPN feature" },
        { label: "VPN Protocols", href: "/vpn/protocols", description: "Choose the right protocol" },
        { label: "VPN Speed Optimization", href: "/guides/vpn-speed-optimization", description: "Get the fastest speeds" },
        { label: "Best VPN 2026", href: "/best/vpn", description: "Our top picks" },
      ]} />
    </article>
  );
}
