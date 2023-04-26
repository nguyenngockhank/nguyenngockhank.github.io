module.exports = [
    '',
    'philosophy-sw-design',
    {
        title: 'Communication',
        children: [
            '../network/restful',
            '../network/websocket',
            'messaging',
            '../tools/kafka',
            '../tools/kafka-vs-jetstream',
            'OrchestrationVsChoreography',
            '../network/network',
        ]
    },
    {
        title: 'The Architecture of Systems', 
        children: [
            'microservices',
            'clean_A',
            'ebi',
            'onion_A',
            'soa',
            'cqrs',
            'event_driven_A',
            'hexagonal_A',
            'spa',
            // 'ddd',
        ]
    },
    {
        title: 'Khác',
        children: [
            'authenication',
            'authorization',
            'full_stack_software_design',
            'terms',
            {
                title: 'Họ làm điều đó như nào?',
                children: [
                    'circuit_breaker',
                    '/db/pinterest_shard',
                ]
            },
        ]
    },
]