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
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={defaultBreadcrumbs} />

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          {frontmatter.title}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
          {frontmatter.description}
        </p>
        <Byline
          authorId={frontmatter.author}
          updatedAt={frontmatter.updatedAt}
        />
      </header>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        {children}
      </div>

      {/* Citations */}
      {frontmatter.citations && frontmatter.citations.length > 0 && (
        <section className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-700">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            Sources & Citations
          </h2>
          <ol className="list-decimal pl-5 space-y-1">
            {frontmatter.citations.map((citation, i) => (
              <li
                key={i}
                className="text-sm text-zinc-600 dark:text-zinc-400 break-words"
              >
                {citation}
              </li>
            ))}
          </ol>
        </section>
      )}
    </article>
  );
}
