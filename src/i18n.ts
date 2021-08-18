import { createI18n } from 'vue-i18n'
import { langKey } from '@/locales'
import zh from '@/locales/zh'
import en from '@/locales/en'

export default createI18n({
  globalInjection: true,
  legacy: false,
  locale: localStorage.getItem(langKey) || (navigator.language.startsWith('zh') ? 'zh' : 'en'),
  fallbackLocale: 'en',
  messages: {
    zh,
    en
  }
})
