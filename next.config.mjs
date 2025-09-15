/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/.well-known/lnurlp/:username',
        destination: 'https://lawallet.masize.com/.well-known/lnurlp/:username',
      },
    ]
  },
}

export default nextConfig
