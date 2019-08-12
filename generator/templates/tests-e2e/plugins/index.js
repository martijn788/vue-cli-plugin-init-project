// https://docs.cypress.io/guides/guides/plugins-guide.html
require('dotenv').config()
const webpack = require('webpack')
const webpackPreprocessor = require('@cypress/webpack-preprocessor')
const path = require('path')

const vueEnvs = {}
for (const [key, value] of Object.entries(process.env)) {
  if (key.substr(0, 8) === 'VUE_APP_') {
    vueEnvs[key] = JSON.stringify(value)
  }
}

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.join(__dirname, '../../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'ts-loader',
        }],
      },
      {
        test: /\.js$/,
        exclude: function(filepath) {
          if (filepath.match(/[\\/]node_modules[\\/]quasar[\\/]/)) {
            return false
          }

          // Don't transpile node_modules
          return /node_modules/.test(filepath)
        },
        use: [{
          loader: 'babel-loader',
        }],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': vueEnvs,
    }),
  ],
}
module.exports = (on, config) => {
  on('file:preprocessor', webpackPreprocessor({
    webpackOptions,
  }))

  return Object.assign({}, config, {
    fixturesFolder: 'tests/fixtures',
    integrationFolder: 'tests-e2e/specs',
    screenshotsFolder: 'tests-e2e/screenshots',
    videosFolder: 'tests-e2e/videos',
    supportFile: 'tests-e2e/support/index.js',
  })
}
