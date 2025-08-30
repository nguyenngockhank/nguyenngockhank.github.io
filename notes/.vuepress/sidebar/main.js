
const prefixMapFn = (prefix) => (item) => {
  return typeof item === "string" ? `${prefix}${item}` : item;
}

const cleanCodeDocs = [
  'cleancode_overview',
  'naming',
  'deps',
  'testing',
  'reusability',
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
  'i18n',
  'seo',
  'crawl',
  'document',
  'debugging',
  'cross_domain',
  'concurrent',
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

const reactNativeDocs = [
  'overview',
  'storage',
  'links',
  'sharing',
  'ota',
].map(prefixMapFn('/react-native/'));

const toolDocs = [
  '/devops/devops_overview',
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
      'kafka/kafka',
      'kafka/kafka-vs-jetstream',
    ].map(prefixMapFn('/tools/'))
  },
  {
    title: "Linux",
    children: [
      'linux_notes',
      {
        title: 'Linux Tools',
        children: [
          'bash_script',
          'grep',
          'linux_tools',
          'linux_ssh',
        ].map(prefixMapFn('/linux/'))
      },
      'crontab',
      'linux_network',
    ].map(prefixMapFn('/linux/'))
  },
  '/devops/deployment-overview',
  '/tools/docker',
  '/tools/k8s/k8s',

  '/tricks/git',
  '/tricks/mac',
  '/tricks/youtube',
  '/tools/chrome',
  '/tools/yaml',
  '/tools/selenium_ide',
  '/tools/gg_app_script',
  '/tools/puppeteer',
  '/tools/vscode',
  '/tools/nginx',

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
  'dns-record',
  'network-abbr',
].map(prefixMapFn('/network/'));


const awsDocs = [
  'cloud',
  'architecture',
  'global-infra/',
  // 'aws-dev-tools',
  'ec2/',
  'elb/',
  'sg/',
  'arn',
  // 'access-keys',
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
    title: "NodeJs",
    children: [
      'npm',
      'n',
      'module-resolution',
      'node_arguments',
      'modularity',
      'tools',
    ].map(prefixMapFn('/node/'))
  },
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
    title: "Devops",
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
      '/geo'
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
        title: "React native",
        children: reactNativeDocs,
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
      '/javascript/fe-memory-leak',
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
      '/data/terms'
    ]
  },
  {
    title: "Payment",
    children: [
      '/terms/payment/',
      '/terms/payment/accounting',
      '/terms/payment/reconciliation',
      '/terms/payment/scan_to_pay',
      '/terms/payment/payment_network',
      '/terms/payment/stripe',
      '/terms/payment/paypal',
      '/terms/payment/psp',
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