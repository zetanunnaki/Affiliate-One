import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { getAuthorById } from "@/lib/data";

export const metadata: Metadata = {
  title: "Security Guides — Expert-Written Remote Work Security Resources",
  description:
    "In-depth security guides for remote workers. VPN setup, public Wi-Fi safety, 2FA, password management, and more.",
};

const categoryColors: Record<string, { bg: string; text: string; icon: string }> = {
  vpn: {
    bg: "bg-blue-50 dark:bg-blue-900/30",
    text: "text-blue-700 dark:text-blue-300",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  security: {
    bg: "bg-indigo-50 dark:bg-indigo-900/30",
    text: "text-indigo-700 dark:text-indigo-300",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  travel: {
    bg: "bg-emerald-50 dark:bg-emerald-900/30",
    text: "text-emerald-700 dark:text-emerald-300",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  "public-wifi": {
    bg: "bg-cyan-50 dark:bg-cyan-900/30",
    text: "text-cyan-700 dark:text-cyan-300",
    icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0",
  },
};

export default function GuidesPage() {
  const posts = getAllPosts("guides");

  return (
    <div>
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
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full text-[13px] text-blue-200 mb-5">
            <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {posts.length} guides
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">
            Security Guides
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            In-depth, expert-written guides to help you stay secure while
            working remotely. Updated regularly with the latest best practices.
          </p>
        </div>
      </section>

      {/* ═══ GUIDES GRID ═══ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            const author = getAuthorById(post.frontmatter.author);
            const cat = categoryColors[post.frontmatter.category] || categoryColors.security;
            return (
              <Link
                key={post.slug}
                href={`/guides/${post.slug}`}
                className="group relative flex flex-col p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-xl hover:shadow-slate-200/40 dark:hover:shadow-black/30 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Category pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${cat.bg} ${cat.text} rounded-full`}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
                    </svg>
                    {post.frontmatter.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Read guide
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 leading-snug line-clamp-2">
                  {post.frontmatter.title}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5 line-clamp-3 flex-1">
                  {post.frontmatter.description}
                </p>

                {author && (
                  <div className="flex items-center gap-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={author.headshot}
                      alt={author.name}
                      width={28}
                      height={28}
                      className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-700"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">
                        {author.name}
                      </div>
                      <time
                        dateTime={post.frontmatter.updatedAt}
                        className="text-[10px] text-slate-400 dark:text-slate-500"
                      >
                        {new Date(post.frontmatter.updatedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <svg className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
