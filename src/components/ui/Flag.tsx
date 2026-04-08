import Image from "next/image";

interface FlagProps {
  iso2: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Country flag using flagcdn.com (free, no API key needed).
 * Falls back to emoji flag if image fails to load.
 */
export default function Flag({ iso2, name, size = "md" }: FlagProps) {
  const dimensions = size === "sm" ? 20 : size === "lg" ? 32 : 24;
  const code = iso2.toLowerCase();

  // Special cases for territories that don't have standard flag codes
  const flagCode = code === "xk" ? "xk" : code;

  return (
    <Image
      src={`https://flagcdn.com/w${dimensions * 2}/${flagCode}.png`}
      alt={`${name} flag`}
      width={dimensions}
      height={Math.round(dimensions * 0.75)}
      className="inline-block rounded-sm object-cover"
      unoptimized
    />
  );
}
