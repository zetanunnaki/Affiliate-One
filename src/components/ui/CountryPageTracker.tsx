"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

interface CountryPageTrackerProps {
  countryIso2: string;
  countryName: string;
}

export default function CountryPageTracker({
  countryIso2,
  countryName,
}: CountryPageTrackerProps) {
  useEffect(() => {
    trackEvent({
      name: "country_page_view",
      params: { countryIso2, countryName },
    });
  }, [countryIso2, countryName]);

  return null;
}
