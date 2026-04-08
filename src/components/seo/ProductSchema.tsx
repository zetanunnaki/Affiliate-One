import type { Provider } from "@/types";

interface ProductSchemaProps {
  provider: Provider;
}

export default function ProductSchema({ provider }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: provider.name,
    description: provider.notes,
    brand: {
      "@type": "Brand",
      name: provider.name,
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: provider.rating,
        bestRating: 5,
        worstRating: 1,
      },
      author: {
        "@type": "Organization",
        name: "SecureWork",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: provider.rating,
      bestRating: 5,
      reviewCount: 1,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
