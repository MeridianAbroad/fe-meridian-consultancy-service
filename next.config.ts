import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AWS Amplify's managed image-optimization proxy fails to fetch our own
    // deployed assets ("Error loading source image" on every /_next/image
    // request, even for a plain icon) — serving files unoptimized sidesteps
    // it entirely and is reliable. Remote Unsplash images are already
    // resized/compressed via their own URL params (see lib/images.ts), so
    // this mainly affects local /public files.
    unoptimized: true,
    qualities: [75, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
