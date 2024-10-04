/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function Image() {
  const logoArrayBuffer = await fetch(
    new URL("./metadata-image.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const logoSrc = `data:image/png;base64,${Buffer.from(
    logoArrayBuffer
  ).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logoSrc} height="100" />
      </div>
    )
  );
}
