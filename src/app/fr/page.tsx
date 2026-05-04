import Link from "next/link";
import type { Metadata } from "next";
import { getAllCountries } from "@/lib/data";

export const metadata: Metadata = {
  title: "BuySecureVPN — Guides de Sécurité pour le Travail à Distance et VPN",
  description: "Guides de sécurité indépendants pour les travailleurs à distance. Avis sur les VPN, sécurité Wi-Fi public et ressources de cybersécurité.",
  alternates: {
    canonical: "/fr/",
    languages: { "x-default": "/", en: "/", fr: "/fr/", es: "/es/", pt: "/pt/" },
  },
};

export default function FrenchHomePage() {
  const countries = getAllCountries();
  const frenchCountries = countries.filter((c) =>
    c.languages.includes("fr") || ["FR", "BE", "CH", "CA", "SN", "CI", "CM", "ML", "BF", "NE", "TD", "GA", "TG", "BJ", "GN", "DJ", "CF", "BI", "MG", "TN", "MA", "DZ", "NC", "PF", "MF", "LU", "MC"].includes(c.iso2)
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            Travaillez en Sécurité Depuis
            <span className="text-blue-600 dark:text-blue-400"> N&apos;importe Où</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
            Guides de sécurité indépendants et testés par des experts pour les travailleurs à distance.
            Avis sur les VPN, sécurité Wi-Fi et cybersécurité couvrant {frenchCountries.length}+ pays francophones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/best/vpn" className="px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              Meilleur VPN 2026
            </Link>
            <Link href="/countries" className="px-6 py-3 text-base font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors">
              Trouver Votre Pays
            </Link>
          </div>
        </div>
      </section>

      {/* French-speaking countries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
          Meilleur VPN par Pays Francophone
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {frenchCountries.map((country) => (
            <Link
              key={country.iso2}
              href={`/vpn/best/${country.slug}/`}
              className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition-all"
            >
              <div>
                <span className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{country.nameEn}</span>
                <span className="block text-xs text-zinc-500">Meilleur VPN 2026</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Topics in French */}
      <section className="bg-zinc-50 dark:bg-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
            Sujets de Sécurité
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Qu'est-ce qu'un VPN ?", href: "/vpn/what-is-vpn", desc: "Explication simple du fonctionnement d'un VPN et pourquoi vous en avez besoin." },
              { title: "Sécurité Wi-Fi Public", href: "/security/public-wifi", desc: "Protégez-vous sur les réseaux Wi-Fi des hôtels, aéroports et cafés." },
              { title: "Authentification à Deux Facteurs", href: "/security/2fa", desc: "Ajoutez une couche de sécurité supplémentaire à tous vos comptes." },
              { title: "Gestionnaires de Mots de Passe", href: "/security/password-managers", desc: "Arrêtez de réutiliser vos mots de passe. Apprenez à utiliser un gestionnaire." },
              { title: "Sécurité en Voyage", href: "/security/travel", desc: "Liste de vérification de sécurité pour les nomades numériques." },
              { title: "VPN pour le Télétravail", href: "/vpn/intent/remote-work", desc: "Les meilleurs VPN testés pour les travailleurs à distance." },
            ].map((topic) => (
              <Link key={topic.href} href={topic.href} className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-md transition-shadow bg-white dark:bg-zinc-800 group">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 mb-1">{topic.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{topic.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Note about language */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-sm text-zinc-500">
          La plupart de nos guides détaillés sont actuellement en anglais. Cette page sert de point d&apos;entrée
          en français pour les pays francophones. Nous travaillons à traduire plus de contenu.{" "}
          <Link href="/" className="text-blue-600 hover:underline">Voir le site en anglais</Link>
        </p>
      </section>
    </div>
  );
}
