import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd299alzxgdp6.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
};

export default nextConfig;
