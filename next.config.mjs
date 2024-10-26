/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'eventos.ifspcbt.shop',
                port: '',
                pathname: '/api/v1/**',
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
            }
        ]
    },

};

export default nextConfig;
