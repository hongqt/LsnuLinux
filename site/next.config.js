/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Lsnu Technologies',
    description: 'The official store for Lsnu-Linux workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/hongqt/LsnuLinux/',
    contactUrl: 'https://hongqt.lsnu.edu.cn',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
