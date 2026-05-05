import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";
import ArticleSchema from "@/components/seo/ArticleSchema";

export const metadata: Metadata = {
  title: "USB Security Guide (2026) — Juice Jacking, BadUSB & Safe Practices",
  description:
    "How USB devices can compromise your security. Juice jacking at airports, BadUSB attacks, and safe USB practices for remote workers.",
  alternates: { canonical: "/security/usb-security/" },
  openGraph: {
    title: "USB Security Guide (2026) — Juice Jacking, BadUSB & Safe Practices",
    description: "How USB devices can compromise your security. Juice jacking at airports, BadUSB attacks, and safe USB practices for remote workers.",
    type: "article",
    url: "/security/usb-security/",
    images: [{ url: "/images/og/og-security.webp", width: 1200, height: 675, alt: "Usb Security Guide" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-security.webp"] },
};

export default function UsbSecurityPage() {
  const faqs = [
    { question: "What is juice jacking?", answer: "Juice jacking is an attack where a compromised USB charging port (at airports, hotels, cafés) installs malware or steals data when you plug in your phone or laptop. The USB data pins transmit malware alongside power." },
    { question: "Are USB data blockers worth it?", answer: "Yes — they cost $5-10 and physically block the data pins on USB cables, allowing only power through. This eliminates juice jacking risk completely. It's the simplest, cheapest security tool you can carry." },
    { question: "Is it safe to use USB drives from unknown sources?", answer: "Never. Found USB drives are a classic social engineering attack. Attackers drop infected drives in parking lots, cafés, and conferences. The drive may contain malware that executes automatically when plugged in." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ArticleSchema
        title="USB Security Guide (2026) — Juice Jacking, BadUSB & Safe Practices"
        description="How USB devices can compromise your security. Juice jacking at airports, BadUSB attacks, and safe USB practices for remote workers."
        url="/security/usb-security/"
        authorName="Sarah Chen"
        authorUrl="https://buysecurevpn.com/authors/sarah-chen/"
        image="https://buysecurevpn.com/images/og/og-security.webp"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "USB Security" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">USB Security for Remote Workers</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">USB ports are attack vectors. From juice jacking at airports to malicious USB drives at conferences, here&apos;s how to protect yourself.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-02-16" />
      </header>
      {/* Our Top 5 Picks */}
      <TopVpnPicks heading="Our Top 5 VPN Picks" eyebrow="Protect yourself" />


      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">USB Threats</h2>
        <div className="space-y-4">
          {[
            { name: "Juice Jacking", risk: "Medium", desc: "Compromised public USB charging ports install malware or steal data through the USB data connection.", where: "Airport charging stations, hotel alarm clocks, café USB ports, ride-share car chargers", defense: "Use a USB data blocker ($5) or carry your own wall charger + cable. Use AC outlets, not USB ports." },
            { name: "BadUSB / Rubber Ducky", risk: "High", desc: "A USB device that looks like a flash drive or charger but acts as a keyboard, rapidly typing malicious commands when plugged in.", where: "Found USB drives, conference giveaways, social engineering drops", defense: "Never plug in USB devices from unknown sources. Period." },
            { name: "Malicious USB Drives", risk: "High", desc: "USB drives containing malware that auto-executes when plugged in. May also contain enticing files (salary_list.xlsx) that are actually malware.", where: "Parking lots, lobbies, conference rooms, co-working spaces", defense: "Never plug in found USB drives. If you must analyze one, use an air-gapped computer." },
            { name: "USB Cable Attacks (O.MG)", risk: "Low-Medium", desc: "Cables that look normal but contain hidden chips that can inject keystrokes, exfiltrate data, or provide remote access.", where: "Borrowed cables, conference giveaways, shared workspaces", defense: "Use your own cables. Don't borrow charging cables from strangers." },
          ].map((t) => (
            <div key={t.name} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{t.name}</h3>
                <span className={`px-2 py-1 text-xs font-bold rounded ${t.risk === "High" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" : t.risk === "Medium" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"}`}>{t.risk}</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{t.desc}</p>
              <p className="text-xs text-zinc-500 mb-1"><strong>Found at:</strong> {t.where}</p>
              <p className="text-sm text-green-700 dark:text-green-400"><strong>Defense:</strong> {t.defense}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">USB Security Kit for Travelers</h2>
        <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
          <li>1. <strong>USB data blocker</strong> ($5-10) — Blocks data pins, allows only power</li>
          <li>2. <strong>Your own wall charger</strong> — Avoid public USB ports entirely</li>
          <li>3. <strong>Your own cables</strong> — Never borrow or use unknown cables</li>
          <li>4. <strong>Portable battery pack</strong> (10,000+ mAh) — Charge without any public port</li>
          <li>5. <strong>Encrypted USB drive</strong> — If you carry data, use hardware-encrypted drives (IronKey, Apricorn)</li>
        </ul>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Travel Security", href: "/security/travel", description: "Complete travel security checklist" },
        { label: "Digital Nomad Kit", href: "/guides/digital-nomad-security-kit", description: "Essential security hardware" },
        { label: "Device Encryption", href: "/guides/device-encryption-guide", description: "Encrypt your drives" },
        { label: "Social Engineering", href: "/security/social-engineering", description: "How USB drops work" },
      ]} />
    </article>
  );
}
