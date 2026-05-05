interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  image?: string;
}

export default function ArticleSchema({
  title,
  description,
  url,
  datePublished = "2026-01-15",
  dateModified = "2026-04-28",
  authorName = "BuySecureVPN Editorial Team",
  authorUrl = "https://buysecurevpn.com/about/",
  image = "https://buysecurevpn.com/images/og/og-default.webp",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `https://buysecurevpn.com${url}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "BuySecureVPN",
      url: "https://buysecurevpn.com",
      logo: {
        "@type": "ImageObject",
        url: "https://buysecurevpn.com/icon-512.png",
      },
    },
    image,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://buysecurevpn.com${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
