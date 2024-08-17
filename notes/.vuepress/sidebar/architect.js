module.exports = [
    '',
    'system_design_overview',
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
            'patterns/retry',
            'patterns/circuit-breaker',
            'patterns/stateless',
            'patterns/graceful-degradation',
            'patterns/bulkhead',
            'patterns/high-water-mark/',
            'fault-tolerance',
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