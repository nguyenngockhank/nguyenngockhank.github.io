import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  dest: '../note',
  title: 'Nguyễn Khánk\'s Wiki',
  description: 'Wikipedia của tui',
  base: '/note',

  theme: defaultTheme({
    logo: 'https://assets.sotaychemgio.com/logo.jpg',
    navbar: [ '/ai-knowledge'],
  }),

  bundler: viteBundler(),
})
