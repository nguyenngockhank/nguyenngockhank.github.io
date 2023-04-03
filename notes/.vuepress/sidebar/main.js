
const prefixMapFn = (prefix) => (item) => {
  return typeof item === "string" ? `${prefix}${item}` : item;
} 
  

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
        // 'refactor-catalog',
        'code-structure',
        'document',
        'debugging',
        'deployment/deploy-strategies',
        {
          title: "Architecture",
          children: [
            'architect/authenication',
            'architect/messaging',
            'architect/restful',
            'db/redis.html#cache-strategies',
          ]
        }
      ].map(prefixMapFn('/common/')),
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
        'architect',
        'use-cases',
        'optimize',
        'mysql_snippets',
        'postgre',
        'couchdb',
        'redis',
        'nosql',
        'db-table-design',
      ].map(prefixMapFn('/db/'))
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
        `/api-guidelines/overview`,
        {
          title: 'Principles',
          children: [
            // 'design-api-first-before-code',
            // 'minimal-api-surface',
            'one-type-of-data-per-api',
            // 'robustness-principle',
            'rules-for-public-api',
          ].map(prefixMapFn('/api-guidelines/principles/'))
        },
        {
          title: 'Conventions',
          children: [
            'http-status-codes',
            {
              title: "Verb and URI (REST)",
              children: [
                '',
                'post-vs-put',
                'request-methods',
                'others',
              ].map(prefixMapFn('/api-guidelines/conventions/verb-and-uri-rest/'))
            },
            {
              title: "JSON Fields Naming Conventions",
              children: [
                'formats',
                'json-structure',
              ].map(prefixMapFn('/api-guidelines/conventions/json-fields-naming-conventions/'))
            },
            'error-responses',
          ].map(prefixMapFn('/api-guidelines/conventions/')),
        },
        {
          title: "Coding Guidelines",
          children: [
            'api-development-workflow',
            'review-code-api-doc',
            'decorators-for-endpoints',
          ].map(prefixMapFn('/api-guidelines/coding-guidelines/')),
        }
      ]
    }
  ]