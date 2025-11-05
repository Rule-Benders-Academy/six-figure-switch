/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/masterclass-video",
        destination: "/dynamic-masterclass-video",
        permanent: false, // set true if this is a permanent move
      },
    ];
  },
};

export default nextConfig;
