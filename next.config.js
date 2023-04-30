const domain = new URL(process.env.NEXT_PUBLIC_IMAGE_URL).hostname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", domain],
  },
};
