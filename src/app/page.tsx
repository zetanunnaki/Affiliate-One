import Link from "next/link";
import { getAllCountries, getAllProviders, getAllIntents } from "@/lib/data";

export default function Home() {
  const countries = getAllCountries();
  const providers = getAllProviders();
  const intents = getAllIntents();
  const featuredCountries = countries.slice(0, 12);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            Work Securely From
            <span className="text-blue-600 dark:text-blue-400"> Anywhere</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
            Independent, expert-tested security guides for remote workers.
            VPN reviews, public Wi-Fi safety, and cybersecurity resources
            covering {countries.length}+ countries worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/best/vpn"
              className="px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Best VPN 2026
            </Link>
            <Link
              href="/countries"
              className="px-6 py-3 text-base font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
            >
              Find Your Country
            </Link>
          </div>
        </div>
      </section>

      {/* Hub sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
          Security Topics
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "VPN Guides",
              desc: "Compare providers, learn setup, understand protocols",
              href: "/vpn",
              icon: "🔒",
            },
            {
              title: "Public Wi-Fi",
              desc: "Stay safe on hotel, airport, and café networks",
              href: "/security/public-wifi",
              icon: "📶",
            },
            {
              title: "2FA & Accounts",
              desc: "Protect your accounts with two-factor auth",
              href: "/security/2fa",
              icon: "🔑",
            },
            {
              title: "Password Managers",
              desc: "Never reuse a password again",
              href: "/security/password-managers",
              icon: "🗝️",
            },
          ].map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
            >
              <span className="text-3xl mb-3 block">{hub.icon}</span>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 mb-1">
                {hub.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {hub.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured countries */}
      <section className="bg-zinc-50 dark:bg-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Best VPN by Country
            </h2>
            <Link
              href="/countries"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View all {countries.length} countries &rarr;
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredCountries.map((country) => (
              <Link
                key={country.iso2}
                href={`/vpn/best/${country.slug}`}
                className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition-all"
              >
                <span className="text-2xl">{getFlagEmoji(country.iso2)}</span>
                <div>
                  <span className="font-medium text-sm text-zinc-900 dark:text-zinc-100">
                    {country.nameEn}
                  </span>
                  <span className="block text-xs text-zinc-500">
                    Best VPN 2026
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top providers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
          Top VPN Providers We Review
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.slice(0, 3).map((provider) => (
            <Link
              key={provider.id}
              href={`/vpn/providers/${provider.id}`}
              className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {provider.name}
                </h3>
                <span className="text-sm font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                  {provider.rating}/5
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                {provider.notes}
              </p>
              <span className="text-sm font-medium text-blue-600">
                Read review &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-zinc-50 dark:bg-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
            Find the Right VPN for Your Needs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {intents.map((intent) => (
              <Link
                key={intent.id}
                href={`/vpn/intent/${intent.slug}`}
                className="p-6 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  VPN for {intent.label}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {intent.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function getFlagEmoji(iso2: string): string {
  return String.fromCodePoint(
    ...iso2
      .toUpperCase()
      .split("")
      .map((c) => 0x1f1e6 - 65 + c.charCodeAt(0))
  );
}
