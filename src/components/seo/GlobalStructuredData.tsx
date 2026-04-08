export default function GlobalStructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SecureWork",
    url: "https://securework.example.com",
    description:
      "Independent security guides for remote workers. Expert-tested VPN reviews, public Wi-Fi safety guides, and cybersecurity resources.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://securework.example.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SecureWork",
    url: "https://securework.example.com",
    logo: "https://securework.example.com/logo.png",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@securework.example.com",
      contactType: "customer support",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
