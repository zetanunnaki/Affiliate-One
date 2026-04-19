import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare VPNs Side by Side — Interactive Tool",
  description:
    "Compare NordVPN, Surfshark, Proton VPN, and FastestVPN features, pricing, and performance side by side with our interactive comparison tool.",
  alternates: { canonical: "https://buysecurevpn.com/vpn/compare/" },
  openGraph: {
    title: "Compare VPNs Side by Side — Interactive Tool",
    description:
      "Compare NordVPN, Surfshark, Proton VPN & FastestVPN features, pricing, and performance side by side.",
    url: "https://buysecurevpn.com/vpn/compare/",
    type: "website",
  },
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
