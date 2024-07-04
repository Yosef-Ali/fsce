/** @type {import('next').NextConfig} */
const nextConfig = {
  // config options for images
  images: {
    // remotePatterns should be an array of objects, not strings
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],

  },

  env: {
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
  },

};

export default nextConfig;
