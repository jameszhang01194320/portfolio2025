/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio2025', // 这里改成你的 GitHub 仓库名
  assetPrefix: '/portfolio2025',
};

export default nextConfig;
