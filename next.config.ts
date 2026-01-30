// next.config.ts
import type { NextConfig } from "next";
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",              // ← output folder for service-worker.js, manifest, etc.
  register: true,              // auto register service worker (recommended)
  skipWaiting: true,           // new service worker takes over immediately
  disable: process.env.NODE_ENV === "development", // very useful during dev
  // cacheOnFrontEndNav: true, // good for SPA-like feel (optional but recommended)
  // reloadOnOnline: true,
  // fallbacks: { image: "/fallback.png", document: "/offline.html" }, // optional
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  // You can add more settings here later
  turbopack: {},           // ← only if you're actually using turbopack (see note below)
};

export default withPWA(nextConfig as any);