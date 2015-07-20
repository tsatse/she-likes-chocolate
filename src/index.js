var Utils = require('utils');
var Game = require('./game');


var theGame = new Game(
    document.getElementById('game-canvas'),
    {
        phases: {
            firstDialogue: {
                gameplayType: 'Dialogue',
                renderingType: 'PointNClick',
                basedOn: 'intro',
                noInherit: {'gameplayType': true, 'renderingType': true},
                defaultProperties: {
                    me: {x: 202, y: 185, color: 'cyan'},
                    her: {x: 125, y: 155, color: 'orange'}
                },
                lines: [
                    {
                        who: 'me',
                        text: "Hey ! What's up ?"
                    },
                    {
                        who: 'her',
                        text: "Hi..."
                    },
                    {
                        who: 'me',
                        text: "What's wrong ? you seem so down."
                    },
                    {
                        who: 'her',
                        text: "It's ok, I'm just in the mood for staring at the sea for a while."
                    },
                    {
                        who: 'me',
                        text: "What can I do to cheer you up ?"
                    },
                    {
                        who: 'her',
                        text: "All I wish for right now is a little piece of chocolate."
                    },
                    {
                        who: 'me',
                        text: "Really ? Ah ah, just you wait !"
                    }
                ]
            },

            secondDialogue: {
                basedOn: 'firstDialogue',
                noInherit: {'lines': true},
                restart: true,
                lines: [
                    {
                        who: 'me',
                        text: "Hey, I'm almost done !"
                    },
                    {
                        who: 'her',
                        text: 'great'
                    },
                    {
                        who: 'me',
                        text: "Well I'd better get going then"
                    }
                ]
             },

            intro: {
                gameplayType: 'Wander',
                renderingType: 'PointNClick',
                mapWidth: 2400,
                minX: 200,
                maxX: 2350,
                minY: 150,
                maxY: 280,
                characters: {
                    her: {
                        sprites: {
                            idle: 'herSprite',
                            talking: 'herSprite',
                            walkLeft: 'herSprite',
                            walkRight: 'herSprite',
                        },
                        width: 90,
                        height: 150,
                        x: 125,
                        y: 155
                    },
                    me: {
                        sprites: {
                            idle: 'meSpriteIdle',
                            talking: 'meSpriteIdle',
                            walkLeft: 'meSprite',
                            walkRight: 'meSpriteRight',
                            walkUp: 'meSpriteIdle',
                            walkDown: 'meSpriteIdle'
                        },
                        width: 90,
                        height: 150,
                        x: 202,
                        y: 185
                    }
                },
                images: {
                    sky:
                        'art/sky.png',
                    foreground:
                        'art/foreground.png',
                    houses:
                        'art/houses.png',
                    herSprite:
                        'art/her_sprite.png',
                    meSprite:
                        'art/me_sprite.png',
                    meSpriteRight:
                        'art/me_sprite_right.png',
                    meSpriteIdle:
                        'art/me_sprite_idle.png'
                },
                sinks: {
                    talkToHer: {
                        x: 200,
                        y: 150,
                        width: 2,
                        height: 130
                    }
                }
            },
            goingForChoco: {
                basedOn: 'intro',
                characters: {
                    jack: {
                        sprites: {
                            idle: 'meSpriteIdle',
                            walkLeft: 'meSprite',
                            walkRight: 'meSpriteRight',
                            walkUp: 'meSpriteIdle',
                            walkDown: 'meSpriteIdle'
                        },
                        width: 90,
                        height: 150,
                        x: 802,
                        y: 185,
                        behaviour: {
                            type: 'walker',
                            wayPoints: [
                                { x: 210, y: 210},
                                { x: 800, y: 220},
                                { x: 240, y: 250}
                            ]
                        }
                    }
                }
            }
        },
        plan: {
            intro: {talkToHer: 'firstDialogue'},
            firstDialogue: {end: 'goingForChoco'},
            goingForChoco: {talkToHer: 'secondDialogue'},
            secondDialogue: {end: 'goingForChoco'},
        },
        entry: 'intro'
    }
);


theGame.start();
