import { ClosePopup, Dialog, Loading, Notify, Quasar } from 'quasar'
import 'quasar/dist/quasar.ie.polyfills.js'
import { VueConstructor } from 'vue'

export async function loadQuasarLanguageAsync(lang: string): Promise<void> {
  if (lang === 'en') lang = 'en-us'
  await import(`quasar/lang/${lang}`)
    .then((dictionary) => {
      Quasar.lang.set(dictionary.default)
    })
}

// leave the export, even if you don't use it
export default ({ Vue }: { Vue: VueConstructor }): void => {
  Vue.use(Quasar, {
    config: {
      brand: {},
    },
    components: {},
    directives: { ClosePopup },
    plugins: {
      Dialog,
      Loading,
      Notify,
    },
  })
}
