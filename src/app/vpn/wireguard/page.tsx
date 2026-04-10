import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "WireGuard VPN Protocol: Everything You Need to Know (2026)",
  description: "Deep dive into WireGuard — the fastest VPN protocol. How it works, why it's better than OpenVPN, provider implementations, and setup guide.",
};

export default function WireGuardPage() {
  const faqs = [
    { question: "Is WireGuard better than OpenVPN?", answer: "For most users, yes. WireGuard is significantly faster (often 2-3x), uses less battery on mobile, has a smaller code base (4,000 lines vs 70,000+), and uses more modern cryptography. OpenVPN's advantage is broader compatibility with legacy systems and TCP mode for restrictive networks." },
    { question: "Is WireGuard secure?", answer: "Yes. WireGuard uses state-of-the-art cryptography: ChaCha20 for encryption, Poly1305 for authentication, Curve25519 for key exchange, and BLAKE2s for hashing. It has been formally verified and is built into the Linux kernel since version 5.6." },
    { question: "Why do some VPNs use their own protocol instead of WireGuard?", answer: "NordLynx (NordVPN) is built on top of WireGuard's concepts but adds features like double NAT for privacy. Lightway offers a smaller code footprint. They offer similar or better performance while addressing WireGuard's static IP assignment concern." },
    { question: "Does WireGuard work in China?", answer: "Standard WireGuard traffic can be detected and blocked by the Great Firewall. You need obfuscation on top of WireGuard. NordVPN's obfuscated servers and FastestVPN's obfuscation provide this. Raw WireGuard alone is not sufficient for China." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "VPN", href: "/vpn" }, { label: "WireGuard" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">WireGuard: The Modern VPN Protocol</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">WireGuard has become the default VPN protocol for good reason — it&apos;s faster, simpler, and more secure than its predecessors. Here&apos;s everything you need to know.</p>
        <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Why WireGuard Matters</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { stat: "~4,000", label: "Lines of code", note: "vs OpenVPN's 70,000+" },
            { stat: "2-3x", label: "Faster than OpenVPN", note: "In typical speed tests" },
            { stat: "3-5%", label: "Battery impact on mobile", note: "vs 8-12% for OpenVPN" },
            { stat: "<1s", label: "Connection time", note: "Near-instant handshake" },
          ].map((s) => (
            <div key={s.label} className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{s.stat}</div>
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{s.label}</div>
              <div className="text-xs text-zinc-500">{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Cryptography</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Function</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">WireGuard</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">OpenVPN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {[
                { fn: "Encryption", wg: "ChaCha20", ovpn: "AES-256-GCM" },
                { fn: "Authentication", wg: "Poly1305", ovpn: "HMAC-SHA256" },
                { fn: "Key Exchange", wg: "Curve25519 (ECDH)", ovpn: "RSA / ECDH" },
                { fn: "Hashing", wg: "BLAKE2s", ovpn: "SHA-256/512" },
                { fn: "PFS", wg: "Built-in (1-RTT)", ovpn: "Optional (TLS)" },
              ].map((r) => (
                <tr key={r.fn}>
                  <td className="px-4 py-2 font-medium text-zinc-900 dark:text-zinc-100">{r.fn}</td>
                  <td className="px-4 py-2 text-zinc-700 dark:text-zinc-300">{r.wg}</td>
                  <td className="px-4 py-2 text-zinc-700 dark:text-zinc-300">{r.ovpn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">Both are considered highly secure. WireGuard&apos;s advantage is using modern, purpose-built cryptography with no legacy algorithm options that could be misconfigured.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Provider Implementations</h2>
        <div className="space-y-3">
          {[
            { name: "NordVPN → NordLynx", desc: "WireGuard with double NAT system to address the static IP privacy concern. The most popular WireGuard implementation." },
            { name: "Surfshark → WireGuard", desc: "Standard WireGuard implementation with their own privacy layer. Default protocol on all platforms." },
            { name: "FastestVPN → WireGuard", desc: "Standard WireGuard implementation. Affordable pricing with lifetime plans available." },
            { name: "Proton VPN → WireGuard", desc: "Standard WireGuard with NAT-based privacy. Also offers Stealth protocol for obfuscation." },
            { name: "Mullvad → WireGuard", desc: "One of the first providers to adopt WireGuard. Native implementation with multihop support." },
          ].map((p) => (
            <div key={p.name} className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{p.name}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "All VPN Protocols Compared", href: "/vpn/protocols" },
        { label: "VPN Speed Optimization", href: "/guides/vpn-speed-optimization" },
        { label: "VPN Obfuscation", href: "/vpn/obfuscation" },
        { label: "Best VPN 2026", href: "/best/vpn" },
      ]} />
    </article>
  );
}
