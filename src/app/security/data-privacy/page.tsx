import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Data Privacy Guide for Remote Workers (2026)",
  description:
    "How to protect your personal data while working remotely. Data minimization, privacy tools, and reducing your digital footprint.",
  alternates: { canonical: "/security/data-privacy/" },
  openGraph: {
    title: "Data Privacy Guide for Remote Workers (2026)",
    description: "How to protect your personal data while working remotely. Data minimization, privacy tools, and reducing your digital footprint.",
    type: "article",
    url: "/security/data-privacy/",
    images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: "Data Privacy Guide" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
};

export default function DataPrivacyPage() {
  const faqs = [
    { question: "What data am I leaking right now?", answer: "More than you think: your ISP logs every site you visit, Google tracks your searches and location, social media collects behavioral data, apps share data with advertisers, and your browser fingerprint is nearly unique. A VPN, privacy browser, and careful app permissions reduce this significantly." },
    { question: "Is privacy dead in 2026?", answer: "No, but it requires effort. The tools exist (VPNs, encrypted email, privacy browsers, E2E messaging) — you just need to use them. Perfect privacy is impossible, but reducing your exposure from 'everything is tracked' to 'mostly protected' is achievable in an afternoon." },
    { question: "Does my employer have a right to monitor my work activity?", answer: "On company devices and company accounts: generally yes. On personal devices: only if you've agreed to monitoring (BYOD policies). Know what your company monitors and keep personal activity off work devices and accounts." },
  ];

  const layers = [
    { title: "Network Privacy", desc: "Hide your traffic from ISPs and local networks", tools: "VPN (encrypts all traffic), DNS-over-HTTPS (encrypts DNS queries)", link: "/best/vpn" },
    { title: "Browser Privacy", desc: "Stop tracking across websites", tools: "Firefox/Brave, uBlock Origin, DuckDuckGo search, cookie auto-delete", link: "/guides/browser-privacy-setup" },
    { title: "Communication Privacy", desc: "Keep messages and calls private", tools: "Signal for messaging, ProtonMail for email, VoIP over VPN", link: "/guides/secure-messaging-guide" },
    { title: "Storage Privacy", desc: "Protect files at rest", tools: "Full-disk encryption, Proton Drive/Cryptomator for cloud, password manager", link: "/guides/cloud-storage-security" },
    { title: "Identity Privacy", desc: "Minimize your digital footprint", tools: "Email aliases, privacy-focused search, social media settings, data broker opt-outs", link: "/guides/social-media-privacy" },
    { title: "Location Privacy", desc: "Stop broadcasting where you are", tools: "VPN hides IP location, disable location services per-app, review photo EXIF data", link: null },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Data Privacy" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Data Privacy Guide for Remote Workers</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">Your personal data is collected by ISPs, tech companies, advertisers, and data brokers. Here&apos;s how to take back control layer by layer.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-13" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">The 6 Layers of Privacy</h2>
        <div className="space-y-3">
          {layers.map((l, i) => (
            <div key={l.title} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{i + 1}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{l.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">{l.desc}</p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300"><strong>Tools:</strong> {l.tools}</p>
                  {l.link && <Link href={l.link} className="text-sm text-blue-600 hover:underline mt-1 inline-block">Learn more &rarr;</Link>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Quick Privacy Wins (30 Minutes)</h2>
        <div className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
          <ol className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>5 min:</strong> Switch default search engine to DuckDuckGo</li>
            <li><strong>5 min:</strong> Install uBlock Origin browser extension</li>
            <li><strong>5 min:</strong> Enable DNS-over-HTTPS in your browser</li>
            <li><strong>5 min:</strong> Review and revoke unnecessary app permissions on your phone</li>
            <li><strong>5 min:</strong> Turn on your VPN and set it to auto-connect</li>
            <li><strong>5 min:</strong> Check haveibeenpwned.com for all your email addresses</li>
          </ol>
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Privacy Laws Worldwide", href: "/guides/privacy-laws-worldwide", description: "Your rights by country" },
        { label: "Browser Privacy Setup", href: "/guides/browser-privacy-setup", description: "Stop browser tracking" },
        { label: "Best VPN for Privacy", href: "/money/best-vpn-privacy", description: "Maximum anonymity VPNs" },
        { label: "Social Media Privacy", href: "/guides/social-media-privacy", description: "Lock down every platform" },
      ]} />
    </article>
  );
}
