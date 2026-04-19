import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VPN Cost Calculator — Find the Cheapest Plan",
  description:
    "Calculate and compare VPN costs based on your devices, contract length, and feature needs. Find the best deal from NordVPN, Proton VPN & FastestVPN.",
  alternates: { canonical: "https://buysecurevpn.com/tools/vpn-calculator/" },
  openGraph: {
    title: "VPN Cost Calculator — Find the Cheapest Plan",
    description:
      "Calculate and compare VPN costs based on your devices, contract length, and feature needs.",
    url: "https://buysecurevpn.com/tools/vpn-calculator/",
    type: "website",
  },
};

export default function VpnCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
