import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "What Is a VPN? Simple Explanation for Non-Technical Users (2026)",
  description: "A clear, jargon-free explanation of what a VPN is, how it works, and why you might need one. Written for beginners.",
};

export default function WhatIsVpnPage() {
  const faqs = [
    { question: "Is using a VPN legal?", answer: "Yes, VPNs are legal in the vast majority of countries. They're standard business tools used by companies worldwide. A handful of authoritarian countries restrict VPN use — see our country directory for specifics." },
    { question: "Does a VPN slow down my internet?", answer: "Modern VPNs with WireGuard protocol typically reduce speed by only 5-15% — barely noticeable for most activities. If your VPN is much slower than that, you may need to switch servers or protocols." },
    { question: "Can I use a VPN on my phone?", answer: "Yes. All major VPN providers have apps for iOS and Android. The VPN encrypts all traffic from your phone, which is especially important when using mobile data or public Wi-Fi." },
    { question: "Do I need a VPN at home?", answer: "Yes, for privacy. Without a VPN, your ISP can see and log every website you visit. A VPN prevents this monitoring. It's also useful if you work from home with sensitive data." },
    { question: "What's the difference between a VPN and antivirus?", answer: "Different tools for different threats. Antivirus protects against malware on your device. A VPN encrypts your internet traffic and hides your IP address. You should use both for comprehensive security." },
    { question: "Can I watch Netflix with a VPN?", answer: "Yes, but it depends on the provider. NordVPN and ExpressVPN work reliably with Netflix in our testing. A VPN also lets you access your home Netflix library while traveling abroad." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "VPN", href: "/vpn" }, { label: "What Is a VPN?" }]} />

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          What Is a VPN? A Simple Explanation
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          No jargon. No technical background needed. Here&apos;s what a VPN
          actually does, how it works, and whether you need one.
        </p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-07" />
      </header>

      {/* Simple explanation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          The 30-Second Explanation
        </h2>
        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
          <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed">
            A <strong>VPN (Virtual Private Network)</strong> is an app that
            encrypts your internet connection and hides your IP address.
            Think of it as a <strong>secure, private tunnel</strong> through the
            internet. Without a VPN, your internet provider (and anyone on your
            Wi-Fi network) can see what you do online. With a VPN, they can&apos;t.
          </p>
        </div>
      </section>

      {/* Visual analogy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          How It Works (Analogy)
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 border border-red-200 dark:border-red-800 rounded-lg">
            <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">Without a VPN</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Like sending a <strong>postcard</strong>. Your ISP, Wi-Fi operator,
              and anyone in between can read the message, see who it&apos;s from,
              and where it&apos;s going.
            </p>
          </div>
          <div className="p-5 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">With a VPN</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Like putting your postcard in a <strong>sealed, opaque envelope</strong> and
              mailing it through a trusted friend&apos;s address. Nobody can read
              it, and the recipient sees your friend&apos;s address, not yours.
            </p>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          What a VPN Does
        </h2>
        <div className="space-y-3">
          {[
            { title: "Encrypts your traffic", desc: "All your internet data is scrambled so only you and the VPN server can read it. This protects you on public Wi-Fi." },
            { title: "Hides your IP address", desc: "Websites see the VPN server's IP instead of yours. This prevents location tracking and targeted advertising." },
            { title: "Prevents ISP monitoring", desc: "Your internet provider can't see which websites you visit or log your browsing history." },
            { title: "Secures public Wi-Fi", desc: "On café, hotel, and airport Wi-Fi, a VPN prevents other users from intercepting your data." },
            { title: "Bypasses geo-restrictions", desc: "Access streaming content and services from other countries by connecting to a VPN server there." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold shrink-0 mt-0.5">&#10003;</span>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">{item.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What it doesn't do */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          What a VPN Does NOT Do
        </h2>
        <div className="space-y-2">
          {[
            "Make you completely anonymous online (websites can still track you with cookies)",
            "Protect against malware or viruses (you need antivirus for that)",
            "Stop phishing emails (you still need to be careful what you click)",
            "Make a slow internet connection faster (it adds slight overhead)",
            "Protect against bad passwords (use a password manager + 2FA)",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 text-sm">
              <span className="text-red-500 shrink-0 mt-0.5">&#10007;</span>
              <span className="text-zinc-600 dark:text-zinc-400">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Who needs one */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Do You Need a VPN?
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { who: "Remote workers", answer: "Yes", reason: "Protects work data on home and public networks" },
            { who: "Travelers", answer: "Yes", reason: "Essential for hotel/airport Wi-Fi and accessing home services" },
            { who: "Privacy-conscious users", answer: "Yes", reason: "Prevents ISP monitoring and IP tracking" },
            { who: "Home users", answer: "Recommended", reason: "Stops ISP from logging and selling browsing data" },
            { who: "Gamers", answer: "Sometimes", reason: "Helps with DDoS protection and accessing regional servers" },
            { who: "Casual browsers", answer: "Optional", reason: "Added privacy, but not critical if you don't handle sensitive data" },
          ].map((item) => (
            <div key={item.who} className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{item.who}</h3>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                  item.answer === "Yes" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                  item.answer === "Recommended" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" :
                  "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                }`}>{item.answer}</span>
              </div>
              <p className="text-xs text-zinc-500">{item.reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next steps */}
      <div className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl mb-8">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Ready to Get Started?</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/best/vpn" className="flex-1 text-center px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            See Our Top VPN Picks
          </Link>
          <Link href="/guides/vpn-setup-beginners" className="flex-1 text-center px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 hover:bg-white dark:hover:bg-zinc-700 rounded-lg transition-colors">
            VPN Setup Guide (5 min)
          </Link>
        </div>
      </div>

      <FAQ items={faqs} />

      <InternalLinks links={[
        { label: "Best VPN 2026", href: "/best/vpn", description: "Our top picks compared" },
        { label: "VPN Setup Guide", href: "/guides/vpn-setup-beginners", description: "Step-by-step setup" },
        { label: "VPN Protocols Explained", href: "/vpn/protocols", description: "WireGuard vs OpenVPN" },
        { label: "Free VPN Analysis", href: "/vpn/free", description: "Are free VPNs safe?" },
        { label: "VPN Myths Debunked", href: "/guides/vpn-myths-debunked", description: "What VPNs can and can't do" },
      ]} />
    </article>
  );
}
