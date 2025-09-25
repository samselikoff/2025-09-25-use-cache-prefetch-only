import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typedRoutes: true,
  experimental: {
    cacheComponents: true,
    clientSegmentCache: true,
  },
};

export default nextConfig;
