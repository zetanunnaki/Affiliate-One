import Link from "next/link";

interface InternalLinksProps {
  links: { label: string; href: string; description?: string }[];
  title?: string;
}

export default function InternalLinks({
  links,
  title = "Related Guides",
}: InternalLinksProps) {
  return (
    <section className="my-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-md shadow-violet-500/25">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-violet-600 dark:text-violet-400">
            Keep reading
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {title}
          </h2>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-start gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="shrink-0 w-9 h-9 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                {link.label}
              </div>
              {link.description && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">
                  {link.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
