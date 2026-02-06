/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co"
      }
    ]
  }
};

module.exports = nextConfig;
