/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:['images.pexels.com', 'images.alphacoders.com'],
        // remotePatterns: [
        //     { protocol: "http", hostname: "images.pexels.com" },
        //     { protocol: "https", hostname: "images.alphacoders.com" }
        // ],
    }
};

export default nextConfig;
