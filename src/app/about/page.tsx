import Link from "next/link";
import type { Metadata } from "next";
import { getAllAuthors } from "@/lib/data";

export const metadata: Metadata = {
  title: "About BuySecureVPN",
  description:
    "BuySecureVPN provides independent, expert-tested security guides for remote workers. Learn about our team, mission, and editorial standards.",
};

const principles = [
  {
    title: "Independent testing",
    desc: "We purchase and test every product we review using our own methodology.",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "No pay-for-play",
    desc: "Providers cannot pay for a higher rating or favorable review.",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600 dark:text-rose-400",
    icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
  },
  {
    title: "Regular updates",
    desc: "We re-test products quarterly and update our recommendations.",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Transparent methodology",
    desc: "Our testing criteria and process are published openly.",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600 dark:text-violet-400",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
];

export default function AboutPage() {
  const authors = getAllAuthors();

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About BuySecureVPN",
    url: "https://buysecurevpn.com/about/",
    mainEntity: {
      "@type": "Organization",
      name: "BuySecureVPN",
      url: "https://buysecurevpn.com",
      logo: "https://buysecurevpn.com/logo.svg",
      description: "Independent publication dedicated to helping remote workers stay secure online with expert-tested VPN reviews and security guides.",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressLocality: "[City]",
        addressRegion: "[State/Region]",
        addressCountry: "[Country]",
        streetAddress: "[Business address]",
      },
      publishingPrinciples: "https://buysecurevpn.com/editorial-policy/",
      member: authors.map((a) => ({
        "@type": "Person",
        name: a.name,
        jobTitle: a.role,
        description: a.bio,
        image: `https://buysecurevpn.com${a.headshot}`,
        url: `https://buysecurevpn.com/authors/${a.id}/`,
        knowsAbout: a.credentials || [],
        ...(a.sameAs && a.sameAs.length > 0 && { sameAs: a.sameAs }),
      })),
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full text-[13px] text-blue-200 mb-5">
            <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            About us
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">
            About BuySecureVPN
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            An independent publication dedicated to helping remote workers stay
            secure online. We test VPNs, review security tools, and write practical
            guides based on real-world experience.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Mission */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-3">
            Our mission
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Security guidance for remote workers, everywhere
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Remote work is the future, but it comes with unique security challenges.
            Our mission is to provide clear, accurate, and actionable security
            guidance to help remote workers protect their data, privacy, and
            productivity — no matter where they work from.
          </p>
        </section>

        {/* Team */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-3">
            Editorial team
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Meet the team
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {authors.map((author) => (
              <Link
                key={author.id}
                href={`/authors/${author.id}`}
                className="group flex items-start gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={author.headshot}
                  alt={author.name}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-xl object-cover shrink-0 ring-2 ring-white dark:ring-slate-800 shadow-sm group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {author.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{author.role}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {author.bio}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-3">
            Our principles
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            How we work
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {principles.map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-md transition-all"
              >
                <div className={`shrink-0 w-11 h-11 rounded-xl ${p.iconBg} ${p.iconColor} flex items-center justify-center`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company details */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-3">
            Company information
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Legal Details
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                Founded
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white">
                2024
              </div>
            </div>
            <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                Registration
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                [Registration details]
              </div>
            </div>
            <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                Business Address
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                [Business address]
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50/60 dark:from-blue-950/30 dark:to-indigo-950/20 border border-blue-100 dark:border-blue-900/40 rounded-2xl text-center">
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            Questions about our editorial process?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/editorial-policy"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors shadow-md shadow-blue-600/25"
            >
              Editorial Policy
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-full transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
