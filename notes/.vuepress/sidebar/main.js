

module.exports = [
    {
      title: 'Chuyện muôn thuở',
      children: [
        'optimize_web',
        'cross_domain',
        'seo',
        'realtime',
        'crawl',
        'refactor',
        'refactor-catalog',
        'document',
      ].map(item => `/common/${item}`),
    },
    {
      title: "Giải Toán",
      children: [
        '/algorithm/string',
        // '/algorithm/rate_limit',
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
      ]
    },
    {
      title: "Thuật ngữ",
      sidebarDepth: 1,
      children: [
        '/terms/javascript',
        '/terms/oop',
        '/terms/patterns',
        '/terms/principles',
        '/terms/ddd',
        '/terms/testing',
        '/terms/12factors',
        '/terms/concurrent',
      ]
    },
    {
      title: "Database",
      children: [
        '/db/architect',
        '/db/use-cases',
        '/db/optimize',
        '/db/mysql_snippets',
        '/db/postgre',
        '/db/couchdb',
        '/db/redis',
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
          title: 'Typescript',
          children: [
            'javascript/typescript/syntax',
            'javascript/typescript/types'
          ],
        },
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
    // {
    //   title: 'Go',
    //   children: [
    //     {
    //       title: 'The little Go Book',
    //       children: [
    //         '/go/the-little-go/intro',
    //         '/go/the-little-go/c1',
    //         '/go/the-little-go/c2',
    //         '/go/the-little-go/c3',
    //         '/go/the-little-go/c4',
    //         '/go/the-little-go/c5',
    //         '/go/the-little-go/c6',
    //         '/go/the-little-go/end',
    //       ]
    //     },
    //     '/go/clean'
    //   ]
    // },
    // {
    //   title: 'CSS',
    //   children: [
    //     '/css/cheatsheet',
    //     '/css/tricks',
    //   ]
    // }
    {
      title: 'API Guidelines',
      children: [
        // ...['README'].map(item => `/api-guidelines/${item}`),
        `/api-guidelines/overview`,
        {
          title: 'Principles',
          children: [
            'design-api-first-before-code',
            'minimal-api-surface',
            'one-type-of-data-per-api',
            'robustness-principle',
            'rules-for-public-api',
          ].map(item => `/api-guidelines/principles/${item}`),
        }
      ]
    }
  ]