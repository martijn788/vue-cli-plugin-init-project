import Vue from 'vue'
import Vuex from 'vuex'
import VueXhrState, { VuexXhrCreator } from 'vuex-xhr-state'

Vue.use(Vuex)
Vue.use(VueXhrState)

const xhrPlugins: VuexXhrCreator[] = []

const store = new Vuex.Store({
  strict: true,
  plugins: [
    ...xhrPlugins.map((plugin) => plugin.plugin()),
  ],
})
store.xhrPlugins = xhrPlugins

store.$reset = (): void => {
  store.xhrPlugins.forEach((plugin: VuexXhrCreator) => {
    plugin.reset(store)
  })
}

export default store
