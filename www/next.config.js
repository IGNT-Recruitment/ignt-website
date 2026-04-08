/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  webpack: (config, { isServer }) => {
    return config;
  },
};

module.exports = nextConfig;
