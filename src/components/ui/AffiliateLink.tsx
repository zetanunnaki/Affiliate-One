"use client";

import { trackEvent } from "@/lib/analytics";

interface AffiliateLinkProps {
  href: string;
  providerId: string;
  pageType: "country" | "money" | "provider" | "intent" | "best";
  countryIso2?: string;
  intent?: string;
  className?: string;
  children: React.ReactNode;
}

export default function AffiliateLink({
  href,
  providerId,
  pageType,
  countryIso2,
  intent,
  className,
  children,
}: AffiliateLinkProps) {
  function handleClick() {
    trackEvent({
      name: "affiliate_click",
      params: { providerId, pageType, countryIso2, intent },
    });
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      rel="noopener noreferrer sponsored"
    >
      {children}
    </a>
  );
}
