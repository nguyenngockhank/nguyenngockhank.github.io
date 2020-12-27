
module.exports = [
    {
        title: "NoSql Distilled",
        children: [
            'nosql-distilled/00',
            ...Array(16).fill(0).map((v, index) => `nosql-distilled/c${index}`)
        ]
    },
    {
        title: 'A Philosophy of Software Design',
        children: [
            ...Array(21).fill(0).map((v, index) => `philosophy/c${index + 1}`)
        ]
    },
    {
        title: '97 Things Every Programmer Should Know',
        children: [
            ...Array(98).fill(0).map((v, index) => `97things4dev/${index}`)
        ]
    },
    {
        title: 'The Art of Readable Code',
        children: [
            ...Array(16).fill(0).map((v, index) => `artofcode/c${index}`)
        ]
    },


    // {
    //     title: 'Basic',
    //     children: [
    //         '/kungfu/basic/boolean',
    //         '/kungfu/basic/comment',
    //         '/kungfu/basic/loop',
    //     ]
    // },
    // {
    //     title: 'Handling',
    //     children: [
    //         '/kungfu/handle/handle_number',
    //         '/kungfu/handle/handle_string',
    //         '/kungfu/handle/handle_array',
    //         '/kungfu/handle/handle_date',
    //     ]
    // },
    // {
    //     title: 'Other',
    //     children: [
    //         '/kungfu/js/vue_react',
    //         '/javascript/axios_jqueryajax',
    //     ]
    // },
    // {
    //     title: 'Operators',
    //     children: [
    //         '/kungfu/operations/arithmetic',
    //     ]
    // },
]