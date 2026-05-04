import type { Provider } from "@/types";
import { getProviderAffiliateUrl } from "@/lib/data";

interface ProductSchemaProps {
  provider: Provider;
}

export default function ProductSchema({ provider }: ProductSchemaProps) {
  const affiliateUrl = getProviderAffiliateUrl(provider);
  const [saleAmount] = (provider.salePrice || "").replace("$", "").split("/");

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
      reviewRating: {
        "@type": "Rating",
        ratingValue: provider.rating,
        bestRating: 5,
        worstRating: 1,
      },
      author: {
        "@type": "Organization",
        name: "BuySecureVPN",
      },
      datePublished: "2026-04-07",
    },
    ...(saleAmount && {
      offers: {
        "@type": "Offer",
        url: affiliateUrl,
        priceCurrency: "USD",
        price: saleAmount,
        priceValidUntil: "2026-12-31",
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
