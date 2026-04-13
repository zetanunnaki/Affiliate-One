import Link from "next/link";

interface LinkCardProps {
  href: string;
  title: string;
  description: string;
  badge?: string;
}

export default function LinkCard({ href, title, description, badge }: LinkCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden block p-5 my-5 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 not-prose"
    >
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1 leading-snug">
              {title}
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          {badge && (
            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30 rounded-full">
              {badge}
            </span>
          )}
          <svg className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
