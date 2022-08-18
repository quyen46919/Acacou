const withPlugins = require('next-compose-plugins')
const webpack = require('webpack')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

nextConfig = {
  // images: {
  //     domains: ['storage.googleapis.com'],
  // },
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },

  webpack: (config) => {
    config.resolve.extensions = ['.mjs', '.ts', '.tsx', '.json', '.js']
    config.plugins.push(new webpack.ProgressPlugin())
    return config
  },
}

module.exports = withPlugins([withBundleAnalyzer], nextConfig)
