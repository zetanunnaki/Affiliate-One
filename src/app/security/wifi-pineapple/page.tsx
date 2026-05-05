import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";
import ArticleSchema from "@/components/seo/ArticleSchema";

export const metadata: Metadata = {
  title: "Wi-Fi Pineapple & Evil Twin Attacks (2026) — How Fake Networks Steal Your Data",
  description:
    "How attackers create fake Wi-Fi networks to intercept your traffic. Evil twin attacks, Wi-Fi Pineapple devices, and VPN as your primary defense.",
  alternates: { canonical: "/security/wifi-pineapple/" },
  openGraph: {
    title: "Wi-Fi Pineapple & Evil Twin Attacks (2026) — How Fake Networks Steal Your Data",
    description: "How attackers create fake Wi-Fi networks to intercept your traffic. Evil twin attacks, Wi-Fi Pineapple devices, and VPN as your primary defense.",
    type: "article",
    url: "/security/wifi-pineapple/",
    images: [{ url: "/images/og/og-security.webp", width: 1200, height: 675, alt: "Wifi Pineapple Guide" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-security.webp"] },
};

export default function WifiPineapplePage() {
  const faqs = [
    { question: "What is a Wi-Fi Pineapple?", answer: "A Wi-Fi Pineapple is a portable device (originally by Hak5) that creates fake Wi-Fi access points. It can impersonate legitimate networks, intercept traffic, capture credentials, and perform man-in-the-middle attacks. It's sold as a penetration testing tool but is also used maliciously." },
    { question: "What is an evil twin attack?", answer: "An evil twin is a fake Wi-Fi network that mimics a legitimate one (same name, sometimes same MAC address). When you connect to the fake network, the attacker can see all your unencrypted traffic, redirect you to phishing pages, and intercept credentials." },
    { question: "Can a VPN protect against evil twin attacks?", answer: "Yes — a VPN is the primary defense. Even if you connect to a malicious network, the VPN encrypts all your traffic. The attacker sees only encrypted data they can't read. This is why always-on VPN is so important on public networks." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ArticleSchema
        title="Wi-Fi Pineapple & Evil Twin Attacks (2026) — How Fake Networks Steal Your Data"
        description="How attackers create fake Wi-Fi networks to intercept your traffic. Evil twin attacks, Wi-Fi Pineapple devices, and VPN as your primary defense."
        url="/security/wifi-pineapple/"
        authorName="Sarah Chen"
        authorUrl="https://buysecurevpn.com/authors/sarah-chen/"
        image="https://buysecurevpn.com/images/og/og-security.webp"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Wi-Fi Pineapple & Evil Twin" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Wi-Fi Pineapple & Evil Twin Attacks</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">Attackers create fake Wi-Fi networks that look identical to real ones. When you connect, they see everything. Here&apos;s how it works and why a VPN is your primary defense.</p>
        <Byline authorId="marcus-johnson" updatedAt="2026-01-11" />
      </header>
      {/* Our Top 5 Picks */}
      <TopVpnPicks heading="Our Top 5 VPN Picks" eyebrow="Protect yourself" />


      {/* How it works */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">How Evil Twin Attacks Work</h2>
        <div className="p-5 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
          <ol className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>1. Setup:</strong> Attacker places a Wi-Fi Pineapple (or laptop) near a café, hotel, or airport</li>
            <li><strong>2. Impersonation:</strong> Device creates a network with the same name as the legitimate one (&quot;Starbucks_WiFi&quot;, &quot;Hotel_Guest&quot;)</li>
            <li><strong>3. Signal strength:</strong> The fake network may broadcast a stronger signal, causing devices to auto-connect to it instead of the real one</li>
            <li><strong>4. Interception:</strong> All traffic through the fake network passes through the attacker&apos;s device</li>
            <li><strong>5. Attack:</strong> Attacker can capture unencrypted data, redirect to phishing pages, inject malware, or perform SSL stripping</li>
          </ol>
        </div>
      </section>

      {/* Where it happens */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Where Evil Twins Are Most Common</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { place: "Airports", risk: "Very High", why: "Thousands of people desperate for Wi-Fi. Multiple similar-looking networks. Travelers often rush and don't verify." },
            { place: "Hotels", risk: "High", why: "Guests expect 'Hotel_Guest' networks. Attacker creates similar network. Multiple rooms = many targets." },
            { place: "Cafés", risk: "High", why: "Open networks with generic names. Easy for attacker to blend in. Long dwell time." },
            { place: "Conferences", risk: "Very High", why: "Hundreds of tech-savvy targets in one room. High-value corporate data. Multiple competing networks." },
          ].map((p) => (
            <div key={p.place} className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{p.place}</h3>
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${p.risk === "Very High" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"}`}>{p.risk}</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.why}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Defense */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Your Defense</h2>
        <div className="space-y-3">
          {[
            { defense: "Always use a VPN", desc: "VPN encrypts ALL traffic. Even on an evil twin network, the attacker sees only encrypted data they can't read. This is defense #1." },
            { defense: "Verify network names with staff", desc: "Ask the hotel/café for the exact network name and password. Don't connect to anything similar but different." },
            { defense: "Disable auto-connect", desc: "Turn off auto-connect to known/open networks. This prevents your device from connecting to evil twins that match saved network names." },
            { defense: "Forget networks after use", desc: "Remove public networks from your saved list. This prevents future auto-connection to a potential evil twin." },
            { defense: "Use cellular data for sensitive tasks", desc: "Your phone's hotspot is a private connection. Use it instead of public Wi-Fi for banking and sensitive work." },
          ].map((d, i) => (
            <div key={d.defense} className="flex gap-4 p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{i + 1}</span>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{d.defense}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Public Wi-Fi Safety", href: "/security/public-wifi", description: "Complete Wi-Fi safety guide" },
        { label: "VPN Always-On Setup", href: "/vpn/always-on", description: "Never forget your VPN" },
        { label: "Travel Security", href: "/security/travel", description: "Security while traveling" },
        { label: "Best VPN 2026", href: "/best/vpn", description: "Top VPN picks" },
      ]} />
    </article>
  );
}
