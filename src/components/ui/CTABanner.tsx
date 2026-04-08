import Link from "next/link";

interface CTABannerProps {
  provider: {
    name: string;
    id: string;
    priceRange: string;
    rating: number;
  };
  headline?: string;
  countryName?: string;
}

export default function CTABanner({ provider, headline, countryName }: CTABannerProps) {
  const defaultHeadline = countryName
    ? `Get ${provider.name} for ${countryName}`
    : `Get ${provider.name} — Our Top Pick`;

  return (
    <div className="my-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl text-white">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold mb-1">{headline || defaultHeadline}</h3>
          <p className="text-sm text-blue-100">
            {provider.rating}/5 rating · Starting from {provider.priceRange} · 30-day money-back guarantee
          </p>
        </div>
        <Link
          href={`/vpn/providers/${provider.id}`}
          className="px-6 py-2.5 bg-white text-blue-700 font-semibold text-sm rounded-lg hover:bg-blue-50 transition-colors shrink-0"
        >
          View Deal
        </Link>
      </div>
      <p className="text-xs text-blue-200 mt-3">
        Affiliate link — see our <Link href="/affiliate-disclosure" className="underline">disclosure</Link>
      </p>
    </div>
  );
}
