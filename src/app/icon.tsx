import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0B1220",
        borderRadius: 7,
      }}
    >
      <svg
        width="26"
        height="26"
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
          stroke="#2563EB"
          strokeWidth="1.6"
          strokeLinecap="square"
        />
      </svg>
    </div>,
    { ...size },
  );
}
