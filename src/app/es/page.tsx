import Link from "next/link";
import type { Metadata } from "next";
import { getAllCountries } from "@/lib/data";

export const metadata: Metadata = {
  title: "BuySecureVPN — Guías de Seguridad para Trabajo Remoto y VPN",
  description: "Guías independientes de seguridad para trabajadores remotos. Reseñas de VPN, seguridad Wi-Fi pública y recursos de ciberseguridad para trabajar desde cualquier lugar.",
  alternates: {
    canonical: "/es/",
    languages: { "x-default": "/", en: "/", fr: "/fr/", es: "/es/", pt: "/pt/" },
  },
};

export default function SpanishHomePage() {
  const countries = getAllCountries();
  const spanishCountries = countries.filter((c) =>
    c.languages.includes("es") || ["MX", "CO", "AR", "CL", "PE", "EC", "DO", "GT", "CR", "PA", "UY", "BO", "PY", "SV", "HN", "NI", "CU", "VE"].includes(c.iso2)
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            Trabaja de Forma Segura Desde
            <span className="text-blue-600 dark:text-blue-400"> Cualquier Lugar</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
            Guías de seguridad independientes y probadas por expertos para trabajadores remotos.
            Reseñas de VPN, seguridad Wi-Fi y ciberseguridad cubriendo {spanishCountries.length}+ países hispanohablantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/best/vpn" className="px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              Mejor VPN 2026
            </Link>
            <Link href="/countries" className="px-6 py-3 text-base font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors">
              Buscar Tu País
            </Link>
          </div>
        </div>
      </section>

      {/* Spanish-speaking countries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
          Mejor VPN por País Hispanohablante
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {spanishCountries.map((country) => (
            <Link
              key={country.iso2}
              href={`/vpn/best/${country.slug}/`}
              className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition-all"
            >
              <div>
                <span className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{country.nameEn}</span>
                <span className="block text-xs text-zinc-500">Mejor VPN 2026</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Topics in Spanish */}
      <section className="bg-zinc-50 dark:bg-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
            Temas de Seguridad
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "¿Qué es una VPN?", href: "/vpn/what-is-vpn", desc: "Explicación sencilla de cómo funciona una VPN y por qué la necesitas." },
              { title: "Seguridad Wi-Fi Pública", href: "/security/public-wifi", desc: "Protégete en redes Wi-Fi de hoteles, aeropuertos y cafeterías." },
              { title: "Autenticación de Dos Factores", href: "/security/2fa", desc: "Añade una capa extra de seguridad a todas tus cuentas." },
              { title: "Gestores de Contraseñas", href: "/security/password-managers", desc: "Deja de reutilizar contraseñas. Aprende a usar un gestor." },
              { title: "Seguridad para Viajeros", href: "/security/travel", desc: "Lista de verificación de seguridad para nómadas digitales." },
              { title: "VPN para Trabajo Remoto", href: "/vpn/intent/remote-work", desc: "Las mejores VPN probadas para trabajadores remotos." },
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
          La mayoría de nuestras guías detalladas están actualmente en inglés. Esta página sirve como punto de entrada
          en español para los países hispanohablantes. Estamos trabajando en traducir más contenido.{" "}
          <Link href="/" className="text-blue-600 hover:underline">Ver sitio en inglés</Link>
        </p>
      </section>
    </div>
  );
}
