import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/ui/PrintButton";
import TopVpnPicks from "@/components/ui/TopVpnPicks";
import { BUILD_MONTH_YEAR } from "@/lib/dates";

export const metadata: Metadata = {
  title: "Printable Remote Work Security Checklist (2026)",
  description: "A comprehensive, printable security checklist for remote workers. Cover all the essentials: VPN, 2FA, passwords, devices, and network security.",
  alternates: { canonical: "/tools/security-checklist/" },
  openGraph: {
    title: "Printable Remote Work Security Checklist (2026)",
    description: "A comprehensive, printable security checklist for remote workers. Cover all the essentials: VPN, 2FA, passwords, devices, and network security.",
    type: "website",
    url: "/tools/security-checklist/",
    images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: "Security Checklist" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
};

const sections = [
  {
    title: "Network Security",
    items: [
      "VPN installed and active on all work devices",
      "VPN kill switch enabled",
      "Auto-connect enabled for unknown networks",
      "Home router password changed from default",
      "Router firmware updated to latest version",
      "WPA3 (or WPA2-AES) encryption enabled on home Wi-Fi",
      "Separate Wi-Fi network for work devices (if possible)",
      "Guest network set up for IoT / personal devices",
    ],
  },
  {
    title: "Account Security",
    items: [
      "2FA enabled on email (Gmail, Outlook)",
      "2FA enabled on cloud storage (Google Drive, Dropbox, iCloud)",
      "2FA enabled on password manager",
      "2FA enabled on work tools (Slack, GitHub, AWS, etc.)",
      "2FA enabled on banking / financial accounts",
      "2FA method: authenticator app (not SMS)",
      "Backup / recovery codes saved securely",
      "Password manager installed with unique passwords",
      "Connected apps audited and unused ones removed",
    ],
  },
  {
    title: "Device Security",
    items: [
      "Full-disk encryption enabled (BitLocker / FileVault)",
      "OS auto-updates enabled",
      "Browser auto-updates enabled",
      "Firewall enabled",
      "Remote wipe configured (Find My Device)",
      "Screen lock after 2 minutes of inactivity",
      "Anti-malware / endpoint protection active",
      "Webcam cover when not in use",
    ],
  },
  {
    title: "Data Protection",
    items: [
      "Automated cloud backup for work files",
      "Local encrypted backup for critical documents",
      "Sensitive files stored in encrypted containers",
      "Work and personal data separated",
      "Old files and accounts properly deleted",
    ],
  },
  {
    title: "Behavioral Security",
    items: [
      "Phishing recognition training completed",
      "Verify unexpected requests through separate channels",
      "Privacy screen used in public workspaces",
      "No sensitive info discussed on public voice/video calls",
      "Social media does not reveal travel plans in real-time",
      "USB data blocker used for public charging",
      "Suspicious emails reported to IT / security team",
    ],
  },
  {
    title: "Travel Preparation",
    items: [
      "VPN downloaded and tested before departure",
      "Destination's internet restrictions researched",
      "Local SIM / eSIM arranged",
      "Devices backed up before travel",
      "Find My Device enabled on all devices",
      "Bank notified of travel dates",
      "Emergency contacts documented offline",
      "Travel-safe vault configured (1Password Travel Mode or similar)",
    ],
  },
];

export default function SecurityChecklistPage() {
  const totalItems = sections.reduce((sum, s) => sum + s.items.length, 0);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden print:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full text-[13px] text-blue-200 mb-5">
            <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Printable · {totalItems} items
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">
            Remote Work Security Checklist
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            {totalItems} items across {sections.length} categories. Print or save
            as PDF for offline reference.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8 print:block hidden">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Remote Work Security Checklist</h1>
          <p className="text-sm text-slate-600">{totalItems} items across {sections.length} categories.</p>
        </header>
      {/* Our Top 5 Picks */}
      <TopVpnPicks heading="Our Top 5 VPN Picks" eyebrow="Protect yourself" />

        <div className="flex gap-3 mb-8 print:hidden">
          <PrintButton />
          <Link
            href="/security/remote-work"
            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl transition-colors"
          >
            Read Full Guide
          </Link>
        </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3 pb-2 border-b border-zinc-200 dark:border-zinc-700">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="w-5 h-5 rounded border-2 border-zinc-300 dark:border-zinc-600 shrink-0 mt-0.5 print:border-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-700 text-xs text-zinc-500 print:text-zinc-600">
        <p>BuySecureVPN Remote Work Security Checklist — buysecurevpn.com — Updated {BUILD_MONTH_YEAR}</p>
        <p className="mt-1">Based on NIST Cybersecurity Framework 2.0, CISA Telework Security Guidance, and SANS Institute recommendations.</p>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          header nav, footer, .print\\:hidden, button { display: none !important; }
          body { font-size: 11pt; color: #000; }
          h1 { font-size: 18pt; }
          h2 { font-size: 14pt; page-break-after: avoid; }
          li { page-break-inside: avoid; }
        }
      `}</style>
      </div>
    </div>
  );
}
