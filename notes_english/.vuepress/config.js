const path = require('path')

module.exports = {
  title: 'Anh - Khánk',
  description: 'Wikipedia của tui',
  base: '/en/',
  dest: '../en',
  locales: {
    '/': {
      lang: 'vi', // this will be set as the lang attribute on <html>
    }
  },
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "../public/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "../public/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "../public/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "../public/favicons/manifest.json"}],
    ['link', { rel: "mask-icon", href: "../public/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "../public/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "msapplication-config", content: "../public/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  themeConfig: {
    sidebar: [
      {
        title: "Từ vựng",
        children: [
          '/voka/very',
          '/voka/feelings',
          '/voka/positive',
          '/voka/describe',
        ]
      },
    ],
    nav: [
      { text: 'Home', link: 'https://nguyenngockhank.github.io' },
      { text: 'Tech Docs', link: 'https://nguyenngockhank.github.io/docs/' },
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve()
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/google-analytics', {
      ga: 'UA-148742356-1'
    }],
  ]
}