export type Lang = 'zh' | 'en'
export const langKey = 'lang-f7sN'

export const setLang = (lang: Lang) => {
  localStorage.setItem(langKey, lang)
  location.reload()
}
