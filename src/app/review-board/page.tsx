import type { Metadata } from "next";
import Link from "next/link";
import { getAllAuthors } from "@/lib/data";
import LegalPageHero from "@/components/layouts/LegalPageHero";

export const metadata: Metadata = {
  title: "Review Board",
  description: "Meet BuySecureVPN's editorial review board responsible for ensuring accuracy and quality.",
};

const reviewProcess = [
  {
    title: "Security content",
    desc: "Reviewed for technical accuracy, threat model assumptions, and tested device/OS versions.",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "VPN reviews",
    desc: "Verified against our testing methodology with documented test dates and conditions.",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Country pages",
    desc: "Checked for accuracy of local internet context, legal information, and travel advice.",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600 dark:text-violet-400",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "All content",
    desc: "Verified for factual accuracy, clear sourcing, and distinction between facts and opinions.",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
];

export default function ReviewBoardPage() {
  const authors = getAllAuthors();

  return (
    <div>
      <LegalPageHero
        eyebrow="Quality control"
        title="Review Board"
        description="Our review board ensures all published content meets our standards for accuracy, fairness, and usefulness."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-3">
            Members
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Editorial review members
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
                  {author.credentials.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {author.credentials.map((c) => (
                        <span key={c} className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {author.bio}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-3">
            How it works
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Review process
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {reviewProcess.map((p) => (
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
      </div>
    </div>
  );
}
