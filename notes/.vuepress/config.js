const path = require('path')

module.exports = {
  title: 'Nguyễn Khánk\'s Wiki',
  description: 'Wikipedia của tui',
  base: '/docs/',
  dest: '../docs',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "../public/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "../public/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "../public/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "../public/favicons/site.webmanifest"}],
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
        title: "PHP",
        children: [
            '/php/self_static',
            '/php/wordpress',
            '/php/laravel',
        ]
      },
      {
        title: "Node",
        children: [
            '/node/npm',
            '/node/n',
            '/node/env',
            '/node/node_arguments',
            '/node/sequelize',
        ]
      },
      {
        title: "Javascript",
        children: [
            '/javascript/stories/es6',
            '/javascript/stories/weird',
            '/javascript/tricks',
            '/snippets/custom_promise_all',
            '/snippets/event_storage',
            '/javascript/axios_jqueryajax',
            '/snippets/regex',
            '/javascript/data_type',
        ]
      },

      {
        title: "Common",
        children: [
          '/common/optimize_web',
          '/common/cross_domain',
          '/common/authenication',
          '/common/realtime',
          '/common/crawl',
        ]
      },

      {
        title: "Algorithm / DS",
        children: [
            '/algorithm/string',
            '/algorithm/rate_limit',
            '/algorithm/authority',
            '/algorithm/sort',
        ]
      },

      {
        title: "Tools / Tricks",
        children: [
          '/tricks/git',
          '/tricks/linux',
          '/tricks/mac',
          '/snippets/selenium_ide',
        ]
      },

      {
        title: "Terminology",
        sidebarDepth: 2, 
        children: [
          '/terms/javascript',
          '/terms/oop', 
        ]
      },
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
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-148742356-1' // UA-00000000-0
      }
    ]
  ]
}