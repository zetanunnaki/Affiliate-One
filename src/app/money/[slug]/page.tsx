import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { customMDXComponents } from "@/lib/mdx-custom-components";
import MoneyLayout from "@/components/layouts/MoneyLayout";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs("money").map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug("money", slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: `/money/${slug}/` },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      url: `/money/${slug}/`,
      modifiedTime: post.frontmatter.updatedAt,
      images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: post.frontmatter.title }],
    },
    twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
  };
}

export default async function MoneyPage(props: PageProps) {
  const { slug } = await props.params;
  const post = getPostBySlug("money", slug);
  if (!post) notFound();

  const { content: mdxContent } = await compileMDX({
    source: post.content,
    components: customMDXComponents,
    options: { parseFrontmatter: false },
  });

  return (
    <MoneyLayout
      frontmatter={post.frontmatter}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Best Of", href: "/best" },
        { label: post.frontmatter.title },
      ]}
    >
      {mdxContent}
    </MoneyLayout>
  );
}
