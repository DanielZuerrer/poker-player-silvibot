const { has_pair, has_three_of_a_kind, has_four_of_a_kind, has_straight, has_full_house } = require('./ScoreCalculator.js');

test('has pair', () => {
    const mock = {
        "in_action": 1,
        "players": [
            {
            },
            {
                "id": 1,
                "name": "Bob",
                "status": "active",
                "version": "Default random player",
                "stack": 1590,
                "bet": 80,
                "hole_cards": [
                    {
                        "rank": "7",
                        "suit": "hearts"
                    },
                    {
                        "rank": "3",
                        "suit": "spades"
                    }
                ]
            },
            {
            }
        ],
        "community_cards": [
        ]
    }
    const passing_mock = {
        "in_action": 1,
        "players": [
            {
            },
            {
                "id": 1,
                "name": "Bob",
                "status": "active",
                "version": "Default random player",
                "stack": 1590,
                "bet": 80,
                "hole_cards": [
                    {
                        "rank": "7",
                        "suit": "hearts"
                    },
                    {
                        "rank": "3",
                        "suit": "spades"
                    }
                ]
            },
            {
            }
        ],
        "community_cards": [
            {
                "rank": "3",
                "suit": "hearts"
            }
        ]
    }
    expect(has_pair(mock)[0]).toBe(false)
    expect(has_pair(passing_mock)[0]).toBe(true)
})

test('three of a kind', () => {
    const mock = {
        "in_action": 1,
        "players": [
            {
            },
            {
                "id": 1,
                "name": "Bob",
                "status": "active",
                "version": "Default random player",
                "stack": 1590,
                "bet": 80,
                "hole_cards": [
                    {
                        "rank": "7",
                        "suit": "hearts"
                    },
                    {
                        "rank": "3",
                        "suit": "spades"
                    }
                ]
            },
            {
            }
        ],
        "community_cards": [
        ]
    }
    const passing_mock = {
        "in_action": 1,
        "players": [
            {
            },
            {
                "id": 1,
                "name": "Bob",
                "status": "active",
                "version": "Default random player",
                "stack": 1590,
                "bet": 80,
                "hole_cards": [
                    {
                        "rank": "7",
                        "suit": "hearts"
                    },
                    {
                        "rank": "3",
                        "suit": "spades"
                    }
                ]
            },
            {
            }
        ],
        "community_cards": [
            {
                "rank": "3",
                "suit": "hearts"
            },
            {
                "rank": "3",
                "suit": "clubs"
            }
        ]
    }
    expect(has_three_of_a_kind(mock)[0]).toBe(false)
    expect(has_three_of_a_kind(passing_mock)[0]).toBe(true)
})

test('full house', () => {
    const mock = {
        "in_action": 1,
        "players": [
            {
            },
            {
                "id": 1,
                "name": "Bob",
                "status": "active",
                "version": "Default random player",
                "stack": 1590,
                "bet": 80,
                "hole_cards": [
                    {
                        "rank": "7",
                        "suit": "hearts"
                    },
                    {
                        "rank": "3",
                        "suit": "spades"
                    }
                ]
            },
            {
            }
        ],
        "community_cards": [
        ]
    }

    const passing_mock = {
        "in_action": 1,
        "players": [
            {
            },
            {
                "id": 1,
                "name": "Bob",
                "status": "active",
                "version": "Default random player",
                "stack": 1590,
                "bet": 80,
                "hole_cards": [
                    {
                        "rank": "7",
                        "suit": "hearts"
                    },
                    {
                        "rank": "3",
                        "suit": "spades"
                    }
                ]
            },
            {
            }
        ],
        "community_cards": [
            {
                "rank": "3",
                "suit": "hearts"
            },
            {
                "rank": "3",
                "suit": "clubs"
            },
            {
                "rank": "7",
                "suit": "clubs"
            }
        ]
    }
    expect(has_full_house(mock)).toBe(false)
    expect(has_full_house(passing_mock)).toBe(true)
})

test('straight', () => {
    const mock = {
        "in_action": 1,
        "players": [
            {
            },
            {
                "id": 1,
                "name": "Bob",
                "status": "active",
                "version": "Default random player",
                "stack": 1590,
                "bet": 80,
                "hole_cards": [
                    {
                        "rank": "7",
                        "suit": "hearts"
                    },
                    {
                        "rank": "3",
                        "suit": "spades"
                    }
                ]
            },
            {
            }
        ],
        "community_cards": [
        ]
    }
    const passing_mock = {
        "in_action": 1,
        "players": [
            {
            },
            {
                "id": 1,
                "name": "Bob",
                "status": "active",
                "version": "Default random player",
                "stack": 1590,
                "bet": 80,
                "hole_cards": [
                    {
                        "rank": "3",
                        "suit": "hearts"
                    },
                    {
                        "rank": "4",
                        "suit": "spades"
                    }
                ]
            },
            {
            }
        ],
        "community_cards": [
            {
                "rank": "7",
                "suit": "hearts"
            },
            {
                "rank": "6",
                "suit": "clubs"
            },
            {
                "rank": "5",
                "suit": "clubs"
            }
        ]
    }
    expect(has_straight(mock)).toBe(false)
    expect(has_straight(passing_mock)).toBe(true)
})

test('four of a kind', () => {
    const mock = {
        "in_action": 1,
        "players": [
            {
            },
            {
                "id": 1,
                "name": "Bob",
                "status": "active",
                "version": "Default random player",
                "stack": 1590,
                "bet": 80,
                "hole_cards": [
                    {
                        "rank": "7",
                        "suit": "hearts"
                    },
                    {
                        "rank": "3",
                        "suit": "spades"
                    }
                ]
            },
            {
            }
        ],
        "community_cards": [
        ]
    }
    const passing_mock = {
        "in_action": 1,
        "players": [
            {
            },
            {
                "id": 1,
                "name": "Bob",
                "status": "active",
                "version": "Default random player",
                "stack": 1590,
                "bet": 80,
                "hole_cards": [
                    {
                        "rank": "7",
                        "suit": "hearts"
                    },
                    {
                        "rank": "3",
                        "suit": "spades"
                    }
                ]
            },
            {
            }
        ],
        "community_cards": [
            {
                "rank": "7",
                "suit": "hearts"
            },
            {
                "rank": "7",
                "suit": "clubs"
            },
            {
                "rank": "7",
                "suit": "clubs"
            }
        ]
    }
    expect(has_four_of_a_kind(mock)[0]).toBe(false)
})
