interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
}

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 1024px, 1200px",
  className,
  loading,
  priority,
}: Props) {
  const ext = src.lastIndexOf(".");
  const base = src.slice(0, ext);
  const srcSet = [640, 1024].map((w) => `${base}-${w}w.webp ${w}w`).join(", ") + `, ${src} ${width}w`;

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : loading || "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
