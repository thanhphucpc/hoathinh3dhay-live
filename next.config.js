
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
// });

// const withSourceMaps = require('@zeit/next-source-maps');
// const webpack = require('webpack');

// module.exports = withBundleAnalyzer(withSourceMaps({
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack']
//     });

//     config.plugins.push(
//       new webpack.ProvidePlugin({
//         React: "react",
//       })
//     );

//     return config;
//   }
// }));



const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const webpack = require('webpack');

module.exports = {
  ...withBundleAnalyzer({
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      });

      config.plugins.push(
        new webpack.ProvidePlugin({
          React: "react",
        })
      );

      // config.plugins.push(
      //   new webpack.SourceMapDevToolPlugin({
      //     noSources: true,
      //   })
      // )
      // config.plugins.push(
      //   new webpack.EvalSourceMapDevToolPlugin({
      //     noSources: true,
      //   })
      // )
      return config
    }
  }),
  productionBrowserSourceMaps: false,
};
