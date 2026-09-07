import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#05070f",
          backgroundImage:
            "radial-gradient(ellipse 120% 90% at 50% -10%, #1a2c66 0%, #0b1330 45%, #05070f 78%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#9fffb0",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#39ff88",
              display: "flex",
            }}
          />
          status: online · shipping since 2023
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 148,
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: 2,
            textTransform: "uppercase",
            backgroundImage: "linear-gradient(115deg,#ff9ff3,#a6e1fa,#c7ea46,#f368e0,#7df9ff,#c3b1e1)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          BARIŞ ÇELIK
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            marginTop: 28,
            color: "#ff9ff3",
            letterSpacing: 2,
          }}
        >
          Software Engineer · ML Researcher · Istanbul
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            marginTop: 40,
            color: "#7df9ff",
          }}
        >
          DermAI: 98% accuracy · optimizers from scratch · GDG YTÜ
        </div>
      </div>
    ),
    { ...size },
  );
}
