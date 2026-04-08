import { getAllPosts } from "@/lib/mdx";
import { getAuthorById } from "@/lib/data";

const BASE_URL = "https://securework.example.com";

export async function GET() {
  const posts = getAllPosts("guides");

  const items = posts
    .map((post) => {
      const author = getAuthorById(post.frontmatter.author);
      return `    <item>
      <title><![CDATA[${post.frontmatter.title}]]></title>
      <link>${BASE_URL}/guides/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/guides/${post.slug}</guid>
      <description><![CDATA[${post.frontmatter.description}]]></description>
      <pubDate>${new Date(post.frontmatter.updatedAt).toUTCString()}</pubDate>
      ${author ? `<author>${author.name}</author>` : ""}
      <category>${post.frontmatter.category}</category>
    </item>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SecureWork — Remote Work Security Guides</title>
    <link>${BASE_URL}</link>
    <description>Independent security guides for remote workers. Expert-tested VPN reviews, public Wi-Fi safety guides, and cybersecurity resources.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
