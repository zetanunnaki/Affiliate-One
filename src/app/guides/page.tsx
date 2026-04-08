import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { getAuthorById } from "@/lib/data";

export const metadata: Metadata = {
  title: "Security Guides — Expert-Written Remote Work Security Resources",
  description:
    "In-depth security guides for remote workers. VPN setup, public Wi-Fi safety, 2FA, password management, and more.",
};

export default function GuidesPage() {
  const posts = getAllPosts("guides");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Security Guides
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          In-depth, expert-written guides to help you stay secure while working
          remotely. Updated regularly with the latest best practices.
        </p>
      </header>

      <div className="space-y-6">
        {posts.map((post) => {
          const author = getAuthorById(post.frontmatter.author);
          return (
            <Link
              key={post.slug}
              href={`/guides/${post.slug}`}
              className="block p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
            >
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 mb-2">
                {post.frontmatter.title}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                {post.frontmatter.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                {author && <span>By {author.name}</span>}
                <span>&middot;</span>
                <time dateTime={post.frontmatter.updatedAt}>
                  {new Date(post.frontmatter.updatedAt).toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                  )}
                </time>
                {post.frontmatter.category && (
                  <>
                    <span>&middot;</span>
                    <span className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded">
                      {post.frontmatter.category}
                    </span>
                  </>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
