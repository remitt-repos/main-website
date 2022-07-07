/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const { withKeystone } = require("@keystone-6/core/next");

module.exports = withKeystone({
  reactStrictMode: true,
});
