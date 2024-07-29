/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  pageExtensions: ["page.tsx"], // exclude page test files (*.spec.tsx) from being considered a page by next
  poweredByHeader: false,
  reactStrictMode: true,
  transpilePackages: [],
}

export default nextConfig
