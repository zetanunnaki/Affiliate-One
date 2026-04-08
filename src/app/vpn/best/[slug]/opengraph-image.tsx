import { ImageResponse } from "next/og";
import { getCountryBySlug, getAllCountries } from "@/lib/data";

export const alt = "Best VPN";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const country = getCountryBySlug(slug);
  const name = country?.nameEn ?? slug;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#2563eb",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            SW
          </div>
          <span style={{ color: "#94a3b8", fontSize: "24px" }}>SecureWork</span>
        </div>
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
            margin: "0",
          }}
        >
          Best VPN for {name}
        </h1>
        <p
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            marginTop: "16px",
          }}
        >
          2026 — Expert-Tested & Independently Reviewed
        </p>
      </div>
    ),
    { ...size }
  );
}
