import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marc Gerald Dagode — Portfolio",
    short_name: "Marc.dev",
    description:
      "Portfolio of Marc Gerald Dagode, a full-stack developer based in Quezon City.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1117",
    theme_color: "#0d1117",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
