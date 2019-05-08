var posts = [
    // {
    //     author: {
    //         userID: 1651656,
    //         photo: 'belauzas.jpg',
    //         name: 'Vardenis',
    //         surname: 'Pavardenis',
    //         url: 'vardenis-pavardenis'
    //     },
    //     date: 1557130091712,
    //     content: {
    //         text: {
    //             value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit, doloremque, dolorum suscipit cum voluptate quibusdam aut dolor odio rerum vitae corrupti neque ducimus? Rerum vitae corrupti neque ducimus?',
    //             background: 'red'
    //         },
    //         img: ['p1.jpg', 'p2.jpg']
    //     },
    //     interactions: {
    //         likes: {
    //             like: 5,
    //             smile: 0,
    //             love: 8
    //         },
    //         comments: 0
    //     }
    // },
    {
        author: {
            userID: 1651656,
            photo: 'belauzas.jpg',
            name: 'John',
            surname: 'Doe',
            url: 'vardenis-pavardenis'
        },
        date: (new Date()).getTime(),
        content: {
            text: {
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit, doloremque, dolorum suscipit cum voluptate quibusdam aut dolor odio rerum vitae corrupti neque ducimus? Rerum vitae corrupti neque ducimus?',
            }
        },
        interactions: {
            likes: {
                like: 5,
                smile: 0,
                love: 8
            },
            comments: 0
        }
    },
    {
        author: {
            userID: 1651656,
            photo: 'belauzas.jpg',
            name: 'Vardenis',
            surname: 'Pavardenis',
            url: 'vardenis-pavardenis'
        },
        date: (new Date()).getTime() - 1000 * 28,
        content: {
            text: {
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit, doloremque, dolorum suscipit cum voluptate quibusdam aut dolor odio rerum vitae corrupti neque ducimus? Rerum vitae corrupti neque ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit, doloremque, dolorum suscipit cum voluptate quibusdam aut dolor odio rerum vitae corrupti neque ducimus? Rerum vitae corrupti neque ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit, doloremque, dolorum suscipit cum voluptate quibusdam aut dolor odio rerum vitae corrupti neque ducimus? Rerum vitae corrupti neque ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit, doloremque, dolorum suscipit cum voluptate quibusdam aut dolor odio rerum vitae corrupti neque ducimus? Rerum vitae corrupti neque ducimus?',
            }
        },
        interactions: {
            likes: {
                like: 5,
                smile: 0,
                love: 8
            },
            comments: 0
        }
    },
    {
        author: {
            userID: 1651656,
            photo: 'belauzas.jpg',
            name: 'Vardenis',
            surname: 'Pavardenis',
            url: 'vardenis-pavardenis'
        },
        date: (new Date()).getTime() - 1000 * 60 * 4,
        content: {
            text: {
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            img: ['p1.jpg']
        },
        interactions: {
            likes: {
                like: 5,
                smile: 0,
                love: 8
            },
            comments: 0
        }
    },
    {
        author: {
            userID: 1651656,
            photo: 'belauzas.jpg',
            name: 'Vardenis',
            surname: 'Pavardenis',
            url: 'vardenis-pavardenis'
        },
        date: (new Date()).getTime() - 1000 * 60 * 60 * 16,
        content: {
            text: {
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit, doloremque, dolorum suscipit cum voluptate quibusdam aut dolor odio rerum vitae corrupti neque ducimus? Rerum vitae corrupti neque ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit, doloremque, dolorum suscipit cum voluptate quibusdam aut dolor odio rerum vitae corrupti neque ducimus? Rerum vitae corrupti neque ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit, doloremque, dolorum suscipit cum voluptate quibusdam aut dolor odio rerum vitae corrupti neque ducimus? Rerum vitae corrupti neque ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit, doloremque, dolorum suscipit cum voluptate quibusdam aut dolor odio rerum vitae corrupti neque ducimus? Rerum vitae corrupti neque ducimus?',
            }
        },
        interactions: {
            likes: {
                like: 5,
                smile: 0,
                love: 8
            },
            comments: 0
        }
    },
    {
        author: {
            userID: 1651656,
            photo: 'belauzas.jpg',
            name: 'Vardenis',
            surname: 'Pavardenis',
            url: 'vardenis-pavardenis'
        },
        date: (new Date()).getTime() - 1000 * 60 * 60 * 24 * 3,
        content: {
            text: {
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            img: ['p1.jpg', 'p2.jpg']
        },
        interactions: {
            likes: {
                like: 5,
                smile: 0,
                love: 8
            },
            comments: 0
        }
    },
    {
        author: {
            userID: 1651656,
            photo: 'belauzas.jpg',
            name: 'Vardenis',
            surname: 'Pavardenis',
            url: 'vardenis-pavardenis'
        },
        date: (new Date()).getTime() - 1000 * 60 * 60 * 24 * 16,
        content: {
            text: {
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            img: ['p1.jpg', 'p2.jpg', 'p3.jpg']
        },
        interactions: {
            likes: {
                like: 5,
                smile: 0,
                love: 8
            },
            comments: 0
        }
    },
    {
        author: {
            userID: 1651656,
            photo: 'belauzas.jpg',
            name: 'Vardenis',
            surname: 'Pavardenis',
            url: 'vardenis-pavardenis'
        },
        date: (new Date()).getTime() - 1000 * 60 * 60 * 24 * 90,
        content: {
            text: {
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            img: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg']
        },
        interactions: {
            likes: {
                like: 5,
                smile: 0,
                love: 8
            },
            comments: 0
        }
    },
    {
        author: {
            userID: 1651656,
            photo: 'belauzas.jpg',
            name: 'Vardenis',
            surname: 'Pavardenis',
            url: 'vardenis-pavardenis'
        },
        date: (new Date()).getTime() - 1000 * 60 * 60 * 24 * 800,
        content: {
            text: {
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            img: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p1.jpg', 'p2.jpg', 'p3.jpg']
        },
        interactions: {
            likes: {
                like: 5,
                smile: 0,
                love: 8
            },
            comments: 0
        }
    },
    {
        author: {
            userID: 1651656,
            photo: 'belauzas.jpg',
            name: 'Vardenis',
            surname: 'Pavardenis',
            url: 'vardenis-pavardenis'
        },
        date: 1557130091712,
        content: {
            text: {
                value: 'Lorem ipsum dolor sit',
            }
        },
        interactions: {
            likes: {
                like: 5,
                smile: 0,
                love: 8
            },
            comments: 0
        }
    },
    {
        author: {
            userID: 1651656,
            photo: 'belauzas.jpg',
            name: 'Vardenis',
            surname: 'Pavardenis',
            url: 'vardenis-pavardenis'
        },
        date: 1557130091712,
        content: {
            text: {
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                background: 'red'
            }
        },
        interactions: {
            likes: {
                like: 5,
                smile: 0,
                love: 8
            },
            comments: 0
        }
    }
];