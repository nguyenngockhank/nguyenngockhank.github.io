module.exports = [
    '',
    {
        title: 'Cloud',
        children: [
            'cloud_overview',
            'serverless_overview',
        ]
    },

    {
        title: "Messages / Events",
        children: [
            'messaging',
            'queue',
        ]
    },
    {
        title: "Auth",
        children: [
            'auth/auth-terms',
            'auth/password-notes',
            'auth/passwordless',
            'auth/ssh',
            'auth/jwt',
            'auth/mfa',
            'auth/authentication',
            'auth/authorization',
            'auth/sso',
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
            'security/sercurity_overview',
        ]
    },
    {
        title: 'Architectures',
        children: [
            'lambda-arch/',
            'eventsource',
            'ddd/',
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
            {
                title: 'Họ làm điều đó như nào?',
                children: [
                    '/db/pinterest_shard',
                ]
            },
        ]
    },
]