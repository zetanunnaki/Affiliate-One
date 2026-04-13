import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import type { PostFrontmatter } from "@/types";

interface MoneyLayoutProps {
  frontmatter: PostFrontmatter;
  children: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function MoneyLayout({
  frontmatter,
  children,
  breadcrumbs,
}: MoneyLayoutProps) {
  const defaultBreadcrumbs = breadcrumbs || [
    { label: "Home", href: "/" },
    { label: "Best Of", href: "/best/vpn" },
    { label: frontmatter.title },
  ];

  return (
    <>
      {/* ═══ DARK HERO ═══ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.08),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="[&_nav]:text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-slate-500">
            <Breadcrumbs items={defaultBreadcrumbs} />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 mt-5 mb-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Editor&apos;s picks
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-[1.1] mb-5">
            {frontmatter.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-6">
            {frontmatter.description}
          </p>

          <div className="pt-5 border-t border-white/10 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-slate-400 [&_time]:text-slate-400 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0">
            <Byline authorId={frontmatter.author} updatedAt={frontmatter.updatedAt} />
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight">
          {children}
        </div>

        {/* Citations */}
        {frontmatter.citations && frontmatter.citations.length > 0 && (
          <section className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Sources &amp; Citations
            </h2>
            <ol className="space-y-2">
              {frontmatter.citations.map((citation, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-600 dark:text-slate-400 break-words flex gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800"
                >
                  <span className="flex items-center justify-center w-6 h-6 shrink-0 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[11px] font-bold">
                    {i + 1}
                  </span>
                  <span>{citation}</span>
                </li>
              ))}
            </ol>
          </section>
        )}
      </article>
    </>
  );
}
