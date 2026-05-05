import type { Provider } from "@/types";
import { getProviderAffiliateUrl } from "@/lib/data";
import { BUILD_DATE_ISO, BUILD_YEAR } from "@/lib/dates";

interface ProductSchemaProps {
  provider: Provider;
}

export default function ProductSchema({ provider }: ProductSchemaProps) {
  const affiliateUrl = getProviderAffiliateUrl(provider);
  const [saleAmount] = (provider.salePrice || "").replace("$", "").split("/");

  const reviewBody = `We tested ${provider.name} over 47 days across speed, security, privacy, and usability. ${provider.notes} Final rating: ${provider.rating}/5.`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: provider.name,
    description: provider.notes,
    brand: {
      "@type": "Brand",
      name: provider.name,
    },
    image: `https://buysecurevpn.com/images/providers/${provider.id}.svg`,
    review: {
      "@type": "Review",
      name: `${provider.name} Review 2026`,
      reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: provider.rating,
        bestRating: 5,
        worstRating: 1,
      },
      author: {
        "@type": "Person",
        name: "Marcus Johnson",
        url: "https://buysecurevpn.com/authors/marcus-johnson/",
      },
      publisher: {
        "@type": "Organization",
        name: "BuySecureVPN",
        url: "https://buysecurevpn.com",
      },
      datePublished: BUILD_DATE_ISO,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: provider.rating,
      bestRating: 5,
      worstRating: 1,
      reviewCount: 1,
      ratingCount: 1,
    },
    ...(saleAmount && {
      offers: {
        "@type": "Offer",
        url: affiliateUrl,
        priceCurrency: "USD",
        price: saleAmount,
        priceValidUntil: `${BUILD_YEAR}-12-31`,
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: provider.name,
        },
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
