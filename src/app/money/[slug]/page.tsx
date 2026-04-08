import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
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
  };
}

export default async function MoneyPage(props: PageProps) {
  const { slug } = await props.params;
  const post = getPostBySlug("money", slug);
  if (!post) notFound();

  const { content: mdxContent } = await compileMDX({
    source: post.content,
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
