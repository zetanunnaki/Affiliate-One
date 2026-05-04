import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Home Network Segmentation (2026) — Separate Work, IoT & Personal Devices",
  description:
    "How to segment your home network for remote work security. VLANs, guest networks, and keeping IoT devices away from your work laptop.",
  alternates: { canonical: "/security/network-segmentation/" },
  openGraph: {
    title: "Home Network Segmentation (2026) — Separate Work, IoT & Personal Devices",
    description: "How to segment your home network for remote work security. VLANs, guest networks, and keeping IoT devices away from your work laptop.",
    type: "article",
    url: "/security/network-segmentation/",
    images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: "Network Segmentation Guide" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
};

export default function NetworkSegmentationPage() {
  const faqs = [
    { question: "Why segment my home network?", answer: "If a smart device (camera, speaker, thermostat) is hacked, the attacker can potentially access everything on the same network — including your work laptop. Segmentation creates walls between device groups so a compromised IoT device can't reach your work data." },
    { question: "Is a guest network enough?", answer: "For most home users, yes. Putting IoT devices on your router's guest network isolates them from your main network. It's not as robust as VLANs, but it's simple and effective. The key is that guest networks typically can't communicate with the main network." },
    { question: "Do I need special equipment?", answer: "For basic segmentation: most modern routers support guest networks. For VLANs: you need a VLAN-capable router (ASUS with Merlin firmware, Ubiquiti, pfSense). For enterprise-grade: managed switches + dedicated access points." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Network Segmentation" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Home Network Segmentation</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">Your smart TV, robot vacuum, and work laptop shouldn&apos;t be on the same network. Here&apos;s how to segment your home network to protect your remote work setup.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-03-30" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      {/* Why segment */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">The Three Network Zones</h2>
        <div className="space-y-4">
          {[
            { zone: "Work Zone", color: "border-green-300 dark:border-green-700 bg-green-50/30 dark:bg-green-900/10", devices: "Work laptop, work phone", security: "Highest — VPN, firewall, encrypted", access: "Can access internet. Cannot access IoT zone." },
            { zone: "Personal Zone", color: "border-blue-300 dark:border-blue-700 bg-blue-50/30 dark:bg-blue-900/10", devices: "Personal laptop, phones, tablets, gaming", security: "High — VPN recommended, auto-updates", access: "Can access internet. Cannot access IoT zone." },
            { zone: "IoT Zone (Guest Network)", color: "border-yellow-300 dark:border-yellow-700 bg-yellow-50/30 dark:bg-yellow-900/10", devices: "Smart TV, speakers, cameras, thermostat, robot vacuum", security: "Isolated — these devices have poor security", access: "Can access internet. CANNOT access Work or Personal zones." },
          ].map((z) => (
            <div key={z.zone} className={`p-5 border ${z.color} rounded-xl`}>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{z.zone}</h3>
              <div className="grid sm:grid-cols-3 gap-3 text-sm">
                <div><strong className="text-zinc-800 dark:text-zinc-200 block mb-1">Devices</strong><span className="text-zinc-600 dark:text-zinc-400">{z.devices}</span></div>
                <div><strong className="text-zinc-800 dark:text-zinc-200 block mb-1">Security Level</strong><span className="text-zinc-600 dark:text-zinc-400">{z.security}</span></div>
                <div><strong className="text-zinc-800 dark:text-zinc-200 block mb-1">Access</strong><span className="text-zinc-600 dark:text-zinc-400">{z.access}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Methods */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">How to Segment</h2>
        <div className="space-y-4">
          <div className="p-5 border border-green-200 dark:border-green-800 rounded-xl">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Method 1: Guest Network (Easy — 5 Minutes)</h3>
            <ol className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>1. Log into your router admin panel</li>
              <li>2. Enable &quot;Guest Network&quot; under Wireless settings</li>
              <li>3. Set a strong password for the guest network</li>
              <li>4. Disable &quot;Allow guests to access local network&quot;</li>
              <li>5. Connect ALL IoT devices to the guest network</li>
              <li>6. Keep work and personal devices on the main network</li>
            </ol>
            <p className="text-xs text-zinc-500 mt-2">Works on: Most modern routers (TP-Link, ASUS, Netgear, Google/Nest)</p>
          </div>

          <div className="p-5 border border-blue-200 dark:border-blue-800 rounded-xl">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Method 2: VLANs (Advanced — 30 Minutes)</h3>
            <ol className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>1. Requires VLAN-capable router (ASUS with Merlin, Ubiquiti, pfSense)</li>
              <li>2. Create VLAN 10 (Work), VLAN 20 (Personal), VLAN 30 (IoT)</li>
              <li>3. Assign SSIDs to each VLAN</li>
              <li>4. Configure firewall rules: IoT VLAN cannot reach Work/Personal VLANs</li>
              <li>5. Work VLAN gets priority bandwidth (QoS)</li>
            </ol>
            <p className="text-xs text-zinc-500 mt-2">Best for: Tech-savvy users who want granular control</p>
          </div>

          <div className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Method 3: Separate Router (Simple but Effective)</h3>
            <ol className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>1. Buy a second router ($30-80)</li>
              <li>2. Connect it to your main router via ethernet</li>
              <li>3. Create a separate Wi-Fi network for IoT devices</li>
              <li>4. The second router&apos;s devices are NAT&apos;d — can&apos;t access main network devices</li>
            </ol>
            <p className="text-xs text-zinc-500 mt-2">Good for: People whose router doesn&apos;t support guest networks or VLANs</p>
          </div>
        </div>
      </section>

      {/* VPN integration */}
      <section className="mb-10 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">VPN + Segmentation = Maximum Protection</h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">For the strongest setup, combine network segmentation with a VPN:</p>
        <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
          <li>+ <strong>Work devices:</strong> VPN always on (encrypts all work traffic)</li>
          <li>+ <strong>Personal devices:</strong> VPN recommended (prevents ISP monitoring)</li>
          <li>+ <strong>IoT devices:</strong> Isolated on guest network (no VPN needed — they can&apos;t access your work data)</li>
          <li>+ <strong>Router-level VPN:</strong> Alternative — VPN on router encrypts everything for all networks</li>
        </ul>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Router Security Guide", href: "/guides/router-security-guide", description: "Secure your router first" },
        { label: "IoT Security Guide", href: "/guides/iot-security-guide", description: "Protect smart home devices" },
        { label: "Home Network Audit", href: "/guides/home-network-audit", description: "Audit your current setup" },
        { label: "Best VPN Router", href: "/best/vpn-router", description: "Router-level VPN protection" },
      ]} />
    </article>
  );
}
