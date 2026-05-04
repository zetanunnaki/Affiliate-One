"use client";

import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"), {
  ssr: false,
});
const CookieConsent = dynamic(() => import("@/components/ui/CookieConsent"), {
  ssr: false,
});
const StickyMobileCta = dynamic(
  () => import("@/components/ui/StickyMobileCta"),
  { ssr: false }
);

export default function LazyOverlays() {
  return (
    <>
      <ScrollToTop />
      <StickyMobileCta />
      <CookieConsent />
    </>
  );
}
