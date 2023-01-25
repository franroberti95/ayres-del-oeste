/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["google.com", "drive.google.com", "googleusercontent.com","doc-0k-7k-docs.googleusercontent.com", "doc-14-7k-docs.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'google.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'doc-0k-7k-docs.googleusercontent.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
