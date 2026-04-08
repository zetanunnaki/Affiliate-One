import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PostFrontmatter } from "@/types";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getContentDir(subdir: string): string {
  return path.join(CONTENT_DIR, subdir);
}

export function getAllSlugs(subdir: string): string[] {
  const dir = getContentDir(subdir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(
  subdir: string,
  slug: string
): { frontmatter: PostFrontmatter; content: string } | null {
  const filePath = path.join(getContentDir(subdir), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as PostFrontmatter,
    content,
  };
}

export function getAllPosts(subdir: string): {
  slug: string;
  frontmatter: PostFrontmatter;
}[] {
  const slugs = getAllSlugs(subdir);
  return slugs
    .map((slug) => {
      const post = getPostBySlug(subdir, slug);
      if (!post) return null;
      return { slug, frontmatter: post.frontmatter };
    })
    .filter(
      (p): p is { slug: string; frontmatter: PostFrontmatter } => p !== null
    )
    .sort(
      (a, b) =>
        new Date(b.frontmatter.updatedAt).getTime() -
        new Date(a.frontmatter.updatedAt).getTime()
    );
}
