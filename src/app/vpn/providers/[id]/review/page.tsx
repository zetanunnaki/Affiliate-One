import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { customMDXComponents } from "@/lib/mdx-custom-components";
import { getProviderById } from "@/lib/data";
import MoneyLayout from "@/components/layouts/MoneyLayout";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs("providers").map((slug) => ({ id: slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { id } = await props.params;
  const post = getPostBySlug("providers", id);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: `/vpn/providers/${id}/review/` },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: `/vpn/providers/${id}/review/`,
      type: "article",
      images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: `${post.frontmatter.title}` }],
    },
    twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
  };
}

export default async function ProviderReviewPage(props: PageProps) {
  const { id } = await props.params;
  const post = getPostBySlug("providers", id);
  if (!post) notFound();

  const provider = getProviderById(id);

  const { content: mdxContent } = await compileMDX({
    source: post.content,
    components: customMDXComponents,
    options: { parseFrontmatter: false, mdxOptions: { remarkPlugins: [remarkGfm] } },
  });

  return (
    <MoneyLayout
      frontmatter={post.frontmatter}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "VPN Providers", href: "/vpn/providers" },
        { label: provider?.name ?? id, href: `/vpn/providers/${id}` },
        { label: "Full Review" },
      ]}
    >
      {mdxContent}
    </MoneyLayout>
  );
}
