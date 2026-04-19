import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search — BuySecureVPN",
  description:
    "Search across 600+ pages of VPN reviews, security guides, country recommendations, and tools on BuySecureVPN.",
  alternates: { canonical: "https://buysecurevpn.com/search/" },
  robots: { index: false, follow: true },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
