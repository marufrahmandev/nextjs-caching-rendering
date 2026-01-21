/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        staleTimes: {
            static: 5,
            dynamic: 5
        }
    },
};

export default nextConfig;
