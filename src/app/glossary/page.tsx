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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Security & VPN Glossary
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          {terms.length} terms defined in plain language. Bookmark this page for
          quick reference while reading our guides.
        </p>
      </header>

      {/* Alphabet nav */}
      <nav className="flex flex-wrap gap-1 mb-8">
        {Array.from(new Set(terms.map((t) => t.term[0].toUpperCase()))).sort().map((letter) => (
          <a key={letter} href={`#${letter}`} className="px-2 py-1 text-sm text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded">
            {letter}
          </a>
        ))}
      </nav>

      <div className="space-y-4">
        {terms.map((t, i) => {
          const showHeader = i === 0 || t.term[0].toUpperCase() !== terms[i - 1].term[0].toUpperCase();
          return (
            <div key={t.term}>
              {showHeader && (
                <h2
                  id={t.term[0].toUpperCase()}
                  className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-6 mb-2 pb-1 border-b border-zinc-200 dark:border-zinc-700"
                >
                  {t.term[0].toUpperCase()}
                </h2>
              )}
              <div className="p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <dt className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">{t.term}</dt>
                <dd className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{t.definition}</dd>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
