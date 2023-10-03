/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:page((?!em-breve$).*)",
        destination: '/em-breve',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
