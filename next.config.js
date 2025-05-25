const nextConfig = {
  // Get default locale from environment variable
  i18n: {
    locales: process.env.SUPPORTED_LOCALES?.split(',') || ['te', 'en'],
    defaultLocale: process.env.DEFAULT_LOCALE || 'te',
    localeDetection: true,
  },
  trailingSlash: false,
  // Custom port from environment
  ...(process.env.PORT && {
    experimental: {
      appDir: false
    }
  })
}

module.exports = nextConfig