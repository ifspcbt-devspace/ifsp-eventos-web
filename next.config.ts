import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eventos.gremioifspcbt.shop',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/ticket/:id/check',
        destination: '/admin/ticket/check-in/:id',
        permanent: false,
      },
      {
        source: '/admin/ticket/:id/check',
        destination: '/admin/ticket/check-in/:id',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
