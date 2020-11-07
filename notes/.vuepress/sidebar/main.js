module.exports = [
    {
      title: 'Chuyện muôn thuở',
      children: [
        '/common/optimize_web',
        '/common/cross_domain',
        '/common/seo',
        '/common/realtime',
        '/common/crawl',
        '/common/refactor',
        '/common/refactor-catalog',
        '/common/restful',
        '/common/document',
      ],
    },
    {
      title: "Giải Toán",
      children: [
        '/algorithm/string',
        '/algorithm/rate_limit',
        '/algorithm/authority',
        '/algorithm/sort',
        '/algorithm/no_if_loop',
        '/algorithm/bakery', 
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
        '/tools/vscode',
        '/tools/redis',
        '/tools/docker',
        '/tools/go',
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
        '/terms/concurrent',
        '/terms/principles',
        '/terms/97things4dev',
      ]
    },
    {
      title: "Database",
      children: [
        '/db/architect',
        '/db/optimize',
        '/db/mysql_snippets',
        '/db/postgre',
        '/db/nosql',
      ]
    },
    {
      title: "Javascript",
      children: [
        '/javascript/tricks',
        '/javascript/stories/weird',
        '/javascript/stories/es6',
        '/snippets/regex',
        '/javascript/axios_jqueryajax',
        '/javascript/bookmarklet',
        '/javascript/functor',
        '/snippets/mocha',
        '/snippets/firebase',
        '/javascript/clean-code',
        {
          title: 'Snippets',
          children: [
            '/snippets/event_storage',
            '/snippets/custom_promise_all',
            '/snippets/access_object',
          ]
        }
      ]
    },
    {
      title: "VueJS",
      children: [
        '/vue/communication',
        '/vue/shorthands',
        '/vue/dynamic',
        '/vue/tricks',
        '/vue/vuepress',
        '/vue/test',
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
        '/php/crunz',
        '/php/phpdoc',
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