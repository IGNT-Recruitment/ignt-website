import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [],
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
