/** @type {import("next").NextConfig} */
const nextConfig = {
  // Keep production output separate so it cannot overwrite an active dev cache.
  distDir: process.env.NEXT_OUTPUT_DIR ?? ".next",
  turbopack: {
    root: new URL(".", import.meta.url).pathname,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
