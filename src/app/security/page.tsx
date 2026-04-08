import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Hub — Remote Work Security Guides",
  description:
    "Comprehensive security guides for remote workers. Learn about VPNs, public Wi-Fi safety, 2FA, password managers, and more.",
};

const topics = [
  {
    title: "Remote Work Security",
    href: "/security/remote-work",
    description:
      "Complete guide to securing your remote work setup. From VPNs to encrypted communications.",
  },
  {
    title: "Public Wi-Fi Safety",
    href: "/security/public-wifi",
    description:
      "Protect yourself on hotel, airport, café, and co-working space networks.",
  },
  {
    title: "Two-Factor Authentication",
    href: "/security/2fa",
    description:
      "Add a critical second layer of protection to your most important accounts.",
  },
  {
    title: "Password Managers",
    href: "/security/password-managers",
    description:
      "Stop reusing passwords. Learn how password managers work and which to choose.",
  },
  {
    title: "Travel Security",
    href: "/security/travel",
    description:
      "Security checklist for digital nomads and business travelers.",
  },
  {
    title: "Phishing & Social Engineering",
    href: "/security/phishing",
    description:
      "Recognize and avoid phishing attacks, social engineering, and scams.",
  },
];

export default function SecurityHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Security Hub
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Everything remote workers need to know about staying secure online.
          Expert-written guides covering VPNs, public Wi-Fi, authentication,
          and more.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
          >
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 mb-2">
              {topic.title}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {topic.description}
            </p>
            <span className="inline-block mt-3 text-sm font-medium text-blue-600">
              Read guide &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
