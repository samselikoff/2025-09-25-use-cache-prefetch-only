import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typedRoutes: true,
  experimental: {
    cacheComponents: true,
    clientSegmentCache: true,
    clientParamParsing: true,
  },
};

export default nextConfig;
