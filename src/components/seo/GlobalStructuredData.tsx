import { getSocialUrls } from "@/lib/social";

export default function GlobalStructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BuySecureVPN",
    url: "https://buysecurevpn.com",
    description:
      "Independent security guides for remote workers. Expert-tested VPN reviews, public Wi-Fi safety guides, and cybersecurity resources.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://buysecurevpn.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BuySecureVPN",
    url: "https://buysecurevpn.com",
    logo: "https://buysecurevpn.com/logo.svg",
    foundingDate: "2024",
    sameAs: getSocialUrls(),
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@buysecurevpn.com",
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
