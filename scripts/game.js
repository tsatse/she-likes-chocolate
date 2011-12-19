require(['utils', 'framer'], function (Utils, Framer) {
        window.onload = function() {
            function preload(name) {
                images[name] = new Image();
                images[name].onload = function(event) {
                        left_to_preload = Math.max(0, left_to_preload-1);
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
                var image = images[character.sprites[character.action]];
                var current_map_offset = get_map_offset(characters['me'].x, characters['me'].y);
                ctx.drawImage(image,
                    0, 0, image.width, image.height,
                    character.x - current_map_offset.x, character.y - current_map_offset.y,
                    image.width, image.height)
            }
            function get_map_offset(x, y) {
                var result = {x:0,y:0}
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
                ctx.drawImage(images['sky'], 0, 0, game_canvas.width, game_canvas.height, 0, 0, game_canvas.width, game_canvas.height);
                ctx.drawImage(images['houses'],
                    Math.min(map_offset.x, map_width-game_canvas.width), map_offset.y, game_canvas.width, game_canvas.height,
                    0, 0, game_canvas.width, game_canvas.height);
                
            }
            function draw_foreground(x, y) {
                var map_offset = get_map_offset(x, y);
                ctx.drawImage(images['foreground'],
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
                    draw_foreground(characters['me'].x, characters['me'].y);
                }
                else {
                    ctx.fillStyle = '#000';
                    ctx.fillRect(0, 0, game_canvas.width, game_canvas.height);
                    
                    ctx.fillStyle = '#ddd';
                    var completion = (total_to_preload - left_to_preload) / total_to_preload;
                    ctx.fillRect(game_canvas.width*.3, game_canvas.height*.5-10, completion * game_canvas.width*.3, 20);
                    ctx.strokeStyle = '#fff';
                    ctx.strokeRect(game_canvas.width*.3, game_canvas.height*.5-10, game_canvas.width*.3, 20);
                    
                    
                }
            }
            document.addEventListener('keydown', function(event) {
                    var unit = 2;
                    characters['me'].action = 'idle';
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
                    
                    if(characters['me'].dx > 0) {
                        characters['me'].action = 'walk_right';
                    }
                    if(characters['me'].dx < 0) {
                        characters['me'].action = 'walk_left';
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
            var min_x = 200;
            var max_x = 2350;
            var min_y = 150;
            var max_y = 280;
            var ctx = game_canvas.getContext('2d');
            var images = {};
            var total_to_preload = 7;
            var left_to_preload = total_to_preload;
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
            
            preload('sky');
            preload('foreground');
            preload('houses');
            preload('her_sprite');
            preload('me_sprite');
            preload('me_sprite_right');
            preload('me_sprite_idle');
            
            var map_width = images['houses'].width;
            game_canvas.width = 800;
            game_canvas.height = 450;
            Framer.reset();
            Framer.start();
            Framer.add(game_loop);
        }
});
