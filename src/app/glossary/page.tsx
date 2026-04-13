import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & VPN Glossary — Terms Defined",
  description: "Clear definitions of VPN, cybersecurity, and privacy terms. AES, DNS, kill switch, WireGuard, and more explained.",
};

const terms = [
  { term: "AES-256", definition: "Advanced Encryption Standard with 256-bit keys. The gold standard for symmetric encryption used by most VPNs. Considered unbreakable with current technology." },
  { term: "DNS", definition: "Domain Name System. Translates domain names (google.com) to IP addresses (142.250.80.46). DNS queries reveal which sites you visit. A VPN encrypts DNS queries." },
  { term: "DNS Leak", definition: "When DNS queries bypass the VPN tunnel and go directly to your ISP's DNS servers, revealing which sites you visit despite being connected to a VPN." },
  { term: "End-to-End Encryption (E2EE)", definition: "Encryption where only the sender and recipient can read the data. Not even the service provider can decrypt it. Used by Signal, WhatsApp messages, and ProtonMail." },
  { term: "Five Eyes", definition: "Intelligence alliance between US, UK, Canada, Australia, and New Zealand. Member countries share signals intelligence. VPN providers based outside Five Eyes can't be compelled to share data with these governments." },
  { term: "GDPR", definition: "General Data Protection Regulation. EU law governing data protection and privacy. Gives EU residents rights over their personal data including the right to erasure." },
  { term: "Great Firewall (GFW)", definition: "China's internet censorship system that blocks access to thousands of websites and services including Google, Facebook, and Twitter. Uses deep packet inspection to detect and block VPN traffic." },
  { term: "IKEv2", definition: "Internet Key Exchange version 2. A VPN protocol known for fast reconnection when switching between Wi-Fi and cellular networks, making it popular on mobile devices." },
  { term: "IP Address", definition: "Internet Protocol address. A unique number assigned to your device on a network. A VPN replaces your real IP with the VPN server's IP, hiding your location." },
  { term: "ISP", definition: "Internet Service Provider. The company providing your internet connection (e.g., Comcast, BT, Telstra). Your ISP can see your browsing activity without a VPN." },
  { term: "Kill Switch", definition: "A VPN feature that blocks all internet traffic if the VPN connection drops. Prevents accidental data exposure. Essential for security-critical work." },
  { term: "Man-in-the-Middle (MITM)", definition: "An attack where someone intercepts communication between two parties. Common on public Wi-Fi. A VPN prevents MITM attacks by encrypting all traffic." },
  { term: "No-Logs Policy", definition: "A VPN provider's commitment to not record user activity, connection timestamps, IP addresses, or browsing data. Should be verified by independent audits." },
  { term: "Obfuscation", definition: "Technology that disguises VPN traffic as regular HTTPS traffic. Used to bypass VPN blocking in countries like China and on restrictive networks." },
  { term: "OpenVPN", definition: "An open-source VPN protocol with a 20+ year track record. Supports both UDP (faster) and TCP (more reliable) modes. The most widely supported protocol." },
  { term: "Passkey", definition: "A passwordless authentication method using public-key cryptography. Stored on your device and verified biometrically. More secure than passwords + 2FA." },
  { term: "Phishing", definition: "A social engineering attack where an attacker impersonates a trusted entity to trick you into revealing passwords, credit card numbers, or other sensitive data." },
  { term: "Protocol", definition: "In VPN context, the set of rules determining how data is encrypted and transmitted. Common protocols: WireGuard, OpenVPN, IKEv2. Each offers different speed/security trade-offs." },
  { term: "RAM-Only Servers", definition: "VPN servers that run entirely in RAM with no hard drives. All data is wiped on reboot. Used by NordVPN, FastestVPN, and Surfshark for enhanced privacy." },
  { term: "Split Tunneling", definition: "A VPN feature that routes only selected traffic through the VPN while sending the rest directly. Useful for routing work apps through VPN while allowing personal apps to connect directly." },
  { term: "TLS/SSL", definition: "Transport Layer Security / Secure Sockets Layer. The encryption behind HTTPS (the padlock icon in your browser). Encrypts data between your browser and the website." },
  { term: "Two-Factor Authentication (2FA)", definition: "A security method requiring two forms of verification: something you know (password) and something you have (authenticator app code or hardware key)." },
  { term: "VPN", definition: "Virtual Private Network. Creates an encrypted tunnel between your device and a VPN server, hiding your IP address and encrypting all internet traffic from your ISP and local network." },
  { term: "WebRTC Leak", definition: "A browser vulnerability that can reveal your real IP address even when using a VPN. Caused by WebRTC (used for video calls). Can be mitigated by VPN apps or browser extensions." },
  { term: "WireGuard", definition: "A modern VPN protocol with minimal code (~4,000 lines vs OpenVPN's 70,000+). Uses state-of-the-art cryptography. The fastest open-source VPN protocol available in 2026." },
  { term: "Zero-Knowledge Encryption", definition: "Encryption where the service provider cannot access your data, even if compelled. Your encryption key never leaves your device. Used by password managers and some cloud storage providers." },
];

export default function GlossaryPage() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full text-[13px] text-blue-200 mb-5">
            <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {terms.length} terms
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">
            Security & VPN Glossary
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Plain-language definitions of {terms.length} security and privacy terms.
            Bookmark this page for quick reference.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Alphabet nav */}
        <nav className="flex flex-wrap justify-center gap-1.5 mb-10 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 sticky top-20 z-20 backdrop-blur-sm">
          {Array.from(new Set(terms.map((t) => t.term[0].toUpperCase()))).sort().map((letter) => (
            <a
              key={letter}
              href={`#${letter}`}
              className="w-8 h-8 flex items-center justify-center text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-white hover:bg-blue-600 rounded-lg transition-colors"
            >
              {letter}
            </a>
          ))}
        </nav>

        <div>
          {terms.map((t, i) => {
            const showHeader = i === 0 || t.term[0].toUpperCase() !== terms[i - 1].term[0].toUpperCase();
            const letter = t.term[0].toUpperCase();
            return (
              <div key={t.term}>
                {showHeader && (
                  <div id={letter} className="flex items-center gap-3 mt-10 mb-4 first:mt-0 scroll-mt-32">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/25">
                      {letter}
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
                  </div>
                )}
                <div className="group p-4 mb-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all">
                  <dt className="font-bold text-slate-900 dark:text-white text-base mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {t.term}
                  </dt>
                  <dd className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t.definition}
                  </dd>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
