/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  experimental: {
    // appDir: true,
    // optimizeCss: true,
    // swcMinify: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-bos5-1.cdninstagram.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 's3-media3.fl.yelpcdn.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
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
