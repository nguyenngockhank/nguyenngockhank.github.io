
module.exports = [
    {
        title: "System Design Case Studies", 
        children: [
            'case-study/notification/',
            'case-study/metrics/',
            'case-study/ad-click/',
            {
                title: "Data storage",
                children: [
                    'case-study/dynamo/',
                    'case-study/bigtable/',
                    'case-study/s3/',
                    'case-study/gfs/',
                    'case-study/kafka/',
                    'case-study/dropbox/',
                    'case-study/google-drive/',
                ]
            },
            {
                title: "Online tools",
                children: [
                    'case-study/google-docs/',
                    'case-study/email/',
                    'case-study/url-shorter/',
                    'case-study/url-shorter/part2/',
                    'case-study/pastebin/',
                    'case-study/web-crawler/',
                    'case-study/web-crawler/part2/',
                ]
            },
            {
                title: "Booking System",
                children: [
                    'case-study/payment/',
                    'case-study/digital-wallet/',
                    'case-study/stock-exchange/',
                    'case-study/hotel/',
                    'case-study/ticket-master/',
                ]
            },
            {
                title: "Social Network",
                children: [
                    'case-study/instagram/',
                    'case-study/instagram/part2/',
                    'case-study/instagram/part3/',
                    'case-study/tinder/',
                    'case-study/twitter/',
                    'case-study/new-feed/',
                    'case-study/new-feed/part2/',
                    'case-study/twitter/twitter-search/',
                    'case-study/search-autocomplete/',
                    'case-study/search-autocomplete/part2/',
                ]
            },
            {
                title: "Location-based",
                children: [
                    'case-study/proximity-service/',
                    'case-study/proximity-service/part2/',
                    'case-study/nearby-friends/',
                    'case-study/google-maps/',
                    'case-study/uber/',
                    'case-study/uber/part2/',
                    'case-study/grab-nearby-drivers/',
                ]
            },
            {
                title: "Video",
                children: [
                    'case-study/youtube/',
                    'case-study/youtube/part2/',
                ],
            },
            {
                title: "Chat system",
                children: [
                    'case-study/chat-system/',
                    'case-study/chat-system/part2/',
                    'case-study/chat-system/whatsapp/',
                    'case-study/chat-system/telegram/',
                    'case-study/chat-system/fb-messenger/',
                ]
            },
         
        ],
    }, 
    {
        title: 'The Art of Readable Code',
        children: [
            ...Array(15).fill(0).map((v, index) => `artofcode/c${index + 1}`)
        ]
    },
    {
        title: '97 Things Every Programmer Should Know',
        children: [
            ...Array(98).fill(0).map((v, index) => `97things4dev/${index}`)
        ]
    },
    {
      title: 'Go',
      children: [
        {
          title: 'The little Go Book',
          children: [
            '/go/the-little-go/intro',
            '/go/the-little-go/c1',
            '/go/the-little-go/c2',
            '/go/the-little-go/c3',
            '/go/the-little-go/c4',
            '/go/the-little-go/c5',
            '/go/the-little-go/c6',
            '/go/the-little-go/end',
          ]
        },
        '/go/clean'
      ]
    },
    // {
    //   title: 'CSS',
    //   children: [
    //     '/css/cheatsheet',
    //     '/css/tricks',
    //   ]
    // },
    // {
    //     title: 'Others',
    //     children: [
    //         `tips4sercurity`
    //     ]
    // }
]