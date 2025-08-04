import { env } from 'node:process'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
// import llmstxt from 'vitepress-plugin-llms'
import { monitorScripts } from './config/head'

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
                text: 'MCP 服务器',
                link: '/zh/resources/mcp-servers',
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
})
