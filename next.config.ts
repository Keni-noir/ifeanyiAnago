import type { NextConfig } from "next";


const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://ifeanyianagoandco.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
