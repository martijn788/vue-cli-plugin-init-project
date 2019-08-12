const path = require('path')
require('dotenv-safe').config({
  allowEmptyValues: true,
})

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'tests': path.join(__dirname, 'tests'),
      },
    },
  },
  pluginOptions: {
    quasar: {
      rtlSupport: false,
      treeShake: true,
    },
  },
  transpileDependencies: [
    /[\\\]node_modules[\\/]quasar[\\/]/,
  ],
}
