import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { getAuthorById } from "@/lib/data";

interface RelatedPostsProps {
  currentSlug: string;
  category?: string;
  limit?: number;
}

export default function RelatedPosts({
  currentSlug,
  category,
  limit = 3,
}: RelatedPostsProps) {
  const allPosts = getAllPosts("guides");
  const related = allPosts
    .filter((p) => p.slug !== currentSlug)
    .filter((p) => !category || p.frontmatter.category === category)
    .slice(0, limit);

  if (related.length === 0) return null;

  return (
    <section className="my-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-md shadow-cyan-500/25">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan-600 dark:text-cyan-400">
            Continue learning
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Related Guides
          </h2>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {related.map((post) => {
          const author = getAuthorById(post.frontmatter.author);
          return (
            <Link
              key={post.slug}
              href={`/guides/${post.slug}`}
              className="group relative flex flex-col p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="inline-flex w-fit items-center gap-1 px-2 py-0.5 mb-3 text-[10px] font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                {post.frontmatter.category}
              </span>

              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 leading-snug line-clamp-2">
                {post.frontmatter.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4 flex-1">
                {post.frontmatter.description}
              </p>

              {author && (
                <div className="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={author.headshot}
                    alt={author.name}
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-700"
                    loading="lazy"
                  />
                  <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400 truncate flex-1">
                    {author.name}
                  </span>
                  <svg className="w-3 h-3 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
