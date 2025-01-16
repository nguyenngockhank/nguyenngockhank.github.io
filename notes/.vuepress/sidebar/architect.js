module.exports = [
    '',
    {
        title: 'System design',
        children: [
            'system_design_overview',
            'scalability',
            'patterns/app-logic-patterns',
            'transaction',
        ]
    },
    {
        title: 'Cloud',
        children: [
            'cloud_overview',
            'serverless_overview',
        ]
    },

    {
        title: "Communication",
        children: [
            'communication_overview',
            'messaging',
            'queue',
            'rest/restful',
            'grpc',
            'graphql',
            'websocket',
            'audit'
        ]
    },
    {
        title: "Auth",
        children: [
            'auth/auth-terms',
            'auth/password-notes',
            'auth/passwordless',
            'auth/jwt',
            'auth/mfa',
            'auth/authentication',
            'auth/authorization',
            'auth/sso',
            'auth/ssh',
        ]
    },
    {
        title: "Microservices",
        children: [
            'microservices',
            'mistakes',
            'OrchestrationVsChoreography',
            'microservice/cohesion-coupling/',
            'microservice/loadbalancer',
            'microservice/apigateway',
            'service-mesh',
            'microservice/cross-cutting-concerns/',
        ]
    },
    {
        title: "Distributed System Patterns",
        children: [
            'patterns/2pc/',
            'patterns/circuit-breaker',
            'patterns/stateless',
            'patterns/high-water-mark/',
            {
                title: 'Fault tolerance',
                children: [
                    'fault-tolerance',
                    'patterns/graceful-degradation',
                    'patterns/retry',
                    'patterns/rate-limiter',
                    'patterns/bulkhead',
                    'ddd/acl',
                ]
            },
            'distributed-patterns',
        ]
    },
    {
        title: 'Security',
        children: [
            'security/security_overview',
            'security/cyber_attack',
            'security/cryptography',
        ]
    },
    {
        title: 'Architectures',
        children: [
            'eda',
            'eventsource',
            'cqrs',
            'ddd/',
            'lambda-arch/',
            {
                title: "DDD",
                children: [
                    'ddd/',
                    'ddd/acl',
                    'ddd/context-mapping',
                ]
            }
            // 'clean_A',
            // 'ebi',
            // 'onion_A',
            // 'soa',
            // 'cqrs',
            // 'event_driven_A',
            // 'hexagonal_A',
            // 'spa',
        ]
    },
    {
        title: 'Khác',
        children: [
            'terms',
            'philosophy-sw-design',
            'full_stack_software_design',
            // {
            //     title: 'Họ làm điều đó như nào?',
            //     children: [
            //         '/db/pinterest_shard',
            //     ]
            // },
        ]
    },
]