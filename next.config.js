/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactCompiler: true,
    ppr: true,
  },
};

module.exports = nextConfig;
