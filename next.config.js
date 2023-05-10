/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  experimental: {
    // appDir: true,
    optimizeCss: true,
    swcMinify: true,
  },
  images: {
    domains: [
      'scontent-bos5-1.cdninstagram.com',
      's3-media3.fl.yelpcdn.com',
      'lh3.googleusercontent.com',
    ],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
