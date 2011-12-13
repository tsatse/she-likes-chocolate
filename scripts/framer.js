define([
        'utils'
    ],
    function(Utils) {
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
                    }
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
        return Framer;
    }
);