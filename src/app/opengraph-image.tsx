import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.orgName} debt relief guidance`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#213949",
        color: "white",
        display: "flex",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          maxWidth: "760px",
        }}
      >
        <div
          style={{
            color: "#f4f2ed",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: 0,
          }}
        >
          {siteConfig.orgName}
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            letterSpacing: 0,
            lineHeight: 1.04,
          }}
        >
          A calmer path through debt pressure.
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.76)",
            fontSize: 30,
            lineHeight: 1.35,
          }}
        >
          Faith-respectful debt relief conversations, private reviews, and
          personal-loan option guidance.
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          background: "#f4f2ed",
          borderRadius: "36px",
          color: "#213949",
          display: "flex",
          fontSize: 26,
          fontWeight: 800,
          height: "260px",
          justifyContent: "center",
          lineHeight: 1.25,
          padding: "34px",
          textAlign: "center",
          width: "260px",
        }}
      >
        Private review.
        <br />
        No pressure.
        <br />
        Human follow-up.
      </div>
    </div>,
    size,
  );
}
