/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/ticket/:id/check',
        destination: '/admin/ticket/check-in/:id',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
