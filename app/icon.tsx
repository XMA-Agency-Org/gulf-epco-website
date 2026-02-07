import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
          background: "linear-gradient(135deg, hsl(220 40% 13%) 0%, hsl(220 30% 22%) 100%)",
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "hsl(38 60% 55%)",
            letterSpacing: "-0.5px",
            lineHeight: 1,
          }}
        >
          G
        </span>
      </div>
    ),
    { ...size }
  );
}
