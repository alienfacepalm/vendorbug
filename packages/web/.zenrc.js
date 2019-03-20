/**
 * See ApolloKit for reference
 *
 * https://github.com/sysgears/apollo-universal-starter-kit/blob/master/packages/client/.zenrc.js
 */

const config = {
  builders: {
    web: {
      stack: ["web"],
      openBrowser: true,
      entry: "./src/index.tsx"
    }
  },
  options: {
    ssr: true,
    webpackDll: true,
    reactHotLoader: true,
    webpackConfig: {
      devServer: {
        disableHostCheck: true
      }
    }
  }
};

module.exports = config;
