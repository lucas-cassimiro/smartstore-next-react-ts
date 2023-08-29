/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    swcMinify: true,
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
