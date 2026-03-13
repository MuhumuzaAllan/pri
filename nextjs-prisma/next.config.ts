import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "zany-halibut-jjjpw96w57ww3jggr-3000.app.github.dev",
      ],
    },
  },
};

export default nextConfig;