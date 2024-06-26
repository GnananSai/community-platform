/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "drxedpjdg",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
