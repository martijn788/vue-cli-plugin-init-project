const fs = require('fs')
const { EOL } = require('os')

module.exports = function(api) {
  api.onCreateComplete(() => {
    const content = fs.readFileSync('public/index.html', { encoding: 'utf-8' })
    const lines = content.split(/\r?\n/g)

    const noScriptIdx = lines.findIndex(line => line.match(/<noscript>/))

    lines[noScriptIdx + 1] =
      `      <strong>De applicatie werkt niet zonder javascript. Activeer javascript om door te kunnen gaan.</strong>`,

      fs.writeFileSync('public/index.html', lines.join(EOL), { encoding: 'utf-8' })
  })
}
