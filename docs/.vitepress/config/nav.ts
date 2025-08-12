import type { DefaultTheme } from 'vitepress'

export const navEN: DefaultTheme.NavItem[] = [
  {
    text: 'Guide',
    link: '/guide/what',
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
        link: '/cursor-rules/languages/vue',
      },
      {
        text: 'Roles',
        link: '/cursor-rules/roles/translator',
      },
    ],
  },
]

export const navZH: DefaultTheme.NavItem[] = [
  {
    text: '指南',
    link: '/zh/guide/what',
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
        link: '/zh/cursor-rules/languages/vue',
      },
      {
        text: '角色',
        link: '/zh/cursor-rules/roles/translator',
      },
    ],
  },
]
