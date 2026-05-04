import Link from "next/link";

interface CTABannerProps {
  provider: {
    name: string;
    id: string;
    priceRange: string;
    rating: number;
    affiliate: { trackingBaseUrl: string };
  };
  headline?: string;
  countryName?: string;
}

export default function CTABanner({ provider, headline, countryName }: CTABannerProps) {
  const defaultHeadline = countryName
    ? `Get ${provider.name} for ${countryName}`
    : `Get ${provider.name} — Our Top Pick`;

  return (
    <div className="relative overflow-hidden my-10 rounded-2xl text-white">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 dark:from-blue-700 dark:via-blue-800 dark:to-indigo-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative p-7 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/providers/${provider.id}.svg`}
              alt={`${provider.name} logo`}
              width={56}
              height={56}
              className="w-14 h-14 shrink-0 rounded-xl object-contain bg-white p-2 ring-1 ring-white/20 shadow-lg"
              loading="lazy"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">
                {headline || defaultHeadline}
              </h3>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-blue-100">
                <div className="inline-flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {provider.rating}/5
                </div>
                <span className="text-blue-300/60">·</span>
                <span>From {provider.priceRange}</span>
                <span className="text-blue-300/60">·</span>
                <span className="hidden sm:inline">30-day money-back</span>
              </div>
            </div>
          </div>
          <a
            href={provider.affiliate.trackingBaseUrl}
            rel="noopener noreferrer sponsored"
            className="shrink-0 inline-flex items-center gap-1.5 px-6 py-3 bg-white text-blue-700 font-bold text-sm rounded-xl hover:bg-blue-50 shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            Get {provider.name}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        <p className="text-[11px] text-blue-200 mt-4 pt-4 border-t border-white/10">
          Affiliate link — see our{" "}
          <Link href="/affiliate-disclosure" className="underline underline-offset-2 hover:text-white">
            disclosure
          </Link>
        </p>
      </div>
    </div>
  );
}
