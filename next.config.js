/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  env: {
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
  },
};
