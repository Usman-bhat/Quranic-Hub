/** @type {import('next').NextConfig} */


const withPWA = require('next-pwa')({
  dest: 'public'
})


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  typescript: {     

    ignoreBuildErrors: true,
  },
 eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = withPWA(nextConfig);
