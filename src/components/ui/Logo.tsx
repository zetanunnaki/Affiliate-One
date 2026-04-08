import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  forceDark?: boolean;
}

export default function Logo({ size = "md", forceDark = false }: LogoProps) {
  const shieldSize = size === "sm" ? "w-7 h-7" : size === "lg" ? "w-10 h-10" : "w-8 h-8";
  const textSize = size === "sm" ? "text-base" : size === "lg" ? "text-xl" : "text-lg";

  const brandColor = forceDark
    ? "text-white group-hover:text-blue-300 transition-colors"
    : "text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors";
  const accentColor = forceDark
    ? "text-blue-400"
    : "text-blue-600 dark:text-blue-400";

  return (
    <Link href="/" className="flex items-center gap-2 group">
      {/* Shield with checkmark */}
      <div className={`${shieldSize} relative shrink-0`}>
        <svg viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M16 2L3 7V17C3 25.5 16 33 16 33C16 33 29 25.5 29 17V7L16 2Z"
            className="fill-blue-600 dark:fill-blue-500"
          />
          <path
            d="M16 2L3 7V17C3 25.5 16 33 16 33C16 33 29 25.5 29 17V7L16 2Z"
            className="stroke-blue-700 dark:stroke-blue-400"
            strokeWidth="1.5"
          />
          <path
            d="M10 17L14.5 21.5L23 13"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* Brand text */}
      <div className={`${textSize} font-bold leading-tight`}>
        <span className={brandColor}>
          BuySecure
        </span>
        <span className={accentColor}>VPN</span>
      </div>
    </Link>
  );
}
