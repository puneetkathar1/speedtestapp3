const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const nextConfig = {
  env: {
    GOOGLE_API_KEY: 'YOUR_GOOGLE_MAP_API_KEY',
    REACT_APP_GOOGLE_MAP_API_KEY:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_MAP_API_KEY&libraries=geometry,drawing,places',

    SERVER_API: `speedtestapp-mg9tt1i8n-puneetkathar1.vercel.app`,
  },
  webpack: (config, { isServer }) => {
    // HOTFIX: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      })
    );
    config.resolve.modules.push(__dirname);

    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 100
        },
        webp: {
          preset: 'default',
          quality: 100,
        },
      },
    ],
    withFonts,
  ],
  nextConfig
);
