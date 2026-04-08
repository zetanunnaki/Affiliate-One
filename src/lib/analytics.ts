// Analytics event types per PRD Section 12
export type AnalyticsEvent =
  | {
      name: "affiliate_click";
      params: {
        providerId: string;
        pageType: "country" | "money" | "provider" | "intent" | "best";
        countryIso2?: string;
        intent?: string;
      };
    }
  | { name: "toc_click"; params: { heading: string; slug: string } }
  | { name: "country_page_view"; params: { countryIso2: string; countryName: string } };

/**
 * Track an analytics event.
 *
 * In production, this sends events to your analytics provider
 * (GA4, Plausible, PostHog, etc.). For now it logs to console
 * in development and can be wired up to any provider.
 */
export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", event.name, event.params);
  }

  // Google Analytics 4 (if gtag is loaded)
  if ("gtag" in window) {
    (window as Record<string, unknown> & { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      event.name,
      event.params
    );
  }

  // Generic dataLayer push (GTM compatible)
  if ("dataLayer" in window && Array.isArray((window as Record<string, unknown>).dataLayer)) {
    ((window as Record<string, unknown>).dataLayer as unknown[]).push({
      event: event.name,
      ...event.params,
    });
  }
}

/**
 * Build an affiliate click tracker for a specific context.
 * Use this in components that render affiliate CTAs.
 */
export function createAffiliateClickHandler(
  providerId: string,
  pageType: AnalyticsEvent extends { name: "affiliate_click" } ? AnalyticsEvent["params"]["pageType"] : string,
  countryIso2?: string,
  intent?: string
) {
  return () => {
    trackEvent({
      name: "affiliate_click",
      params: { providerId, pageType: pageType as "country", countryIso2, intent },
    });
  };
}
