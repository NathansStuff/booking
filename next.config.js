/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Default value is ['tsx', 'ts', 'jsx', 'js']
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  publicRuntimeConfig: {
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
  },
  images: {
    domains: [
      'picsum.photos', // Demo / local only
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
