import { defineConfig } from 'vitepress'
import { monitorScripts } from './config/head'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  title: "AI Context",
  description: "Contextual knowledge base for various fields of AI",


  rewrites: {
    'en/:rest*': ':rest*'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  sitemap: {
    hostname: 'https://context.aibetter.run'
  },

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    ...(isProd ? monitorScripts : [])
  ],

  themeConfig: {
    logo: '/logo-256.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aibetter/context.git' }
    ],
  },

  locales: {
    root: {
      label: 'English',
      themeConfig: {
        nav: [
          {
            text: 'Guide',
            link:'/guide/what'
          }
        ]
      }
    },
    zh: {
      label: '简体中文',
      themeConfig: {
        nav: [
          {
            text: '指南',
            link: '/zh/guide/what'
          }
        ]
      }
    }
  }
})
