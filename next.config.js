/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'otgegesmjkdjmcppbsbl.supabase.co',
                port: '',
                pathname: '/storage/**',
            },
        ],
    },
}

module.exports = nextConfig
