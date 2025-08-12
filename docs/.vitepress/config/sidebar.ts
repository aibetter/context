import type { DefaultTheme } from 'vitepress'
import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'

const cursorRulesLanguagesDir = resolve(__dirname, '../../../data/cursor/rules/languages')

const cursorRulesLanguages: (lang: 'zh' | 'en') => DefaultTheme.SidebarItem[] = lang => readdirSync(cursorRulesLanguagesDir).map((path) => {
  const language = path.split('.')[0]

  return ({
    text: language,
    link: `${lang === 'en' ? '' : `/${lang}`}/cursor-rules/languages/${language.toLocaleLowerCase()}`,
  })
}).sort((a, b) => a.text.localeCompare(b.text))

const cursorRulesRolesDir = resolve(__dirname, '../../../data/cursor/rules/roles')

const cursorRulesRoles: (lang: 'zh' | 'en') => DefaultTheme.SidebarItem[] = lang => readdirSync(cursorRulesRolesDir).map((path) => {
  const role = path.split('.')[0]

  return ({
    text: role,
    link: `${lang === 'en' ? '' : `/${lang}`}/cursor-rules/roles/${role.toLocaleLowerCase()}`,
  })
}).sort((a, b) => a.text.localeCompare(b.text))

export const sidebarEN: DefaultTheme.SidebarItem[] = [
  {
    text: 'Guide',
    items: [
      {
        text: 'What is AI Context?',
        link: '/guide/what',
      },
    ],
  },
  {
    text: 'Resources',
    items: [
      {
        text: 'MCP Servers',
        link: '/resources/mcp-servers',
      },
    ],
  },
  {
    text: 'Cursor Rules',
    items: [
      {
        text: 'Constitution',
        link: '/cursor-rules/constitution',
      },
      {
        text: 'Languages',
        items: cursorRulesLanguages('en'),
      },
      {
        text: 'Roles',
        items: cursorRulesRoles('en'),
      },
    ],
  },
]

export const sidebarZH: DefaultTheme.SidebarItem[] = [
  {
    text: '指南',
    items: [
      {
        text: '什么是 AI Context？',
        link: '/zh/guide/what',
      },
    ],
  },
  {
    text: '资源',
    items: [
      {
        text: 'MCP Servers',
        link: '/zh/resources/mcp-servers',
      },
    ],
  },
  {
    text: 'Cursor 规则',
    items: [
      {
        text: '宪法',
        link: '/zh/cursor-rules/constitution',
      },
      {
        text: '编程语言',
        items: cursorRulesLanguages('zh'),
      },
      {
        text: '角色',
        items: cursorRulesRoles('zh'),
      },
    ],
  },
]
