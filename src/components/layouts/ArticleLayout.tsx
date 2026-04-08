import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import TableOfContents from "@/components/ui/TableOfContents";
import Newsletter from "@/components/ui/Newsletter";
import InternalLinks from "@/components/ui/InternalLinks";
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

  // Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    dateModified: frontmatter.updatedAt,
    author: {
      "@type": "Person",
      name: frontmatter.author,
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ReadingProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Breadcrumbs items={defaultBreadcrumbs} />

      <div className="flex gap-10">
        {/* Main content */}
        <article className="flex-1 min-w-0 max-w-4xl">
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
              {frontmatter.title}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
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

          {/* Ad placeholder */}
          {frontmatter.adsEnabled !== false && (
            <div className="my-8 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-center text-xs text-zinc-500">
              [Ad Placeholder]
            </div>
          )}

          {/* Newsletter */}
          <div className="my-8">
            <Newsletter source="article-bottom" />
          </div>

          {/* Action box */}
          <InternalLinks
            title="Recommended Next Steps"
            links={[
              {
                label: "Best VPN for Remote Work (2026)",
                href: "/best/vpn",
                description: "Our top picks for secure remote work",
              },
              {
                label: "Best Password Managers (2026)",
                href: "/best/password-manager",
                description: "Protect your accounts with the right tool",
              },
              {
                label: "Public Wi-Fi Safety Guide",
                href: "/security/public-wifi",
                description: "Stay safe on shared networks",
              },
            ]}
          />

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

        {/* Sticky TOC sidebar */}
        {frontmatter.toc !== false && <TableOfContents />}
      </div>
    </div>
  );
}
