const template = require('./template')
const packageJson = require('./package-json')
const main = require('./main')
const publicIndex = require('./public-index')
const tsconfig = require('./tsconfig')
const { exec } = require('child_process')

module.exports = (api, options, rootOptions) => {
  template(api)
  publicIndex(api)
  packageJson(api)
  main(api)
  tsconfig(api)
  api.onCreateComplete(() => {
    exec('yarn lint')
  })
}
