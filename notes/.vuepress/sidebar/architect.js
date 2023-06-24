module.exports = [
    '',
    'authenication',
    'authorization',
    {
        title: "Distributed System",
        children: [
            'microservices',
            'distributed-patterns',
            'mistakes',
            'OrchestrationVsChoreography',
        ]
    },
    {
        title: 'Architecture of Systems', 
        children: [
            'ddd/',
            'clean_A',
            'ebi',
            'onion_A',
            'soa',
            'cqrs',
            'event_driven_A',
            'hexagonal_A',
            'spa',
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
                    'circuit_breaker',
                    '/db/pinterest_shard',
                ]
            },
        ]
    },
]