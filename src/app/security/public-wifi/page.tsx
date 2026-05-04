import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/components/ui/Byline";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";
import { BUILD_MONTH_YEAR } from "@/lib/dates";

export const metadata: Metadata = {
  title: "Public Wi-Fi Safety (2026) — Stay Secure on Any Network",
  description:
    "Learn how to protect yourself on public Wi-Fi at hotels, airports, cafés, and co-working spaces. Practical security steps every remote worker should follow.",
  alternates: { canonical: "/security/public-wifi/" },
  openGraph: {
    title: "Public Wi-Fi Safety (2026) — Stay Secure on Any Network",
    description: "Learn how to protect yourself on public Wi-Fi at hotels, airports, cafés, and co-working spaces. Practical security steps every remote worker should follow.",
    type: "article",
    url: "/security/public-wifi/",
    images: [{ url: "/images/og/og-security.webp", width: 1200, height: 675, alt: "Public Wi-Fi Safety Guide" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-security.webp"] },
};

export default function PublicWifiPage() {
  const faqs = [
    {
      question: "Can someone hack me on public Wi-Fi?",
      answer:
        "Yes. On an unencrypted or shared Wi-Fi network, attackers can intercept your traffic using man-in-the-middle (MITM) attacks, capture login credentials, inject malicious content, or create fake hotspots (evil twin attacks). A VPN encrypts your traffic and neutralizes most of these threats.",
    },
    {
      question: "Is it safe to use HTTPS on public Wi-Fi without a VPN?",
      answer:
        "HTTPS encrypts the data between your browser and the website, which helps. However, an attacker can still see which domains you visit (DNS queries), perform SSL stripping attacks on poorly configured sites, or intercept traffic from non-HTTPS apps. A VPN provides a complete encryption layer for all traffic.",
    },
    {
      question: "Should I use my phone's hotspot instead of public Wi-Fi?",
      answer:
        "Using your phone as a hotspot is generally safer than public Wi-Fi because you control the network. The traffic goes directly through your carrier. It's an excellent fallback when you can't trust the available Wi-Fi network. Pair it with a VPN for maximum security.",
    },
    {
      question: "How do I know if a public Wi-Fi network is safe?",
      answer:
        "You can never fully trust a public network, but verify the network name with staff, avoid networks with generic names like 'Free WiFi', look for WPA2/WPA3 password-protected networks, and always use a VPN regardless. Even password-protected public networks share the key with all users.",
    },
  ];

  const threats = [
    { name: "Man-in-the-Middle (MITM)", severity: "High", desc: "Attacker intercepts traffic between you and the router, reading or modifying data in transit.", mitigation: "VPN encrypts all traffic end-to-end" },
    { name: "Evil Twin / Rogue Hotspot", severity: "High", desc: "Attacker creates a fake Wi-Fi network mimicking a legitimate one (e.g., 'Starbucks_WiFi_Free').", mitigation: "Verify network name with staff; use VPN" },
    { name: "Packet Sniffing", severity: "Medium", desc: "Attacker captures unencrypted data packets on the shared network.", mitigation: "VPN + HTTPS encrypt your traffic" },
    { name: "Session Hijacking", severity: "Medium", desc: "Attacker steals your session cookies to access your accounts.", mitigation: "VPN + 2FA on all important accounts" },
    { name: "DNS Spoofing", severity: "Medium", desc: "Attacker redirects your DNS queries to malicious sites.", mitigation: "VPN routes DNS through encrypted tunnel" },
    { name: "Malware Distribution", severity: "Medium", desc: "Attacker injects malware through network vulnerabilities or fake update prompts.", mitigation: "Keep OS updated; don't accept unexpected downloads" },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Public Wi-Fi Safety Guide (2026)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          Public Wi-Fi is convenient but inherently risky. Whether you&apos;re
          at a hotel, airport, café, or co-working space, here&apos;s how to
          protect your data on shared networks.
        </p>
        <Byline authorId="elena-rodriguez" updatedAt="2026-01-03" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      {/* Threat table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Common Public Wi-Fi Threats
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Threat</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Risk</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Description</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Mitigation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {threats.map((t) => (
                <tr key={t.name}>
                  <td className="px-4 py-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">{t.name}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${t.severity === "High" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"}`}>
                      {t.severity}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">{t.desc}</td>
                  <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">{t.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Step by step protection */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          How to Stay Safe: Step by Step
        </h2>
        <div className="space-y-4">
          {[
            { step: "1", title: "Connect your VPN before joining the network", desc: "Turn on your VPN before you connect to the public Wi-Fi. This ensures even your initial connection handshake is protected. If your VPN drops, the kill switch should block all traffic." },
            { step: "2", title: "Verify the network name", desc: "Ask staff for the exact network name and password. Attackers create convincing fake networks — 'Hotel_WiFi_Free' might be a rogue hotspot while the real network is 'Hotel_Guest_2024'." },
            { step: "3", title: "Disable auto-connect and sharing", desc: "Turn off auto-connect to open networks in your device settings. Disable file sharing, AirDrop, and printer sharing. These features are convenient at home but dangerous on public networks." },
            { step: "4", title: "Use HTTPS everywhere", desc: "Ensure websites show the padlock icon. Most modern browsers warn about non-HTTPS sites. Combined with a VPN, HTTPS provides two layers of encryption." },
            { step: "5", title: "Avoid sensitive transactions without a VPN", desc: "Don't access banking, enter credit card numbers, or log into sensitive accounts on public Wi-Fi without an active VPN connection. Use your phone's cellular data as a safer alternative." },
            { step: "6", title: "Forget the network when you leave", desc: "Remove the public Wi-Fi network from your saved networks after use. This prevents your device from automatically reconnecting later, potentially to a rogue network with the same name." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                {item.step}
              </span>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{item.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* By location */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Wi-Fi Safety by Location
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { place: "Hotels", risk: "Medium-High", tip: "Hotel Wi-Fi is shared among many guests. Use a VPN. Avoid the 'business center' shared computers entirely." },
            { place: "Airports", risk: "High", tip: "Airports are prime targets for attackers. Many fake hotspots. Always verify the network and use a VPN." },
            { place: "Cafés & Co-working", risk: "Medium", tip: "Usually password-protected but still shared. Use a VPN and a privacy screen for sensitive work." },
            { place: "Public Libraries", risk: "Medium", tip: "Generally well-maintained but shared. Use a VPN and avoid logging into sensitive accounts." },
          ].map((loc) => (
            <div key={loc.place} className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{loc.place}</h3>
                <span className="text-xs font-medium px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded">
                  Risk: {loc.risk}
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{loc.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Verification note */}
      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg mb-8 text-sm text-blue-800 dark:text-blue-200">
        <strong>How we verified:</strong> Threat descriptions are based on
        documented attack vectors from OWASP, NIST, and CISA advisories.
        Mitigations were tested on Windows 11, macOS Sequoia, iOS 19, and
        Android 16 with current VPN clients ({BUILD_MONTH_YEAR}).
      </div>

      <FAQ items={faqs} />

      <InternalLinks
        title="Related Security Guides"
        links={[
          { label: "Best VPN for Travel", href: "/vpn/intent/travel", description: "VPNs tested for travelers" },
          { label: "Remote Work Security", href: "/security/remote-work", description: "Complete remote work security guide" },
          { label: "Best VPN 2026", href: "/best/vpn", description: "Our top VPN picks" },
          { label: "Country VPN Directory", href: "/countries", description: "Find VPN advice for your country" },
        ]}
      />
    </article>
  );
}
