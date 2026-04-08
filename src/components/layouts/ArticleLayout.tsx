import Link from "next/link";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import TableOfContents from "@/components/ui/TableOfContents";
import FeedbackWidget from "@/components/ui/FeedbackWidget";
import type { PostFrontmatter } from "@/types";

interface ArticleLayoutProps {
  frontmatter: PostFrontmatter;
  children: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function ArticleLayout({
  frontmatter,
  children,
  breadcrumbs,
}: ArticleLayoutProps) {
  const defaultBreadcrumbs = breadcrumbs || [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: frontmatter.title },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    dateModified: frontmatter.updatedAt,
    author: { "@type": "Person", name: frontmatter.author },
  };

  return (
    <>
      <ReadingProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ── Hero header ── full-width subtle gradient */}
      <div className="bg-gradient-to-b from-zinc-50 via-white to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
          <Breadcrumbs items={defaultBreadcrumbs} />

          {/* Category pill */}
          {frontmatter.category && (
            <Link
              href={`/guides/category/${frontmatter.category}`}
              className="inline-flex items-center px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
            >
              {frontmatter.category.charAt(0).toUpperCase() + frontmatter.category.slice(1)}
            </Link>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15] mb-5">
            {frontmatter.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl mb-6">
            {frontmatter.description}
          </p>

          <Byline authorId={frontmatter.author} updatedAt={frontmatter.updatedAt} />
        </div>
      </div>

      {/* ── Content + Sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-12">

          {/* ── Main article ── */}
          <article className="flex-1 min-w-0 max-w-3xl">

            {/* Premium typography — the reading experience */}
            <div className="
              prose prose-zinc dark:prose-invert max-w-none

              prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-[1.65rem] prose-h2:mt-14 prose-h2:mb-4 prose-h2:pb-3
              prose-h2:border-b prose-h2:border-zinc-100 prose-h2:dark:border-zinc-800
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-3

              prose-p:text-[1.0625rem] prose-p:leading-[1.85] prose-p:text-zinc-600 prose-p:dark:text-zinc-350
              prose-li:text-[1.0625rem] prose-li:leading-[1.8]

              prose-a:text-blue-600 prose-a:dark:text-blue-400 prose-a:font-medium
              prose-a:no-underline prose-a:border-b prose-a:border-blue-200 prose-a:dark:border-blue-800
              hover:prose-a:border-blue-500 hover:prose-a:dark:border-blue-400

              prose-strong:text-zinc-900 prose-strong:dark:text-zinc-100 prose-strong:font-semibold

              prose-blockquote:border-l-[3px] prose-blockquote:border-blue-500
              prose-blockquote:bg-blue-50/60 prose-blockquote:dark:bg-blue-950/30
              prose-blockquote:rounded-r-xl prose-blockquote:py-2 prose-blockquote:pr-5 prose-blockquote:not-italic

              prose-code:bg-zinc-100 prose-code:dark:bg-zinc-800/80
              prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
              prose-code:text-[0.875rem] prose-code:font-medium
              prose-code:before:content-none prose-code:after:content-none

              prose-pre:bg-zinc-900 prose-pre:dark:bg-zinc-950 prose-pre:rounded-xl
              prose-pre:border prose-pre:border-zinc-800

              prose-table:border prose-table:border-zinc-200 prose-table:dark:border-zinc-700
              prose-table:rounded-xl prose-table:overflow-hidden
              prose-th:bg-zinc-50 prose-th:dark:bg-zinc-800/80 prose-th:text-xs prose-th:uppercase
              prose-th:tracking-wider prose-th:font-semibold
              prose-td:border-t prose-td:border-zinc-100 prose-td:dark:border-zinc-800

              prose-img:rounded-2xl prose-img:shadow-lg prose-img:border prose-img:border-zinc-200 prose-img:dark:border-zinc-700

              prose-hr:border-zinc-100 prose-hr:dark:border-zinc-800 prose-hr:my-12
            ">
              {children}
            </div>

            {/* ── Engagement zone ── */}
            <div className="mt-14 space-y-10">

              <FeedbackWidget pageId={frontmatter.title} />

              {/* Ad placeholder */}
              {frontmatter.adsEnabled !== false && (
                <div className="p-6 bg-gradient-to-r from-zinc-50 to-zinc-100/80 dark:from-zinc-800/50 dark:to-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 text-center">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Advertisement</p>
                </div>
              )}

              {/* ── CTA card ── */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-blue-950/40 border border-blue-100 dark:border-blue-900/50 rounded-2xl p-7 sm:p-8">
                {/* Decorative circle */}
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-blue-100/50 dark:bg-blue-800/20 blur-2xl" />

                <h2 className="relative text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  Ready to Get Protected?
                </h2>
                <p className="relative text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                  Take the next step in securing your remote work setup.
                </p>
                <div className="relative grid sm:grid-cols-3 gap-3">
                  {[
                    { label: "Best VPN 2026", href: "/best/vpn", desc: "Our top picks", icon: "🛡️" },
                    { label: "Password Manager", href: "/best/password-manager", desc: "Secure accounts", icon: "🔑" },
                    { label: "Security Checklist", href: "/tools/security-checklist", desc: "45-item audit", icon: "✅" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-start gap-3 p-4 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm rounded-xl border border-blue-100/80 dark:border-blue-800/30 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-0.5 transition-all duration-200 group"
                    >
                      <span className="text-xl mt-0.5">{link.icon}</span>
                      <div>
                        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors block">
                          {link.label}
                        </span>
                        <span className="text-xs text-zinc-500">{link.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* ── Citations ── */}
              {frontmatter.citations && frontmatter.citations.length > 0 && (
                <section className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                    Sources & Citations
                  </h2>
                  <ol className="space-y-2">
                    {frontmatter.citations.map((citation, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] font-semibold text-zinc-500 shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="break-words">{citation}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}
            </div>
          </article>

          {/* ── Sticky TOC sidebar ── */}
          {frontmatter.toc !== false && <TableOfContents />}
        </div>
      </div>
    </>
  );
}
