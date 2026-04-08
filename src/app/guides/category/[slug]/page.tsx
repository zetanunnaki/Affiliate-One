import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import categoriesData from "@/data/categories.json";
import { getAllPosts } from "@/lib/mdx";
import { getAuthorById } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return categoriesData.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const category = categoriesData.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.label} Guides`,
    description: category.description,
  };
}

export default async function CategoryPage(props: PageProps) {
  const { slug } = await props.params;
  const category = categoriesData.find((c) => c.slug === slug);
  if (!category) notFound();

  const allPosts = getAllPosts("guides");
  const posts = allPosts.filter((p) => p.frontmatter.category === slug);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-10">
        <nav className="text-sm text-zinc-500 mb-4">
          <Link href="/guides" className="hover:text-blue-600">
            Guides
          </Link>{" "}
          / <span className="text-zinc-700 dark:text-zinc-300">{category.label}</span>
        </nav>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
          {category.label} Guides
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">{category.description}</p>
      </header>

      {posts.length === 0 ? (
        <p className="text-zinc-500 text-center py-12">
          No guides in this category yet. Check back soon!
        </p>
      ) : (
        <div className="space-y-5">
          {posts.map((post) => {
            const author = getAuthorById(post.frontmatter.author);
            return (
              <Link
                key={post.slug}
                href={`/guides/${post.slug}`}
                className="block p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
              >
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 mb-1">
                  {post.frontmatter.title}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2 line-clamp-2">
                  {post.frontmatter.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-zinc-500">
                  {author && <span>By {author.name}</span>}
                  <span>&middot;</span>
                  <time dateTime={post.frontmatter.updatedAt}>
                    {new Date(post.frontmatter.updatedAt).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                  </time>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Other categories */}
      <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-700">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Other Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categoriesData
            .filter((c) => c.slug !== slug)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/guides/category/${c.slug}`}
                className="px-4 py-2 text-sm border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                {c.label}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
