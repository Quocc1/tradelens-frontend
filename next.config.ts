import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withNextIntl = createNextIntlPlugin('./src/libs/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
};

export default bundleAnalyzer(withNextIntl(nextConfig));
