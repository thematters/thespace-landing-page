/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  sassOptions: {
    prependData: `@import "~/styles/helpers.sass"`
  }
}

module.exports = nextConfig
