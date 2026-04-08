/**
 * Generate static RSS feed at build time.
 * Run: npx tsx scripts/generate-feed.ts
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BASE_URL = "https://zetanunnaki.github.io/Affiliate-One";
const CONTENT_DIR = path.join(process.cwd(), "content", "guides");
const OUT_DIR = path.join(process.cwd(), "public");

interface Post {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  author: string;
  category: string;
}

function getAllPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, f), "utf-8");
      const { data } = matter(raw);
      return {
        slug: f.replace(/\.mdx$/, ""),
        title: data.title,
        description: data.description,
        updatedAt: data.updatedAt,
        author: data.author,
        category: data.category,
      };
    })
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

function main() {
  const posts = getAllPosts();

  const items = posts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/guides/${post.slug}/</link>
      <guid isPermaLink="true">${BASE_URL}/guides/${post.slug}/</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.updatedAt).toUTCString()}</pubDate>
      <category>${post.category}</category>
    </item>`
    )
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SecureWork — Remote Work Security Guides</title>
    <link>${BASE_URL}</link>
    <description>Independent security guides for remote workers.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  fs.writeFileSync(path.join(OUT_DIR, "feed.xml"), feed);
  console.log(`Generated feed.xml with ${posts.length} items.`);
}

main();
