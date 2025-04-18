import createNextIntlPlugin from 'next-intl/plugin';

import { withPayload } from '@payloadcms/next/withPayload';

// Specify the path to your custom request handler
const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.S3_ENDPOINT,
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
      },
    ],
  },
};

export default withNextIntl(withPayload(nextConfig, { devBundleServerPackages: false }));
