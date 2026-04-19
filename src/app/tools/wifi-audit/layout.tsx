import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wi-Fi Security Audit — Free Risk Assessment Tool",
  description:
    "Answer 12 quick questions to assess your public Wi-Fi security habits. Get a personalized risk score and actionable recommendations.",
  alternates: { canonical: "https://buysecurevpn.com/tools/wifi-audit/" },
  openGraph: {
    title: "Wi-Fi Security Audit — Free Risk Assessment",
    description:
      "Assess your public Wi-Fi security habits with our 12-question audit. Get a personalized risk score and recommendations.",
    url: "https://buysecurevpn.com/tools/wifi-audit/",
    type: "website",
  },
};

export default function WifiAuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
