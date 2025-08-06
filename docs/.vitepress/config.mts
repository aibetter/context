import { env } from 'node:process'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
// import llmstxt from 'vitepress-plugin-llms'
import { monitorScripts } from './config/head'
import { cursorRulesLanguages } from './config/sidebar'

const isProd = env.NODE_ENV === 'production'

export default defineConfig({
  title: 'AI Context',
  description: 'Contextual knowledge base for various fields of AI',

  rewrites: {
    'en/:rest*': ':rest*',
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  sitemap: {
    hostname: 'https://context.aibetter.run',
  },

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    ...(isProd ? monitorScripts : []),
  ],

  themeConfig: {
    logo: '/logo-256.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aibetter/context.git' },
    ],
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
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
                text: 'Languages',
                link: '/cursor-rules/languages/vue',
              },
            ],
          },
        ],
        sidebar: [
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
                text: 'Languages',
                items: cursorRulesLanguages('en'),
              },
            ],
          },
        ],
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
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
                text: 'Languages',
                link: '/zh/cursor-rules/languages/vue',
              },
            ],
          },
        ],
        sidebar: [
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
                text: '编程语言',
                items: cursorRulesLanguages('zh'),
              },
            ],
          },
        ],
      },
    },
  },

  vite: {
    plugins: [
      // llmstxt({
      //   domain: 'https://context.aibetter.run',
      //   ignoreFiles: ['**/index.md', 'zh/**/*.md'],
      // }),
      tailwindcss(),
    ],
  },

  markdown: {
    theme: {
      light: 'rose-pine-dawn',
      dark: 'rose-pine-moon',
    },
  },
})
