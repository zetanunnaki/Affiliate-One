import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/ui/PrintButton";

export const metadata: Metadata = {
  title: "Printable Remote Work Security Checklist (2026)",
  description: "A comprehensive, printable security checklist for remote workers. Cover all the essentials: VPN, 2FA, passwords, devices, and network security.",
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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Remote Work Security Checklist
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          {totalItems} items across {sections.length} categories. Print this page
          or save it as PDF for offline reference.
        </p>
        <div className="flex gap-3 print:hidden">
          <PrintButton />
          <Link
            href="/security/remote-work"
            className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          >
            Read Full Guide
          </Link>
        </div>
      </header>

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
        <p>SecureWork Remote Work Security Checklist — securework.example.com — Updated April 2026</p>
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
  );
}
