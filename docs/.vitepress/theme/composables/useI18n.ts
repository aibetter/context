import { get } from 'lodash-es'
import { useData } from 'vitepress'
import en from '../langs/en.json'
import zh from '../langs/zh.json'

export function useI18n() {
  const { lang } = useData()

  return {
    t: (key: string) => lang.value === 'zh-CN' ? get(zh, key) : get(en, key),
  }
}
