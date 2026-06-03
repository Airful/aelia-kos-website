import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/whats-inside",
        destination: "/portal",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
