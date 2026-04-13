import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  forceDark?: boolean;
}

/**
 * BuySecureVPN brand mark — "Network Bastion"
 *
 * Design language:
 *  - Hexagonal shield (flat top + angled shoulders + pointed bottom) sets us
 *    apart from the sea of rounded heater shields. The 6-sided geometry
 *    subconsciously echoes network topology / node diagrams.
 *  - 3-stop blue gradient (sky → royal → indigo) reads as premium trust.
 *  - Inner highlight ring adds depth without clutter.
 *  - Confident checkmark — the universal trust signal — rendered with thick
 *    rounded strokes so it stays legible even at 16×16 favicon size.
 *  - Drop shadow uses deep navy (not neutral gray) so it harmonizes with the
 *    shield's gradient instead of looking like a cheap Photoshop effect.
 *
 * Wordmark:
 *  - Three-weight hierarchy: "Buy" (normal) / "Secure" (extrabold) / "VPN"
 *    (black, accent color) lets the eye land on the two words that matter.
 *  - Tight letter-spacing and a live cursor-dot after "VPN" give it a
 *    modern SaaS feel without being loud.
 */
export default function Logo({ size = "md", forceDark = false }: LogoProps) {
  const shieldSize =
    size === "sm" ? "w-8 h-[34px]" : size === "lg" ? "w-11 h-12" : "w-9 h-10";
  const textSize =
    size === "sm" ? "text-base" : size === "lg" ? "text-[22px]" : "text-lg";

  const buyColor = forceDark ? "text-slate-300" : "text-slate-600 dark:text-slate-400";
  const secureColor = forceDark
    ? "text-white group-hover:text-blue-200 transition-colors"
    : "text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors";
  const vpnColor = forceDark ? "text-blue-400" : "text-blue-600 dark:text-blue-400";
  const dotColor = forceDark ? "bg-blue-400" : "bg-blue-600 dark:bg-blue-400";

  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="BuySecureVPN — Home">
      {/* ═══ Brand mark ═══ */}
      <div className={`${shieldSize} relative shrink-0`}>
        <svg
          viewBox="0 0 40 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible transition-transform duration-300 group-hover:scale-[1.04]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="bsv-shield-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="55%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="bsv-shield-edge" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.6" />
            </linearGradient>
            <filter id="bsv-shadow" x="-30%" y="-20%" width="160%" height="140%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.8" floodColor="#1e3a8a" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Hexagonal shield — flat top, angled shoulders, pointed bottom */}
          <path
            d="M 10 3 L 30 3 L 37 10 L 37 23 Q 37 25 35.8 26.5 L 21.2 41.8 Q 20 43 18.8 41.8 L 4.2 26.5 Q 3 25 3 23 L 3 10 Z"
            fill="url(#bsv-shield-fill)"
            filter="url(#bsv-shadow)"
          />

          {/* Thin edge highlight for dimension */}
          <path
            d="M 10 3 L 30 3 L 37 10 L 37 23 Q 37 25 35.8 26.5 L 21.2 41.8 Q 20 43 18.8 41.8 L 4.2 26.5 Q 3 25 3 23 L 3 10 Z"
            fill="none"
            stroke="url(#bsv-shield-edge)"
            strokeWidth="1"
          />

          {/* Inner highlight ring — subtle depth */}
          <path
            d="M 12 7 L 28 7 L 33 12 L 33 22 L 20 37 L 7 22 L 7 12 Z"
            fill="none"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Confident checkmark */}
          <path
            d="M 12 22 L 18 28 L 29 15"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Pinpoint white highlight — catches the light on hover */}
          <circle cx="14" cy="9" r="1.2" fill="rgba(255,255,255,0.5)" />
        </svg>
      </div>

      {/* ═══ Wordmark ═══ */}
      <div className={`${textSize} font-bold leading-none flex items-baseline`}>
        <span className={`${buyColor} font-medium tracking-tight`}>Buy</span>
        <span className={`${secureColor} font-extrabold tracking-tight`}>Secure</span>
        <span className={`${vpnColor} font-black tracking-tight ml-0.5`}>VPN</span>
        <span
          className={`${dotColor} w-1 h-1 rounded-full ml-1 mb-0.5 opacity-70 group-hover:opacity-100 transition-opacity`}
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
