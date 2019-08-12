import VeeValidate, { Locale, Validator } from 'vee-validate'
import validationMessagesNl from 'vee-validate/dist/locale/nl'
import { VueConstructor } from 'vue'

export default ({ Vue }: { Vue: VueConstructor }): void => {
  Vue.use(VeeValidate, {
    locale: process.env.VUE_APP_I18N_LOCALE,
    dictionary: {
      nl: validationMessagesNl,
    },
  })
}

export async function loadVeeValidateLanguageAsync(lang: 'nl'): Promise<void> {
  const dictionary: { default: Locale } = await
    import(/* webpackChunkName: "lang-[request]" */ `@/locale/${lang}/vee-validate`)

  Validator.localize(lang, dictionary.default)
}
