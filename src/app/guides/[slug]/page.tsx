import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { estimateReadingTime } from "@/lib/reading-time";
import ArticleLayout from "@/components/layouts/ArticleLayout";
import ReadingTime from "@/components/ui/ReadingTime";
import ShareButtons from "@/components/ui/ShareButtons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs("guides").map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug("guides", slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      modifiedTime: post.frontmatter.updatedAt,
    },
  };
}

export default async function GuidePage(props: PageProps) {
  const { slug } = await props.params;
  const post = getPostBySlug("guides", slug);
  if (!post) notFound();

  const readingMinutes = estimateReadingTime(post.content);

  const { content: mdxContent } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: false },
  });

  return (
    <ArticleLayout frontmatter={post.frontmatter}>
      <div className="mb-4 -mt-2">
        <ReadingTime minutes={readingMinutes} />
      </div>
      {mdxContent}
      <ShareButtons title={post.frontmatter.title} />
    </ArticleLayout>
  );
}
