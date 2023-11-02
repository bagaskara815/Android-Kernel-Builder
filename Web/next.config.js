/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
            },
        ],
        domains: ['github.com'],
    },
}

module.exports = nextConfig
