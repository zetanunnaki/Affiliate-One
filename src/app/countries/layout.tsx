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
  },
};

export default function CountriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
