import { ImageResponse } from "next/og";

export const alt = "MetaTok AI — Agentes de Inteligencia Artificial 24/7";
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
          padding: "80px",
          backgroundColor: "#120b2e",
          backgroundImage:
            "radial-gradient(circle at 78% 15%, #7c5cff 0%, #4420ac 42%, #14102b 78%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: "#ffffff",
              fontSize: 34,
              fontWeight: 800,
              color: "#4420ac",
            }}
          >
            M
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#ffffff" }}>
            MetaTok<span style={{ color: "#c0adff" }}>.ai</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 60,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 880,
          }}
        >
          Tu equipo de ventas en piloto automático con IA
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#e4dcff",
            maxWidth: 760,
          }}
        >
          Agentes de IA 24/7 en WhatsApp, llamadas, Instagram y web
        </div>

        <div style={{ display: "flex", gap: 14, marginTop: 48 }}>
          {["100% Automatización", "3.000€ ahorro/trabajador", "24/7 operativo"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "12px 22px",
                borderRadius: 999,
                backgroundColor: "rgba(255,255,255,0.12)",
                color: "#ffffff",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
