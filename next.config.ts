import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AWS Amplify's console-set environment variables reliably reach the
  // build step but don't always get injected into the running SSR Lambda
  // at request time. Explicitly listing them here bakes the build-time
  // values into the compiled server code, sidestepping that gap.
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    LEAD_NOTIFICATION_FROM: process.env.LEAD_NOTIFICATION_FROM,
    LEAD_NOTIFICATION_TO: process.env.LEAD_NOTIFICATION_TO,
  },
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
