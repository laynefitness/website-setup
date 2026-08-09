import { ImageResponse } from "next/og";

export const alt = "Layne Fitness online coaching built for your body";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#171513", color: "#fbfbfb", padding: 66, fontFamily: "Arial, sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", inset: "0 0 0 72%", background: "#f36b24" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "78%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30, fontWeight: 800 }}>
          <div style={{ width: 58, height: 58, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: "#f36b24", color: "#171513" }}>LF</div>
          LAYNE FITNESS
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 80, fontWeight: 900, lineHeight: 0.95, letterSpacing: -3 }}>ONLINE FITNESS COACHING</div>
          <div style={{ marginTop: 18, fontSize: 44, fontWeight: 700, color: "#f36b24" }}>BUILT FOR YOUR BODY.</div>
        </div>
        <div style={{ fontSize: 24 }}>Custom training • Practical nutrition • Direct accountability</div>
      </div>
    </div>,
    size,
  );
}
