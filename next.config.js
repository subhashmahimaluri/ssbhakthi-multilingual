/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n configuration
  i18n: {
    locales: process.env.SUPPORTED_LOCALES?.split(',') || ['te', 'en'],
    defaultLocale: process.env.DEFAULT_LOCALE || 'te',
    localeDetection: true,
  },
  trailingSlash: false,

  // SCSS configuration
  sassOptions: {
    includePaths: ['./styles'],
    prependData: `
      @import "styles/variables.scss";
      @import "styles/mixins.scss";
    `,
  },

  // CSS modules support
  experimental: {
    cssChunking: 'strict', // Better CSS optimization for Next.js 15
  },
};

module.exports = nextConfig;
