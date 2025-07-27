import { defineConfig } from 'vitepress'

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
   [
    'script',
    {
      type:'text/javascript'
    },
    `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "sl0voa28er");`
   ],
   [
    "script",
    {
      async: '',
      src: 'https://www.googletagmanager.com/gtag/js?id=G-JX60ZNCJEB'
    }
   ],
   [
    "script",
    {},
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-JX60ZNCJEB');`
   ]
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
