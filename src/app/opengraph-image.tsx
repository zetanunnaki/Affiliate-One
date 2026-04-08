import { ImageResponse } from "next/og";

export const alt = "SecureWork — Remote Work Security & VPN Guides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "#2563eb",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            SW
          </div>
        </div>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: "900px",
            margin: "0",
          }}
        >
          SecureWork
        </h1>
        <p
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            marginTop: "16px",
            textAlign: "center",
          }}
        >
          Remote Work Security & VPN Guides
        </p>
        <p
          style={{
            fontSize: "20px",
            color: "#64748b",
            marginTop: "8px",
          }}
        >
          Independent, expert-tested security resources for working from anywhere
        </p>
      </div>
    ),
    { ...size }
  );
}
