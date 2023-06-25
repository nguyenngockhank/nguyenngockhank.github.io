
const prefixMapFn = (prefix) => (item) => {
  return typeof item === "string" ? `${prefix}${item}` : item;
} 

const cleanCodeDocs = [
  'naming',
  'deps',
  'testing',
  'code-structure',
  'notes',
  'refactor',
  'refactor-catalog',
].map(prefixMapFn('/clean-code/'));

const commonDocs = [
  'optimize_web',
  'cross_domain',
  'seo',
  'cache/cache-notes',
  'crawl',
  'document',
  'debugging',
  'deployment/deploy-strategies',
  'cdn/cdn',
  {
    title: "Realtime",
    children: [
      '/common/realtime',
      '/common/notification/',
      '/network/websocket',
    ],
  },
  {
    title: "Messaging",
    children: [
      // 'architect/authenication',
      'architect/messaging',
      'db/redis.html#pub-sub',
      'tools/kafka',
      'tools/kafka-vs-jetstream',
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
  '/tricks/youtube',
  '/tools/chrome',
  '/tools/selenium_ide',
  '/tools/gg_app_script',
  '/tools/puppeteer',
  '/tools/vscode',
  // '/tools/redis',
  '/tools/docker',
  '/tools/k8s/k8s',
];

const networkDocs = [
  'network',
  'address',
  'obtain-ip',
  'ethernet',
  'internet-protocol',
  'devices',
  'nat',
  'network-abbr',
].map(prefixMapFn('/network/'));


const awsDocs = [
  'cloud',
  'architecture',
  'global-infra/',
  'aws-dev-tools',
  'ec2/',
  'elb/',
  'sg/',
  'arn',
  'access-keys',
  'aws-services',
  {
    title: "Network",
    children: [
      'vpc/',
      'vpc',
      'route53/',
    ].map(prefixMapFn('/aws/'))
  }, 
  {
    title: "Messaging Services",
    children: [
      'sqs/',
      'sns/',
      'kinesis/'
    ].map(prefixMapFn('/aws/'))
  },
  {
    title: "Data processing", 
    children: [
      'ml/',
      'data-analytics/',
    ].map(prefixMapFn('/aws/'))
  },
  {
    title: "Storage",
    children: [
      'db/',
      'postgre/',
      'ebs',
      'efs/',
      // { title: 'EC2 Instance Store', path: '/aws/ec2/#ec2-instance-store' },
      's3/',
      'dynamo/'
    ].map(prefixMapFn('/aws/'))
  },
  'misc',
  'aws-abbr'
].map(prefixMapFn('/aws/'));

const javascriptDocs = [
  '/javascript/tricks',
  '/javascript/stories/weird',
  // '/javascript/stories/es6',
  '/snippets/regex',
  '/javascript/axios_jqueryajax',
  '/javascript/bookmarklet',
  // '/javascript/functor',
  '/javascript/kafka-in-node',
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
        'acid',
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
        '/algorithm/authority',
        '/algorithm/sort',
        '/algorithm/bakery', 
        '/algorithm/upload-large-file',
      ]
    },
    {
      title: "OOP",
      children: oopDocs,
    },
    {
      title: "Javascript",
      children: javascriptDocs,
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
        '/api/',
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
    },
    {
      title: "AWS",
      children: awsDocs,
    },
  ]