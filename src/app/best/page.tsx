import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Of 2026 — Top Security Tools Compared",
  description:
    "Expert-tested comparisons of the best VPNs, password managers, and 2FA apps for remote workers in 2026.",
};

const bestOfPages = [
  {
    title: "Best VPN 2026",
    href: "/best/vpn",
    description: "We tested the top VPN services for speed, security, and privacy. NordVPN, Surfshark, FastestVPN, and more compared.",
    badge: "Most Popular",
  },
  {
    title: "Best Password Manager 2026",
    href: "/best/password-manager",
    description: "Compare 1Password, Bitwarden, Dashlane, and Proton Pass. Find the right password manager for your needs.",
    badge: "Essential",
  },
  {
    title: "Best 2FA App 2026",
    href: "/best/2fa-app",
    description: "Authy, Google Authenticator, YubiKey, and more. Authenticator apps and hardware keys ranked.",
    badge: "Security",
  },
];

export default function BestOfPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Best Of 2026
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Expert-tested, independently reviewed comparisons of the best
          security tools for remote workers. Updated quarterly.
        </p>
      </header>

      <div className="space-y-6">
        {bestOfPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="block p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
          >
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600">
                {page.title}
              </h2>
              <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 rounded-full shrink-0">
                {page.badge}
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              {page.description}
            </p>
            <span className="text-sm font-medium text-blue-600">
              Read comparison &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
