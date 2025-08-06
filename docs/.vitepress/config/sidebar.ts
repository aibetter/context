import type { DefaultTheme } from 'vitepress'
import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'

const cursorRulesLanguagesDir = resolve(__dirname, '../../../data/cursor/rules/languages')

export const cursorRulesLanguages: (lang: 'zh' | 'en') => DefaultTheme.SidebarItem[] = lang => readdirSync(cursorRulesLanguagesDir).map((path) => {
  const language = path.split('.')[0]

  return ({
    text: language,
    link: `${lang === 'en' ? '' : `/${lang}`}/cursor-rules/languages/${language.toLocaleLowerCase()}`,
  })
}).sort((a, b) => a.text.localeCompare(b.text))
