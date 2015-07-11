;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
﻿var Utils = require('./utils');
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

},{"./utils":2,"./framer":3}],2:[function(require,module,exports){
﻿var Utils = {
    get_new_id: function(counter_name) {
            function format_result(name, value) {
                return name + "_" + value;
            }
            var result = '';
            if(!counter_name) {
                counter_name = "#default_id_name#";
            }
            if(!this.counters) {
                this.counters = {};
            }
            if(!this.counters.hasOwnProperty(counter_name)) {
                this.counters[counter_name] = 0;
            }
            result = format_result(counter_name, this.counters[counter_name]);
            this.counters[counter_name]++;
            return result;
        },
        
    get_element_position: function(element) {
            var left = 0;
            var top = 0;
            var e = element;
            while (e.offsetParent != undefined && e.offsetParent != null)
            {
                left += e.offsetLeft + (e.clientLeft != null ? e.clientLeft : 0);
                top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
                e = e.offsetParent;
            }
            return {
                x: left,
                y: top
            }
        },
        
    get_mouse_position: function(event, dom_element) {
            var result = {};
            if (event.pageX != undefined && event.pageY != undefined) {
                result.x = event.pageX;
                result.y = event.pageY;
            }
            else {
                result.x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                result.y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            if(dom_element) {
                var element_position = Utils.get_element_position(dom_element);
                result.x -= element_position.x;
                result.y -= element_position.y;
            }
            // result.x = event.layerX - 8;
            // result.y = event.layerY - 8;
            return result;
        },
        
    assert_not_null: function(value, message) {
            if(!value) {
                alert("Sorry, something went wrong : " + message);
            }
        },
        
    empty_dom_element: function(dom_element) {
            while ( dom_element.childNodes.length >= 1 ) {
                dom_element.removeChild( dom_element.firstChild );       
            }
        }
};


module.exports = Utils;

},{}],3:[function(require,module,exports){
﻿var Utils = require('./utils');

var Framer = {
    reset: function() {
            Framer.update_funcs = {};
            Framer.added_once = [];
            Framer.paused = {};
            Framer.last_time = null;
            Framer.last_fps = [];
            Framer.fps_index = 0;
            Framer.fps_window = 10;
            Framer._request_update = function(){};
        },
    
    _set_request_update_func: function(update_func) {
            var req_upd = window.requestAnimationFrame       || 
                          window.webkitRequestAnimationFrame || 
                          window.mozRequestAnimationFrame    || 
                          window.oRequestAnimationFrame      || 
                          window.msRequestAnimationFrame;
            if (req_upd) {
                Framer.request_update = function(){req_upd(update_func);};
            }
            else {
                Framer.request_update = function(){
                    setTimeout(update_func, 33);
                };
            }
        },

    _loop: function(time, bounding_object) {
            if(!time) {
                time = new Date().getTime();
            }
            if(Framer.last_time === null) {
                Framer.last_time = time;
            }
            else {
                Framer.last_fps[Framer.fps_index] = 1000.0 / (time - Framer.last_time);
                Framer.fps_index = (Framer.fps_index + 1) % Framer.fps_window;
                Framer.last_time = time;
            }
            for(var func_id in Framer.update_funcs) {
                if(Framer.update_funcs.hasOwnProperty(func_id) && !Framer.paused.hasOwnProperty(func_id)) {
                    Framer.update_funcs[func_id](time, bounding_object);
                }
            }
            if(Framer.added_once.length) {
                for(var i = 0 ; i < Framer.added_once.length ; i++) {
                    Framer.added_once[i](time, bounding_object);
                }
                Framer.added_once = [];
            }
            Framer.request_update();
        },

    get_fps: function() {
            var sum = 0;
            for(var i = 0 ; i < Framer.last_fps.length ; i++) {
                sum += Framer.last_fps[i];
            }
            return sum / Framer.fps_window;
        },

    start: function() {
            Framer._set_request_update_func(Framer._loop);
            Framer.request_update();
        },

    add: function(callback) {
            var new_index = Utils.get_new_id('update_func');
            Framer.update_funcs[new_index] = function(time, bounding_object) {
                callback(time, bounding_object);
            };
            return new_index;
        },
        
    add_once: function(callback) {
            Framer.added_once[Framer.added_once.length] = callback;
        },
        
    pause: function(token) {
            Framer.paused[token] = 1;
        },
        
    resume: function(token) {
            return delete Framer.paused[token];
        },
        
    remove: function(token) {
            return delete Framer.update_funcs[token];
        },
};

module.exports = Framer;

},{"./utils":2}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2dhbWUuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL3NyYy91dGlscy5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2ZyYW1lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIu+7v3ZhciBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcclxudmFyIEZyYW1lciA9IHJlcXVpcmUoJy4vZnJhbWVyJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZEltYWdlcyhpbWFnZXNVUkxzLCBhbGxEb25lKSB7XHJcbiAgICB2YXIgaW1hZ2VzTmFtZXMgPSBPYmplY3Qua2V5cyhpbWFnZXNVUkxzKTtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGxvYWRlZCA9IDA7XHJcbiAgICB2YXIgbG9hZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbG9hZGVkICs9IDE7XHJcbiAgICAgICAgaWYobG9hZGVkID09PSBpbWFnZXNOYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYWxsRG9uZShyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmb3IodmFyIGkgPSAwIDsgaSA8IGltYWdlc05hbWVzLmxlbmd0aCA7IGkrKykge1xyXG4gICAgICAgIHZhciBpbWFnZU5hbWUgPSBpbWFnZXNOYW1lc1tpXTtcclxuICAgICAgICB2YXIgdXJsID0gaW1hZ2VzVVJMc1tpbWFnZU5hbWVdO1xyXG4gICAgICAgIGlmKHVybCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIHJlc3VsdFtpbWFnZU5hbWVdID0gaW1nO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gbG9hZENhbGxiYWNrO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gdXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbG9hZGVkICs9IDE7XHJcbiAgICAgICAgICAgIHJlc3VsdFtpbWFnZU5hbWVdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIGdhbWVfbG9vcCgpIHtcclxuICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICBkcmF3KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgICAgICB2YXIgY2hhcmFjdGVyX2xpc3QgPSBPYmplY3Qua2V5cyhjaGFyYWN0ZXJzKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwIDsgaSA8IGNoYXJhY3Rlcl9saXN0Lmxlbmd0aCA7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVyID0gY2hhcmFjdGVyc1tjaGFyYWN0ZXJfbGlzdFtpXV07XHJcbiAgICAgICAgICAgIGlmKGNoYXJhY3Rlci54ICsgY2hhcmFjdGVyLmR4ID4gbWluX3ggJiYgY2hhcmFjdGVyLnggKyBjaGFyYWN0ZXIuZHggPCBtYXhfeCkge1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyLnggKz0gY2hhcmFjdGVyLmR4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNoYXJhY3Rlci55ICsgY2hhcmFjdGVyLmR5ID4gbWluX3kgJiYgY2hhcmFjdGVyLnkgKyBjaGFyYWN0ZXIuZHkgPCBtYXhfeSkge1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyLnkgKz0gY2hhcmFjdGVyLmR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBkcmF3X2NoYXJhY3RlcihjaGFyYWN0ZXJfbmFtZSkge1xyXG4gICAgICAgIHZhciBjaGFyYWN0ZXIgPSBjaGFyYWN0ZXJzW2NoYXJhY3Rlcl9uYW1lXTtcclxuICAgICAgICB2YXIgaW1hZ2UgPSBpbWFnZXNbY2hhcmFjdGVyLnNwcml0ZXNbY2hhcmFjdGVyLmFjdGlvbl1dO1xyXG4gICAgICAgIHZhciBjdXJyZW50X21hcF9vZmZzZXQgPSBnZXRfbWFwX29mZnNldChjaGFyYWN0ZXJzLm1lLngsIGNoYXJhY3RlcnMubWUueSk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSxcclxuICAgICAgICAgICAgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCxcclxuICAgICAgICAgICAgY2hhcmFjdGVyLnggLSBjdXJyZW50X21hcF9vZmZzZXQueCwgY2hhcmFjdGVyLnkgLSBjdXJyZW50X21hcF9vZmZzZXQueSxcclxuICAgICAgICAgICAgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0X21hcF9vZmZzZXQoeCwgeSkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7eDowLHk6MH07XHJcbiAgICAgICAgaWYoeCA+IChnYW1lX2NhbnZhcy53aWR0aC8yKSkge1xyXG4gICAgICAgICAgICByZXN1bHQueCA9IE1hdGgubWluKHggLSBnYW1lX2NhbnZhcy53aWR0aC8yLCBtYXBfd2lkdGggLSBnYW1lX2NhbnZhcy53aWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgaWYoeSA8IChnYW1lX2NhbnZhcy5oZWlnaHQvMikpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnkgPSB5IC0gZ2FtZV9jYW52YXMuaGVpZ2h0LzI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRyYXdfbWFwKHgsIHkpIHtcclxuICAgICAgICB2YXIgbWFwX29mZnNldCA9IGdldF9tYXBfb2Zmc2V0KHgsIHkpO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VzLnNreSwgMCwgMCwgZ2FtZV9jYW52YXMud2lkdGgsIGdhbWVfY2FudmFzLmhlaWdodCwgMCwgMCwgZ2FtZV9jYW52YXMud2lkdGgsIGdhbWVfY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMuaG91c2VzLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihtYXBfb2Zmc2V0LngsIG1hcF93aWR0aC1nYW1lX2NhbnZhcy53aWR0aCksIG1hcF9vZmZzZXQueSwgZ2FtZV9jYW52YXMud2lkdGgsIGdhbWVfY2FudmFzLmhlaWdodCxcclxuICAgICAgICAgICAgMCwgMCwgZ2FtZV9jYW52YXMud2lkdGgsIGdhbWVfY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkcmF3X2ZvcmVncm91bmQoeCwgeSkge1xyXG4gICAgICAgIHZhciBtYXBfb2Zmc2V0ID0gZ2V0X21hcF9vZmZzZXQoeCwgeSk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMuZm9yZWdyb3VuZCxcclxuICAgICAgICAgICAgKG1hcF9vZmZzZXQueCoxLjUpJShtYXBfd2lkdGgtZ2FtZV9jYW52YXMud2lkdGgpLCBtYXBfb2Zmc2V0LnksIGdhbWVfY2FudmFzLndpZHRoLCBnYW1lX2NhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIDAsIDAsIGdhbWVfY2FudmFzLndpZHRoLCBnYW1lX2NhbnZhcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNfdmlzaWJsZShjaGFyYWN0ZXJfbmFtZSkge1xyXG4gICAgICAgIHZhciBjaGFyYWN0ZXIgPSBjaGFyYWN0ZXJzW2NoYXJhY3Rlcl9uYW1lXTtcclxuICAgICAgICB2YXIgY3VycmVudF9tYXBfb2Zmc2V0ID0gZ2V0X21hcF9vZmZzZXQoY2hhcmFjdGVyLngsIGNoYXJhY3Rlci55KTtcclxuICAgICAgICBpZigoY2hhcmFjdGVyLnggLSBjdXJyZW50X21hcF9vZmZzZXQueCkgPiAwICYmIChjaGFyYWN0ZXIueCAtIGN1cnJlbnRfbWFwX29mZnNldC54KSA8IGdhbWVfY2FudmFzLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkcmF3KHRpbWUsIGJvdW5kaW5nX2VsZW1lbnQpIHtcclxuICAgICAgICBkcmF3X21hcChjaGFyYWN0ZXJzLm1lLngsIGNoYXJhY3RlcnMubWUueSk7XHJcbiAgICAgICAgdmFyIGNoYXJhY3Rlcl9saXN0ID0gT2JqZWN0LmtleXMoY2hhcmFjdGVycyk7XHJcbiAgICAgICAgY2hhcmFjdGVyX2xpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGFyYWN0ZXJzW2FdLnkgLSBjaGFyYWN0ZXJzW2JdLnk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBjaGFyYWN0ZXJfbGlzdC5sZW5ndGggOyBpKyspIHtcclxuICAgICAgICAgICAgaWYoaXNfdmlzaWJsZShjaGFyYWN0ZXJfbGlzdFtpXSkpIHtcclxuICAgICAgICAgICAgICAgIGRyYXdfY2hhcmFjdGVyKGNoYXJhY3Rlcl9saXN0W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkcmF3X2ZvcmVncm91bmQoY2hhcmFjdGVycy5tZS54LCBjaGFyYWN0ZXJzLm1lLnkpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciB1bml0ID0gMjtcclxuICAgICAgICAgICAgY2hhcmFjdGVycy5tZS5hY3Rpb24gPSAnaWRsZSc7XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gMzcpIHtcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMubWUuZHggPSAtdW5pdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09IDM5KSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLm1lLmR4ID0gdW5pdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09IDM4KSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLm1lLmR5ID0gLXVuaXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSA0MCkge1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVycy5tZS5keSA9IHVuaXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGNoYXJhY3RlcnMubWUuZHggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLm1lLmFjdGlvbiA9ICd3YWxrX3JpZ2h0JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjaGFyYWN0ZXJzLm1lLmR4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVycy5tZS5hY3Rpb24gPSAnd2Fsa19sZWZ0JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSAzNykge1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVycy5tZS5keCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOSkge1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVycy5tZS5keCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSAzOCkge1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVycy5tZS5keSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSA0MCkge1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVycy5tZS5keSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgdmFyIGdhbWVfY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVfY2FudmFzJyk7XHJcbiAgICBnYW1lX2NhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgZ2FtZV9jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgdmFyIG1pbl94ID0gMjAwO1xyXG4gICAgdmFyIG1heF94ID0gMjM1MDtcclxuICAgIHZhciBtaW5feSA9IDE1MDtcclxuICAgIHZhciBtYXhfeSA9IDI4MDtcclxuICAgIHZhciBtYXBfd2lkdGg7XHJcbiAgICB2YXIgbG9hZGVkO1xyXG4gICAgdmFyIGltYWdlcztcclxuICAgIHZhciBjdHggPSBnYW1lX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdmFyIGNoYXJhY3RlcnMgPSB7XHJcbiAgICAgICAgJ2hlcic6IHtcclxuICAgICAgICAgICAgJ3Nwcml0ZXMnOiB7XHJcbiAgICAgICAgICAgICAgICAnaWRsZSc6ICdoZXJfc3ByaXRlJyxcclxuICAgICAgICAgICAgICAgICd3YWxrX2xlZnQnOiAnaGVyX3Nwcml0ZScsXHJcbiAgICAgICAgICAgICAgICAnd2Fsa19yaWdodCc6ICdoZXJfc3ByaXRlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2FjdGlvbic6ICdpZGxlJyxcclxuICAgICAgICAgICAgJ3BoYXNlJzogMCxcclxuICAgICAgICAgICAgJ3gnOjEyNSxcclxuICAgICAgICAgICAgJ3knOjE1NSxcclxuICAgICAgICAgICAgJ2R4JzogMCxcclxuICAgICAgICAgICAgJ2R5JzogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ21lJzoge1xyXG4gICAgICAgICAgICAnc3ByaXRlcyc6IHtcclxuICAgICAgICAgICAgICAgICdpZGxlJzogJ21lX3Nwcml0ZV9pZGxlJyxcclxuICAgICAgICAgICAgICAgICd3YWxrX2xlZnQnOiAnbWVfc3ByaXRlJyxcclxuICAgICAgICAgICAgICAgICd3YWxrX3JpZ2h0JzogJ21lX3Nwcml0ZV9yaWdodCcsXHJcbiAgICAgICAgICAgICAgICAnd2Fsa191cCc6ICdtZV9zcHJpdGVfaWRsZScsXHJcbiAgICAgICAgICAgICAgICAnd2Fsa19kb3duJzogJ21lX3Nwcml0ZV9pZGxlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnYWN0aW9uJzogJ2lkbGUnLFxyXG4gICAgICAgICAgICAncGhhc2UnOiAwLFxyXG4gICAgICAgICAgICAneCc6MjAyLFxyXG4gICAgICAgICAgICAneSc6MTg1LFxyXG4gICAgICAgICAgICAnZHgnOiAwLFxyXG4gICAgICAgICAgICAnZHknOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBsb2FkSW1hZ2VzKHtcclxuICAgICAgICAgICAgc2t5OiAnYXJ0L3NreS5wbmcnLFxyXG4gICAgICAgICAgICBmb3JlZ3JvdW5kOiAnYXJ0L2ZvcmVncm91bmQucG5nJyxcclxuICAgICAgICAgICAgaG91c2VzOiAnYXJ0L2hvdXNlcy5wbmcnLFxyXG4gICAgICAgICAgICBoZXJfc3ByaXRlOiAnYXJ0L2hlcl9zcHJpdGUucG5nJyxcclxuICAgICAgICAgICAgbWVfc3ByaXRlOiAnYXJ0L21lX3Nwcml0ZS5wbmcnLFxyXG4gICAgICAgICAgICBtZV9zcHJpdGVfcmlnaHQ6ICdhcnQvbWVfc3ByaXRlX3JpZ2h0LnBuZycsXHJcbiAgICAgICAgICAgIG1lX3Nwcml0ZV9pZGxlOiAnYXJ0L21lX3Nwcml0ZV9pZGxlLnBuZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uKGltZ3MpIHtcclxuICAgICAgICAgICAgaW1hZ2VzID0gaW1ncztcclxuICAgICAgICAgICAgbWFwX3dpZHRoID0gaW1hZ2VzLmhvdXNlcy53aWR0aDtcclxuICAgICAgICAgICAgRnJhbWVyLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIEZyYW1lci5zdGFydCgpO1xyXG4gICAgICAgICAgICBGcmFtZXIuYWRkKGdhbWVfbG9vcCk7XHJcbiAgICAgICAgfSk7XHJcbn07XHJcbiIsIu+7v3ZhciBVdGlscyA9IHtcclxuICAgIGdldF9uZXdfaWQ6IGZ1bmN0aW9uKGNvdW50ZXJfbmFtZSkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBmb3JtYXRfcmVzdWx0KG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmFtZSArIFwiX1wiICsgdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xyXG4gICAgICAgICAgICBpZighY291bnRlcl9uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyX25hbWUgPSBcIiNkZWZhdWx0X2lkX25hbWUjXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIXRoaXMuY291bnRlcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRlcnMgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighdGhpcy5jb3VudGVycy5oYXNPd25Qcm9wZXJ0eShjb3VudGVyX25hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXJzW2NvdW50ZXJfbmFtZV0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGZvcm1hdF9yZXN1bHQoY291bnRlcl9uYW1lLCB0aGlzLmNvdW50ZXJzW2NvdW50ZXJfbmFtZV0pO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXJzW2NvdW50ZXJfbmFtZV0rKztcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgZ2V0X2VsZW1lbnRfcG9zaXRpb246IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIGxlZnQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgdG9wID0gMDtcclxuICAgICAgICAgICAgdmFyIGUgPSBlbGVtZW50O1xyXG4gICAgICAgICAgICB3aGlsZSAoZS5vZmZzZXRQYXJlbnQgIT0gdW5kZWZpbmVkICYmIGUub2Zmc2V0UGFyZW50ICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxlZnQgKz0gZS5vZmZzZXRMZWZ0ICsgKGUuY2xpZW50TGVmdCAhPSBudWxsID8gZS5jbGllbnRMZWZ0IDogMCk7XHJcbiAgICAgICAgICAgICAgICB0b3AgKz0gZS5vZmZzZXRUb3AgKyAoZS5jbGllbnRUb3AgIT0gbnVsbCA/IGUuY2xpZW50VG9wIDogMCk7XHJcbiAgICAgICAgICAgICAgICBlID0gZS5vZmZzZXRQYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHg6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICB5OiB0b3BcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICBnZXRfbW91c2VfcG9zaXRpb246IGZ1bmN0aW9uKGV2ZW50LCBkb21fZWxlbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgIGlmIChldmVudC5wYWdlWCAhPSB1bmRlZmluZWQgJiYgZXZlbnQucGFnZVkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQueCA9IGV2ZW50LnBhZ2VYO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnkgPSBldmVudC5wYWdlWTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC54ID0gZXZlbnQuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnkgPSBldmVudC5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRvbV9lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudF9wb3NpdGlvbiA9IFV0aWxzLmdldF9lbGVtZW50X3Bvc2l0aW9uKGRvbV9lbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC54IC09IGVsZW1lbnRfcG9zaXRpb24ueDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC55IC09IGVsZW1lbnRfcG9zaXRpb24ueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyByZXN1bHQueCA9IGV2ZW50LmxheWVyWCAtIDg7XHJcbiAgICAgICAgICAgIC8vIHJlc3VsdC55ID0gZXZlbnQubGF5ZXJZIC0gODtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgYXNzZXJ0X25vdF9udWxsOiBmdW5jdGlvbih2YWx1ZSwgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICBpZighdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiU29ycnksIHNvbWV0aGluZyB3ZW50IHdyb25nIDogXCIgKyBtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICBlbXB0eV9kb21fZWxlbWVudDogZnVuY3Rpb24oZG9tX2VsZW1lbnQpIHtcclxuICAgICAgICAgICAgd2hpbGUgKCBkb21fZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+PSAxICkge1xyXG4gICAgICAgICAgICAgICAgZG9tX2VsZW1lbnQucmVtb3ZlQ2hpbGQoIGRvbV9lbGVtZW50LmZpcnN0Q2hpbGQgKTsgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBVdGlscztcclxuIiwi77u/dmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xyXG5cclxudmFyIEZyYW1lciA9IHtcclxuICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgRnJhbWVyLnVwZGF0ZV9mdW5jcyA9IHt9O1xyXG4gICAgICAgICAgICBGcmFtZXIuYWRkZWRfb25jZSA9IFtdO1xyXG4gICAgICAgICAgICBGcmFtZXIucGF1c2VkID0ge307XHJcbiAgICAgICAgICAgIEZyYW1lci5sYXN0X3RpbWUgPSBudWxsO1xyXG4gICAgICAgICAgICBGcmFtZXIubGFzdF9mcHMgPSBbXTtcclxuICAgICAgICAgICAgRnJhbWVyLmZwc19pbmRleCA9IDA7XHJcbiAgICAgICAgICAgIEZyYW1lci5mcHNfd2luZG93ID0gMTA7XHJcbiAgICAgICAgICAgIEZyYW1lci5fcmVxdWVzdF91cGRhdGUgPSBmdW5jdGlvbigpe307XHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgX3NldF9yZXF1ZXN0X3VwZGF0ZV9mdW5jOiBmdW5jdGlvbih1cGRhdGVfZnVuYykge1xyXG4gICAgICAgICAgICB2YXIgcmVxX3VwZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICAgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG4gICAgICAgICAgICBpZiAocmVxX3VwZCkge1xyXG4gICAgICAgICAgICAgICAgRnJhbWVyLnJlcXVlc3RfdXBkYXRlID0gZnVuY3Rpb24oKXtyZXFfdXBkKHVwZGF0ZV9mdW5jKTt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRnJhbWVyLnJlcXVlc3RfdXBkYXRlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHVwZGF0ZV9mdW5jLCAzMyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICBfbG9vcDogZnVuY3Rpb24odGltZSwgYm91bmRpbmdfb2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmKCF0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoRnJhbWVyLmxhc3RfdGltZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgRnJhbWVyLmxhc3RfdGltZSA9IHRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBGcmFtZXIubGFzdF9mcHNbRnJhbWVyLmZwc19pbmRleF0gPSAxMDAwLjAgLyAodGltZSAtIEZyYW1lci5sYXN0X3RpbWUpO1xyXG4gICAgICAgICAgICAgICAgRnJhbWVyLmZwc19pbmRleCA9IChGcmFtZXIuZnBzX2luZGV4ICsgMSkgJSBGcmFtZXIuZnBzX3dpbmRvdztcclxuICAgICAgICAgICAgICAgIEZyYW1lci5sYXN0X3RpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcih2YXIgZnVuY19pZCBpbiBGcmFtZXIudXBkYXRlX2Z1bmNzKSB7XHJcbiAgICAgICAgICAgICAgICBpZihGcmFtZXIudXBkYXRlX2Z1bmNzLmhhc093blByb3BlcnR5KGZ1bmNfaWQpICYmICFGcmFtZXIucGF1c2VkLmhhc093blByb3BlcnR5KGZ1bmNfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRnJhbWVyLnVwZGF0ZV9mdW5jc1tmdW5jX2lkXSh0aW1lLCBib3VuZGluZ19vYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKEZyYW1lci5hZGRlZF9vbmNlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBGcmFtZXIuYWRkZWRfb25jZS5sZW5ndGggOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBGcmFtZXIuYWRkZWRfb25jZVtpXSh0aW1lLCBib3VuZGluZ19vYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRnJhbWVyLmFkZGVkX29uY2UgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBGcmFtZXIucmVxdWVzdF91cGRhdGUoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgIGdldF9mcHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgc3VtID0gMDtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBGcmFtZXIubGFzdF9mcHMubGVuZ3RoIDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzdW0gKz0gRnJhbWVyLmxhc3RfZnBzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdW0gLyBGcmFtZXIuZnBzX3dpbmRvdztcclxuICAgICAgICB9LFxyXG5cclxuICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgRnJhbWVyLl9zZXRfcmVxdWVzdF91cGRhdGVfZnVuYyhGcmFtZXIuX2xvb3ApO1xyXG4gICAgICAgICAgICBGcmFtZXIucmVxdWVzdF91cGRhdGUoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgIGFkZDogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIG5ld19pbmRleCA9IFV0aWxzLmdldF9uZXdfaWQoJ3VwZGF0ZV9mdW5jJyk7XHJcbiAgICAgICAgICAgIEZyYW1lci51cGRhdGVfZnVuY3NbbmV3X2luZGV4XSA9IGZ1bmN0aW9uKHRpbWUsIGJvdW5kaW5nX29iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGltZSwgYm91bmRpbmdfb2JqZWN0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld19pbmRleDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgYWRkX29uY2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIEZyYW1lci5hZGRlZF9vbmNlW0ZyYW1lci5hZGRlZF9vbmNlLmxlbmd0aF0gPSBjYWxsYmFjaztcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgcGF1c2U6IGZ1bmN0aW9uKHRva2VuKSB7XHJcbiAgICAgICAgICAgIEZyYW1lci5wYXVzZWRbdG9rZW5dID0gMTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgcmVzdW1lOiBmdW5jdGlvbih0b2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVsZXRlIEZyYW1lci5wYXVzZWRbdG9rZW5dO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWxldGUgRnJhbWVyLnVwZGF0ZV9mdW5jc1t0b2tlbl07XHJcbiAgICAgICAgfSxcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRnJhbWVyO1xyXG4iXX0=
;