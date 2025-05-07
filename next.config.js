/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.NODE_ENV === 'production' ? '/sera' : '',
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sera' : '',
};

module.exports = nextConfig;