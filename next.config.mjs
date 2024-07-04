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
    // Add other remote patterns if needed
    // add type error ignors when deploying to vercel


    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  },


};

export default nextConfig;
