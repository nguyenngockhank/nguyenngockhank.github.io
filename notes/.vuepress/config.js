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
    nav: [
      { text: 'Home', link: 'https://nguyenngockhank.github.io' },
    ],
    sidebar: [
      {
        title: "Chuyện muôn thuở",
        children: [
          '/common/optimize_web',
          '/common/cross_domain',
          '/common/authenication',
          '/common/seo',
          '/common/realtime',
          '/common/crawl',
          '/common/refactor',
        ]
      },
      {
        title: "Giải Toán",
        children: [
            '/algorithm/string',
            '/algorithm/rate_limit',
            '/algorithm/authority',
            '/algorithm/sort',
            '/algorithm/no_if_loop',
        ]
      },
      {
        title: "Tools / Toys",
        children: [
          '/node/npm',
          '/tricks/git',
          '/tricks/linux',
          '/tricks/mac',
          '/tools/chrome',
          '/tools/selenium_ide',
          '/tools/gg_app_script',
          '/tools/puppeteer',
        ]
      },
      {
        title: "Thuật ngữ",
        sidebarDepth: 2, 
        children: [
          '/terms/javascript',
          '/terms/oop', 
          '/terms/testing', 
          '/terms/ddd', 
        ]
      },
      {
        title: "Database",
        children: [
          '/db/architect',
          '/db/optimize',
          '/db/mysql_snippets',
          '/db/pinterest_shard',
          '/db/sql_nosql',
        ]
      },
      {
        title: "Javascript",
        children: [
          '/javascript/tricks',
          '/javascript/stories/weird',
          '/javascript/stories/es6',
          '/snippets/regex',
          '/snippets/custom_promise_all',
          '/snippets/event_storage',
          '/javascript/axios_jqueryajax',
          '/javascript/bookmarklet',
          '/snippets/mocha',
        ]
      },
      {
        title: "PHP",
        children: [
          '/php/php7',
          '/php/oop',
          '/php/magic',
          '/php/laravel',
          '/php/wordpress',
        ]
      }, 
      {
        title: 'CSS',
        children: [
          '/css/cheatsheet',
          '/css/tricks',
        ]
      }
    ]
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