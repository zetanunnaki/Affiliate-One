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
    <section className="my-8">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
        Related Guides
      </h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {related.map((post) => {
          const author = getAuthorById(post.frontmatter.author);
          return (
            <Link
              key={post.slug}
              href={`/guides/${post.slug}`}
              className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
            >
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 mb-1 line-clamp-2">
                {post.frontmatter.title}
              </h3>
              <p className="text-xs text-zinc-500 line-clamp-2 mb-2">
                {post.frontmatter.description}
              </p>
              <span className="text-xs text-zinc-400">
                {author?.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
