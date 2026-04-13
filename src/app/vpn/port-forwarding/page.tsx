import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "VPN Port Forwarding Explained (2026) — When You Need It",
  description: "What is VPN port forwarding, who needs it, and which providers support it? Gaming, torrenting, and self-hosting behind a VPN.",
};

export default function PortForwardingPage() {
  const faqs = [
    { question: "What is VPN port forwarding?", answer: "Port forwarding allows external connections to reach your device through the VPN. Normally, a VPN blocks incoming connections (which is good for security). Port forwarding opens specific ports, letting traffic from the internet reach services running on your device." },
    { question: "Who needs port forwarding?", answer: "P2P/torrent users (better speeds and more peers), gamers hosting servers, self-hosters (web servers, Plex), and remote desktop users who need to connect to their device from outside." },
    { question: "Is port forwarding less secure?", answer: "Opening a port creates a potential entry point. Only forward ports you actively use and ensure the service behind the port is properly secured. Most users don't need port forwarding." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "VPN", href: "/vpn" }, { label: "Port Forwarding" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">VPN Port Forwarding Explained</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">Most VPN users never need port forwarding. But for P2P users, gamers hosting servers, and self-hosters, it&apos;s essential. Here&apos;s what it is and which providers support it.</p>
        <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Provider Support</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Provider</th>
                <th className="px-4 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Port Forwarding</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {[
                { name: "NordVPN", support: "No", detail: "Removed port forwarding in 2023 for security reasons. Meshnet is the alternative for P2P." },
                { name: "Proton VPN", support: "Yes", detail: "Available on all paid plans. Dynamic port assigned in the app. Works well for torrenting." },
                { name: "Proton VPN", support: "Removed", detail: "Removed in 2023 due to abuse concerns. Was a key feature for their user base." },
                { name: "FastestVPN", support: "No", detail: "Not available. Focus on consumer features over power-user tools." },
                { name: "FastestVPN", support: "No", detail: "Not available on current plans." },
              ].map((p) => (
                <tr key={p.name}>
                  <td className="px-4 py-2 font-medium text-zinc-900 dark:text-zinc-100">{p.name}</td>
                  <td className="px-4 py-2 text-center">
                    <span className={`font-semibold ${p.support === "Yes" ? "text-green-600 dark:text-green-400" : p.support === "No" ? "text-red-500" : "text-yellow-600 dark:text-yellow-400"}`}>{p.support}</span>
                  </td>
                  <td className="px-4 py-2 text-zinc-600 dark:text-zinc-400">{p.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-zinc-500 mt-3"><strong>Bottom line:</strong> If you need port forwarding, Proton VPN is currently the best option among major providers.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Use Cases</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "P2P / Torrenting", desc: "Port forwarding improves torrent speeds by allowing other peers to connect to you directly. Without it, you can only connect to peers who already have open ports." },
            { title: "Game Server Hosting", desc: "If you host a game server (Minecraft, Valheim, etc.) behind a VPN, port forwarding lets other players connect to your server through the VPN IP." },
            { title: "Self-Hosting", desc: "Running Plex, Nextcloud, or a web server behind a VPN? Port forwarding makes it accessible from the internet while keeping your real IP hidden." },
            { title: "Remote Desktop", desc: "Access your home computer from anywhere through a VPN port forward. More secure than exposing RDP directly to the internet." },
          ].map((uc) => (
            <div key={uc.title} className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">{uc.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "VPN for Gaming", href: "/guides/vpn-for-gaming" },
        { label: "VPN Kill Switch", href: "/vpn/kill-switch" },
        { label: "VPN Protocols", href: "/vpn/protocols" },
        { label: "Proton VPN Review", href: "/vpn/providers/protonvpn" },
      ]} />
    </article>
  );
}
