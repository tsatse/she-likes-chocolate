var Utils = require('./utils');


window.onload = function() {
    function gameLoop() {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }
    
    function update() {
        var characterList = Object.keys(characters);
        for(var i = 0 ; i < characterList.length ; i++) {
            var character = characters[characterList[i]];
            if(character.x + character.dx > minX && character.x + character.dx < maxX) {
                character.x += character.dx;
            }
            if(character.y + character.dy > minY && character.y + character.dy < maxY) {
                character.y += character.dy;
            }
        }
    }
    
    function drawCharacter(characterName) {
        var character = characters[characterName];
        var image = images[character.sprites[character.action]];
        var currentMapOffset = getMapOffset(characters.me.x, characters.me.y);
        ctx.drawImage(image,
            0, 0, image.width, image.height,
            character.x - currentMapOffset.x, character.y - currentMapOffset.y,
            image.width, image.height);
    }

    function getMapOffset(x, y) {
        var result = {x:0, y:0};
        if(x > (gameCanvas.width / 2)) {
            result.x = Math.min(x - gameCanvas.width / 2, mapWidth - gameCanvas.width);
        }
        
        return result;
    }

    function drawMap(x, y) {
        var mapOffset = getMapOffset(x, y);
        ctx.drawImage(images.sky, 0, 0, gameCanvas.width, gameCanvas.height, 0, 0, gameCanvas.width, gameCanvas.height);
        ctx.drawImage(images.houses,
            Math.min(mapOffset.x, mapWidth-gameCanvas.width), mapOffset.y, gameCanvas.width, gameCanvas.height,
            0, 0, gameCanvas.width, gameCanvas.height);
        
    }

    function drawForeground(x, y) {
        var mapOffset = getMapOffset(x, y);
        ctx.drawImage(images.foreground,
            (mapOffset.x * 1.5) % (mapWidth - gameCanvas.width), mapOffset.y, gameCanvas.width, gameCanvas.height,
            0, 0, gameCanvas.width, gameCanvas.height);
    }

    function isVisible(characterName) {
        var character = characters[characterName];
        var currentMapOffset = getMapOffset(character.x, character.y);
        if((character.x - currentMapOffset.x) > 0 && (character.x - currentMapOffset.x) < gameCanvas.width) {
            return true;
        }
        return false;
    }

    function draw(time, boundingElement) {
        drawMap(characters.me.x, characters.me.y);
        var characterList = Object.keys(characters);
        characterList.sort(function(a, b) {
            return characters[a].y - characters[b].y;
        });
        for(var i = 0 ; i < characterList.length ; i++) {
            if(isVisible(characterList[i])) {
                drawCharacter(characterList[i]);
            }
        }
        drawForeground(characters.me.x, characters.me.y);
    }
    document.addEventListener('keydown', function(event) {
            var unit = 2;
            characters.me.action = 'idle';
            if(event.keyCode === 37) {
                characters.me.dx = -unit;
            }
            if(event.keyCode === 39) {
                characters.me.dx = unit;
            }
            if(event.keyCode === 38) {
                characters.me.dy = -unit;
            }
            if(event.keyCode === 40) {
                characters.me.dy = unit;
            }
            
            if(characters.me.dx > 0) {
                characters.me.action = 'walk_right';
            }
            if(characters.me.dx < 0) {
                characters.me.action = 'walk_left';
            }
        }, false);
    document.addEventListener('keyup', function(event) {
            if(event.keyCode === 37) {
                characters.me.dx = 0;
            }
            if(event.keyCode === 39) {
                characters.me.dx = 0;
            }
            if(event.keyCode === 38) {
                characters.me.dy = 0;
            }
            if(event.keyCode === 40) {
                characters.me.dy = 0;
            }
        }, false);

    var gameCanvas = document.getElementById('game-canvas');
    gameCanvas.width = window.innerWidth;
    gameCanvas.height = window.innerHeight;
    var minX = 200;
    var maxX = 2350;
    var minY = 150;
    var maxY = 280;
    var mapWidth;
    var loaded;
    var images;
    var ctx = gameCanvas.getContext('2d');
    var characters = {
        'her': {
            'sprites': {
                'idle': 'herSprite',
                'walk_left': 'herSprite',
                'walk_right': 'herSprite',
            },
            'action': 'idle',
            'phase': 0,
            'x':125,
            'y':155,
            'dx': 0,
            'dy': 0
        },
        'me': {
            'sprites': {
                'idle': 'meSpriteIdle',
                'walk_left': 'meSprite',
                'walk_right': 'meSpriteRight',
                'walk_up': 'meSpriteIdle',
                'walk_down': 'meSpriteIdle'
            },
            'action': 'idle',
            'phase': 0,
            'x':202,
            'y':185,
            'dx': 0,
            'dy': 0
        }
    };
    
    
    Utils.loadImages({
            sky: 'art/sky.png',
            foreground: 'art/foreground.png',
            houses: 'art/houses.png',
            herSprite: 'art/her_sprite.png',
            meSprite: 'art/me_sprite.png',
            meSpriteRight: 'art/me_sprite_right.png',
            meSpriteIdle: 'art/me_sprite_idle.png'
        },
        function(imgs) {
            images = imgs;
            mapWidth = images.houses.width;
            requestAnimationFrame(gameLoop);
        });
};
