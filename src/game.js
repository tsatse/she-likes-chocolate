var Utils = require('./utils');
var Framer = require('./framer');


function loadImages(imagesURLs, allDone) {
    var imagesNames = Object.keys(imagesURLs);
    var result = {};
    loaded = 0;
    var loadCallback = function() {
        loaded += 1;
        if(loaded === imagesNames.length) {
            allDone(result);
        }
    };
    for(var i = 0 ; i < imagesNames.length ; i++) {
        var imageName = imagesNames[i];
        var url = imagesURLs[imageName];
        if(url !== null) {
            var img = new Image();
            result[imageName] = img;
            img.onload = loadCallback;
            img.src = url;
        }
        else {
            loaded += 1;
            result[imageName] = null;
        }
    }
}

window.onload = function() {
    function game_loop() {
        update();
        draw();
    }
    
    function update() {
        var character_list = Object.keys(characters);
        for(var i = 0 ; i < character_list.length ; i++) {
            var character = characters[character_list[i]];
            if(character.x + character.dx > min_x && character.x + character.dx < max_x) {
                character.x += character.dx;
            }
            if(character.y + character.dy > min_y && character.y + character.dy < max_y) {
                character.y += character.dy;
            }
        }
    }
    
    function draw_character(character_name) {
        var character = characters[character_name];
        var image = images[character.sprites[character.action]];
        var current_map_offset = get_map_offset(characters.me.x, characters.me.y);
        ctx.drawImage(image,
            0, 0, image.width, image.height,
            character.x - current_map_offset.x, character.y - current_map_offset.y,
            image.width, image.height);
    }

    function get_map_offset(x, y) {
        var result = {x:0,y:0};
        if(x > (game_canvas.width/2)) {
            result.x = Math.min(x - game_canvas.width/2, map_width - game_canvas.width);
        }
        /*
        if(y < (game_canvas.height/2)) {
            result.y = y - game_canvas.height/2;
        }
        */
        
        return result;
    }
    function draw_map(x, y) {
        var map_offset = get_map_offset(x, y);
        ctx.drawImage(images.sky, 0, 0, game_canvas.width, game_canvas.height, 0, 0, game_canvas.width, game_canvas.height);
        ctx.drawImage(images.houses,
            Math.min(map_offset.x, map_width-game_canvas.width), map_offset.y, game_canvas.width, game_canvas.height,
            0, 0, game_canvas.width, game_canvas.height);
        
    }
    function draw_foreground(x, y) {
        var map_offset = get_map_offset(x, y);
        ctx.drawImage(images.foreground,
            (map_offset.x*1.5)%(map_width-game_canvas.width), map_offset.y, game_canvas.width, game_canvas.height,
            0, 0, game_canvas.width, game_canvas.height);
    }
    function is_visible(character_name) {
        var character = characters[character_name];
        var current_map_offset = get_map_offset(character.x, character.y);
        if((character.x - current_map_offset.x) > 0 && (character.x - current_map_offset.x) < game_canvas.width) {
            return true;
        }
        return false;
    }
    function draw(time, bounding_element) {
        draw_map(characters.me.x, characters.me.y);
        var character_list = Object.keys(characters);
        character_list.sort(function(a, b) {
            return characters[a].y - characters[b].y;
        });
        for(var i = 0 ; i < character_list.length ; i++) {
            if(is_visible(character_list[i])) {
                draw_character(character_list[i]);
            }
        }
        draw_foreground(characters.me.x, characters.me.y);
    }
    document.addEventListener('keydown', function(event) {
            var unit = 2;
            characters.me.action = 'idle';
            if(event.keyCode == 37) {
                characters.me.dx = -unit;
            }
            if(event.keyCode == 39) {
                characters.me.dx = unit;
            }
            if(event.keyCode == 38) {
                characters.me.dy = -unit;
            }
            if(event.keyCode == 40) {
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
            if(event.keyCode == 37) {
                characters.me.dx = 0;
            }
            if(event.keyCode == 39) {
                characters.me.dx = 0;
            }
            if(event.keyCode == 38) {
                characters.me.dy = 0;
            }
            if(event.keyCode == 40) {
                characters.me.dy = 0;
            }
        }, false);

    var game_canvas = document.getElementById('game_canvas');
    game_canvas.width = window.innerWidth;
    game_canvas.height = window.innerHeight;
    var min_x = 200;
    var max_x = 2350;
    var min_y = 150;
    var max_y = 280;
    var map_width;
    var loaded;
    var images;
    var ctx = game_canvas.getContext('2d');
    var characters = {
        'her': {
            'sprites': {
                'idle': 'her_sprite',
                'walk_left': 'her_sprite',
                'walk_right': 'her_sprite',
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
                'idle': 'me_sprite_idle',
                'walk_left': 'me_sprite',
                'walk_right': 'me_sprite_right',
                'walk_up': 'me_sprite_idle',
                'walk_down': 'me_sprite_idle'
            },
            'action': 'idle',
            'phase': 0,
            'x':202,
            'y':185,
            'dx': 0,
            'dy': 0
        }
    };
    
    
    loadImages({
            sky: 'art/sky.png',
            foreground: 'art/foreground.png',
            houses: 'art/houses.png',
            her_sprite: 'art/her_sprite.png',
            me_sprite: 'art/me_sprite.png',
            me_sprite_right: 'art/me_sprite_right.png',
            me_sprite_idle: 'art/me_sprite_idle.png'
        },
        function(imgs) {
            images = imgs;
            map_width = images.houses.width;
            Framer.reset();
            Framer.start();
            Framer.add(game_loop);
        });
};
