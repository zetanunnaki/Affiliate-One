interface FlagProps {
  iso2: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Country flag using flagcdn.com (free, no API key needed).
 * Uses plain <img> for reliable static-export / GitHub Pages support.
 */
export default function Flag({ iso2, name, size = "md" }: FlagProps) {
  // flagcdn only supports w20, w40, w80, w160, w320
  const cdnWidth = size === "sm" ? 40 : size === "lg" ? 80 : 40;
  const displayWidth = size === "sm" ? 20 : size === "lg" ? 32 : 24;
  const code = iso2.toLowerCase();
  const flagCode = code === "xk" ? "xk" : code;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w${cdnWidth}/${flagCode}.png`}
      alt={`${name} flag`}
      width={displayWidth}
      height={Math.round(displayWidth * 0.75)}
      className="inline-block rounded-sm object-cover"
      loading="lazy"
    />
  );
}
