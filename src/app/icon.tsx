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
          background: "#0e1116",
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 999,
            background: "#7eb8c9",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
