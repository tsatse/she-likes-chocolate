;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
﻿var Utils = require('./utils');
var Character = require('./character');


var keys = {
    37: false,
    38: false,
    39: false,
    40: false
};

window.onload = function() {
    function gameLoop() {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }
    
    function updateMovement() {
        var unit = 2;
        characters.me.dx = 0;
        characters.me.dy = 0;
        if(keys[37]) {
            characters.me.dx -= unit;
        }
        if(keys[39]) {
            characters.me.dx += unit;
        }
        if(keys[38]) {
            characters.me.dy -= unit;
        }
        if(keys[40]) {
            characters.me.dy += unit;
        }
        if(characters.me.dx > 0) {
            characters.me.setProperty('action', 'walkRight');
        }
        else if(characters.me.dx < 0) {
            characters.me.setProperty('action', 'walkLeft');
        }
        else if(characters.me.dy > 0) {
            characters.me.setProperty('action', 'walkUp');
        }
        else if(characters.me.dy < 0) {
            characters.me.setProperty('action', 'walkDown');
        }
        else {
            characters.me.setProperty('action', 'idle');
        }
    }
    
    function update() {
        updateMovement();
        var characterList = Object.keys(characters);
        for(var i = 0 ; i < characterList.length ; i++) {
            var character = characters[characterList[i]];
            if(character.x + character.dx > minX && character.x + character.dx < maxX) {
                character.x += character.dx;
            }
            if(character.y + character.dy > minY && character.y + character.dy < maxY) {
                character.y += character.dy;
            }
            character.phase = (character.phase + 1) % (images[character.sprites[character.action]].width / character.width);
        }
    }
    
    function drawCharacter(characterName) {
        var character = characters[characterName];
        var image = images[character.sprites[character.action]];
        var xOffsetInSource = character.phase * character.width;

        var currentMapOffset = getMapOffset(characters.me.x, characters.me.y);
        ctx.drawImage(
            image,
            xOffsetInSource, 0,
            character.width, character.height,
            character.x - currentMapOffset.x, character.y - currentMapOffset.y,
            character.width, character.height
            );
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
        ctx.drawImage(
            images.sky,
            0, 0,
            gameCanvas.width, gameCanvas.height,
            0, 0,
            gameCanvas.width, gameCanvas.height
            );
        ctx.drawImage(
            images.houses,
            Math.min(mapOffset.x, mapWidth - gameCanvas.width), mapOffset.y,
            gameCanvas.width, gameCanvas.height,
            0, 0,
            gameCanvas.width, gameCanvas.height
            );
        
    }

    function drawForeground(x, y) {
        var mapOffset = getMapOffset(x, y);
        ctx.drawImage(
            images.foreground,
            (mapOffset.x * 1.5) % images.foreground.width, mapOffset.y,
            gameCanvas.width, gameCanvas.height,
            0, 0,
            gameCanvas.width, gameCanvas.height
            );
    }

    function isVisible(characterName) {
        var character = characters[characterName];
        var currentMapOffset = getMapOffset(character.x, character.y);
        if(
            (character.x - currentMapOffset.x) > 0 &&
            (character.x - currentMapOffset.x) < gameCanvas.width
        ) {
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
            characters.me.setProperty('action', 'idle');
            keys[event.keyCode] = true;
        }, false);

    document.addEventListener('keyup', function(event) {
            keys[event.keyCode] = false;
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
    };
    
    
    Utils.loadImages({
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
        function(imgs) {
            images = imgs;
            mapWidth = images.houses.width;
            requestAnimationFrame(gameLoop);
        });
};

},{"./utils":2,"./character":3}],2:[function(require,module,exports){
(function(){(function(global) {
    var idCounters = {};
    var Utils = {
        clone: function clone(obj) {
            // Handle the 3 simple types, and null or undefined
            if(null === obj || 'object' !== typeof obj) {
                return obj;
            }

            var copy;
            // Handle Date
            if(obj instanceof Date) {
                copy = new Date();
                copy.setTime(obj.getTime());
                return copy;
            }
            // Handle Array
            if(obj instanceof Array) {
                copy = [];
                for(var i = 0, len = obj.length; i < len; ++i) {
                    copy[i] = clone(obj[i]);
                }
                return copy;
            }

            // Handle Object
            if(obj instanceof Object) {
                copy = {};
                for(var attr in obj) {
                    if(obj.hasOwnProperty(attr)) {
                        copy[attr] = clone(obj[attr]);
                    }
                }
                return copy;
            }

            throw new Error('Unable to copy obj! Its type is not supported.');
        },

        merge: function(object1, object2) {
            for(var attributeName in object2) {
                if(object2.hasOwnProperty(attributeName)) {
                    object1[attributeName] = object2[attributeName];
                }
            }
            return object1;
        },

        loadImages: function(imagesURLs, allDone) {
            var imagesNames = Object.keys(imagesURLs);
            var result = {};
            var loaded = 0;
            var loadCallback = function() {
                loaded += 1;
                if(loaded === imagesNames.length) {
                    allDone(result);
                }
            };
            for(var i = 0; i < imagesNames.length; i++) {
                var imageName = imagesNames[i];
                var url = imagesURLs[imageName];
                if(url !== null) {
                    var img = new global.Image();
                    result[imageName] = img;
                    img.onload = loadCallback;
                    img.src = url;
                }
                else {
                    loaded += 1;
                    result[imageName] = null;
                }
            }
        },

        getMethodSignature: function(object, methodString) {
            var result = methodString.substr(9, methodString.indexOf(')') + 1 - 9);
            if(object) {
                result = object.toString() + '.' + result;
            }
            return result;
        },

        updateCtxWithImages: function(images, destination) {
            var names = Object.keys(images);
            for(var i = 0; i < names.length; i++) {
                var name = names[i];
                if(images[name] !== null) {
                    destination[name].clearRect(0, 0, images[name].width, images[name].height);
                    destination[name].drawImage(images[name], 0, 0, images[name].width, images[name].height);
                }
                else {
                    destination[name] = null;
                }
            }
        },

        drawLine: function(ctx, p1, p2) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
        },

        dashLine: function(x, y, x2, y2, da) {
            if(!da) {
                da = [10, 5];
            }
            this.save();
            var dx = (x2 - x),
                dy = (y2 - y);
            var len = Math.sqrt(dx * dx + dy * dy);
            var rot = Math.atan2(dy, dx);
            this.translate(x, y);
            this.moveTo(0, 0);
            this.rotate(rot);
            var dc = da.length;
            var di = 0,
                draw = true;
            x = 0;
            while(len > x) {
                x += da[di++ % dc];
                if(x > len) {
                    x = len;
                }
                if(draw) {
                    this.lineTo(x, 0);
                }
                else {
                    this.moveTo(x, 0);
                }
                draw = !draw;
            }
            this.restore();
        },

        dashRect: function(x, y, dx, dy, da) {
            this.beginPath();
            Utils.dashLine.call(this, x, y, x + dx, y, da);
            Utils.dashLine.call(this, x + dx, y, x + dx, y + dy, da);
            Utils.dashLine.call(this, x + dx, y + dy, x, y + dy, da);
            Utils.dashLine.call(this, x, y + dy, x, y, da);
            this.closePath();
            this.stroke();
        },

        drawPixel: function(x, y, r, g, b, width) {
            var imageData = this.createImageData(width, width);
            for(var i = 0; i < width; i++) {
                for(var j = 0; j < width; j++) {
                    imageData.data[(i + j * width) * 4 + 0] = r;
                    imageData.data[(i + j * width) * 4 + 1] = g;
                    imageData.data[(i + j * width) * 4 + 2] = b;
                    imageData.data[(i + j * width) * 4 + 3] = 255;
                }
            }
            this.putImageData(imageData, x - parseInt(width / 2), y - parseInt(width / 2));
        },

        drawPixelLine: function(x1, y1, x2, y2, r, g, b, width) {
            // Define differences and error check
            var dx = Math.abs(x2 - x1);
            var dy = Math.abs(y2 - y1);
            var sx = (x1 < x2) ? 1 : -1;
            var sy = (y1 < y2) ? 1 : -1;
            var err = dx - dy;
            Utils.drawPixel.call(this, x1, y1, r, g, b, width);
            // Main loop
            while(!((x1 === x2) && (y1 === y2))) {
                var e2 = err << 1;
                if(e2 > -dy) {
                    err -= dy;
                    x1 += sx;
                }
                if(e2 < dx) {
                    err += dx;
                    y1 += sy;
                }
                Utils.drawPixel.call(this, x1, y1, r, g, b, width);
            }
        },

        resizeCanvas: function(ctx, width, height) {
            var canvas = ctx.canvas;
            if(canvas.width !== width || canvas.height !== height) {
                var tmpCanvas = global.document.createElement('canvas');
                var tmpCtx = tmpCanvas.getContext('2d');
                var minWidth = Math.min(width, canvas.width);
                var minHeight = Math.min(height, canvas.height);
                tmpCanvas.width = canvas.width;
                tmpCanvas.height = canvas.height;
                tmpCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(tmpCanvas, 0, 0, minWidth, minHeight,
                    0, 0, minWidth, minHeight);
            }
            return ctx;
        },

        getNewId: function(counterName) {
            function formatResult(name, value) {
                return name + '_' + value;
            }
            var result = '';
            if(!counterName) {
                counterName = '#default_id_name#';
            }
            if(!idCounters) {
                this.resetIds();
            }
            if(!idCounters.hasOwnProperty(counterName)) {
                idCounters[counterName] = 0;
            }
            result = formatResult(counterName, idCounters[counterName]);
            idCounters[counterName]++;
            return result;
        },

        resetIds: function() {
            idCounters = {};
        },

        setIdCounters: function(counters) {
            idCounters = counters;
        },

        getIdCounters: function() {
            return idCounters;
        },

        getElementPosition: function(element) {
            var left = 0;
            var top = 0;
            var e = element;
            while(e.offsetParent !== undefined && e.offsetParent !== null) {
                left += e.offsetLeft + (e.clientLeft !== null ? e.clientLeft : 0);
                top += e.offsetTop + (e.clientTop !== null ? e.clientTop : 0);
                e = e.offsetParent;
            }
            return {
                x: left,
                y: top
            };
        },

        getMousePosition: function(event, domElement) {
            var result = Utils.readGlobalMouse(event);
            if(domElement) {
                var elementPosition = Utils.getElementPosition(domElement);
                result.x -= elementPosition.x;
                result.y -= elementPosition.y;
            }
            return result;
        },

        assertNotNull: function(value, message) {
            if(!value) {
                console.error('Unexpected null value ' + message);
            }
        },

        emptyDomElement: function(domElement) {
            while(domElement.childNodes.length >= 1) {
                domElement.removeChild(domElement.firstChild);
            }
        },

        readGlobalMouse: function(event) {
            var result = {};
            if(event.pageX !== undefined && event.pageY !== undefined) {
                result.x = event.pageX;
                result.y = event.pageY;
            }
            else {
                result.x = event.clientX + global.document.body.scrollLeft + global.document.documentElement.scrollLeft;
                result.y = event.clientY + global.document.body.scrollTop + global.document.documentElement.scrollTop;
            }
            return result;
        },

        indexOf: function(array, value) {
            for(var i = 0; i < array.length; i++) {
                if(array[i] === value) {
                    return i;
                }
            }
            return null;
        },

        HSLValue: function(n1, n2, hue) {
            var val;
            if(hue > 6) {
                hue -= 6;
            }
            else if(hue < 0) {
                hue += 6;
            }
            if(hue < 1) {
                val = n1 + (n2 - n1) * hue;
            }
            else if(hue < 3) {
                val = n2;
            }
            else if(hue < 4) {
                val = n1 + (n2 - n1) * (4 - hue);
            }
            else {
                val = n1;
            }
            return val;
        },

        HSLToRGB: function(h, s, l) {
            var r, g, b;
            h = h - Math.floor(h);
            s = this.clamp(s, 0, 1);
            l = this.clamp(l, 0, 1);
            if(s === 0) {
                r = l;
                g = l;
                b = l;
            }
            else {
                var m1, m2;
                if(l <= 0.5) {
                    m2 = l * (1 + s);
                }
                else {
                    m2 = l + s - l * s;
                }
                m1 = 2.0 * l - m2;
                r = this.HSLValue(m1, m2, h * 6.0 + 2.0);
                g = this.HSLValue(m1, m2, h * 6.0);
                b = this.HSLValue(m1, m2, h * 6.0 - 2.0);
            }
            return {
                r: r,
                g: g,
                b: b
            };
        },

        RGBToHSV: function RGBToHSV(colorRGB) {
            var r = colorRGB.r / 255;
            var g = colorRGB.g / 255;
            var b = colorRGB.b / 255;
            var max = Math.max(r, g, b);
            var min = Math.min(r, g, b);
            var h, s, v = max;

            var d = max - min;
            s = max === 0 ? 0 : d / max;

            if(max === min) {
                h = 0; // achromatic
            }
            else {
                switch(max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                }
                h /= 6;
            }

            return {
                h: h,
                s: s,
                v: v
            };
        },

        HSVToRGB: function HSVToRGB(h, s, v) {
            var r, g, b;

            var i = Math.floor(h * 6);
            var f = h * 6 - i;
            var p = v * (1 - s);
            var q = v * (1 - f * s);
            var t = v * (1 - (1 - f) * s);

            switch(i % 6) {
                case 0:
                    r = v;
                    g = t;
                    b = p;
                    break;
                case 1:
                    r = q;
                    g = v;
                    b = p;
                    break;
                case 2:
                    r = p;
                    g = v;
                    b = t;
                    break;
                case 3:
                    r = p;
                    g = q;
                    b = v;
                    break;
                case 4:
                    r = t;
                    g = p;
                    b = v;
                    break;
                case 5:
                    r = v;
                    g = p;
                    b = q;
                    break;
            }

            return {
                r: parseInt(r * 255),
                g: parseInt(g * 255),
                b: parseInt(b * 255)
            };
        },

        HSVToHSL: function(h, s, v) {
            // determine the lightness in the range [0,100]
            var l = (2 - s / 100) * v / 2;

            var hsl = {
                'h': h,
                's': s * v / (l < 50 ? l * 2 : 200 - l * 2),
                'l': l
            };

            // correct a division-by-zero error
            if(isNaN(hsl.s)) {
                hsl.s = 0;
            }
            return hsl;
        },

        clamp: function(v, min, max) {
            return Math.max(Math.min(v, max), min);
        }
    };

    module.exports = Utils;
}) (this);


})()
},{}],3:[function(require,module,exports){
function Character(sprites, size, properties) {
    this.init(sprites, size, properties);    
}

Character.prototype = {
    init: function init(sprites, size, properties) {
        this.action = 'idle';
        this.phase = 0;
        this.dx = 0;
        this.dy = 0;

        this.sprites = sprites;
        this.width = size.width;
        this.height = size.height;
        for(var property in properties) {
            this.setProperty(property, properties[property]);
        }
    },

    setProperty: function setProperty(name, value) {
        if(this[name] !== value) {
            if(name === 'action') {
                this.phase = 0;
            }
            this[name] = value;
        }
    }
};


module.exports = Character;

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2dhbWUuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL3NyYy91dGlscy5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2NoYXJhY3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyLvu792YXIgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XHJcbnZhciBDaGFyYWN0ZXIgPSByZXF1aXJlKCcuL2NoYXJhY3RlcicpO1xyXG5cclxuXHJcbnZhciBrZXlzID0ge1xyXG4gICAgMzc6IGZhbHNlLFxyXG4gICAgMzg6IGZhbHNlLFxyXG4gICAgMzk6IGZhbHNlLFxyXG4gICAgNDA6IGZhbHNlXHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcclxuICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICBkcmF3KCk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gdXBkYXRlTW92ZW1lbnQoKSB7XHJcbiAgICAgICAgdmFyIHVuaXQgPSAyO1xyXG4gICAgICAgIGNoYXJhY3RlcnMubWUuZHggPSAwO1xyXG4gICAgICAgIGNoYXJhY3RlcnMubWUuZHkgPSAwO1xyXG4gICAgICAgIGlmKGtleXNbMzddKSB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlcnMubWUuZHggLT0gdW5pdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoa2V5c1szOV0pIHtcclxuICAgICAgICAgICAgY2hhcmFjdGVycy5tZS5keCArPSB1bml0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihrZXlzWzM4XSkge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJzLm1lLmR5IC09IHVuaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGtleXNbNDBdKSB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlcnMubWUuZHkgKz0gdW5pdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2hhcmFjdGVycy5tZS5keCA+IDApIHtcclxuICAgICAgICAgICAgY2hhcmFjdGVycy5tZS5zZXRQcm9wZXJ0eSgnYWN0aW9uJywgJ3dhbGtSaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGNoYXJhY3RlcnMubWUuZHggPCAwKSB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlcnMubWUuc2V0UHJvcGVydHkoJ2FjdGlvbicsICd3YWxrTGVmdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGNoYXJhY3RlcnMubWUuZHkgPiAwKSB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlcnMubWUuc2V0UHJvcGVydHkoJ2FjdGlvbicsICd3YWxrVXAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjaGFyYWN0ZXJzLm1lLmR5IDwgMCkge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJzLm1lLnNldFByb3BlcnR5KCdhY3Rpb24nLCAnd2Fsa0Rvd24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlcnMubWUuc2V0UHJvcGVydHkoJ2FjdGlvbicsICdpZGxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XHJcbiAgICAgICAgdXBkYXRlTW92ZW1lbnQoKTtcclxuICAgICAgICB2YXIgY2hhcmFjdGVyTGlzdCA9IE9iamVjdC5rZXlzKGNoYXJhY3RlcnMpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgY2hhcmFjdGVyTGlzdC5sZW5ndGggOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNoYXJhY3RlciA9IGNoYXJhY3RlcnNbY2hhcmFjdGVyTGlzdFtpXV07XHJcbiAgICAgICAgICAgIGlmKGNoYXJhY3Rlci54ICsgY2hhcmFjdGVyLmR4ID4gbWluWCAmJiBjaGFyYWN0ZXIueCArIGNoYXJhY3Rlci5keCA8IG1heFgpIHtcclxuICAgICAgICAgICAgICAgIGNoYXJhY3Rlci54ICs9IGNoYXJhY3Rlci5keDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjaGFyYWN0ZXIueSArIGNoYXJhY3Rlci5keSA+IG1pblkgJiYgY2hhcmFjdGVyLnkgKyBjaGFyYWN0ZXIuZHkgPCBtYXhZKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIueSArPSBjaGFyYWN0ZXIuZHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hhcmFjdGVyLnBoYXNlID0gKGNoYXJhY3Rlci5waGFzZSArIDEpICUgKGltYWdlc1tjaGFyYWN0ZXIuc3ByaXRlc1tjaGFyYWN0ZXIuYWN0aW9uXV0ud2lkdGggLyBjaGFyYWN0ZXIud2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZHJhd0NoYXJhY3RlcihjaGFyYWN0ZXJOYW1lKSB7XHJcbiAgICAgICAgdmFyIGNoYXJhY3RlciA9IGNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV07XHJcbiAgICAgICAgdmFyIGltYWdlID0gaW1hZ2VzW2NoYXJhY3Rlci5zcHJpdGVzW2NoYXJhY3Rlci5hY3Rpb25dXTtcclxuICAgICAgICB2YXIgeE9mZnNldEluU291cmNlID0gY2hhcmFjdGVyLnBoYXNlICogY2hhcmFjdGVyLndpZHRoO1xyXG5cclxuICAgICAgICB2YXIgY3VycmVudE1hcE9mZnNldCA9IGdldE1hcE9mZnNldChjaGFyYWN0ZXJzLm1lLngsIGNoYXJhY3RlcnMubWUueSk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgICAgIHhPZmZzZXRJblNvdXJjZSwgMCxcclxuICAgICAgICAgICAgY2hhcmFjdGVyLndpZHRoLCBjaGFyYWN0ZXIuaGVpZ2h0LFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXIueCAtIGN1cnJlbnRNYXBPZmZzZXQueCwgY2hhcmFjdGVyLnkgLSBjdXJyZW50TWFwT2Zmc2V0LnksXHJcbiAgICAgICAgICAgIGNoYXJhY3Rlci53aWR0aCwgY2hhcmFjdGVyLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1hcE9mZnNldCh4LCB5KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt4OjAsIHk6MH07XHJcbiAgICAgICAgaWYoeCA+IChnYW1lQ2FudmFzLndpZHRoIC8gMikpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnggPSBNYXRoLm1pbih4IC0gZ2FtZUNhbnZhcy53aWR0aCAvIDIsIG1hcFdpZHRoIC0gZ2FtZUNhbnZhcy53aWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd01hcCh4LCB5KSB7XHJcbiAgICAgICAgdmFyIG1hcE9mZnNldCA9IGdldE1hcE9mZnNldCh4LCB5KTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICBpbWFnZXMuc2t5LFxyXG4gICAgICAgICAgICAwLCAwLFxyXG4gICAgICAgICAgICBnYW1lQ2FudmFzLndpZHRoLCBnYW1lQ2FudmFzLmhlaWdodCxcclxuICAgICAgICAgICAgMCwgMCxcclxuICAgICAgICAgICAgZ2FtZUNhbnZhcy53aWR0aCwgZ2FtZUNhbnZhcy5oZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICBpbWFnZXMuaG91c2VzLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihtYXBPZmZzZXQueCwgbWFwV2lkdGggLSBnYW1lQ2FudmFzLndpZHRoKSwgbWFwT2Zmc2V0LnksXHJcbiAgICAgICAgICAgIGdhbWVDYW52YXMud2lkdGgsIGdhbWVDYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAwLCAwLFxyXG4gICAgICAgICAgICBnYW1lQ2FudmFzLndpZHRoLCBnYW1lQ2FudmFzLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRyYXdGb3JlZ3JvdW5kKHgsIHkpIHtcclxuICAgICAgICB2YXIgbWFwT2Zmc2V0ID0gZ2V0TWFwT2Zmc2V0KHgsIHkpO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIGltYWdlcy5mb3JlZ3JvdW5kLFxyXG4gICAgICAgICAgICAobWFwT2Zmc2V0LnggKiAxLjUpICUgaW1hZ2VzLmZvcmVncm91bmQud2lkdGgsIG1hcE9mZnNldC55LFxyXG4gICAgICAgICAgICBnYW1lQ2FudmFzLndpZHRoLCBnYW1lQ2FudmFzLmhlaWdodCxcclxuICAgICAgICAgICAgMCwgMCxcclxuICAgICAgICAgICAgZ2FtZUNhbnZhcy53aWR0aCwgZ2FtZUNhbnZhcy5oZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1Zpc2libGUoY2hhcmFjdGVyTmFtZSkge1xyXG4gICAgICAgIHZhciBjaGFyYWN0ZXIgPSBjaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdO1xyXG4gICAgICAgIHZhciBjdXJyZW50TWFwT2Zmc2V0ID0gZ2V0TWFwT2Zmc2V0KGNoYXJhY3Rlci54LCBjaGFyYWN0ZXIueSk7XHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAgIChjaGFyYWN0ZXIueCAtIGN1cnJlbnRNYXBPZmZzZXQueCkgPiAwICYmXHJcbiAgICAgICAgICAgIChjaGFyYWN0ZXIueCAtIGN1cnJlbnRNYXBPZmZzZXQueCkgPCBnYW1lQ2FudmFzLndpZHRoXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhdyh0aW1lLCBib3VuZGluZ0VsZW1lbnQpIHtcclxuICAgICAgICBkcmF3TWFwKGNoYXJhY3RlcnMubWUueCwgY2hhcmFjdGVycy5tZS55KTtcclxuICAgICAgICB2YXIgY2hhcmFjdGVyTGlzdCA9IE9iamVjdC5rZXlzKGNoYXJhY3RlcnMpO1xyXG4gICAgICAgIGNoYXJhY3Rlckxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGFyYWN0ZXJzW2FdLnkgLSBjaGFyYWN0ZXJzW2JdLnk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBjaGFyYWN0ZXJMaXN0Lmxlbmd0aCA7IGkrKykge1xyXG4gICAgICAgICAgICBpZihpc1Zpc2libGUoY2hhcmFjdGVyTGlzdFtpXSkpIHtcclxuICAgICAgICAgICAgICAgIGRyYXdDaGFyYWN0ZXIoY2hhcmFjdGVyTGlzdFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZHJhd0ZvcmVncm91bmQoY2hhcmFjdGVycy5tZS54LCBjaGFyYWN0ZXJzLm1lLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJzLm1lLnNldFByb3BlcnR5KCdhY3Rpb24nLCAnaWRsZScpO1xyXG4gICAgICAgICAgICBrZXlzW2V2ZW50LmtleUNvZGVdID0gdHJ1ZTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBrZXlzW2V2ZW50LmtleUNvZGVdID0gZmFsc2U7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIHZhciBnYW1lQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY2FudmFzJyk7XHJcbiAgICBnYW1lQ2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBnYW1lQ2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIHZhciBtaW5YID0gMjAwO1xyXG4gICAgdmFyIG1heFggPSAyMzUwO1xyXG4gICAgdmFyIG1pblkgPSAxNTA7XHJcbiAgICB2YXIgbWF4WSA9IDI4MDtcclxuICAgIHZhciBtYXBXaWR0aDtcclxuICAgIHZhciBsb2FkZWQ7XHJcbiAgICB2YXIgaW1hZ2VzO1xyXG4gICAgdmFyIGN0eCA9IGdhbWVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHZhciBjaGFyYWN0ZXJzID0ge1xyXG4gICAgICAgIGhlcjogbmV3IENoYXJhY3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRsZTogJ2hlclNwcml0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgd2Fsa0xlZnQ6ICdoZXJTcHJpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdhbGtSaWdodDogJ2hlclNwcml0ZScsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiAxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogMTU1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuICAgICAgICBtZTogbmV3IENoYXJhY3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRsZTogJ21lU3ByaXRlSWRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgd2Fsa0xlZnQ6ICdtZVNwcml0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgd2Fsa1JpZ2h0OiAnbWVTcHJpdGVSaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2Fsa1VwOiAnbWVTcHJpdGVJZGxlJyxcclxuICAgICAgICAgICAgICAgICAgICB3YWxrRG93bjogJ21lU3ByaXRlSWRsZSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMixcclxuICAgICAgICAgICAgICAgICAgICB5OiAxODVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBcclxuICAgIFV0aWxzLmxvYWRJbWFnZXMoe1xyXG4gICAgICAgICAgICBza3k6XHJcbiAgICAgICAgICAgICAgICAnYXJ0L3NreS5wbmcnLFxyXG4gICAgICAgICAgICBmb3JlZ3JvdW5kOlxyXG4gICAgICAgICAgICAgICAgJ2FydC9mb3JlZ3JvdW5kLnBuZycsXHJcbiAgICAgICAgICAgIGhvdXNlczpcclxuICAgICAgICAgICAgICAgICdhcnQvaG91c2VzLnBuZycsXHJcbiAgICAgICAgICAgIGhlclNwcml0ZTpcclxuICAgICAgICAgICAgICAgICdhcnQvaGVyX3Nwcml0ZS5wbmcnLFxyXG4gICAgICAgICAgICBtZVNwcml0ZTpcclxuICAgICAgICAgICAgICAgICdhcnQvbWVfc3ByaXRlLnBuZycsXHJcbiAgICAgICAgICAgIG1lU3ByaXRlUmlnaHQ6XHJcbiAgICAgICAgICAgICAgICAnYXJ0L21lX3Nwcml0ZV9yaWdodC5wbmcnLFxyXG4gICAgICAgICAgICBtZVNwcml0ZUlkbGU6XHJcbiAgICAgICAgICAgICAgICAnYXJ0L21lX3Nwcml0ZV9pZGxlLnBuZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uKGltZ3MpIHtcclxuICAgICAgICAgICAgaW1hZ2VzID0gaW1ncztcclxuICAgICAgICAgICAgbWFwV2lkdGggPSBpbWFnZXMuaG91c2VzLndpZHRoO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xyXG4gICAgICAgIH0pO1xyXG59O1xyXG4iLCIoZnVuY3Rpb24oKXsoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgdmFyIGlkQ291bnRlcnMgPSB7fTtcbiAgICB2YXIgVXRpbHMgPSB7XG4gICAgICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgMyBzaW1wbGUgdHlwZXMsIGFuZCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYobnVsbCA9PT0gb2JqIHx8ICdvYmplY3QnICE9PSB0eXBlb2Ygb2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvcHk7XG4gICAgICAgICAgICAvLyBIYW5kbGUgRGF0ZVxuICAgICAgICAgICAgaWYob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvcHkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvcHkuc2V0VGltZShvYmouZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEhhbmRsZSBBcnJheVxuICAgICAgICAgICAgaWYob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBjb3B5ID0gW107XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMCwgbGVuID0gb2JqLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvcHlbaV0gPSBjbG9uZShvYmpbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGFuZGxlIE9iamVjdFxuICAgICAgICAgICAgaWYob2JqIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgY29weSA9IHt9O1xuICAgICAgICAgICAgICAgIGZvcih2YXIgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3B5W2F0dHJdID0gY2xvbmUob2JqW2F0dHJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gY29weSBvYmohIEl0cyB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uKG9iamVjdDEsIG9iamVjdDIpIHtcbiAgICAgICAgICAgIGZvcih2YXIgYXR0cmlidXRlTmFtZSBpbiBvYmplY3QyKSB7XG4gICAgICAgICAgICAgICAgaWYob2JqZWN0Mi5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QxW2F0dHJpYnV0ZU5hbWVdID0gb2JqZWN0MlthdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0MTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkSW1hZ2VzOiBmdW5jdGlvbihpbWFnZXNVUkxzLCBhbGxEb25lKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2VzTmFtZXMgPSBPYmplY3Qua2V5cyhpbWFnZXNVUkxzKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgIHZhciBsb2FkZWQgPSAwO1xuICAgICAgICAgICAgdmFyIGxvYWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxvYWRlZCArPSAxO1xuICAgICAgICAgICAgICAgIGlmKGxvYWRlZCA9PT0gaW1hZ2VzTmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbERvbmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGltYWdlc05hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlTmFtZSA9IGltYWdlc05hbWVzW2ldO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBpbWFnZXNVUkxzW2ltYWdlTmFtZV07XG4gICAgICAgICAgICAgICAgaWYodXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBuZXcgZ2xvYmFsLkltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpbWFnZU5hbWVdID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gbG9hZENhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gdXJsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpbWFnZU5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TWV0aG9kU2lnbmF0dXJlOiBmdW5jdGlvbihvYmplY3QsIG1ldGhvZFN0cmluZykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG1ldGhvZFN0cmluZy5zdWJzdHIoOSwgbWV0aG9kU3RyaW5nLmluZGV4T2YoJyknKSArIDEgLSA5KTtcbiAgICAgICAgICAgIGlmKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9iamVjdC50b1N0cmluZygpICsgJy4nICsgcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVDdHhXaXRoSW1hZ2VzOiBmdW5jdGlvbihpbWFnZXMsIGRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbmFtZXMgPSBPYmplY3Qua2V5cyhpbWFnZXMpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgICAgICAgICBpZihpbWFnZXNbbmFtZV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25bbmFtZV0uY2xlYXJSZWN0KDAsIDAsIGltYWdlc1tuYW1lXS53aWR0aCwgaW1hZ2VzW25hbWVdLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uW25hbWVdLmRyYXdJbWFnZShpbWFnZXNbbmFtZV0sIDAsIDAsIGltYWdlc1tuYW1lXS53aWR0aCwgaW1hZ2VzW25hbWVdLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltuYW1lXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRyYXdMaW5lOiBmdW5jdGlvbihjdHgsIHAxLCBwMikge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhwMS54LCBwMS55KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocDIueCwgcDIueSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGFzaExpbmU6IGZ1bmN0aW9uKHgsIHksIHgyLCB5MiwgZGEpIHtcbiAgICAgICAgICAgIGlmKCFkYSkge1xuICAgICAgICAgICAgICAgIGRhID0gWzEwLCA1XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICAgICAgdmFyIGR4ID0gKHgyIC0geCksXG4gICAgICAgICAgICAgICAgZHkgPSAoeTIgLSB5KTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgdmFyIHJvdCA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKHgsIHkpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlVG8oMCwgMCk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZShyb3QpO1xuICAgICAgICAgICAgdmFyIGRjID0gZGEubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGRpID0gMCxcbiAgICAgICAgICAgICAgICBkcmF3ID0gdHJ1ZTtcbiAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgICAgd2hpbGUobGVuID4geCkge1xuICAgICAgICAgICAgICAgIHggKz0gZGFbZGkrKyAlIGRjXTtcbiAgICAgICAgICAgICAgICBpZih4ID4gbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBsZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGRyYXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lVG8oeCwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUbyh4LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHJhdyA9ICFkcmF3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGFzaFJlY3Q6IGZ1bmN0aW9uKHgsIHksIGR4LCBkeSwgZGEpIHtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBVdGlscy5kYXNoTGluZS5jYWxsKHRoaXMsIHgsIHksIHggKyBkeCwgeSwgZGEpO1xuICAgICAgICAgICAgVXRpbHMuZGFzaExpbmUuY2FsbCh0aGlzLCB4ICsgZHgsIHksIHggKyBkeCwgeSArIGR5LCBkYSk7XG4gICAgICAgICAgICBVdGlscy5kYXNoTGluZS5jYWxsKHRoaXMsIHggKyBkeCwgeSArIGR5LCB4LCB5ICsgZHksIGRhKTtcbiAgICAgICAgICAgIFV0aWxzLmRhc2hMaW5lLmNhbGwodGhpcywgeCwgeSArIGR5LCB4LCB5LCBkYSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5zdHJva2UoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkcmF3UGl4ZWw6IGZ1bmN0aW9uKHgsIHksIHIsIGcsIGIsIHdpZHRoKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2VEYXRhID0gdGhpcy5jcmVhdGVJbWFnZURhdGEod2lkdGgsIHdpZHRoKTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbKGkgKyBqICogd2lkdGgpICogNCArIDBdID0gcjtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbKGkgKyBqICogd2lkdGgpICogNCArIDFdID0gZztcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbKGkgKyBqICogd2lkdGgpICogNCArIDJdID0gYjtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbKGkgKyBqICogd2lkdGgpICogNCArIDNdID0gMjU1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgeCAtIHBhcnNlSW50KHdpZHRoIC8gMiksIHkgLSBwYXJzZUludCh3aWR0aCAvIDIpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkcmF3UGl4ZWxMaW5lOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MiwgciwgZywgYiwgd2lkdGgpIHtcbiAgICAgICAgICAgIC8vIERlZmluZSBkaWZmZXJlbmNlcyBhbmQgZXJyb3IgY2hlY2tcbiAgICAgICAgICAgIHZhciBkeCA9IE1hdGguYWJzKHgyIC0geDEpO1xuICAgICAgICAgICAgdmFyIGR5ID0gTWF0aC5hYnMoeTIgLSB5MSk7XG4gICAgICAgICAgICB2YXIgc3ggPSAoeDEgPCB4MikgPyAxIDogLTE7XG4gICAgICAgICAgICB2YXIgc3kgPSAoeTEgPCB5MikgPyAxIDogLTE7XG4gICAgICAgICAgICB2YXIgZXJyID0gZHggLSBkeTtcbiAgICAgICAgICAgIFV0aWxzLmRyYXdQaXhlbC5jYWxsKHRoaXMsIHgxLCB5MSwgciwgZywgYiwgd2lkdGgpO1xuICAgICAgICAgICAgLy8gTWFpbiBsb29wXG4gICAgICAgICAgICB3aGlsZSghKCh4MSA9PT0geDIpICYmICh5MSA9PT0geTIpKSkge1xuICAgICAgICAgICAgICAgIHZhciBlMiA9IGVyciA8PCAxO1xuICAgICAgICAgICAgICAgIGlmKGUyID4gLWR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGVyciAtPSBkeTtcbiAgICAgICAgICAgICAgICAgICAgeDEgKz0gc3g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGUyIDwgZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyICs9IGR4O1xuICAgICAgICAgICAgICAgICAgICB5MSArPSBzeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVXRpbHMuZHJhd1BpeGVsLmNhbGwodGhpcywgeDEsIHkxLCByLCBnLCBiLCB3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzaXplQ2FudmFzOiBmdW5jdGlvbihjdHgsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xuICAgICAgICAgICAgaWYoY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG1wQ2FudmFzID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIHZhciB0bXBDdHggPSB0bXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1pbih3aWR0aCwgY2FudmFzLndpZHRoKTtcbiAgICAgICAgICAgICAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5taW4oaGVpZ2h0LCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0bXBDYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgdG1wQ2FudmFzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdG1wQ3R4LmRyYXdJbWFnZShjYW52YXMsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRtcENhbnZhcywgMCwgMCwgbWluV2lkdGgsIG1pbkhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgbWluV2lkdGgsIG1pbkhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3R4O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldE5ld0lkOiBmdW5jdGlvbihjb3VudGVyTmFtZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZm9ybWF0UmVzdWx0KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hbWUgKyAnXycgKyB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgICAgIGlmKCFjb3VudGVyTmFtZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJOYW1lID0gJyNkZWZhdWx0X2lkX25hbWUjJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCFpZENvdW50ZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldElkcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIWlkQ291bnRlcnMuaGFzT3duUHJvcGVydHkoY291bnRlck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgaWRDb3VudGVyc1tjb3VudGVyTmFtZV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ID0gZm9ybWF0UmVzdWx0KGNvdW50ZXJOYW1lLCBpZENvdW50ZXJzW2NvdW50ZXJOYW1lXSk7XG4gICAgICAgICAgICBpZENvdW50ZXJzW2NvdW50ZXJOYW1lXSsrO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICByZXNldElkczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZENvdW50ZXJzID0ge307XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0SWRDb3VudGVyczogZnVuY3Rpb24oY291bnRlcnMpIHtcbiAgICAgICAgICAgIGlkQ291bnRlcnMgPSBjb3VudGVycztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRJZENvdW50ZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBpZENvdW50ZXJzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldEVsZW1lbnRQb3NpdGlvbjogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGxlZnQgPSAwO1xuICAgICAgICAgICAgdmFyIHRvcCA9IDA7XG4gICAgICAgICAgICB2YXIgZSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB3aGlsZShlLm9mZnNldFBhcmVudCAhPT0gdW5kZWZpbmVkICYmIGUub2Zmc2V0UGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGVmdCArPSBlLm9mZnNldExlZnQgKyAoZS5jbGllbnRMZWZ0ICE9PSBudWxsID8gZS5jbGllbnRMZWZ0IDogMCk7XG4gICAgICAgICAgICAgICAgdG9wICs9IGUub2Zmc2V0VG9wICsgKGUuY2xpZW50VG9wICE9PSBudWxsID8gZS5jbGllbnRUb3AgOiAwKTtcbiAgICAgICAgICAgICAgICBlID0gZS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IGxlZnQsXG4gICAgICAgICAgICAgICAgeTogdG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldE1vdXNlUG9zaXRpb246IGZ1bmN0aW9uKGV2ZW50LCBkb21FbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gVXRpbHMucmVhZEdsb2JhbE1vdXNlKGV2ZW50KTtcbiAgICAgICAgICAgIGlmKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudFBvc2l0aW9uID0gVXRpbHMuZ2V0RWxlbWVudFBvc2l0aW9uKGRvbUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC54IC09IGVsZW1lbnRQb3NpdGlvbi54O1xuICAgICAgICAgICAgICAgIHJlc3VsdC55IC09IGVsZW1lbnRQb3NpdGlvbi55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICBhc3NlcnROb3ROdWxsOiBmdW5jdGlvbih2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICAgICAgaWYoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBudWxsIHZhbHVlICcgKyBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBlbXB0eURvbUVsZW1lbnQ6IGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHdoaWxlKGRvbUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZWFkR2xvYmFsTW91c2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgICAgICBpZihldmVudC5wYWdlWCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50LnBhZ2VZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQueCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICAgICAgICAgIHJlc3VsdC55ID0gZXZlbnQucGFnZVk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQueCA9IGV2ZW50LmNsaWVudFggKyBnbG9iYWwuZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICsgZ2xvYmFsLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIHJlc3VsdC55ID0gZXZlbnQuY2xpZW50WSArIGdsb2JhbC5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArIGdsb2JhbC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICBpbmRleE9mOiBmdW5jdGlvbihhcnJheSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBIU0xWYWx1ZTogZnVuY3Rpb24objEsIG4yLCBodWUpIHtcbiAgICAgICAgICAgIHZhciB2YWw7XG4gICAgICAgICAgICBpZihodWUgPiA2KSB7XG4gICAgICAgICAgICAgICAgaHVlIC09IDY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGh1ZSA8IDApIHtcbiAgICAgICAgICAgICAgICBodWUgKz0gNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGh1ZSA8IDEpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBuMSArIChuMiAtIG4xKSAqIGh1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoaHVlIDwgMykge1xuICAgICAgICAgICAgICAgIHZhbCA9IG4yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihodWUgPCA0KSB7XG4gICAgICAgICAgICAgICAgdmFsID0gbjEgKyAobjIgLSBuMSkgKiAoNCAtIGh1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBuMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgSFNMVG9SR0I6IGZ1bmN0aW9uKGgsIHMsIGwpIHtcbiAgICAgICAgICAgIHZhciByLCBnLCBiO1xuICAgICAgICAgICAgaCA9IGggLSBNYXRoLmZsb29yKGgpO1xuICAgICAgICAgICAgcyA9IHRoaXMuY2xhbXAocywgMCwgMSk7XG4gICAgICAgICAgICBsID0gdGhpcy5jbGFtcChsLCAwLCAxKTtcbiAgICAgICAgICAgIGlmKHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICByID0gbDtcbiAgICAgICAgICAgICAgICBnID0gbDtcbiAgICAgICAgICAgICAgICBiID0gbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBtMSwgbTI7XG4gICAgICAgICAgICAgICAgaWYobCA8PSAwLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgbTIgPSBsICogKDEgKyBzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG0yID0gbCArIHMgLSBsICogcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbTEgPSAyLjAgKiBsIC0gbTI7XG4gICAgICAgICAgICAgICAgciA9IHRoaXMuSFNMVmFsdWUobTEsIG0yLCBoICogNi4wICsgMi4wKTtcbiAgICAgICAgICAgICAgICBnID0gdGhpcy5IU0xWYWx1ZShtMSwgbTIsIGggKiA2LjApO1xuICAgICAgICAgICAgICAgIGIgPSB0aGlzLkhTTFZhbHVlKG0xLCBtMiwgaCAqIDYuMCAtIDIuMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHI6IHIsXG4gICAgICAgICAgICAgICAgZzogZyxcbiAgICAgICAgICAgICAgICBiOiBiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIFJHQlRvSFNWOiBmdW5jdGlvbiBSR0JUb0hTVihjb2xvclJHQikge1xuICAgICAgICAgICAgdmFyIHIgPSBjb2xvclJHQi5yIC8gMjU1O1xuICAgICAgICAgICAgdmFyIGcgPSBjb2xvclJHQi5nIC8gMjU1O1xuICAgICAgICAgICAgdmFyIGIgPSBjb2xvclJHQi5iIC8gMjU1O1xuICAgICAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgICAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICAgICAgdmFyIGgsIHMsIHYgPSBtYXg7XG5cbiAgICAgICAgICAgIHZhciBkID0gbWF4IC0gbWluO1xuICAgICAgICAgICAgcyA9IG1heCA9PT0gMCA/IDAgOiBkIC8gbWF4O1xuXG4gICAgICAgICAgICBpZihtYXggPT09IG1pbikge1xuICAgICAgICAgICAgICAgIGggPSAwOyAvLyBhY2hyb21hdGljXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2gobWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGc6XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gKGIgLSByKSAvIGQgKyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgYjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSAociAtIGcpIC8gZCArIDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaCAvPSA2O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGg6IGgsXG4gICAgICAgICAgICAgICAgczogcyxcbiAgICAgICAgICAgICAgICB2OiB2XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIEhTVlRvUkdCOiBmdW5jdGlvbiBIU1ZUb1JHQihoLCBzLCB2KSB7XG4gICAgICAgICAgICB2YXIgciwgZywgYjtcblxuICAgICAgICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKGggKiA2KTtcbiAgICAgICAgICAgIHZhciBmID0gaCAqIDYgLSBpO1xuICAgICAgICAgICAgdmFyIHAgPSB2ICogKDEgLSBzKTtcbiAgICAgICAgICAgIHZhciBxID0gdiAqICgxIC0gZiAqIHMpO1xuICAgICAgICAgICAgdmFyIHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyk7XG5cbiAgICAgICAgICAgIHN3aXRjaChpICUgNikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgciA9IHY7XG4gICAgICAgICAgICAgICAgICAgIGcgPSB0O1xuICAgICAgICAgICAgICAgICAgICBiID0gcDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICByID0gcTtcbiAgICAgICAgICAgICAgICAgICAgZyA9IHY7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBwO1xuICAgICAgICAgICAgICAgICAgICBnID0gdjtcbiAgICAgICAgICAgICAgICAgICAgYiA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgciA9IHA7XG4gICAgICAgICAgICAgICAgICAgIGcgPSBxO1xuICAgICAgICAgICAgICAgICAgICBiID0gdjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICByID0gdDtcbiAgICAgICAgICAgICAgICAgICAgZyA9IHA7XG4gICAgICAgICAgICAgICAgICAgIGIgPSB2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIHIgPSB2O1xuICAgICAgICAgICAgICAgICAgICBnID0gcDtcbiAgICAgICAgICAgICAgICAgICAgYiA9IHE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHI6IHBhcnNlSW50KHIgKiAyNTUpLFxuICAgICAgICAgICAgICAgIGc6IHBhcnNlSW50KGcgKiAyNTUpLFxuICAgICAgICAgICAgICAgIGI6IHBhcnNlSW50KGIgKiAyNTUpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIEhTVlRvSFNMOiBmdW5jdGlvbihoLCBzLCB2KSB7XG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgdGhlIGxpZ2h0bmVzcyBpbiB0aGUgcmFuZ2UgWzAsMTAwXVxuICAgICAgICAgICAgdmFyIGwgPSAoMiAtIHMgLyAxMDApICogdiAvIDI7XG5cbiAgICAgICAgICAgIHZhciBoc2wgPSB7XG4gICAgICAgICAgICAgICAgJ2gnOiBoLFxuICAgICAgICAgICAgICAgICdzJzogcyAqIHYgLyAobCA8IDUwID8gbCAqIDIgOiAyMDAgLSBsICogMiksXG4gICAgICAgICAgICAgICAgJ2wnOiBsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBjb3JyZWN0IGEgZGl2aXNpb24tYnktemVybyBlcnJvclxuICAgICAgICAgICAgaWYoaXNOYU4oaHNsLnMpKSB7XG4gICAgICAgICAgICAgICAgaHNsLnMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhzbDtcbiAgICAgICAgfSxcblxuICAgICAgICBjbGFtcDogZnVuY3Rpb24odiwgbWluLCBtYXgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2LCBtYXgpLCBtaW4pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG59KSAodGhpcyk7XG5cblxufSkoKSIsImZ1bmN0aW9uIENoYXJhY3RlcihzcHJpdGVzLCBzaXplLCBwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5pbml0KHNwcml0ZXMsIHNpemUsIHByb3BlcnRpZXMpOyAgICBcbn1cblxuQ2hhcmFjdGVyLnByb3RvdHlwZSA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHNwcml0ZXMsIHNpemUsIHByb3BlcnRpZXMpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnaWRsZSc7XG4gICAgICAgIHRoaXMucGhhc2UgPSAwO1xuICAgICAgICB0aGlzLmR4ID0gMDtcbiAgICAgICAgdGhpcy5keSA9IDA7XG5cbiAgICAgICAgdGhpcy5zcHJpdGVzID0gc3ByaXRlcztcbiAgICAgICAgdGhpcy53aWR0aCA9IHNpemUud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG4gICAgICAgIGZvcih2YXIgcHJvcGVydHkgaW4gcHJvcGVydGllcykge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllc1twcm9wZXJ0eV0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNldFByb3BlcnR5OiBmdW5jdGlvbiBzZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZih0aGlzW25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ2FjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBoYXNlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXI7XG4iXX0=
;