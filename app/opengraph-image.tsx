import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630
};
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
          justifyContent: "space-between",
          background: "#111426",
          color: "white",
          padding: "72px",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 34, fontWeight: 700 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 18,
              background: "#b7f7cf",
              color: "#111426",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            F1
          </div>
          {siteConfig.name}
        </div>
        <div style={{ maxWidth: 850, fontSize: 68, lineHeight: 1.05, fontWeight: 800 }}>
          Charlas, divulgación y comunicación científica
        </div>
        <div style={{ fontSize: 28, color: "#b7f7cf" }}>{siteConfig.domain}</div>
      </div>
    ),
    size
  );
}
