import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { estimateReadingTime } from "@/lib/reading-time";
import { customMDXComponents } from "@/lib/mdx-custom-components";
import ArticleLayout from "@/components/layouts/ArticleLayout";
import ReadingTime from "@/components/ui/ReadingTime";
import ShareButtons from "@/components/ui/ShareButtons";
import RelatedPosts from "@/components/ui/RelatedPosts";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

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
  const ogImage = post.frontmatter.category === "vpn" ? "/images/og/og-vpn.webp"
    : post.frontmatter.category === "travel" ? "/images/og/og-travel.webp"
    : "/images/og/og-guides.webp";
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: `https://buysecurevpn.com/guides/${slug}/` },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.updatedAt,
      modifiedTime: post.frontmatter.updatedAt,
      authors: [post.frontmatter.author],
      url: `https://buysecurevpn.com/guides/${slug}/`,
      images: [{ url: ogImage, width: 1200, height: 675, alt: post.frontmatter.title }],
    },
    twitter: { card: "summary_large_image", images: [ogImage] },
  };
}

export default async function GuidePage(props: PageProps) {
  const { slug } = await props.params;
  const post = getPostBySlug("guides", slug);
  if (!post) notFound();

  const readingMinutes = estimateReadingTime(post.content);

  const { content: mdxContent } = await compileMDX({
    source: post.content,
    components: customMDXComponents,
    options: { parseFrontmatter: false },
  });

  return (
    <ArticleLayout frontmatter={post.frontmatter} slug={slug}>
      <div className="mb-4 -mt-2">
        <ReadingTime minutes={readingMinutes} />
      </div>
      {mdxContent}
      <ShareButtons title={post.frontmatter.title} />
      <RelatedPosts currentSlug={slug} category={post.frontmatter.category} />
    </ArticleLayout>
  );
}
