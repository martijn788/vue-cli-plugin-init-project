vue-cli-plugin-init-project
# install
- add the following json to your'e ~/.vuerc file as a preset
```json
"lauraWert": {
  "useConfigFiles": true,
  "plugins": {
    "@vue/cli-plugin-babel": {},
    "@vue/cli-plugin-typescript": {
      "classComponent": true,
      "useTsWithBabel": true
    },
    "@vue/cli-plugin-eslint": {
      "config": "standard",
      "lintOn": [
        "save",
        "commit"
      ]
    },
    "@vue/cli-plugin-unit-mocha": {},
    "@vue/cli-plugin-e2e-cypress": {}
  },
  "router": true,
  "routerHistoryMode": true,
  "vuex": true,
  "cssPreprocessor": "stylus"
}
```
- make a new vue project with the lauraWert preset
```bash
vue create <project-name>
```
- choose the lauraWert preset
- add the plugin
```bash
cd <project-name>
yarn add --dev @laura-wert/vue-cli-plugin-init-project
```
- install the boiler plate
```bash 
vue invoke @laura-wert/vue-cli-plugin-init-project 
```


