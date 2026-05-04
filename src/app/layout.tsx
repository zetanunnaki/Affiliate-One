import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import GlobalStructuredData from "@/components/seo/GlobalStructuredData";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";
import AdSense from "@/components/seo/AdSense";
import { SOCIAL } from "@/lib/social";
import LazyOverlays from "@/components/ui/LazyOverlays";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BuySecureVPN — Remote Work Security & VPN Guides",
    template: "%s | BuySecureVPN",
  },
  description:
    "Independent security guides for remote workers. Expert-tested VPN reviews, public Wi-Fi safety guides, and cybersecurity resources for working from anywhere.",
  metadataBase: new URL("https://buysecurevpn.com"),
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "BuySecureVPN",
  },
  openGraph: {
    type: "website",
    siteName: "BuySecureVPN",
    locale: "en_US",
    images: [
      {
        url: "/images/og/og-default.webp",
        width: 1200,
        height: 675,
        alt: "BuySecureVPN — Independent VPN reviews and security guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: `@${SOCIAL.twitter.handle}`,
    creator: `@${SOCIAL.twitter.handle}`,
    images: ["/images/og/og-default.webp"],
  },
  ...(SOCIAL.pinterest.verificationCode && {
    other: {
      "p:domain_verify": SOCIAL.pinterest.verificationCode,
    },
  }),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://flagcdn.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://flagcdn.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg">
          Skip to main content
        </a>
        <GlobalStructuredData />
        <GoogleAnalytics />
        <AdSense />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        {/* Spacer so sticky mobile CTA doesn't cover the last bit of footer */}
        <div className="h-20 lg:hidden" aria-hidden="true" />
        <Footer />
        <LazyOverlays />
      </body>
    </html>
  );
}
