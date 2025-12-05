/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  
  // Note: redirects don't work with static export, but keeping for dev mode
  async redirects() {
    return [
      {
        source: '/soryn-base',
        destination: '/soryn',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
