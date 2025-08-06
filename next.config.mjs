// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/portfolio2025' : '',
  assetPrefix: isProd ? '/portfolio2025/' : '',
};

export default nextConfig;
