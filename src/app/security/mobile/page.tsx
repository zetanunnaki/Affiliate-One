import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Mobile Security Guide for Remote Workers (2026)",
  description: "Secure your phone for remote work. iOS and Android settings, VPN setup, app permissions, and protection against theft and SIM swaps.",
};

export default function MobileSecurityPage() {
  const faqs = [
    { question: "Is iOS or Android more secure?", answer: "Both are secure when properly configured. iOS has a more locked-down ecosystem with stricter app review. Android offers more flexibility but requires more user diligence with app permissions and sideloading. For most remote workers, either platform is fine with proper settings." },
    { question: "Do I need antivirus on my phone?", answer: "On iOS: no, Apple's sandboxing makes traditional antivirus unnecessary. On Android: a reputable security app (Bitdefender, Norton) adds value if you install apps from outside the Play Store. Most importantly, keep your OS updated — security patches matter more than antivirus." },
    { question: "Should I use a VPN on my phone?", answer: "Yes, especially on public Wi-Fi. Mobile VPN apps from NordVPN, Proton VPN, and FastestVPN are lightweight and have minimal battery impact with WireGuard protocol. Enable auto-connect for Wi-Fi networks." },
    { question: "What if my phone is stolen?", answer: "If encrypted (default on modern phones with passcode) and remote wipe is enabled, your data is protected. Use Find My iPhone / Find My Device to locate, lock, or wipe. Change passwords for logged-in accounts from another device." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Mobile Security" }]} />

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Mobile Security Guide for Remote Workers
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          Your phone contains your email, 2FA codes, banking apps, and work
          tools. It&apos;s your most sensitive device — here&apos;s how to secure it.
        </p>
        <Byline authorId="sarah-chen" updatedAt="2026-01-11" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      {/* iOS settings */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">iOS Security Checklist</h2>
        <div className="p-5 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            {[
              "Use a 6-digit passcode minimum (alphanumeric is better)",
              "Enable Face ID / Touch ID",
              "Enable Find My iPhone (Settings > [Name] > Find My)",
              "Enable 'Erase Data' after 10 failed passcode attempts",
              "Install a VPN app and enable auto-connect for Wi-Fi",
              "Enable Lockdown Mode if you're a high-risk target",
              "Disable lock screen notifications for sensitive apps",
              "Review app permissions: Settings > Privacy & Security",
              "Enable automatic iOS updates",
              "Use iCloud Advanced Data Protection for E2E encryption",
              "Disable Siri on lock screen",
              "Enable Stolen Device Protection (iOS 17+)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded border-2 border-zinc-300 dark:border-zinc-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Android settings */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Android Security Checklist</h2>
        <div className="p-5 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            {[
              "Use a strong PIN (6+ digits) or password",
              "Enable fingerprint / face unlock",
              "Enable Find My Device (Settings > Security > Find My Device)",
              "Verify encryption is active (Settings > Security > Encryption)",
              "Install a VPN app and enable auto-connect",
              "Only install apps from Google Play Store",
              "Disable 'Install from unknown sources'",
              "Review app permissions: Settings > Apps > [App] > Permissions",
              "Enable automatic system updates",
              "Use Work Profile for BYOD (separates work and personal data)",
              "Enable Google Play Protect scanning",
              "Disable USB debugging unless actively developing",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded border-2 border-zinc-300 dark:border-zinc-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VPN on mobile */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">VPN on Mobile: What You Need to Know</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-2">Battery Impact</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">With WireGuard protocol, expect 3-5% additional battery drain. IKEv2 is similar. OpenVPN uses more battery (8-12%). All are acceptable for daily use.</p>
          </div>
          <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-2">Auto-Connect Settings</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Configure your VPN to auto-connect when joining Wi-Fi networks. Most VPN apps have this in Settings. On Android, you can also set an &quot;Always-on VPN&quot; at the OS level.</p>
          </div>
          <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-2">Split Tunneling (Android)</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Android supports split tunneling — route work apps through VPN while letting personal apps connect directly. iOS does not support this.</p>
          </div>
          <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-2">Kill Switch</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Android has OS-level &quot;Block connections without VPN&quot; (Settings &gt; VPN &gt; gear icon). iOS VPN apps implement their own kill switches.</p>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <InternalLinks links={[
        { label: "SIM Swap Protection", href: "/guides/sim-swap-protection", description: "Protect your phone number" },
        { label: "2FA Guide", href: "/security/2fa", description: "Secure your accounts" },
        { label: "Best VPN 2026", href: "/best/vpn", description: "Top VPN mobile apps" },
        { label: "BYOD Security", href: "/guides/byod-security-guide", description: "Using personal devices for work" },
      ]} />
    </article>
  );
}
