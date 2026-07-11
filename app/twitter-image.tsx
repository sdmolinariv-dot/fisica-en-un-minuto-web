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
          background: "#f8fbff",
          color: "#111426",
          padding: "72px",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700 }}>{siteConfig.name}</div>
        <div style={{ maxWidth: 860, fontSize: 68, lineHeight: 1.05, fontWeight: 800 }}>
          Ciencia clara, pensamiento crítico y comunicación responsable.
        </div>
        <div style={{ fontSize: 28, color: "#6d3df2" }}>{siteConfig.domain}</div>
      </div>
    ),
    size
  );
}
