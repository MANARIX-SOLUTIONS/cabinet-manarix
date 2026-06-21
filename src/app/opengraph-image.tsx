import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: "#2563EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          M
        </div>
        <span style={{ color: "white", fontSize: 28, fontWeight: 700 }}>
          Manarix Solutions
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            color: "#94A3B8",
            fontSize: 20,
            marginBottom: 16,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          FinTech & Enterprise Software Engineering
        </p>
        <h1
          style={{
            color: "white",
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.1,
            margin: 0,
            maxWidth: 800,
          }}
        >
          Engineering Africa&apos;s Digital Future
        </h1>
      </div>

      <p style={{ color: "#64748B", fontSize: 18, margin: 0 }}>manarix.com</p>
    </div>,
    { ...size },
  );
}
