module.exports = [
    '',
    'philosophy-sw-design',
    {
        title: 'Communication',
        children: [
            'restful',
            'messaging',
            'OrchestrationVsChoreography',
        ]
    },
    {
        title: 'The Architecture of Systems', 
        children: [
            'clean_A',
            'ebi',
            'onion_A',
            'soa',
            'cqrs',
            'event_driven_A',
            'hexagonal_A',
            'spa',
            // 'ddd',
            'microservices',
        ]
    },
    {
        title: 'Khác',
        children: [
            'authenication',
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