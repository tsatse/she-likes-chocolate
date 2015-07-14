var Utils = require('./utils');
var Character = require('./character');
var Game = require('./game');

var theGame = new Game(
    document.getElementById('game-canvas'),
    [{
        gameplayType: 'Wander',
        mapWidth: 2400,
        minX: 200,
        maxX: 2350,
        minY: 150,
        maxY: 280,
        characters: {
            her: new Character({
                    idle: 'herSprite',
                    walkLeft: 'herSprite',
                    walkRight: 'herSprite',
                },
                {
                    width: 90,
                    height: 150
                },
                {
                    x: 125,
                    y: 155
                }
            ),
            me: new Character({
                    idle: 'meSpriteIdle',
                    walkLeft: 'meSprite',
                    walkRight: 'meSpriteRight',
                    walkUp: 'meSpriteIdle',
                    walkDown: 'meSpriteIdle'
                },
                {
                    width: 90,
                    height: 150
                },
                {
                    x: 202,
                    y: 185
                }
            )
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
        }
    }
]);


theGame.start();
