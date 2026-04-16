import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/components/ui/Byline";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Remote Work Security Guide (2026) — Protect Your Digital Workspace",
  description:
    "Complete guide to securing your remote work setup. Learn about VPNs, encrypted communications, device security, and best practices for working from anywhere.",
};

export default function RemoteWorkSecurityPage() {
  const faqs = [
    {
      question: "What are the biggest security risks for remote workers?",
      answer:
        "The main risks include unsecured Wi-Fi networks, phishing attacks targeting remote employees, unpatched devices, weak passwords, and data leaks from personal devices. Using a VPN, enabling 2FA, and keeping software updated mitigates most of these risks.",
    },
    {
      question: "Do I need a VPN if I work from home?",
      answer:
        "Yes. A VPN encrypts your traffic even on your home network, preventing ISP monitoring and adding a layer of protection if your router is compromised. It's essential when accessing company resources or handling sensitive data.",
    },
    {
      question: "How do I secure my home office network?",
      answer:
        "Change your router's default password, enable WPA3 encryption, keep firmware updated, use a separate network for work devices, enable your firewall, and use a VPN for all work traffic.",
    },
    {
      question: "Should my company provide security tools?",
      answer:
        "Ideally yes — companies should provide VPN access, endpoint protection, and password managers. If yours doesn't, investing in personal security tools is worthwhile. Many quality VPNs and password managers cost under $5/month.",
    },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Remote Work Security Guide (2026)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          A complete guide to protecting your digital workspace. Whether you
          work from home, a café, or a co-working space, these practices will
          keep your data and your company&apos;s data safe.
        </p>
        <Byline authorId="sarah-chen" updatedAt="2026-03-06" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      {/* Core security layers */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          The 5 Layers of Remote Work Security
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1",
              title: "Network Security — Use a VPN",
              desc: "A VPN encrypts all your internet traffic, preventing eavesdropping on public or shared networks. This is the single most impactful security measure for remote workers.",
              link: { label: "Best VPN for Remote Work", href: "/vpn/intent/remote-work" },
            },
            {
              num: "2",
              title: "Authentication — Enable 2FA Everywhere",
              desc: "Two-factor authentication adds a second verification step beyond your password. Use an authenticator app (not SMS) for your email, cloud storage, and company accounts.",
              link: { label: "2FA Setup Guide", href: "/security/2fa" },
            },
            {
              num: "3",
              title: "Password Management — Use a Password Manager",
              desc: "Generate unique, strong passwords for every account. A password manager stores them securely so you only need to remember one master password.",
              link: { label: "Best Password Managers", href: "/security/password-managers" },
            },
            {
              num: "4",
              title: "Device Security — Keep Everything Updated",
              desc: "Enable automatic updates for your OS, browser, and apps. Use full-disk encryption (BitLocker on Windows, FileVault on Mac). Enable remote wipe capability.",
            },
            {
              num: "5",
              title: "Awareness — Recognize Phishing & Social Engineering",
              desc: "Remote workers are prime targets for phishing. Verify unexpected requests through a separate channel. Never click links in unsolicited emails asking for credentials.",
              link: { label: "Phishing Guide", href: "/security/phishing" },
            },
          ].map((layer) => (
            <div
              key={layer.num}
              className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-bold text-lg shrink-0">
                  {layer.num}
                </span>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                    {layer.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                    {layer.desc}
                  </p>
                  {layer.link && (
                    <Link
                      href={layer.link.href}
                      className="text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      {layer.link.label} &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security checklist */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Remote Work Security Checklist
        </h2>
        <div className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
          <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            {[
              "VPN installed and active on all work devices",
              "2FA enabled on email, cloud storage, and company accounts",
              "Password manager with unique passwords per account",
              "OS and browser auto-updates enabled",
              "Full-disk encryption enabled (BitLocker / FileVault)",
              "Firewall enabled on all devices",
              "Home router password changed from default",
              "WPA3 (or WPA2) Wi-Fi encryption enabled",
              "Separate Wi-Fi network for work devices (if possible)",
              "Remote wipe configured on mobile devices",
              "Webcam cover when not in use",
              "Regular backups of critical work files",
              "Screen lock after 2 minutes of inactivity",
              "Company security policy reviewed and followed",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded border-2 border-zinc-300 dark:border-zinc-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Working from public spaces */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Working From Public Spaces
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Cafés, co-working spaces, and airports introduce additional risks.
          Public Wi-Fi networks are shared and often unencrypted, making them
          easy targets for attackers.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">
              Do
            </h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>+ Always use your VPN on public Wi-Fi</li>
              <li>+ Use your phone&apos;s hotspot as a fallback</li>
              <li>+ Use a privacy screen on your laptop</li>
              <li>+ Verify the network name with staff</li>
              <li>+ Disable auto-connect to open networks</li>
            </ul>
          </div>
          <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg">
            <h3 className="text-sm font-semibold text-red-800 dark:text-red-300 mb-2">
              Don&apos;t
            </h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>- Access banking without a VPN</li>
              <li>- Leave your device unattended</li>
              <li>- Connect to &quot;Free Wi-Fi&quot; networks blindly</li>
              <li>- Share sensitive info on voice calls in public</li>
              <li>- Use shared/public computers for work</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          For a deeper dive, see our{" "}
          <Link
            href="/security/public-wifi"
            className="text-blue-600 hover:text-blue-700"
          >
            Public Wi-Fi Safety Guide
          </Link>
          .
        </p>
      </section>

      <FAQ items={faqs} />

      <InternalLinks
        title="Related Security Guides"
        links={[
          { label: "Best VPN for Remote Work", href: "/vpn/intent/remote-work", description: "Top VPNs tested for remote workers" },
          { label: "Public Wi-Fi Safety", href: "/security/public-wifi", description: "Stay safe on shared networks" },
          { label: "Two-Factor Authentication Guide", href: "/security/2fa", description: "Set up 2FA the right way" },
          { label: "Password Manager Guide", href: "/security/password-managers", description: "Stop reusing passwords" },
          { label: "Travel Security Checklist", href: "/security/travel", description: "Security for digital nomads" },
        ]}
      />
    </article>
  );
}
