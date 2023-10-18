module.exports = [
    '',
    'authentication',
    'authorization',
    {
        title: "Microservices",
        children: [
            'microservices',
            'mistakes',
            'OrchestrationVsChoreography',
            'microservice/cohesion-coupling/',
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