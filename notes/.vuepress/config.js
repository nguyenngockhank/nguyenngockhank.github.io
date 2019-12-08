const path = require('path')

module.exports = {
  title: 'Nguyễn Khánk\'s Wiki',
  description: 'Wikipedia của tui',
  base: '/docs/',
  dest: '../docs',
  locales: {
    '/': {
      lang: 'vi', // this will be set as the lang attribute on <html>
    }
  },
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "../public/favicons/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "../public/favicons/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "../public/favicons/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "../public/favicons/manifest.json" }],
    ['link', { rel: "mask-icon", href: "../public/favicons/safari-pinned-tab.svg", color: "#3a0839" }],
    ['link', { rel: "shortcut icon", href: "../public/favicons/favicon.ico" }],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839" }],
    ['meta', { name: "msapplication-config", content: "../public/favicons/browserconfig.xml" }],
    ['meta', { name: "theme-color", content: "#ffffff" }],
  ],
  themeConfig: {
    searchMaxSuggestions: 10,
    nav: require('./nav/index'),
    sidebar: {
     
      '/architect/': require('./sidebar/architect'), 
      '/': require('./sidebar/main'), 
    }
  },
  extraWatchFiles: [
    '.vuepress/nav/index.js',
    '.vuepress/sidebar/architect.js',
    '.vuepress/sidebar/main.js',
    '.vuepress/markdown/collapse-render.js',
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve()
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    // ['@vuepress/pwa', {
    //   serviceWorker: true,
    //   updatePopup: true
    // }],
    'vuepress-plugin-element-tabs',
    ['@vuepress/google-analytics', {
      ga: 'UA-148742356-1'
    }],

    // plugin container
    [
      'vuepress-plugin-container',
      {
        type: 'quote',
        before: `<blockquote>`,
        after: '</blockquote>',
      },
      {
        type: 'right',
        defaultTitle: '',
      },
      {
        type: 'collapse',
        before: info => `<collapse title="${info}">`,
        after: '</collapse>',
      },
    ],
  ],
}