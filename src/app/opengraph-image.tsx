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
        background:
          "radial-gradient(ellipse 80% 60% at 90% -10%, rgba(37,99,235,0.35), transparent 55%), radial-gradient(ellipse 50% 50% at 0% 100%, rgba(99,102,241,0.15), transparent 50%), #070b14",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 13,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 8H10.9L16 14.2L21.1 8H24.5V22H21.1V13.4L16 19.6L10.9 13.4V22H7.5Z"
              fill="#FFFFFF"
            />
            <path
              d="M7.5 24.8H24.5"
              stroke="#3B82F6"
              strokeWidth="1.6"
              strokeLinecap="square"
            />
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "0.055em",
            }}
          >
            MANARIX
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.26em",
              marginTop: 5,
            }}
          >
            SOLUTIONS
          </span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            color: "rgba(147,197,253,0.85)",
            fontSize: 18,
            marginBottom: 20,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontWeight: 500,
          }}
        >
          FinTech Engineering & Consulting
        </p>
        <h1
          style={{
            color: "white",
            fontSize: 52,
            fontWeight: 600,
            lineHeight: 1.08,
            margin: 0,
            maxWidth: 920,
            letterSpacing: "-0.03em",
          }}
        >
          We engineer reliable financial systems.
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 22,
            marginTop: 16,
            marginBottom: 0,
            maxWidth: 780,
            lineHeight: 1.4,
          }}
        >
          Payment integration · Backend modernization · Greenfield platforms
        </p>
      </div>

      <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 18, margin: 0 }}>
        manarix-solutions.com
      </p>
    </div>,
    { ...size },
  );
}
