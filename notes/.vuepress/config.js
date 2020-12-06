const path = require('path')

module.exports = {
  title: 'Nguyễn Khánk\'s Wiki',
  description: 'Wikipedia của tui',
  base: '/docs/',
  dest: '../docs',
  port: 9876,
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
    nav: [
      { text: 'Architecture', link: '/architect/'}, 
      { text: 'Kungfu', link: '/kungfu/letsgo'}, 
      { text: 'Home', link: 'https://nguyenngockhank.github.io' },
    ],
    sidebar: {
      '/architect/': require('./sidebar/architect'), 
      '/kungfu/': require('./sidebar/kungfu'), 
      '/': require('./sidebar/main'), 
    }
  },
  extraWatchFiles: [
    '.vuepress/nav/index.js',
    '.vuepress/sidebar/architect.js',
    '.vuepress/sidebar/main.js',
    '.vuepress/sidebar/kungfu.js',
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve()
      }
    }
  },
  plugins: [
    // plugin container
    [
      'vuepress-plugin-container',
      {
        type: 'row',
        before: info => `<row row-class="${info}">`,
        after: '</row>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'box',
        before: info => `<box box-class="${info}">`,
        after: '</box>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'collapse',
        before: info => `<Collapse title="${info}">`,
        after: '</Collapse>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'quote',
        before: `<blockquote class="highlight-quote">`,
        after: '</blockquote>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    // end containers
    'vuepress-plugin-element-tabs',
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/google-analytics', {
      ga: 'UA-148742356-1'
    }],
    [
      'vuepress-plugin-right-anchor',
      {
        showDepth: 1,
        ignore: [
          '/',
          // more...
        ],
        expand: {
          default: true,
          trigger: 'hover'
        },
        customClass: 'right-anchor-wrapper',
        disableGlobalUI: false,
      }
    ],
  ],
}