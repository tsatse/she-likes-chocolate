export default {
    "phases": {
        "title": {
            "gameplayType": "PressAnyKey",
            "rendering": {
                "type": "title",
                "text": "She likes chocolate"
            },
            "timeout": 2000
        },

        "intro": {
            "gameplayType": "Wander",
            "rendering": {
                "type": "PointNClick",
                "planes": [
                    {
                        "image": "sky",
                        "z": 0
                    },
                    {
                        "image": "houses",
                        "z": 1
                    },
                    {
                        "image": "foreground",
                        "z": 1.5
                    }
                ]
            },
            "renderHeight": 450,
            "mapWidth": 2400,
            "walkSurface": [
                {
                    "x": 200,
                    "y": 440,
                    "zoom": 1.2
                },
                {
                    "x": 200,
                    "y": 265,
                    "zoom": 1
                },
                {
                    "x": 2350,
                    "y": 265,
                    "zoom": 1
                },
                {
                    "x": 2350,
                    "y": 440,
                    "zoom": 1.2
                }
            ],
            "characters": {
                "her": {
                    "sprites": "herDay",
                    "width": 90,
                    "height": 150,
                    "x": 125,
                    "y": 305,
                    "dialogColor": "orange",
                    "behaviour": [{
                        "type": "linearTalker",
                        "dialogs": [
                            [
                                {
                                    "who": "me",
                                    "text": "Salut, comment ça va ?"
                                },
                                {
                                    "who": "her",
                                    "text": "Salut..."
                                },
                                {
                                    "who": "me",
                                    "text": "Qu'est-ce qu'il y a ? Ça n'a pas l'air d'aller."
                                },
                                {
                                    "who": "her",
                                    "text": "Ça va, j'ai juste envie de regarder la mer un moment."
                                },
                                {
                                    "who": "me",
                                    "text": "Qu'est-ce que je peux faire pour te réconforter ?"
                                },
                                {
                                    "who": "her",
                                    "text": "Tout ce que je veux pour l'instant, c'est un petit morceau de chocolat."
                                },
                                {
                                    "who": "me",
                                    "text": "Ah oui ? Ah ah, une seconde !"
                                }
                            ],
                            [
                                {
                                    "who": "me",
                                    "text": "He, ça vient hein !"
                                },
                                {
                                    "who": "her",
                                    "text": "super"
                                },
                                {
                                    "who": "me",
                                    "text": "Bon j'y retourne"
                                }
                            ]
                        ]
                    }]
                },
                "me": {
                    "sprites": "meDay",
                    "width": 90,
                    "height": 150,
                    "x": 203,
                    "y": 300,
                    "dialogColor": "cyan"
                },
            },
            "sinks": {
                "getAtJoes": {
                    "x": 395,
                    "y": 216,
                    "width": 120,
                    "height": 50
                }
            }
        },

        "atJoes": {
            "gameplayType": "Wander",
            "renderHeight": 450,
            "mapWidth": 2400,
            "rendering": {
                "type": "PointNClick",
                "planes": [
                    {
                        "image": "sky",
                        "z": 0
                    },
                    {
                        "image": "foreground",
                        "z": 1.5
                    }
                ]
            },
            "characters": {
                "me": {
                    "sprites": "meDay",
                    "width": 90,
                    "height": 150,
                    "x": 203,
                    "y": 350
                },
                "joe": {
                    "sprites": "meDay",
                    "width": 90,
                    "height": 150,
                    "x": 203,
                    "y": 85,
                    "dialogColor": "green",
                    "behaviour": [{
                        "type": "shopKeeper"
                    }, {
                        "type": "walker",
                        "wayPoints": [{
                            x: 200,
                            y: 300,
                        }, {
                            x: 400,
                            y: 300,
                        }, {
                            x: 600,
                            y: 250,
                        }]
                    }, {
                        "type": "linearTalker",
                        "dialogs": [
                            [{
                                "who": "me",
                                "text": "hello"
                            }, {
                                "who": "joe",
                                "text": "hello, son"
                            }]
                        ]
                    }]
                }
            },
            "walkSurface": [
                {
                    "x": 200,
                    "y": 380,
                    "zoom": 1.2
                },
                {
                    "x": 200,
                    "y": 150,
                    "zoom": 1
                },
                {
                    "x": 2350,
                    "y": 150,
                    "zoom": 1
                },
                {
                    "x": 2350,
                    "y": 380,
                    "zoom": 1.2
                }
            ],
            "sinks": {
                "exit": {
                    "x": 182,
                    "y": 350,
                    "width": 120,
                    "height": 130
                }
            }
        },

        "outFromJoes": {
            "gameplayType": "Wander",
            "characters": {
                "me": {
                    "sprites": "meDay",
                    "width": 90,
                    "height": 150,
                    "x": 425,
                    "y": 270
                }
            },
            "walkSurface": [
                {
                    "x": 200,
                    "y": 440,
                    "zoom": 1.2
                },
                {
                    "x": 200,
                    "y": 265,
                    "zoom": 1
                },
                {
                    "x": 2350,
                    "y": 265,
                    "zoom": 1
                },
                {
                    "x": 2350,
                    "y": 440,
                    "zoom": 1.2
                }
            ],
            "rendering": {
                "type": "PointNClick",
                "planes": [
                    {
                        "image": "sky",
                        "z": 0
                    },
                    {
                        "image": "houses",
                        "z": 1
                    },
                    {
                        "image": "foreground",
                        "z": 1.5
                    }
                ]
            },
            "renderHeight": 450,
            "mapWidth": 2400,
            "sinks": {
                "getAtJoes": {
                    "x": 395,
                    "y": 216,
                    "width": 120,
                    "height": 50
                }
            }
        },

        "fin": {
            "gameplayType": "PressAnyKey",
            "rendering": {
                "type": "title",
                "text": "Fin"
            },
            "timeout": 2000
        }
    },
    "plan": {
        "title": {"keyPressed": "intro"},
        "intro": {"getAtJoes": "atJoes"},
        "atJoes": {"exit": "outFromJoes"},
        "outFromJoes": {"getAtJoes": "atJoes"},
        "fin": {"keyPressed": "atJoes"}
    },
    "sprites": {
        "meDay": {
            "idle": "meSpriteIdle",
            "talking": "meSpriteIdle",
            "walkLeft": "meSprite",
            "runLeft": "meSprite",
            "walkRight": "meSpriteRight",
            "runRight": "meSpriteRight",
            "walkUp": "meSpriteIdle",
            "runUp": "meSpriteIdle",
            "walkDown": "meSpriteIdle",
            "runDown": "meSpriteIdle"
        },
        "herDay": {
            "idle": "herSprite",
            "talking": "herSprite",
            "walkLeft": "herSprite",
            "walkRight": "herSprite"
        }
    },
    "paths": {
        "sky":
            "art/sky.png",
        "foreground":
            "art/foreground.png",
        "houses":
            "art/houses.png",
        "herSprite":
            "art/her_sprite.png",
        "meSprite":
            "art/me_sprite.png",
        "meSpriteRight":
            "art/me_sprite_right.png",
        "meSpriteIdle":
            "art/me_sprite_idle.png"
    },
    "entry": "outFromJoes"
};
