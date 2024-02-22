// next.config.js
module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "images.prismic.io",
      "i.ytimg.com",
      "portaldev2021.cdn.prismic.io",
      "avatars.githubusercontent.com",
      "ui-avatars.com",
    ],
  },
};
