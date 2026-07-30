// next.config.ts
import type { NextConfig } from "next";
import withPWAInit from "next-pwa";

type NextConfigPlugin = (config: NextConfig) => NextConfig;

const withPWA = withPWAInit({
  dest: "public", // output folder for service-worker.js, manifest, etc.
  register: true, // auto register service worker
  skipWaiting: true, // new service worker takes over immediately
  disable: process.env.NODE_ENV === "development",
  // cacheOnFrontEndNav: true,
  // reloadOnOnline: true,
  // fallbacks: { image: "/fallback.png", document: "/offline.html" },
  buildExcludes: [/\.map$/],
});

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  turbopack: {},
};

export default (withPWA as unknown as NextConfigPlugin)(nextConfig);
