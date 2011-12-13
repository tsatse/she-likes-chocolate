require(['utils', 'framer'], function (Utils, Framer) {
        window.onload = function() {
            function preload(name) {
                images[name] = new Image();
                images[name].onload = function(event) {
                        left_to_preload--;
                    };
                images[name].src = name + '.png';
            }
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
                var image = images[character.sprite];
                var current_map_offset = get_map_offset(characters['me'].x, characters['me'].y);
                ctx.drawImage(image,
                    0, 0, image.width, image.height,
                    character.x - current_map_offset.x, character.y - current_map_offset.y,
                    image.width, image.height)
            }
            function get_map_offset(x, y) {
                var result = {x:0,y:0}
                if(x > (game_canvas.width/2)) {
                    result.x = x - game_canvas.width/2;
                }
                /*
                if(y < (game_canvas.height/2)) {
                    result.y = y - game_canvas.width/2;
                }*/
                
                return result;
            }
            function draw_map(x, y) {
                var map_offset = get_map_offset(x, y);
                ctx.drawImage(images['houses'],
                    map_offset.x, map_offset.y, game_canvas.width, game_canvas.height,
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
                if(!left_to_preload) {
                    draw_map(characters['me'].x, characters['me'].y);
                    var character_list = Object.keys(characters);
                    character_list.sort(function(a, b) {
                        return characters[a].y - characters[b].y;
                    });
                    for(var i = 0 ; i < character_list.length ; i++) {
                        if(is_visible(character_list[i])) {
                            draw_character(character_list[i]);
                        }
                    }
                }
            }
            document.addEventListener('keydown', function(event) {
                    var unit = 2;
                    if(event.keyCode == 37) {
                        characters['me'].dx = -unit;
                    }
                    if(event.keyCode == 39) {
                        characters['me'].dx = unit;
                    }
                    if(event.keyCode == 38) {
                        characters['me'].dy = -unit;
                    }
                    if(event.keyCode == 40) {
                        characters['me'].dy = unit;
                    }
                }, false);
            document.addEventListener('keyup', function(event) {
                    if(event.keyCode == 37) {
                        characters['me'].dx = 0;
                    }
                    if(event.keyCode == 39) {
                        characters['me'].dx = 0;
                    }
                    if(event.keyCode == 38) {
                        characters['me'].dy = 0;
                    }
                    if(event.keyCode == 40) {
                        characters['me'].dy = 0;
                    }
                }, false);

            var game_canvas = document.getElementById('game_canvas');
            var min_x = 115;
            var max_x = 2350;
            var min_y = 150;
            var max_y = 280;
            var ctx = game_canvas.getContext('2d');
            var images = {};
            var left_to_preload = 3;
            var characters = {
                'her': {
                    'sprite': 'her_sprite',
                    'action': null,
                    'phase': 0,
                    'x':50,
                    'y':275,
                    'dx': 0,
                    'dy': 0
                },
                'me': {
                    'sprite': 'me_sprite',
                    'action': null,
                    'phase': 0,
                    'x':120,
                    'y':255,
                    'dx': 0,
                    'dy': 0
                }
            };
            
            preload('houses');
            preload('her_sprite');
            preload('me_sprite');
            game_canvas.width = 800;
            game_canvas.height = 450;
            Framer.reset();
            Framer.start();
            Framer.add(game_loop);
        }
});
