import en from './en/common.json'
import zh_tw from './zh-TW'
import { createI18n } from 'vue-i18n'

export default createI18n({
  messages: { 'en-US': en, 'zh-TW': zh_tw },
  legacy: false,
  locale: 'zh-TW',
  fallbackLocale: 'zh-TW',
})
