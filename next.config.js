/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactCompiler: true,
    ppr: 'incremental',
  },
};

module.exports = nextConfig;
