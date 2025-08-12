import { env } from 'node:process'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
// import llmstxt from 'vitepress-plugin-llms'
import { monitorScripts } from './config/head'
import { navEN, navZH } from './config/nav'
import { sidebarEN, sidebarZH } from './config/sidebar'

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
        nav: navEN,
        sidebar: sidebarEN,
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: navZH,
        sidebar: sidebarZH,
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
