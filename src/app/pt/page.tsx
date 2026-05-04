import Link from "next/link";
import type { Metadata } from "next";
import { getAllCountries } from "@/lib/data";

export const metadata: Metadata = {
  title: "BuySecureVPN — As Melhores VPNs Testadas por Especialistas",
  description: "Guias de segurança independentes para trabalhadores remotos. Análises de VPN, segurança de Wi-Fi público e recursos de cibersegurança.",
  alternates: {
    canonical: "/pt/",
    languages: { "x-default": "/", en: "/", fr: "/fr/", es: "/es/", pt: "/pt/" },
  },
};

export default function PortugueseHomePage() {
  const countries = getAllCountries();
  const portugueseCountries = countries.filter((c) =>
    c.languages.includes("pt") || ["BR", "PT", "MZ", "AO", "CV", "GW", "ST", "TL", "MO"].includes(c.iso2)
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            Trabalhe com Segurança de
            <span className="text-blue-600 dark:text-blue-400"> Qualquer Lugar</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
            Guias de segurança independentes e testados por especialistas para trabalhadores remotos.
            Análises de VPN, segurança de Wi-Fi e cibersegurança cobrindo {portugueseCountries.length}+ países lusófonos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/best/vpn" className="px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              Melhor VPN 2026
            </Link>
            <Link href="/countries" className="px-6 py-3 text-base font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors">
              Encontrar Seu País
            </Link>
          </div>
        </div>
      </section>

      {/* Portuguese-speaking countries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
          Melhor VPN por País Lusófono
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portugueseCountries.map((country) => (
            <Link
              key={country.iso2}
              href={`/vpn/best/${country.slug}/`}
              className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition-all"
            >
              <div>
                <span className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{country.nameEn}</span>
                <span className="block text-xs text-zinc-500">Melhor VPN 2026</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Topics in Portuguese */}
      <section className="bg-zinc-50 dark:bg-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
            Tópicos de Segurança
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "O Que é uma VPN?", href: "/vpn/what-is-vpn", desc: "Explicação simples de como funciona uma VPN e por que você precisa de uma." },
              { title: "Segurança de Wi-Fi Público", href: "/security/public-wifi", desc: "Proteja-se em redes Wi-Fi de hotéis, aeroportos e cafés." },
              { title: "Autenticação de Dois Fatores", href: "/security/2fa", desc: "Adicione uma camada extra de segurança a todas as suas contas." },
              { title: "Gerenciadores de Senhas", href: "/security/password-managers", desc: "Pare de reutilizar senhas. Aprenda a usar um gerenciador." },
              { title: "Segurança em Viagens", href: "/security/travel", desc: "Lista de verificação de segurança para nômades digitais." },
              { title: "VPN para Trabalho Remoto", href: "/vpn/intent/remote-work", desc: "As melhores VPNs testadas para trabalhadores remotos." },
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
          A maioria dos nossos guias detalhados está atualmente em inglês. Esta página serve como ponto de entrada
          em português para os países lusófonos. Estamos trabalhando para traduzir mais conteúdo.{" "}
          <Link href="/" className="text-blue-600 hover:underline">Ver o site em inglês</Link>
        </p>
      </section>
    </div>
  );
}
