
const prefixMapFn = (prefix) => (item) => {
  return typeof item === "string" ? `${prefix}${item}` : item;
}

const cleanCodeDocs = [
  'cleancode_overview',
  'naming',
  'deps',
  'testing',
  'code-structure',
  'notes',
  'refactor',
  'refactor-catalog',
].map(prefixMapFn('/clean-code/'));

const commonDocs = [
  {
    title: "Optimize Perf",
    children: [
      '/common/optimize_overview',
      '/common/optimize_web',
      '/common/optimize_be',
      '/common/scaling_overview',
      '/common/cache/overview',
      '/common/cdn/cdn',
    ]
  },
  {
    title: "Communication",
    children: [
      '/common/realtime',
      '/common/notification/',
    ]
  },
  {
    title: "Clean code",
    children: cleanCodeDocs,
  },
  'deployment-overview',
  'seo',
  'crawl',
  'document',
  'debugging',
  'cross_domain',
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
  'react-patterns',
  'mobx',
  'nextjs',
  'react-vs-vue',
  'vue_react',
].map(prefixMapFn('/react/'));

const toolDocs = [
  '/tools/docker',
  '/tools/k8s/k8s',

  '/tricks/git',
  '/node/npm',
  // '/tools/redis',
  '/tricks/mac',
  '/tricks/youtube',
  '/tools/chrome',
  '/tools/yaml',
  '/tools/selenium_ide',
  '/tools/gg_app_script',
  '/tools/puppeteer',
  '/tools/vscode',
  {
    title: "Redis",
    children: [
      '/tools/redis_overview',
      '/db/redis',
    ]
  },
  {
    title: "Kafka",
    children: [
      'kafka/kafka_overview',
      'kafka',
      'kafka-vs-jetstream',
    ].map(prefixMapFn('/tools/'))
  },
  {
    title: "Linux",
    children: [
      'linux_notes',
      'linux_ssh',
      'crontab',
      'grep',
      'linux_network',
    ].map(prefixMapFn('/linux/'))
  }
];

const networkDocs = [
  'network',
  'address',
  'obtain-ip',
  'ethernet',
  'internet-protocol',
  'devices',
  'nat',
  'firewall',
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
  'reduce-costs',
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
    title: "Tools / Toys",
    children: toolDocs,
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
  },
  {
    title: "Database",
    children: [
      'db_overview',
      'db_types',
      'use-cases',
      'nosql',
      'architect',
      'optimize_db',
      'db-table-design',
      'relational_db',
      // 'id-generate',
      'tx-isolation',
      // 'acid',
      'mysql_snippets',
      'postgre',
      'couchdb',
      'mongodb',
      'cassandra',
      'elasticsearch',
      'redis',
    ].map(prefixMapFn('/db/'))
  },
  {
    title: "Giải Toán",
    children: [
      '/algorithm/algo_overview',
      '/algorithm/sum100',
      '/algorithm/no_if_loop',
      // '/algorithm/string',
      '/algorithm/authority',
      // '/algorithm/sort',
      // '/algorithm/bakery',
      '/algorithm/upload-large-file',
      // '/datastructure/queue',
    ]
  },
  {
    title: 'Front end',
    children: [
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
        title: 'HTML / CSS',
        children: [
          'box-model',
          'css-flex',
          'tricks',
        ].map(prefixMapFn('/css/'))
      }
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
    title: "Thuật ngữ",
    sidebarDepth: 1,
    children: [
      '/terms/javascript',
      '/terms/patterns',
      '/terms/principles',
      '/terms/pipeline',
      '/terms/testing',
      '/terms/12factors',
      '/terms/concurrent',
      '/data/terms'
    ]
  },
  {
    title: "Payment",
    children: [
      '/terms/payment/',
      '/terms/payment/accounting',
      '/terms/payment/payment_network',
      '/terms/payment/stripe',
    ]
  },
  {
    title: "Network",
    children: networkDocs,
  },

  {
    title: "AWS",
    children: awsDocs,
  },
]