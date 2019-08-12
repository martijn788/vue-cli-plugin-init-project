const fs = require('fs')
const { EOL } = require('os')

module.exports = function(api) {
  api.extendPackage({
    scripts: {
      'dev': 'vue-cli-service serve',
      'serve': 'vue-cli-service serve',
      'build': 'vue-cli-service build',
      'lint': 'vue-cli-service lint --fix && laura-wert-cli tslint && cd tests-e2e/ && laura-wert-cli tslint  **/*.ts **/**/*.ts && cd ..',
      'test:e2e': 'cypress open',
      'test:e2eh': 'vue-cli-service test:e2e --headless',
      'test:unit': 'vue-cli-service test:unit --include tests/unit/setup.ts tests/unit/',
      'test:unit-s': 'vue-cli-service test:unit --include tests/unit/setup.ts',
    },
    dependencies: {
      '@laura-wert/vee-form-handler': '^5.1.0',
      '@laura-wert/vue-helpers': '^2.1.0',
      '@quasar/extras': '^1.2.0',
      '@types/chai-as-promised': '^7.1.2',
      'axios': '^0.18.1',
      'dotenv-safe': '^6.1.0',
      'quasar': '^1.0.2',
      'vee-validate': '2.2.10',
      'vue': '^2.6.7',
      'vue-class-component': '^7.0.2',
      'vue-i18n': '^8.8.1',
      'vue-property-decorator': '^8.1.0',
      'vue-router': '^3.0.3',
      'vuex': '^3.1.0',
      'vuex-class': '^0.3.1',
      'vuex-xhr-state': '^1.0.3',
    },
    'devDependencies': {
      '@cypress/webpack-preprocessor': '^4.1.0',
      '@laura-wert/vue-test-helpers': '^2.5.1',
      '@types/node': '^12.0.8',
      '@types/sinon': '^7.0.12',
      '@types/sinon-chai': '^3.2.2',
      'babel-plugin-transform-imports': '^1.5.1',
      'chai-as-promised': '^7.1.1',
      'cross-env': '^5.2.0',
      'eslint-plugin-chai-friendly': '^0.4.1',
      'flush-promises': '1.0.2',
      'sinon': '^7.2.2',
      'sinon-chai': '^3.3.0',
      'tslint-no-unused-expression-chai': '^0.1.4',
    },
  })
  api.onCreateComplete(() => {
    const content = fs.readFileSync('package.json', { encoding: 'utf-8' })
    const lines = content.split(/\r?\n/g)
    const tslintIdx = lines.findIndex(line => line.match(/"laura-wert-cli tslint",/))
    if (tslintIdx === -1) {
      const gitAdddIdx = lines.findIndex(line => line.match(/"git add"/))

      lines.splice(gitAdddIdx, 0, `      "laura-wert-cli tslint",`)
      fs.writeFileSync('package.json', lines.join(EOL), { encoding: 'utf-8' })
    }
  })
}
