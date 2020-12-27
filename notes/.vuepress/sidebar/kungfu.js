
module.exports = [
    {
        title: '97 Things Every Programmer Should Know',
        children: [
            ...Array(98).fill(0).map((v, index) => `97things4dev/${index}`)
        ]
    },
    {
        title: 'The Art of Readable Code',
        children: [
            ...Array(15).fill(0).map((v, index) => `artofcode/c${index + 1}`)
        ]
    },
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
        title: 'Others',
        children: [
            `tips4sercurity`
        ]
    }
]