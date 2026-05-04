import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "AI-Powered Cyber Threats: What Remote Workers Need to Know (2026)",
  description:
    "Deepfakes, AI phishing, voice cloning, and automated attacks. How AI is changing the threat landscape and how to protect yourself.",
  alternates: { canonical: "/security/ai-threats/" },
  openGraph: {
    title: "AI-Powered Cyber Threats: What Remote Workers Need to Know (2026)",
    description: "Deepfakes, AI phishing, voice cloning, and automated attacks. How AI is changing the threat landscape and how to protect yourself.",
    type: "article",
    url: "/security/ai-threats/",
    images: [{ url: "/images/og/og-security.webp", width: 1200, height: 675, alt: "Ai Threats Guide" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-security.webp"] },
};

export default function AIThreatsPage() {
  const threats = [
    { name: "AI-Generated Phishing", risk: "High", desc: "AI creates flawless phishing emails with perfect grammar, personalization, and context. Gone are the days of spotting phishing by typos.", defense: "Verify requests through separate channels. Don't trust email content alone, regardless of how well-written it is." },
    { name: "Deepfake Video Calls", risk: "High", desc: "Real-time video deepfakes can impersonate executives in video calls, requesting wire transfers or sensitive data.", defense: "Establish verification protocols for financial requests. Use code words. Never authorize money transfers based solely on a video call." },
    { name: "Voice Cloning", risk: "High", desc: "AI can clone a voice from just a few seconds of audio (from social media, voicemail, or recorded calls). Used for vishing (voice phishing) attacks.", defense: "Be skeptical of urgent voice requests. Call back on a known number, not the one that called you." },
    { name: "AI-Powered Password Cracking", risk: "Medium", desc: "AI models can predict password patterns and prioritize brute-force attempts, cracking weak passwords faster than ever.", defense: "Use a password manager with 20+ character random passwords. AI can't crack true randomness." },
    { name: "Automated Vulnerability Scanning", risk: "Medium", desc: "AI tools scan networks and applications for vulnerabilities faster and more thoroughly than manual hackers.", defense: "Keep all software updated. Use a VPN to reduce your attack surface. Enable firewalls." },
    { name: "AI-Generated Malware", risk: "Medium", desc: "AI can generate novel malware variants that evade signature-based antivirus detection.", defense: "Use behavior-based endpoint protection. Keep OS and antivirus updated. Don't download from untrusted sources." },
  ];

  const faqs = [
    { question: "Can AI break VPN encryption?", answer: "No. Current AI cannot break AES-256 or ChaCha20 encryption. These algorithms are mathematically secure against both classical and AI-powered attacks. Quantum computing is a theoretical future threat, but post-quantum encryption is already being deployed by some VPN providers." },
    { question: "How can I tell if a video call is a deepfake?", answer: "Current deepfakes may have subtle tells: unnatural eye movement, inconsistent lighting on the face, audio slightly out of sync, or artifacts around the edges of the face. However, these tells are becoming harder to spot. The best defense is verification protocols, not visual detection." },
    { question: "Should I be worried about AI attacks as a regular user?", answer: "AI-powered phishing is the biggest concern for regular users because it makes scam emails much more convincing. The good news: the defenses are the same — 2FA, password managers, VPN, and verifying requests through separate channels. AI makes attacks better, but it doesn't change the fundamentals of defense." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "AI Threats" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          AI-Powered Cyber Threats (2026)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          AI is making cyber attacks more sophisticated, personalized, and
          harder to detect. Here&apos;s what remote workers need to know about
          the evolving threat landscape and how to stay protected.
        </p>
        <Byline authorId="sarah-chen" updatedAt="2026-01-17" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      {/* Threat grid */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">AI Threat Landscape</h2>
        <div className="space-y-4">
          {threats.map((t) => (
            <div key={t.name} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{t.name}</h3>
                <span className={`text-xs font-bold px-2 py-1 rounded ${t.risk === "High" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"}`}>{t.risk} Risk</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{t.desc}</p>
              <p className="text-sm text-green-700 dark:text-green-400"><strong>Defense:</strong> {t.defense}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core defenses */}
      <section className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Your Defense Stack Hasn&apos;t Changed</h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
          AI makes attacks more convincing, but the fundamental defenses remain the same:
        </p>
        <div className="grid sm:grid-cols-2 gap-2 text-sm text-zinc-700 dark:text-zinc-300">
          <div>1. <strong>2FA everywhere</strong> — Phishing-resistant (hardware keys or passkeys)</div>
          <div>2. <strong>Password manager</strong> — AI can&apos;t crack random 20+ char passwords</div>
          <div>3. <strong>VPN</strong> — Encrypts traffic, reduces attack surface</div>
          <div>4. <strong>Verify separately</strong> — Never trust a single communication channel</div>
          <div>5. <strong>Keep updated</strong> — Patches fix AI-discovered vulnerabilities</div>
          <div>6. <strong>Skepticism</strong> — If it feels urgent or too good, verify first</div>
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Phishing Guide", href: "/security/phishing", description: "Recognize all types of phishing" },
        { label: "Secure Video Calls", href: "/guides/secure-video-calls", description: "Protect against deepfakes" },
        { label: "2FA Guide", href: "/security/2fa", description: "Phishing-resistant authentication" },
        { label: "SIM Swap Protection", href: "/guides/sim-swap-protection", description: "Protect your phone number" },
      ]} />
    </article>
  );
}
