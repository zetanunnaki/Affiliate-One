import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VPN Country Quiz — Which VPN Do You Need?",
  description:
    "Answer 5 quick questions about your travel plans and security needs. We'll recommend the best VPN and country-specific tips for your destination.",
  alternates: { canonical: "https://buysecurevpn.com/tools/country-quiz/" },
  openGraph: {
    title: "VPN Country Quiz — Which VPN Do You Need?",
    description:
      "Answer 5 questions about your travel plans. We'll recommend the best VPN for your destination.",
    url: "https://buysecurevpn.com/tools/country-quiz/",
    type: "website",
  },
};

export default function CountryQuizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
