
const prefixMapFn = (prefix) => (item) => {
  return typeof item === "string" ? `${prefix}${item}` : item;
} 

const cleanCodeDocs = [
  'clean-code',
  'code-structure',
  'refactor',
  'refactor-catalog',
].map(prefixMapFn('/common/clean-code/'));

const commonDocs = [
  'optimize_web',
  'cross_domain',
  'seo',
  'realtime',
  'crawl',
  'document',
  'debugging',
  'deployment/deploy-strategies',
  {
    title: "Architecture",
    children: [
      'architect/authenication',
      'architect/messaging',
      'network/restful',
      'db/redis.html#cache-strategies',
    ]
  },
  {
    title: "Clean code",
    children: cleanCodeDocs,
  }
].map(prefixMapFn('/common/'));

const oopDocs = [
  'oop-terms',
  'oop-vs-fp',
  'design-patterns',
  'ts-designpatterns',
].map(prefixMapFn('/oop/'));

const laravelDocs = [
  'best-practices',
  'laravel-notes',
].map(prefixMapFn('/php/laravel/'));

const reactDocs = [
  'react',
  'mobx',
  'nextjs',
  'react-vs-vue',
  'vue_react',
].map(prefixMapFn('/react/'));

const toolDocs = [
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
  '/tools/k8s/k8s',
  '/tools/kafka',
  '/aws/aws-services',
];

const networkDocs = [
  'network',
  'address',
  'obtain-ip',
  'ethernet',
].map(prefixMapFn('/network/'));



module.exports = [
    {
      title: 'Chuyện muôn thuở',
      children: commonDocs,
    },
    {
      title: "Database",
      children: [
        'architect',
        'id-generate',
        'tx-isolation',
        'optimize_db',
        'mysql_snippets',
        'postgre',
        'couchdb',
        'mongodb',
        'cassandra',
        'elasticsearch',
        'redis',
        'nosql',
        'use-cases',
        'db-table-design',
      ].map(prefixMapFn('/db/'))
    },
    {
      title: "Giải Toán",
      children: [
        '/algorithm/sum100', 
        '/algorithm/no_if_loop',
        '/algorithm/string',
        // '/algorithm/rate_limit',
        '/algorithm/authority',
        '/algorithm/sort',
        '/algorithm/bakery', 
      ]
    },
    {
      title: "OOP",
      children: oopDocs,
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
        // '/javascript/functor',
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
            '/snippets/mocha',
            '/snippets/event_storage',
            '/snippets/custom_promise_all',
            '/snippets/access_object',
          ]
        }
      ]
    },
    {
      title: "ReactJS",
      children: reactDocs,
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
        '/php/wordpress',
        '/php/crunz',
        '/php/phpdoc',
        // '/php/clean/',
        {
          title: "Laravel",
          children: laravelDocs,
        },
      ]
    },
    {
      title: "Tools / Toys",
      children: toolDocs,
    },
    {
      title: "Thuật ngữ",
      sidebarDepth: 1,
      children: [
        '/terms/javascript',
        '/terms/patterns',
        '/terms/principles',
        '/terms/testing',
        '/terms/12factors',
        '/terms/concurrent',
      ]
    },
    {
      title: "Network",
      children: networkDocs,
    },
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