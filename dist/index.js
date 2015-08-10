;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
module.exports={
    "phases": {
        "firstDialogue": {
            "gameplayType": "Dialogue",
            "basedOn": "intro",
            "noInherit": {"gameplayType": true},
            "defaultProperties": {
                "me": {"x": 202, "y": 155, "color": "cyan"},
                "her": {"x": 105, "y": 145, "color": "orange"}
            },
            "lines": [
                {
                    "who": "me",
                    "text": "Hey ! What's up ?"
                },
                {
                    "who": "her",
                    "text": "Hi..."
                },
                {
                    "who": "me",
                    "text": "What's wrong ? you seem so down."
                },
                {
                    "who": "her",
                    "text": "It's ok, I'm just in the mood for staring at the sea for a while."
                },
                {
                    "who": "me",
                    "text": "What can I do to cheer you up ?"
                },
                {
                    "who": "her",
                    "text": "All I wish for right now is a little piece of chocolate."
                },
                {
                    "who": "me",
                    "text": "Really ? Ah ah, just you wait !"
                }
            ]
        },

        "secondDialogue": {
            "basedOn": "firstDialogue",
            "noInherit": {"lines": true},
            "restart": true,
            "lines": [
                {
                    "who": "me",
                    "text": "Hey, I'm almost done !"
                },
                {
                    "who": "her",
                    "text": "great"
                },
                {
                    "who": "me",
                    "text": "Well I'd better get going then"
                }
            ]
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
            "minX": 200,
            "maxX": 2350,
            "minY": 150,
            "maxY": 280,
            "walkSurface": [
                {
                    "x": 200,
                    "y": 150,
                    "zoom": 1
                },
                {
                    "x": 200,
                    "y": 280,
                    "zoom": 1.5
                },
                {
                    "x": 2350,
                    "y": 280,
                    "zoom": 1.5
                },
                {
                    "x": 2350,
                    "y": 150,
                    "zoom": 1
                }
            ],
            "characters": {
                "her": {
                    "sprites": "herDay",
                    "width": 90,
                    "height": 150,
                    "x": 125,
                    "y": 155
                },
                "me": {
                    "sprites": "meDay",
                    "width": 90,
                    "height": 150,
                    "x": 203,
                    "y": 185
                }
            },
            "sinks": {
                "talkToHer": {
                    "x": 182,
                    "y": 150,
                    "width": 20,
                    "height": 130
                }
            }
        },

        "goingForChoco": {
            "basedOn": "intro",
            "sinks": {
                "getAtJoes": {
                    "x": 400,
                    "y": 215,
                    "width": 50,
                    "height": 50
                }
            }
        },

        "atJoesGreeting": {
            "gameplayType": "Dialogue",
            "basedOn": "atJoes",
            "defaultProperties": {
                "me": {"x": 202, "y": 155, "color": "cyan"},
                "joe": {"color": "orange"}
            },
            "lines": [
                {
                    "who": "joe",
                    "text": "Hello son"
                }
            ]
        },

        "atJoes": {
            "gameplayType": "Wander",
            "renderHeight": 450,
            "mapWidth": 2400,
            "minX": 200,
            "maxX": 2350,
            "minY": 150,
            "maxY": 280,
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
                    "y": 185
                },
                "joe": {
                    "sprites": "meDay",
                    "width": 90,
                    "height": 150,
                    "x": 203,
                    "y": 85                    
                }
            },
            "walkSurface": [
                {
                    "x": 200,
                    "y": 150,
                    "zoom": 1
                },
                {
                    "x": 200,
                    "y": 280,
                    "zoom": 1.5
                },
                {
                    "x": 2350,
                    "y": 280,
                    "zoom": 1.5
                },
                {
                    "x": 2350,
                    "y": 150,
                    "zoom": 1
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

        "title": {
            "gameplayType": "PressAnyKey",
            "rendering": {
                "type": "title",
                "text": "She likes chocolate"
            },
            "timeout": 2000
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
        "title": {"keyPressed": "firstDialogue"},
        "intro": {"talkToHer": "firstDialogue"},
        "firstDialogue": {"end": "goingForChoco"},
        "goingForChoco": {"talkToHer": "secondDialogue", "getAtJoes": "atJoesGreeting"},
        "secondDialogue": {"end": "goingForChoco"},
        "atJoesGreeting": {"end": "atJoes"},
        "atJoes": {"exit": "outFromJoes"},
        "outFromJoes": {},
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
    "entry": "title"
}

},{}],2:[function(require,module,exports){
﻿var Utils = require('utils');
var GameEngine = require('./game');
var gameDefinition = require('./definition.json');

// var override = require('./override-for-debug.json'); gameDefinition = Utils.merge(gameDefinition, override);

var theGame = new GameEngine(
    document.getElementById('game-canvas'),
    gameDefinition    
);


theGame.start();

},{"./definition.json":1,"./game":3,"utils":4}],4:[function(require,module,exports){
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

        deepMerge: function (object1, object2) {
            for (var propertyName in object2) {
                try {
                    if ( object2[propertyName].constructor === Object ) {
                        object1[propertyName] = Utils.deepMerge(object1[propertyName], object2[propertyName]);
                    }
                    else {
                        object1[propertyName] = object2[propertyName];
                    }
                }
                catch(error) {
                    object1[propertyName] = object2[propertyName];
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
},{}],5:[function(require,module,exports){
module.exports = {
    37: false,
    38: false,
    39: false,
    40: false
};

},{}],6:[function(require,module,exports){
function Dialogue(host) {
    this.currentLine = 0;
}

Dialogue.prototype = {
    eventHandlers: {
        keyup: function(event) {
            if(event.keyCode === 32) {
                this.goToNextLine();
            }
        }
    },

    goToNextLine: function goToNextLine() {
        if(this.currentLine === null) {
            this.goToLine(0);
        }
        else {
            if(this.currentLine + 1 < this.lines.length) {
                this.goToLine(this.currentLine + 1);
            }
            else {
                this.host.gotoSink('end');
            }
        }
    },

    goToLine: function goToLine(lineNumber) {
        this.currentLine = lineNumber;
    },

    init: function init() {
        this.saveCanvas = document.createElement('canvas');
        this.saveCanvas.width = this.host.gameCanvas.width;
        this.saveCanvas.height = this.host.gameCanvas.height;
        var ctx = this.saveCanvas.getContext('2d');
        ctx.drawImage(
            this.host.gameCanvas,
            0, 0, this.host.gameCanvas.width, this.host.gameCanvas.height,
            0, 0, this.host.gameCanvas.width, this.host.gameCanvas.height
            );
        if(this.restart) {
            this.currentLine = 0;
        }

        var involvedCharacters = this.lines.reduce(function(charactersSoFar, line) {
                charactersSoFar[line.who] = true;
                return charactersSoFar;
            }.bind(this),
            {}
        );
        Object.keys(involvedCharacters).forEach(function(characterName) {
            this.host.characters[characterName].action = 'talking';
        }.bind(this));
    },

    update: function update() {

    },

    draw: function draw() {
    }
};


module.exports = Dialogue;

},{}],7:[function(require,module,exports){
function Wander(host) {
}

Wander.prototype = {
    init: function() {
    },

    update: function update(time) {
        this.updateMovement(time);
        return true;
    },

    isInSink: function isInSink(character, sink) {
        return (
            (character.x + character.width) >= sink.x &&
            character.x <= (sink.x + sink.width) &&
            (character.y + character.height) >= sink.y &&
            character.y <= (sink.y + sink.height)
        );
    },

    updateMovement: function updateMovement(time) {
        var unit = 2;
        var me = this.host.characters.me;
        me.dx = 0;
        me.dy = 0;
        if(this.host.keys.shift) {
            unit *= 2;
        }
        if(this.host.keys[37] || this.host.keys['Q'.charCodeAt()] || this.host.keys['A'.charCodeAt()]) {
            me.dx -= unit;}
        if(this.host.keys[39] || this.host.keys['D'.charCodeAt()]) {
            me.dx += unit;}
        if(this.host.keys[38] || this.host.keys['Z'.charCodeAt()] || this.host.keys['W'.charCodeAt()]) {
            me.dy -= unit / 2;}
        if(this.host.keys[40] || this.host.keys['S'.charCodeAt()]) {
            me.dy += unit / 2;}

        for(var sinkName in this.sinks) {
            var sink = this.sinks[sinkName];
            var nextCoords = {x: me.x + me.dx, y: me.y + me.dy, width: me.width, height: me.height};
            if(
                !this.isInSink(me, sink) &&
                this.isInSink(nextCoords, sink)
            ) {
                me.action = 'idle';
                this.host.gotoSink(sinkName);
                return;
            }
        }

        Object.keys(this.host.characters)
            .map(function(characterName) {
                return this.host.characters[characterName];
            }.bind(this))
            .forEach(function(character) {
                if(character.behaviour) {
                    character.behaviour.update();
                }

                if(character.dx > 2)
                    { character.setProperty('action', 'runRight');}
                else if(character.dx > 0)
                    { character.setProperty('action', 'walkRight');}
                else if(character.dx < -2)
                    { character.setProperty('action', 'runLeft');}
                else if(character.dx < 0)
                    { character.setProperty('action', 'walkLeft');}
                else if(character.dy > 2)
                    { character.setProperty('action', 'runDown');}
                else if(character.dy > 0)
                    { character.setProperty('action', 'walkDown');}
                else if(character.dy < -2)
                    { character.setProperty('action', 'runUp');}
                else if(character.dy < 0)
                    { character.setProperty('action', 'walkUp');}
                else
                    { character.setProperty('action', 'idle'); }
                if(character.x + character.dx > this.minX && character.x + character.dx < this.maxX) {
                    character.x += character.dx;
                }
                if(character.y + character.dy > this.minY && character.y + character.dy < this.maxY) {
                    character.y += character.dy;
                }
            }.bind(this));
    }
};


module.exports = Wander;

},{}],8:[function(require,module,exports){
function PressAnyKey() {
}

PressAnyKey.prototype = {
    init: function init() {
        this.armed = false;
        var timeout = this.host.phaseInstances[this.host.phaseName].timeout;
        if(timeout) {
            this.timer = setTimeout(function() {
                this.host.gotoSink('keyPressed');
            }.bind(this), timeout);
        }
        this._onClick = function() {
            this._cleanUpAndGo();
        }.bind(this);
        document.body.addEventListener('click', this._onClick);
    },

    _cleanUpAndGo: function _cleanUp() {
        if(this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        document.body.removeEventListener('click', this._onClick);
        this.host.gotoSink('keyPressed');
    },

    update: function(time) {
        if(!this.armed) {
            if(!Object.keys(this.host.keys)
                .map(function(key) {
                    return this.host.keys[key];
                }.bind(this))
                .some(function(key) {
                    return key;
                })) {
                this.armed = true;
            }
            return;
        }
        if(Object.keys(this.host.keys)
            .map(function(key) {
                return this.host.keys[key];
            }.bind(this))
            .some(function(key) {
                return key;
            })) {
            this._cleanUpAndGo();
        }
        return true;
    }
};


module.exports = PressAnyKey;

},{}],9:[function(require,module,exports){
function DefaultGameplay() {
    
}

DefaultGameplay.prototype = {
    update: function update() {
    }
};


module.exports = DefaultGameplay;

},{}],10:[function(require,module,exports){
var lastFrameUpdate = null;


function drawPlanes(ctx, mapOffset, images, mapWidth, renderCoords, planes) {
    planes.forEach(function(plane) {
        var image = images[plane.image];
        if(!plane.z) {
            ctx.drawImage(
                image,
                0, 0,
                image.width, image.height,
                renderCoords.x, renderCoords.y,
                renderCoords.width, image.height
                );
        }
        else {
            ctx.drawImage(
                image,
                Math.min(mapOffset.x, mapWidth - window.innerWidth), mapOffset.y,
                Math.min(window.innerWidth, image.width), image.height,
                renderCoords.x, renderCoords.y,
                Math.min(renderCoords.width, image.width), renderCoords.height
                );
        }
    });
}

function drawCharacters(host, currentMapOffset, renderCoords) {
    var characterList = Object.keys(host.characters);
    characterList.sort(function(a, b) {
        return host.characters[a].y - host.characters[b].y;
    }.bind(this));
    for(var i = 0 ; i < characterList.length ; i++) {
        var character = host.characters[characterList[i]];
        if(isVisible(character, currentMapOffset)) {
            drawCharacter(
                host.ctx,
                character,
                currentMapOffset,
                host.images,
                renderCoords,
                host.gameStructure.sprites[character.sprites]
                );
        }
    }
}

function drawCharacter(ctx, character, mapOffset, images, renderCoords, sprites) {
    var image = images[sprites[character.action]];
    var xOffsetInSource = character.phase * character.width;

    var scale = ((character.y - 150) / 4 + 150) / 150;
    ctx.drawImage(
        image,
        xOffsetInSource, 0,
        character.width,
        character.height,
        character.x - mapOffset.x + renderCoords.x - (character.width * scale - character.width) / 2,
        character.y - mapOffset.y + renderCoords.y,
        character.width * scale, character.height * scale
        );
}

function drawDialogue(ctx, currentLine, defaultProperties, renderCoords, character, mapOffset) {
    if(currentLine === null) {
        return;
    }

    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.font = 'normal 14pt helvetica';
    var metrics = ctx.measureText(currentLine.text);
    var position = defaultProperties[currentLine.who];
    if(!position.x) {
        position.x = character.x - mapOffset.x - metrics.width / 2 + character.width / 2;
    }
    if(!position.y) {
        position.y = character.y - mapOffset.y - 40;
    }

    ctx.fillStyle = 'white';
    if(defaultProperties[currentLine.who].color) {
        ctx.fillStyle = defaultProperties[currentLine.who].color;
    }
    ctx.strokeStyle = 'black';
    ctx.strokeRect(
        position.x + renderCoords.x,
        position.y + renderCoords.y,
        metrics.width + 10, 30
        );
    ctx.globalAlpha = 0.85;
    ctx.fillRect(
        position.x + renderCoords.x,
        position.y + renderCoords.y,
        metrics.width + 10,
        30
        );
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'black';
    ctx.fillText(
        currentLine.text,
        position.x + 5 + renderCoords.x,
        position.y + 5 + renderCoords.y
        );
}

function drawDebug(ctx, phase, renderCoords, characters, mapOffset) {
    var sink;
    var character;
    var x;
    var y;
    var walkSurface = phase.walkSurface;

    for(var sinkName in phase.sinks) {
        sink = phase.sinks[sinkName];
        x = sink.x + renderCoords.x - mapOffset.x;
        y = sink.y + renderCoords.y - mapOffset.y;
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.fillRect(x, y, sink.width, sink.height);
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillText(sinkName, x + 1, y + 1);
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillText(sinkName, x - 1, y - 1);
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillText(sinkName, x, y);
    }

    for(var characterName in characters) {
        character = characters[characterName];
        ctx.strokeStyle = 'rgb(0, 255, 0)';
        ctx.strokeRect(
            renderCoords.x + character.x - mapOffset.x,
            renderCoords.y + character.y - mapOffset.y,
            character.width, character.height
            );
        ctx.fillStyle = 'black';
        ctx.fillText(
            '[' + character.x + ', ' + character.y + ']',
            character.x + renderCoords.x - mapOffset.x,
            character.y + renderCoords.y - mapOffset.y
            );
    }
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 0, 0.3)';
    ctx.moveTo(
        renderCoords.x + walkSurface[0].x - mapOffset.x,
        renderCoords.y + walkSurface[0].y - mapOffset.y
        );

    walkSurface.slice(1).forEach(function(point) {
        ctx.lineTo(
            renderCoords.x + point.x - mapOffset.x,
            renderCoords.y + point.y - mapOffset.y
            );
    });
    ctx.fill();
}

function getMapOffset(x, y, mapWidth) {
    var result = {x:0, y:0};
    if(x > (window.innerWidth / 2)) {
        result.x = Math.min(x - window.innerWidth / 2, mapWidth - window.innerWidth);
    }
    
    return result;
}

function isVisible(character, currentMapOffset) {
    if(
        (character.x + character.width - currentMapOffset.x) > 0 &&
        (character.x - currentMapOffset.x) < window.innerWidth
    ) {
        return true;
    }
    return false;
}

function updateFrames(time, images, characters, sprites) {
    if(!lastFrameUpdate) {
        lastFrameUpdate = time;
    }
    if((time - lastFrameUpdate) < (1000 / 12)) {
        return;
    }
    Object.keys(characters)
        .map(function(characterName) {
            return characters[characterName];
        }.bind(this))
        .forEach(function(character) {
            character.phase = (character.phase + 1) % (images[sprites[character.sprites][character.action]].width / character.width);
        }.bind(this));
    lastFrameUpdate = time;
}

function render(time, host) {
    updateFrames(time, host.images, host.characters, host.gameStructure.sprites);
    if((time - host.lastDraw) < 40) {
        return;
    }
    var currentPhase = host.getCurrentPhase();
    var renderCoords = {
        width: currentPhase.renderWidth || window.innerWidth,
        height: currentPhase.renderHeight || window.innerHeight
    };

    renderCoords.x = (window.innerWidth - renderCoords.width) / 2;
    renderCoords.y = (window.innerHeight - renderCoords.height) / 2;

    var currentMapOffset = getMapOffset(
        host.characters.me.x,
        host.characters.me.y,
        currentPhase.mapWidth
        );
    var planes = currentPhase.rendering.planes.sort(function(a, b) {
        return a.z - b.z;
    });

    var backgroundPlanes = planes.filter(function(plane) {return plane.z <= 1;});
    var foregroundPlanes = planes.filter(function(plane) {return plane.z > 1;});
    
    host.ctx.clearRect(0, 0, host.ctx.canvas.width, host.ctx.canvas.height);
    
    drawPlanes(
        host.ctx,
        currentMapOffset,
        host.images,
        currentPhase.mapWidth,
        renderCoords,
        backgroundPlanes
        );

    drawCharacters(
        host,
        currentMapOffset,
        renderCoords
        );

    drawPlanes(
        host.ctx,
        currentMapOffset,
        host.images,
        currentPhase.mapWidth,
        renderCoords,
        foregroundPlanes
        );

    if('currentLine' in currentPhase && currentPhase.currentLine !== null) {
        drawDialogue(
            host.ctx,
            currentPhase.lines[currentPhase.currentLine],
            currentPhase.defaultProperties,
            renderCoords,
            host.characters[currentPhase.lines[currentPhase.currentLine].who],
            currentMapOffset
            );
    }

    if(host.debug) {
        drawDebug(host.ctx, currentPhase, renderCoords, host.characters, currentMapOffset);
    }
}


module.exports = render;

},{}],11:[function(require,module,exports){
function render(time, host) {
    var currentPhase = host.phaseInstances[host.phaseName];
    var ctx = host.ctx;
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var renderingData = host.gameStructure.phases[host.phaseName].rendering;

    ctx.fillStyle = renderingData.backgroundColor || 'black';
    ctx.fillRect(0, 0, width, height);
    if(renderingData.image) {
        var image = host.images[renderingData.image];
        ctx.drawImage(image, 0, 0, image.width, image.height);
    }

    if(renderingData.text) {
        ctx.font = 'normal 44pt helvetica' || renderingData.font;
        var metrics = ctx.measureText(renderingData.text);
        var x = (ctx.canvas.width - metrics.width) / 2;
        var y = (ctx.canvas.height / 2);


        ctx.fillStyle = renderingData.color || 'white';
        ctx.fillText(renderingData.text, x, y);
    }
}


module.exports = render;

},{}],3:[function(require,module,exports){
var RSVP = require('rsvp');

var Utils = require('utils');
var keys = require('./keys');
var Character = require('./character');


var gameplays = {
    Dialogue: require('./gameplay/dialogue'),
    Wander: require('./gameplay/wander'),
    PressAnyKey: require('./gameplay/press-any-key'),
    default: require('./gameplay/default')
};

var renderers = {
    PointNClick: require('./renderers/point-n-click'),
    title: require('./renderers/title'),
    default: function() {}
};


function Game(canvas, gameStructure) {
    this.phaseName = null;
    this.characters = {};
    this.gameStructure = gameStructure;
    this.phaseInstances = {};
    this.registeredEventHandlers = {};
    this.lastUpdate = null;
    this.renderer = null;
    this.images = {};
    this.debug = this.gameStructure.debug;
    this.keys = keys;
    this.gameCanvas = canvas;
    this.gameCanvas.width = window.innerWidth;
    this.gameCanvas.height = window.innerHeight;
    this.ctx = this.gameCanvas.getContext('2d');
    document.addEventListener('keydown', function(event) {
            if(event.keyCode === 'I'.charCodeAt()) {
                this.debug = !this.debug;
            }
            this.keys[event.keyCode] = true;
            if(event.shiftKey) {
                this.keys.shift = true;
            }
            if(this.registeredEventHandlers.keydown) {
                this.registeredEventHandlers.keydown(event);
            }
        }.bind(this), false);

    document.addEventListener('keyup', function(event) {
            event.preventDefault();
            this.keys[event.keyCode] = false;
            if(!event.shiftKey) {
                this.keys.shift = false;
            }
            if(this.registeredEventHandlers.keyup) {
                this.registeredEventHandlers.keyup(event);
            }
        }.bind(this), false);
}

Game.prototype = {
    start: function start() {
        return this.gotoPhase(this.gameStructure.entry)
            .then(function() {
                requestAnimationFrame(this.loop.bind(this));
            }.bind(this))
            .catch(function(error) {
                console.error(error);
            });
    },

    getCurrentPhase: function getCurrentPhase() {
        return this.phaseInstances[this.phaseName];
    },

    gotoSink: function gotoSink(sinkName) {
        return this.gotoPhase(this.gameStructure.plan[this.phaseName][sinkName]);
    },

    unregisterEventHandlers: function unregisterEventHandlers(phase) {
        var eventHandlers = phase.eventHandlers;

        if(!eventHandlers) {
            return;
        }
        for(var eventName in eventHandlers) {
            delete this.registeredEventHandlers[eventName];
        }
    },

    registerEventHandlers: function registerEventHandler(phase) {
        var eventHandlers = phase.eventHandlers;

        if(!eventHandlers) {
            return;
        }
        for(var eventName in eventHandlers) {
            this.registeredEventHandlers[eventName] = eventHandlers[eventName].bind(phase);
        }
    },

    loadImages: function loadImages(images) {
        return new RSVP.Promise(function(resolve, reject) {
            if(images) {
                Utils.loadImages(images, function(imgs) {
                    resolve(imgs);
                });
            }
        });
    },

    getHierarchy: function getHierarchy(phaseName, children) {
        if(!children) {
            children = [];
        }
        var currentHierarchy = [phaseName].concat(children);
        if(this.gameStructure.phases[phaseName].basedOn) {
            return this.getHierarchy(this.gameStructure.phases[phaseName].basedOn, currentHierarchy);
        }
        else {
            return currentHierarchy;
        }
    },

    getFullDescription: function getFullDescription(phaseName) {
        var hierarchy = this.getHierarchy(phaseName);
        return hierarchy.reduce(function(phaseSoFar, currentPhaseName) {
            var currentDescription = this.gameStructure.phases[currentPhaseName];
            for(var propertyName in currentDescription) {
                if(
                    phaseSoFar[propertyName] &&
                    !(currentDescription.noInherit && currentDescription.noInherit[propertyName]) &&
                    typeof(currentDescription[propertyName]) !== 'string'
                ) {
                    phaseSoFar[propertyName] = Utils.deepMerge(phaseSoFar[propertyName], currentDescription[propertyName]);
                }
                else {
                    phaseSoFar[propertyName] = currentDescription[propertyName];
                }
            }
            return phaseSoFar;
        }.bind(this), {});
    },

    filterImagesToLoad: function filterImagesToLoad(phase) {
        var imagesToLoad = {};
        var imageName;
        var characterName;

        if(phase.rendering.planes) {
            phase.rendering.planes.forEach(function(plane){
                if(!this.images[plane.image]) {
                    imagesToLoad[plane.image] = this.gameStructure.paths[plane.image];
                }
            }.bind(this));
        }

        if(phase.rendering.image) {
            if(!this.images[phase.rendering.image]) {
                imagesToLoad[phase.rendering.image] = this.gameStructure.paths[phase.rendering.image];
            }
        }

        for(characterName in phase.characters) {
            for(var stateName in this.gameStructure.sprites[phase.characters[characterName].sprites]) {
                imageName = this.gameStructure.sprites[phase.characters[characterName].sprites][stateName];
                if(!this.images[imageName]) {
                    imagesToLoad[imageName] =  this.gameStructure.paths[imageName];
                }
            }
        }

        return imagesToLoad;
    },

    mergeImages: function mergeImages(images) {
        var imageName;

        for(imageName in images) {
            this.images[imageName] = images[imageName];
        }
    },

    updateWithDefaults: function updateWithDefaults(phaseDescription) {
        if(!phaseDescription.gameplayType) {
            phaseDescription.gameplayType = 'default';
        }
        if(!phaseDescription.rendering) {
            phaseDescription.rendering = {
                type: "default"
            };
        }
    },

    gotoPhase: function gotoPhase(phaseName) {
        var phaseDescription;
        var propertyName;
        this.changingPhase = true;

        return RSVP.Promise.resolve()
            .then(function() {
                if(this.phaseInstances[this.phaseName]) {
                    this.unregisterEventHandlers(this.phaseInstances[this.phaseName]);
                }
                this.phaseName = phaseName;
                if(!this.gameStructure.phases[this.phaseName]) {
                    throw(new Error('No phase with name ' + phaseName));
                }
                phaseDescription = this.getFullDescription(this.phaseName);
                this.updateWithDefaults(phaseDescription);
                var imagesToLoad = this.filterImagesToLoad(phaseDescription);
                if(Object.keys(imagesToLoad).length) {
                    return this.loadImages(imagesToLoad);
                }
            }.bind(this))
            .then(function(images) {
                if(images) {
                    this.mergeImages(images);
                }         
                if(!this.phaseInstances[phaseName]) {
                    this.phaseInstances[phaseName] = new gameplays[phaseDescription.gameplayType](this);
                    this.phaseInstances[phaseName].host = this;
                    this.phaseInstances[phaseName].name = phaseName;
                    for(propertyName in phaseDescription) {
                        if(['images', 'gameplayType'].indexOf(propertyName) === -1) {
                            this.phaseInstances[phaseName][propertyName] = phaseDescription[propertyName];
                        }
                    }
                }
                if(phaseDescription.characters) {
                    var characterDescription;
                    var characterName;
                    for(characterName in phaseDescription.characters) {
                        if(!this.characters[characterName]) {
                            characterDescription = phaseDescription.characters[characterName];
                            this.characters[characterName] = new Character(characterDescription);
                        }
                        else {
                            for(propertyName in phaseDescription.characters[characterName]) {
                                this.characters[characterName][propertyName] = phaseDescription.characters[characterName][propertyName];
                            }
                        }
                    }
                    for(characterName in this.characters) {
                        if(!phaseDescription.characters[characterName]) {
                            delete this.characters[characterName];
                        }
                    }
                }

                if(this.phaseInstances[phaseName].init) {
                    this.phaseInstances[phaseName].init(phaseName);
                }
                this.registerEventHandlers(this.phaseInstances[this.phaseName]);
                this.renderer = renderers[this.phaseInstances[this.phaseName].rendering.type];
                this.changingPhase = false;
            }.bind(this))
            .catch(function(error) {
                console.error(error);
            });
    },

    renderDebug: function renderDebug() {
        this.ctx.fillStyle = 'white';
        this.ctx.font = 'normal 14pt helvetica';
        this.ctx.fillText(this.phaseName, 10, 24);
    },

    loop: function loop(time) {
        if(!this.changingPhase && this.renderer) {
            if(!this.lastUpdate) {
                this.lastUpdate = time;
            }
            if(this.phaseInstances[this.phaseName].update(time)) {
                this.lastUpdate = time;
            }

            if(!this.lastDraw) {
                this.lastDraw = time;
            }
            if(this.renderer(time, this)) {
                this.lastDraw = time;
            }
            if(this.debug) {
                this.renderDebug();
            }
        }

        requestAnimationFrame(this.loop.bind(this));
    }
};


module.exports = Game;

},{"./keys":5,"./character":12,"./gameplay/dialogue":6,"./gameplay/wander":7,"./gameplay/press-any-key":8,"./gameplay/default":9,"./renderers/point-n-click":10,"./renderers/title":11,"rsvp":13,"utils":4}],12:[function(require,module,exports){
var behaviours = {
    'walker':  require('./walker')
};


function Character(description) {
    this.init(description);    
}

Character.prototype = {
    init: function init(description) {
        this.action = 'idle';
        this.phase = 0;
        this.dx = 0;
        this.dy = 0;

        for(var property in description) {
            this.setProperty(property, description[property]);
        }
        if(this.behaviour) {
            this.behaviour = new behaviours[this.behaviour.type](this.behaviour, this);
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

},{"./walker":14}],15:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],13:[function(require,module,exports){
(function(process){/*!
 * @overview RSVP - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/tildeio/rsvp.js/master/LICENSE
 * @version   3.0.18
 */

(function() {
    "use strict";
    function lib$rsvp$utils$$objectOrFunction(x) {
      return typeof x === 'function' || (typeof x === 'object' && x !== null);
    }

    function lib$rsvp$utils$$isFunction(x) {
      return typeof x === 'function';
    }

    function lib$rsvp$utils$$isMaybeThenable(x) {
      return typeof x === 'object' && x !== null;
    }

    var lib$rsvp$utils$$_isArray;
    if (!Array.isArray) {
      lib$rsvp$utils$$_isArray = function (x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    } else {
      lib$rsvp$utils$$_isArray = Array.isArray;
    }

    var lib$rsvp$utils$$isArray = lib$rsvp$utils$$_isArray;

    var lib$rsvp$utils$$now = Date.now || function() { return new Date().getTime(); };

    function lib$rsvp$utils$$F() { }

    var lib$rsvp$utils$$o_create = (Object.create || function (o) {
      if (arguments.length > 1) {
        throw new Error('Second argument not supported');
      }
      if (typeof o !== 'object') {
        throw new TypeError('Argument must be an object');
      }
      lib$rsvp$utils$$F.prototype = o;
      return new lib$rsvp$utils$$F();
    });
    function lib$rsvp$events$$indexOf(callbacks, callback) {
      for (var i=0, l=callbacks.length; i<l; i++) {
        if (callbacks[i] === callback) { return i; }
      }

      return -1;
    }

    function lib$rsvp$events$$callbacksFor(object) {
      var callbacks = object._promiseCallbacks;

      if (!callbacks) {
        callbacks = object._promiseCallbacks = {};
      }

      return callbacks;
    }

    var lib$rsvp$events$$default = {

      /**
        `RSVP.EventTarget.mixin` extends an object with EventTarget methods. For
        Example:

        ```javascript
        var object = {};

        RSVP.EventTarget.mixin(object);

        object.on('finished', function(event) {
          // handle event
        });

        object.trigger('finished', { detail: value });
        ```

        `EventTarget.mixin` also works with prototypes:

        ```javascript
        var Person = function() {};
        RSVP.EventTarget.mixin(Person.prototype);

        var yehuda = new Person();
        var tom = new Person();

        yehuda.on('poke', function(event) {
          console.log('Yehuda says OW');
        });

        tom.on('poke', function(event) {
          console.log('Tom says OW');
        });

        yehuda.trigger('poke');
        tom.trigger('poke');
        ```

        @method mixin
        @for RSVP.EventTarget
        @private
        @param {Object} object object to extend with EventTarget methods
      */
      'mixin': function(object) {
        object['on']      = this['on'];
        object['off']     = this['off'];
        object['trigger'] = this['trigger'];
        object._promiseCallbacks = undefined;
        return object;
      },

      /**
        Registers a callback to be executed when `eventName` is triggered

        ```javascript
        object.on('event', function(eventInfo){
          // handle the event
        });

        object.trigger('event');
        ```

        @method on
        @for RSVP.EventTarget
        @private
        @param {String} eventName name of the event to listen for
        @param {Function} callback function to be called when the event is triggered.
      */
      'on': function(eventName, callback) {
        var allCallbacks = lib$rsvp$events$$callbacksFor(this), callbacks;

        callbacks = allCallbacks[eventName];

        if (!callbacks) {
          callbacks = allCallbacks[eventName] = [];
        }

        if (lib$rsvp$events$$indexOf(callbacks, callback) === -1) {
          callbacks.push(callback);
        }
      },

      /**
        You can use `off` to stop firing a particular callback for an event:

        ```javascript
        function doStuff() { // do stuff! }
        object.on('stuff', doStuff);

        object.trigger('stuff'); // doStuff will be called

        // Unregister ONLY the doStuff callback
        object.off('stuff', doStuff);
        object.trigger('stuff'); // doStuff will NOT be called
        ```

        If you don't pass a `callback` argument to `off`, ALL callbacks for the
        event will not be executed when the event fires. For example:

        ```javascript
        var callback1 = function(){};
        var callback2 = function(){};

        object.on('stuff', callback1);
        object.on('stuff', callback2);

        object.trigger('stuff'); // callback1 and callback2 will be executed.

        object.off('stuff');
        object.trigger('stuff'); // callback1 and callback2 will not be executed!
        ```

        @method off
        @for RSVP.EventTarget
        @private
        @param {String} eventName event to stop listening to
        @param {Function} callback optional argument. If given, only the function
        given will be removed from the event's callback queue. If no `callback`
        argument is given, all callbacks will be removed from the event's callback
        queue.
      */
      'off': function(eventName, callback) {
        var allCallbacks = lib$rsvp$events$$callbacksFor(this), callbacks, index;

        if (!callback) {
          allCallbacks[eventName] = [];
          return;
        }

        callbacks = allCallbacks[eventName];

        index = lib$rsvp$events$$indexOf(callbacks, callback);

        if (index !== -1) { callbacks.splice(index, 1); }
      },

      /**
        Use `trigger` to fire custom events. For example:

        ```javascript
        object.on('foo', function(){
          console.log('foo event happened!');
        });
        object.trigger('foo');
        // 'foo event happened!' logged to the console
        ```

        You can also pass a value as a second argument to `trigger` that will be
        passed as an argument to all event listeners for the event:

        ```javascript
        object.on('foo', function(value){
          console.log(value.name);
        });

        object.trigger('foo', { name: 'bar' });
        // 'bar' logged to the console
        ```

        @method trigger
        @for RSVP.EventTarget
        @private
        @param {String} eventName name of the event to be triggered
        @param {Any} options optional value to be passed to any event handlers for
        the given `eventName`
      */
      'trigger': function(eventName, options) {
        var allCallbacks = lib$rsvp$events$$callbacksFor(this), callbacks, callback;

        if (callbacks = allCallbacks[eventName]) {
          // Don't cache the callbacks.length since it may grow
          for (var i=0; i<callbacks.length; i++) {
            callback = callbacks[i];

            callback(options);
          }
        }
      }
    };

    var lib$rsvp$config$$config = {
      instrument: false
    };

    lib$rsvp$events$$default['mixin'](lib$rsvp$config$$config);

    function lib$rsvp$config$$configure(name, value) {
      if (name === 'onerror') {
        // handle for legacy users that expect the actual
        // error to be passed to their function added via
        // `RSVP.configure('onerror', someFunctionHere);`
        lib$rsvp$config$$config['on']('error', value);
        return;
      }

      if (arguments.length === 2) {
        lib$rsvp$config$$config[name] = value;
      } else {
        return lib$rsvp$config$$config[name];
      }
    }

    var lib$rsvp$instrument$$queue = [];

    function lib$rsvp$instrument$$scheduleFlush() {
      setTimeout(function() {
        var entry;
        for (var i = 0; i < lib$rsvp$instrument$$queue.length; i++) {
          entry = lib$rsvp$instrument$$queue[i];

          var payload = entry.payload;

          payload.guid = payload.key + payload.id;
          payload.childGuid = payload.key + payload.childId;
          if (payload.error) {
            payload.stack = payload.error.stack;
          }

          lib$rsvp$config$$config['trigger'](entry.name, entry.payload);
        }
        lib$rsvp$instrument$$queue.length = 0;
      }, 50);
    }

    function lib$rsvp$instrument$$instrument(eventName, promise, child) {
      if (1 === lib$rsvp$instrument$$queue.push({
          name: eventName,
          payload: {
            key: promise._guidKey,
            id:  promise._id,
            eventName: eventName,
            detail: promise._result,
            childId: child && child._id,
            label: promise._label,
            timeStamp: lib$rsvp$utils$$now(),
            error: lib$rsvp$config$$config["instrument-with-stack"] ? new Error(promise._label) : null
          }})) {
            lib$rsvp$instrument$$scheduleFlush();
          }
      }
    var lib$rsvp$instrument$$default = lib$rsvp$instrument$$instrument;

    function  lib$rsvp$$internal$$withOwnPromise() {
      return new TypeError('A promises callback cannot return that same promise.');
    }

    function lib$rsvp$$internal$$noop() {}

    var lib$rsvp$$internal$$PENDING   = void 0;
    var lib$rsvp$$internal$$FULFILLED = 1;
    var lib$rsvp$$internal$$REJECTED  = 2;

    var lib$rsvp$$internal$$GET_THEN_ERROR = new lib$rsvp$$internal$$ErrorObject();

    function lib$rsvp$$internal$$getThen(promise) {
      try {
        return promise.then;
      } catch(error) {
        lib$rsvp$$internal$$GET_THEN_ERROR.error = error;
        return lib$rsvp$$internal$$GET_THEN_ERROR;
      }
    }

    function lib$rsvp$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
      try {
        then.call(value, fulfillmentHandler, rejectionHandler);
      } catch(e) {
        return e;
      }
    }

    function lib$rsvp$$internal$$handleForeignThenable(promise, thenable, then) {
      lib$rsvp$config$$config.async(function(promise) {
        var sealed = false;
        var error = lib$rsvp$$internal$$tryThen(then, thenable, function(value) {
          if (sealed) { return; }
          sealed = true;
          if (thenable !== value) {
            lib$rsvp$$internal$$resolve(promise, value);
          } else {
            lib$rsvp$$internal$$fulfill(promise, value);
          }
        }, function(reason) {
          if (sealed) { return; }
          sealed = true;

          lib$rsvp$$internal$$reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          lib$rsvp$$internal$$reject(promise, error);
        }
      }, promise);
    }

    function lib$rsvp$$internal$$handleOwnThenable(promise, thenable) {
      if (thenable._state === lib$rsvp$$internal$$FULFILLED) {
        lib$rsvp$$internal$$fulfill(promise, thenable._result);
      } else if (thenable._state === lib$rsvp$$internal$$REJECTED) {
        thenable._onError = null;
        lib$rsvp$$internal$$reject(promise, thenable._result);
      } else {
        lib$rsvp$$internal$$subscribe(thenable, undefined, function(value) {
          if (thenable !== value) {
            lib$rsvp$$internal$$resolve(promise, value);
          } else {
            lib$rsvp$$internal$$fulfill(promise, value);
          }
        }, function(reason) {
          lib$rsvp$$internal$$reject(promise, reason);
        });
      }
    }

    function lib$rsvp$$internal$$handleMaybeThenable(promise, maybeThenable) {
      if (maybeThenable.constructor === promise.constructor) {
        lib$rsvp$$internal$$handleOwnThenable(promise, maybeThenable);
      } else {
        var then = lib$rsvp$$internal$$getThen(maybeThenable);

        if (then === lib$rsvp$$internal$$GET_THEN_ERROR) {
          lib$rsvp$$internal$$reject(promise, lib$rsvp$$internal$$GET_THEN_ERROR.error);
        } else if (then === undefined) {
          lib$rsvp$$internal$$fulfill(promise, maybeThenable);
        } else if (lib$rsvp$utils$$isFunction(then)) {
          lib$rsvp$$internal$$handleForeignThenable(promise, maybeThenable, then);
        } else {
          lib$rsvp$$internal$$fulfill(promise, maybeThenable);
        }
      }
    }

    function lib$rsvp$$internal$$resolve(promise, value) {
      if (promise === value) {
        lib$rsvp$$internal$$fulfill(promise, value);
      } else if (lib$rsvp$utils$$objectOrFunction(value)) {
        lib$rsvp$$internal$$handleMaybeThenable(promise, value);
      } else {
        lib$rsvp$$internal$$fulfill(promise, value);
      }
    }

    function lib$rsvp$$internal$$publishRejection(promise) {
      if (promise._onError) {
        promise._onError(promise._result);
      }

      lib$rsvp$$internal$$publish(promise);
    }

    function lib$rsvp$$internal$$fulfill(promise, value) {
      if (promise._state !== lib$rsvp$$internal$$PENDING) { return; }

      promise._result = value;
      promise._state = lib$rsvp$$internal$$FULFILLED;

      if (promise._subscribers.length === 0) {
        if (lib$rsvp$config$$config.instrument) {
          lib$rsvp$instrument$$default('fulfilled', promise);
        }
      } else {
        lib$rsvp$config$$config.async(lib$rsvp$$internal$$publish, promise);
      }
    }

    function lib$rsvp$$internal$$reject(promise, reason) {
      if (promise._state !== lib$rsvp$$internal$$PENDING) { return; }
      promise._state = lib$rsvp$$internal$$REJECTED;
      promise._result = reason;
      lib$rsvp$config$$config.async(lib$rsvp$$internal$$publishRejection, promise);
    }

    function lib$rsvp$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      parent._onError = null;

      subscribers[length] = child;
      subscribers[length + lib$rsvp$$internal$$FULFILLED] = onFulfillment;
      subscribers[length + lib$rsvp$$internal$$REJECTED]  = onRejection;

      if (length === 0 && parent._state) {
        lib$rsvp$config$$config.async(lib$rsvp$$internal$$publish, parent);
      }
    }

    function lib$rsvp$$internal$$publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (lib$rsvp$config$$config.instrument) {
        lib$rsvp$instrument$$default(settled === lib$rsvp$$internal$$FULFILLED ? 'fulfilled' : 'rejected', promise);
      }

      if (subscribers.length === 0) { return; }

      var child, callback, detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          lib$rsvp$$internal$$invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function lib$rsvp$$internal$$ErrorObject() {
      this.error = null;
    }

    var lib$rsvp$$internal$$TRY_CATCH_ERROR = new lib$rsvp$$internal$$ErrorObject();

    function lib$rsvp$$internal$$tryCatch(callback, detail) {
      try {
        return callback(detail);
      } catch(e) {
        lib$rsvp$$internal$$TRY_CATCH_ERROR.error = e;
        return lib$rsvp$$internal$$TRY_CATCH_ERROR;
      }
    }

    function lib$rsvp$$internal$$invokeCallback(settled, promise, callback, detail) {
      var hasCallback = lib$rsvp$utils$$isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        value = lib$rsvp$$internal$$tryCatch(callback, detail);

        if (value === lib$rsvp$$internal$$TRY_CATCH_ERROR) {
          failed = true;
          error = value.error;
          value = null;
        } else {
          succeeded = true;
        }

        if (promise === value) {
          lib$rsvp$$internal$$reject(promise, lib$rsvp$$internal$$withOwnPromise());
          return;
        }

      } else {
        value = detail;
        succeeded = true;
      }

      if (promise._state !== lib$rsvp$$internal$$PENDING) {
        // noop
      } else if (hasCallback && succeeded) {
        lib$rsvp$$internal$$resolve(promise, value);
      } else if (failed) {
        lib$rsvp$$internal$$reject(promise, error);
      } else if (settled === lib$rsvp$$internal$$FULFILLED) {
        lib$rsvp$$internal$$fulfill(promise, value);
      } else if (settled === lib$rsvp$$internal$$REJECTED) {
        lib$rsvp$$internal$$reject(promise, value);
      }
    }

    function lib$rsvp$$internal$$initializePromise(promise, resolver) {
      var resolved = false;
      try {
        resolver(function resolvePromise(value){
          if (resolved) { return; }
          resolved = true;
          lib$rsvp$$internal$$resolve(promise, value);
        }, function rejectPromise(reason) {
          if (resolved) { return; }
          resolved = true;
          lib$rsvp$$internal$$reject(promise, reason);
        });
      } catch(e) {
        lib$rsvp$$internal$$reject(promise, e);
      }
    }

    function lib$rsvp$enumerator$$makeSettledResult(state, position, value) {
      if (state === lib$rsvp$$internal$$FULFILLED) {
        return {
          state: 'fulfilled',
          value: value
        };
      } else {
        return {
          state: 'rejected',
          reason: value
        };
      }
    }

    function lib$rsvp$enumerator$$Enumerator(Constructor, input, abortOnReject, label) {
      this._instanceConstructor = Constructor;
      this.promise = new Constructor(lib$rsvp$$internal$$noop, label);
      this._abortOnReject = abortOnReject;

      if (this._validateInput(input)) {
        this._input     = input;
        this.length     = input.length;
        this._remaining = input.length;

        this._init();

        if (this.length === 0) {
          lib$rsvp$$internal$$fulfill(this.promise, this._result);
        } else {
          this.length = this.length || 0;
          this._enumerate();
          if (this._remaining === 0) {
            lib$rsvp$$internal$$fulfill(this.promise, this._result);
          }
        }
      } else {
        lib$rsvp$$internal$$reject(this.promise, this._validationError());
      }
    }

    var lib$rsvp$enumerator$$default = lib$rsvp$enumerator$$Enumerator;

    lib$rsvp$enumerator$$Enumerator.prototype._validateInput = function(input) {
      return lib$rsvp$utils$$isArray(input);
    };

    lib$rsvp$enumerator$$Enumerator.prototype._validationError = function() {
      return new Error('Array Methods must be provided an Array');
    };

    lib$rsvp$enumerator$$Enumerator.prototype._init = function() {
      this._result = new Array(this.length);
    };

    lib$rsvp$enumerator$$Enumerator.prototype._enumerate = function() {
      var length  = this.length;
      var promise = this.promise;
      var input   = this._input;

      for (var i = 0; promise._state === lib$rsvp$$internal$$PENDING && i < length; i++) {
        this._eachEntry(input[i], i);
      }
    };

    lib$rsvp$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
      var c = this._instanceConstructor;
      if (lib$rsvp$utils$$isMaybeThenable(entry)) {
        if (entry.constructor === c && entry._state !== lib$rsvp$$internal$$PENDING) {
          entry._onError = null;
          this._settledAt(entry._state, i, entry._result);
        } else {
          this._willSettleAt(c.resolve(entry), i);
        }
      } else {
        this._remaining--;
        this._result[i] = this._makeResult(lib$rsvp$$internal$$FULFILLED, i, entry);
      }
    };

    lib$rsvp$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
      var promise = this.promise;

      if (promise._state === lib$rsvp$$internal$$PENDING) {
        this._remaining--;

        if (this._abortOnReject && state === lib$rsvp$$internal$$REJECTED) {
          lib$rsvp$$internal$$reject(promise, value);
        } else {
          this._result[i] = this._makeResult(state, i, value);
        }
      }

      if (this._remaining === 0) {
        lib$rsvp$$internal$$fulfill(promise, this._result);
      }
    };

    lib$rsvp$enumerator$$Enumerator.prototype._makeResult = function(state, i, value) {
      return value;
    };

    lib$rsvp$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
      var enumerator = this;

      lib$rsvp$$internal$$subscribe(promise, undefined, function(value) {
        enumerator._settledAt(lib$rsvp$$internal$$FULFILLED, i, value);
      }, function(reason) {
        enumerator._settledAt(lib$rsvp$$internal$$REJECTED, i, reason);
      });
    };
    function lib$rsvp$promise$all$$all(entries, label) {
      return new lib$rsvp$enumerator$$default(this, entries, true /* abort on reject */, label).promise;
    }
    var lib$rsvp$promise$all$$default = lib$rsvp$promise$all$$all;
    function lib$rsvp$promise$race$$race(entries, label) {
      /*jshint validthis:true */
      var Constructor = this;

      var promise = new Constructor(lib$rsvp$$internal$$noop, label);

      if (!lib$rsvp$utils$$isArray(entries)) {
        lib$rsvp$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
        return promise;
      }

      var length = entries.length;

      function onFulfillment(value) {
        lib$rsvp$$internal$$resolve(promise, value);
      }

      function onRejection(reason) {
        lib$rsvp$$internal$$reject(promise, reason);
      }

      for (var i = 0; promise._state === lib$rsvp$$internal$$PENDING && i < length; i++) {
        lib$rsvp$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
      }

      return promise;
    }
    var lib$rsvp$promise$race$$default = lib$rsvp$promise$race$$race;
    function lib$rsvp$promise$resolve$$resolve(object, label) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && typeof object === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor(lib$rsvp$$internal$$noop, label);
      lib$rsvp$$internal$$resolve(promise, object);
      return promise;
    }
    var lib$rsvp$promise$resolve$$default = lib$rsvp$promise$resolve$$resolve;
    function lib$rsvp$promise$reject$$reject(reason, label) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor(lib$rsvp$$internal$$noop, label);
      lib$rsvp$$internal$$reject(promise, reason);
      return promise;
    }
    var lib$rsvp$promise$reject$$default = lib$rsvp$promise$reject$$reject;

    var lib$rsvp$promise$$guidKey = 'rsvp_' + lib$rsvp$utils$$now() + '-';
    var lib$rsvp$promise$$counter = 0;

    function lib$rsvp$promise$$needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function lib$rsvp$promise$$needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise’s eventual value or the reason
      why the promise cannot be fulfilled.

      Terminology
      -----------

      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.

      A promise can be in one of three states: pending, fulfilled, or rejected.

      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.

      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.


      Basic Usage:
      ------------

      ```js
      var promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);

        // on failure
        reject(reason);
      });

      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Advanced Usage:
      ---------------

      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.

      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();

          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();

          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }

      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Unlike callbacks, promises are great composable primitives.

      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON

        return values;
      });
      ```

      @class RSVP.Promise
      @param {function} resolver
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @constructor
    */
    function lib$rsvp$promise$$Promise(resolver, label) {
      this._id = lib$rsvp$promise$$counter++;
      this._label = label;
      this._state = undefined;
      this._result = undefined;
      this._subscribers = [];

      if (lib$rsvp$config$$config.instrument) {
        lib$rsvp$instrument$$default('created', this);
      }

      if (lib$rsvp$$internal$$noop !== resolver) {
        if (!lib$rsvp$utils$$isFunction(resolver)) {
          lib$rsvp$promise$$needsResolver();
        }

        if (!(this instanceof lib$rsvp$promise$$Promise)) {
          lib$rsvp$promise$$needsNew();
        }

        lib$rsvp$$internal$$initializePromise(this, resolver);
      }
    }

    var lib$rsvp$promise$$default = lib$rsvp$promise$$Promise;

    // deprecated
    lib$rsvp$promise$$Promise.cast = lib$rsvp$promise$resolve$$default;
    lib$rsvp$promise$$Promise.all = lib$rsvp$promise$all$$default;
    lib$rsvp$promise$$Promise.race = lib$rsvp$promise$race$$default;
    lib$rsvp$promise$$Promise.resolve = lib$rsvp$promise$resolve$$default;
    lib$rsvp$promise$$Promise.reject = lib$rsvp$promise$reject$$default;

    lib$rsvp$promise$$Promise.prototype = {
      constructor: lib$rsvp$promise$$Promise,

      _guidKey: lib$rsvp$promise$$guidKey,

      _onError: function (reason) {
        lib$rsvp$config$$config.async(function(promise) {
          setTimeout(function() {
            if (promise._onError) {
              lib$rsvp$config$$config['trigger']('error', reason);
            }
          }, 0);
        }, this);
      },

    /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.

      ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```

      Chaining
      --------

      The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.

      ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });

      findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

      ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```

      Assimilation
      ------------

      Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```

      If the assimliated promise rejects, then the downstream promise will also reject.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```

      Simple Example
      --------------

      Synchronous Example

      ```javascript
      var result;

      try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```

      Advanced Example
      --------------

      Synchronous Example

      ```javascript
      var author, books;

      try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js

      function foundBooks(books) {

      }

      function failure(reason) {

      }

      findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```

      @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Promise}
    */
      then: function(onFulfillment, onRejection, label) {
        var parent = this;
        var state = parent._state;

        if (state === lib$rsvp$$internal$$FULFILLED && !onFulfillment || state === lib$rsvp$$internal$$REJECTED && !onRejection) {
          if (lib$rsvp$config$$config.instrument) {
            lib$rsvp$instrument$$default('chained', this, this);
          }
          return this;
        }

        parent._onError = null;

        var child = new this.constructor(lib$rsvp$$internal$$noop, label);
        var result = parent._result;

        if (lib$rsvp$config$$config.instrument) {
          lib$rsvp$instrument$$default('chained', parent, child);
        }

        if (state) {
          var callback = arguments[state - 1];
          lib$rsvp$config$$config.async(function(){
            lib$rsvp$$internal$$invokeCallback(state, child, callback, result);
          });
        } else {
          lib$rsvp$$internal$$subscribe(parent, child, onFulfillment, onRejection);
        }

        return child;
      },

    /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.

      ```js
      function findAuthor(){
        throw new Error('couldn't find that author');
      }

      // synchronous
      try {
        findAuthor();
      } catch(reason) {
        // something went wrong
      }

      // async with promises
      findAuthor().catch(function(reason){
        // something went wrong
      });
      ```

      @method catch
      @param {Function} onRejection
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Promise}
    */
      'catch': function(onRejection, label) {
        return this.then(null, onRejection, label);
      },

    /**
      `finally` will be invoked regardless of the promise's fate just as native
      try/catch/finally behaves

      Synchronous example:

      ```js
      findAuthor() {
        if (Math.random() > 0.5) {
          throw new Error();
        }
        return new Author();
      }

      try {
        return findAuthor(); // succeed or fail
      } catch(error) {
        return findOtherAuther();
      } finally {
        // always runs
        // doesn't affect the return value
      }
      ```

      Asynchronous example:

      ```js
      findAuthor().catch(function(reason){
        return findOtherAuther();
      }).finally(function(){
        // author was either found, or not
      });
      ```

      @method finally
      @param {Function} callback
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Promise}
    */
      'finally': function(callback, label) {
        var constructor = this.constructor;

        return this.then(function(value) {
          return constructor.resolve(callback()).then(function(){
            return value;
          });
        }, function(reason) {
          return constructor.resolve(callback()).then(function(){
            throw reason;
          });
        }, label);
      }
    };

    function lib$rsvp$all$settled$$AllSettled(Constructor, entries, label) {
      this._superConstructor(Constructor, entries, false /* don't abort on reject */, label);
    }

    lib$rsvp$all$settled$$AllSettled.prototype = lib$rsvp$utils$$o_create(lib$rsvp$enumerator$$default.prototype);
    lib$rsvp$all$settled$$AllSettled.prototype._superConstructor = lib$rsvp$enumerator$$default;
    lib$rsvp$all$settled$$AllSettled.prototype._makeResult = lib$rsvp$enumerator$$makeSettledResult;
    lib$rsvp$all$settled$$AllSettled.prototype._validationError = function() {
      return new Error('allSettled must be called with an array');
    };

    function lib$rsvp$all$settled$$allSettled(entries, label) {
      return new lib$rsvp$all$settled$$AllSettled(lib$rsvp$promise$$default, entries, label).promise;
    }
    var lib$rsvp$all$settled$$default = lib$rsvp$all$settled$$allSettled;
    function lib$rsvp$all$$all(array, label) {
      return lib$rsvp$promise$$default.all(array, label);
    }
    var lib$rsvp$all$$default = lib$rsvp$all$$all;
    var lib$rsvp$asap$$len = 0;
    var lib$rsvp$asap$$toString = {}.toString;
    var lib$rsvp$asap$$vertxNext;
    function lib$rsvp$asap$$asap(callback, arg) {
      lib$rsvp$asap$$queue[lib$rsvp$asap$$len] = callback;
      lib$rsvp$asap$$queue[lib$rsvp$asap$$len + 1] = arg;
      lib$rsvp$asap$$len += 2;
      if (lib$rsvp$asap$$len === 2) {
        // If len is 1, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        lib$rsvp$asap$$scheduleFlush();
      }
    }

    var lib$rsvp$asap$$default = lib$rsvp$asap$$asap;

    var lib$rsvp$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
    var lib$rsvp$asap$$browserGlobal = lib$rsvp$asap$$browserWindow || {};
    var lib$rsvp$asap$$BrowserMutationObserver = lib$rsvp$asap$$browserGlobal.MutationObserver || lib$rsvp$asap$$browserGlobal.WebKitMutationObserver;
    var lib$rsvp$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

    // test for web worker but not in IE10
    var lib$rsvp$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
      typeof importScripts !== 'undefined' &&
      typeof MessageChannel !== 'undefined';

    // node
    function lib$rsvp$asap$$useNextTick() {
      var nextTick = process.nextTick;
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
      // setImmediate should be used instead instead
      var version = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
      if (Array.isArray(version) && version[1] === '0' && version[2] === '10') {
        nextTick = setImmediate;
      }
      return function() {
        nextTick(lib$rsvp$asap$$flush);
      };
    }

    // vertx
    function lib$rsvp$asap$$useVertxTimer() {
      return function() {
        lib$rsvp$asap$$vertxNext(lib$rsvp$asap$$flush);
      };
    }

    function lib$rsvp$asap$$useMutationObserver() {
      var iterations = 0;
      var observer = new lib$rsvp$asap$$BrowserMutationObserver(lib$rsvp$asap$$flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    // web worker
    function lib$rsvp$asap$$useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = lib$rsvp$asap$$flush;
      return function () {
        channel.port2.postMessage(0);
      };
    }

    function lib$rsvp$asap$$useSetTimeout() {
      return function() {
        setTimeout(lib$rsvp$asap$$flush, 1);
      };
    }

    var lib$rsvp$asap$$queue = new Array(1000);
    function lib$rsvp$asap$$flush() {
      for (var i = 0; i < lib$rsvp$asap$$len; i+=2) {
        var callback = lib$rsvp$asap$$queue[i];
        var arg = lib$rsvp$asap$$queue[i+1];

        callback(arg);

        lib$rsvp$asap$$queue[i] = undefined;
        lib$rsvp$asap$$queue[i+1] = undefined;
      }

      lib$rsvp$asap$$len = 0;
    }

    function lib$rsvp$asap$$attemptVertex() {
      try {
        var r = require;
        var vertx = r('vertx');
        lib$rsvp$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
        return lib$rsvp$asap$$useVertxTimer();
      } catch(e) {
        return lib$rsvp$asap$$useSetTimeout();
      }
    }

    var lib$rsvp$asap$$scheduleFlush;
    // Decide what async method to use to triggering processing of queued callbacks:
    if (lib$rsvp$asap$$isNode) {
      lib$rsvp$asap$$scheduleFlush = lib$rsvp$asap$$useNextTick();
    } else if (lib$rsvp$asap$$BrowserMutationObserver) {
      lib$rsvp$asap$$scheduleFlush = lib$rsvp$asap$$useMutationObserver();
    } else if (lib$rsvp$asap$$isWorker) {
      lib$rsvp$asap$$scheduleFlush = lib$rsvp$asap$$useMessageChannel();
    } else if (lib$rsvp$asap$$browserWindow === undefined && typeof require === 'function') {
      lib$rsvp$asap$$scheduleFlush = lib$rsvp$asap$$attemptVertex();
    } else {
      lib$rsvp$asap$$scheduleFlush = lib$rsvp$asap$$useSetTimeout();
    }
    function lib$rsvp$defer$$defer(label) {
      var deferred = { };

      deferred['promise'] = new lib$rsvp$promise$$default(function(resolve, reject) {
        deferred['resolve'] = resolve;
        deferred['reject'] = reject;
      }, label);

      return deferred;
    }
    var lib$rsvp$defer$$default = lib$rsvp$defer$$defer;
    function lib$rsvp$filter$$filter(promises, filterFn, label) {
      return lib$rsvp$promise$$default.all(promises, label).then(function(values) {
        if (!lib$rsvp$utils$$isFunction(filterFn)) {
          throw new TypeError("You must pass a function as filter's second argument.");
        }

        var length = values.length;
        var filtered = new Array(length);

        for (var i = 0; i < length; i++) {
          filtered[i] = filterFn(values[i]);
        }

        return lib$rsvp$promise$$default.all(filtered, label).then(function(filtered) {
          var results = new Array(length);
          var newLength = 0;

          for (var i = 0; i < length; i++) {
            if (filtered[i]) {
              results[newLength] = values[i];
              newLength++;
            }
          }

          results.length = newLength;

          return results;
        });
      });
    }
    var lib$rsvp$filter$$default = lib$rsvp$filter$$filter;

    function lib$rsvp$promise$hash$$PromiseHash(Constructor, object, label) {
      this._superConstructor(Constructor, object, true, label);
    }

    var lib$rsvp$promise$hash$$default = lib$rsvp$promise$hash$$PromiseHash;

    lib$rsvp$promise$hash$$PromiseHash.prototype = lib$rsvp$utils$$o_create(lib$rsvp$enumerator$$default.prototype);
    lib$rsvp$promise$hash$$PromiseHash.prototype._superConstructor = lib$rsvp$enumerator$$default;
    lib$rsvp$promise$hash$$PromiseHash.prototype._init = function() {
      this._result = {};
    };

    lib$rsvp$promise$hash$$PromiseHash.prototype._validateInput = function(input) {
      return input && typeof input === 'object';
    };

    lib$rsvp$promise$hash$$PromiseHash.prototype._validationError = function() {
      return new Error('Promise.hash must be called with an object');
    };

    lib$rsvp$promise$hash$$PromiseHash.prototype._enumerate = function() {
      var promise = this.promise;
      var input   = this._input;
      var results = [];

      for (var key in input) {
        if (promise._state === lib$rsvp$$internal$$PENDING && Object.prototype.hasOwnProperty.call(input, key)) {
          results.push({
            position: key,
            entry: input[key]
          });
        }
      }

      var length = results.length;
      this._remaining = length;
      var result;

      for (var i = 0; promise._state === lib$rsvp$$internal$$PENDING && i < length; i++) {
        result = results[i];
        this._eachEntry(result.entry, result.position);
      }
    };

    function lib$rsvp$hash$settled$$HashSettled(Constructor, object, label) {
      this._superConstructor(Constructor, object, false, label);
    }

    lib$rsvp$hash$settled$$HashSettled.prototype = lib$rsvp$utils$$o_create(lib$rsvp$promise$hash$$default.prototype);
    lib$rsvp$hash$settled$$HashSettled.prototype._superConstructor = lib$rsvp$enumerator$$default;
    lib$rsvp$hash$settled$$HashSettled.prototype._makeResult = lib$rsvp$enumerator$$makeSettledResult;

    lib$rsvp$hash$settled$$HashSettled.prototype._validationError = function() {
      return new Error('hashSettled must be called with an object');
    };

    function lib$rsvp$hash$settled$$hashSettled(object, label) {
      return new lib$rsvp$hash$settled$$HashSettled(lib$rsvp$promise$$default, object, label).promise;
    }
    var lib$rsvp$hash$settled$$default = lib$rsvp$hash$settled$$hashSettled;
    function lib$rsvp$hash$$hash(object, label) {
      return new lib$rsvp$promise$hash$$default(lib$rsvp$promise$$default, object, label).promise;
    }
    var lib$rsvp$hash$$default = lib$rsvp$hash$$hash;
    function lib$rsvp$map$$map(promises, mapFn, label) {
      return lib$rsvp$promise$$default.all(promises, label).then(function(values) {
        if (!lib$rsvp$utils$$isFunction(mapFn)) {
          throw new TypeError("You must pass a function as map's second argument.");
        }

        var length = values.length;
        var results = new Array(length);

        for (var i = 0; i < length; i++) {
          results[i] = mapFn(values[i]);
        }

        return lib$rsvp$promise$$default.all(results, label);
      });
    }
    var lib$rsvp$map$$default = lib$rsvp$map$$map;

    function lib$rsvp$node$$Result() {
      this.value = undefined;
    }

    var lib$rsvp$node$$ERROR = new lib$rsvp$node$$Result();
    var lib$rsvp$node$$GET_THEN_ERROR = new lib$rsvp$node$$Result();

    function lib$rsvp$node$$getThen(obj) {
      try {
       return obj.then;
      } catch(error) {
        lib$rsvp$node$$ERROR.value= error;
        return lib$rsvp$node$$ERROR;
      }
    }


    function lib$rsvp$node$$tryApply(f, s, a) {
      try {
        f.apply(s, a);
      } catch(error) {
        lib$rsvp$node$$ERROR.value = error;
        return lib$rsvp$node$$ERROR;
      }
    }

    function lib$rsvp$node$$makeObject(_, argumentNames) {
      var obj = {};
      var name;
      var i;
      var length = _.length;
      var args = new Array(length);

      for (var x = 0; x < length; x++) {
        args[x] = _[x];
      }

      for (i = 0; i < argumentNames.length; i++) {
        name = argumentNames[i];
        obj[name] = args[i + 1];
      }

      return obj;
    }

    function lib$rsvp$node$$arrayResult(_) {
      var length = _.length;
      var args = new Array(length - 1);

      for (var i = 1; i < length; i++) {
        args[i - 1] = _[i];
      }

      return args;
    }

    function lib$rsvp$node$$wrapThenable(then, promise) {
      return {
        then: function(onFulFillment, onRejection) {
          return then.call(promise, onFulFillment, onRejection);
        }
      };
    }

    function lib$rsvp$node$$denodeify(nodeFunc, options) {
      var fn = function() {
        var self = this;
        var l = arguments.length;
        var args = new Array(l + 1);
        var arg;
        var promiseInput = false;

        for (var i = 0; i < l; ++i) {
          arg = arguments[i];

          if (!promiseInput) {
            // TODO: clean this up
            promiseInput = lib$rsvp$node$$needsPromiseInput(arg);
            if (promiseInput === lib$rsvp$node$$GET_THEN_ERROR) {
              var p = new lib$rsvp$promise$$default(lib$rsvp$$internal$$noop);
              lib$rsvp$$internal$$reject(p, lib$rsvp$node$$GET_THEN_ERROR.value);
              return p;
            } else if (promiseInput && promiseInput !== true) {
              arg = lib$rsvp$node$$wrapThenable(promiseInput, arg);
            }
          }
          args[i] = arg;
        }

        var promise = new lib$rsvp$promise$$default(lib$rsvp$$internal$$noop);

        args[l] = function(err, val) {
          if (err)
            lib$rsvp$$internal$$reject(promise, err);
          else if (options === undefined)
            lib$rsvp$$internal$$resolve(promise, val);
          else if (options === true)
            lib$rsvp$$internal$$resolve(promise, lib$rsvp$node$$arrayResult(arguments));
          else if (lib$rsvp$utils$$isArray(options))
            lib$rsvp$$internal$$resolve(promise, lib$rsvp$node$$makeObject(arguments, options));
          else
            lib$rsvp$$internal$$resolve(promise, val);
        };

        if (promiseInput) {
          return lib$rsvp$node$$handlePromiseInput(promise, args, nodeFunc, self);
        } else {
          return lib$rsvp$node$$handleValueInput(promise, args, nodeFunc, self);
        }
      };

      fn.__proto__ = nodeFunc;

      return fn;
    }

    var lib$rsvp$node$$default = lib$rsvp$node$$denodeify;

    function lib$rsvp$node$$handleValueInput(promise, args, nodeFunc, self) {
      var result = lib$rsvp$node$$tryApply(nodeFunc, self, args);
      if (result === lib$rsvp$node$$ERROR) {
        lib$rsvp$$internal$$reject(promise, result.value);
      }
      return promise;
    }

    function lib$rsvp$node$$handlePromiseInput(promise, args, nodeFunc, self){
      return lib$rsvp$promise$$default.all(args).then(function(args){
        var result = lib$rsvp$node$$tryApply(nodeFunc, self, args);
        if (result === lib$rsvp$node$$ERROR) {
          lib$rsvp$$internal$$reject(promise, result.value);
        }
        return promise;
      });
    }

    function lib$rsvp$node$$needsPromiseInput(arg) {
      if (arg && typeof arg === 'object') {
        if (arg.constructor === lib$rsvp$promise$$default) {
          return true;
        } else {
          return lib$rsvp$node$$getThen(arg);
        }
      } else {
        return false;
      }
    }
    function lib$rsvp$race$$race(array, label) {
      return lib$rsvp$promise$$default.race(array, label);
    }
    var lib$rsvp$race$$default = lib$rsvp$race$$race;
    function lib$rsvp$reject$$reject(reason, label) {
      return lib$rsvp$promise$$default.reject(reason, label);
    }
    var lib$rsvp$reject$$default = lib$rsvp$reject$$reject;
    function lib$rsvp$resolve$$resolve(value, label) {
      return lib$rsvp$promise$$default.resolve(value, label);
    }
    var lib$rsvp$resolve$$default = lib$rsvp$resolve$$resolve;
    function lib$rsvp$rethrow$$rethrow(reason) {
      setTimeout(function() {
        throw reason;
      });
      throw reason;
    }
    var lib$rsvp$rethrow$$default = lib$rsvp$rethrow$$rethrow;

    // default async is asap;
    lib$rsvp$config$$config.async = lib$rsvp$asap$$default;
    var lib$rsvp$$cast = lib$rsvp$resolve$$default;
    function lib$rsvp$$async(callback, arg) {
      lib$rsvp$config$$config.async(callback, arg);
    }

    function lib$rsvp$$on() {
      lib$rsvp$config$$config['on'].apply(lib$rsvp$config$$config, arguments);
    }

    function lib$rsvp$$off() {
      lib$rsvp$config$$config['off'].apply(lib$rsvp$config$$config, arguments);
    }

    // Set up instrumentation through `window.__PROMISE_INTRUMENTATION__`
    if (typeof window !== 'undefined' && typeof window['__PROMISE_INSTRUMENTATION__'] === 'object') {
      var lib$rsvp$$callbacks = window['__PROMISE_INSTRUMENTATION__'];
      lib$rsvp$config$$configure('instrument', true);
      for (var lib$rsvp$$eventName in lib$rsvp$$callbacks) {
        if (lib$rsvp$$callbacks.hasOwnProperty(lib$rsvp$$eventName)) {
          lib$rsvp$$on(lib$rsvp$$eventName, lib$rsvp$$callbacks[lib$rsvp$$eventName]);
        }
      }
    }

    var lib$rsvp$umd$$RSVP = {
      'race': lib$rsvp$race$$default,
      'Promise': lib$rsvp$promise$$default,
      'allSettled': lib$rsvp$all$settled$$default,
      'hash': lib$rsvp$hash$$default,
      'hashSettled': lib$rsvp$hash$settled$$default,
      'denodeify': lib$rsvp$node$$default,
      'on': lib$rsvp$$on,
      'off': lib$rsvp$$off,
      'map': lib$rsvp$map$$default,
      'filter': lib$rsvp$filter$$default,
      'resolve': lib$rsvp$resolve$$default,
      'reject': lib$rsvp$reject$$default,
      'all': lib$rsvp$all$$default,
      'rethrow': lib$rsvp$rethrow$$default,
      'defer': lib$rsvp$defer$$default,
      'EventTarget': lib$rsvp$events$$default,
      'configure': lib$rsvp$config$$configure,
      'async': lib$rsvp$$async
    };

    /* global define:true module:true window: true */
    if (typeof define === 'function' && define['amd']) {
      define(function() { return lib$rsvp$umd$$RSVP; });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = lib$rsvp$umd$$RSVP;
    } else if (typeof this !== 'undefined') {
      this['RSVP'] = lib$rsvp$umd$$RSVP;
    }
}).call(this);


})(require("__browserify_process"))
},{"__browserify_process":15}],14:[function(require,module,exports){
function Walker(description, character) {
    this.character = character;
    this.wayPoints = description.wayPoints;
    this.currentWaypoint = null;
}

Walker.prototype = {
    incWayPoint: function incWayPoint() {
        this.currentWaypoint = (this.currentWaypoint + 1) % this.wayPoints.length;
    },

    update: function update() {
        if(this.currentWaypoint === null) {
            this.character.x = this.wayPoints[0].x;
            this.character.y = this.wayPoints[0].y;
            this.incWayPoint();
            return;
        }
        var currentWaypoint = this.wayPoints[this.currentWaypoint];
        var walkVector = {
            x: currentWaypoint.x - this.character.x,
            y: currentWaypoint.y - this.character.y
        };
        var distanceFromNextWaypoint = Math.sqrt((walkVector.x) * (walkVector.x) + (walkVector.y) * (walkVector.y));
        if(distanceFromNextWaypoint < 10) {
            this.character.x = this.wayPoints[this.currentWaypoint].x;
            this.character.y = this.wayPoints[this.currentWaypoint].y;
            this.incWayPoint();
            return;
        }
        walkVector.x = walkVector.x / distanceFromNextWaypoint;
        walkVector.y = walkVector.y / distanceFromNextWaypoint;
        this.character.dx = walkVector.x * 2;
        this.character.dy = walkVector.y * 2;
    }
};


module.exports = Walker;

},{}]},{},[2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2RlZmluaXRpb24uanNvbiIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2luZGV4LmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9ub2RlX21vZHVsZXMvdXRpbHMvc3JjL3V0aWxzLmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9zcmMva2V5cy5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2dhbWVwbGF5L2RpYWxvZ3VlLmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9zcmMvZ2FtZXBsYXkvd2FuZGVyLmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9zcmMvZ2FtZXBsYXkvcHJlc3MtYW55LWtleS5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2dhbWVwbGF5L2RlZmF1bHQuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL3NyYy9yZW5kZXJlcnMvcG9pbnQtbi1jbGljay5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL3JlbmRlcmVycy90aXRsZS5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2dhbWUuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL3NyYy9jaGFyYWN0ZXIuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL25vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5Mi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL25vZGVfbW9kdWxlcy9yc3ZwL2Rpc3QvcnN2cC5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL3dhbGtlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeG9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwicGhhc2VzXCI6IHtcbiAgICAgICAgXCJmaXJzdERpYWxvZ3VlXCI6IHtcbiAgICAgICAgICAgIFwiZ2FtZXBsYXlUeXBlXCI6IFwiRGlhbG9ndWVcIixcbiAgICAgICAgICAgIFwiYmFzZWRPblwiOiBcImludHJvXCIsXG4gICAgICAgICAgICBcIm5vSW5oZXJpdFwiOiB7XCJnYW1lcGxheVR5cGVcIjogdHJ1ZX0sXG4gICAgICAgICAgICBcImRlZmF1bHRQcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1lXCI6IHtcInhcIjogMjAyLCBcInlcIjogMTU1LCBcImNvbG9yXCI6IFwiY3lhblwifSxcbiAgICAgICAgICAgICAgICBcImhlclwiOiB7XCJ4XCI6IDEwNSwgXCJ5XCI6IDE0NSwgXCJjb2xvclwiOiBcIm9yYW5nZVwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGluZXNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ3aG9cIjogXCJtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJIZXkgISBXaGF0J3MgdXAgP1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwid2hvXCI6IFwiaGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkhpLi4uXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ3aG9cIjogXCJtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJXaGF0J3Mgd3JvbmcgPyB5b3Ugc2VlbSBzbyBkb3duLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwid2hvXCI6IFwiaGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkl0J3Mgb2ssIEknbSBqdXN0IGluIHRoZSBtb29kIGZvciBzdGFyaW5nIGF0IHRoZSBzZWEgZm9yIGEgd2hpbGUuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ3aG9cIjogXCJtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJXaGF0IGNhbiBJIGRvIHRvIGNoZWVyIHlvdSB1cCA/XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ3aG9cIjogXCJoZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQWxsIEkgd2lzaCBmb3IgcmlnaHQgbm93IGlzIGEgbGl0dGxlIHBpZWNlIG9mIGNob2NvbGF0ZS5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIndob1wiOiBcIm1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlJlYWxseSA/IEFoIGFoLCBqdXN0IHlvdSB3YWl0ICFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcblxuICAgICAgICBcInNlY29uZERpYWxvZ3VlXCI6IHtcbiAgICAgICAgICAgIFwiYmFzZWRPblwiOiBcImZpcnN0RGlhbG9ndWVcIixcbiAgICAgICAgICAgIFwibm9Jbmhlcml0XCI6IHtcImxpbmVzXCI6IHRydWV9LFxuICAgICAgICAgICAgXCJyZXN0YXJ0XCI6IHRydWUsXG4gICAgICAgICAgICBcImxpbmVzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwid2hvXCI6IFwibWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiSGV5LCBJJ20gYWxtb3N0IGRvbmUgIVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwid2hvXCI6IFwiaGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImdyZWF0XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ3aG9cIjogXCJtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJXZWxsIEknZCBiZXR0ZXIgZ2V0IGdvaW5nIHRoZW5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgIH0sXG5cbiAgICAgICAgXCJpbnRyb1wiOiB7XG4gICAgICAgICAgICBcImdhbWVwbGF5VHlwZVwiOiBcIldhbmRlclwiLFxuICAgICAgICAgICAgXCJyZW5kZXJpbmdcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlBvaW50TkNsaWNrXCIsXG4gICAgICAgICAgICAgICAgXCJwbGFuZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IFwic2t5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInpcIjogMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IFwiaG91c2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInpcIjogMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IFwiZm9yZWdyb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ6XCI6IDEuNVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVuZGVySGVpZ2h0XCI6IDQ1MCxcbiAgICAgICAgICAgIFwibWFwV2lkdGhcIjogMjQwMCxcbiAgICAgICAgICAgIFwibWluWFwiOiAyMDAsXG4gICAgICAgICAgICBcIm1heFhcIjogMjM1MCxcbiAgICAgICAgICAgIFwibWluWVwiOiAxNTAsXG4gICAgICAgICAgICBcIm1heFlcIjogMjgwLFxuICAgICAgICAgICAgXCJ3YWxrU3VyZmFjZVwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMTUwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMjgwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMS41XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAyMzUwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMjgwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMS41XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAyMzUwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMTUwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNoYXJhY3RlcnNcIjoge1xuICAgICAgICAgICAgICAgIFwiaGVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcHJpdGVzXCI6IFwiaGVyRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogOTAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDEyNSxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDE1NVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3ByaXRlc1wiOiBcIm1lRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogOTAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDIwMyxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDE4NVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNpbmtzXCI6IHtcbiAgICAgICAgICAgICAgICBcInRhbGtUb0hlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAxODIsXG4gICAgICAgICAgICAgICAgICAgIFwieVwiOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMjAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEzMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImdvaW5nRm9yQ2hvY29cIjoge1xuICAgICAgICAgICAgXCJiYXNlZE9uXCI6IFwiaW50cm9cIixcbiAgICAgICAgICAgIFwic2lua3NcIjoge1xuICAgICAgICAgICAgICAgIFwiZ2V0QXRKb2VzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDIxNSxcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogNTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJhdEpvZXNHcmVldGluZ1wiOiB7XG4gICAgICAgICAgICBcImdhbWVwbGF5VHlwZVwiOiBcIkRpYWxvZ3VlXCIsXG4gICAgICAgICAgICBcImJhc2VkT25cIjogXCJhdEpvZXNcIixcbiAgICAgICAgICAgIFwiZGVmYXVsdFByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwibWVcIjoge1wieFwiOiAyMDIsIFwieVwiOiAxNTUsIFwiY29sb3JcIjogXCJjeWFuXCJ9LFxuICAgICAgICAgICAgICAgIFwiam9lXCI6IHtcImNvbG9yXCI6IFwib3JhbmdlXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsaW5lc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIndob1wiOiBcImpvZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJIZWxsbyBzb25cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcblxuICAgICAgICBcImF0Sm9lc1wiOiB7XG4gICAgICAgICAgICBcImdhbWVwbGF5VHlwZVwiOiBcIldhbmRlclwiLFxuICAgICAgICAgICAgXCJyZW5kZXJIZWlnaHRcIjogNDUwLFxuICAgICAgICAgICAgXCJtYXBXaWR0aFwiOiAyNDAwLFxuICAgICAgICAgICAgXCJtaW5YXCI6IDIwMCxcbiAgICAgICAgICAgIFwibWF4WFwiOiAyMzUwLFxuICAgICAgICAgICAgXCJtaW5ZXCI6IDE1MCxcbiAgICAgICAgICAgIFwibWF4WVwiOiAyODAsXG4gICAgICAgICAgICBcInJlbmRlcmluZ1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiUG9pbnROQ2xpY2tcIixcbiAgICAgICAgICAgICAgICBcInBsYW5lc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJza3lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwielwiOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJmb3JlZ3JvdW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInpcIjogMS41XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjaGFyYWN0ZXJzXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcHJpdGVzXCI6IFwibWVEYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTUwLFxuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjAzLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMTg1XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImpvZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3ByaXRlc1wiOiBcIm1lRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogOTAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDIwMyxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDg1ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3YWxrU3VyZmFjZVwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMTUwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMjgwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMS41XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAyMzUwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMjgwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMS41XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAyMzUwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMTUwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInNpbmtzXCI6IHtcbiAgICAgICAgICAgICAgICBcImV4aXRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMTgyLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMzUwLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDEyMCxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTMwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgICAgXCJnYW1lcGxheVR5cGVcIjogXCJQcmVzc0FueUtleVwiLFxuICAgICAgICAgICAgXCJyZW5kZXJpbmdcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiU2hlIGxpa2VzIGNob2NvbGF0ZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0aW1lb3V0XCI6IDIwMDBcbiAgICAgICAgfSxcblxuICAgICAgICBcImZpblwiOiB7XG4gICAgICAgICAgICBcImdhbWVwbGF5VHlwZVwiOiBcIlByZXNzQW55S2V5XCIsXG4gICAgICAgICAgICBcInJlbmRlcmluZ1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJGaW5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidGltZW91dFwiOiAyMDAwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicGxhblwiOiB7XG4gICAgICAgIFwidGl0bGVcIjoge1wia2V5UHJlc3NlZFwiOiBcImZpcnN0RGlhbG9ndWVcIn0sXG4gICAgICAgIFwiaW50cm9cIjoge1widGFsa1RvSGVyXCI6IFwiZmlyc3REaWFsb2d1ZVwifSxcbiAgICAgICAgXCJmaXJzdERpYWxvZ3VlXCI6IHtcImVuZFwiOiBcImdvaW5nRm9yQ2hvY29cIn0sXG4gICAgICAgIFwiZ29pbmdGb3JDaG9jb1wiOiB7XCJ0YWxrVG9IZXJcIjogXCJzZWNvbmREaWFsb2d1ZVwiLCBcImdldEF0Sm9lc1wiOiBcImF0Sm9lc0dyZWV0aW5nXCJ9LFxuICAgICAgICBcInNlY29uZERpYWxvZ3VlXCI6IHtcImVuZFwiOiBcImdvaW5nRm9yQ2hvY29cIn0sXG4gICAgICAgIFwiYXRKb2VzR3JlZXRpbmdcIjoge1wiZW5kXCI6IFwiYXRKb2VzXCJ9LFxuICAgICAgICBcImF0Sm9lc1wiOiB7XCJleGl0XCI6IFwib3V0RnJvbUpvZXNcIn0sXG4gICAgICAgIFwib3V0RnJvbUpvZXNcIjoge30sXG4gICAgICAgIFwiZmluXCI6IHtcImtleVByZXNzZWRcIjogXCJhdEpvZXNcIn1cbiAgICB9LFxuICAgIFwic3ByaXRlc1wiOiB7XG4gICAgICAgIFwibWVEYXlcIjoge1xuICAgICAgICAgICAgXCJpZGxlXCI6IFwibWVTcHJpdGVJZGxlXCIsXG4gICAgICAgICAgICBcInRhbGtpbmdcIjogXCJtZVNwcml0ZUlkbGVcIixcbiAgICAgICAgICAgIFwid2Fsa0xlZnRcIjogXCJtZVNwcml0ZVwiLFxuICAgICAgICAgICAgXCJydW5MZWZ0XCI6IFwibWVTcHJpdGVcIixcbiAgICAgICAgICAgIFwid2Fsa1JpZ2h0XCI6IFwibWVTcHJpdGVSaWdodFwiLFxuICAgICAgICAgICAgXCJydW5SaWdodFwiOiBcIm1lU3ByaXRlUmlnaHRcIixcbiAgICAgICAgICAgIFwid2Fsa1VwXCI6IFwibWVTcHJpdGVJZGxlXCIsXG4gICAgICAgICAgICBcInJ1blVwXCI6IFwibWVTcHJpdGVJZGxlXCIsXG4gICAgICAgICAgICBcIndhbGtEb3duXCI6IFwibWVTcHJpdGVJZGxlXCIsXG4gICAgICAgICAgICBcInJ1bkRvd25cIjogXCJtZVNwcml0ZUlkbGVcIlxuICAgICAgICB9LFxuICAgICAgICBcImhlckRheVwiOiB7XG4gICAgICAgICAgICBcImlkbGVcIjogXCJoZXJTcHJpdGVcIixcbiAgICAgICAgICAgIFwidGFsa2luZ1wiOiBcImhlclNwcml0ZVwiLFxuICAgICAgICAgICAgXCJ3YWxrTGVmdFwiOiBcImhlclNwcml0ZVwiLFxuICAgICAgICAgICAgXCJ3YWxrUmlnaHRcIjogXCJoZXJTcHJpdGVcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInBhdGhzXCI6IHtcbiAgICAgICAgXCJza3lcIjpcbiAgICAgICAgICAgIFwiYXJ0L3NreS5wbmdcIixcbiAgICAgICAgXCJmb3JlZ3JvdW5kXCI6XG4gICAgICAgICAgICBcImFydC9mb3JlZ3JvdW5kLnBuZ1wiLFxuICAgICAgICBcImhvdXNlc1wiOlxuICAgICAgICAgICAgXCJhcnQvaG91c2VzLnBuZ1wiLFxuICAgICAgICBcImhlclNwcml0ZVwiOlxuICAgICAgICAgICAgXCJhcnQvaGVyX3Nwcml0ZS5wbmdcIixcbiAgICAgICAgXCJtZVNwcml0ZVwiOlxuICAgICAgICAgICAgXCJhcnQvbWVfc3ByaXRlLnBuZ1wiLFxuICAgICAgICBcIm1lU3ByaXRlUmlnaHRcIjpcbiAgICAgICAgICAgIFwiYXJ0L21lX3Nwcml0ZV9yaWdodC5wbmdcIixcbiAgICAgICAgXCJtZVNwcml0ZUlkbGVcIjpcbiAgICAgICAgICAgIFwiYXJ0L21lX3Nwcml0ZV9pZGxlLnBuZ1wiXG4gICAgfSxcbiAgICBcImVudHJ5XCI6IFwidGl0bGVcIlxufVxuIiwi77u/dmFyIFV0aWxzID0gcmVxdWlyZSgndXRpbHMnKTtcclxudmFyIEdhbWVFbmdpbmUgPSByZXF1aXJlKCcuL2dhbWUnKTtcclxudmFyIGdhbWVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi9kZWZpbml0aW9uLmpzb24nKTtcclxuXHJcbi8vIHZhciBvdmVycmlkZSA9IHJlcXVpcmUoJy4vb3ZlcnJpZGUtZm9yLWRlYnVnLmpzb24nKTsgZ2FtZURlZmluaXRpb24gPSBVdGlscy5tZXJnZShnYW1lRGVmaW5pdGlvbiwgb3ZlcnJpZGUpO1xyXG5cclxudmFyIHRoZUdhbWUgPSBuZXcgR2FtZUVuZ2luZShcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpLFxyXG4gICAgZ2FtZURlZmluaXRpb24gICAgXHJcbik7XHJcblxyXG5cclxudGhlR2FtZS5zdGFydCgpO1xyXG4iLCIoZnVuY3Rpb24oKXsoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgdmFyIGlkQ291bnRlcnMgPSB7fTtcbiAgICB2YXIgVXRpbHMgPSB7XG4gICAgICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgMyBzaW1wbGUgdHlwZXMsIGFuZCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYobnVsbCA9PT0gb2JqIHx8ICdvYmplY3QnICE9PSB0eXBlb2Ygb2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvcHk7XG4gICAgICAgICAgICAvLyBIYW5kbGUgRGF0ZVxuICAgICAgICAgICAgaWYob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvcHkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvcHkuc2V0VGltZShvYmouZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEhhbmRsZSBBcnJheVxuICAgICAgICAgICAgaWYob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBjb3B5ID0gW107XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMCwgbGVuID0gb2JqLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvcHlbaV0gPSBjbG9uZShvYmpbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGFuZGxlIE9iamVjdFxuICAgICAgICAgICAgaWYob2JqIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgY29weSA9IHt9O1xuICAgICAgICAgICAgICAgIGZvcih2YXIgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3B5W2F0dHJdID0gY2xvbmUob2JqW2F0dHJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gY29weSBvYmohIEl0cyB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uKG9iamVjdDEsIG9iamVjdDIpIHtcbiAgICAgICAgICAgIGZvcih2YXIgYXR0cmlidXRlTmFtZSBpbiBvYmplY3QyKSB7XG4gICAgICAgICAgICAgICAgaWYob2JqZWN0Mi5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QxW2F0dHJpYnV0ZU5hbWVdID0gb2JqZWN0MlthdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0MTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWVwTWVyZ2U6IGZ1bmN0aW9uIChvYmplY3QxLCBvYmplY3QyKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gb2JqZWN0Mikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggb2JqZWN0Mltwcm9wZXJ0eU5hbWVdLmNvbnN0cnVjdG9yID09PSBPYmplY3QgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QxW3Byb3BlcnR5TmFtZV0gPSBVdGlscy5kZWVwTWVyZ2Uob2JqZWN0MVtwcm9wZXJ0eU5hbWVdLCBvYmplY3QyW3Byb3BlcnR5TmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0MVtwcm9wZXJ0eU5hbWVdID0gb2JqZWN0Mltwcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDFbcHJvcGVydHlOYW1lXSA9IG9iamVjdDJbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvYmplY3QxO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRJbWFnZXM6IGZ1bmN0aW9uKGltYWdlc1VSTHMsIGFsbERvbmUpIHtcbiAgICAgICAgICAgIHZhciBpbWFnZXNOYW1lcyA9IE9iamVjdC5rZXlzKGltYWdlc1VSTHMpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgdmFyIGxvYWRlZCA9IDA7XG4gICAgICAgICAgICB2YXIgbG9hZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVkICs9IDE7XG4gICAgICAgICAgICAgICAgaWYobG9hZGVkID09PSBpbWFnZXNOYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsRG9uZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaW1hZ2VzTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2VOYW1lID0gaW1hZ2VzTmFtZXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IGltYWdlc1VSTHNbaW1hZ2VOYW1lXTtcbiAgICAgICAgICAgICAgICBpZih1cmwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IG5ldyBnbG9iYWwuSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2ltYWdlTmFtZV0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSBsb2FkQ2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2FkZWQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2ltYWdlTmFtZV0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXRNZXRob2RTaWduYXR1cmU6IGZ1bmN0aW9uKG9iamVjdCwgbWV0aG9kU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbWV0aG9kU3RyaW5nLnN1YnN0cig5LCBtZXRob2RTdHJpbmcuaW5kZXhPZignKScpICsgMSAtIDkpO1xuICAgICAgICAgICAgaWYob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gb2JqZWN0LnRvU3RyaW5nKCkgKyAnLicgKyByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHVwZGF0ZUN0eFdpdGhJbWFnZXM6IGZ1bmN0aW9uKGltYWdlcywgZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBuYW1lcyA9IE9iamVjdC5rZXlzKGltYWdlcyk7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IG5hbWVzW2ldO1xuICAgICAgICAgICAgICAgIGlmKGltYWdlc1tuYW1lXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltuYW1lXS5jbGVhclJlY3QoMCwgMCwgaW1hZ2VzW25hbWVdLndpZHRoLCBpbWFnZXNbbmFtZV0uaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25bbmFtZV0uZHJhd0ltYWdlKGltYWdlc1tuYW1lXSwgMCwgMCwgaW1hZ2VzW25hbWVdLndpZHRoLCBpbWFnZXNbbmFtZV0uaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uW25hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZHJhd0xpbmU6IGZ1bmN0aW9uKGN0eCwgcDEsIHAyKSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHAxLngsIHAxLnkpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhwMi54LCBwMi55KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkYXNoTGluZTogZnVuY3Rpb24oeCwgeSwgeDIsIHkyLCBkYSkge1xuICAgICAgICAgICAgaWYoIWRhKSB7XG4gICAgICAgICAgICAgICAgZGEgPSBbMTAsIDVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICAgICAgICB2YXIgZHggPSAoeDIgLSB4KSxcbiAgICAgICAgICAgICAgICBkeSA9ICh5MiAtIHkpO1xuICAgICAgICAgICAgdmFyIGxlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgICAgICB2YXIgcm90ID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUoeCwgeSk7XG4gICAgICAgICAgICB0aGlzLm1vdmVUbygwLCAwKTtcbiAgICAgICAgICAgIHRoaXMucm90YXRlKHJvdCk7XG4gICAgICAgICAgICB2YXIgZGMgPSBkYS5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgZGkgPSAwLFxuICAgICAgICAgICAgICAgIGRyYXcgPSB0cnVlO1xuICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgICAgICB3aGlsZShsZW4gPiB4KSB7XG4gICAgICAgICAgICAgICAgeCArPSBkYVtkaSsrICUgZGNdO1xuICAgICAgICAgICAgICAgIGlmKHggPiBsZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGxlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoZHJhdykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmVUbyh4LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvKHgsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkcmF3ID0gIWRyYXc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkYXNoUmVjdDogZnVuY3Rpb24oeCwgeSwgZHgsIGR5LCBkYSkge1xuICAgICAgICAgICAgdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIFV0aWxzLmRhc2hMaW5lLmNhbGwodGhpcywgeCwgeSwgeCArIGR4LCB5LCBkYSk7XG4gICAgICAgICAgICBVdGlscy5kYXNoTGluZS5jYWxsKHRoaXMsIHggKyBkeCwgeSwgeCArIGR4LCB5ICsgZHksIGRhKTtcbiAgICAgICAgICAgIFV0aWxzLmRhc2hMaW5lLmNhbGwodGhpcywgeCArIGR4LCB5ICsgZHksIHgsIHkgKyBkeSwgZGEpO1xuICAgICAgICAgICAgVXRpbHMuZGFzaExpbmUuY2FsbCh0aGlzLCB4LCB5ICsgZHksIHgsIHksIGRhKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLnN0cm9rZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRyYXdQaXhlbDogZnVuY3Rpb24oeCwgeSwgciwgZywgYiwgd2lkdGgpIHtcbiAgICAgICAgICAgIHZhciBpbWFnZURhdGEgPSB0aGlzLmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgd2lkdGgpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVsoaSArIGogKiB3aWR0aCkgKiA0ICsgMF0gPSByO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVsoaSArIGogKiB3aWR0aCkgKiA0ICsgMV0gPSBnO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVsoaSArIGogKiB3aWR0aCkgKiA0ICsgMl0gPSBiO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVsoaSArIGogKiB3aWR0aCkgKiA0ICsgM10gPSAyNTU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB4IC0gcGFyc2VJbnQod2lkdGggLyAyKSwgeSAtIHBhcnNlSW50KHdpZHRoIC8gMikpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRyYXdQaXhlbExpbmU6IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyLCByLCBnLCBiLCB3aWR0aCkge1xuICAgICAgICAgICAgLy8gRGVmaW5lIGRpZmZlcmVuY2VzIGFuZCBlcnJvciBjaGVja1xuICAgICAgICAgICAgdmFyIGR4ID0gTWF0aC5hYnMoeDIgLSB4MSk7XG4gICAgICAgICAgICB2YXIgZHkgPSBNYXRoLmFicyh5MiAtIHkxKTtcbiAgICAgICAgICAgIHZhciBzeCA9ICh4MSA8IHgyKSA/IDEgOiAtMTtcbiAgICAgICAgICAgIHZhciBzeSA9ICh5MSA8IHkyKSA/IDEgOiAtMTtcbiAgICAgICAgICAgIHZhciBlcnIgPSBkeCAtIGR5O1xuICAgICAgICAgICAgVXRpbHMuZHJhd1BpeGVsLmNhbGwodGhpcywgeDEsIHkxLCByLCBnLCBiLCB3aWR0aCk7XG4gICAgICAgICAgICAvLyBNYWluIGxvb3BcbiAgICAgICAgICAgIHdoaWxlKCEoKHgxID09PSB4MikgJiYgKHkxID09PSB5MikpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUyID0gZXJyIDw8IDE7XG4gICAgICAgICAgICAgICAgaWYoZTIgPiAtZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyIC09IGR5O1xuICAgICAgICAgICAgICAgICAgICB4MSArPSBzeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoZTIgPCBkeCkge1xuICAgICAgICAgICAgICAgICAgICBlcnIgKz0gZHg7XG4gICAgICAgICAgICAgICAgICAgIHkxICs9IHN5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBVdGlscy5kcmF3UGl4ZWwuY2FsbCh0aGlzLCB4MSwgeTEsIHIsIGcsIGIsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZXNpemVDYW52YXM6IGZ1bmN0aW9uKGN0eCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IGN0eC5jYW52YXM7XG4gICAgICAgICAgICBpZihjYW52YXMud2lkdGggIT09IHdpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICAgICAgICAgIHZhciB0bXBDYW52YXMgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgdmFyIHRtcEN0eCA9IHRtcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIHZhciBtaW5XaWR0aCA9IE1hdGgubWluKHdpZHRoLCBjYW52YXMud2lkdGgpO1xuICAgICAgICAgICAgICAgIHZhciBtaW5IZWlnaHQgPSBNYXRoLm1pbihoZWlnaHQsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRtcENhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB0bXBDYW52YXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0bXBDdHguZHJhd0ltYWdlKGNhbnZhcywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodG1wQ2FudmFzLCAwLCAwLCBtaW5XaWR0aCwgbWluSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAwLCAwLCBtaW5XaWR0aCwgbWluSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjdHg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TmV3SWQ6IGZ1bmN0aW9uKGNvdW50ZXJOYW1lKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBmb3JtYXRSZXN1bHQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmFtZSArICdfJyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgaWYoIWNvdW50ZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgY291bnRlck5hbWUgPSAnI2RlZmF1bHRfaWRfbmFtZSMnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIWlkQ291bnRlcnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0SWRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighaWRDb3VudGVycy5oYXNPd25Qcm9wZXJ0eShjb3VudGVyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBpZENvdW50ZXJzW2NvdW50ZXJOYW1lXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSBmb3JtYXRSZXN1bHQoY291bnRlck5hbWUsIGlkQ291bnRlcnNbY291bnRlck5hbWVdKTtcbiAgICAgICAgICAgIGlkQ291bnRlcnNbY291bnRlck5hbWVdKys7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2V0SWRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlkQ291bnRlcnMgPSB7fTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRJZENvdW50ZXJzOiBmdW5jdGlvbihjb3VudGVycykge1xuICAgICAgICAgICAgaWRDb3VudGVycyA9IGNvdW50ZXJzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldElkQ291bnRlcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkQ291bnRlcnM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0RWxlbWVudFBvc2l0aW9uOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgbGVmdCA9IDA7XG4gICAgICAgICAgICB2YXIgdG9wID0gMDtcbiAgICAgICAgICAgIHZhciBlID0gZWxlbWVudDtcbiAgICAgICAgICAgIHdoaWxlKGUub2Zmc2V0UGFyZW50ICE9PSB1bmRlZmluZWQgJiYgZS5vZmZzZXRQYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IGUub2Zmc2V0TGVmdCArIChlLmNsaWVudExlZnQgIT09IG51bGwgPyBlLmNsaWVudExlZnQgOiAwKTtcbiAgICAgICAgICAgICAgICB0b3AgKz0gZS5vZmZzZXRUb3AgKyAoZS5jbGllbnRUb3AgIT09IG51bGwgPyBlLmNsaWVudFRvcCA6IDApO1xuICAgICAgICAgICAgICAgIGUgPSBlLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogbGVmdCxcbiAgICAgICAgICAgICAgICB5OiB0b3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TW91c2VQb3NpdGlvbjogZnVuY3Rpb24oZXZlbnQsIGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBVdGlscy5yZWFkR2xvYmFsTW91c2UoZXZlbnQpO1xuICAgICAgICAgICAgaWYoZG9tRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50UG9zaXRpb24gPSBVdGlscy5nZXRFbGVtZW50UG9zaXRpb24oZG9tRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnggLT0gZWxlbWVudFBvc2l0aW9uLng7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnkgLT0gZWxlbWVudFBvc2l0aW9uLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGFzc2VydE5vdE51bGw6IGZ1bmN0aW9uKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICBpZighdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIG51bGwgdmFsdWUgJyArIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGVtcHR5RG9tRWxlbWVudDogZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgICAgd2hpbGUoZG9tRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWRHbG9iYWxNb3VzZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgIGlmKGV2ZW50LnBhZ2VYICE9PSB1bmRlZmluZWQgJiYgZXZlbnQucGFnZVkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC54ID0gZXZlbnQucGFnZVg7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnkgPSBldmVudC5wYWdlWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC54ID0gZXZlbnQuY2xpZW50WCArIGdsb2JhbC5kb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgKyBnbG9iYWwuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnkgPSBldmVudC5jbGllbnRZICsgZ2xvYmFsLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgZ2xvYmFsLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGluZGV4T2Y6IGZ1bmN0aW9uKGFycmF5LCB2YWx1ZSkge1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoYXJyYXlbaV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIEhTTFZhbHVlOiBmdW5jdGlvbihuMSwgbjIsIGh1ZSkge1xuICAgICAgICAgICAgdmFyIHZhbDtcbiAgICAgICAgICAgIGlmKGh1ZSA+IDYpIHtcbiAgICAgICAgICAgICAgICBodWUgLT0gNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoaHVlIDwgMCkge1xuICAgICAgICAgICAgICAgIGh1ZSArPSA2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaHVlIDwgMSkge1xuICAgICAgICAgICAgICAgIHZhbCA9IG4xICsgKG4yIC0gbjEpICogaHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihodWUgPCAzKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gbjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGh1ZSA8IDQpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBuMSArIChuMiAtIG4xKSAqICg0IC0gaHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbCA9IG4xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBIU0xUb1JHQjogZnVuY3Rpb24oaCwgcywgbCkge1xuICAgICAgICAgICAgdmFyIHIsIGcsIGI7XG4gICAgICAgICAgICBoID0gaCAtIE1hdGguZmxvb3IoaCk7XG4gICAgICAgICAgICBzID0gdGhpcy5jbGFtcChzLCAwLCAxKTtcbiAgICAgICAgICAgIGwgPSB0aGlzLmNsYW1wKGwsIDAsIDEpO1xuICAgICAgICAgICAgaWYocyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHIgPSBsO1xuICAgICAgICAgICAgICAgIGcgPSBsO1xuICAgICAgICAgICAgICAgIGIgPSBsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG0xLCBtMjtcbiAgICAgICAgICAgICAgICBpZihsIDw9IDAuNSkge1xuICAgICAgICAgICAgICAgICAgICBtMiA9IGwgKiAoMSArIHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbTIgPSBsICsgcyAtIGwgKiBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtMSA9IDIuMCAqIGwgLSBtMjtcbiAgICAgICAgICAgICAgICByID0gdGhpcy5IU0xWYWx1ZShtMSwgbTIsIGggKiA2LjAgKyAyLjApO1xuICAgICAgICAgICAgICAgIGcgPSB0aGlzLkhTTFZhbHVlKG0xLCBtMiwgaCAqIDYuMCk7XG4gICAgICAgICAgICAgICAgYiA9IHRoaXMuSFNMVmFsdWUobTEsIG0yLCBoICogNi4wIC0gMi4wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcjogcixcbiAgICAgICAgICAgICAgICBnOiBnLFxuICAgICAgICAgICAgICAgIGI6IGJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgUkdCVG9IU1Y6IGZ1bmN0aW9uIFJHQlRvSFNWKGNvbG9yUkdCKSB7XG4gICAgICAgICAgICB2YXIgciA9IGNvbG9yUkdCLnIgLyAyNTU7XG4gICAgICAgICAgICB2YXIgZyA9IGNvbG9yUkdCLmcgLyAyNTU7XG4gICAgICAgICAgICB2YXIgYiA9IGNvbG9yUkdCLmIgLyAyNTU7XG4gICAgICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgICAgICAgICB2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICAgICAgICB2YXIgaCwgcywgdiA9IG1heDtcblxuICAgICAgICAgICAgdmFyIGQgPSBtYXggLSBtaW47XG4gICAgICAgICAgICBzID0gbWF4ID09PSAwID8gMCA6IGQgLyBtYXg7XG5cbiAgICAgICAgICAgIGlmKG1heCA9PT0gbWluKSB7XG4gICAgICAgICAgICAgICAgaCA9IDA7IC8vIGFjaHJvbWF0aWNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3aXRjaChtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSByOlxuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgZzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoYiAtIHIpIC8gZCArIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IChyIC0gZykgLyBkICsgNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoIC89IDY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaDogaCxcbiAgICAgICAgICAgICAgICBzOiBzLFxuICAgICAgICAgICAgICAgIHY6IHZcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgSFNWVG9SR0I6IGZ1bmN0aW9uIEhTVlRvUkdCKGgsIHMsIHYpIHtcbiAgICAgICAgICAgIHZhciByLCBnLCBiO1xuXG4gICAgICAgICAgICB2YXIgaSA9IE1hdGguZmxvb3IoaCAqIDYpO1xuICAgICAgICAgICAgdmFyIGYgPSBoICogNiAtIGk7XG4gICAgICAgICAgICB2YXIgcCA9IHYgKiAoMSAtIHMpO1xuICAgICAgICAgICAgdmFyIHEgPSB2ICogKDEgLSBmICogcyk7XG4gICAgICAgICAgICB2YXIgdCA9IHYgKiAoMSAtICgxIC0gZikgKiBzKTtcblxuICAgICAgICAgICAgc3dpdGNoKGkgJSA2KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICByID0gdjtcbiAgICAgICAgICAgICAgICAgICAgZyA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBxO1xuICAgICAgICAgICAgICAgICAgICBnID0gdjtcbiAgICAgICAgICAgICAgICAgICAgYiA9IHA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgciA9IHA7XG4gICAgICAgICAgICAgICAgICAgIGcgPSB2O1xuICAgICAgICAgICAgICAgICAgICBiID0gdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByID0gcDtcbiAgICAgICAgICAgICAgICAgICAgZyA9IHE7XG4gICAgICAgICAgICAgICAgICAgIGIgPSB2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHIgPSB0O1xuICAgICAgICAgICAgICAgICAgICBnID0gcDtcbiAgICAgICAgICAgICAgICAgICAgYiA9IHY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgciA9IHY7XG4gICAgICAgICAgICAgICAgICAgIGcgPSBwO1xuICAgICAgICAgICAgICAgICAgICBiID0gcTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcjogcGFyc2VJbnQociAqIDI1NSksXG4gICAgICAgICAgICAgICAgZzogcGFyc2VJbnQoZyAqIDI1NSksXG4gICAgICAgICAgICAgICAgYjogcGFyc2VJbnQoYiAqIDI1NSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgSFNWVG9IU0w6IGZ1bmN0aW9uKGgsIHMsIHYpIHtcbiAgICAgICAgICAgIC8vIGRldGVybWluZSB0aGUgbGlnaHRuZXNzIGluIHRoZSByYW5nZSBbMCwxMDBdXG4gICAgICAgICAgICB2YXIgbCA9ICgyIC0gcyAvIDEwMCkgKiB2IC8gMjtcblxuICAgICAgICAgICAgdmFyIGhzbCA9IHtcbiAgICAgICAgICAgICAgICAnaCc6IGgsXG4gICAgICAgICAgICAgICAgJ3MnOiBzICogdiAvIChsIDwgNTAgPyBsICogMiA6IDIwMCAtIGwgKiAyKSxcbiAgICAgICAgICAgICAgICAnbCc6IGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIGNvcnJlY3QgYSBkaXZpc2lvbi1ieS16ZXJvIGVycm9yXG4gICAgICAgICAgICBpZihpc05hTihoc2wucykpIHtcbiAgICAgICAgICAgICAgICBoc2wucyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaHNsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNsYW1wOiBmdW5jdGlvbih2LCBtaW4sIG1heCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHYsIG1heCksIG1pbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBVdGlscztcbn0pICh0aGlzKTtcblxuXG59KSgpIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgMzc6IGZhbHNlLFxuICAgIDM4OiBmYWxzZSxcbiAgICAzOTogZmFsc2UsXG4gICAgNDA6IGZhbHNlXG59O1xuIiwiZnVuY3Rpb24gRGlhbG9ndWUoaG9zdCkge1xuICAgIHRoaXMuY3VycmVudExpbmUgPSAwO1xufVxuXG5EaWFsb2d1ZS5wcm90b3R5cGUgPSB7XG4gICAgZXZlbnRIYW5kbGVyczoge1xuICAgICAgICBrZXl1cDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvTmV4dExpbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnb1RvTmV4dExpbmU6IGZ1bmN0aW9uIGdvVG9OZXh0TGluZSgpIHtcbiAgICAgICAgaWYodGhpcy5jdXJyZW50TGluZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5nb1RvTGluZSgwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudExpbmUgKyAxIDwgdGhpcy5saW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9MaW5lKHRoaXMuY3VycmVudExpbmUgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5nb3RvU2luaygnZW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ29Ub0xpbmU6IGZ1bmN0aW9uIGdvVG9MaW5lKGxpbmVOdW1iZXIpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TGluZSA9IGxpbmVOdW1iZXI7XG4gICAgfSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc2F2ZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLnNhdmVDYW52YXMud2lkdGggPSB0aGlzLmhvc3QuZ2FtZUNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5zYXZlQ2FudmFzLmhlaWdodCA9IHRoaXMuaG9zdC5nYW1lQ2FudmFzLmhlaWdodDtcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuc2F2ZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5ob3N0LmdhbWVDYW52YXMsXG4gICAgICAgICAgICAwLCAwLCB0aGlzLmhvc3QuZ2FtZUNhbnZhcy53aWR0aCwgdGhpcy5ob3N0LmdhbWVDYW52YXMuaGVpZ2h0LFxuICAgICAgICAgICAgMCwgMCwgdGhpcy5ob3N0LmdhbWVDYW52YXMud2lkdGgsIHRoaXMuaG9zdC5nYW1lQ2FudmFzLmhlaWdodFxuICAgICAgICAgICAgKTtcbiAgICAgICAgaWYodGhpcy5yZXN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMaW5lID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbnZvbHZlZENoYXJhY3RlcnMgPSB0aGlzLmxpbmVzLnJlZHVjZShmdW5jdGlvbihjaGFyYWN0ZXJzU29GYXIsIGxpbmUpIHtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzU29GYXJbbGluZS53aG9dID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hhcmFjdGVyc1NvRmFyO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAge31cbiAgICAgICAgKTtcbiAgICAgICAgT2JqZWN0LmtleXMoaW52b2x2ZWRDaGFyYWN0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKGNoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5jaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdLmFjdGlvbiA9ICd0YWxraW5nJztcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG5cbiAgICB9LFxuXG4gICAgZHJhdzogZnVuY3Rpb24gZHJhdygpIHtcbiAgICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gRGlhbG9ndWU7XG4iLCJmdW5jdGlvbiBXYW5kZXIoaG9zdCkge1xufVxuXG5XYW5kZXIucHJvdG90eXBlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTW92ZW1lbnQodGltZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBpc0luU2luazogZnVuY3Rpb24gaXNJblNpbmsoY2hhcmFjdGVyLCBzaW5rKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoY2hhcmFjdGVyLnggKyBjaGFyYWN0ZXIud2lkdGgpID49IHNpbmsueCAmJlxuICAgICAgICAgICAgY2hhcmFjdGVyLnggPD0gKHNpbmsueCArIHNpbmsud2lkdGgpICYmXG4gICAgICAgICAgICAoY2hhcmFjdGVyLnkgKyBjaGFyYWN0ZXIuaGVpZ2h0KSA+PSBzaW5rLnkgJiZcbiAgICAgICAgICAgIGNoYXJhY3Rlci55IDw9IChzaW5rLnkgKyBzaW5rLmhlaWdodClcbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlTW92ZW1lbnQ6IGZ1bmN0aW9uIHVwZGF0ZU1vdmVtZW50KHRpbWUpIHtcbiAgICAgICAgdmFyIHVuaXQgPSAyO1xuICAgICAgICB2YXIgbWUgPSB0aGlzLmhvc3QuY2hhcmFjdGVycy5tZTtcbiAgICAgICAgbWUuZHggPSAwO1xuICAgICAgICBtZS5keSA9IDA7XG4gICAgICAgIGlmKHRoaXMuaG9zdC5rZXlzLnNoaWZ0KSB7XG4gICAgICAgICAgICB1bml0ICo9IDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5ob3N0LmtleXNbMzddIHx8IHRoaXMuaG9zdC5rZXlzWydRJy5jaGFyQ29kZUF0KCldIHx8IHRoaXMuaG9zdC5rZXlzWydBJy5jaGFyQ29kZUF0KCldKSB7XG4gICAgICAgICAgICBtZS5keCAtPSB1bml0O31cbiAgICAgICAgaWYodGhpcy5ob3N0LmtleXNbMzldIHx8IHRoaXMuaG9zdC5rZXlzWydEJy5jaGFyQ29kZUF0KCldKSB7XG4gICAgICAgICAgICBtZS5keCArPSB1bml0O31cbiAgICAgICAgaWYodGhpcy5ob3N0LmtleXNbMzhdIHx8IHRoaXMuaG9zdC5rZXlzWydaJy5jaGFyQ29kZUF0KCldIHx8IHRoaXMuaG9zdC5rZXlzWydXJy5jaGFyQ29kZUF0KCldKSB7XG4gICAgICAgICAgICBtZS5keSAtPSB1bml0IC8gMjt9XG4gICAgICAgIGlmKHRoaXMuaG9zdC5rZXlzWzQwXSB8fCB0aGlzLmhvc3Qua2V5c1snUycuY2hhckNvZGVBdCgpXSkge1xuICAgICAgICAgICAgbWUuZHkgKz0gdW5pdCAvIDI7fVxuXG4gICAgICAgIGZvcih2YXIgc2lua05hbWUgaW4gdGhpcy5zaW5rcykge1xuICAgICAgICAgICAgdmFyIHNpbmsgPSB0aGlzLnNpbmtzW3NpbmtOYW1lXTtcbiAgICAgICAgICAgIHZhciBuZXh0Q29vcmRzID0ge3g6IG1lLnggKyBtZS5keCwgeTogbWUueSArIG1lLmR5LCB3aWR0aDogbWUud2lkdGgsIGhlaWdodDogbWUuaGVpZ2h0fTtcbiAgICAgICAgICAgIGlmKFxuICAgICAgICAgICAgICAgICF0aGlzLmlzSW5TaW5rKG1lLCBzaW5rKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNJblNpbmsobmV4dENvb3Jkcywgc2luaylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG1lLmFjdGlvbiA9ICdpZGxlJztcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QuZ290b1Npbmsoc2lua05hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaG9zdC5jaGFyYWN0ZXJzKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbihjaGFyYWN0ZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5jaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgaWYoY2hhcmFjdGVyLmJlaGF2aW91cikge1xuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIuYmVoYXZpb3VyLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGNoYXJhY3Rlci5keCA+IDIpXG4gICAgICAgICAgICAgICAgICAgIHsgY2hhcmFjdGVyLnNldFByb3BlcnR5KCdhY3Rpb24nLCAncnVuUmlnaHQnKTt9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihjaGFyYWN0ZXIuZHggPiAwKVxuICAgICAgICAgICAgICAgICAgICB7IGNoYXJhY3Rlci5zZXRQcm9wZXJ0eSgnYWN0aW9uJywgJ3dhbGtSaWdodCcpO31cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNoYXJhY3Rlci5keCA8IC0yKVxuICAgICAgICAgICAgICAgICAgICB7IGNoYXJhY3Rlci5zZXRQcm9wZXJ0eSgnYWN0aW9uJywgJ3J1bkxlZnQnKTt9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihjaGFyYWN0ZXIuZHggPCAwKVxuICAgICAgICAgICAgICAgICAgICB7IGNoYXJhY3Rlci5zZXRQcm9wZXJ0eSgnYWN0aW9uJywgJ3dhbGtMZWZ0Jyk7fVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoY2hhcmFjdGVyLmR5ID4gMilcbiAgICAgICAgICAgICAgICAgICAgeyBjaGFyYWN0ZXIuc2V0UHJvcGVydHkoJ2FjdGlvbicsICdydW5Eb3duJyk7fVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoY2hhcmFjdGVyLmR5ID4gMClcbiAgICAgICAgICAgICAgICAgICAgeyBjaGFyYWN0ZXIuc2V0UHJvcGVydHkoJ2FjdGlvbicsICd3YWxrRG93bicpO31cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNoYXJhY3Rlci5keSA8IC0yKVxuICAgICAgICAgICAgICAgICAgICB7IGNoYXJhY3Rlci5zZXRQcm9wZXJ0eSgnYWN0aW9uJywgJ3J1blVwJyk7fVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoY2hhcmFjdGVyLmR5IDwgMClcbiAgICAgICAgICAgICAgICAgICAgeyBjaGFyYWN0ZXIuc2V0UHJvcGVydHkoJ2FjdGlvbicsICd3YWxrVXAnKTt9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7IGNoYXJhY3Rlci5zZXRQcm9wZXJ0eSgnYWN0aW9uJywgJ2lkbGUnKTsgfVxuICAgICAgICAgICAgICAgIGlmKGNoYXJhY3Rlci54ICsgY2hhcmFjdGVyLmR4ID4gdGhpcy5taW5YICYmIGNoYXJhY3Rlci54ICsgY2hhcmFjdGVyLmR4IDwgdGhpcy5tYXhYKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3Rlci54ICs9IGNoYXJhY3Rlci5keDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY2hhcmFjdGVyLnkgKyBjaGFyYWN0ZXIuZHkgPiB0aGlzLm1pblkgJiYgY2hhcmFjdGVyLnkgKyBjaGFyYWN0ZXIuZHkgPCB0aGlzLm1heFkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLnkgKz0gY2hhcmFjdGVyLmR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhbmRlcjtcbiIsImZ1bmN0aW9uIFByZXNzQW55S2V5KCkge1xufVxuXG5QcmVzc0FueUtleS5wcm90b3R5cGUgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5hcm1lZCA9IGZhbHNlO1xuICAgICAgICB2YXIgdGltZW91dCA9IHRoaXMuaG9zdC5waGFzZUluc3RhbmNlc1t0aGlzLmhvc3QucGhhc2VOYW1lXS50aW1lb3V0O1xuICAgICAgICBpZih0aW1lb3V0KSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QuZ290b1NpbmsoJ2tleVByZXNzZWQnKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgdGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb25DbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5fY2xlYW5VcEFuZEdvKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ2xpY2spO1xuICAgIH0sXG5cbiAgICBfY2xlYW5VcEFuZEdvOiBmdW5jdGlvbiBfY2xlYW5VcCgpIHtcbiAgICAgICAgaWYodGhpcy50aW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ2xpY2spO1xuICAgICAgICB0aGlzLmhvc3QuZ290b1NpbmsoJ2tleVByZXNzZWQnKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgIGlmKCF0aGlzLmFybWVkKSB7XG4gICAgICAgICAgICBpZighT2JqZWN0LmtleXModGhpcy5ob3N0LmtleXMpXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5rZXlzW2tleV07XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgIC5zb21lKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcm1lZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYoT2JqZWN0LmtleXModGhpcy5ob3N0LmtleXMpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3Qua2V5c1trZXldO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLnNvbWUoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICB0aGlzLl9jbGVhblVwQW5kR28oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUHJlc3NBbnlLZXk7XG4iLCJmdW5jdGlvbiBEZWZhdWx0R2FtZXBsYXkoKSB7XG4gICAgXG59XG5cbkRlZmF1bHRHYW1lcGxheS5wcm90b3R5cGUgPSB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmF1bHRHYW1lcGxheTtcbiIsInZhciBsYXN0RnJhbWVVcGRhdGUgPSBudWxsO1xuXG5cbmZ1bmN0aW9uIGRyYXdQbGFuZXMoY3R4LCBtYXBPZmZzZXQsIGltYWdlcywgbWFwV2lkdGgsIHJlbmRlckNvb3JkcywgcGxhbmVzKSB7XG4gICAgcGxhbmVzLmZvckVhY2goZnVuY3Rpb24ocGxhbmUpIHtcbiAgICAgICAgdmFyIGltYWdlID0gaW1hZ2VzW3BsYW5lLmltYWdlXTtcbiAgICAgICAgaWYoIXBsYW5lLnopIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICAgICAgMCwgMCxcbiAgICAgICAgICAgICAgICBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHJlbmRlckNvb3Jkcy54LCByZW5kZXJDb29yZHMueSxcbiAgICAgICAgICAgICAgICByZW5kZXJDb29yZHMud2lkdGgsIGltYWdlLmhlaWdodFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgICAgIE1hdGgubWluKG1hcE9mZnNldC54LCBtYXBXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSwgbWFwT2Zmc2V0LnksXG4gICAgICAgICAgICAgICAgTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIGltYWdlLndpZHRoKSwgaW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHJlbmRlckNvb3Jkcy54LCByZW5kZXJDb29yZHMueSxcbiAgICAgICAgICAgICAgICBNYXRoLm1pbihyZW5kZXJDb29yZHMud2lkdGgsIGltYWdlLndpZHRoKSwgcmVuZGVyQ29vcmRzLmhlaWdodFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZHJhd0NoYXJhY3RlcnMoaG9zdCwgY3VycmVudE1hcE9mZnNldCwgcmVuZGVyQ29vcmRzKSB7XG4gICAgdmFyIGNoYXJhY3Rlckxpc3QgPSBPYmplY3Qua2V5cyhob3N0LmNoYXJhY3RlcnMpO1xuICAgIGNoYXJhY3Rlckxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBob3N0LmNoYXJhY3RlcnNbYV0ueSAtIGhvc3QuY2hhcmFjdGVyc1tiXS55O1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgZm9yKHZhciBpID0gMCA7IGkgPCBjaGFyYWN0ZXJMaXN0Lmxlbmd0aCA7IGkrKykge1xuICAgICAgICB2YXIgY2hhcmFjdGVyID0gaG9zdC5jaGFyYWN0ZXJzW2NoYXJhY3Rlckxpc3RbaV1dO1xuICAgICAgICBpZihpc1Zpc2libGUoY2hhcmFjdGVyLCBjdXJyZW50TWFwT2Zmc2V0KSkge1xuICAgICAgICAgICAgZHJhd0NoYXJhY3RlcihcbiAgICAgICAgICAgICAgICBob3N0LmN0eCxcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIsXG4gICAgICAgICAgICAgICAgY3VycmVudE1hcE9mZnNldCxcbiAgICAgICAgICAgICAgICBob3N0LmltYWdlcyxcbiAgICAgICAgICAgICAgICByZW5kZXJDb29yZHMsXG4gICAgICAgICAgICAgICAgaG9zdC5nYW1lU3RydWN0dXJlLnNwcml0ZXNbY2hhcmFjdGVyLnNwcml0ZXNdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhd0NoYXJhY3RlcihjdHgsIGNoYXJhY3RlciwgbWFwT2Zmc2V0LCBpbWFnZXMsIHJlbmRlckNvb3Jkcywgc3ByaXRlcykge1xuICAgIHZhciBpbWFnZSA9IGltYWdlc1tzcHJpdGVzW2NoYXJhY3Rlci5hY3Rpb25dXTtcbiAgICB2YXIgeE9mZnNldEluU291cmNlID0gY2hhcmFjdGVyLnBoYXNlICogY2hhcmFjdGVyLndpZHRoO1xuXG4gICAgdmFyIHNjYWxlID0gKChjaGFyYWN0ZXIueSAtIDE1MCkgLyA0ICsgMTUwKSAvIDE1MDtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICBpbWFnZSxcbiAgICAgICAgeE9mZnNldEluU291cmNlLCAwLFxuICAgICAgICBjaGFyYWN0ZXIud2lkdGgsXG4gICAgICAgIGNoYXJhY3Rlci5oZWlnaHQsXG4gICAgICAgIGNoYXJhY3Rlci54IC0gbWFwT2Zmc2V0LnggKyByZW5kZXJDb29yZHMueCAtIChjaGFyYWN0ZXIud2lkdGggKiBzY2FsZSAtIGNoYXJhY3Rlci53aWR0aCkgLyAyLFxuICAgICAgICBjaGFyYWN0ZXIueSAtIG1hcE9mZnNldC55ICsgcmVuZGVyQ29vcmRzLnksXG4gICAgICAgIGNoYXJhY3Rlci53aWR0aCAqIHNjYWxlLCBjaGFyYWN0ZXIuaGVpZ2h0ICogc2NhbGVcbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gZHJhd0RpYWxvZ3VlKGN0eCwgY3VycmVudExpbmUsIGRlZmF1bHRQcm9wZXJ0aWVzLCByZW5kZXJDb29yZHMsIGNoYXJhY3RlciwgbWFwT2Zmc2V0KSB7XG4gICAgaWYoY3VycmVudExpbmUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgIGN0eC5mb250ID0gJ25vcm1hbCAxNHB0IGhlbHZldGljYSc7XG4gICAgdmFyIG1ldHJpY3MgPSBjdHgubWVhc3VyZVRleHQoY3VycmVudExpbmUudGV4dCk7XG4gICAgdmFyIHBvc2l0aW9uID0gZGVmYXVsdFByb3BlcnRpZXNbY3VycmVudExpbmUud2hvXTtcbiAgICBpZighcG9zaXRpb24ueCkge1xuICAgICAgICBwb3NpdGlvbi54ID0gY2hhcmFjdGVyLnggLSBtYXBPZmZzZXQueCAtIG1ldHJpY3Mud2lkdGggLyAyICsgY2hhcmFjdGVyLndpZHRoIC8gMjtcbiAgICB9XG4gICAgaWYoIXBvc2l0aW9uLnkpIHtcbiAgICAgICAgcG9zaXRpb24ueSA9IGNoYXJhY3Rlci55IC0gbWFwT2Zmc2V0LnkgLSA0MDtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBpZihkZWZhdWx0UHJvcGVydGllc1tjdXJyZW50TGluZS53aG9dLmNvbG9yKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBkZWZhdWx0UHJvcGVydGllc1tjdXJyZW50TGluZS53aG9dLmNvbG9yO1xuICAgIH1cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgIGN0eC5zdHJva2VSZWN0KFxuICAgICAgICBwb3NpdGlvbi54ICsgcmVuZGVyQ29vcmRzLngsXG4gICAgICAgIHBvc2l0aW9uLnkgKyByZW5kZXJDb29yZHMueSxcbiAgICAgICAgbWV0cmljcy53aWR0aCArIDEwLCAzMFxuICAgICAgICApO1xuICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuODU7XG4gICAgY3R4LmZpbGxSZWN0KFxuICAgICAgICBwb3NpdGlvbi54ICsgcmVuZGVyQ29vcmRzLngsXG4gICAgICAgIHBvc2l0aW9uLnkgKyByZW5kZXJDb29yZHMueSxcbiAgICAgICAgbWV0cmljcy53aWR0aCArIDEwLFxuICAgICAgICAzMFxuICAgICAgICApO1xuICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY3R4LmZpbGxUZXh0KFxuICAgICAgICBjdXJyZW50TGluZS50ZXh0LFxuICAgICAgICBwb3NpdGlvbi54ICsgNSArIHJlbmRlckNvb3Jkcy54LFxuICAgICAgICBwb3NpdGlvbi55ICsgNSArIHJlbmRlckNvb3Jkcy55XG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIGRyYXdEZWJ1ZyhjdHgsIHBoYXNlLCByZW5kZXJDb29yZHMsIGNoYXJhY3RlcnMsIG1hcE9mZnNldCkge1xuICAgIHZhciBzaW5rO1xuICAgIHZhciBjaGFyYWN0ZXI7XG4gICAgdmFyIHg7XG4gICAgdmFyIHk7XG4gICAgdmFyIHdhbGtTdXJmYWNlID0gcGhhc2Uud2Fsa1N1cmZhY2U7XG5cbiAgICBmb3IodmFyIHNpbmtOYW1lIGluIHBoYXNlLnNpbmtzKSB7XG4gICAgICAgIHNpbmsgPSBwaGFzZS5zaW5rc1tzaW5rTmFtZV07XG4gICAgICAgIHggPSBzaW5rLnggKyByZW5kZXJDb29yZHMueCAtIG1hcE9mZnNldC54O1xuICAgICAgICB5ID0gc2luay55ICsgcmVuZGVyQ29vcmRzLnkgLSBtYXBPZmZzZXQueTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwgMCwgMCwgMC41KSc7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCBzaW5rLndpZHRoLCBzaW5rLmhlaWdodCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwgMjU1LCAyNTUpJztcbiAgICAgICAgY3R4LmZpbGxUZXh0KHNpbmtOYW1lLCB4ICsgMSwgeSArIDEpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsIDI1NSwgMjU1KSc7XG4gICAgICAgIGN0eC5maWxsVGV4dChzaW5rTmFtZSwgeCAtIDEsIHkgLSAxKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMCwgMCwgMCknO1xuICAgICAgICBjdHguZmlsbFRleHQoc2lua05hbWUsIHgsIHkpO1xuICAgIH1cblxuICAgIGZvcih2YXIgY2hhcmFjdGVyTmFtZSBpbiBjaGFyYWN0ZXJzKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IGNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV07XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2IoMCwgMjU1LCAwKSc7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KFxuICAgICAgICAgICAgcmVuZGVyQ29vcmRzLnggKyBjaGFyYWN0ZXIueCAtIG1hcE9mZnNldC54LFxuICAgICAgICAgICAgcmVuZGVyQ29vcmRzLnkgKyBjaGFyYWN0ZXIueSAtIG1hcE9mZnNldC55LFxuICAgICAgICAgICAgY2hhcmFjdGVyLndpZHRoLCBjaGFyYWN0ZXIuaGVpZ2h0XG4gICAgICAgICAgICApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgY3R4LmZpbGxUZXh0KFxuICAgICAgICAgICAgJ1snICsgY2hhcmFjdGVyLnggKyAnLCAnICsgY2hhcmFjdGVyLnkgKyAnXScsXG4gICAgICAgICAgICBjaGFyYWN0ZXIueCArIHJlbmRlckNvb3Jkcy54IC0gbWFwT2Zmc2V0LngsXG4gICAgICAgICAgICBjaGFyYWN0ZXIueSArIHJlbmRlckNvb3Jkcy55IC0gbWFwT2Zmc2V0LnlcbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDAsIDAuMyknO1xuICAgIGN0eC5tb3ZlVG8oXG4gICAgICAgIHJlbmRlckNvb3Jkcy54ICsgd2Fsa1N1cmZhY2VbMF0ueCAtIG1hcE9mZnNldC54LFxuICAgICAgICByZW5kZXJDb29yZHMueSArIHdhbGtTdXJmYWNlWzBdLnkgLSBtYXBPZmZzZXQueVxuICAgICAgICApO1xuXG4gICAgd2Fsa1N1cmZhY2Uuc2xpY2UoMSkuZm9yRWFjaChmdW5jdGlvbihwb2ludCkge1xuICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgICAgcmVuZGVyQ29vcmRzLnggKyBwb2ludC54IC0gbWFwT2Zmc2V0LngsXG4gICAgICAgICAgICByZW5kZXJDb29yZHMueSArIHBvaW50LnkgLSBtYXBPZmZzZXQueVxuICAgICAgICAgICAgKTtcbiAgICB9KTtcbiAgICBjdHguZmlsbCgpO1xufVxuXG5mdW5jdGlvbiBnZXRNYXBPZmZzZXQoeCwgeSwgbWFwV2lkdGgpIHtcbiAgICB2YXIgcmVzdWx0ID0ge3g6MCwgeTowfTtcbiAgICBpZih4ID4gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikpIHtcbiAgICAgICAgcmVzdWx0LnggPSBNYXRoLm1pbih4IC0gd2luZG93LmlubmVyV2lkdGggLyAyLCBtYXBXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gaXNWaXNpYmxlKGNoYXJhY3RlciwgY3VycmVudE1hcE9mZnNldCkge1xuICAgIGlmKFxuICAgICAgICAoY2hhcmFjdGVyLnggKyBjaGFyYWN0ZXIud2lkdGggLSBjdXJyZW50TWFwT2Zmc2V0LngpID4gMCAmJlxuICAgICAgICAoY2hhcmFjdGVyLnggLSBjdXJyZW50TWFwT2Zmc2V0LngpIDwgd2luZG93LmlubmVyV2lkdGhcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRnJhbWVzKHRpbWUsIGltYWdlcywgY2hhcmFjdGVycywgc3ByaXRlcykge1xuICAgIGlmKCFsYXN0RnJhbWVVcGRhdGUpIHtcbiAgICAgICAgbGFzdEZyYW1lVXBkYXRlID0gdGltZTtcbiAgICB9XG4gICAgaWYoKHRpbWUgLSBsYXN0RnJhbWVVcGRhdGUpIDwgKDEwMDAgLyAxMikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhjaGFyYWN0ZXJzKVxuICAgICAgICAubWFwKGZ1bmN0aW9uKGNoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdO1xuICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGNoYXJhY3Rlcikge1xuICAgICAgICAgICAgY2hhcmFjdGVyLnBoYXNlID0gKGNoYXJhY3Rlci5waGFzZSArIDEpICUgKGltYWdlc1tzcHJpdGVzW2NoYXJhY3Rlci5zcHJpdGVzXVtjaGFyYWN0ZXIuYWN0aW9uXV0ud2lkdGggLyBjaGFyYWN0ZXIud2lkdGgpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIGxhc3RGcmFtZVVwZGF0ZSA9IHRpbWU7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcih0aW1lLCBob3N0KSB7XG4gICAgdXBkYXRlRnJhbWVzKHRpbWUsIGhvc3QuaW1hZ2VzLCBob3N0LmNoYXJhY3RlcnMsIGhvc3QuZ2FtZVN0cnVjdHVyZS5zcHJpdGVzKTtcbiAgICBpZigodGltZSAtIGhvc3QubGFzdERyYXcpIDwgNDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY3VycmVudFBoYXNlID0gaG9zdC5nZXRDdXJyZW50UGhhc2UoKTtcbiAgICB2YXIgcmVuZGVyQ29vcmRzID0ge1xuICAgICAgICB3aWR0aDogY3VycmVudFBoYXNlLnJlbmRlcldpZHRoIHx8IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IGN1cnJlbnRQaGFzZS5yZW5kZXJIZWlnaHQgfHwgd2luZG93LmlubmVySGVpZ2h0XG4gICAgfTtcblxuICAgIHJlbmRlckNvb3Jkcy54ID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gcmVuZGVyQ29vcmRzLndpZHRoKSAvIDI7XG4gICAgcmVuZGVyQ29vcmRzLnkgPSAod2luZG93LmlubmVySGVpZ2h0IC0gcmVuZGVyQ29vcmRzLmhlaWdodCkgLyAyO1xuXG4gICAgdmFyIGN1cnJlbnRNYXBPZmZzZXQgPSBnZXRNYXBPZmZzZXQoXG4gICAgICAgIGhvc3QuY2hhcmFjdGVycy5tZS54LFxuICAgICAgICBob3N0LmNoYXJhY3RlcnMubWUueSxcbiAgICAgICAgY3VycmVudFBoYXNlLm1hcFdpZHRoXG4gICAgICAgICk7XG4gICAgdmFyIHBsYW5lcyA9IGN1cnJlbnRQaGFzZS5yZW5kZXJpbmcucGxhbmVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gYS56IC0gYi56O1xuICAgIH0pO1xuXG4gICAgdmFyIGJhY2tncm91bmRQbGFuZXMgPSBwbGFuZXMuZmlsdGVyKGZ1bmN0aW9uKHBsYW5lKSB7cmV0dXJuIHBsYW5lLnogPD0gMTt9KTtcbiAgICB2YXIgZm9yZWdyb3VuZFBsYW5lcyA9IHBsYW5lcy5maWx0ZXIoZnVuY3Rpb24ocGxhbmUpIHtyZXR1cm4gcGxhbmUueiA+IDE7fSk7XG4gICAgXG4gICAgaG9zdC5jdHguY2xlYXJSZWN0KDAsIDAsIGhvc3QuY3R4LmNhbnZhcy53aWR0aCwgaG9zdC5jdHguY2FudmFzLmhlaWdodCk7XG4gICAgXG4gICAgZHJhd1BsYW5lcyhcbiAgICAgICAgaG9zdC5jdHgsXG4gICAgICAgIGN1cnJlbnRNYXBPZmZzZXQsXG4gICAgICAgIGhvc3QuaW1hZ2VzLFxuICAgICAgICBjdXJyZW50UGhhc2UubWFwV2lkdGgsXG4gICAgICAgIHJlbmRlckNvb3JkcyxcbiAgICAgICAgYmFja2dyb3VuZFBsYW5lc1xuICAgICAgICApO1xuXG4gICAgZHJhd0NoYXJhY3RlcnMoXG4gICAgICAgIGhvc3QsXG4gICAgICAgIGN1cnJlbnRNYXBPZmZzZXQsXG4gICAgICAgIHJlbmRlckNvb3Jkc1xuICAgICAgICApO1xuXG4gICAgZHJhd1BsYW5lcyhcbiAgICAgICAgaG9zdC5jdHgsXG4gICAgICAgIGN1cnJlbnRNYXBPZmZzZXQsXG4gICAgICAgIGhvc3QuaW1hZ2VzLFxuICAgICAgICBjdXJyZW50UGhhc2UubWFwV2lkdGgsXG4gICAgICAgIHJlbmRlckNvb3JkcyxcbiAgICAgICAgZm9yZWdyb3VuZFBsYW5lc1xuICAgICAgICApO1xuXG4gICAgaWYoJ2N1cnJlbnRMaW5lJyBpbiBjdXJyZW50UGhhc2UgJiYgY3VycmVudFBoYXNlLmN1cnJlbnRMaW5lICE9PSBudWxsKSB7XG4gICAgICAgIGRyYXdEaWFsb2d1ZShcbiAgICAgICAgICAgIGhvc3QuY3R4LFxuICAgICAgICAgICAgY3VycmVudFBoYXNlLmxpbmVzW2N1cnJlbnRQaGFzZS5jdXJyZW50TGluZV0sXG4gICAgICAgICAgICBjdXJyZW50UGhhc2UuZGVmYXVsdFByb3BlcnRpZXMsXG4gICAgICAgICAgICByZW5kZXJDb29yZHMsXG4gICAgICAgICAgICBob3N0LmNoYXJhY3RlcnNbY3VycmVudFBoYXNlLmxpbmVzW2N1cnJlbnRQaGFzZS5jdXJyZW50TGluZV0ud2hvXSxcbiAgICAgICAgICAgIGN1cnJlbnRNYXBPZmZzZXRcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYoaG9zdC5kZWJ1Zykge1xuICAgICAgICBkcmF3RGVidWcoaG9zdC5jdHgsIGN1cnJlbnRQaGFzZSwgcmVuZGVyQ29vcmRzLCBob3N0LmNoYXJhY3RlcnMsIGN1cnJlbnRNYXBPZmZzZXQpO1xuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlbmRlcjtcbiIsImZ1bmN0aW9uIHJlbmRlcih0aW1lLCBob3N0KSB7XG4gICAgdmFyIGN1cnJlbnRQaGFzZSA9IGhvc3QucGhhc2VJbnN0YW5jZXNbaG9zdC5waGFzZU5hbWVdO1xuICAgIHZhciBjdHggPSBob3N0LmN0eDtcbiAgICB2YXIgd2lkdGggPSBjdHguY2FudmFzLndpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBjdHguY2FudmFzLmhlaWdodDtcbiAgICB2YXIgcmVuZGVyaW5nRGF0YSA9IGhvc3QuZ2FtZVN0cnVjdHVyZS5waGFzZXNbaG9zdC5waGFzZU5hbWVdLnJlbmRlcmluZztcblxuICAgIGN0eC5maWxsU3R5bGUgPSByZW5kZXJpbmdEYXRhLmJhY2tncm91bmRDb2xvciB8fCAnYmxhY2snO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBpZihyZW5kZXJpbmdEYXRhLmltYWdlKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IGhvc3QuaW1hZ2VzW3JlbmRlcmluZ0RhdGEuaW1hZ2VdO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZihyZW5kZXJpbmdEYXRhLnRleHQpIHtcbiAgICAgICAgY3R4LmZvbnQgPSAnbm9ybWFsIDQ0cHQgaGVsdmV0aWNhJyB8fCByZW5kZXJpbmdEYXRhLmZvbnQ7XG4gICAgICAgIHZhciBtZXRyaWNzID0gY3R4Lm1lYXN1cmVUZXh0KHJlbmRlcmluZ0RhdGEudGV4dCk7XG4gICAgICAgIHZhciB4ID0gKGN0eC5jYW52YXMud2lkdGggLSBtZXRyaWNzLndpZHRoKSAvIDI7XG4gICAgICAgIHZhciB5ID0gKGN0eC5jYW52YXMuaGVpZ2h0IC8gMik7XG5cblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gcmVuZGVyaW5nRGF0YS5jb2xvciB8fCAnd2hpdGUnO1xuICAgICAgICBjdHguZmlsbFRleHQocmVuZGVyaW5nRGF0YS50ZXh0LCB4LCB5KTtcbiAgICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSByZW5kZXI7XG4iLCJ2YXIgUlNWUCA9IHJlcXVpcmUoJ3JzdnAnKTtcblxudmFyIFV0aWxzID0gcmVxdWlyZSgndXRpbHMnKTtcbnZhciBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG52YXIgQ2hhcmFjdGVyID0gcmVxdWlyZSgnLi9jaGFyYWN0ZXInKTtcblxuXG52YXIgZ2FtZXBsYXlzID0ge1xuICAgIERpYWxvZ3VlOiByZXF1aXJlKCcuL2dhbWVwbGF5L2RpYWxvZ3VlJyksXG4gICAgV2FuZGVyOiByZXF1aXJlKCcuL2dhbWVwbGF5L3dhbmRlcicpLFxuICAgIFByZXNzQW55S2V5OiByZXF1aXJlKCcuL2dhbWVwbGF5L3ByZXNzLWFueS1rZXknKSxcbiAgICBkZWZhdWx0OiByZXF1aXJlKCcuL2dhbWVwbGF5L2RlZmF1bHQnKVxufTtcblxudmFyIHJlbmRlcmVycyA9IHtcbiAgICBQb2ludE5DbGljazogcmVxdWlyZSgnLi9yZW5kZXJlcnMvcG9pbnQtbi1jbGljaycpLFxuICAgIHRpdGxlOiByZXF1aXJlKCcuL3JlbmRlcmVycy90aXRsZScpLFxuICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge31cbn07XG5cblxuZnVuY3Rpb24gR2FtZShjYW52YXMsIGdhbWVTdHJ1Y3R1cmUpIHtcbiAgICB0aGlzLnBoYXNlTmFtZSA9IG51bGw7XG4gICAgdGhpcy5jaGFyYWN0ZXJzID0ge307XG4gICAgdGhpcy5nYW1lU3RydWN0dXJlID0gZ2FtZVN0cnVjdHVyZTtcbiAgICB0aGlzLnBoYXNlSW5zdGFuY2VzID0ge307XG4gICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRIYW5kbGVycyA9IHt9O1xuICAgIHRoaXMubGFzdFVwZGF0ZSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy5pbWFnZXMgPSB7fTtcbiAgICB0aGlzLmRlYnVnID0gdGhpcy5nYW1lU3RydWN0dXJlLmRlYnVnO1xuICAgIHRoaXMua2V5cyA9IGtleXM7XG4gICAgdGhpcy5nYW1lQ2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuZ2FtZUNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuZ2FtZUNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5jdHggPSB0aGlzLmdhbWVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09ICdJJy5jaGFyQ29kZUF0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYnVnID0gIXRoaXMuZGVidWc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmtleXNbZXZlbnQua2V5Q29kZV0gPSB0cnVlO1xuICAgICAgICAgICAgaWYoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleXMuc2hpZnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5yZWdpc3RlcmVkRXZlbnRIYW5kbGVycy5rZXlkb3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRIYW5kbGVycy5rZXlkb3duKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmtleUNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgICBpZighZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleXMuc2hpZnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucmVnaXN0ZXJlZEV2ZW50SGFuZGxlcnMua2V5dXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudEhhbmRsZXJzLmtleXVwKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XG59XG5cbkdhbWUucHJvdG90eXBlID0ge1xuICAgIHN0YXJ0OiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ290b1BoYXNlKHRoaXMuZ2FtZVN0cnVjdHVyZS5lbnRyeSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXRDdXJyZW50UGhhc2U6IGZ1bmN0aW9uIGdldEN1cnJlbnRQaGFzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGhhc2VJbnN0YW5jZXNbdGhpcy5waGFzZU5hbWVdO1xuICAgIH0sXG5cbiAgICBnb3RvU2luazogZnVuY3Rpb24gZ290b1Npbmsoc2lua05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ290b1BoYXNlKHRoaXMuZ2FtZVN0cnVjdHVyZS5wbGFuW3RoaXMucGhhc2VOYW1lXVtzaW5rTmFtZV0pO1xuICAgIH0sXG5cbiAgICB1bnJlZ2lzdGVyRXZlbnRIYW5kbGVyczogZnVuY3Rpb24gdW5yZWdpc3RlckV2ZW50SGFuZGxlcnMocGhhc2UpIHtcbiAgICAgICAgdmFyIGV2ZW50SGFuZGxlcnMgPSBwaGFzZS5ldmVudEhhbmRsZXJzO1xuXG4gICAgICAgIGlmKCFldmVudEhhbmRsZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yKHZhciBldmVudE5hbWUgaW4gZXZlbnRIYW5kbGVycykge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVnaXN0ZXJlZEV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZWdpc3RlckV2ZW50SGFuZGxlcnM6IGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRIYW5kbGVyKHBoYXNlKSB7XG4gICAgICAgIHZhciBldmVudEhhbmRsZXJzID0gcGhhc2UuZXZlbnRIYW5kbGVycztcblxuICAgICAgICBpZighZXZlbnRIYW5kbGVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvcih2YXIgZXZlbnROYW1lIGluIGV2ZW50SGFuZGxlcnMpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSA9IGV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXS5iaW5kKHBoYXNlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBsb2FkSW1hZ2VzOiBmdW5jdGlvbiBsb2FkSW1hZ2VzKGltYWdlcykge1xuICAgICAgICByZXR1cm4gbmV3IFJTVlAuUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmKGltYWdlcykge1xuICAgICAgICAgICAgICAgIFV0aWxzLmxvYWRJbWFnZXMoaW1hZ2VzLCBmdW5jdGlvbihpbWdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW1ncyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXRIaWVyYXJjaHk6IGZ1bmN0aW9uIGdldEhpZXJhcmNoeShwaGFzZU5hbWUsIGNoaWxkcmVuKSB7XG4gICAgICAgIGlmKCFjaGlsZHJlbikge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudEhpZXJhcmNoeSA9IFtwaGFzZU5hbWVdLmNvbmNhdChjaGlsZHJlbik7XG4gICAgICAgIGlmKHRoaXMuZ2FtZVN0cnVjdHVyZS5waGFzZXNbcGhhc2VOYW1lXS5iYXNlZE9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRIaWVyYXJjaHkodGhpcy5nYW1lU3RydWN0dXJlLnBoYXNlc1twaGFzZU5hbWVdLmJhc2VkT24sIGN1cnJlbnRIaWVyYXJjaHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRIaWVyYXJjaHk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0RnVsbERlc2NyaXB0aW9uOiBmdW5jdGlvbiBnZXRGdWxsRGVzY3JpcHRpb24ocGhhc2VOYW1lKSB7XG4gICAgICAgIHZhciBoaWVyYXJjaHkgPSB0aGlzLmdldEhpZXJhcmNoeShwaGFzZU5hbWUpO1xuICAgICAgICByZXR1cm4gaGllcmFyY2h5LnJlZHVjZShmdW5jdGlvbihwaGFzZVNvRmFyLCBjdXJyZW50UGhhc2VOYW1lKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudERlc2NyaXB0aW9uID0gdGhpcy5nYW1lU3RydWN0dXJlLnBoYXNlc1tjdXJyZW50UGhhc2VOYW1lXTtcbiAgICAgICAgICAgIGZvcih2YXIgcHJvcGVydHlOYW1lIGluIGN1cnJlbnREZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIGlmKFxuICAgICAgICAgICAgICAgICAgICBwaGFzZVNvRmFyW3Byb3BlcnR5TmFtZV0gJiZcbiAgICAgICAgICAgICAgICAgICAgIShjdXJyZW50RGVzY3JpcHRpb24ubm9Jbmhlcml0ICYmIGN1cnJlbnREZXNjcmlwdGlvbi5ub0luaGVyaXRbcHJvcGVydHlOYW1lXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mKGN1cnJlbnREZXNjcmlwdGlvbltwcm9wZXJ0eU5hbWVdKSAhPT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcGhhc2VTb0Zhcltwcm9wZXJ0eU5hbWVdID0gVXRpbHMuZGVlcE1lcmdlKHBoYXNlU29GYXJbcHJvcGVydHlOYW1lXSwgY3VycmVudERlc2NyaXB0aW9uW3Byb3BlcnR5TmFtZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGhhc2VTb0Zhcltwcm9wZXJ0eU5hbWVdID0gY3VycmVudERlc2NyaXB0aW9uW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBoYXNlU29GYXI7XG4gICAgICAgIH0uYmluZCh0aGlzKSwge30pO1xuICAgIH0sXG5cbiAgICBmaWx0ZXJJbWFnZXNUb0xvYWQ6IGZ1bmN0aW9uIGZpbHRlckltYWdlc1RvTG9hZChwaGFzZSkge1xuICAgICAgICB2YXIgaW1hZ2VzVG9Mb2FkID0ge307XG4gICAgICAgIHZhciBpbWFnZU5hbWU7XG4gICAgICAgIHZhciBjaGFyYWN0ZXJOYW1lO1xuXG4gICAgICAgIGlmKHBoYXNlLnJlbmRlcmluZy5wbGFuZXMpIHtcbiAgICAgICAgICAgIHBoYXNlLnJlbmRlcmluZy5wbGFuZXMuZm9yRWFjaChmdW5jdGlvbihwbGFuZSl7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuaW1hZ2VzW3BsYW5lLmltYWdlXSkge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNUb0xvYWRbcGxhbmUuaW1hZ2VdID0gdGhpcy5nYW1lU3RydWN0dXJlLnBhdGhzW3BsYW5lLmltYWdlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocGhhc2UucmVuZGVyaW5nLmltYWdlKSB7XG4gICAgICAgICAgICBpZighdGhpcy5pbWFnZXNbcGhhc2UucmVuZGVyaW5nLmltYWdlXSkge1xuICAgICAgICAgICAgICAgIGltYWdlc1RvTG9hZFtwaGFzZS5yZW5kZXJpbmcuaW1hZ2VdID0gdGhpcy5nYW1lU3RydWN0dXJlLnBhdGhzW3BoYXNlLnJlbmRlcmluZy5pbWFnZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IoY2hhcmFjdGVyTmFtZSBpbiBwaGFzZS5jaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICBmb3IodmFyIHN0YXRlTmFtZSBpbiB0aGlzLmdhbWVTdHJ1Y3R1cmUuc3ByaXRlc1twaGFzZS5jaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdLnNwcml0ZXNdKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGhpcy5nYW1lU3RydWN0dXJlLnNwcml0ZXNbcGhhc2UuY2hhcmFjdGVyc1tjaGFyYWN0ZXJOYW1lXS5zcHJpdGVzXVtzdGF0ZU5hbWVdO1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmltYWdlc1tpbWFnZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc1RvTG9hZFtpbWFnZU5hbWVdID0gIHRoaXMuZ2FtZVN0cnVjdHVyZS5wYXRoc1tpbWFnZU5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbWFnZXNUb0xvYWQ7XG4gICAgfSxcblxuICAgIG1lcmdlSW1hZ2VzOiBmdW5jdGlvbiBtZXJnZUltYWdlcyhpbWFnZXMpIHtcbiAgICAgICAgdmFyIGltYWdlTmFtZTtcblxuICAgICAgICBmb3IoaW1hZ2VOYW1lIGluIGltYWdlcykge1xuICAgICAgICAgICAgdGhpcy5pbWFnZXNbaW1hZ2VOYW1lXSA9IGltYWdlc1tpbWFnZU5hbWVdO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZVdpdGhEZWZhdWx0czogZnVuY3Rpb24gdXBkYXRlV2l0aERlZmF1bHRzKHBoYXNlRGVzY3JpcHRpb24pIHtcbiAgICAgICAgaWYoIXBoYXNlRGVzY3JpcHRpb24uZ2FtZXBsYXlUeXBlKSB7XG4gICAgICAgICAgICBwaGFzZURlc2NyaXB0aW9uLmdhbWVwbGF5VHlwZSA9ICdkZWZhdWx0JztcbiAgICAgICAgfVxuICAgICAgICBpZighcGhhc2VEZXNjcmlwdGlvbi5yZW5kZXJpbmcpIHtcbiAgICAgICAgICAgIHBoYXNlRGVzY3JpcHRpb24ucmVuZGVyaW5nID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVmYXVsdFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdvdG9QaGFzZTogZnVuY3Rpb24gZ290b1BoYXNlKHBoYXNlTmFtZSkge1xuICAgICAgICB2YXIgcGhhc2VEZXNjcmlwdGlvbjtcbiAgICAgICAgdmFyIHByb3BlcnR5TmFtZTtcbiAgICAgICAgdGhpcy5jaGFuZ2luZ1BoYXNlID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gUlNWUC5Qcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5waGFzZUluc3RhbmNlc1t0aGlzLnBoYXNlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnJlZ2lzdGVyRXZlbnRIYW5kbGVycyh0aGlzLnBoYXNlSW5zdGFuY2VzW3RoaXMucGhhc2VOYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGhhc2VOYW1lID0gcGhhc2VOYW1lO1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmdhbWVTdHJ1Y3R1cmUucGhhc2VzW3RoaXMucGhhc2VOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhuZXcgRXJyb3IoJ05vIHBoYXNlIHdpdGggbmFtZSAnICsgcGhhc2VOYW1lKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBoYXNlRGVzY3JpcHRpb24gPSB0aGlzLmdldEZ1bGxEZXNjcmlwdGlvbih0aGlzLnBoYXNlTmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVXaXRoRGVmYXVsdHMocGhhc2VEZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlc1RvTG9hZCA9IHRoaXMuZmlsdGVySW1hZ2VzVG9Mb2FkKHBoYXNlRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKGltYWdlc1RvTG9hZCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRJbWFnZXMoaW1hZ2VzVG9Mb2FkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihpbWFnZXMpIHtcbiAgICAgICAgICAgICAgICBpZihpbWFnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXJnZUltYWdlcyhpbWFnZXMpO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICBcbiAgICAgICAgICAgICAgICBpZighdGhpcy5waGFzZUluc3RhbmNlc1twaGFzZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGhhc2VJbnN0YW5jZXNbcGhhc2VOYW1lXSA9IG5ldyBnYW1lcGxheXNbcGhhc2VEZXNjcmlwdGlvbi5nYW1lcGxheVR5cGVdKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBoYXNlSW5zdGFuY2VzW3BoYXNlTmFtZV0uaG9zdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGhhc2VJbnN0YW5jZXNbcGhhc2VOYW1lXS5uYW1lID0gcGhhc2VOYW1lO1xuICAgICAgICAgICAgICAgICAgICBmb3IocHJvcGVydHlOYW1lIGluIHBoYXNlRGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKFsnaW1hZ2VzJywgJ2dhbWVwbGF5VHlwZSddLmluZGV4T2YocHJvcGVydHlOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBoYXNlSW5zdGFuY2VzW3BoYXNlTmFtZV1bcHJvcGVydHlOYW1lXSA9IHBoYXNlRGVzY3JpcHRpb25bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihwaGFzZURlc2NyaXB0aW9uLmNoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYXJhY3RlckRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhcmFjdGVyTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGNoYXJhY3Rlck5hbWUgaW4gcGhhc2VEZXNjcmlwdGlvbi5jaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5jaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyRGVzY3JpcHRpb24gPSBwaGFzZURlc2NyaXB0aW9uLmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdID0gbmV3IENoYXJhY3RlcihjaGFyYWN0ZXJEZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IocHJvcGVydHlOYW1lIGluIHBoYXNlRGVzY3JpcHRpb24uY2hhcmFjdGVyc1tjaGFyYWN0ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV1bcHJvcGVydHlOYW1lXSA9IHBoYXNlRGVzY3JpcHRpb24uY2hhcmFjdGVyc1tjaGFyYWN0ZXJOYW1lXVtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IoY2hhcmFjdGVyTmFtZSBpbiB0aGlzLmNoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFwaGFzZURlc2NyaXB0aW9uLmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5jaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5waGFzZUluc3RhbmNlc1twaGFzZU5hbWVdLmluaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waGFzZUluc3RhbmNlc1twaGFzZU5hbWVdLmluaXQocGhhc2VOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50SGFuZGxlcnModGhpcy5waGFzZUluc3RhbmNlc1t0aGlzLnBoYXNlTmFtZV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcnNbdGhpcy5waGFzZUluc3RhbmNlc1t0aGlzLnBoYXNlTmFtZV0ucmVuZGVyaW5nLnR5cGVdO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdpbmdQaGFzZSA9IGZhbHNlO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcmVuZGVyRGVidWc6IGZ1bmN0aW9uIHJlbmRlckRlYnVnKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ25vcm1hbCAxNHB0IGhlbHZldGljYSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMucGhhc2VOYW1lLCAxMCwgMjQpO1xuICAgIH0sXG5cbiAgICBsb29wOiBmdW5jdGlvbiBsb29wKHRpbWUpIHtcbiAgICAgICAgaWYoIXRoaXMuY2hhbmdpbmdQaGFzZSAmJiB0aGlzLnJlbmRlcmVyKSB7XG4gICAgICAgICAgICBpZighdGhpcy5sYXN0VXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gdGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucGhhc2VJbnN0YW5jZXNbdGhpcy5waGFzZU5hbWVdLnVwZGF0ZSh0aW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFVwZGF0ZSA9IHRpbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCF0aGlzLmxhc3REcmF3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0RHJhdyA9IHRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLnJlbmRlcmVyKHRpbWUsIHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0RHJhdyA9IHRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLmRlYnVnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJEZWJ1ZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTtcbiIsInZhciBiZWhhdmlvdXJzID0ge1xuICAgICd3YWxrZXInOiAgcmVxdWlyZSgnLi93YWxrZXInKVxufTtcblxuXG5mdW5jdGlvbiBDaGFyYWN0ZXIoZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmluaXQoZGVzY3JpcHRpb24pOyAgICBcbn1cblxuQ2hhcmFjdGVyLnByb3RvdHlwZSA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gJ2lkbGUnO1xuICAgICAgICB0aGlzLnBoYXNlID0gMDtcbiAgICAgICAgdGhpcy5keCA9IDA7XG4gICAgICAgIHRoaXMuZHkgPSAwO1xuXG4gICAgICAgIGZvcih2YXIgcHJvcGVydHkgaW4gZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkocHJvcGVydHksIGRlc2NyaXB0aW9uW3Byb3BlcnR5XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5iZWhhdmlvdXIpIHtcbiAgICAgICAgICAgIHRoaXMuYmVoYXZpb3VyID0gbmV3IGJlaGF2aW91cnNbdGhpcy5iZWhhdmlvdXIudHlwZV0odGhpcy5iZWhhdmlvdXIsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNldFByb3BlcnR5OiBmdW5jdGlvbiBzZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZih0aGlzW25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ2FjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBoYXNlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXI7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iLCIoZnVuY3Rpb24ocHJvY2Vzcyl7LyohXG4gKiBAb3ZlcnZpZXcgUlNWUCAtIGEgdGlueSBpbXBsZW1lbnRhdGlvbiBvZiBQcm9taXNlcy9BKy5cbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE0IFllaHVkYSBLYXR6LCBUb20gRGFsZSwgU3RlZmFuIFBlbm5lciBhbmQgY29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIExpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG4gKiAgICAgICAgICAgIFNlZSBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGlsZGVpby9yc3ZwLmpzL21hc3Rlci9MSUNFTlNFXG4gKiBAdmVyc2lvbiAgIDMuMC4xOFxuICovXG5cbihmdW5jdGlvbigpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCR1dGlscyQkb2JqZWN0T3JGdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCR1dGlscyQkaXNGdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkdXRpbHMkJGlzTWF5YmVUaGVuYWJsZSh4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJHV0aWxzJCRfaXNBcnJheTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkpIHtcbiAgICAgIGxpYiRyc3ZwJHV0aWxzJCRfaXNBcnJheSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWIkcnN2cCR1dGlscyQkX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCR1dGlscyQkaXNBcnJheSA9IGxpYiRyc3ZwJHV0aWxzJCRfaXNBcnJheTtcblxuICAgIHZhciBsaWIkcnN2cCR1dGlscyQkbm93ID0gRGF0ZS5ub3cgfHwgZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfTtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHV0aWxzJCRGKCkgeyB9XG5cbiAgICB2YXIgbGliJHJzdnAkdXRpbHMkJG9fY3JlYXRlID0gKE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG8gIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgICB9XG4gICAgICBsaWIkcnN2cCR1dGlscyQkRi5wcm90b3R5cGUgPSBvO1xuICAgICAgcmV0dXJuIG5ldyBsaWIkcnN2cCR1dGlscyQkRigpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGV2ZW50cyQkaW5kZXhPZihjYWxsYmFja3MsIGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBpPTAsIGw9Y2FsbGJhY2tzLmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrc1tpXSA9PT0gY2FsbGJhY2spIHsgcmV0dXJuIGk7IH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGV2ZW50cyQkY2FsbGJhY2tzRm9yKG9iamVjdCkge1xuICAgICAgdmFyIGNhbGxiYWNrcyA9IG9iamVjdC5fcHJvbWlzZUNhbGxiYWNrcztcblxuICAgICAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICAgICAgY2FsbGJhY2tzID0gb2JqZWN0Ll9wcm9taXNlQ2FsbGJhY2tzID0ge307XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYWxsYmFja3M7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJGV2ZW50cyQkZGVmYXVsdCA9IHtcblxuICAgICAgLyoqXG4gICAgICAgIGBSU1ZQLkV2ZW50VGFyZ2V0Lm1peGluYCBleHRlbmRzIGFuIG9iamVjdCB3aXRoIEV2ZW50VGFyZ2V0IG1ldGhvZHMuIEZvclxuICAgICAgICBFeGFtcGxlOlxuXG4gICAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgICAgdmFyIG9iamVjdCA9IHt9O1xuXG4gICAgICAgIFJTVlAuRXZlbnRUYXJnZXQubWl4aW4ob2JqZWN0KTtcblxuICAgICAgICBvYmplY3Qub24oJ2ZpbmlzaGVkJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAvLyBoYW5kbGUgZXZlbnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JqZWN0LnRyaWdnZXIoJ2ZpbmlzaGVkJywgeyBkZXRhaWw6IHZhbHVlIH0pO1xuICAgICAgICBgYGBcblxuICAgICAgICBgRXZlbnRUYXJnZXQubWl4aW5gIGFsc28gd29ya3Mgd2l0aCBwcm90b3R5cGVzOlxuXG4gICAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgICAgdmFyIFBlcnNvbiA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgIFJTVlAuRXZlbnRUYXJnZXQubWl4aW4oUGVyc29uLnByb3RvdHlwZSk7XG5cbiAgICAgICAgdmFyIHllaHVkYSA9IG5ldyBQZXJzb24oKTtcbiAgICAgICAgdmFyIHRvbSA9IG5ldyBQZXJzb24oKTtcblxuICAgICAgICB5ZWh1ZGEub24oJ3Bva2UnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdZZWh1ZGEgc2F5cyBPVycpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b20ub24oJ3Bva2UnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdUb20gc2F5cyBPVycpO1xuICAgICAgICB9KTtcblxuICAgICAgICB5ZWh1ZGEudHJpZ2dlcigncG9rZScpO1xuICAgICAgICB0b20udHJpZ2dlcigncG9rZScpO1xuICAgICAgICBgYGBcblxuICAgICAgICBAbWV0aG9kIG1peGluXG4gICAgICAgIEBmb3IgUlNWUC5FdmVudFRhcmdldFxuICAgICAgICBAcHJpdmF0ZVxuICAgICAgICBAcGFyYW0ge09iamVjdH0gb2JqZWN0IG9iamVjdCB0byBleHRlbmQgd2l0aCBFdmVudFRhcmdldCBtZXRob2RzXG4gICAgICAqL1xuICAgICAgJ21peGluJzogZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIG9iamVjdFsnb24nXSAgICAgID0gdGhpc1snb24nXTtcbiAgICAgICAgb2JqZWN0WydvZmYnXSAgICAgPSB0aGlzWydvZmYnXTtcbiAgICAgICAgb2JqZWN0Wyd0cmlnZ2VyJ10gPSB0aGlzWyd0cmlnZ2VyJ107XG4gICAgICAgIG9iamVjdC5fcHJvbWlzZUNhbGxiYWNrcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSBleGVjdXRlZCB3aGVuIGBldmVudE5hbWVgIGlzIHRyaWdnZXJlZFxuXG4gICAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgICAgb2JqZWN0Lm9uKCdldmVudCcsIGZ1bmN0aW9uKGV2ZW50SW5mbyl7XG4gICAgICAgICAgLy8gaGFuZGxlIHRoZSBldmVudFxuICAgICAgICB9KTtcblxuICAgICAgICBvYmplY3QudHJpZ2dlcignZXZlbnQnKTtcbiAgICAgICAgYGBgXG5cbiAgICAgICAgQG1ldGhvZCBvblxuICAgICAgICBAZm9yIFJTVlAuRXZlbnRUYXJnZXRcbiAgICAgICAgQHByaXZhdGVcbiAgICAgICAgQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSBuYW1lIG9mIHRoZSBldmVudCB0byBsaXN0ZW4gZm9yXG4gICAgICAgIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBldmVudCBpcyB0cmlnZ2VyZWQuXG4gICAgICAqL1xuICAgICAgJ29uJzogZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgYWxsQ2FsbGJhY2tzID0gbGliJHJzdnAkZXZlbnRzJCRjYWxsYmFja3NGb3IodGhpcyksIGNhbGxiYWNrcztcblxuICAgICAgICBjYWxsYmFja3MgPSBhbGxDYWxsYmFja3NbZXZlbnROYW1lXTtcblxuICAgICAgICBpZiAoIWNhbGxiYWNrcykge1xuICAgICAgICAgIGNhbGxiYWNrcyA9IGFsbENhbGxiYWNrc1tldmVudE5hbWVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGliJHJzdnAkZXZlbnRzJCRpbmRleE9mKGNhbGxiYWNrcywgY2FsbGJhY2spID09PSAtMSkge1xuICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgIFlvdSBjYW4gdXNlIGBvZmZgIHRvIHN0b3AgZmlyaW5nIGEgcGFydGljdWxhciBjYWxsYmFjayBmb3IgYW4gZXZlbnQ6XG5cbiAgICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgICBmdW5jdGlvbiBkb1N0dWZmKCkgeyAvLyBkbyBzdHVmZiEgfVxuICAgICAgICBvYmplY3Qub24oJ3N0dWZmJywgZG9TdHVmZik7XG5cbiAgICAgICAgb2JqZWN0LnRyaWdnZXIoJ3N0dWZmJyk7IC8vIGRvU3R1ZmYgd2lsbCBiZSBjYWxsZWRcblxuICAgICAgICAvLyBVbnJlZ2lzdGVyIE9OTFkgdGhlIGRvU3R1ZmYgY2FsbGJhY2tcbiAgICAgICAgb2JqZWN0Lm9mZignc3R1ZmYnLCBkb1N0dWZmKTtcbiAgICAgICAgb2JqZWN0LnRyaWdnZXIoJ3N0dWZmJyk7IC8vIGRvU3R1ZmYgd2lsbCBOT1QgYmUgY2FsbGVkXG4gICAgICAgIGBgYFxuXG4gICAgICAgIElmIHlvdSBkb24ndCBwYXNzIGEgYGNhbGxiYWNrYCBhcmd1bWVudCB0byBgb2ZmYCwgQUxMIGNhbGxiYWNrcyBmb3IgdGhlXG4gICAgICAgIGV2ZW50IHdpbGwgbm90IGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGV2ZW50IGZpcmVzLiBGb3IgZXhhbXBsZTpcblxuICAgICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICAgIHZhciBjYWxsYmFjazEgPSBmdW5jdGlvbigpe307XG4gICAgICAgIHZhciBjYWxsYmFjazIgPSBmdW5jdGlvbigpe307XG5cbiAgICAgICAgb2JqZWN0Lm9uKCdzdHVmZicsIGNhbGxiYWNrMSk7XG4gICAgICAgIG9iamVjdC5vbignc3R1ZmYnLCBjYWxsYmFjazIpO1xuXG4gICAgICAgIG9iamVjdC50cmlnZ2VyKCdzdHVmZicpOyAvLyBjYWxsYmFjazEgYW5kIGNhbGxiYWNrMiB3aWxsIGJlIGV4ZWN1dGVkLlxuXG4gICAgICAgIG9iamVjdC5vZmYoJ3N0dWZmJyk7XG4gICAgICAgIG9iamVjdC50cmlnZ2VyKCdzdHVmZicpOyAvLyBjYWxsYmFjazEgYW5kIGNhbGxiYWNrMiB3aWxsIG5vdCBiZSBleGVjdXRlZCFcbiAgICAgICAgYGBgXG5cbiAgICAgICAgQG1ldGhvZCBvZmZcbiAgICAgICAgQGZvciBSU1ZQLkV2ZW50VGFyZ2V0XG4gICAgICAgIEBwcml2YXRlXG4gICAgICAgIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWUgZXZlbnQgdG8gc3RvcCBsaXN0ZW5pbmcgdG9cbiAgICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgb3B0aW9uYWwgYXJndW1lbnQuIElmIGdpdmVuLCBvbmx5IHRoZSBmdW5jdGlvblxuICAgICAgICBnaXZlbiB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgZXZlbnQncyBjYWxsYmFjayBxdWV1ZS4gSWYgbm8gYGNhbGxiYWNrYFxuICAgICAgICBhcmd1bWVudCBpcyBnaXZlbiwgYWxsIGNhbGxiYWNrcyB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgZXZlbnQncyBjYWxsYmFja1xuICAgICAgICBxdWV1ZS5cbiAgICAgICovXG4gICAgICAnb2ZmJzogZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgYWxsQ2FsbGJhY2tzID0gbGliJHJzdnAkZXZlbnRzJCRjYWxsYmFja3NGb3IodGhpcyksIGNhbGxiYWNrcywgaW5kZXg7XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgIGFsbENhbGxiYWNrc1tldmVudE5hbWVdID0gW107XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2tzID0gYWxsQ2FsbGJhY2tzW2V2ZW50TmFtZV07XG5cbiAgICAgICAgaW5kZXggPSBsaWIkcnN2cCRldmVudHMkJGluZGV4T2YoY2FsbGJhY2tzLCBjYWxsYmFjayk7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkgeyBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTsgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgIFVzZSBgdHJpZ2dlcmAgdG8gZmlyZSBjdXN0b20gZXZlbnRzLiBGb3IgZXhhbXBsZTpcblxuICAgICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICAgIG9iamVjdC5vbignZm9vJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZm9vIGV2ZW50IGhhcHBlbmVkIScpO1xuICAgICAgICB9KTtcbiAgICAgICAgb2JqZWN0LnRyaWdnZXIoJ2ZvbycpO1xuICAgICAgICAvLyAnZm9vIGV2ZW50IGhhcHBlbmVkIScgbG9nZ2VkIHRvIHRoZSBjb25zb2xlXG4gICAgICAgIGBgYFxuXG4gICAgICAgIFlvdSBjYW4gYWxzbyBwYXNzIGEgdmFsdWUgYXMgYSBzZWNvbmQgYXJndW1lbnQgdG8gYHRyaWdnZXJgIHRoYXQgd2lsbCBiZVxuICAgICAgICBwYXNzZWQgYXMgYW4gYXJndW1lbnQgdG8gYWxsIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIGV2ZW50OlxuXG4gICAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgICAgb2JqZWN0Lm9uKCdmb28nLCBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgY29uc29sZS5sb2codmFsdWUubmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9iamVjdC50cmlnZ2VyKCdmb28nLCB7IG5hbWU6ICdiYXInIH0pO1xuICAgICAgICAvLyAnYmFyJyBsb2dnZWQgdG8gdGhlIGNvbnNvbGVcbiAgICAgICAgYGBgXG5cbiAgICAgICAgQG1ldGhvZCB0cmlnZ2VyXG4gICAgICAgIEBmb3IgUlNWUC5FdmVudFRhcmdldFxuICAgICAgICBAcHJpdmF0ZVxuICAgICAgICBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGJlIHRyaWdnZXJlZFxuICAgICAgICBAcGFyYW0ge0FueX0gb3B0aW9ucyBvcHRpb25hbCB2YWx1ZSB0byBiZSBwYXNzZWQgdG8gYW55IGV2ZW50IGhhbmRsZXJzIGZvclxuICAgICAgICB0aGUgZ2l2ZW4gYGV2ZW50TmFtZWBcbiAgICAgICovXG4gICAgICAndHJpZ2dlcic6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgYWxsQ2FsbGJhY2tzID0gbGliJHJzdnAkZXZlbnRzJCRjYWxsYmFja3NGb3IodGhpcyksIGNhbGxiYWNrcywgY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrcyA9IGFsbENhbGxiYWNrc1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgLy8gRG9uJ3QgY2FjaGUgdGhlIGNhbGxiYWNrcy5sZW5ndGggc2luY2UgaXQgbWF5IGdyb3dcbiAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8Y2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrc1tpXTtcblxuICAgICAgICAgICAgY2FsbGJhY2sob3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBsaWIkcnN2cCRjb25maWckJGNvbmZpZyA9IHtcbiAgICAgIGluc3RydW1lbnQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGxpYiRyc3ZwJGV2ZW50cyQkZGVmYXVsdFsnbWl4aW4nXShsaWIkcnN2cCRjb25maWckJGNvbmZpZyk7XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRjb25maWckJGNvbmZpZ3VyZShuYW1lLCB2YWx1ZSkge1xuICAgICAgaWYgKG5hbWUgPT09ICdvbmVycm9yJykge1xuICAgICAgICAvLyBoYW5kbGUgZm9yIGxlZ2FjeSB1c2VycyB0aGF0IGV4cGVjdCB0aGUgYWN0dWFsXG4gICAgICAgIC8vIGVycm9yIHRvIGJlIHBhc3NlZCB0byB0aGVpciBmdW5jdGlvbiBhZGRlZCB2aWFcbiAgICAgICAgLy8gYFJTVlAuY29uZmlndXJlKCdvbmVycm9yJywgc29tZUZ1bmN0aW9uSGVyZSk7YFxuICAgICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZ1snb24nXSgnZXJyb3InLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWdbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsaWIkcnN2cCRjb25maWckJGNvbmZpZ1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkaW5zdHJ1bWVudCQkcXVldWUgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGluc3RydW1lbnQkJHNjaGVkdWxlRmx1c2goKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGliJHJzdnAkaW5zdHJ1bWVudCQkcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBlbnRyeSA9IGxpYiRyc3ZwJGluc3RydW1lbnQkJHF1ZXVlW2ldO1xuXG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBlbnRyeS5wYXlsb2FkO1xuXG4gICAgICAgICAgcGF5bG9hZC5ndWlkID0gcGF5bG9hZC5rZXkgKyBwYXlsb2FkLmlkO1xuICAgICAgICAgIHBheWxvYWQuY2hpbGRHdWlkID0gcGF5bG9hZC5rZXkgKyBwYXlsb2FkLmNoaWxkSWQ7XG4gICAgICAgICAgaWYgKHBheWxvYWQuZXJyb3IpIHtcbiAgICAgICAgICAgIHBheWxvYWQuc3RhY2sgPSBwYXlsb2FkLmVycm9yLnN0YWNrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnWyd0cmlnZ2VyJ10oZW50cnkubmFtZSwgZW50cnkucGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgICAgbGliJHJzdnAkaW5zdHJ1bWVudCQkcXVldWUubGVuZ3RoID0gMDtcbiAgICAgIH0sIDUwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRpbnN0cnVtZW50JCRpbnN0cnVtZW50KGV2ZW50TmFtZSwgcHJvbWlzZSwgY2hpbGQpIHtcbiAgICAgIGlmICgxID09PSBsaWIkcnN2cCRpbnN0cnVtZW50JCRxdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBldmVudE5hbWUsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAga2V5OiBwcm9taXNlLl9ndWlkS2V5LFxuICAgICAgICAgICAgaWQ6ICBwcm9taXNlLl9pZCxcbiAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnROYW1lLFxuICAgICAgICAgICAgZGV0YWlsOiBwcm9taXNlLl9yZXN1bHQsXG4gICAgICAgICAgICBjaGlsZElkOiBjaGlsZCAmJiBjaGlsZC5faWQsXG4gICAgICAgICAgICBsYWJlbDogcHJvbWlzZS5fbGFiZWwsXG4gICAgICAgICAgICB0aW1lU3RhbXA6IGxpYiRyc3ZwJHV0aWxzJCRub3coKSxcbiAgICAgICAgICAgIGVycm9yOiBsaWIkcnN2cCRjb25maWckJGNvbmZpZ1tcImluc3RydW1lbnQtd2l0aC1zdGFja1wiXSA/IG5ldyBFcnJvcihwcm9taXNlLl9sYWJlbCkgOiBudWxsXG4gICAgICAgICAgfX0pKSB7XG4gICAgICAgICAgICBsaWIkcnN2cCRpbnN0cnVtZW50JCRzY2hlZHVsZUZsdXNoKCk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIHZhciBsaWIkcnN2cCRpbnN0cnVtZW50JCRkZWZhdWx0ID0gbGliJHJzdnAkaW5zdHJ1bWVudCQkaW5zdHJ1bWVudDtcblxuICAgIGZ1bmN0aW9uICBsaWIkcnN2cCQkaW50ZXJuYWwkJHdpdGhPd25Qcm9taXNlKCkge1xuICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJG5vb3AoKSB7fVxuXG4gICAgdmFyIGxpYiRyc3ZwJCRpbnRlcm5hbCQkUEVORElORyAgID0gdm9pZCAwO1xuICAgIHZhciBsaWIkcnN2cCQkaW50ZXJuYWwkJEZVTEZJTExFRCA9IDE7XG4gICAgdmFyIGxpYiRyc3ZwJCRpbnRlcm5hbCQkUkVKRUNURUQgID0gMjtcblxuICAgIHZhciBsaWIkcnN2cCQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SID0gbmV3IGxpYiRyc3ZwJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKTtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZ2V0VGhlbihwcm9taXNlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuO1xuICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHJldHVybiBsaWIkcnN2cCQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkdHJ5VGhlbih0aGVuLCB2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcik7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUsIHRoZW4pIHtcbiAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLmFzeW5jKGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgICAgdmFyIHNlYWxlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3IgPSBsaWIkcnN2cCQkaW50ZXJuYWwkJHRyeVRoZW4odGhlbiwgdGhlbmFibGUsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHNlYWxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGVuYWJsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICBpZiAoc2VhbGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG5cbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICB9LCAnU2V0dGxlOiAnICsgKHByb21pc2UuX2xhYmVsIHx8ICcgdW5rbm93biBwcm9taXNlJykpO1xuXG4gICAgICAgIGlmICghc2VhbGVkICYmIGVycm9yKSB7XG4gICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUpIHtcbiAgICAgIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkRlVMRklMTEVEKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhlbmFibGUuX3N0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgIHRoZW5hYmxlLl9vbkVycm9yID0gbnVsbDtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHN1YnNjcmliZSh0aGVuYWJsZSwgdW5kZWZpbmVkLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIGlmICh0aGVuYWJsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSkge1xuICAgICAgaWYgKG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IgPT09IHByb21pc2UuY29uc3RydWN0b3IpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0aGVuID0gbGliJHJzdnAkJGludGVybmFsJCRnZXRUaGVuKG1heWJlVGhlbmFibGUpO1xuXG4gICAgICAgIGlmICh0aGVuID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SKSB7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbGliJHJzdnAkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUi5lcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGxpYiRyc3ZwJHV0aWxzJCRpc0Z1bmN0aW9uKHRoZW4pKSB7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAobGliJHJzdnAkdXRpbHMkJG9iamVjdE9yRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcHVibGlzaFJlamVjdGlvbihwcm9taXNlKSB7XG4gICAgICBpZiAocHJvbWlzZS5fb25FcnJvcikge1xuICAgICAgICBwcm9taXNlLl9vbkVycm9yKHByb21pc2UuX3Jlc3VsdCk7XG4gICAgICB9XG5cbiAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcHVibGlzaChwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gbGliJHJzdnAkJGludGVybmFsJCRQRU5ESU5HKSB7IHJldHVybjsgfVxuXG4gICAgICBwcm9taXNlLl9yZXN1bHQgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3N0YXRlID0gbGliJHJzdnAkJGludGVybmFsJCRGVUxGSUxMRUQ7XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLmluc3RydW1lbnQpIHtcbiAgICAgICAgICBsaWIkcnN2cCRpbnN0cnVtZW50JCRkZWZhdWx0KCdmdWxmaWxsZWQnLCBwcm9taXNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWcuYXN5bmMobGliJHJzdnAkJGludGVybmFsJCRwdWJsaXNoLCBwcm9taXNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pIHtcbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gbGliJHJzdnAkJGludGVybmFsJCRQRU5ESU5HKSB7IHJldHVybjsgfVxuICAgICAgcHJvbWlzZS5fc3RhdGUgPSBsaWIkcnN2cCQkaW50ZXJuYWwkJFJFSkVDVEVEO1xuICAgICAgcHJvbWlzZS5fcmVzdWx0ID0gcmVhc29uO1xuICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWcuYXN5bmMobGliJHJzdnAkJGludGVybmFsJCRwdWJsaXNoUmVqZWN0aW9uLCBwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgICAgdmFyIHN1YnNjcmliZXJzID0gcGFyZW50Ll9zdWJzY3JpYmVycztcbiAgICAgIHZhciBsZW5ndGggPSBzdWJzY3JpYmVycy5sZW5ndGg7XG5cbiAgICAgIHBhcmVudC5fb25FcnJvciA9IG51bGw7XG5cbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aF0gPSBjaGlsZDtcbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aCArIGxpYiRyc3ZwJCRpbnRlcm5hbCQkRlVMRklMTEVEXSA9IG9uRnVsZmlsbG1lbnQ7XG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGggKyBsaWIkcnN2cCQkaW50ZXJuYWwkJFJFSkVDVEVEXSAgPSBvblJlamVjdGlvbjtcblxuICAgICAgaWYgKGxlbmd0aCA9PT0gMCAmJiBwYXJlbnQuX3N0YXRlKSB7XG4gICAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLmFzeW5jKGxpYiRyc3ZwJCRpbnRlcm5hbCQkcHVibGlzaCwgcGFyZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJHB1Ymxpc2gocHJvbWlzZSkge1xuICAgICAgdmFyIHN1YnNjcmliZXJzID0gcHJvbWlzZS5fc3Vic2NyaWJlcnM7XG4gICAgICB2YXIgc2V0dGxlZCA9IHByb21pc2UuX3N0YXRlO1xuXG4gICAgICBpZiAobGliJHJzdnAkY29uZmlnJCRjb25maWcuaW5zdHJ1bWVudCkge1xuICAgICAgICBsaWIkcnN2cCRpbnN0cnVtZW50JCRkZWZhdWx0KHNldHRsZWQgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkRlVMRklMTEVEID8gJ2Z1bGZpbGxlZCcgOiAncmVqZWN0ZWQnLCBwcm9taXNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cblxuICAgICAgdmFyIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsID0gcHJvbWlzZS5fcmVzdWx0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIGNoaWxkID0gc3Vic2NyaWJlcnNbaV07XG4gICAgICAgIGNhbGxiYWNrID0gc3Vic2NyaWJlcnNbaSArIHNldHRsZWRdO1xuXG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCkge1xuICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SID0gbmV3IGxpYiRyc3ZwJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKTtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IuZXJyb3IgPSBlO1xuICAgICAgICByZXR1cm4gbGliJHJzdnAkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBwcm9taXNlLCBjYWxsYmFjaywgZGV0YWlsKSB7XG4gICAgICB2YXIgaGFzQ2FsbGJhY2sgPSBsaWIkcnN2cCR1dGlscyQkaXNGdW5jdGlvbihjYWxsYmFjayksXG4gICAgICAgICAgdmFsdWUsIGVycm9yLCBzdWNjZWVkZWQsIGZhaWxlZDtcblxuICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgIHZhbHVlID0gbGliJHJzdnAkJGludGVybmFsJCR0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SKSB7XG4gICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICBlcnJvciA9IHZhbHVlLmVycm9yO1xuICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbGliJHJzdnAkJGludGVybmFsJCR3aXRoT3duUHJvbWlzZSgpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBkZXRhaWw7XG4gICAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gbGliJHJzdnAkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgIC8vIG5vb3BcbiAgICAgIH0gZWxzZSBpZiAoaGFzQ2FsbGJhY2sgJiYgc3VjY2VlZGVkKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGZhaWxlZCkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkRlVMRklMTEVEKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UocHJvbWlzZSwgcmVzb2x2ZXIpIHtcbiAgICAgIHZhciByZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzb2x2ZXIoZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UodmFsdWUpe1xuICAgICAgICAgIGlmIChyZXNvbHZlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShyZWFzb24pIHtcbiAgICAgICAgICBpZiAocmVzb2x2ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGVudW1lcmF0b3IkJG1ha2VTZXR0bGVkUmVzdWx0KHN0YXRlLCBwb3NpdGlvbiwgdmFsdWUpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdGF0ZTogJ2Z1bGZpbGxlZCcsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXRlOiAncmVqZWN0ZWQnLFxuICAgICAgICAgIHJlYXNvbjogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yKENvbnN0cnVjdG9yLCBpbnB1dCwgYWJvcnRPblJlamVjdCwgbGFiZWwpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcjtcbiAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcihsaWIkcnN2cCQkaW50ZXJuYWwkJG5vb3AsIGxhYmVsKTtcbiAgICAgIHRoaXMuX2Fib3J0T25SZWplY3QgPSBhYm9ydE9uUmVqZWN0O1xuXG4gICAgICBpZiAodGhpcy5fdmFsaWRhdGVJbnB1dChpbnB1dCkpIHtcbiAgICAgICAgdGhpcy5faW5wdXQgICAgID0gaW5wdXQ7XG4gICAgICAgIHRoaXMubGVuZ3RoICAgICA9IGlucHV0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nID0gaW5wdXQubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuX2luaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5sZW5ndGggfHwgMDtcbiAgICAgICAgICB0aGlzLl9lbnVtZXJhdGUoKTtcbiAgICAgICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QodGhpcy5wcm9taXNlLCB0aGlzLl92YWxpZGF0aW9uRXJyb3IoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJGVudW1lcmF0b3IkJGRlZmF1bHQgPSBsaWIkcnN2cCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yO1xuXG4gICAgbGliJHJzdnAkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRlSW5wdXQgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgcmV0dXJuIGxpYiRyc3ZwJHV0aWxzJCRpc0FycmF5KGlucHV0KTtcbiAgICB9O1xuXG4gICAgbGliJHJzdnAkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQXJyYXkgTWV0aG9kcyBtdXN0IGJlIHByb3ZpZGVkIGFuIEFycmF5Jyk7XG4gICAgfTtcblxuICAgIGxpYiRyc3ZwJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9yZXN1bHQgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuICAgIH07XG5cbiAgICBsaWIkcnN2cCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZW51bWVyYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGVuZ3RoICA9IHRoaXMubGVuZ3RoO1xuICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG4gICAgICB2YXIgaW5wdXQgICA9IHRoaXMuX2lucHV0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgcHJvbWlzZS5fc3RhdGUgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUEVORElORyAmJiBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5fZWFjaEVudHJ5KGlucHV0W2ldLCBpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJHJzdnAkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX2VhY2hFbnRyeSA9IGZ1bmN0aW9uKGVudHJ5LCBpKSB7XG4gICAgICB2YXIgYyA9IHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3I7XG4gICAgICBpZiAobGliJHJzdnAkdXRpbHMkJGlzTWF5YmVUaGVuYWJsZShlbnRyeSkpIHtcbiAgICAgICAgaWYgKGVudHJ5LmNvbnN0cnVjdG9yID09PSBjICYmIGVudHJ5Ll9zdGF0ZSAhPT0gbGliJHJzdnAkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgICAgZW50cnkuX29uRXJyb3IgPSBudWxsO1xuICAgICAgICAgIHRoaXMuX3NldHRsZWRBdChlbnRyeS5fc3RhdGUsIGksIGVudHJ5Ll9yZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChjLnJlc29sdmUoZW50cnkpLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG4gICAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IHRoaXMuX21ha2VSZXN1bHQobGliJHJzdnAkJGludGVybmFsJCRGVUxGSUxMRUQsIGksIGVudHJ5KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJHJzdnAkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3NldHRsZWRBdCA9IGZ1bmN0aW9uKHN0YXRlLCBpLCB2YWx1ZSkge1xuICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuXG4gICAgICAgIGlmICh0aGlzLl9hYm9ydE9uUmVqZWN0ICYmIHN0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IHRoaXMuX21ha2VSZXN1bHQoc3RhdGUsIGksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsaWIkcnN2cCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fbWFrZVJlc3VsdCA9IGZ1bmN0aW9uKHN0YXRlLCBpLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICBsaWIkcnN2cCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fd2lsbFNldHRsZUF0ID0gZnVuY3Rpb24ocHJvbWlzZSwgaSkge1xuICAgICAgdmFyIGVudW1lcmF0b3IgPSB0aGlzO1xuXG4gICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHN1YnNjcmliZShwcm9taXNlLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGVudW1lcmF0b3IuX3NldHRsZWRBdChsaWIkcnN2cCQkaW50ZXJuYWwkJEZVTEZJTExFRCwgaSwgdmFsdWUpO1xuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGVudW1lcmF0b3IuX3NldHRsZWRBdChsaWIkcnN2cCQkaW50ZXJuYWwkJFJFSkVDVEVELCBpLCByZWFzb24pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRwcm9taXNlJGFsbCQkYWxsKGVudHJpZXMsIGxhYmVsKSB7XG4gICAgICByZXR1cm4gbmV3IGxpYiRyc3ZwJGVudW1lcmF0b3IkJGRlZmF1bHQodGhpcywgZW50cmllcywgdHJ1ZSAvKiBhYm9ydCBvbiByZWplY3QgKi8sIGxhYmVsKS5wcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkcHJvbWlzZSRhbGwkJGRlZmF1bHQgPSBsaWIkcnN2cCRwcm9taXNlJGFsbCQkYWxsO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHByb21pc2UkcmFjZSQkcmFjZShlbnRyaWVzLCBsYWJlbCkge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRyc3ZwJCRpbnRlcm5hbCQkbm9vcCwgbGFiZWwpO1xuXG4gICAgICBpZiAoIWxpYiRyc3ZwJHV0aWxzJCRpc0FycmF5KGVudHJpZXMpKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gcmFjZS4nKSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVuZ3RoID0gZW50cmllcy5sZW5ndGg7XG5cbiAgICAgIGZ1bmN0aW9uIG9uRnVsZmlsbG1lbnQodmFsdWUpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25SZWplY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBwcm9taXNlLl9zdGF0ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRQRU5ESU5HICYmIGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHN1YnNjcmliZShDb25zdHJ1Y3Rvci5yZXNvbHZlKGVudHJpZXNbaV0pLCB1bmRlZmluZWQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRwcm9taXNlJHJhY2UkJGRlZmF1bHQgPSBsaWIkcnN2cCRwcm9taXNlJHJhY2UkJHJhY2U7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcHJvbWlzZSRyZXNvbHZlJCRyZXNvbHZlKG9iamVjdCwgbGFiZWwpIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gICAgICBpZiAob2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gQ29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJHJzdnAkJGludGVybmFsJCRub29wLCBsYWJlbCk7XG4gICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgb2JqZWN0KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0ID0gbGliJHJzdnAkcHJvbWlzZSRyZXNvbHZlJCRyZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHByb21pc2UkcmVqZWN0JCRyZWplY3QocmVhc29uLCBsYWJlbCkge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcihsaWIkcnN2cCQkaW50ZXJuYWwkJG5vb3AsIGxhYmVsKTtcbiAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJHByb21pc2UkcmVqZWN0JCRkZWZhdWx0ID0gbGliJHJzdnAkcHJvbWlzZSRyZWplY3QkJHJlamVjdDtcblxuICAgIHZhciBsaWIkcnN2cCRwcm9taXNlJCRndWlkS2V5ID0gJ3JzdnBfJyArIGxpYiRyc3ZwJHV0aWxzJCRub3coKSArICctJztcbiAgICB2YXIgbGliJHJzdnAkcHJvbWlzZSQkY291bnRlciA9IDA7XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRwcm9taXNlJCRuZWVkc1Jlc29sdmVyKCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhIHJlc29sdmVyIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHByb21pc2UkJG5lZWRzTmV3KCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgIFByb21pc2Ugb2JqZWN0cyByZXByZXNlbnQgdGhlIGV2ZW50dWFsIHJlc3VsdCBvZiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLiBUaGVcbiAgICAgIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsIHdoaWNoXG4gICAgICByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZeKAmXMgZXZlbnR1YWwgdmFsdWUgb3IgdGhlIHJlYXNvblxuICAgICAgd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgICAgIFRlcm1pbm9sb2d5XG4gICAgICAtLS0tLS0tLS0tLVxuXG4gICAgICAtIGBwcm9taXNlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gd2l0aCBhIGB0aGVuYCBtZXRob2Qgd2hvc2UgYmVoYXZpb3IgY29uZm9ybXMgdG8gdGhpcyBzcGVjaWZpY2F0aW9uLlxuICAgICAgLSBgdGhlbmFibGVgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB0aGF0IGRlZmluZXMgYSBgdGhlbmAgbWV0aG9kLlxuICAgICAgLSBgdmFsdWVgIGlzIGFueSBsZWdhbCBKYXZhU2NyaXB0IHZhbHVlIChpbmNsdWRpbmcgdW5kZWZpbmVkLCBhIHRoZW5hYmxlLCBvciBhIHByb21pc2UpLlxuICAgICAgLSBgZXhjZXB0aW9uYCBpcyBhIHZhbHVlIHRoYXQgaXMgdGhyb3duIHVzaW5nIHRoZSB0aHJvdyBzdGF0ZW1lbnQuXG4gICAgICAtIGByZWFzb25gIGlzIGEgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgd2h5IGEgcHJvbWlzZSB3YXMgcmVqZWN0ZWQuXG4gICAgICAtIGBzZXR0bGVkYCB0aGUgZmluYWwgcmVzdGluZyBzdGF0ZSBvZiBhIHByb21pc2UsIGZ1bGZpbGxlZCBvciByZWplY3RlZC5cblxuICAgICAgQSBwcm9taXNlIGNhbiBiZSBpbiBvbmUgb2YgdGhyZWUgc3RhdGVzOiBwZW5kaW5nLCBmdWxmaWxsZWQsIG9yIHJlamVjdGVkLlxuXG4gICAgICBQcm9taXNlcyB0aGF0IGFyZSBmdWxmaWxsZWQgaGF2ZSBhIGZ1bGZpbGxtZW50IHZhbHVlIGFuZCBhcmUgaW4gdGhlIGZ1bGZpbGxlZFxuICAgICAgc3RhdGUuICBQcm9taXNlcyB0aGF0IGFyZSByZWplY3RlZCBoYXZlIGEgcmVqZWN0aW9uIHJlYXNvbiBhbmQgYXJlIGluIHRoZVxuICAgICAgcmVqZWN0ZWQgc3RhdGUuICBBIGZ1bGZpbGxtZW50IHZhbHVlIGlzIG5ldmVyIGEgdGhlbmFibGUuXG5cbiAgICAgIFByb21pc2VzIGNhbiBhbHNvIGJlIHNhaWQgdG8gKnJlc29sdmUqIGEgdmFsdWUuICBJZiB0aGlzIHZhbHVlIGlzIGFsc28gYVxuICAgICAgcHJvbWlzZSwgdGhlbiB0aGUgb3JpZ2luYWwgcHJvbWlzZSdzIHNldHRsZWQgc3RhdGUgd2lsbCBtYXRjaCB0aGUgdmFsdWUnc1xuICAgICAgc2V0dGxlZCBzdGF0ZS4gIFNvIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgcmVqZWN0cyB3aWxsXG4gICAgICBpdHNlbGYgcmVqZWN0LCBhbmQgYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aWxsXG4gICAgICBpdHNlbGYgZnVsZmlsbC5cblxuXG4gICAgICBCYXNpYyBVc2FnZTpcbiAgICAgIC0tLS0tLS0tLS0tLVxuXG4gICAgICBgYGBqc1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gb24gc3VjY2Vzc1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcblxuICAgICAgICAvLyBvbiBmYWlsdXJlXG4gICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG5cbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAvLyBvbiBmdWxmaWxsbWVudFxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIC8vIG9uIHJlamVjdGlvblxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQWR2YW5jZWQgVXNhZ2U6XG4gICAgICAtLS0tLS0tLS0tLS0tLS1cblxuICAgICAgUHJvbWlzZXMgc2hpbmUgd2hlbiBhYnN0cmFjdGluZyBhd2F5IGFzeW5jaHJvbm91cyBpbnRlcmFjdGlvbnMgc3VjaCBhc1xuICAgICAgYFhNTEh0dHBSZXF1ZXN0YHMuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmdW5jdGlvbiBnZXRKU09OKHVybCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gaGFuZGxlcjtcbiAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gdGhpcy5ET05FKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdnZXRKU09OOiBgJyArIHVybCArICdgIGZhaWxlZCB3aXRoIHN0YXR1czogWycgKyB0aGlzLnN0YXR1cyArICddJykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGdldEpTT04oJy9wb3N0cy5qc29uJykudGhlbihmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgLy8gb24gcmVqZWN0aW9uXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBVbmxpa2UgY2FsbGJhY2tzLCBwcm9taXNlcyBhcmUgZ3JlYXQgY29tcG9zYWJsZSBwcmltaXRpdmVzLlxuXG4gICAgICBgYGBqc1xuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRKU09OKCcvcG9zdHMnKSxcbiAgICAgICAgZ2V0SlNPTignL2NvbW1lbnRzJylcbiAgICAgIF0pLnRoZW4oZnVuY3Rpb24odmFsdWVzKXtcbiAgICAgICAgdmFsdWVzWzBdIC8vID0+IHBvc3RzSlNPTlxuICAgICAgICB2YWx1ZXNbMV0gLy8gPT4gY29tbWVudHNKU09OXG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBjbGFzcyBSU1ZQLlByb21pc2VcbiAgICAgIEBwYXJhbSB7ZnVuY3Rpb259IHJlc29sdmVyXG4gICAgICBAcGFyYW0ge1N0cmluZ30gbGFiZWwgb3B0aW9uYWwgc3RyaW5nIGZvciBsYWJlbGluZyB0aGUgcHJvbWlzZS5cbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcHJvbWlzZSQkUHJvbWlzZShyZXNvbHZlciwgbGFiZWwpIHtcbiAgICAgIHRoaXMuX2lkID0gbGliJHJzdnAkcHJvbWlzZSQkY291bnRlcisrO1xuICAgICAgdGhpcy5fbGFiZWwgPSBsYWJlbDtcbiAgICAgIHRoaXMuX3N0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcblxuICAgICAgaWYgKGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLmluc3RydW1lbnQpIHtcbiAgICAgICAgbGliJHJzdnAkaW5zdHJ1bWVudCQkZGVmYXVsdCgnY3JlYXRlZCcsIHRoaXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGliJHJzdnAkJGludGVybmFsJCRub29wICE9PSByZXNvbHZlcikge1xuICAgICAgICBpZiAoIWxpYiRyc3ZwJHV0aWxzJCRpc0Z1bmN0aW9uKHJlc29sdmVyKSkge1xuICAgICAgICAgIGxpYiRyc3ZwJHByb21pc2UkJG5lZWRzUmVzb2x2ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBsaWIkcnN2cCRwcm9taXNlJCRQcm9taXNlKSkge1xuICAgICAgICAgIGxpYiRyc3ZwJHByb21pc2UkJG5lZWRzTmV3KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGluaXRpYWxpemVQcm9taXNlKHRoaXMsIHJlc29sdmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdCA9IGxpYiRyc3ZwJHByb21pc2UkJFByb21pc2U7XG5cbiAgICAvLyBkZXByZWNhdGVkXG4gICAgbGliJHJzdnAkcHJvbWlzZSQkUHJvbWlzZS5jYXN0ID0gbGliJHJzdnAkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0O1xuICAgIGxpYiRyc3ZwJHByb21pc2UkJFByb21pc2UuYWxsID0gbGliJHJzdnAkcHJvbWlzZSRhbGwkJGRlZmF1bHQ7XG4gICAgbGliJHJzdnAkcHJvbWlzZSQkUHJvbWlzZS5yYWNlID0gbGliJHJzdnAkcHJvbWlzZSRyYWNlJCRkZWZhdWx0O1xuICAgIGxpYiRyc3ZwJHByb21pc2UkJFByb21pc2UucmVzb2x2ZSA9IGxpYiRyc3ZwJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdDtcbiAgICBsaWIkcnN2cCRwcm9taXNlJCRQcm9taXNlLnJlamVjdCA9IGxpYiRyc3ZwJHByb21pc2UkcmVqZWN0JCRkZWZhdWx0O1xuXG4gICAgbGliJHJzdnAkcHJvbWlzZSQkUHJvbWlzZS5wcm90b3R5cGUgPSB7XG4gICAgICBjb25zdHJ1Y3RvcjogbGliJHJzdnAkcHJvbWlzZSQkUHJvbWlzZSxcblxuICAgICAgX2d1aWRLZXk6IGxpYiRyc3ZwJHByb21pc2UkJGd1aWRLZXksXG5cbiAgICAgIF9vbkVycm9yOiBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLmFzeW5jKGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX29uRXJyb3IpIHtcbiAgICAgICAgICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWdbJ3RyaWdnZXInXSgnZXJyb3InLCByZWFzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgIH0sXG5cbiAgICAvKipcbiAgICAgIFRoZSBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLFxuICAgICAgd2hpY2ggcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGVcbiAgICAgIHJlYXNvbiB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbih1c2VyKXtcbiAgICAgICAgLy8gdXNlciBpcyBhdmFpbGFibGVcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHVzZXIgaXMgdW5hdmFpbGFibGUsIGFuZCB5b3UgYXJlIGdpdmVuIHRoZSByZWFzb24gd2h5XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBDaGFpbmluZ1xuICAgICAgLS0tLS0tLS1cblxuICAgICAgVGhlIHJldHVybiB2YWx1ZSBvZiBgdGhlbmAgaXMgaXRzZWxmIGEgcHJvbWlzZS4gIFRoaXMgc2Vjb25kLCAnZG93bnN0cmVhbSdcbiAgICAgIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmaXJzdCBwcm9taXNlJ3MgZnVsZmlsbG1lbnRcbiAgICAgIG9yIHJlamVjdGlvbiBoYW5kbGVyLCBvciByZWplY3RlZCBpZiB0aGUgaGFuZGxlciB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiB1c2VyLm5hbWU7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHJldHVybiAnZGVmYXVsdCBuYW1lJztcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHVzZXJOYW1lKSB7XG4gICAgICAgIC8vIElmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgdXNlck5hbWVgIHdpbGwgYmUgdGhlIHVzZXIncyBuYW1lLCBvdGhlcndpc2UgaXRcbiAgICAgICAgLy8gd2lsbCBiZSBgJ2RlZmF1bHQgbmFtZSdgXG4gICAgICB9KTtcblxuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIGlmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgcmVhc29uYCB3aWxsIGJlICdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScuXG4gICAgICAgIC8vIElmIGBmaW5kVXNlcmAgcmVqZWN0ZWQsIGByZWFzb25gIHdpbGwgYmUgJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknLlxuICAgICAgfSk7XG4gICAgICBgYGBcbiAgICAgIElmIHRoZSBkb3duc3RyZWFtIHByb21pc2UgZG9lcyBub3Qgc3BlY2lmeSBhIHJlamVjdGlvbiBoYW5kbGVyLCByZWplY3Rpb24gcmVhc29ucyB3aWxsIGJlIHByb3BhZ2F0ZWQgZnVydGhlciBkb3duc3RyZWFtLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBQZWRhZ29naWNhbEV4Y2VwdGlvbignVXBzdHJlYW0gZXJyb3InKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gVGhlIGBQZWRnYWdvY2lhbEV4Y2VwdGlvbmAgaXMgcHJvcGFnYXRlZCBhbGwgdGhlIHdheSBkb3duIHRvIGhlcmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFzc2ltaWxhdGlvblxuICAgICAgLS0tLS0tLS0tLS0tXG5cbiAgICAgIFNvbWV0aW1lcyB0aGUgdmFsdWUgeW91IHdhbnQgdG8gcHJvcGFnYXRlIHRvIGEgZG93bnN0cmVhbSBwcm9taXNlIGNhbiBvbmx5IGJlXG4gICAgICByZXRyaWV2ZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgY2FuIGJlIGFjaGlldmVkIGJ5IHJldHVybmluZyBhIHByb21pc2UgaW4gdGhlXG4gICAgICBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gaGFuZGxlci4gVGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIHRoZW4gYmUgcGVuZGluZ1xuICAgICAgdW50aWwgdGhlIHJldHVybmVkIHByb21pc2UgaXMgc2V0dGxlZC4gVGhpcyBpcyBjYWxsZWQgKmFzc2ltaWxhdGlvbiouXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgICAgLy8gVGhlIHVzZXIncyBjb21tZW50cyBhcmUgbm93IGF2YWlsYWJsZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgSWYgdGhlIGFzc2ltbGlhdGVkIHByb21pc2UgcmVqZWN0cywgdGhlbiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgYWxzbyByZWplY3QuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCBmdWxmaWxscywgd2UnbGwgaGF2ZSB0aGUgdmFsdWUgaGVyZVxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIHJlamVjdHMsIHdlJ2xsIGhhdmUgdGhlIHJlYXNvbiBoZXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBTaW1wbGUgRXhhbXBsZVxuICAgICAgLS0tLS0tLS0tLS0tLS1cblxuICAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBmaW5kUmVzdWx0KCk7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH1cbiAgICAgIGBgYFxuXG4gICAgICBFcnJiYWNrIEV4YW1wbGVcblxuICAgICAgYGBganNcbiAgICAgIGZpbmRSZXN1bHQoZnVuY3Rpb24ocmVzdWx0LCBlcnIpe1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgUHJvbWlzZSBFeGFtcGxlO1xuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICBmaW5kUmVzdWx0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBZHZhbmNlZCBFeGFtcGxlXG4gICAgICAtLS0tLS0tLS0tLS0tLVxuXG4gICAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIHZhciBhdXRob3IsIGJvb2tzO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhdXRob3IgPSBmaW5kQXV0aG9yKCk7XG4gICAgICAgIGJvb2tzICA9IGZpbmRCb29rc0J5QXV0aG9yKGF1dGhvcik7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH1cbiAgICAgIGBgYFxuXG4gICAgICBFcnJiYWNrIEV4YW1wbGVcblxuICAgICAgYGBganNcblxuICAgICAgZnVuY3Rpb24gZm91bmRCb29rcyhib29rcykge1xuXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGZhaWx1cmUocmVhc29uKSB7XG5cbiAgICAgIH1cblxuICAgICAgZmluZEF1dGhvcihmdW5jdGlvbihhdXRob3IsIGVycil7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmaW5kQm9vb2tzQnlBdXRob3IoYXV0aG9yLCBmdW5jdGlvbihib29rcywgZXJyKSB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGZvdW5kQm9va3MoYm9va3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICBmYWlsdXJlKHJlYXNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgUHJvbWlzZSBFeGFtcGxlO1xuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICBmaW5kQXV0aG9yKCkuXG4gICAgICAgIHRoZW4oZmluZEJvb2tzQnlBdXRob3IpLlxuICAgICAgICB0aGVuKGZ1bmN0aW9uKGJvb2tzKXtcbiAgICAgICAgICAvLyBmb3VuZCBib29rc1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBtZXRob2QgdGhlblxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25GdWxmaWxsZWRcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0ZWRcbiAgICAgIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCBvcHRpb25hbCBzdHJpbmcgZm9yIGxhYmVsaW5nIHRoZSBwcm9taXNlLlxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQHJldHVybiB7UHJvbWlzZX1cbiAgICAqL1xuICAgICAgdGhlbjogZnVuY3Rpb24ob25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24sIGxhYmVsKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhdGUgPSBwYXJlbnQuX3N0YXRlO1xuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRGVUxGSUxMRUQgJiYgIW9uRnVsZmlsbG1lbnQgfHwgc3RhdGUgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUkVKRUNURUQgJiYgIW9uUmVqZWN0aW9uKSB7XG4gICAgICAgICAgaWYgKGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLmluc3RydW1lbnQpIHtcbiAgICAgICAgICAgIGxpYiRyc3ZwJGluc3RydW1lbnQkJGRlZmF1bHQoJ2NoYWluZWQnLCB0aGlzLCB0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQuX29uRXJyb3IgPSBudWxsO1xuXG4gICAgICAgIHZhciBjaGlsZCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGxpYiRyc3ZwJCRpbnRlcm5hbCQkbm9vcCwgbGFiZWwpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGFyZW50Ll9yZXN1bHQ7XG5cbiAgICAgICAgaWYgKGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLmluc3RydW1lbnQpIHtcbiAgICAgICAgICBsaWIkcnN2cCRpbnN0cnVtZW50JCRkZWZhdWx0KCdjaGFpbmVkJywgcGFyZW50LCBjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHNbc3RhdGUgLSAxXTtcbiAgICAgICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZy5hc3luYyhmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzdGF0ZSwgY2hpbGQsIGNhbGxiYWNrLCByZXN1bHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH0sXG5cbiAgICAvKipcbiAgICAgIGBjYXRjaGAgaXMgc2ltcGx5IHN1Z2FyIGZvciBgdGhlbih1bmRlZmluZWQsIG9uUmVqZWN0aW9uKWAgd2hpY2ggbWFrZXMgaXQgdGhlIHNhbWVcbiAgICAgIGFzIHRoZSBjYXRjaCBibG9jayBvZiBhIHRyeS9jYXRjaCBzdGF0ZW1lbnQuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmdW5jdGlvbiBmaW5kQXV0aG9yKCl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGRuJ3QgZmluZCB0aGF0IGF1dGhvcicpO1xuICAgICAgfVxuXG4gICAgICAvLyBzeW5jaHJvbm91c1xuICAgICAgdHJ5IHtcbiAgICAgICAgZmluZEF1dGhvcigpO1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH1cblxuICAgICAgLy8gYXN5bmMgd2l0aCBwcm9taXNlc1xuICAgICAgZmluZEF1dGhvcigpLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAbWV0aG9kIGNhdGNoXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGlvblxuICAgICAgQHBhcmFtIHtTdHJpbmd9IGxhYmVsIG9wdGlvbmFsIHN0cmluZyBmb3IgbGFiZWxpbmcgdGhlIHByb21pc2UuXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGlvbiwgbGFiZWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbiwgbGFiZWwpO1xuICAgICAgfSxcblxuICAgIC8qKlxuICAgICAgYGZpbmFsbHlgIHdpbGwgYmUgaW52b2tlZCByZWdhcmRsZXNzIG9mIHRoZSBwcm9taXNlJ3MgZmF0ZSBqdXN0IGFzIG5hdGl2ZVxuICAgICAgdHJ5L2NhdGNoL2ZpbmFsbHkgYmVoYXZlc1xuXG4gICAgICBTeW5jaHJvbm91cyBleGFtcGxlOlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZEF1dGhvcigpIHtcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEF1dGhvcigpO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZmluZEF1dGhvcigpOyAvLyBzdWNjZWVkIG9yIGZhaWxcbiAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRPdGhlckF1dGhlcigpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgLy8gYWx3YXlzIHJ1bnNcbiAgICAgICAgLy8gZG9lc24ndCBhZmZlY3QgdGhlIHJldHVybiB2YWx1ZVxuICAgICAgfVxuICAgICAgYGBgXG5cbiAgICAgIEFzeW5jaHJvbm91cyBleGFtcGxlOlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZEF1dGhvcigpLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIHJldHVybiBmaW5kT3RoZXJBdXRoZXIoKTtcbiAgICAgIH0pLmZpbmFsbHkoZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gYXV0aG9yIHdhcyBlaXRoZXIgZm91bmQsIG9yIG5vdFxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQG1ldGhvZCBmaW5hbGx5XG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgQHBhcmFtIHtTdHJpbmd9IGxhYmVsIG9wdGlvbmFsIHN0cmluZyBmb3IgbGFiZWxpbmcgdGhlIHByb21pc2UuXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICAnZmluYWxseSc6IGZ1bmN0aW9uKGNhbGxiYWNrLCBsYWJlbCkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRocm93IHJlYXNvbjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgbGFiZWwpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRhbGwkc2V0dGxlZCQkQWxsU2V0dGxlZChDb25zdHJ1Y3RvciwgZW50cmllcywgbGFiZWwpIHtcbiAgICAgIHRoaXMuX3N1cGVyQ29uc3RydWN0b3IoQ29uc3RydWN0b3IsIGVudHJpZXMsIGZhbHNlIC8qIGRvbid0IGFib3J0IG9uIHJlamVjdCAqLywgbGFiZWwpO1xuICAgIH1cblxuICAgIGxpYiRyc3ZwJGFsbCRzZXR0bGVkJCRBbGxTZXR0bGVkLnByb3RvdHlwZSA9IGxpYiRyc3ZwJHV0aWxzJCRvX2NyZWF0ZShsaWIkcnN2cCRlbnVtZXJhdG9yJCRkZWZhdWx0LnByb3RvdHlwZSk7XG4gICAgbGliJHJzdnAkYWxsJHNldHRsZWQkJEFsbFNldHRsZWQucHJvdG90eXBlLl9zdXBlckNvbnN0cnVjdG9yID0gbGliJHJzdnAkZW51bWVyYXRvciQkZGVmYXVsdDtcbiAgICBsaWIkcnN2cCRhbGwkc2V0dGxlZCQkQWxsU2V0dGxlZC5wcm90b3R5cGUuX21ha2VSZXN1bHQgPSBsaWIkcnN2cCRlbnVtZXJhdG9yJCRtYWtlU2V0dGxlZFJlc3VsdDtcbiAgICBsaWIkcnN2cCRhbGwkc2V0dGxlZCQkQWxsU2V0dGxlZC5wcm90b3R5cGUuX3ZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignYWxsU2V0dGxlZCBtdXN0IGJlIGNhbGxlZCB3aXRoIGFuIGFycmF5Jyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFsbCRzZXR0bGVkJCRhbGxTZXR0bGVkKGVudHJpZXMsIGxhYmVsKSB7XG4gICAgICByZXR1cm4gbmV3IGxpYiRyc3ZwJGFsbCRzZXR0bGVkJCRBbGxTZXR0bGVkKGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQsIGVudHJpZXMsIGxhYmVsKS5wcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkYWxsJHNldHRsZWQkJGRlZmF1bHQgPSBsaWIkcnN2cCRhbGwkc2V0dGxlZCQkYWxsU2V0dGxlZDtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRhbGwkJGFsbChhcnJheSwgbGFiZWwpIHtcbiAgICAgIHJldHVybiBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0LmFsbChhcnJheSwgbGFiZWwpO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkYWxsJCRkZWZhdWx0ID0gbGliJHJzdnAkYWxsJCRhbGw7XG4gICAgdmFyIGxpYiRyc3ZwJGFzYXAkJGxlbiA9IDA7XG4gICAgdmFyIGxpYiRyc3ZwJGFzYXAkJHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG4gICAgdmFyIGxpYiRyc3ZwJGFzYXAkJHZlcnR4TmV4dDtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRhc2FwJCRhc2FwKGNhbGxiYWNrLCBhcmcpIHtcbiAgICAgIGxpYiRyc3ZwJGFzYXAkJHF1ZXVlW2xpYiRyc3ZwJGFzYXAkJGxlbl0gPSBjYWxsYmFjaztcbiAgICAgIGxpYiRyc3ZwJGFzYXAkJHF1ZXVlW2xpYiRyc3ZwJGFzYXAkJGxlbiArIDFdID0gYXJnO1xuICAgICAgbGliJHJzdnAkYXNhcCQkbGVuICs9IDI7XG4gICAgICBpZiAobGliJHJzdnAkYXNhcCQkbGVuID09PSAyKSB7XG4gICAgICAgIC8vIElmIGxlbiBpcyAxLCB0aGF0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBzY2hlZHVsZSBhbiBhc3luYyBmbHVzaC5cbiAgICAgICAgLy8gSWYgYWRkaXRpb25hbCBjYWxsYmFja3MgYXJlIHF1ZXVlZCBiZWZvcmUgdGhlIHF1ZXVlIGlzIGZsdXNoZWQsIHRoZXlcbiAgICAgICAgLy8gd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhpcyBmbHVzaCB0aGF0IHdlIGFyZSBzY2hlZHVsaW5nLlxuICAgICAgICBsaWIkcnN2cCRhc2FwJCRzY2hlZHVsZUZsdXNoKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJGFzYXAkJGRlZmF1bHQgPSBsaWIkcnN2cCRhc2FwJCRhc2FwO1xuXG4gICAgdmFyIGxpYiRyc3ZwJGFzYXAkJGJyb3dzZXJXaW5kb3cgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93IDogdW5kZWZpbmVkO1xuICAgIHZhciBsaWIkcnN2cCRhc2FwJCRicm93c2VyR2xvYmFsID0gbGliJHJzdnAkYXNhcCQkYnJvd3NlcldpbmRvdyB8fCB7fTtcbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBsaWIkcnN2cCRhc2FwJCRicm93c2VyR2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgbGliJHJzdnAkYXNhcCQkYnJvd3Nlckdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBsaWIkcnN2cCRhc2FwJCRpc05vZGUgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nO1xuXG4gICAgLy8gdGVzdCBmb3Igd2ViIHdvcmtlciBidXQgbm90IGluIElFMTBcbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkaXNXb3JrZXIgPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICAvLyBub2RlXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkYXNhcCQkdXNlTmV4dFRpY2soKSB7XG4gICAgICB2YXIgbmV4dFRpY2sgPSBwcm9jZXNzLm5leHRUaWNrO1xuICAgICAgLy8gbm9kZSB2ZXJzaW9uIDAuMTAueCBkaXNwbGF5cyBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgd2hlbiBuZXh0VGljayBpcyB1c2VkIHJlY3Vyc2l2ZWx5XG4gICAgICAvLyBzZXRJbW1lZGlhdGUgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBpbnN0ZWFkXG4gICAgICB2YXIgdmVyc2lvbiA9IHByb2Nlc3MudmVyc2lvbnMubm9kZS5tYXRjaCgvXig/OihcXGQrKVxcLik/KD86KFxcZCspXFwuKT8oXFwqfFxcZCspJC8pO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmVyc2lvbikgJiYgdmVyc2lvblsxXSA9PT0gJzAnICYmIHZlcnNpb25bMl0gPT09ICcxMCcpIHtcbiAgICAgICAgbmV4dFRpY2sgPSBzZXRJbW1lZGlhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIG5leHRUaWNrKGxpYiRyc3ZwJGFzYXAkJGZsdXNoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gdmVydHhcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRhc2FwJCR1c2VWZXJ0eFRpbWVyKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBsaWIkcnN2cCRhc2FwJCR2ZXJ0eE5leHQobGliJHJzdnAkYXNhcCQkZmx1c2gpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRhc2FwJCR1c2VNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIG9ic2VydmVyID0gbmV3IGxpYiRyc3ZwJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKGxpYiRyc3ZwJGFzYXAkJGZsdXNoKTtcbiAgICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbm9kZS5kYXRhID0gKGl0ZXJhdGlvbnMgPSArK2l0ZXJhdGlvbnMgJSAyKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gd2ViIHdvcmtlclxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFzYXAkJHVzZU1lc3NhZ2VDaGFubmVsKCkge1xuICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGliJHJzdnAkYXNhcCQkZmx1c2g7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRhc2FwJCR1c2VTZXRUaW1lb3V0KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGxpYiRyc3ZwJGFzYXAkJGZsdXNoLCAxKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJGFzYXAkJHF1ZXVlID0gbmV3IEFycmF5KDEwMDApO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFzYXAkJGZsdXNoKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaWIkcnN2cCRhc2FwJCRsZW47IGkrPTIpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gbGliJHJzdnAkYXNhcCQkcXVldWVbaV07XG4gICAgICAgIHZhciBhcmcgPSBsaWIkcnN2cCRhc2FwJCRxdWV1ZVtpKzFdO1xuXG4gICAgICAgIGNhbGxiYWNrKGFyZyk7XG5cbiAgICAgICAgbGliJHJzdnAkYXNhcCQkcXVldWVbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGxpYiRyc3ZwJGFzYXAkJHF1ZXVlW2krMV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGxpYiRyc3ZwJGFzYXAkJGxlbiA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkYXNhcCQkYXR0ZW1wdFZlcnRleCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByID0gcmVxdWlyZTtcbiAgICAgICAgdmFyIHZlcnR4ID0gcigndmVydHgnKTtcbiAgICAgICAgbGliJHJzdnAkYXNhcCQkdmVydHhOZXh0ID0gdmVydHgucnVuT25Mb29wIHx8IHZlcnR4LnJ1bk9uQ29udGV4dDtcbiAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJGFzYXAkJHVzZVZlcnR4VGltZXIoKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gbGliJHJzdnAkYXNhcCQkdXNlU2V0VGltZW91dCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCRhc2FwJCRzY2hlZHVsZUZsdXNoO1xuICAgIC8vIERlY2lkZSB3aGF0IGFzeW5jIG1ldGhvZCB0byB1c2UgdG8gdHJpZ2dlcmluZyBwcm9jZXNzaW5nIG9mIHF1ZXVlZCBjYWxsYmFja3M6XG4gICAgaWYgKGxpYiRyc3ZwJGFzYXAkJGlzTm9kZSkge1xuICAgICAgbGliJHJzdnAkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRyc3ZwJGFzYXAkJHVzZU5leHRUaWNrKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkcnN2cCRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgbGliJHJzdnAkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRyc3ZwJGFzYXAkJHVzZU11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICB9IGVsc2UgaWYgKGxpYiRyc3ZwJGFzYXAkJGlzV29ya2VyKSB7XG4gICAgICBsaWIkcnN2cCRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJHJzdnAkYXNhcCQkdXNlTWVzc2FnZUNoYW5uZWwoKTtcbiAgICB9IGVsc2UgaWYgKGxpYiRyc3ZwJGFzYXAkJGJyb3dzZXJXaW5kb3cgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbGliJHJzdnAkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRyc3ZwJGFzYXAkJGF0dGVtcHRWZXJ0ZXgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGliJHJzdnAkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRyc3ZwJGFzYXAkJHVzZVNldFRpbWVvdXQoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkZGVmZXIkJGRlZmVyKGxhYmVsKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSB7IH07XG5cbiAgICAgIGRlZmVycmVkWydwcm9taXNlJ10gPSBuZXcgbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZGVmZXJyZWRbJ3Jlc29sdmUnXSA9IHJlc29sdmU7XG4gICAgICAgIGRlZmVycmVkWydyZWplY3QnXSA9IHJlamVjdDtcbiAgICAgIH0sIGxhYmVsKTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkZGVmZXIkJGRlZmF1bHQgPSBsaWIkcnN2cCRkZWZlciQkZGVmZXI7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkZmlsdGVyJCRmaWx0ZXIocHJvbWlzZXMsIGZpbHRlckZuLCBsYWJlbCkge1xuICAgICAgcmV0dXJuIGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQuYWxsKHByb21pc2VzLCBsYWJlbCkudGhlbihmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgICAgaWYgKCFsaWIkcnN2cCR1dGlscyQkaXNGdW5jdGlvbihmaWx0ZXJGbikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhIGZ1bmN0aW9uIGFzIGZpbHRlcidzIHNlY29uZCBhcmd1bWVudC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgdmFyIGZpbHRlcmVkID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGZpbHRlcmVkW2ldID0gZmlsdGVyRm4odmFsdWVzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0LmFsbChmaWx0ZXJlZCwgbGFiZWwpLnRoZW4oZnVuY3Rpb24oZmlsdGVyZWQpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0cyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgICAgICAgIHZhciBuZXdMZW5ndGggPSAwO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGZpbHRlcmVkW2ldKSB7XG4gICAgICAgICAgICAgIHJlc3VsdHNbbmV3TGVuZ3RoXSA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgbmV3TGVuZ3RoKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzdWx0cy5sZW5ndGggPSBuZXdMZW5ndGg7XG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJGZpbHRlciQkZGVmYXVsdCA9IGxpYiRyc3ZwJGZpbHRlciQkZmlsdGVyO1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcHJvbWlzZSRoYXNoJCRQcm9taXNlSGFzaChDb25zdHJ1Y3Rvciwgb2JqZWN0LCBsYWJlbCkge1xuICAgICAgdGhpcy5fc3VwZXJDb25zdHJ1Y3RvcihDb25zdHJ1Y3Rvciwgb2JqZWN0LCB0cnVlLCBsYWJlbCk7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJHByb21pc2UkaGFzaCQkZGVmYXVsdCA9IGxpYiRyc3ZwJHByb21pc2UkaGFzaCQkUHJvbWlzZUhhc2g7XG5cbiAgICBsaWIkcnN2cCRwcm9taXNlJGhhc2gkJFByb21pc2VIYXNoLnByb3RvdHlwZSA9IGxpYiRyc3ZwJHV0aWxzJCRvX2NyZWF0ZShsaWIkcnN2cCRlbnVtZXJhdG9yJCRkZWZhdWx0LnByb3RvdHlwZSk7XG4gICAgbGliJHJzdnAkcHJvbWlzZSRoYXNoJCRQcm9taXNlSGFzaC5wcm90b3R5cGUuX3N1cGVyQ29uc3RydWN0b3IgPSBsaWIkcnN2cCRlbnVtZXJhdG9yJCRkZWZhdWx0O1xuICAgIGxpYiRyc3ZwJHByb21pc2UkaGFzaCQkUHJvbWlzZUhhc2gucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9yZXN1bHQgPSB7fTtcbiAgICB9O1xuXG4gICAgbGliJHJzdnAkcHJvbWlzZSRoYXNoJCRQcm9taXNlSGFzaC5wcm90b3R5cGUuX3ZhbGlkYXRlSW5wdXQgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgcmV0dXJuIGlucHV0ICYmIHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCc7XG4gICAgfTtcblxuICAgIGxpYiRyc3ZwJHByb21pc2UkaGFzaCQkUHJvbWlzZUhhc2gucHJvdG90eXBlLl92YWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1Byb21pc2UuaGFzaCBtdXN0IGJlIGNhbGxlZCB3aXRoIGFuIG9iamVjdCcpO1xuICAgIH07XG5cbiAgICBsaWIkcnN2cCRwcm9taXNlJGhhc2gkJFByb21pc2VIYXNoLnByb3RvdHlwZS5fZW51bWVyYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcbiAgICAgIHZhciBpbnB1dCAgID0gdGhpcy5faW5wdXQ7XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gaW5wdXQpIHtcbiAgICAgICAgaWYgKHByb21pc2UuX3N0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGlucHV0LCBrZXkpKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBrZXksXG4gICAgICAgICAgICBlbnRyeTogaW5wdXRba2V5XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW5ndGggPSByZXN1bHRzLmxlbmd0aDtcbiAgICAgIHRoaXMuX3JlbWFpbmluZyA9IGxlbmd0aDtcbiAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBwcm9taXNlLl9zdGF0ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRQRU5ESU5HICYmIGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRzW2ldO1xuICAgICAgICB0aGlzLl9lYWNoRW50cnkocmVzdWx0LmVudHJ5LCByZXN1bHQucG9zaXRpb24pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRoYXNoJHNldHRsZWQkJEhhc2hTZXR0bGVkKENvbnN0cnVjdG9yLCBvYmplY3QsIGxhYmVsKSB7XG4gICAgICB0aGlzLl9zdXBlckNvbnN0cnVjdG9yKENvbnN0cnVjdG9yLCBvYmplY3QsIGZhbHNlLCBsYWJlbCk7XG4gICAgfVxuXG4gICAgbGliJHJzdnAkaGFzaCRzZXR0bGVkJCRIYXNoU2V0dGxlZC5wcm90b3R5cGUgPSBsaWIkcnN2cCR1dGlscyQkb19jcmVhdGUobGliJHJzdnAkcHJvbWlzZSRoYXNoJCRkZWZhdWx0LnByb3RvdHlwZSk7XG4gICAgbGliJHJzdnAkaGFzaCRzZXR0bGVkJCRIYXNoU2V0dGxlZC5wcm90b3R5cGUuX3N1cGVyQ29uc3RydWN0b3IgPSBsaWIkcnN2cCRlbnVtZXJhdG9yJCRkZWZhdWx0O1xuICAgIGxpYiRyc3ZwJGhhc2gkc2V0dGxlZCQkSGFzaFNldHRsZWQucHJvdG90eXBlLl9tYWtlUmVzdWx0ID0gbGliJHJzdnAkZW51bWVyYXRvciQkbWFrZVNldHRsZWRSZXN1bHQ7XG5cbiAgICBsaWIkcnN2cCRoYXNoJHNldHRsZWQkJEhhc2hTZXR0bGVkLnByb3RvdHlwZS5fdmFsaWRhdGlvbkVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdoYXNoU2V0dGxlZCBtdXN0IGJlIGNhbGxlZCB3aXRoIGFuIG9iamVjdCcpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRoYXNoJHNldHRsZWQkJGhhc2hTZXR0bGVkKG9iamVjdCwgbGFiZWwpIHtcbiAgICAgIHJldHVybiBuZXcgbGliJHJzdnAkaGFzaCRzZXR0bGVkJCRIYXNoU2V0dGxlZChsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0LCBvYmplY3QsIGxhYmVsKS5wcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkaGFzaCRzZXR0bGVkJCRkZWZhdWx0ID0gbGliJHJzdnAkaGFzaCRzZXR0bGVkJCRoYXNoU2V0dGxlZDtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRoYXNoJCRoYXNoKG9iamVjdCwgbGFiZWwpIHtcbiAgICAgIHJldHVybiBuZXcgbGliJHJzdnAkcHJvbWlzZSRoYXNoJCRkZWZhdWx0KGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQsIG9iamVjdCwgbGFiZWwpLnByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRoYXNoJCRkZWZhdWx0ID0gbGliJHJzdnAkaGFzaCQkaGFzaDtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRtYXAkJG1hcChwcm9taXNlcywgbWFwRm4sIGxhYmVsKSB7XG4gICAgICByZXR1cm4gbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdC5hbGwocHJvbWlzZXMsIGxhYmVsKS50aGVuKGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgICBpZiAoIWxpYiRyc3ZwJHV0aWxzJCRpc0Z1bmN0aW9uKG1hcEZuKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgbWFwJ3Mgc2Vjb25kIGFyZ3VtZW50LlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICB2YXIgcmVzdWx0cyA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZXN1bHRzW2ldID0gbWFwRm4odmFsdWVzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0LmFsbChyZXN1bHRzLCBsYWJlbCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJG1hcCQkZGVmYXVsdCA9IGxpYiRyc3ZwJG1hcCQkbWFwO1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkbm9kZSQkUmVzdWx0KCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkbm9kZSQkRVJST1IgPSBuZXcgbGliJHJzdnAkbm9kZSQkUmVzdWx0KCk7XG4gICAgdmFyIGxpYiRyc3ZwJG5vZGUkJEdFVF9USEVOX0VSUk9SID0gbmV3IGxpYiRyc3ZwJG5vZGUkJFJlc3VsdCgpO1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkbm9kZSQkZ2V0VGhlbihvYmopIHtcbiAgICAgIHRyeSB7XG4gICAgICAgcmV0dXJuIG9iai50aGVuO1xuICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICBsaWIkcnN2cCRub2RlJCRFUlJPUi52YWx1ZT0gZXJyb3I7XG4gICAgICAgIHJldHVybiBsaWIkcnN2cCRub2RlJCRFUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG5vZGUkJHRyeUFwcGx5KGYsIHMsIGEpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGYuYXBwbHkocywgYSk7XG4gICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGxpYiRyc3ZwJG5vZGUkJEVSUk9SLnZhbHVlID0gZXJyb3I7XG4gICAgICAgIHJldHVybiBsaWIkcnN2cCRub2RlJCRFUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRub2RlJCRtYWtlT2JqZWN0KF8sIGFyZ3VtZW50TmFtZXMpIHtcbiAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgIHZhciBuYW1lO1xuICAgICAgdmFyIGk7XG4gICAgICB2YXIgbGVuZ3RoID0gXy5sZW5ndGg7XG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGFyZ3NbeF0gPSBfW3hdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYXJndW1lbnROYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuYW1lID0gYXJndW1lbnROYW1lc1tpXTtcbiAgICAgICAgb2JqW25hbWVdID0gYXJnc1tpICsgMV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkbm9kZSQkYXJyYXlSZXN1bHQoXykge1xuICAgICAgdmFyIGxlbmd0aCA9IF8ubGVuZ3RoO1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkobGVuZ3RoIC0gMSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJnc1tpIC0gMV0gPSBfW2ldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJncztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRub2RlJCR3cmFwVGhlbmFibGUodGhlbiwgcHJvbWlzZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGhlbjogZnVuY3Rpb24ob25GdWxGaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gdGhlbi5jYWxsKHByb21pc2UsIG9uRnVsRmlsbG1lbnQsIG9uUmVqZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRub2RlJCRkZW5vZGVpZnkobm9kZUZ1bmMsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBmbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkobCArIDEpO1xuICAgICAgICB2YXIgYXJnO1xuICAgICAgICB2YXIgcHJvbWlzZUlucHV0ID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICBhcmcgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgICBpZiAoIXByb21pc2VJbnB1dCkge1xuICAgICAgICAgICAgLy8gVE9ETzogY2xlYW4gdGhpcyB1cFxuICAgICAgICAgICAgcHJvbWlzZUlucHV0ID0gbGliJHJzdnAkbm9kZSQkbmVlZHNQcm9taXNlSW5wdXQoYXJnKTtcbiAgICAgICAgICAgIGlmIChwcm9taXNlSW5wdXQgPT09IGxpYiRyc3ZwJG5vZGUkJEdFVF9USEVOX0VSUk9SKSB7XG4gICAgICAgICAgICAgIHZhciBwID0gbmV3IGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQobGliJHJzdnAkJGludGVybmFsJCRub29wKTtcbiAgICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocCwgbGliJHJzdnAkbm9kZSQkR0VUX1RIRU5fRVJST1IudmFsdWUpO1xuICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvbWlzZUlucHV0ICYmIHByb21pc2VJbnB1dCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBhcmcgPSBsaWIkcnN2cCRub2RlJCR3cmFwVGhlbmFibGUocHJvbWlzZUlucHV0LCBhcmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhcmdzW2ldID0gYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdChsaWIkcnN2cCQkaW50ZXJuYWwkJG5vb3ApO1xuXG4gICAgICAgIGFyZ3NbbF0gPSBmdW5jdGlvbihlcnIsIHZhbCkge1xuICAgICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlcnIpO1xuICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWwpO1xuICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMgPT09IHRydWUpXG4gICAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgbGliJHJzdnAkbm9kZSQkYXJyYXlSZXN1bHQoYXJndW1lbnRzKSk7XG4gICAgICAgICAgZWxzZSBpZiAobGliJHJzdnAkdXRpbHMkJGlzQXJyYXkob3B0aW9ucykpXG4gICAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgbGliJHJzdnAkbm9kZSQkbWFrZU9iamVjdChhcmd1bWVudHMsIG9wdGlvbnMpKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocHJvbWlzZUlucHV0KSB7XG4gICAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJG5vZGUkJGhhbmRsZVByb21pc2VJbnB1dChwcm9taXNlLCBhcmdzLCBub2RlRnVuYywgc2VsZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJG5vZGUkJGhhbmRsZVZhbHVlSW5wdXQocHJvbWlzZSwgYXJncywgbm9kZUZ1bmMsIHNlbGYpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmbi5fX3Byb3RvX18gPSBub2RlRnVuYztcblxuICAgICAgcmV0dXJuIGZuO1xuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCRub2RlJCRkZWZhdWx0ID0gbGliJHJzdnAkbm9kZSQkZGVub2RlaWZ5O1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkbm9kZSQkaGFuZGxlVmFsdWVJbnB1dChwcm9taXNlLCBhcmdzLCBub2RlRnVuYywgc2VsZikge1xuICAgICAgdmFyIHJlc3VsdCA9IGxpYiRyc3ZwJG5vZGUkJHRyeUFwcGx5KG5vZGVGdW5jLCBzZWxmLCBhcmdzKTtcbiAgICAgIGlmIChyZXN1bHQgPT09IGxpYiRyc3ZwJG5vZGUkJEVSUk9SKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlc3VsdC52YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRub2RlJCRoYW5kbGVQcm9taXNlSW5wdXQocHJvbWlzZSwgYXJncywgbm9kZUZ1bmMsIHNlbGYpe1xuICAgICAgcmV0dXJuIGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQuYWxsKGFyZ3MpLnRoZW4oZnVuY3Rpb24oYXJncyl7XG4gICAgICAgIHZhciByZXN1bHQgPSBsaWIkcnN2cCRub2RlJCR0cnlBcHBseShub2RlRnVuYywgc2VsZiwgYXJncyk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IGxpYiRyc3ZwJG5vZGUkJEVSUk9SKSB7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVzdWx0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG5vZGUkJG5lZWRzUHJvbWlzZUlucHV0KGFyZykge1xuICAgICAgaWYgKGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoYXJnLmNvbnN0cnVjdG9yID09PSBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJG5vZGUkJGdldFRoZW4oYXJnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRyYWNlJCRyYWNlKGFycmF5LCBsYWJlbCkge1xuICAgICAgcmV0dXJuIGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQucmFjZShhcnJheSwgbGFiZWwpO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkcmFjZSQkZGVmYXVsdCA9IGxpYiRyc3ZwJHJhY2UkJHJhY2U7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcmVqZWN0JCRyZWplY3QocmVhc29uLCBsYWJlbCkge1xuICAgICAgcmV0dXJuIGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQucmVqZWN0KHJlYXNvbiwgbGFiZWwpO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkcmVqZWN0JCRkZWZhdWx0ID0gbGliJHJzdnAkcmVqZWN0JCRyZWplY3Q7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcmVzb2x2ZSQkcmVzb2x2ZSh2YWx1ZSwgbGFiZWwpIHtcbiAgICAgIHJldHVybiBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0LnJlc29sdmUodmFsdWUsIGxhYmVsKTtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJHJlc29sdmUkJGRlZmF1bHQgPSBsaWIkcnN2cCRyZXNvbHZlJCRyZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHJldGhyb3ckJHJldGhyb3cocmVhc29uKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB0aHJvdyByZWFzb247XG4gICAgICB9KTtcbiAgICAgIHRocm93IHJlYXNvbjtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJHJldGhyb3ckJGRlZmF1bHQgPSBsaWIkcnN2cCRyZXRocm93JCRyZXRocm93O1xuXG4gICAgLy8gZGVmYXVsdCBhc3luYyBpcyBhc2FwO1xuICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLmFzeW5jID0gbGliJHJzdnAkYXNhcCQkZGVmYXVsdDtcbiAgICB2YXIgbGliJHJzdnAkJGNhc3QgPSBsaWIkcnN2cCRyZXNvbHZlJCRkZWZhdWx0O1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRhc3luYyhjYWxsYmFjaywgYXJnKSB7XG4gICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZy5hc3luYyhjYWxsYmFjaywgYXJnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkb24oKSB7XG4gICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZ1snb24nXS5hcHBseShsaWIkcnN2cCRjb25maWckJGNvbmZpZywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkb2ZmKCkge1xuICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWdbJ29mZiddLmFwcGx5KGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIFNldCB1cCBpbnN0cnVtZW50YXRpb24gdGhyb3VnaCBgd2luZG93Ll9fUFJPTUlTRV9JTlRSVU1FTlRBVElPTl9fYFxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93WydfX1BST01JU0VfSU5TVFJVTUVOVEFUSU9OX18nXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBsaWIkcnN2cCQkY2FsbGJhY2tzID0gd2luZG93WydfX1BST01JU0VfSU5TVFJVTUVOVEFUSU9OX18nXTtcbiAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlndXJlKCdpbnN0cnVtZW50JywgdHJ1ZSk7XG4gICAgICBmb3IgKHZhciBsaWIkcnN2cCQkZXZlbnROYW1lIGluIGxpYiRyc3ZwJCRjYWxsYmFja3MpIHtcbiAgICAgICAgaWYgKGxpYiRyc3ZwJCRjYWxsYmFja3MuaGFzT3duUHJvcGVydHkobGliJHJzdnAkJGV2ZW50TmFtZSkpIHtcbiAgICAgICAgICBsaWIkcnN2cCQkb24obGliJHJzdnAkJGV2ZW50TmFtZSwgbGliJHJzdnAkJGNhbGxiYWNrc1tsaWIkcnN2cCQkZXZlbnROYW1lXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkdW1kJCRSU1ZQID0ge1xuICAgICAgJ3JhY2UnOiBsaWIkcnN2cCRyYWNlJCRkZWZhdWx0LFxuICAgICAgJ1Byb21pc2UnOiBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0LFxuICAgICAgJ2FsbFNldHRsZWQnOiBsaWIkcnN2cCRhbGwkc2V0dGxlZCQkZGVmYXVsdCxcbiAgICAgICdoYXNoJzogbGliJHJzdnAkaGFzaCQkZGVmYXVsdCxcbiAgICAgICdoYXNoU2V0dGxlZCc6IGxpYiRyc3ZwJGhhc2gkc2V0dGxlZCQkZGVmYXVsdCxcbiAgICAgICdkZW5vZGVpZnknOiBsaWIkcnN2cCRub2RlJCRkZWZhdWx0LFxuICAgICAgJ29uJzogbGliJHJzdnAkJG9uLFxuICAgICAgJ29mZic6IGxpYiRyc3ZwJCRvZmYsXG4gICAgICAnbWFwJzogbGliJHJzdnAkbWFwJCRkZWZhdWx0LFxuICAgICAgJ2ZpbHRlcic6IGxpYiRyc3ZwJGZpbHRlciQkZGVmYXVsdCxcbiAgICAgICdyZXNvbHZlJzogbGliJHJzdnAkcmVzb2x2ZSQkZGVmYXVsdCxcbiAgICAgICdyZWplY3QnOiBsaWIkcnN2cCRyZWplY3QkJGRlZmF1bHQsXG4gICAgICAnYWxsJzogbGliJHJzdnAkYWxsJCRkZWZhdWx0LFxuICAgICAgJ3JldGhyb3cnOiBsaWIkcnN2cCRyZXRocm93JCRkZWZhdWx0LFxuICAgICAgJ2RlZmVyJzogbGliJHJzdnAkZGVmZXIkJGRlZmF1bHQsXG4gICAgICAnRXZlbnRUYXJnZXQnOiBsaWIkcnN2cCRldmVudHMkJGRlZmF1bHQsXG4gICAgICAnY29uZmlndXJlJzogbGliJHJzdnAkY29uZmlnJCRjb25maWd1cmUsXG4gICAgICAnYXN5bmMnOiBsaWIkcnN2cCQkYXN5bmNcbiAgICB9O1xuXG4gICAgLyogZ2xvYmFsIGRlZmluZTp0cnVlIG1vZHVsZTp0cnVlIHdpbmRvdzogdHJ1ZSAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10pIHtcbiAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGxpYiRyc3ZwJHVtZCQkUlNWUDsgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGVbJ2V4cG9ydHMnXSkge1xuICAgICAgbW9kdWxlWydleHBvcnRzJ10gPSBsaWIkcnN2cCR1bWQkJFJTVlA7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXNbJ1JTVlAnXSA9IGxpYiRyc3ZwJHVtZCQkUlNWUDtcbiAgICB9XG59KS5jYWxsKHRoaXMpO1xuXG5cbn0pKHJlcXVpcmUoXCJfX2Jyb3dzZXJpZnlfcHJvY2Vzc1wiKSkiLCJmdW5jdGlvbiBXYWxrZXIoZGVzY3JpcHRpb24sIGNoYXJhY3Rlcikge1xuICAgIHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyO1xuICAgIHRoaXMud2F5UG9pbnRzID0gZGVzY3JpcHRpb24ud2F5UG9pbnRzO1xuICAgIHRoaXMuY3VycmVudFdheXBvaW50ID0gbnVsbDtcbn1cblxuV2Fsa2VyLnByb3RvdHlwZSA9IHtcbiAgICBpbmNXYXlQb2ludDogZnVuY3Rpb24gaW5jV2F5UG9pbnQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFdheXBvaW50ID0gKHRoaXMuY3VycmVudFdheXBvaW50ICsgMSkgJSB0aGlzLndheVBvaW50cy5sZW5ndGg7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgICBpZih0aGlzLmN1cnJlbnRXYXlwb2ludCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIueCA9IHRoaXMud2F5UG9pbnRzWzBdLng7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci55ID0gdGhpcy53YXlQb2ludHNbMF0ueTtcbiAgICAgICAgICAgIHRoaXMuaW5jV2F5UG9pbnQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudFdheXBvaW50ID0gdGhpcy53YXlQb2ludHNbdGhpcy5jdXJyZW50V2F5cG9pbnRdO1xuICAgICAgICB2YXIgd2Fsa1ZlY3RvciA9IHtcbiAgICAgICAgICAgIHg6IGN1cnJlbnRXYXlwb2ludC54IC0gdGhpcy5jaGFyYWN0ZXIueCxcbiAgICAgICAgICAgIHk6IGN1cnJlbnRXYXlwb2ludC55IC0gdGhpcy5jaGFyYWN0ZXIueVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZGlzdGFuY2VGcm9tTmV4dFdheXBvaW50ID0gTWF0aC5zcXJ0KCh3YWxrVmVjdG9yLngpICogKHdhbGtWZWN0b3IueCkgKyAod2Fsa1ZlY3Rvci55KSAqICh3YWxrVmVjdG9yLnkpKTtcbiAgICAgICAgaWYoZGlzdGFuY2VGcm9tTmV4dFdheXBvaW50IDwgMTApIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnggPSB0aGlzLndheVBvaW50c1t0aGlzLmN1cnJlbnRXYXlwb2ludF0ueDtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnkgPSB0aGlzLndheVBvaW50c1t0aGlzLmN1cnJlbnRXYXlwb2ludF0ueTtcbiAgICAgICAgICAgIHRoaXMuaW5jV2F5UG9pbnQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3YWxrVmVjdG9yLnggPSB3YWxrVmVjdG9yLnggLyBkaXN0YW5jZUZyb21OZXh0V2F5cG9pbnQ7XG4gICAgICAgIHdhbGtWZWN0b3IueSA9IHdhbGtWZWN0b3IueSAvIGRpc3RhbmNlRnJvbU5leHRXYXlwb2ludDtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIuZHggPSB3YWxrVmVjdG9yLnggKiAyO1xuICAgICAgICB0aGlzLmNoYXJhY3Rlci5keSA9IHdhbGtWZWN0b3IueSAqIDI7XG4gICAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhbGtlcjtcbiJdfQ==
;