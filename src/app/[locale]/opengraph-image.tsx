import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Mehdi Dehghani Firouzabadi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isFa = locale === "fa";
  const portrait = await readFile(
    join(process.cwd(), "public/images/portrait.jpg"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0e1116",
          color: "#e8e4dc",
          padding: 72,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
          <div style={{ fontSize: 28, color: "#7eb8c9" }}>
            {isFa ? "پژوهشگر و توسعه‌دهنده هوش مصنوعی" : "AI Researcher & Developer"}
          </div>
          <div style={{ fontSize: 56, marginTop: 16, lineHeight: 1.15 }}>
            {isFa ? "مهدی دهقانی فیروزآبادی" : "Mehdi Dehghani Firouzabadi"}
          </div>
          <div style={{ fontSize: 28, marginTop: 24, color: "#9a958c" }}>
            {isFa
              ? "مدل‌های مولد، انتشار، معماری فشرده"
              : "Generative models, diffusion, compact nets"}
          </div>
        </div>
        <img
          src={`data:image/jpeg;base64,${portrait.toString("base64")}`}
          alt=""
          width={280}
          height={280}
          style={{
            objectFit: "cover",
            objectPosition: "50% 28%",
            borderRadius: 999,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
