import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
      },
      {
        protocol: 'https',
        hostname: 'aqjsuxlviimvm4yd.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: '9xvjx93k1otkuxuo.public.blob.vercel-storage.com',
      }
    ],
  },

};

export default nextConfig;
