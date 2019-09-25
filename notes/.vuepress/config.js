const path = require('path')

module.exports = {
  title: 'Nguyễn Khánk\'s Wiki',
  description: 'Wikipedia của tui',
  base: '/docs/',
  dest: '../docs',
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
            '/snippets/node_arguments',
            '/node/sequelize',
        ]
      },
      {
        title: "Javascript",
        children: [
            '/javascript/hoist',
            '/javascript/stories/es6',
            '/javascript/stories/weird',
        ]
      },

      {
        title: "Common",
        children: [
          '/common/optimize_web',
          '/common/cross_domain',
          '/snippets/regex',
        ]
      },

      {
        title: "Tricks",
        children: [
          '/tricks/git',
          '/tricks/linux',
          '/tricks/mac',
        ]
      },

      {
        title: "Others",
        children: [
          '/tricks/authority',
          '/tricks/selenium_ide',
          '/tricks/rate_limit',
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
  }
}