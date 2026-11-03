import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  dest: '../note',
  title: 'AI biết',
  description: 'Wikipedia của tui',
  base: '/note',

  theme: defaultTheme({
    logo: 'https://assets.sotaychemgio.com/logo.jpg',
    navbar: ['/ai-knowledge'],
    sidebar: {
      '/': [
        {
          text: 'Ai biết',
          children: [
            'ai-knowledge',
            'ai-glossary'
          ],
        },
        {
          text: 'Tools',
          children: [
            'tools/ai-cloudflare',
            'tools/ts-tools',
            'tools/py-tools',
          ],
        },
      ],

    },
  }),

  bundler: viteBundler(),
})
