import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VPN Directory — 202 Countries & Territories",
  description:
    "Find the best VPN for any country. Browse 202 countries with risk flags, regional filters, and expert VPN recommendations for every destination.",
  alternates: { canonical: "https://buysecurevpn.com/countries/" },
  openGraph: {
    title: "VPN Directory — 202 Countries & Territories",
    description:
      "Find the best VPN for any country. Browse 202 countries with risk flags, regional filters, and expert recommendations.",
    url: "https://buysecurevpn.com/countries/",
    type: "website",
    images: [{ url: "/images/og/og-countries.webp", width: 1200, height: 675, alt: "VPN Directory — 202 Countries" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-countries.webp"] },
};

export default function CountriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
