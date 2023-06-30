module.exports = [
    '',
    'authenication',
    'authorization',
    'cohesion-coupling',
    {
        title: "Distributed System Patterns",
        children: [
            'patterns/2pc/',
            'patterns/retry',
            'patterns/circuit-breaker',
            'patterns/stateless',
            'patterns/graceful-degradation',
            'patterns/bulkhead',
            'fault-tolerance',
            'distributed-patterns',
        ]
    },
   
    {
        title: 'Architectures', 
        children: [
            {
                title: "Microservice",
                children: [
                    'microservices',
                    'mistakes',
                    'OrchestrationVsChoreography',
                ]
            },
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