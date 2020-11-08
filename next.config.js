const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [
    optimizedImages,
    {
      optimizeImagesInDev: true,
    },
  ],
  [
    withLess,
    {
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: '[local]___[hash:base64:5]',
      },
    },
  ],
  [
    withCSS,
    {
      cssLoaderOptions: {
        url: false,
      },
    },
  ],
  [
    {
      trailingSlash: true,
    },
  ],
  [
    {
      exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          ...defaultPathMap,
          '/': { page: '/' },
        };
      },
    },
  ],
  [{
    target: "serverless",
  }]
]);
