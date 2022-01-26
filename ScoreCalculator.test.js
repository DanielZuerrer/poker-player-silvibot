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
    expect(has_pair(mock)[0]).toBe(false)
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
    expect(has_three_of_a_kind(mock)[0]).toBe(false)
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
    expect(has_full_house(mock)).toBe(false)
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
    expect(has_straight(mock)).toBe(false)
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
    expect(has_four_of_a_kind(mock)[0]).toBe(false)
})
