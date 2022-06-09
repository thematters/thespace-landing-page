/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  sassOptions: {
    prependData: `@import "~/styles/helpers.sass"`,
  },
};

module.exports = nextConfig;
