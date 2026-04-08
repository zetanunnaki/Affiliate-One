import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/components/ui/Byline";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import { getAllCountries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Travel Security Checklist (2026) — Digital Nomad & Business Travel Guide",
  description:
    "Security checklist for digital nomads and business travelers. Protect your devices, data, and accounts while traveling internationally.",
};

export default function TravelSecurityPage() {
  const countries = getAllCountries();
  const restrictedCountries = countries.filter((c) =>
    c.riskFlags.includes("censorship") || c.riskFlags.includes("restricted-platforms")
  );

  const faqs = [
    {
      question: "Should I set up a VPN before traveling?",
      answer: "Absolutely. Install and test your VPN before departure. In some countries (China, Russia, UAE), VPN websites may be blocked locally, making it difficult to download one after arrival. Pre-configure your VPN with multiple server locations and ensure the kill switch is enabled.",
    },
    {
      question: "Is it safe to use hotel Wi-Fi?",
      answer: "Hotel Wi-Fi is a shared network — other guests and potentially staff can see network traffic. Always use a VPN on hotel Wi-Fi. Avoid accessing sensitive accounts (banking, work systems) without an active VPN connection. Consider using your phone's hotspot for sensitive transactions.",
    },
    {
      question: "What should I do if my device is stolen while traveling?",
      answer: "If your device has full-disk encryption and a strong password, your data is protected even if the device is stolen. Use Find My Device (Apple/Google) to locate, lock, or remotely wipe the device. Report the theft to local police and your company's IT department. Change passwords for any accounts logged in on the device.",
    },
    {
      question: "Should I bring my main work laptop when traveling internationally?",
      answer: "For high-risk destinations, consider a travel-only device with minimal data. Some companies provide travel laptops that contain only what's needed for the trip. If you bring your main device, enable full-disk encryption, use a strong password, and keep it with you at all times.",
    },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Travel Security Checklist (2026)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          Whether you&apos;re a digital nomad, business traveler, or vacation
          worker, international travel introduces unique security risks.
          Follow this checklist to protect your devices, data, and accounts.
        </p>
        <Byline authorId="elena-rodriguez" updatedAt="2026-04-07" />
      </header>

      {/* Before you travel */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Before You Travel
        </h2>
        <div className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
          <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            {[
              "Install and test your VPN — verify it works with the kill switch enabled",
              "Enable full-disk encryption on all devices (BitLocker / FileVault)",
              "Back up all important data to an encrypted cloud service",
              "Enable Find My Device / remote wipe on all devices",
              "Update all software (OS, browser, VPN app, security tools)",
              "Enable 2FA on all critical accounts using an authenticator app",
              "Save backup recovery codes in your password manager",
              "Note your embassy contact info and bank's international number",
              "Research your destination's internet restrictions and VPN legality",
              "Consider a travel-only device for high-risk destinations",
              "Set up international roaming or purchase a local SIM in advance",
              "Inform your bank of travel dates to prevent card blocks",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded border-2 border-zinc-300 dark:border-zinc-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* While traveling */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          While Traveling
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">Do</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>+ Keep VPN active on all public networks</li>
              <li>+ Lock devices when not in your hands</li>
              <li>+ Use a privacy screen in public places</li>
              <li>+ Keep devices in carry-on luggage (never checked)</li>
              <li>+ Use hotel safe for devices you leave behind</li>
              <li>+ Monitor accounts for unusual activity</li>
            </ul>
          </div>
          <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg">
            <h3 className="text-sm font-semibold text-red-800 dark:text-red-300 mb-2">Don&apos;t</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>- Use public/shared computers for any login</li>
              <li>- Connect to unknown Wi-Fi networks without VPN</li>
              <li>- Leave devices visible in vehicles</li>
              <li>- Use USB charging stations (juice jacking risk)</li>
              <li>- Announce travel plans on social media in real-time</li>
              <li>- Ignore software update prompts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Countries with restrictions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Countries With Internet Restrictions
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          These countries have known internet censorship or platform
          restrictions. Set up your VPN before arrival.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {restrictedCountries.map((c) => (
            <Link
              key={c.iso2}
              href={`/vpn/best/${c.slug}`}
              className="p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 block">
                {c.nameEn}
              </span>
              <span className="text-xs text-zinc-500">
                {c.riskFlags
                  .filter((f) => f === "censorship" || f === "restricted-platforms")
                  .map((f) => f === "censorship" ? "Censorship" : "Platform restrictions")
                  .join(" · ")}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* After you return */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          After You Return
        </h2>
        <div className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li>1. Run a full malware scan on all travel devices</li>
            <li>2. Change passwords for any accounts accessed on public networks</li>
            <li>3. Review account activity for unauthorized access</li>
            <li>4. Remove any temporary travel apps or networks</li>
            <li>5. Update travel device software if behind</li>
          </ul>
        </div>
      </section>

      <FAQ items={faqs} />

      <InternalLinks
        links={[
          { label: "Best VPN for Travel", href: "/vpn/intent/travel", description: "VPNs tested for travelers" },
          { label: "Public Wi-Fi Safety", href: "/security/public-wifi", description: "Protect yourself on shared networks" },
          { label: "Country VPN Directory", href: "/countries", description: "Find VPN info for your destination" },
          { label: "2FA Guide", href: "/security/2fa", description: "Secure your accounts before traveling" },
        ]}
      />
    </article>
  );
}
