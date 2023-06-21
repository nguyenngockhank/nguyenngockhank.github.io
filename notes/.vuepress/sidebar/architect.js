module.exports = [
    '',
    'philosophy-sw-design',
    'authenication',
    'authorization',
    'distributed-patterns',
    'mistakes',
    'terms',
    'OrchestrationVsChoreography',
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
            'full_stack_software_design',
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