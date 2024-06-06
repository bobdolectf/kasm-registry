/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Threatspace',
    description: 'The official store for Threatspace developed workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://bobdolectf.github.io/kasm-registry',
    contactUrl: 'https://test.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
