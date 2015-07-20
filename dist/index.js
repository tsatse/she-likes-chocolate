;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
﻿var Utils = require('utils');
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

},{"./game":2,"utils":3}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
module.exports = {
    37: false,
    38: false,
    39: false,
    40: false
};

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
var lastFrameUpdate = null;

function drawCharacter(ctx, character, mapOffset, images) {
    var image = images[character.sprites[character.action]];
    var xOffsetInSource = character.phase * character.width;

    ctx.drawImage(
        image,
        xOffsetInSource, 0,
        character.width, character.height,
        character.x - mapOffset.x, character.y - mapOffset.y,
        character.width, character.height
        );
}

function getMapOffset(x, y, mapWidth) {
    var result = {x:0, y:0};
    if(x > (window.innerWidth / 2)) {
        result.x = Math.min(x - window.innerWidth / 2, mapWidth - window.innerWidth);
    }
    
    return result;
}

function drawMap(ctx, mapOffset, images, mapWidth) {
    ctx.drawImage(
        images.sky,
        0, 0,
        images.sky.width, images.sky.height,
        0, 0,
        window.innerWidth, images.sky.height
        );
    ctx.drawImage(
        images.houses,
        Math.min(mapOffset.x, mapWidth - window.innerWidth), mapOffset.y,
        Math.min(window.innerWidth, images.houses.width), images.houses.height,
        0, 0,
        Math.min(window.innerWidth, images.houses.width), images.houses.height
        );
}

function drawForeground(ctx, mapOffset, foregroundImage) {
    ctx.drawImage(
        foregroundImage,
        ((mapOffset.x * 1.5) % foregroundImage.width) | 0, mapOffset.y,
        Math.min(ctx.canvas.width, foregroundImage.width), foregroundImage.height,
        0, 0,
        Math.min(ctx.canvas.width, foregroundImage.width), foregroundImage.height
        );
}

function isVisible(character, currentMapOffset) {
    if(
        (character.x - currentMapOffset.x) > 0 &&
        (character.x - currentMapOffset.x) < window.innerWidth
    ) {
        return true;
    }
    return false;
}

function drawDialogue(ctx, currentLine, defaultProperties) {
    if(currentLine === null) {
        return;
    }
    var position = defaultProperties[currentLine.who];
    if(currentLine.position) {
        position = currentLine.position;
    }

    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.font = 'normal 14pt helvetica';
    var metrics = ctx.measureText(currentLine.text);
    ctx.fillStyle = 'white';
    if(defaultProperties[currentLine.who].color) {
        ctx.fillStyle = defaultProperties[currentLine.who].color;
    }
    ctx.strokeStyle = 'black';
    ctx.strokeRect(position.x, position.y, metrics.width + 10, 30);
    ctx.globalAlpha = 0.85;
    ctx.fillRect(position.x, position.y, metrics.width + 10, 30);
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'black';
    ctx.fillText(currentLine.text, position.x + 5, position.y + 5);
}

function drawCharacters(host, currentMapOffset) {
    var characterList = Object.keys(host.characters);
    characterList.sort(function(a, b) {
        return host.characters[a].y - host.characters[b].y;
    }.bind(this));
    for(var i = 0 ; i < characterList.length ; i++) {
        var character = host.characters[characterList[i]];
        if(isVisible(character, currentMapOffset)) {
            drawCharacter(host.ctx, character, currentMapOffset, host.images);
        }
    }
}

function updateFrames(time, images, characters) {
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
            character.phase = (character.phase + 1) % (images[character.sprites[character.action]].width / character.width);
        }.bind(this));
    lastFrameUpdate = time;
}



function render(time, host) {
    updateFrames(time, host.images, host.characters);
    if((time - host.lastDraw) < 40) {
        return;
    }
    var currentPhase = host.getCurrentPhase();
    var currentMapOffset = getMapOffset(
        host.characters.me.x,
        host.characters.me.y,
        currentPhase.mapWidth
        );
    drawMap(
        host.ctx,
        currentMapOffset,
        host.images,
        currentPhase.mapWidth
        );
    drawCharacters(host, currentMapOffset);
    drawForeground(host.ctx, currentMapOffset, host.images.foreground);
    if('currentLine' in currentPhase && currentPhase.currentLine !== null) {
        drawDialogue(
            host.ctx,
            currentPhase.lines[currentPhase.currentLine],
            currentPhase.defaultProperties
            );
    }
}


module.exports = render;

},{}],2:[function(require,module,exports){
var RSVP = require('rsvp');

var Utils = require('utils');

var keys = require('./keys');


var gameplays = {
    Dialogue: require('./gameplay/dialogue'),
    Wander: require('./gameplay/wander')
};

var renderers = {
    PointNClick: require('./renderers/point-n-click')
};


function Game(canvas, gameStructure) {
    this.phaseName = null;
    this.characters = {};
    this.gameStructure = gameStructure;
    this.phaseInstances = {};
    this.registeredEventHandlers = {};
    this.lastUpdate = null;
    this.renderer = renderers.PointNClick;
    this.images = {};
    this.keys = keys;
    this.gameCanvas = canvas;
    this.gameCanvas.width = window.innerWidth;
    this.gameCanvas.height = window.innerHeight;
    this.ctx = this.gameCanvas.getContext('2d');
    document.addEventListener('keydown', function(event) {
            event.preventDefault();
            this.keys[event.keyCode] = true;
            if(this.registeredEventHandlers.keydown) {
                this.registeredEventHandlers.keydown(event);
            }
        }.bind(this), false);

    document.addEventListener('keyup', function(event) {
            event.preventDefault();
            this.keys[event.keyCode] = false;
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
                if(phaseSoFar[propertyName] && !(currentDescription.noInherit && currentDescription.noInherit[propertyName])) {
                    phaseSoFar[propertyName] = Utils.deepMerge(phaseSoFar[propertyName], currentDescription[propertyName]);
                }
                else {
                    phaseSoFar[propertyName] = currentDescription[propertyName];
                }
            }
            return phaseSoFar;
        }.bind(this), {});
    },

    filterImagesToLoad: function filterImagesToLoad(images) {
        if(!images) {
            return {};
        }
        return Object.keys(images)
            .filter(function(imageName) {
                return !this.images[imageName];
            }.bind(this))
            .reduce(function(objectSoFar, imageName) {
                objectSoFar[imageName] = images[imageName];
                return objectSoFar;
            }, {});
    },

    mergeImages: function mergeImages(images) {
        var imageName;

        for(imageName in images) {
            this.images[imageName] = images[imageName];
        }
    },

    gotoPhase: function gotoPhase(phaseName) {
        var phaseDescription;
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
                var imagesToLoad = this.filterImagesToLoad(phaseDescription.images);
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
                    for(var propertyName in phaseDescription) {
                        if(['images', 'gameplayType'].indexOf(propertyName) === -1) {
                            this.phaseInstances[phaseName][propertyName] = phaseDescription[propertyName];
                        }
                    }
                }
                if(this.phaseInstances[phaseName].init) {
                    this.phaseInstances[phaseName].init(phaseName);
                }
                this.registerEventHandlers(this.phaseInstances[this.phaseName]);
                this.changingPhase = false;
            }.bind(this))
            .catch(function(error) {
                console.error(error);
            });
    },

    loop: function loop(time) {
        if(!this.changingPhase) {
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
        }

        requestAnimationFrame(this.loop.bind(this));
    }
};


module.exports = Game;

},{"./keys":4,"./gameplay/dialogue":5,"./gameplay/wander":7,"./renderers/point-n-click":6,"utils":3,"rsvp":8}],7:[function(require,module,exports){
var Character = require('../character');


function Wander(host) {
}

Wander.prototype = {
    init: function() {
        var characterDescription;
        for(var characterName in this.characters) {
            if(!this.host.characters[characterName]) {
                characterDescription = this.characters[characterName];
                this.host.characters[characterName] = new Character(characterDescription);
            }
        }
    },

    update: function update(time) {
        this.updateMovement(time);
        return true;
    },

    updateMovement: function updateMovement(time) {
        var unit = 2;
        this.host.characters.me.dx = 0;
        this.host.characters.me.dy = 0;
        if(this.host.keys[37]) { this.host.characters.me.dx -= unit;}
        if(this.host.keys[39]) { this.host.characters.me.dx += unit;}
        if(this.host.keys[38]) { this.host.characters.me.dy -= unit;}
        if(this.host.keys[40]) { this.host.characters.me.dy += unit;}

        for(var sinkName in this.sinks) {
            var sink = this.sinks[sinkName];
            if(
                (
                    this.host.characters.me.x === sink.x &&
                    this.host.characters.me.y >= sink.y &&
                    this.host.characters.me.y <= sink.y + sink.height &&
                    this.host.characters.me.action === 'walkRight'
                ) ||

                (
                    this.host.characters.me.x === sink.x + sink.width &&
                    this.host.characters.me.y >= sink.y &&
                    this.host.characters.me.y <= sink.y + sink.height &&
                    this.host.characters.me.action === 'walkLeft'
                ) ||

                (
                    this.host.characters.me.y === sink.y &&
                    this.host.characters.me.x >= sink.x &&
                    this.host.characters.me.x <= sink.x + sink.width &&
                    this.host.characters.me.action === 'walkDown'
                ) ||

                (
                    this.host.characters.me.y === sink.y + sink.height &&
                    this.host.characters.me.x >= sink.x &&
                    this.host.characters.me.x <= sink.x + sink.width &&
                    this.host.characters.me.action === 'walkUp'
                )
            ) {
                this.host.characters.me.action = 'idle';
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
                if(character.dx > 0)
                    { character.setProperty('action', 'walkRight');}
                else if(character.dx < 0)
                    { character.setProperty('action', 'walkLeft');}
                else if(character.dy > 0)
                    { character.setProperty('action', 'walkUp');}
                else if(character.dy < 0)
                    { character.setProperty('action', 'walkDown');}
                else
                    { this.host.characters.me.setProperty('action', 'idle'); }
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

},{"../character":9}],10:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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
},{"__browserify_process":10}],9:[function(require,module,exports){
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

},{"./walker":11}],11:[function(require,module,exports){
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

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2luZGV4LmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9ub2RlX21vZHVsZXMvdXRpbHMvc3JjL3V0aWxzLmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9zcmMva2V5cy5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2dhbWVwbGF5L2RpYWxvZ3VlLmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9zcmMvcmVuZGVyZXJzL3BvaW50LW4tY2xpY2suanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL3NyYy9nYW1lLmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9zcmMvZ2FtZXBsYXkvd2FuZGVyLmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9ub2RlX21vZHVsZXMvZ3J1bnQtYnJvd3NlcmlmeTIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9ub2RlX21vZHVsZXMvcnN2cC9kaXN0L3JzdnAuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL3NyYy9jaGFyYWN0ZXIuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL3NyYy93YWxrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDektBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4b0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsi77u/dmFyIFV0aWxzID0gcmVxdWlyZSgndXRpbHMnKTtcclxudmFyIEdhbWUgPSByZXF1aXJlKCcuL2dhbWUnKTtcclxuXHJcblxyXG52YXIgdGhlR2FtZSA9IG5ldyBHYW1lKFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY2FudmFzJyksXHJcbiAgICB7XHJcbiAgICAgICAgcGhhc2VzOiB7XHJcbiAgICAgICAgICAgIGZpcnN0RGlhbG9ndWU6IHtcclxuICAgICAgICAgICAgICAgIGdhbWVwbGF5VHlwZTogJ0RpYWxvZ3VlJyxcclxuICAgICAgICAgICAgICAgIHJlbmRlcmluZ1R5cGU6ICdQb2ludE5DbGljaycsXHJcbiAgICAgICAgICAgICAgICBiYXNlZE9uOiAnaW50cm8nLFxyXG4gICAgICAgICAgICAgICAgbm9Jbmhlcml0OiB7J2dhbWVwbGF5VHlwZSc6IHRydWUsICdyZW5kZXJpbmdUeXBlJzogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0UHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lOiB7eDogMjAyLCB5OiAxODUsIGNvbG9yOiAnY3lhbid9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlcjoge3g6IDEyNSwgeTogMTU1LCBjb2xvcjogJ29yYW5nZSd9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGluZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdobzogJ21lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJIZXkgISBXaGF0J3MgdXAgP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdobzogJ2hlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiSGkuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aG86ICdtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiV2hhdCdzIHdyb25nID8geW91IHNlZW0gc28gZG93bi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aG86ICdoZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkl0J3Mgb2ssIEknbSBqdXN0IGluIHRoZSBtb29kIGZvciBzdGFyaW5nIGF0IHRoZSBzZWEgZm9yIGEgd2hpbGUuXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hvOiAnbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIldoYXQgY2FuIEkgZG8gdG8gY2hlZXIgeW91IHVwID9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aG86ICdoZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFsbCBJIHdpc2ggZm9yIHJpZ2h0IG5vdyBpcyBhIGxpdHRsZSBwaWVjZSBvZiBjaG9jb2xhdGUuXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hvOiAnbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlYWxseSA/IEFoIGFoLCBqdXN0IHlvdSB3YWl0ICFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHNlY29uZERpYWxvZ3VlOiB7XHJcbiAgICAgICAgICAgICAgICBiYXNlZE9uOiAnZmlyc3REaWFsb2d1ZScsXHJcbiAgICAgICAgICAgICAgICBub0luaGVyaXQ6IHsnbGluZXMnOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIHJlc3RhcnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5lczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hvOiAnbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkhleSwgSSdtIGFsbW9zdCBkb25lICFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aG86ICdoZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnZ3JlYXQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdobzogJ21lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJXZWxsIEknZCBiZXR0ZXIgZ2V0IGdvaW5nIHRoZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpbnRybzoge1xyXG4gICAgICAgICAgICAgICAgZ2FtZXBsYXlUeXBlOiAnV2FuZGVyJyxcclxuICAgICAgICAgICAgICAgIHJlbmRlcmluZ1R5cGU6ICdQb2ludE5DbGljaycsXHJcbiAgICAgICAgICAgICAgICBtYXBXaWR0aDogMjQwMCxcclxuICAgICAgICAgICAgICAgIG1pblg6IDIwMCxcclxuICAgICAgICAgICAgICAgIG1heFg6IDIzNTAsXHJcbiAgICAgICAgICAgICAgICBtaW5ZOiAxNTAsXHJcbiAgICAgICAgICAgICAgICBtYXhZOiAyODAsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkbGU6ICdoZXJTcHJpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFsa2luZzogJ2hlclNwcml0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxrTGVmdDogJ2hlclNwcml0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxrUmlnaHQ6ICdoZXJTcHJpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDE1NVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRsZTogJ21lU3ByaXRlSWRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWxraW5nOiAnbWVTcHJpdGVJZGxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGtMZWZ0OiAnbWVTcHJpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Fsa1JpZ2h0OiAnbWVTcHJpdGVSaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxrVXA6ICdtZVNwcml0ZUlkbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Fsa0Rvd246ICdtZVNwcml0ZUlkbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDIwMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMTg1XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNreTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FydC9za3kucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JlZ3JvdW5kOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJ0L2ZvcmVncm91bmQucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICBob3VzZXM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcnQvaG91c2VzLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVyU3ByaXRlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJ0L2hlcl9zcHJpdGUucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICBtZVNwcml0ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FydC9tZV9zcHJpdGUucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICBtZVNwcml0ZVJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJ0L21lX3Nwcml0ZV9yaWdodC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lU3ByaXRlSWRsZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FydC9tZV9zcHJpdGVfaWRsZS5wbmcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2lua3M6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YWxrVG9IZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ29pbmdGb3JDaG9jbzoge1xyXG4gICAgICAgICAgICAgICAgYmFzZWRPbjogJ2ludHJvJyxcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBqYWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkbGU6ICdtZVNwcml0ZUlkbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Fsa0xlZnQ6ICdtZVNwcml0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxrUmlnaHQ6ICdtZVNwcml0ZVJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGtVcDogJ21lU3ByaXRlSWRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxrRG93bjogJ21lU3ByaXRlSWRsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogODAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAxODUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW91cjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3dhbGtlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXlQb2ludHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IDIxMCwgeTogMjEwfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IDgwMCwgeTogMjIwfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IDI0MCwgeTogMjUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGFuOiB7XHJcbiAgICAgICAgICAgIGludHJvOiB7dGFsa1RvSGVyOiAnZmlyc3REaWFsb2d1ZSd9LFxyXG4gICAgICAgICAgICBmaXJzdERpYWxvZ3VlOiB7ZW5kOiAnZ29pbmdGb3JDaG9jbyd9LFxyXG4gICAgICAgICAgICBnb2luZ0ZvckNob2NvOiB7dGFsa1RvSGVyOiAnc2Vjb25kRGlhbG9ndWUnfSxcclxuICAgICAgICAgICAgc2Vjb25kRGlhbG9ndWU6IHtlbmQ6ICdnb2luZ0ZvckNob2NvJ30sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnRyeTogJ2ludHJvJ1xyXG4gICAgfVxyXG4pO1xyXG5cclxuXHJcbnRoZUdhbWUuc3RhcnQoKTtcclxuIiwiKGZ1bmN0aW9uKCl7KGZ1bmN0aW9uKGdsb2JhbCkge1xuICAgIHZhciBpZENvdW50ZXJzID0ge307XG4gICAgdmFyIFV0aWxzID0ge1xuICAgICAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgdGhlIDMgc2ltcGxlIHR5cGVzLCBhbmQgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmKG51bGwgPT09IG9iaiB8fCAnb2JqZWN0JyAhPT0gdHlwZW9mIG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjb3B5O1xuICAgICAgICAgICAgLy8gSGFuZGxlIERhdGVcbiAgICAgICAgICAgIGlmKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICBjb3B5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBjb3B5LnNldFRpbWUob2JqLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBIYW5kbGUgQXJyYXlcbiAgICAgICAgICAgIGlmKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgY29weSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IG9iai5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBjb3B5W2ldID0gY2xvbmUob2JqW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBPYmplY3RcbiAgICAgICAgICAgIGlmKG9iaiBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgICAgIGNvcHkgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29weVthdHRyXSA9IGNsb25lKG9ialthdHRyXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGNvcHkgb2JqISBJdHMgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1lcmdlOiBmdW5jdGlvbihvYmplY3QxLCBvYmplY3QyKSB7XG4gICAgICAgICAgICBmb3IodmFyIGF0dHJpYnV0ZU5hbWUgaW4gb2JqZWN0Mikge1xuICAgICAgICAgICAgICAgIGlmKG9iamVjdDIuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0MVthdHRyaWJ1dGVOYW1lXSA9IG9iamVjdDJbYXR0cmlidXRlTmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVlcE1lcmdlOiBmdW5jdGlvbiAob2JqZWN0MSwgb2JqZWN0Mikge1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIG9iamVjdDIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIG9iamVjdDJbcHJvcGVydHlOYW1lXS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0MVtwcm9wZXJ0eU5hbWVdID0gVXRpbHMuZGVlcE1lcmdlKG9iamVjdDFbcHJvcGVydHlOYW1lXSwgb2JqZWN0Mltwcm9wZXJ0eU5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdDFbcHJvcGVydHlOYW1lXSA9IG9iamVjdDJbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QxW3Byb3BlcnR5TmFtZV0gPSBvYmplY3QyW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0MTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkSW1hZ2VzOiBmdW5jdGlvbihpbWFnZXNVUkxzLCBhbGxEb25lKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2VzTmFtZXMgPSBPYmplY3Qua2V5cyhpbWFnZXNVUkxzKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgIHZhciBsb2FkZWQgPSAwO1xuICAgICAgICAgICAgdmFyIGxvYWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxvYWRlZCArPSAxO1xuICAgICAgICAgICAgICAgIGlmKGxvYWRlZCA9PT0gaW1hZ2VzTmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbERvbmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGltYWdlc05hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlTmFtZSA9IGltYWdlc05hbWVzW2ldO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBpbWFnZXNVUkxzW2ltYWdlTmFtZV07XG4gICAgICAgICAgICAgICAgaWYodXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBuZXcgZ2xvYmFsLkltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpbWFnZU5hbWVdID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gbG9hZENhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gdXJsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpbWFnZU5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TWV0aG9kU2lnbmF0dXJlOiBmdW5jdGlvbihvYmplY3QsIG1ldGhvZFN0cmluZykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG1ldGhvZFN0cmluZy5zdWJzdHIoOSwgbWV0aG9kU3RyaW5nLmluZGV4T2YoJyknKSArIDEgLSA5KTtcbiAgICAgICAgICAgIGlmKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9iamVjdC50b1N0cmluZygpICsgJy4nICsgcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVDdHhXaXRoSW1hZ2VzOiBmdW5jdGlvbihpbWFnZXMsIGRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbmFtZXMgPSBPYmplY3Qua2V5cyhpbWFnZXMpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgICAgICAgICBpZihpbWFnZXNbbmFtZV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25bbmFtZV0uY2xlYXJSZWN0KDAsIDAsIGltYWdlc1tuYW1lXS53aWR0aCwgaW1hZ2VzW25hbWVdLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uW25hbWVdLmRyYXdJbWFnZShpbWFnZXNbbmFtZV0sIDAsIDAsIGltYWdlc1tuYW1lXS53aWR0aCwgaW1hZ2VzW25hbWVdLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltuYW1lXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRyYXdMaW5lOiBmdW5jdGlvbihjdHgsIHAxLCBwMikge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhwMS54LCBwMS55KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocDIueCwgcDIueSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGFzaExpbmU6IGZ1bmN0aW9uKHgsIHksIHgyLCB5MiwgZGEpIHtcbiAgICAgICAgICAgIGlmKCFkYSkge1xuICAgICAgICAgICAgICAgIGRhID0gWzEwLCA1XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICAgICAgdmFyIGR4ID0gKHgyIC0geCksXG4gICAgICAgICAgICAgICAgZHkgPSAoeTIgLSB5KTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgdmFyIHJvdCA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKHgsIHkpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlVG8oMCwgMCk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZShyb3QpO1xuICAgICAgICAgICAgdmFyIGRjID0gZGEubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGRpID0gMCxcbiAgICAgICAgICAgICAgICBkcmF3ID0gdHJ1ZTtcbiAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgICAgd2hpbGUobGVuID4geCkge1xuICAgICAgICAgICAgICAgIHggKz0gZGFbZGkrKyAlIGRjXTtcbiAgICAgICAgICAgICAgICBpZih4ID4gbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBsZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGRyYXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lVG8oeCwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUbyh4LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHJhdyA9ICFkcmF3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGFzaFJlY3Q6IGZ1bmN0aW9uKHgsIHksIGR4LCBkeSwgZGEpIHtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBVdGlscy5kYXNoTGluZS5jYWxsKHRoaXMsIHgsIHksIHggKyBkeCwgeSwgZGEpO1xuICAgICAgICAgICAgVXRpbHMuZGFzaExpbmUuY2FsbCh0aGlzLCB4ICsgZHgsIHksIHggKyBkeCwgeSArIGR5LCBkYSk7XG4gICAgICAgICAgICBVdGlscy5kYXNoTGluZS5jYWxsKHRoaXMsIHggKyBkeCwgeSArIGR5LCB4LCB5ICsgZHksIGRhKTtcbiAgICAgICAgICAgIFV0aWxzLmRhc2hMaW5lLmNhbGwodGhpcywgeCwgeSArIGR5LCB4LCB5LCBkYSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5zdHJva2UoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkcmF3UGl4ZWw6IGZ1bmN0aW9uKHgsIHksIHIsIGcsIGIsIHdpZHRoKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2VEYXRhID0gdGhpcy5jcmVhdGVJbWFnZURhdGEod2lkdGgsIHdpZHRoKTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbKGkgKyBqICogd2lkdGgpICogNCArIDBdID0gcjtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbKGkgKyBqICogd2lkdGgpICogNCArIDFdID0gZztcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbKGkgKyBqICogd2lkdGgpICogNCArIDJdID0gYjtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbKGkgKyBqICogd2lkdGgpICogNCArIDNdID0gMjU1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgeCAtIHBhcnNlSW50KHdpZHRoIC8gMiksIHkgLSBwYXJzZUludCh3aWR0aCAvIDIpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkcmF3UGl4ZWxMaW5lOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MiwgciwgZywgYiwgd2lkdGgpIHtcbiAgICAgICAgICAgIC8vIERlZmluZSBkaWZmZXJlbmNlcyBhbmQgZXJyb3IgY2hlY2tcbiAgICAgICAgICAgIHZhciBkeCA9IE1hdGguYWJzKHgyIC0geDEpO1xuICAgICAgICAgICAgdmFyIGR5ID0gTWF0aC5hYnMoeTIgLSB5MSk7XG4gICAgICAgICAgICB2YXIgc3ggPSAoeDEgPCB4MikgPyAxIDogLTE7XG4gICAgICAgICAgICB2YXIgc3kgPSAoeTEgPCB5MikgPyAxIDogLTE7XG4gICAgICAgICAgICB2YXIgZXJyID0gZHggLSBkeTtcbiAgICAgICAgICAgIFV0aWxzLmRyYXdQaXhlbC5jYWxsKHRoaXMsIHgxLCB5MSwgciwgZywgYiwgd2lkdGgpO1xuICAgICAgICAgICAgLy8gTWFpbiBsb29wXG4gICAgICAgICAgICB3aGlsZSghKCh4MSA9PT0geDIpICYmICh5MSA9PT0geTIpKSkge1xuICAgICAgICAgICAgICAgIHZhciBlMiA9IGVyciA8PCAxO1xuICAgICAgICAgICAgICAgIGlmKGUyID4gLWR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGVyciAtPSBkeTtcbiAgICAgICAgICAgICAgICAgICAgeDEgKz0gc3g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGUyIDwgZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyICs9IGR4O1xuICAgICAgICAgICAgICAgICAgICB5MSArPSBzeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVXRpbHMuZHJhd1BpeGVsLmNhbGwodGhpcywgeDEsIHkxLCByLCBnLCBiLCB3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzaXplQ2FudmFzOiBmdW5jdGlvbihjdHgsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xuICAgICAgICAgICAgaWYoY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG1wQ2FudmFzID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIHZhciB0bXBDdHggPSB0bXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1pbih3aWR0aCwgY2FudmFzLndpZHRoKTtcbiAgICAgICAgICAgICAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5taW4oaGVpZ2h0LCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0bXBDYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgdG1wQ2FudmFzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdG1wQ3R4LmRyYXdJbWFnZShjYW52YXMsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRtcENhbnZhcywgMCwgMCwgbWluV2lkdGgsIG1pbkhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgbWluV2lkdGgsIG1pbkhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3R4O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldE5ld0lkOiBmdW5jdGlvbihjb3VudGVyTmFtZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZm9ybWF0UmVzdWx0KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hbWUgKyAnXycgKyB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgICAgIGlmKCFjb3VudGVyTmFtZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJOYW1lID0gJyNkZWZhdWx0X2lkX25hbWUjJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCFpZENvdW50ZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldElkcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIWlkQ291bnRlcnMuaGFzT3duUHJvcGVydHkoY291bnRlck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgaWRDb3VudGVyc1tjb3VudGVyTmFtZV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ID0gZm9ybWF0UmVzdWx0KGNvdW50ZXJOYW1lLCBpZENvdW50ZXJzW2NvdW50ZXJOYW1lXSk7XG4gICAgICAgICAgICBpZENvdW50ZXJzW2NvdW50ZXJOYW1lXSsrO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICByZXNldElkczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZENvdW50ZXJzID0ge307XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0SWRDb3VudGVyczogZnVuY3Rpb24oY291bnRlcnMpIHtcbiAgICAgICAgICAgIGlkQ291bnRlcnMgPSBjb3VudGVycztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRJZENvdW50ZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBpZENvdW50ZXJzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldEVsZW1lbnRQb3NpdGlvbjogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGxlZnQgPSAwO1xuICAgICAgICAgICAgdmFyIHRvcCA9IDA7XG4gICAgICAgICAgICB2YXIgZSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB3aGlsZShlLm9mZnNldFBhcmVudCAhPT0gdW5kZWZpbmVkICYmIGUub2Zmc2V0UGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGVmdCArPSBlLm9mZnNldExlZnQgKyAoZS5jbGllbnRMZWZ0ICE9PSBudWxsID8gZS5jbGllbnRMZWZ0IDogMCk7XG4gICAgICAgICAgICAgICAgdG9wICs9IGUub2Zmc2V0VG9wICsgKGUuY2xpZW50VG9wICE9PSBudWxsID8gZS5jbGllbnRUb3AgOiAwKTtcbiAgICAgICAgICAgICAgICBlID0gZS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IGxlZnQsXG4gICAgICAgICAgICAgICAgeTogdG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldE1vdXNlUG9zaXRpb246IGZ1bmN0aW9uKGV2ZW50LCBkb21FbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gVXRpbHMucmVhZEdsb2JhbE1vdXNlKGV2ZW50KTtcbiAgICAgICAgICAgIGlmKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudFBvc2l0aW9uID0gVXRpbHMuZ2V0RWxlbWVudFBvc2l0aW9uKGRvbUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC54IC09IGVsZW1lbnRQb3NpdGlvbi54O1xuICAgICAgICAgICAgICAgIHJlc3VsdC55IC09IGVsZW1lbnRQb3NpdGlvbi55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICBhc3NlcnROb3ROdWxsOiBmdW5jdGlvbih2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICAgICAgaWYoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBudWxsIHZhbHVlICcgKyBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBlbXB0eURvbUVsZW1lbnQ6IGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHdoaWxlKGRvbUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZWFkR2xvYmFsTW91c2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgICAgICBpZihldmVudC5wYWdlWCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50LnBhZ2VZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQueCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICAgICAgICAgIHJlc3VsdC55ID0gZXZlbnQucGFnZVk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQueCA9IGV2ZW50LmNsaWVudFggKyBnbG9iYWwuZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICsgZ2xvYmFsLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIHJlc3VsdC55ID0gZXZlbnQuY2xpZW50WSArIGdsb2JhbC5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArIGdsb2JhbC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICBpbmRleE9mOiBmdW5jdGlvbihhcnJheSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBIU0xWYWx1ZTogZnVuY3Rpb24objEsIG4yLCBodWUpIHtcbiAgICAgICAgICAgIHZhciB2YWw7XG4gICAgICAgICAgICBpZihodWUgPiA2KSB7XG4gICAgICAgICAgICAgICAgaHVlIC09IDY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGh1ZSA8IDApIHtcbiAgICAgICAgICAgICAgICBodWUgKz0gNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGh1ZSA8IDEpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBuMSArIChuMiAtIG4xKSAqIGh1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoaHVlIDwgMykge1xuICAgICAgICAgICAgICAgIHZhbCA9IG4yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihodWUgPCA0KSB7XG4gICAgICAgICAgICAgICAgdmFsID0gbjEgKyAobjIgLSBuMSkgKiAoNCAtIGh1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBuMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgSFNMVG9SR0I6IGZ1bmN0aW9uKGgsIHMsIGwpIHtcbiAgICAgICAgICAgIHZhciByLCBnLCBiO1xuICAgICAgICAgICAgaCA9IGggLSBNYXRoLmZsb29yKGgpO1xuICAgICAgICAgICAgcyA9IHRoaXMuY2xhbXAocywgMCwgMSk7XG4gICAgICAgICAgICBsID0gdGhpcy5jbGFtcChsLCAwLCAxKTtcbiAgICAgICAgICAgIGlmKHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICByID0gbDtcbiAgICAgICAgICAgICAgICBnID0gbDtcbiAgICAgICAgICAgICAgICBiID0gbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBtMSwgbTI7XG4gICAgICAgICAgICAgICAgaWYobCA8PSAwLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgbTIgPSBsICogKDEgKyBzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG0yID0gbCArIHMgLSBsICogcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbTEgPSAyLjAgKiBsIC0gbTI7XG4gICAgICAgICAgICAgICAgciA9IHRoaXMuSFNMVmFsdWUobTEsIG0yLCBoICogNi4wICsgMi4wKTtcbiAgICAgICAgICAgICAgICBnID0gdGhpcy5IU0xWYWx1ZShtMSwgbTIsIGggKiA2LjApO1xuICAgICAgICAgICAgICAgIGIgPSB0aGlzLkhTTFZhbHVlKG0xLCBtMiwgaCAqIDYuMCAtIDIuMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHI6IHIsXG4gICAgICAgICAgICAgICAgZzogZyxcbiAgICAgICAgICAgICAgICBiOiBiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIFJHQlRvSFNWOiBmdW5jdGlvbiBSR0JUb0hTVihjb2xvclJHQikge1xuICAgICAgICAgICAgdmFyIHIgPSBjb2xvclJHQi5yIC8gMjU1O1xuICAgICAgICAgICAgdmFyIGcgPSBjb2xvclJHQi5nIC8gMjU1O1xuICAgICAgICAgICAgdmFyIGIgPSBjb2xvclJHQi5iIC8gMjU1O1xuICAgICAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgICAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICAgICAgdmFyIGgsIHMsIHYgPSBtYXg7XG5cbiAgICAgICAgICAgIHZhciBkID0gbWF4IC0gbWluO1xuICAgICAgICAgICAgcyA9IG1heCA9PT0gMCA/IDAgOiBkIC8gbWF4O1xuXG4gICAgICAgICAgICBpZihtYXggPT09IG1pbikge1xuICAgICAgICAgICAgICAgIGggPSAwOyAvLyBhY2hyb21hdGljXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2gobWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGc6XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gKGIgLSByKSAvIGQgKyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgYjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSAociAtIGcpIC8gZCArIDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaCAvPSA2O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGg6IGgsXG4gICAgICAgICAgICAgICAgczogcyxcbiAgICAgICAgICAgICAgICB2OiB2XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIEhTVlRvUkdCOiBmdW5jdGlvbiBIU1ZUb1JHQihoLCBzLCB2KSB7XG4gICAgICAgICAgICB2YXIgciwgZywgYjtcblxuICAgICAgICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKGggKiA2KTtcbiAgICAgICAgICAgIHZhciBmID0gaCAqIDYgLSBpO1xuICAgICAgICAgICAgdmFyIHAgPSB2ICogKDEgLSBzKTtcbiAgICAgICAgICAgIHZhciBxID0gdiAqICgxIC0gZiAqIHMpO1xuICAgICAgICAgICAgdmFyIHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyk7XG5cbiAgICAgICAgICAgIHN3aXRjaChpICUgNikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgciA9IHY7XG4gICAgICAgICAgICAgICAgICAgIGcgPSB0O1xuICAgICAgICAgICAgICAgICAgICBiID0gcDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICByID0gcTtcbiAgICAgICAgICAgICAgICAgICAgZyA9IHY7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBwO1xuICAgICAgICAgICAgICAgICAgICBnID0gdjtcbiAgICAgICAgICAgICAgICAgICAgYiA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgciA9IHA7XG4gICAgICAgICAgICAgICAgICAgIGcgPSBxO1xuICAgICAgICAgICAgICAgICAgICBiID0gdjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICByID0gdDtcbiAgICAgICAgICAgICAgICAgICAgZyA9IHA7XG4gICAgICAgICAgICAgICAgICAgIGIgPSB2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIHIgPSB2O1xuICAgICAgICAgICAgICAgICAgICBnID0gcDtcbiAgICAgICAgICAgICAgICAgICAgYiA9IHE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHI6IHBhcnNlSW50KHIgKiAyNTUpLFxuICAgICAgICAgICAgICAgIGc6IHBhcnNlSW50KGcgKiAyNTUpLFxuICAgICAgICAgICAgICAgIGI6IHBhcnNlSW50KGIgKiAyNTUpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIEhTVlRvSFNMOiBmdW5jdGlvbihoLCBzLCB2KSB7XG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgdGhlIGxpZ2h0bmVzcyBpbiB0aGUgcmFuZ2UgWzAsMTAwXVxuICAgICAgICAgICAgdmFyIGwgPSAoMiAtIHMgLyAxMDApICogdiAvIDI7XG5cbiAgICAgICAgICAgIHZhciBoc2wgPSB7XG4gICAgICAgICAgICAgICAgJ2gnOiBoLFxuICAgICAgICAgICAgICAgICdzJzogcyAqIHYgLyAobCA8IDUwID8gbCAqIDIgOiAyMDAgLSBsICogMiksXG4gICAgICAgICAgICAgICAgJ2wnOiBsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBjb3JyZWN0IGEgZGl2aXNpb24tYnktemVybyBlcnJvclxuICAgICAgICAgICAgaWYoaXNOYU4oaHNsLnMpKSB7XG4gICAgICAgICAgICAgICAgaHNsLnMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhzbDtcbiAgICAgICAgfSxcblxuICAgICAgICBjbGFtcDogZnVuY3Rpb24odiwgbWluLCBtYXgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2LCBtYXgpLCBtaW4pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG59KSAodGhpcyk7XG5cblxufSkoKSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIDM3OiBmYWxzZSxcbiAgICAzODogZmFsc2UsXG4gICAgMzk6IGZhbHNlLFxuICAgIDQwOiBmYWxzZVxufTtcbiIsImZ1bmN0aW9uIERpYWxvZ3VlKGhvc3QpIHtcbiAgICB0aGlzLmN1cnJlbnRMaW5lID0gMDtcbn1cblxuRGlhbG9ndWUucHJvdG90eXBlID0ge1xuICAgIGV2ZW50SGFuZGxlcnM6IHtcbiAgICAgICAga2V5dXA6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ29Ub05leHRMaW5lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ29Ub05leHRMaW5lOiBmdW5jdGlvbiBnb1RvTmV4dExpbmUoKSB7XG4gICAgICAgIGlmKHRoaXMuY3VycmVudExpbmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZ29Ub0xpbmUoMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRMaW5lICsgMSA8IHRoaXMubGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvTGluZSh0aGlzLmN1cnJlbnRMaW5lICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QuZ290b1NpbmsoJ2VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdvVG9MaW5lOiBmdW5jdGlvbiBnb1RvTGluZShsaW5lTnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExpbmUgPSBsaW5lTnVtYmVyO1xuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0aGlzLnNhdmVDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5zYXZlQ2FudmFzLndpZHRoID0gdGhpcy5ob3N0LmdhbWVDYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuc2F2ZUNhbnZhcy5oZWlnaHQgPSB0aGlzLmhvc3QuZ2FtZUNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHZhciBjdHggPSB0aGlzLnNhdmVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lQ2FudmFzLFxuICAgICAgICAgICAgMCwgMCwgdGhpcy5ob3N0LmdhbWVDYW52YXMud2lkdGgsIHRoaXMuaG9zdC5nYW1lQ2FudmFzLmhlaWdodCxcbiAgICAgICAgICAgIDAsIDAsIHRoaXMuaG9zdC5nYW1lQ2FudmFzLndpZHRoLCB0aGlzLmhvc3QuZ2FtZUNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgICk7XG4gICAgICAgIGlmKHRoaXMucmVzdGFydCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGluZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW52b2x2ZWRDaGFyYWN0ZXJzID0gdGhpcy5saW5lcy5yZWR1Y2UoZnVuY3Rpb24oY2hhcmFjdGVyc1NvRmFyLCBsaW5lKSB7XG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyc1NvRmFyW2xpbmUud2hvXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcnNTb0ZhcjtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICk7XG4gICAgICAgIE9iamVjdC5rZXlzKGludm9sdmVkQ2hhcmFjdGVycykuZm9yRWFjaChmdW5jdGlvbihjaGFyYWN0ZXJOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2hhcmFjdGVyc1tjaGFyYWN0ZXJOYW1lXS5hY3Rpb24gPSAndGFsa2luZyc7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuXG4gICAgfSxcblxuICAgIGRyYXc6IGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IERpYWxvZ3VlO1xuIiwidmFyIGxhc3RGcmFtZVVwZGF0ZSA9IG51bGw7XG5cbmZ1bmN0aW9uIGRyYXdDaGFyYWN0ZXIoY3R4LCBjaGFyYWN0ZXIsIG1hcE9mZnNldCwgaW1hZ2VzKSB7XG4gICAgdmFyIGltYWdlID0gaW1hZ2VzW2NoYXJhY3Rlci5zcHJpdGVzW2NoYXJhY3Rlci5hY3Rpb25dXTtcbiAgICB2YXIgeE9mZnNldEluU291cmNlID0gY2hhcmFjdGVyLnBoYXNlICogY2hhcmFjdGVyLndpZHRoO1xuXG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgaW1hZ2UsXG4gICAgICAgIHhPZmZzZXRJblNvdXJjZSwgMCxcbiAgICAgICAgY2hhcmFjdGVyLndpZHRoLCBjaGFyYWN0ZXIuaGVpZ2h0LFxuICAgICAgICBjaGFyYWN0ZXIueCAtIG1hcE9mZnNldC54LCBjaGFyYWN0ZXIueSAtIG1hcE9mZnNldC55LFxuICAgICAgICBjaGFyYWN0ZXIud2lkdGgsIGNoYXJhY3Rlci5oZWlnaHRcbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0TWFwT2Zmc2V0KHgsIHksIG1hcFdpZHRoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt4OjAsIHk6MH07XG4gICAgaWYoeCA+ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpKSB7XG4gICAgICAgIHJlc3VsdC54ID0gTWF0aC5taW4oeCAtIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgbWFwV2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGRyYXdNYXAoY3R4LCBtYXBPZmZzZXQsIGltYWdlcywgbWFwV2lkdGgpIHtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICBpbWFnZXMuc2t5LFxuICAgICAgICAwLCAwLFxuICAgICAgICBpbWFnZXMuc2t5LndpZHRoLCBpbWFnZXMuc2t5LmhlaWdodCxcbiAgICAgICAgMCwgMCxcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGgsIGltYWdlcy5za3kuaGVpZ2h0XG4gICAgICAgICk7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgaW1hZ2VzLmhvdXNlcyxcbiAgICAgICAgTWF0aC5taW4obWFwT2Zmc2V0LngsIG1hcFdpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpLCBtYXBPZmZzZXQueSxcbiAgICAgICAgTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIGltYWdlcy5ob3VzZXMud2lkdGgpLCBpbWFnZXMuaG91c2VzLmhlaWdodCxcbiAgICAgICAgMCwgMCxcbiAgICAgICAgTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIGltYWdlcy5ob3VzZXMud2lkdGgpLCBpbWFnZXMuaG91c2VzLmhlaWdodFxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiBkcmF3Rm9yZWdyb3VuZChjdHgsIG1hcE9mZnNldCwgZm9yZWdyb3VuZEltYWdlKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgZm9yZWdyb3VuZEltYWdlLFxuICAgICAgICAoKG1hcE9mZnNldC54ICogMS41KSAlIGZvcmVncm91bmRJbWFnZS53aWR0aCkgfCAwLCBtYXBPZmZzZXQueSxcbiAgICAgICAgTWF0aC5taW4oY3R4LmNhbnZhcy53aWR0aCwgZm9yZWdyb3VuZEltYWdlLndpZHRoKSwgZm9yZWdyb3VuZEltYWdlLmhlaWdodCxcbiAgICAgICAgMCwgMCxcbiAgICAgICAgTWF0aC5taW4oY3R4LmNhbnZhcy53aWR0aCwgZm9yZWdyb3VuZEltYWdlLndpZHRoKSwgZm9yZWdyb3VuZEltYWdlLmhlaWdodFxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiBpc1Zpc2libGUoY2hhcmFjdGVyLCBjdXJyZW50TWFwT2Zmc2V0KSB7XG4gICAgaWYoXG4gICAgICAgIChjaGFyYWN0ZXIueCAtIGN1cnJlbnRNYXBPZmZzZXQueCkgPiAwICYmXG4gICAgICAgIChjaGFyYWN0ZXIueCAtIGN1cnJlbnRNYXBPZmZzZXQueCkgPCB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkcmF3RGlhbG9ndWUoY3R4LCBjdXJyZW50TGluZSwgZGVmYXVsdFByb3BlcnRpZXMpIHtcbiAgICBpZihjdXJyZW50TGluZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwb3NpdGlvbiA9IGRlZmF1bHRQcm9wZXJ0aWVzW2N1cnJlbnRMaW5lLndob107XG4gICAgaWYoY3VycmVudExpbmUucG9zaXRpb24pIHtcbiAgICAgICAgcG9zaXRpb24gPSBjdXJyZW50TGluZS5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcbiAgICBjdHguZm9udCA9ICdub3JtYWwgMTRwdCBoZWx2ZXRpY2EnO1xuICAgIHZhciBtZXRyaWNzID0gY3R4Lm1lYXN1cmVUZXh0KGN1cnJlbnRMaW5lLnRleHQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIGlmKGRlZmF1bHRQcm9wZXJ0aWVzW2N1cnJlbnRMaW5lLndob10uY29sb3IpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGRlZmF1bHRQcm9wZXJ0aWVzW2N1cnJlbnRMaW5lLndob10uY29sb3I7XG4gICAgfVxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgY3R4LnN0cm9rZVJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgbWV0cmljcy53aWR0aCArIDEwLCAzMCk7XG4gICAgY3R4Lmdsb2JhbEFscGhhID0gMC44NTtcbiAgICBjdHguZmlsbFJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgbWV0cmljcy53aWR0aCArIDEwLCAzMCk7XG4gICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjdHguZmlsbFRleHQoY3VycmVudExpbmUudGV4dCwgcG9zaXRpb24ueCArIDUsIHBvc2l0aW9uLnkgKyA1KTtcbn1cblxuZnVuY3Rpb24gZHJhd0NoYXJhY3RlcnMoaG9zdCwgY3VycmVudE1hcE9mZnNldCkge1xuICAgIHZhciBjaGFyYWN0ZXJMaXN0ID0gT2JqZWN0LmtleXMoaG9zdC5jaGFyYWN0ZXJzKTtcbiAgICBjaGFyYWN0ZXJMaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gaG9zdC5jaGFyYWN0ZXJzW2FdLnkgLSBob3N0LmNoYXJhY3RlcnNbYl0ueTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgY2hhcmFjdGVyTGlzdC5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgdmFyIGNoYXJhY3RlciA9IGhvc3QuY2hhcmFjdGVyc1tjaGFyYWN0ZXJMaXN0W2ldXTtcbiAgICAgICAgaWYoaXNWaXNpYmxlKGNoYXJhY3RlciwgY3VycmVudE1hcE9mZnNldCkpIHtcbiAgICAgICAgICAgIGRyYXdDaGFyYWN0ZXIoaG9zdC5jdHgsIGNoYXJhY3RlciwgY3VycmVudE1hcE9mZnNldCwgaG9zdC5pbWFnZXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVGcmFtZXModGltZSwgaW1hZ2VzLCBjaGFyYWN0ZXJzKSB7XG4gICAgaWYoIWxhc3RGcmFtZVVwZGF0ZSkge1xuICAgICAgICBsYXN0RnJhbWVVcGRhdGUgPSB0aW1lO1xuICAgIH1cbiAgICBpZigodGltZSAtIGxhc3RGcmFtZVVwZGF0ZSkgPCAoMTAwMCAvIDEyKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKGNoYXJhY3RlcnMpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24oY2hhcmFjdGVyTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV07XG4gICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXIucGhhc2UgPSAoY2hhcmFjdGVyLnBoYXNlICsgMSkgJSAoaW1hZ2VzW2NoYXJhY3Rlci5zcHJpdGVzW2NoYXJhY3Rlci5hY3Rpb25dXS53aWR0aCAvIGNoYXJhY3Rlci53aWR0aCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgbGFzdEZyYW1lVXBkYXRlID0gdGltZTtcbn1cblxuXG5cbmZ1bmN0aW9uIHJlbmRlcih0aW1lLCBob3N0KSB7XG4gICAgdXBkYXRlRnJhbWVzKHRpbWUsIGhvc3QuaW1hZ2VzLCBob3N0LmNoYXJhY3RlcnMpO1xuICAgIGlmKCh0aW1lIC0gaG9zdC5sYXN0RHJhdykgPCA0MCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjdXJyZW50UGhhc2UgPSBob3N0LmdldEN1cnJlbnRQaGFzZSgpO1xuICAgIHZhciBjdXJyZW50TWFwT2Zmc2V0ID0gZ2V0TWFwT2Zmc2V0KFxuICAgICAgICBob3N0LmNoYXJhY3RlcnMubWUueCxcbiAgICAgICAgaG9zdC5jaGFyYWN0ZXJzLm1lLnksXG4gICAgICAgIGN1cnJlbnRQaGFzZS5tYXBXaWR0aFxuICAgICAgICApO1xuICAgIGRyYXdNYXAoXG4gICAgICAgIGhvc3QuY3R4LFxuICAgICAgICBjdXJyZW50TWFwT2Zmc2V0LFxuICAgICAgICBob3N0LmltYWdlcyxcbiAgICAgICAgY3VycmVudFBoYXNlLm1hcFdpZHRoXG4gICAgICAgICk7XG4gICAgZHJhd0NoYXJhY3RlcnMoaG9zdCwgY3VycmVudE1hcE9mZnNldCk7XG4gICAgZHJhd0ZvcmVncm91bmQoaG9zdC5jdHgsIGN1cnJlbnRNYXBPZmZzZXQsIGhvc3QuaW1hZ2VzLmZvcmVncm91bmQpO1xuICAgIGlmKCdjdXJyZW50TGluZScgaW4gY3VycmVudFBoYXNlICYmIGN1cnJlbnRQaGFzZS5jdXJyZW50TGluZSAhPT0gbnVsbCkge1xuICAgICAgICBkcmF3RGlhbG9ndWUoXG4gICAgICAgICAgICBob3N0LmN0eCxcbiAgICAgICAgICAgIGN1cnJlbnRQaGFzZS5saW5lc1tjdXJyZW50UGhhc2UuY3VycmVudExpbmVdLFxuICAgICAgICAgICAgY3VycmVudFBoYXNlLmRlZmF1bHRQcm9wZXJ0aWVzXG4gICAgICAgICAgICApO1xuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlbmRlcjtcbiIsInZhciBSU1ZQID0gcmVxdWlyZSgncnN2cCcpO1xuXG52YXIgVXRpbHMgPSByZXF1aXJlKCd1dGlscycpO1xuXG52YXIga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG5cbnZhciBnYW1lcGxheXMgPSB7XG4gICAgRGlhbG9ndWU6IHJlcXVpcmUoJy4vZ2FtZXBsYXkvZGlhbG9ndWUnKSxcbiAgICBXYW5kZXI6IHJlcXVpcmUoJy4vZ2FtZXBsYXkvd2FuZGVyJylcbn07XG5cbnZhciByZW5kZXJlcnMgPSB7XG4gICAgUG9pbnROQ2xpY2s6IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3BvaW50LW4tY2xpY2snKVxufTtcblxuXG5mdW5jdGlvbiBHYW1lKGNhbnZhcywgZ2FtZVN0cnVjdHVyZSkge1xuICAgIHRoaXMucGhhc2VOYW1lID0gbnVsbDtcbiAgICB0aGlzLmNoYXJhY3RlcnMgPSB7fTtcbiAgICB0aGlzLmdhbWVTdHJ1Y3R1cmUgPSBnYW1lU3RydWN0dXJlO1xuICAgIHRoaXMucGhhc2VJbnN0YW5jZXMgPSB7fTtcbiAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudEhhbmRsZXJzID0ge307XG4gICAgdGhpcy5sYXN0VXBkYXRlID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJzLlBvaW50TkNsaWNrO1xuICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgdGhpcy5rZXlzID0ga2V5cztcbiAgICB0aGlzLmdhbWVDYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5nYW1lQ2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5nYW1lQ2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLmN0eCA9IHRoaXMuZ2FtZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMua2V5c1tldmVudC5rZXlDb2RlXSA9IHRydWU7XG4gICAgICAgICAgICBpZih0aGlzLnJlZ2lzdGVyZWRFdmVudEhhbmRsZXJzLmtleWRvd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudEhhbmRsZXJzLmtleWRvd24oZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyksIGZhbHNlKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmtleXNbZXZlbnQua2V5Q29kZV0gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKHRoaXMucmVnaXN0ZXJlZEV2ZW50SGFuZGxlcnMua2V5dXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudEhhbmRsZXJzLmtleXVwKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XG59XG5cbkdhbWUucHJvdG90eXBlID0ge1xuICAgIHN0YXJ0OiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ290b1BoYXNlKHRoaXMuZ2FtZVN0cnVjdHVyZS5lbnRyeSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXRDdXJyZW50UGhhc2U6IGZ1bmN0aW9uIGdldEN1cnJlbnRQaGFzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGhhc2VJbnN0YW5jZXNbdGhpcy5waGFzZU5hbWVdO1xuICAgIH0sXG5cbiAgICBnb3RvU2luazogZnVuY3Rpb24gZ290b1Npbmsoc2lua05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ290b1BoYXNlKHRoaXMuZ2FtZVN0cnVjdHVyZS5wbGFuW3RoaXMucGhhc2VOYW1lXVtzaW5rTmFtZV0pO1xuICAgIH0sXG5cbiAgICB1bnJlZ2lzdGVyRXZlbnRIYW5kbGVyczogZnVuY3Rpb24gdW5yZWdpc3RlckV2ZW50SGFuZGxlcnMocGhhc2UpIHtcbiAgICAgICAgdmFyIGV2ZW50SGFuZGxlcnMgPSBwaGFzZS5ldmVudEhhbmRsZXJzO1xuXG4gICAgICAgIGlmKCFldmVudEhhbmRsZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yKHZhciBldmVudE5hbWUgaW4gZXZlbnRIYW5kbGVycykge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVnaXN0ZXJlZEV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZWdpc3RlckV2ZW50SGFuZGxlcnM6IGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRIYW5kbGVyKHBoYXNlKSB7XG4gICAgICAgIHZhciBldmVudEhhbmRsZXJzID0gcGhhc2UuZXZlbnRIYW5kbGVycztcblxuICAgICAgICBpZighZXZlbnRIYW5kbGVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvcih2YXIgZXZlbnROYW1lIGluIGV2ZW50SGFuZGxlcnMpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSA9IGV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXS5iaW5kKHBoYXNlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBsb2FkSW1hZ2VzOiBmdW5jdGlvbiBsb2FkSW1hZ2VzKGltYWdlcykge1xuICAgICAgICByZXR1cm4gbmV3IFJTVlAuUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmKGltYWdlcykge1xuICAgICAgICAgICAgICAgIFV0aWxzLmxvYWRJbWFnZXMoaW1hZ2VzLCBmdW5jdGlvbihpbWdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW1ncyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXRIaWVyYXJjaHk6IGZ1bmN0aW9uIGdldEhpZXJhcmNoeShwaGFzZU5hbWUsIGNoaWxkcmVuKSB7XG4gICAgICAgIGlmKCFjaGlsZHJlbikge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudEhpZXJhcmNoeSA9IFtwaGFzZU5hbWVdLmNvbmNhdChjaGlsZHJlbik7XG4gICAgICAgIGlmKHRoaXMuZ2FtZVN0cnVjdHVyZS5waGFzZXNbcGhhc2VOYW1lXS5iYXNlZE9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRIaWVyYXJjaHkodGhpcy5nYW1lU3RydWN0dXJlLnBoYXNlc1twaGFzZU5hbWVdLmJhc2VkT24sIGN1cnJlbnRIaWVyYXJjaHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRIaWVyYXJjaHk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0RnVsbERlc2NyaXB0aW9uOiBmdW5jdGlvbiBnZXRGdWxsRGVzY3JpcHRpb24ocGhhc2VOYW1lKSB7XG4gICAgICAgIHZhciBoaWVyYXJjaHkgPSB0aGlzLmdldEhpZXJhcmNoeShwaGFzZU5hbWUpO1xuICAgICAgICByZXR1cm4gaGllcmFyY2h5LnJlZHVjZShmdW5jdGlvbihwaGFzZVNvRmFyLCBjdXJyZW50UGhhc2VOYW1lKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudERlc2NyaXB0aW9uID0gdGhpcy5nYW1lU3RydWN0dXJlLnBoYXNlc1tjdXJyZW50UGhhc2VOYW1lXTtcbiAgICAgICAgICAgIGZvcih2YXIgcHJvcGVydHlOYW1lIGluIGN1cnJlbnREZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIGlmKHBoYXNlU29GYXJbcHJvcGVydHlOYW1lXSAmJiAhKGN1cnJlbnREZXNjcmlwdGlvbi5ub0luaGVyaXQgJiYgY3VycmVudERlc2NyaXB0aW9uLm5vSW5oZXJpdFtwcm9wZXJ0eU5hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICBwaGFzZVNvRmFyW3Byb3BlcnR5TmFtZV0gPSBVdGlscy5kZWVwTWVyZ2UocGhhc2VTb0Zhcltwcm9wZXJ0eU5hbWVdLCBjdXJyZW50RGVzY3JpcHRpb25bcHJvcGVydHlOYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwaGFzZVNvRmFyW3Byb3BlcnR5TmFtZV0gPSBjdXJyZW50RGVzY3JpcHRpb25bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGhhc2VTb0ZhcjtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCB7fSk7XG4gICAgfSxcblxuICAgIGZpbHRlckltYWdlc1RvTG9hZDogZnVuY3Rpb24gZmlsdGVySW1hZ2VzVG9Mb2FkKGltYWdlcykge1xuICAgICAgICBpZighaW1hZ2VzKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGltYWdlcylcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oaW1hZ2VOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLmltYWdlc1tpbWFnZU5hbWVdO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbihvYmplY3RTb0ZhciwgaW1hZ2VOYW1lKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0U29GYXJbaW1hZ2VOYW1lXSA9IGltYWdlc1tpbWFnZU5hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3RTb0ZhcjtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICB9LFxuXG4gICAgbWVyZ2VJbWFnZXM6IGZ1bmN0aW9uIG1lcmdlSW1hZ2VzKGltYWdlcykge1xuICAgICAgICB2YXIgaW1hZ2VOYW1lO1xuXG4gICAgICAgIGZvcihpbWFnZU5hbWUgaW4gaW1hZ2VzKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlc1tpbWFnZU5hbWVdID0gaW1hZ2VzW2ltYWdlTmFtZV07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ290b1BoYXNlOiBmdW5jdGlvbiBnb3RvUGhhc2UocGhhc2VOYW1lKSB7XG4gICAgICAgIHZhciBwaGFzZURlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNoYW5naW5nUGhhc2UgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBSU1ZQLlByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnBoYXNlSW5zdGFuY2VzW3RoaXMucGhhc2VOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVucmVnaXN0ZXJFdmVudEhhbmRsZXJzKHRoaXMucGhhc2VJbnN0YW5jZXNbdGhpcy5waGFzZU5hbWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5waGFzZU5hbWUgPSBwaGFzZU5hbWU7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuZ2FtZVN0cnVjdHVyZS5waGFzZXNbdGhpcy5waGFzZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KG5ldyBFcnJvcignTm8gcGhhc2Ugd2l0aCBuYW1lICcgKyBwaGFzZU5hbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGhhc2VEZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RnVsbERlc2NyaXB0aW9uKHRoaXMucGhhc2VOYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2VzVG9Mb2FkID0gdGhpcy5maWx0ZXJJbWFnZXNUb0xvYWQocGhhc2VEZXNjcmlwdGlvbi5pbWFnZXMpO1xuICAgICAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKGltYWdlc1RvTG9hZCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRJbWFnZXMoaW1hZ2VzVG9Mb2FkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihpbWFnZXMpIHtcbiAgICAgICAgICAgICAgICBpZihpbWFnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXJnZUltYWdlcyhpbWFnZXMpO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICBcbiAgICAgICAgICAgICAgICBpZighdGhpcy5waGFzZUluc3RhbmNlc1twaGFzZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGhhc2VJbnN0YW5jZXNbcGhhc2VOYW1lXSA9IG5ldyBnYW1lcGxheXNbcGhhc2VEZXNjcmlwdGlvbi5nYW1lcGxheVR5cGVdKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBoYXNlSW5zdGFuY2VzW3BoYXNlTmFtZV0uaG9zdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGhhc2VJbnN0YW5jZXNbcGhhc2VOYW1lXS5uYW1lID0gcGhhc2VOYW1lO1xuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIHByb3BlcnR5TmFtZSBpbiBwaGFzZURlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihbJ2ltYWdlcycsICdnYW1lcGxheVR5cGUnXS5pbmRleE9mKHByb3BlcnR5TmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waGFzZUluc3RhbmNlc1twaGFzZU5hbWVdW3Byb3BlcnR5TmFtZV0gPSBwaGFzZURlc2NyaXB0aW9uW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5waGFzZUluc3RhbmNlc1twaGFzZU5hbWVdLmluaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waGFzZUluc3RhbmNlc1twaGFzZU5hbWVdLmluaXQocGhhc2VOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50SGFuZGxlcnModGhpcy5waGFzZUluc3RhbmNlc1t0aGlzLnBoYXNlTmFtZV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdpbmdQaGFzZSA9IGZhbHNlO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgbG9vcDogZnVuY3Rpb24gbG9vcCh0aW1lKSB7XG4gICAgICAgIGlmKCF0aGlzLmNoYW5naW5nUGhhc2UpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmxhc3RVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RVcGRhdGUgPSB0aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5waGFzZUluc3RhbmNlc1t0aGlzLnBoYXNlTmFtZV0udXBkYXRlKHRpbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gdGltZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIXRoaXMubGFzdERyYXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REcmF3ID0gdGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucmVuZGVyZXIodGltZSwgdGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REcmF3ID0gdGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG4gICAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iLCJ2YXIgQ2hhcmFjdGVyID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyJyk7XG5cblxuZnVuY3Rpb24gV2FuZGVyKGhvc3QpIHtcbn1cblxuV2FuZGVyLnByb3RvdHlwZSA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYXJhY3RlckRlc2NyaXB0aW9uO1xuICAgICAgICBmb3IodmFyIGNoYXJhY3Rlck5hbWUgaW4gdGhpcy5jaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICBpZighdGhpcy5ob3N0LmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEZXNjcmlwdGlvbiA9IHRoaXMuY2hhcmFjdGVyc1tjaGFyYWN0ZXJOYW1lXTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QuY2hhcmFjdGVyc1tjaGFyYWN0ZXJOYW1lXSA9IG5ldyBDaGFyYWN0ZXIoY2hhcmFjdGVyRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVNb3ZlbWVudCh0aW1lKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIHVwZGF0ZU1vdmVtZW50OiBmdW5jdGlvbiB1cGRhdGVNb3ZlbWVudCh0aW1lKSB7XG4gICAgICAgIHZhciB1bml0ID0gMjtcbiAgICAgICAgdGhpcy5ob3N0LmNoYXJhY3RlcnMubWUuZHggPSAwO1xuICAgICAgICB0aGlzLmhvc3QuY2hhcmFjdGVycy5tZS5keSA9IDA7XG4gICAgICAgIGlmKHRoaXMuaG9zdC5rZXlzWzM3XSkgeyB0aGlzLmhvc3QuY2hhcmFjdGVycy5tZS5keCAtPSB1bml0O31cbiAgICAgICAgaWYodGhpcy5ob3N0LmtleXNbMzldKSB7IHRoaXMuaG9zdC5jaGFyYWN0ZXJzLm1lLmR4ICs9IHVuaXQ7fVxuICAgICAgICBpZih0aGlzLmhvc3Qua2V5c1szOF0pIHsgdGhpcy5ob3N0LmNoYXJhY3RlcnMubWUuZHkgLT0gdW5pdDt9XG4gICAgICAgIGlmKHRoaXMuaG9zdC5rZXlzWzQwXSkgeyB0aGlzLmhvc3QuY2hhcmFjdGVycy5tZS5keSArPSB1bml0O31cblxuICAgICAgICBmb3IodmFyIHNpbmtOYW1lIGluIHRoaXMuc2lua3MpIHtcbiAgICAgICAgICAgIHZhciBzaW5rID0gdGhpcy5zaW5rc1tzaW5rTmFtZV07XG4gICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5jaGFyYWN0ZXJzLm1lLnggPT09IHNpbmsueCAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuY2hhcmFjdGVycy5tZS55ID49IHNpbmsueSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuY2hhcmFjdGVycy5tZS55IDw9IHNpbmsueSArIHNpbmsuaGVpZ2h0ICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5jaGFyYWN0ZXJzLm1lLmFjdGlvbiA9PT0gJ3dhbGtSaWdodCdcbiAgICAgICAgICAgICAgICApIHx8XG5cbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5jaGFyYWN0ZXJzLm1lLnggPT09IHNpbmsueCArIHNpbmsud2lkdGggJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmNoYXJhY3RlcnMubWUueSA+PSBzaW5rLnkgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmNoYXJhY3RlcnMubWUueSA8PSBzaW5rLnkgKyBzaW5rLmhlaWdodCAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuY2hhcmFjdGVycy5tZS5hY3Rpb24gPT09ICd3YWxrTGVmdCdcbiAgICAgICAgICAgICAgICApIHx8XG5cbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5jaGFyYWN0ZXJzLm1lLnkgPT09IHNpbmsueSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuY2hhcmFjdGVycy5tZS54ID49IHNpbmsueCAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuY2hhcmFjdGVycy5tZS54IDw9IHNpbmsueCArIHNpbmsud2lkdGggJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmNoYXJhY3RlcnMubWUuYWN0aW9uID09PSAnd2Fsa0Rvd24nXG4gICAgICAgICAgICAgICAgKSB8fFxuXG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuY2hhcmFjdGVycy5tZS55ID09PSBzaW5rLnkgKyBzaW5rLmhlaWdodCAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuY2hhcmFjdGVycy5tZS54ID49IHNpbmsueCAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuY2hhcmFjdGVycy5tZS54IDw9IHNpbmsueCArIHNpbmsud2lkdGggJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmNoYXJhY3RlcnMubWUuYWN0aW9uID09PSAnd2Fsa1VwJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5jaGFyYWN0ZXJzLm1lLmFjdGlvbiA9ICdpZGxlJztcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QuZ290b1Npbmsoc2lua05hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaG9zdC5jaGFyYWN0ZXJzKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbihjaGFyYWN0ZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5jaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgaWYoY2hhcmFjdGVyLmJlaGF2aW91cikge1xuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIuYmVoYXZpb3VyLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihjaGFyYWN0ZXIuZHggPiAwKVxuICAgICAgICAgICAgICAgICAgICB7IGNoYXJhY3Rlci5zZXRQcm9wZXJ0eSgnYWN0aW9uJywgJ3dhbGtSaWdodCcpO31cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNoYXJhY3Rlci5keCA8IDApXG4gICAgICAgICAgICAgICAgICAgIHsgY2hhcmFjdGVyLnNldFByb3BlcnR5KCdhY3Rpb24nLCAnd2Fsa0xlZnQnKTt9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihjaGFyYWN0ZXIuZHkgPiAwKVxuICAgICAgICAgICAgICAgICAgICB7IGNoYXJhY3Rlci5zZXRQcm9wZXJ0eSgnYWN0aW9uJywgJ3dhbGtVcCcpO31cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNoYXJhY3Rlci5keSA8IDApXG4gICAgICAgICAgICAgICAgICAgIHsgY2hhcmFjdGVyLnNldFByb3BlcnR5KCdhY3Rpb24nLCAnd2Fsa0Rvd24nKTt9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuaG9zdC5jaGFyYWN0ZXJzLm1lLnNldFByb3BlcnR5KCdhY3Rpb24nLCAnaWRsZScpOyB9XG4gICAgICAgICAgICAgICAgaWYoY2hhcmFjdGVyLnggKyBjaGFyYWN0ZXIuZHggPiB0aGlzLm1pblggJiYgY2hhcmFjdGVyLnggKyBjaGFyYWN0ZXIuZHggPCB0aGlzLm1heFgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLnggKz0gY2hhcmFjdGVyLmR4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihjaGFyYWN0ZXIueSArIGNoYXJhY3Rlci5keSA+IHRoaXMubWluWSAmJiBjaGFyYWN0ZXIueSArIGNoYXJhY3Rlci5keSA8IHRoaXMubWF4WSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIueSArPSBjaGFyYWN0ZXIuZHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gV2FuZGVyO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIiwiKGZ1bmN0aW9uKHByb2Nlc3Mpey8qIVxuICogQG92ZXJ2aWV3IFJTVlAgLSBhIHRpbnkgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsuXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNCBZZWh1ZGEgS2F0eiwgVG9tIERhbGUsIFN0ZWZhbiBQZW5uZXIgYW5kIGNvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RpbGRlaW8vcnN2cC5qcy9tYXN0ZXIvTElDRU5TRVxuICogQHZlcnNpb24gICAzLjAuMThcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkdXRpbHMkJG9iamVjdE9yRnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkdXRpbHMkJGlzRnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHV0aWxzJCRpc01heWJlVGhlbmFibGUoeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsO1xuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCR1dGlscyQkX2lzQXJyYXk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KSB7XG4gICAgICBsaWIkcnN2cCR1dGlscyQkX2lzQXJyYXkgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGliJHJzdnAkdXRpbHMkJF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkdXRpbHMkJGlzQXJyYXkgPSBsaWIkcnN2cCR1dGlscyQkX2lzQXJyYXk7XG5cbiAgICB2YXIgbGliJHJzdnAkdXRpbHMkJG5vdyA9IERhdGUubm93IHx8IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH07XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCR1dGlscyQkRigpIHsgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJHV0aWxzJCRvX2NyZWF0ZSA9IChPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWNvbmQgYXJndW1lbnQgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBvICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgICAgfVxuICAgICAgbGliJHJzdnAkdXRpbHMkJEYucHJvdG90eXBlID0gbztcbiAgICAgIHJldHVybiBuZXcgbGliJHJzdnAkdXRpbHMkJEYoKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRldmVudHMkJGluZGV4T2YoY2FsbGJhY2tzLCBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaT0wLCBsPWNhbGxiYWNrcy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgIGlmIChjYWxsYmFja3NbaV0gPT09IGNhbGxiYWNrKSB7IHJldHVybiBpOyB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRldmVudHMkJGNhbGxiYWNrc0ZvcihvYmplY3QpIHtcbiAgICAgIHZhciBjYWxsYmFja3MgPSBvYmplY3QuX3Byb21pc2VDYWxsYmFja3M7XG5cbiAgICAgIGlmICghY2FsbGJhY2tzKSB7XG4gICAgICAgIGNhbGxiYWNrcyA9IG9iamVjdC5fcHJvbWlzZUNhbGxiYWNrcyA9IHt9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FsbGJhY2tzO1xuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCRldmVudHMkJGRlZmF1bHQgPSB7XG5cbiAgICAgIC8qKlxuICAgICAgICBgUlNWUC5FdmVudFRhcmdldC5taXhpbmAgZXh0ZW5kcyBhbiBvYmplY3Qgd2l0aCBFdmVudFRhcmdldCBtZXRob2RzLiBGb3JcbiAgICAgICAgRXhhbXBsZTpcblxuICAgICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICAgIHZhciBvYmplY3QgPSB7fTtcblxuICAgICAgICBSU1ZQLkV2ZW50VGFyZ2V0Lm1peGluKG9iamVjdCk7XG5cbiAgICAgICAgb2JqZWN0Lm9uKCdmaW5pc2hlZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgLy8gaGFuZGxlIGV2ZW50XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9iamVjdC50cmlnZ2VyKCdmaW5pc2hlZCcsIHsgZGV0YWlsOiB2YWx1ZSB9KTtcbiAgICAgICAgYGBgXG5cbiAgICAgICAgYEV2ZW50VGFyZ2V0Lm1peGluYCBhbHNvIHdvcmtzIHdpdGggcHJvdG90eXBlczpcblxuICAgICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICAgIHZhciBQZXJzb24gPSBmdW5jdGlvbigpIHt9O1xuICAgICAgICBSU1ZQLkV2ZW50VGFyZ2V0Lm1peGluKFBlcnNvbi5wcm90b3R5cGUpO1xuXG4gICAgICAgIHZhciB5ZWh1ZGEgPSBuZXcgUGVyc29uKCk7XG4gICAgICAgIHZhciB0b20gPSBuZXcgUGVyc29uKCk7XG5cbiAgICAgICAgeWVodWRhLm9uKCdwb2tlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnWWVodWRhIHNheXMgT1cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9tLm9uKCdwb2tlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnVG9tIHNheXMgT1cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgeWVodWRhLnRyaWdnZXIoJ3Bva2UnKTtcbiAgICAgICAgdG9tLnRyaWdnZXIoJ3Bva2UnKTtcbiAgICAgICAgYGBgXG5cbiAgICAgICAgQG1ldGhvZCBtaXhpblxuICAgICAgICBAZm9yIFJTVlAuRXZlbnRUYXJnZXRcbiAgICAgICAgQHByaXZhdGVcbiAgICAgICAgQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gZXh0ZW5kIHdpdGggRXZlbnRUYXJnZXQgbWV0aG9kc1xuICAgICAgKi9cbiAgICAgICdtaXhpbic6IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICBvYmplY3RbJ29uJ10gICAgICA9IHRoaXNbJ29uJ107XG4gICAgICAgIG9iamVjdFsnb2ZmJ10gICAgID0gdGhpc1snb2ZmJ107XG4gICAgICAgIG9iamVjdFsndHJpZ2dlciddID0gdGhpc1sndHJpZ2dlciddO1xuICAgICAgICBvYmplY3QuX3Byb21pc2VDYWxsYmFja3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAgUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWQgd2hlbiBgZXZlbnROYW1lYCBpcyB0cmlnZ2VyZWRcblxuICAgICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICAgIG9iamVjdC5vbignZXZlbnQnLCBmdW5jdGlvbihldmVudEluZm8pe1xuICAgICAgICAgIC8vIGhhbmRsZSB0aGUgZXZlbnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JqZWN0LnRyaWdnZXIoJ2V2ZW50Jyk7XG4gICAgICAgIGBgYFxuXG4gICAgICAgIEBtZXRob2Qgb25cbiAgICAgICAgQGZvciBSU1ZQLkV2ZW50VGFyZ2V0XG4gICAgICAgIEBwcml2YXRlXG4gICAgICAgIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gbGlzdGVuIGZvclxuICAgICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkLlxuICAgICAgKi9cbiAgICAgICdvbic6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGFsbENhbGxiYWNrcyA9IGxpYiRyc3ZwJGV2ZW50cyQkY2FsbGJhY2tzRm9yKHRoaXMpLCBjYWxsYmFja3M7XG5cbiAgICAgICAgY2FsbGJhY2tzID0gYWxsQ2FsbGJhY2tzW2V2ZW50TmFtZV07XG5cbiAgICAgICAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICAgICAgICBjYWxsYmFja3MgPSBhbGxDYWxsYmFja3NbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpYiRyc3ZwJGV2ZW50cyQkaW5kZXhPZihjYWxsYmFja3MsIGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICBZb3UgY2FuIHVzZSBgb2ZmYCB0byBzdG9wIGZpcmluZyBhIHBhcnRpY3VsYXIgY2FsbGJhY2sgZm9yIGFuIGV2ZW50OlxuXG4gICAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgICAgZnVuY3Rpb24gZG9TdHVmZigpIHsgLy8gZG8gc3R1ZmYhIH1cbiAgICAgICAgb2JqZWN0Lm9uKCdzdHVmZicsIGRvU3R1ZmYpO1xuXG4gICAgICAgIG9iamVjdC50cmlnZ2VyKCdzdHVmZicpOyAvLyBkb1N0dWZmIHdpbGwgYmUgY2FsbGVkXG5cbiAgICAgICAgLy8gVW5yZWdpc3RlciBPTkxZIHRoZSBkb1N0dWZmIGNhbGxiYWNrXG4gICAgICAgIG9iamVjdC5vZmYoJ3N0dWZmJywgZG9TdHVmZik7XG4gICAgICAgIG9iamVjdC50cmlnZ2VyKCdzdHVmZicpOyAvLyBkb1N0dWZmIHdpbGwgTk9UIGJlIGNhbGxlZFxuICAgICAgICBgYGBcblxuICAgICAgICBJZiB5b3UgZG9uJ3QgcGFzcyBhIGBjYWxsYmFja2AgYXJndW1lbnQgdG8gYG9mZmAsIEFMTCBjYWxsYmFja3MgZm9yIHRoZVxuICAgICAgICBldmVudCB3aWxsIG5vdCBiZSBleGVjdXRlZCB3aGVuIHRoZSBldmVudCBmaXJlcy4gRm9yIGV4YW1wbGU6XG5cbiAgICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgICB2YXIgY2FsbGJhY2sxID0gZnVuY3Rpb24oKXt9O1xuICAgICAgICB2YXIgY2FsbGJhY2syID0gZnVuY3Rpb24oKXt9O1xuXG4gICAgICAgIG9iamVjdC5vbignc3R1ZmYnLCBjYWxsYmFjazEpO1xuICAgICAgICBvYmplY3Qub24oJ3N0dWZmJywgY2FsbGJhY2syKTtcblxuICAgICAgICBvYmplY3QudHJpZ2dlcignc3R1ZmYnKTsgLy8gY2FsbGJhY2sxIGFuZCBjYWxsYmFjazIgd2lsbCBiZSBleGVjdXRlZC5cblxuICAgICAgICBvYmplY3Qub2ZmKCdzdHVmZicpO1xuICAgICAgICBvYmplY3QudHJpZ2dlcignc3R1ZmYnKTsgLy8gY2FsbGJhY2sxIGFuZCBjYWxsYmFjazIgd2lsbCBub3QgYmUgZXhlY3V0ZWQhXG4gICAgICAgIGBgYFxuXG4gICAgICAgIEBtZXRob2Qgb2ZmXG4gICAgICAgIEBmb3IgUlNWUC5FdmVudFRhcmdldFxuICAgICAgICBAcHJpdmF0ZVxuICAgICAgICBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIGV2ZW50IHRvIHN0b3AgbGlzdGVuaW5nIHRvXG4gICAgICAgIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIG9wdGlvbmFsIGFyZ3VtZW50LiBJZiBnaXZlbiwgb25seSB0aGUgZnVuY3Rpb25cbiAgICAgICAgZ2l2ZW4gd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIGV2ZW50J3MgY2FsbGJhY2sgcXVldWUuIElmIG5vIGBjYWxsYmFja2BcbiAgICAgICAgYXJndW1lbnQgaXMgZ2l2ZW4sIGFsbCBjYWxsYmFja3Mgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIGV2ZW50J3MgY2FsbGJhY2tcbiAgICAgICAgcXVldWUuXG4gICAgICAqL1xuICAgICAgJ29mZic6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGFsbENhbGxiYWNrcyA9IGxpYiRyc3ZwJGV2ZW50cyQkY2FsbGJhY2tzRm9yKHRoaXMpLCBjYWxsYmFja3MsIGluZGV4O1xuXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICBhbGxDYWxsYmFja3NbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrcyA9IGFsbENhbGxiYWNrc1tldmVudE5hbWVdO1xuXG4gICAgICAgIGluZGV4ID0gbGliJHJzdnAkZXZlbnRzJCRpbmRleE9mKGNhbGxiYWNrcywgY2FsbGJhY2spO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHsgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7IH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICBVc2UgYHRyaWdnZXJgIHRvIGZpcmUgY3VzdG9tIGV2ZW50cy4gRm9yIGV4YW1wbGU6XG5cbiAgICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgICBvYmplY3Qub24oJ2ZvbycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2ZvbyBldmVudCBoYXBwZW5lZCEnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9iamVjdC50cmlnZ2VyKCdmb28nKTtcbiAgICAgICAgLy8gJ2ZvbyBldmVudCBoYXBwZW5lZCEnIGxvZ2dlZCB0byB0aGUgY29uc29sZVxuICAgICAgICBgYGBcblxuICAgICAgICBZb3UgY2FuIGFsc28gcGFzcyBhIHZhbHVlIGFzIGEgc2Vjb25kIGFyZ3VtZW50IHRvIGB0cmlnZ2VyYCB0aGF0IHdpbGwgYmVcbiAgICAgICAgcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIGFsbCBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBldmVudDpcblxuICAgICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICAgIG9iamVjdC5vbignZm9vJywgZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlLm5hbWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYmplY3QudHJpZ2dlcignZm9vJywgeyBuYW1lOiAnYmFyJyB9KTtcbiAgICAgICAgLy8gJ2JhcicgbG9nZ2VkIHRvIHRoZSBjb25zb2xlXG4gICAgICAgIGBgYFxuXG4gICAgICAgIEBtZXRob2QgdHJpZ2dlclxuICAgICAgICBAZm9yIFJTVlAuRXZlbnRUYXJnZXRcbiAgICAgICAgQHByaXZhdGVcbiAgICAgICAgQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSBuYW1lIG9mIHRoZSBldmVudCB0byBiZSB0cmlnZ2VyZWRcbiAgICAgICAgQHBhcmFtIHtBbnl9IG9wdGlvbnMgb3B0aW9uYWwgdmFsdWUgdG8gYmUgcGFzc2VkIHRvIGFueSBldmVudCBoYW5kbGVycyBmb3JcbiAgICAgICAgdGhlIGdpdmVuIGBldmVudE5hbWVgXG4gICAgICAqL1xuICAgICAgJ3RyaWdnZXInOiBmdW5jdGlvbihldmVudE5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGFsbENhbGxiYWNrcyA9IGxpYiRyc3ZwJGV2ZW50cyQkY2FsbGJhY2tzRm9yKHRoaXMpLCBjYWxsYmFja3MsIGNhbGxiYWNrO1xuXG4gICAgICAgIGlmIChjYWxsYmFja3MgPSBhbGxDYWxsYmFja3NbZXZlbnROYW1lXSkge1xuICAgICAgICAgIC8vIERvbid0IGNhY2hlIHRoZSBjYWxsYmFja3MubGVuZ3RoIHNpbmNlIGl0IG1heSBncm93XG4gICAgICAgICAgZm9yICh2YXIgaT0wOyBpPGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFja3NbaV07XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgbGliJHJzdnAkY29uZmlnJCRjb25maWcgPSB7XG4gICAgICBpbnN0cnVtZW50OiBmYWxzZVxuICAgIH07XG5cbiAgICBsaWIkcnN2cCRldmVudHMkJGRlZmF1bHRbJ21peGluJ10obGliJHJzdnAkY29uZmlnJCRjb25maWcpO1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkY29uZmlnJCRjb25maWd1cmUobmFtZSwgdmFsdWUpIHtcbiAgICAgIGlmIChuYW1lID09PSAnb25lcnJvcicpIHtcbiAgICAgICAgLy8gaGFuZGxlIGZvciBsZWdhY3kgdXNlcnMgdGhhdCBleHBlY3QgdGhlIGFjdHVhbFxuICAgICAgICAvLyBlcnJvciB0byBiZSBwYXNzZWQgdG8gdGhlaXIgZnVuY3Rpb24gYWRkZWQgdmlhXG4gICAgICAgIC8vIGBSU1ZQLmNvbmZpZ3VyZSgnb25lcnJvcicsIHNvbWVGdW5jdGlvbkhlcmUpO2BcbiAgICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWdbJ29uJ10oJ2Vycm9yJywgdmFsdWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnW25hbWVdID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbGliJHJzdnAkY29uZmlnJCRjb25maWdbbmFtZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJGluc3RydW1lbnQkJHF1ZXVlID0gW107XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRpbnN0cnVtZW50JCRzY2hlZHVsZUZsdXNoKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpYiRyc3ZwJGluc3RydW1lbnQkJHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZW50cnkgPSBsaWIkcnN2cCRpbnN0cnVtZW50JCRxdWV1ZVtpXTtcblxuICAgICAgICAgIHZhciBwYXlsb2FkID0gZW50cnkucGF5bG9hZDtcblxuICAgICAgICAgIHBheWxvYWQuZ3VpZCA9IHBheWxvYWQua2V5ICsgcGF5bG9hZC5pZDtcbiAgICAgICAgICBwYXlsb2FkLmNoaWxkR3VpZCA9IHBheWxvYWQua2V5ICsgcGF5bG9hZC5jaGlsZElkO1xuICAgICAgICAgIGlmIChwYXlsb2FkLmVycm9yKSB7XG4gICAgICAgICAgICBwYXlsb2FkLnN0YWNrID0gcGF5bG9hZC5lcnJvci5zdGFjaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZ1sndHJpZ2dlciddKGVudHJ5Lm5hbWUsIGVudHJ5LnBheWxvYWQpO1xuICAgICAgICB9XG4gICAgICAgIGxpYiRyc3ZwJGluc3RydW1lbnQkJHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICB9LCA1MCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkaW5zdHJ1bWVudCQkaW5zdHJ1bWVudChldmVudE5hbWUsIHByb21pc2UsIGNoaWxkKSB7XG4gICAgICBpZiAoMSA9PT0gbGliJHJzdnAkaW5zdHJ1bWVudCQkcXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogZXZlbnROYW1lLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGtleTogcHJvbWlzZS5fZ3VpZEtleSxcbiAgICAgICAgICAgIGlkOiAgcHJvbWlzZS5faWQsXG4gICAgICAgICAgICBldmVudE5hbWU6IGV2ZW50TmFtZSxcbiAgICAgICAgICAgIGRldGFpbDogcHJvbWlzZS5fcmVzdWx0LFxuICAgICAgICAgICAgY2hpbGRJZDogY2hpbGQgJiYgY2hpbGQuX2lkLFxuICAgICAgICAgICAgbGFiZWw6IHByb21pc2UuX2xhYmVsLFxuICAgICAgICAgICAgdGltZVN0YW1wOiBsaWIkcnN2cCR1dGlscyQkbm93KCksXG4gICAgICAgICAgICBlcnJvcjogbGliJHJzdnAkY29uZmlnJCRjb25maWdbXCJpbnN0cnVtZW50LXdpdGgtc3RhY2tcIl0gPyBuZXcgRXJyb3IocHJvbWlzZS5fbGFiZWwpIDogbnVsbFxuICAgICAgICAgIH19KSkge1xuICAgICAgICAgICAgbGliJHJzdnAkaW5zdHJ1bWVudCQkc2NoZWR1bGVGbHVzaCgpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB2YXIgbGliJHJzdnAkaW5zdHJ1bWVudCQkZGVmYXVsdCA9IGxpYiRyc3ZwJGluc3RydW1lbnQkJGluc3RydW1lbnQ7XG5cbiAgICBmdW5jdGlvbiAgbGliJHJzdnAkJGludGVybmFsJCR3aXRoT3duUHJvbWlzZSgpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKCdBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRub29wKCkge31cblxuICAgIHZhciBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcgICA9IHZvaWQgMDtcbiAgICB2YXIgbGliJHJzdnAkJGludGVybmFsJCRGVUxGSUxMRUQgPSAxO1xuICAgIHZhciBsaWIkcnN2cCQkaW50ZXJuYWwkJFJFSkVDVEVEICA9IDI7XG5cbiAgICB2YXIgbGliJHJzdnAkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUiA9IG5ldyBsaWIkcnN2cCQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCk7XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJGdldFRoZW4ocHJvbWlzZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbjtcbiAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUi5lcnJvciA9IGVycm9yO1xuICAgICAgICByZXR1cm4gbGliJHJzdnAkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJHRyeVRoZW4odGhlbiwgdmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlLCB0aGVuKSB7XG4gICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZy5hc3luYyhmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgIHZhciBzZWFsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yID0gbGliJHJzdnAkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHRoZW5hYmxlLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIGlmIChzZWFsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodGhlbmFibGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgaWYgKHNlYWxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSwgJ1NldHRsZTogJyArIChwcm9taXNlLl9sYWJlbCB8fCAnIHVua25vd24gcHJvbWlzZScpKTtcblxuICAgICAgICBpZiAoIXNlYWxlZCAmJiBlcnJvcikge1xuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9LCBwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlKSB7XG4gICAgICBpZiAodGhlbmFibGUuX3N0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJEZVTEZJTExFRCkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gICAgICB9IGVsc2UgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICB0aGVuYWJsZS5fb25FcnJvciA9IG51bGw7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRzdWJzY3JpYmUodGhlbmFibGUsIHVuZGVmaW5lZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBpZiAodGhlbmFibGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUpIHtcbiAgICAgIGlmIChtYXliZVRoZW5hYmxlLmNvbnN0cnVjdG9yID09PSBwcm9taXNlLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdGhlbiA9IGxpYiRyc3ZwJCRpbnRlcm5hbCQkZ2V0VGhlbihtYXliZVRoZW5hYmxlKTtcblxuICAgICAgICBpZiAodGhlbiA9PT0gbGliJHJzdnAkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUikge1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGxpYiRyc3ZwJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IuZXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgICAgfSBlbHNlIGlmIChsaWIkcnN2cCR1dGlscyQkaXNGdW5jdGlvbih0aGVuKSkge1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSkge1xuICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGxpYiRyc3ZwJHV0aWxzJCRvYmplY3RPckZ1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJHB1Ymxpc2hSZWplY3Rpb24ocHJvbWlzZSkge1xuICAgICAgaWYgKHByb21pc2UuX29uRXJyb3IpIHtcbiAgICAgICAgcHJvbWlzZS5fb25FcnJvcihwcm9taXNlLl9yZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHB1Ymxpc2gocHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUEVORElORykgeyByZXR1cm47IH1cblxuICAgICAgcHJvbWlzZS5fcmVzdWx0ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IGxpYiRyc3ZwJCRpbnRlcm5hbCQkRlVMRklMTEVEO1xuXG4gICAgICBpZiAocHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChsaWIkcnN2cCRjb25maWckJGNvbmZpZy5pbnN0cnVtZW50KSB7XG4gICAgICAgICAgbGliJHJzdnAkaW5zdHJ1bWVudCQkZGVmYXVsdCgnZnVsZmlsbGVkJywgcHJvbWlzZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLmFzeW5jKGxpYiRyc3ZwJCRpbnRlcm5hbCQkcHVibGlzaCwgcHJvbWlzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKSB7XG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUEVORElORykgeyByZXR1cm47IH1cbiAgICAgIHByb21pc2UuX3N0YXRlID0gbGliJHJzdnAkJGludGVybmFsJCRSRUpFQ1RFRDtcbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHJlYXNvbjtcbiAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLmFzeW5jKGxpYiRyc3ZwJCRpbnRlcm5hbCQkcHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICAgIHZhciBzdWJzY3JpYmVycyA9IHBhcmVudC5fc3Vic2NyaWJlcnM7XG4gICAgICB2YXIgbGVuZ3RoID0gc3Vic2NyaWJlcnMubGVuZ3RoO1xuXG4gICAgICBwYXJlbnQuX29uRXJyb3IgPSBudWxsO1xuXG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGhdID0gY2hpbGQ7XG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGggKyBsaWIkcnN2cCQkaW50ZXJuYWwkJEZVTEZJTExFRF0gPSBvbkZ1bGZpbGxtZW50O1xuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoICsgbGliJHJzdnAkJGludGVybmFsJCRSRUpFQ1RFRF0gID0gb25SZWplY3Rpb247XG5cbiAgICAgIGlmIChsZW5ndGggPT09IDAgJiYgcGFyZW50Ll9zdGF0ZSkge1xuICAgICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZy5hc3luYyhsaWIkcnN2cCQkaW50ZXJuYWwkJHB1Ymxpc2gsIHBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRwdWJsaXNoKHByb21pc2UpIHtcbiAgICAgIHZhciBzdWJzY3JpYmVycyA9IHByb21pc2UuX3N1YnNjcmliZXJzO1xuICAgICAgdmFyIHNldHRsZWQgPSBwcm9taXNlLl9zdGF0ZTtcblxuICAgICAgaWYgKGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLmluc3RydW1lbnQpIHtcbiAgICAgICAgbGliJHJzdnAkaW5zdHJ1bWVudCQkZGVmYXVsdChzZXR0bGVkID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJEZVTEZJTExFRCA/ICdmdWxmaWxsZWQnIDogJ3JlamVjdGVkJywgcHJvbWlzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgIHZhciBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCA9IHByb21pc2UuX3Jlc3VsdDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICBjaGlsZCA9IHN1YnNjcmliZXJzW2ldO1xuICAgICAgICBjYWxsYmFjayA9IHN1YnNjcmliZXJzW2kgKyBzZXR0bGVkXTtcblxuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHNldHRsZWQsIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhkZXRhaWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRFcnJvck9iamVjdCgpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUiA9IG5ldyBsaWIkcnN2cCQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCk7XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhkZXRhaWwpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SLmVycm9yID0gZTtcbiAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgcHJvbWlzZSwgY2FsbGJhY2ssIGRldGFpbCkge1xuICAgICAgdmFyIGhhc0NhbGxiYWNrID0gbGliJHJzdnAkdXRpbHMkJGlzRnVuY3Rpb24oY2FsbGJhY2spLFxuICAgICAgICAgIHZhbHVlLCBlcnJvciwgc3VjY2VlZGVkLCBmYWlsZWQ7XG5cbiAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICB2YWx1ZSA9IGxpYiRyc3ZwJCRpbnRlcm5hbCQkdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUikge1xuICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgZXJyb3IgPSB2YWx1ZS5lcnJvcjtcbiAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGxpYiRyc3ZwJCRpbnRlcm5hbCQkd2l0aE93blByb21pc2UoKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZGV0YWlsO1xuICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICAvLyBub29wXG4gICAgICB9IGVsc2UgaWYgKGhhc0NhbGxiYWNrICYmIHN1Y2NlZWRlZCkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChmYWlsZWQpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJEZVTEZJTExFRCkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJGluaXRpYWxpemVQcm9taXNlKHByb21pc2UsIHJlc29sdmVyKSB7XG4gICAgICB2YXIgcmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc29sdmVyKGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKXtcbiAgICAgICAgICBpZiAocmVzb2x2ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIHJlamVjdFByb21pc2UocmVhc29uKSB7XG4gICAgICAgICAgaWYgKHJlc29sdmVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRlbnVtZXJhdG9yJCRtYWtlU2V0dGxlZFJlc3VsdChzdGF0ZSwgcG9zaXRpb24sIHZhbHVlKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkRlVMRklMTEVEKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhdGU6ICdmdWxmaWxsZWQnLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdGF0ZTogJ3JlamVjdGVkJyxcbiAgICAgICAgICByZWFzb246IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkZW51bWVyYXRvciQkRW51bWVyYXRvcihDb25zdHJ1Y3RvciwgaW5wdXQsIGFib3J0T25SZWplY3QsIGxhYmVsKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gICAgICB0aGlzLnByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJHJzdnAkJGludGVybmFsJCRub29wLCBsYWJlbCk7XG4gICAgICB0aGlzLl9hYm9ydE9uUmVqZWN0ID0gYWJvcnRPblJlamVjdDtcblxuICAgICAgaWYgKHRoaXMuX3ZhbGlkYXRlSW5wdXQoaW5wdXQpKSB7XG4gICAgICAgIHRoaXMuX2lucHV0ICAgICA9IGlucHV0O1xuICAgICAgICB0aGlzLmxlbmd0aCAgICAgPSBpbnB1dC5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZyA9IGlucHV0Lmxlbmd0aDtcblxuICAgICAgICB0aGlzLl9pbml0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMubGVuZ3RoIHx8IDA7XG4gICAgICAgICAgdGhpcy5fZW51bWVyYXRlKCk7XG4gICAgICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHRoaXMucHJvbWlzZSwgdGhpcy5fdmFsaWRhdGlvbkVycm9yKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCRlbnVtZXJhdG9yJCRkZWZhdWx0ID0gbGliJHJzdnAkZW51bWVyYXRvciQkRW51bWVyYXRvcjtcblxuICAgIGxpYiRyc3ZwJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl92YWxpZGF0ZUlucHV0ID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgIHJldHVybiBsaWIkcnN2cCR1dGlscyQkaXNBcnJheShpbnB1dCk7XG4gICAgfTtcblxuICAgIGxpYiRyc3ZwJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl92YWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0FycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheScpO1xuICAgIH07XG5cbiAgICBsaWIkcnN2cCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fcmVzdWx0ID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKTtcbiAgICB9O1xuXG4gICAgbGliJHJzdnAkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX2VudW1lcmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxlbmd0aCAgPSB0aGlzLmxlbmd0aDtcbiAgICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuICAgICAgdmFyIGlucHV0ICAgPSB0aGlzLl9pbnB1dDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IHByb21pc2UuX3N0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcgJiYgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuX2VhY2hFbnRyeShpbnB1dFtpXSwgaSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxpYiRyc3ZwJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9lYWNoRW50cnkgPSBmdW5jdGlvbihlbnRyeSwgaSkge1xuICAgICAgdmFyIGMgPSB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yO1xuICAgICAgaWYgKGxpYiRyc3ZwJHV0aWxzJCRpc01heWJlVGhlbmFibGUoZW50cnkpKSB7XG4gICAgICAgIGlmIChlbnRyeS5jb25zdHJ1Y3RvciA9PT0gYyAmJiBlbnRyeS5fc3RhdGUgIT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICAgIGVudHJ5Ll9vbkVycm9yID0gbnVsbDtcbiAgICAgICAgICB0aGlzLl9zZXR0bGVkQXQoZW50cnkuX3N0YXRlLCBpLCBlbnRyeS5fcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQoYy5yZXNvbHZlKGVudHJ5KSwgaSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuICAgICAgICB0aGlzLl9yZXN1bHRbaV0gPSB0aGlzLl9tYWtlUmVzdWx0KGxpYiRyc3ZwJCRpbnRlcm5hbCQkRlVMRklMTEVELCBpLCBlbnRyeSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxpYiRyc3ZwJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9zZXR0bGVkQXQgPSBmdW5jdGlvbihzdGF0ZSwgaSwgdmFsdWUpIHtcbiAgICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuXG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICB0aGlzLl9yZW1haW5pbmctLTtcblxuICAgICAgICBpZiAodGhpcy5fYWJvcnRPblJlamVjdCAmJiBzdGF0ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZXN1bHRbaV0gPSB0aGlzLl9tYWtlUmVzdWx0KHN0YXRlLCBpLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJHJzdnAkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX21ha2VSZXN1bHQgPSBmdW5jdGlvbihzdGF0ZSwgaSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgbGliJHJzdnAkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3dpbGxTZXR0bGVBdCA9IGZ1bmN0aW9uKHByb21pc2UsIGkpIHtcbiAgICAgIHZhciBlbnVtZXJhdG9yID0gdGhpcztcblxuICAgICAgbGliJHJzdnAkJGludGVybmFsJCRzdWJzY3JpYmUocHJvbWlzZSwgdW5kZWZpbmVkLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBlbnVtZXJhdG9yLl9zZXR0bGVkQXQobGliJHJzdnAkJGludGVybmFsJCRGVUxGSUxMRUQsIGksIHZhbHVlKTtcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICBlbnVtZXJhdG9yLl9zZXR0bGVkQXQobGliJHJzdnAkJGludGVybmFsJCRSRUpFQ1RFRCwgaSwgcmVhc29uKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcHJvbWlzZSRhbGwkJGFsbChlbnRyaWVzLCBsYWJlbCkge1xuICAgICAgcmV0dXJuIG5ldyBsaWIkcnN2cCRlbnVtZXJhdG9yJCRkZWZhdWx0KHRoaXMsIGVudHJpZXMsIHRydWUgLyogYWJvcnQgb24gcmVqZWN0ICovLCBsYWJlbCkucHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJHByb21pc2UkYWxsJCRkZWZhdWx0ID0gbGliJHJzdnAkcHJvbWlzZSRhbGwkJGFsbDtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRwcm9taXNlJHJhY2UkJHJhY2UoZW50cmllcywgbGFiZWwpIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcihsaWIkcnN2cCQkaW50ZXJuYWwkJG5vb3AsIGxhYmVsKTtcblxuICAgICAgaWYgKCFsaWIkcnN2cCR1dGlscyQkaXNBcnJheShlbnRyaWVzKSkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIHJhY2UuJykpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlbmd0aCA9IGVudHJpZXMubGVuZ3RoO1xuXG4gICAgICBmdW5jdGlvbiBvbkZ1bGZpbGxtZW50KHZhbHVlKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0aW9uKHJlYXNvbikge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgcHJvbWlzZS5fc3RhdGUgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUEVORElORyAmJiBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRzdWJzY3JpYmUoQ29uc3RydWN0b3IucmVzb2x2ZShlbnRyaWVzW2ldKSwgdW5kZWZpbmVkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkcHJvbWlzZSRyYWNlJCRkZWZhdWx0ID0gbGliJHJzdnAkcHJvbWlzZSRyYWNlJCRyYWNlO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHByb21pc2UkcmVzb2x2ZSQkcmVzb2x2ZShvYmplY3QsIGxhYmVsKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgICAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QuY29uc3RydWN0b3IgPT09IENvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRyc3ZwJCRpbnRlcm5hbCQkbm9vcCwgbGFiZWwpO1xuICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIG9iamVjdCk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdCA9IGxpYiRyc3ZwJHByb21pc2UkcmVzb2x2ZSQkcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRwcm9taXNlJHJlamVjdCQkcmVqZWN0KHJlYXNvbiwgbGFiZWwpIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJHJzdnAkJGludGVybmFsJCRub29wLCBsYWJlbCk7XG4gICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRwcm9taXNlJHJlamVjdCQkZGVmYXVsdCA9IGxpYiRyc3ZwJHByb21pc2UkcmVqZWN0JCRyZWplY3Q7XG5cbiAgICB2YXIgbGliJHJzdnAkcHJvbWlzZSQkZ3VpZEtleSA9ICdyc3ZwXycgKyBsaWIkcnN2cCR1dGlscyQkbm93KCkgKyAnLSc7XG4gICAgdmFyIGxpYiRyc3ZwJHByb21pc2UkJGNvdW50ZXIgPSAwO1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcHJvbWlzZSQkbmVlZHNSZXNvbHZlcigpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYSByZXNvbHZlciBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIHByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRwcm9taXNlJCRuZWVkc05ldygpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdQcm9taXNlJzogUGxlYXNlIHVzZSB0aGUgJ25ldycgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICBQcm9taXNlIG9iamVjdHMgcmVwcmVzZW50IHRoZSBldmVudHVhbCByZXN1bHQgb2YgYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbi4gVGhlXG4gICAgICBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLCB3aGljaFxuICAgICAgcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2XigJlzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZSByZWFzb25cbiAgICAgIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gICAgICBUZXJtaW5vbG9neVxuICAgICAgLS0tLS0tLS0tLS1cblxuICAgICAgLSBgcHJvbWlzZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHdpdGggYSBgdGhlbmAgbWV0aG9kIHdob3NlIGJlaGF2aW9yIGNvbmZvcm1zIHRvIHRoaXMgc3BlY2lmaWNhdGlvbi5cbiAgICAgIC0gYHRoZW5hYmxlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGEgYHRoZW5gIG1ldGhvZC5cbiAgICAgIC0gYHZhbHVlYCBpcyBhbnkgbGVnYWwgSmF2YVNjcmlwdCB2YWx1ZSAoaW5jbHVkaW5nIHVuZGVmaW5lZCwgYSB0aGVuYWJsZSwgb3IgYSBwcm9taXNlKS5cbiAgICAgIC0gYGV4Y2VwdGlvbmAgaXMgYSB2YWx1ZSB0aGF0IGlzIHRocm93biB1c2luZyB0aGUgdGhyb3cgc3RhdGVtZW50LlxuICAgICAgLSBgcmVhc29uYCBpcyBhIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHdoeSBhIHByb21pc2Ugd2FzIHJlamVjdGVkLlxuICAgICAgLSBgc2V0dGxlZGAgdGhlIGZpbmFsIHJlc3Rpbmcgc3RhdGUgb2YgYSBwcm9taXNlLCBmdWxmaWxsZWQgb3IgcmVqZWN0ZWQuXG5cbiAgICAgIEEgcHJvbWlzZSBjYW4gYmUgaW4gb25lIG9mIHRocmVlIHN0YXRlczogcGVuZGluZywgZnVsZmlsbGVkLCBvciByZWplY3RlZC5cblxuICAgICAgUHJvbWlzZXMgdGhhdCBhcmUgZnVsZmlsbGVkIGhhdmUgYSBmdWxmaWxsbWVudCB2YWx1ZSBhbmQgYXJlIGluIHRoZSBmdWxmaWxsZWRcbiAgICAgIHN0YXRlLiAgUHJvbWlzZXMgdGhhdCBhcmUgcmVqZWN0ZWQgaGF2ZSBhIHJlamVjdGlvbiByZWFzb24gYW5kIGFyZSBpbiB0aGVcbiAgICAgIHJlamVjdGVkIHN0YXRlLiAgQSBmdWxmaWxsbWVudCB2YWx1ZSBpcyBuZXZlciBhIHRoZW5hYmxlLlxuXG4gICAgICBQcm9taXNlcyBjYW4gYWxzbyBiZSBzYWlkIHRvICpyZXNvbHZlKiBhIHZhbHVlLiAgSWYgdGhpcyB2YWx1ZSBpcyBhbHNvIGFcbiAgICAgIHByb21pc2UsIHRoZW4gdGhlIG9yaWdpbmFsIHByb21pc2UncyBzZXR0bGVkIHN0YXRlIHdpbGwgbWF0Y2ggdGhlIHZhbHVlJ3NcbiAgICAgIHNldHRsZWQgc3RhdGUuICBTbyBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IHJlamVjdHMgd2lsbFxuICAgICAgaXRzZWxmIHJlamVjdCwgYW5kIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2lsbFxuICAgICAgaXRzZWxmIGZ1bGZpbGwuXG5cblxuICAgICAgQmFzaWMgVXNhZ2U6XG4gICAgICAtLS0tLS0tLS0tLS1cblxuICAgICAgYGBganNcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIG9uIHN1Y2Nlc3NcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG5cbiAgICAgICAgLy8gb24gZmFpbHVyZVxuICAgICAgICByZWplY3QocmVhc29uKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAvLyBvbiByZWplY3Rpb25cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFkdmFuY2VkIFVzYWdlOlxuICAgICAgLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFByb21pc2VzIHNoaW5lIHdoZW4gYWJzdHJhY3RpbmcgYXdheSBhc3luY2hyb25vdXMgaW50ZXJhY3Rpb25zIHN1Y2ggYXNcbiAgICAgIGBYTUxIdHRwUmVxdWVzdGBzLlxuXG4gICAgICBgYGBqc1xuICAgICAgZnVuY3Rpb24gZ2V0SlNPTih1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGhhbmRsZXI7XG4gICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHRoaXMuRE9ORSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ2V0SlNPTjogYCcgKyB1cmwgKyAnYCBmYWlsZWQgd2l0aCBzdGF0dXM6IFsnICsgdGhpcy5zdGF0dXMgKyAnXScpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBnZXRKU09OKCcvcG9zdHMuanNvbicpLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgICAgICAvLyBvbiBmdWxmaWxsbWVudFxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIC8vIG9uIHJlamVjdGlvblxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgVW5saWtlIGNhbGxiYWNrcywgcHJvbWlzZXMgYXJlIGdyZWF0IGNvbXBvc2FibGUgcHJpbWl0aXZlcy5cblxuICAgICAgYGBganNcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0SlNPTignL3Bvc3RzJyksXG4gICAgICAgIGdldEpTT04oJy9jb21tZW50cycpXG4gICAgICBdKS50aGVuKGZ1bmN0aW9uKHZhbHVlcyl7XG4gICAgICAgIHZhbHVlc1swXSAvLyA9PiBwb3N0c0pTT05cbiAgICAgICAgdmFsdWVzWzFdIC8vID0+IGNvbW1lbnRzSlNPTlxuXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAY2xhc3MgUlNWUC5Qcm9taXNlXG4gICAgICBAcGFyYW0ge2Z1bmN0aW9ufSByZXNvbHZlclxuICAgICAgQHBhcmFtIHtTdHJpbmd9IGxhYmVsIG9wdGlvbmFsIHN0cmluZyBmb3IgbGFiZWxpbmcgdGhlIHByb21pc2UuXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHByb21pc2UkJFByb21pc2UocmVzb2x2ZXIsIGxhYmVsKSB7XG4gICAgICB0aGlzLl9pZCA9IGxpYiRyc3ZwJHByb21pc2UkJGNvdW50ZXIrKztcbiAgICAgIHRoaXMuX2xhYmVsID0gbGFiZWw7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG5cbiAgICAgIGlmIChsaWIkcnN2cCRjb25maWckJGNvbmZpZy5pbnN0cnVtZW50KSB7XG4gICAgICAgIGxpYiRyc3ZwJGluc3RydW1lbnQkJGRlZmF1bHQoJ2NyZWF0ZWQnLCB0aGlzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpYiRyc3ZwJCRpbnRlcm5hbCQkbm9vcCAhPT0gcmVzb2x2ZXIpIHtcbiAgICAgICAgaWYgKCFsaWIkcnN2cCR1dGlscyQkaXNGdW5jdGlvbihyZXNvbHZlcikpIHtcbiAgICAgICAgICBsaWIkcnN2cCRwcm9taXNlJCRuZWVkc1Jlc29sdmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgbGliJHJzdnAkcHJvbWlzZSQkUHJvbWlzZSkpIHtcbiAgICAgICAgICBsaWIkcnN2cCRwcm9taXNlJCRuZWVkc05ldygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRpbml0aWFsaXplUHJvbWlzZSh0aGlzLCByZXNvbHZlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQgPSBsaWIkcnN2cCRwcm9taXNlJCRQcm9taXNlO1xuXG4gICAgLy8gZGVwcmVjYXRlZFxuICAgIGxpYiRyc3ZwJHByb21pc2UkJFByb21pc2UuY2FzdCA9IGxpYiRyc3ZwJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdDtcbiAgICBsaWIkcnN2cCRwcm9taXNlJCRQcm9taXNlLmFsbCA9IGxpYiRyc3ZwJHByb21pc2UkYWxsJCRkZWZhdWx0O1xuICAgIGxpYiRyc3ZwJHByb21pc2UkJFByb21pc2UucmFjZSA9IGxpYiRyc3ZwJHByb21pc2UkcmFjZSQkZGVmYXVsdDtcbiAgICBsaWIkcnN2cCRwcm9taXNlJCRQcm9taXNlLnJlc29sdmUgPSBsaWIkcnN2cCRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQ7XG4gICAgbGliJHJzdnAkcHJvbWlzZSQkUHJvbWlzZS5yZWplY3QgPSBsaWIkcnN2cCRwcm9taXNlJHJlamVjdCQkZGVmYXVsdDtcblxuICAgIGxpYiRyc3ZwJHByb21pc2UkJFByb21pc2UucHJvdG90eXBlID0ge1xuICAgICAgY29uc3RydWN0b3I6IGxpYiRyc3ZwJHByb21pc2UkJFByb21pc2UsXG5cbiAgICAgIF9ndWlkS2V5OiBsaWIkcnN2cCRwcm9taXNlJCRndWlkS2V5LFxuXG4gICAgICBfb25FcnJvcjogZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZy5hc3luYyhmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9vbkVycm9yKSB7XG4gICAgICAgICAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnWyd0cmlnZ2VyJ10oJ2Vycm9yJywgcmVhc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICB9LFxuXG4gICAgLyoqXG4gICAgICBUaGUgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCxcbiAgICAgIHdoaWNoIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlXG4gICAgICByZWFzb24gd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24odXNlcil7XG4gICAgICAgIC8vIHVzZXIgaXMgYXZhaWxhYmxlXG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyB1c2VyIGlzIHVuYXZhaWxhYmxlLCBhbmQgeW91IGFyZSBnaXZlbiB0aGUgcmVhc29uIHdoeVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQ2hhaW5pbmdcbiAgICAgIC0tLS0tLS0tXG5cbiAgICAgIFRoZSByZXR1cm4gdmFsdWUgb2YgYHRoZW5gIGlzIGl0c2VsZiBhIHByb21pc2UuICBUaGlzIHNlY29uZCwgJ2Rvd25zdHJlYW0nXG4gICAgICBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvbWlzZSdzIGZ1bGZpbGxtZW50XG4gICAgICBvciByZWplY3Rpb24gaGFuZGxlciwgb3IgcmVqZWN0ZWQgaWYgdGhlIGhhbmRsZXIgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gdXNlci5uYW1lO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICByZXR1cm4gJ2RlZmF1bHQgbmFtZSc7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh1c2VyTmFtZSkge1xuICAgICAgICAvLyBJZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHVzZXJOYW1lYCB3aWxsIGJlIHRoZSB1c2VyJ3MgbmFtZSwgb3RoZXJ3aXNlIGl0XG4gICAgICAgIC8vIHdpbGwgYmUgYCdkZWZhdWx0IG5hbWUnYFxuICAgICAgfSk7XG5cbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jyk7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBpZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHJlYXNvbmAgd2lsbCBiZSAnRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknLlxuICAgICAgICAvLyBJZiBgZmluZFVzZXJgIHJlamVjdGVkLCBgcmVhc29uYCB3aWxsIGJlICdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jy5cbiAgICAgIH0pO1xuICAgICAgYGBgXG4gICAgICBJZiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIGRvZXMgbm90IHNwZWNpZnkgYSByZWplY3Rpb24gaGFuZGxlciwgcmVqZWN0aW9uIHJlYXNvbnMgd2lsbCBiZSBwcm9wYWdhdGVkIGZ1cnRoZXIgZG93bnN0cmVhbS5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgUGVkYWdvZ2ljYWxFeGNlcHRpb24oJ1Vwc3RyZWFtIGVycm9yJyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIFRoZSBgUGVkZ2Fnb2NpYWxFeGNlcHRpb25gIGlzIHByb3BhZ2F0ZWQgYWxsIHRoZSB3YXkgZG93biB0byBoZXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBc3NpbWlsYXRpb25cbiAgICAgIC0tLS0tLS0tLS0tLVxuXG4gICAgICBTb21ldGltZXMgdGhlIHZhbHVlIHlvdSB3YW50IHRvIHByb3BhZ2F0ZSB0byBhIGRvd25zdHJlYW0gcHJvbWlzZSBjYW4gb25seSBiZVxuICAgICAgcmV0cmlldmVkIGFzeW5jaHJvbm91c2x5LiBUaGlzIGNhbiBiZSBhY2hpZXZlZCBieSByZXR1cm5pbmcgYSBwcm9taXNlIGluIHRoZVxuICAgICAgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIGhhbmRsZXIuIFRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCB0aGVuIGJlIHBlbmRpbmdcbiAgICAgIHVudGlsIHRoZSByZXR1cm5lZCBwcm9taXNlIGlzIHNldHRsZWQuIFRoaXMgaXMgY2FsbGVkICphc3NpbWlsYXRpb24qLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAgIC8vIFRoZSB1c2VyJ3MgY29tbWVudHMgYXJlIG5vdyBhdmFpbGFibGVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIElmIHRoZSBhc3NpbWxpYXRlZCBwcm9taXNlIHJlamVjdHMsIHRoZW4gdGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIGFsc28gcmVqZWN0LlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgZnVsZmlsbHMsIHdlJ2xsIGhhdmUgdGhlIHZhbHVlIGhlcmVcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCByZWplY3RzLCB3ZSdsbCBoYXZlIHRoZSByZWFzb24gaGVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgU2ltcGxlIEV4YW1wbGVcbiAgICAgIC0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gZmluZFJlc3VsdCgpO1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgRXJyYmFjayBFeGFtcGxlXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kUmVzdWx0KGZ1bmN0aW9uKHJlc3VsdCwgZXJyKXtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIC8vIGZhaWx1cmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgZmluZFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQWR2YW5jZWQgRXhhbXBsZVxuICAgICAgLS0tLS0tLS0tLS0tLS1cblxuICAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICB2YXIgYXV0aG9yLCBib29rcztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXV0aG9yID0gZmluZEF1dGhvcigpO1xuICAgICAgICBib29rcyAgPSBmaW5kQm9va3NCeUF1dGhvcihhdXRob3IpO1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgRXJyYmFjayBFeGFtcGxlXG5cbiAgICAgIGBgYGpzXG5cbiAgICAgIGZ1bmN0aW9uIGZvdW5kQm9va3MoYm9va3MpIHtcblxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBmYWlsdXJlKHJlYXNvbikge1xuXG4gICAgICB9XG5cbiAgICAgIGZpbmRBdXRob3IoZnVuY3Rpb24oYXV0aG9yLCBlcnIpe1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIC8vIGZhaWx1cmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmluZEJvb29rc0J5QXV0aG9yKGF1dGhvciwgZnVuY3Rpb24oYm9va3MsIGVycikge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBmb3VuZEJvb2tzKGJvb2tzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgZmFpbHVyZShyZWFzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgZmluZEF1dGhvcigpLlxuICAgICAgICB0aGVuKGZpbmRCb29rc0J5QXV0aG9yKS5cbiAgICAgICAgdGhlbihmdW5jdGlvbihib29rcyl7XG4gICAgICAgICAgLy8gZm91bmQgYm9va3NcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAbWV0aG9kIHRoZW5cbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uRnVsZmlsbGVkXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGVkXG4gICAgICBAcGFyYW0ge1N0cmluZ30gbGFiZWwgb3B0aW9uYWwgc3RyaW5nIGZvciBsYWJlbGluZyB0aGUgcHJvbWlzZS5cbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cbiAgICAgIHRoZW46IGZ1bmN0aW9uKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uLCBsYWJlbCkge1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXRlID0gcGFyZW50Ll9zdGF0ZTtcblxuICAgICAgICBpZiAoc3RhdGUgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkRlVMRklMTEVEICYmICFvbkZ1bGZpbGxtZW50IHx8IHN0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFJFSkVDVEVEICYmICFvblJlamVjdGlvbikge1xuICAgICAgICAgIGlmIChsaWIkcnN2cCRjb25maWckJGNvbmZpZy5pbnN0cnVtZW50KSB7XG4gICAgICAgICAgICBsaWIkcnN2cCRpbnN0cnVtZW50JCRkZWZhdWx0KCdjaGFpbmVkJywgdGhpcywgdGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50Ll9vbkVycm9yID0gbnVsbDtcblxuICAgICAgICB2YXIgY2hpbGQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihsaWIkcnN2cCQkaW50ZXJuYWwkJG5vb3AsIGxhYmVsKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhcmVudC5fcmVzdWx0O1xuXG4gICAgICAgIGlmIChsaWIkcnN2cCRjb25maWckJGNvbmZpZy5pbnN0cnVtZW50KSB7XG4gICAgICAgICAgbGliJHJzdnAkaW5zdHJ1bWVudCQkZGVmYXVsdCgnY2hhaW5lZCcsIHBhcmVudCwgY2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzW3N0YXRlIC0gMV07XG4gICAgICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWcuYXN5bmMoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc3RhdGUsIGNoaWxkLCBjYWxsYmFjaywgcmVzdWx0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9LFxuXG4gICAgLyoqXG4gICAgICBgY2F0Y2hgIGlzIHNpbXBseSBzdWdhciBmb3IgYHRoZW4odW5kZWZpbmVkLCBvblJlamVjdGlvbilgIHdoaWNoIG1ha2VzIGl0IHRoZSBzYW1lXG4gICAgICBhcyB0aGUgY2F0Y2ggYmxvY2sgb2YgYSB0cnkvY2F0Y2ggc3RhdGVtZW50LlxuXG4gICAgICBgYGBqc1xuICAgICAgZnVuY3Rpb24gZmluZEF1dGhvcigpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkbid0IGZpbmQgdGhhdCBhdXRob3InKTtcbiAgICAgIH1cblxuICAgICAgLy8gc3luY2hyb25vdXNcbiAgICAgIHRyeSB7XG4gICAgICAgIGZpbmRBdXRob3IoKTtcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9XG5cbiAgICAgIC8vIGFzeW5jIHdpdGggcHJvbWlzZXNcbiAgICAgIGZpbmRBdXRob3IoKS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQG1ldGhvZCBjYXRjaFxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3Rpb25cbiAgICAgIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCBvcHRpb25hbCBzdHJpbmcgZm9yIGxhYmVsaW5nIHRoZSBwcm9taXNlLlxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQHJldHVybiB7UHJvbWlzZX1cbiAgICAqL1xuICAgICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3Rpb24sIGxhYmVsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24sIGxhYmVsKTtcbiAgICAgIH0sXG5cbiAgICAvKipcbiAgICAgIGBmaW5hbGx5YCB3aWxsIGJlIGludm9rZWQgcmVnYXJkbGVzcyBvZiB0aGUgcHJvbWlzZSdzIGZhdGUganVzdCBhcyBuYXRpdmVcbiAgICAgIHRyeS9jYXRjaC9maW5hbGx5IGJlaGF2ZXNcblxuICAgICAgU3luY2hyb25vdXMgZXhhbXBsZTpcblxuICAgICAgYGBganNcbiAgICAgIGZpbmRBdXRob3IoKSB7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBBdXRob3IoKTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGZpbmRBdXRob3IoKTsgLy8gc3VjY2VlZCBvciBmYWlsXG4gICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBmaW5kT3RoZXJBdXRoZXIoKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIC8vIGFsd2F5cyBydW5zXG4gICAgICAgIC8vIGRvZXNuJ3QgYWZmZWN0IHRoZSByZXR1cm4gdmFsdWVcbiAgICAgIH1cbiAgICAgIGBgYFxuXG4gICAgICBBc3luY2hyb25vdXMgZXhhbXBsZTpcblxuICAgICAgYGBganNcbiAgICAgIGZpbmRBdXRob3IoKS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICByZXR1cm4gZmluZE90aGVyQXV0aGVyKCk7XG4gICAgICB9KS5maW5hbGx5KGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGF1dGhvciB3YXMgZWl0aGVyIGZvdW5kLCBvciBub3RcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBtZXRob2QgZmluYWxseVxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCBvcHRpb25hbCBzdHJpbmcgZm9yIGxhYmVsaW5nIHRoZSBwcm9taXNlLlxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQHJldHVybiB7UHJvbWlzZX1cbiAgICAqL1xuICAgICAgJ2ZpbmFsbHknOiBmdW5jdGlvbihjYWxsYmFjaywgbGFiZWwpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aHJvdyByZWFzb247XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIGxhYmVsKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkYWxsJHNldHRsZWQkJEFsbFNldHRsZWQoQ29uc3RydWN0b3IsIGVudHJpZXMsIGxhYmVsKSB7XG4gICAgICB0aGlzLl9zdXBlckNvbnN0cnVjdG9yKENvbnN0cnVjdG9yLCBlbnRyaWVzLCBmYWxzZSAvKiBkb24ndCBhYm9ydCBvbiByZWplY3QgKi8sIGxhYmVsKTtcbiAgICB9XG5cbiAgICBsaWIkcnN2cCRhbGwkc2V0dGxlZCQkQWxsU2V0dGxlZC5wcm90b3R5cGUgPSBsaWIkcnN2cCR1dGlscyQkb19jcmVhdGUobGliJHJzdnAkZW51bWVyYXRvciQkZGVmYXVsdC5wcm90b3R5cGUpO1xuICAgIGxpYiRyc3ZwJGFsbCRzZXR0bGVkJCRBbGxTZXR0bGVkLnByb3RvdHlwZS5fc3VwZXJDb25zdHJ1Y3RvciA9IGxpYiRyc3ZwJGVudW1lcmF0b3IkJGRlZmF1bHQ7XG4gICAgbGliJHJzdnAkYWxsJHNldHRsZWQkJEFsbFNldHRsZWQucHJvdG90eXBlLl9tYWtlUmVzdWx0ID0gbGliJHJzdnAkZW51bWVyYXRvciQkbWFrZVNldHRsZWRSZXN1bHQ7XG4gICAgbGliJHJzdnAkYWxsJHNldHRsZWQkJEFsbFNldHRsZWQucHJvdG90eXBlLl92YWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ2FsbFNldHRsZWQgbXVzdCBiZSBjYWxsZWQgd2l0aCBhbiBhcnJheScpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRhbGwkc2V0dGxlZCQkYWxsU2V0dGxlZChlbnRyaWVzLCBsYWJlbCkge1xuICAgICAgcmV0dXJuIG5ldyBsaWIkcnN2cCRhbGwkc2V0dGxlZCQkQWxsU2V0dGxlZChsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0LCBlbnRyaWVzLCBsYWJlbCkucHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJGFsbCRzZXR0bGVkJCRkZWZhdWx0ID0gbGliJHJzdnAkYWxsJHNldHRsZWQkJGFsbFNldHRsZWQ7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkYWxsJCRhbGwoYXJyYXksIGxhYmVsKSB7XG4gICAgICByZXR1cm4gbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdC5hbGwoYXJyYXksIGxhYmVsKTtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJGFsbCQkZGVmYXVsdCA9IGxpYiRyc3ZwJGFsbCQkYWxsO1xuICAgIHZhciBsaWIkcnN2cCRhc2FwJCRsZW4gPSAwO1xuICAgIHZhciBsaWIkcnN2cCRhc2FwJCR0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuICAgIHZhciBsaWIkcnN2cCRhc2FwJCR2ZXJ0eE5leHQ7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkYXNhcCQkYXNhcChjYWxsYmFjaywgYXJnKSB7XG4gICAgICBsaWIkcnN2cCRhc2FwJCRxdWV1ZVtsaWIkcnN2cCRhc2FwJCRsZW5dID0gY2FsbGJhY2s7XG4gICAgICBsaWIkcnN2cCRhc2FwJCRxdWV1ZVtsaWIkcnN2cCRhc2FwJCRsZW4gKyAxXSA9IGFyZztcbiAgICAgIGxpYiRyc3ZwJGFzYXAkJGxlbiArPSAyO1xuICAgICAgaWYgKGxpYiRyc3ZwJGFzYXAkJGxlbiA9PT0gMikge1xuICAgICAgICAvLyBJZiBsZW4gaXMgMSwgdGhhdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gc2NoZWR1bGUgYW4gYXN5bmMgZmx1c2guXG4gICAgICAgIC8vIElmIGFkZGl0aW9uYWwgY2FsbGJhY2tzIGFyZSBxdWV1ZWQgYmVmb3JlIHRoZSBxdWV1ZSBpcyBmbHVzaGVkLCB0aGV5XG4gICAgICAgIC8vIHdpbGwgYmUgcHJvY2Vzc2VkIGJ5IHRoaXMgZmx1c2ggdGhhdCB3ZSBhcmUgc2NoZWR1bGluZy5cbiAgICAgICAgbGliJHJzdnAkYXNhcCQkc2NoZWR1bGVGbHVzaCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCRhc2FwJCRkZWZhdWx0ID0gbGliJHJzdnAkYXNhcCQkYXNhcDtcblxuICAgIHZhciBsaWIkcnN2cCRhc2FwJCRicm93c2VyV2luZG93ID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkYnJvd3Nlckdsb2JhbCA9IGxpYiRyc3ZwJGFzYXAkJGJyb3dzZXJXaW5kb3cgfHwge307XG4gICAgdmFyIGxpYiRyc3ZwJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gbGliJHJzdnAkYXNhcCQkYnJvd3Nlckdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGxpYiRyc3ZwJGFzYXAkJGJyb3dzZXJHbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkaXNOb2RlID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHt9LnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJztcblxuICAgIC8vIHRlc3QgZm9yIHdlYiB3b3JrZXIgYnV0IG5vdCBpbiBJRTEwXG4gICAgdmFyIGxpYiRyc3ZwJGFzYXAkJGlzV29ya2VyID0gdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIGltcG9ydFNjcmlwdHMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnO1xuXG4gICAgLy8gbm9kZVxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFzYXAkJHVzZU5leHRUaWNrKCkge1xuICAgICAgdmFyIG5leHRUaWNrID0gcHJvY2Vzcy5uZXh0VGljaztcbiAgICAgIC8vIG5vZGUgdmVyc2lvbiAwLjEwLnggZGlzcGxheXMgYSBkZXByZWNhdGlvbiB3YXJuaW5nIHdoZW4gbmV4dFRpY2sgaXMgdXNlZCByZWN1cnNpdmVseVxuICAgICAgLy8gc2V0SW1tZWRpYXRlIHNob3VsZCBiZSB1c2VkIGluc3RlYWQgaW5zdGVhZFxuICAgICAgdmFyIHZlcnNpb24gPSBwcm9jZXNzLnZlcnNpb25zLm5vZGUubWF0Y2goL14oPzooXFxkKylcXC4pPyg/OihcXGQrKVxcLik/KFxcKnxcXGQrKSQvKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZlcnNpb24pICYmIHZlcnNpb25bMV0gPT09ICcwJyAmJiB2ZXJzaW9uWzJdID09PSAnMTAnKSB7XG4gICAgICAgIG5leHRUaWNrID0gc2V0SW1tZWRpYXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBuZXh0VGljayhsaWIkcnN2cCRhc2FwJCRmbHVzaCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIHZlcnR4XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkYXNhcCQkdXNlVmVydHhUaW1lcigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGliJHJzdnAkYXNhcCQkdmVydHhOZXh0KGxpYiRyc3ZwJGFzYXAkJGZsdXNoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkYXNhcCQkdXNlTXV0YXRpb25PYnNlcnZlcigpIHtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBsaWIkcnN2cCRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlcihsaWIkcnN2cCRhc2FwJCRmbHVzaCk7XG4gICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIG5vZGUuZGF0YSA9IChpdGVyYXRpb25zID0gKytpdGVyYXRpb25zICUgMik7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIHdlYiB3b3JrZXJcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRhc2FwJCR1c2VNZXNzYWdlQ2hhbm5lbCgpIHtcbiAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpYiRyc3ZwJGFzYXAkJGZsdXNoO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkYXNhcCQkdXNlU2V0VGltZW91dCgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dChsaWIkcnN2cCRhc2FwJCRmbHVzaCwgMSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCRhc2FwJCRxdWV1ZSA9IG5ldyBBcnJheSgxMDAwKTtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRhc2FwJCRmbHVzaCgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGliJHJzdnAkYXNhcCQkbGVuOyBpKz0yKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGxpYiRyc3ZwJGFzYXAkJHF1ZXVlW2ldO1xuICAgICAgICB2YXIgYXJnID0gbGliJHJzdnAkYXNhcCQkcXVldWVbaSsxXTtcblxuICAgICAgICBjYWxsYmFjayhhcmcpO1xuXG4gICAgICAgIGxpYiRyc3ZwJGFzYXAkJHF1ZXVlW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICBsaWIkcnN2cCRhc2FwJCRxdWV1ZVtpKzFdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBsaWIkcnN2cCRhc2FwJCRsZW4gPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFzYXAkJGF0dGVtcHRWZXJ0ZXgoKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgciA9IHJlcXVpcmU7XG4gICAgICAgIHZhciB2ZXJ0eCA9IHIoJ3ZlcnR4Jyk7XG4gICAgICAgIGxpYiRyc3ZwJGFzYXAkJHZlcnR4TmV4dCA9IHZlcnR4LnJ1bk9uTG9vcCB8fCB2ZXJ0eC5ydW5PbkNvbnRleHQ7XG4gICAgICAgIHJldHVybiBsaWIkcnN2cCRhc2FwJCR1c2VWZXJ0eFRpbWVyKCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJGFzYXAkJHVzZVNldFRpbWVvdXQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkc2NoZWR1bGVGbHVzaDtcbiAgICAvLyBEZWNpZGUgd2hhdCBhc3luYyBtZXRob2QgdG8gdXNlIHRvIHRyaWdnZXJpbmcgcHJvY2Vzc2luZyBvZiBxdWV1ZWQgY2FsbGJhY2tzOlxuICAgIGlmIChsaWIkcnN2cCRhc2FwJCRpc05vZGUpIHtcbiAgICAgIGxpYiRyc3ZwJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkcnN2cCRhc2FwJCR1c2VOZXh0VGljaygpO1xuICAgIH0gZWxzZSBpZiAobGliJHJzdnAkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGxpYiRyc3ZwJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkcnN2cCRhc2FwJCR1c2VNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkcnN2cCRhc2FwJCRpc1dvcmtlcikge1xuICAgICAgbGliJHJzdnAkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRyc3ZwJGFzYXAkJHVzZU1lc3NhZ2VDaGFubmVsKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkcnN2cCRhc2FwJCRicm93c2VyV2luZG93ID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxpYiRyc3ZwJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkcnN2cCRhc2FwJCRhdHRlbXB0VmVydGV4KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpYiRyc3ZwJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkcnN2cCRhc2FwJCR1c2VTZXRUaW1lb3V0KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGRlZmVyJCRkZWZlcihsYWJlbCkge1xuICAgICAgdmFyIGRlZmVycmVkID0geyB9O1xuXG4gICAgICBkZWZlcnJlZFsncHJvbWlzZSddID0gbmV3IGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGRlZmVycmVkWydyZXNvbHZlJ10gPSByZXNvbHZlO1xuICAgICAgICBkZWZlcnJlZFsncmVqZWN0J10gPSByZWplY3Q7XG4gICAgICB9LCBsYWJlbCk7XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZDtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJGRlZmVyJCRkZWZhdWx0ID0gbGliJHJzdnAkZGVmZXIkJGRlZmVyO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGZpbHRlciQkZmlsdGVyKHByb21pc2VzLCBmaWx0ZXJGbiwgbGFiZWwpIHtcbiAgICAgIHJldHVybiBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0LmFsbChwcm9taXNlcywgbGFiZWwpLnRoZW4oZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICAgIGlmICghbGliJHJzdnAkdXRpbHMkJGlzRnVuY3Rpb24oZmlsdGVyRm4pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYSBmdW5jdGlvbiBhcyBmaWx0ZXIncyBzZWNvbmQgYXJndW1lbnQuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgIHZhciBmaWx0ZXJlZCA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBmaWx0ZXJlZFtpXSA9IGZpbHRlckZuKHZhbHVlc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdC5hbGwoZmlsdGVyZWQsIGxhYmVsKS50aGVuKGZ1bmN0aW9uKGZpbHRlcmVkKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICAgICAgICB2YXIgbmV3TGVuZ3RoID0gMDtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJlZFtpXSkge1xuICAgICAgICAgICAgICByZXN1bHRzW25ld0xlbmd0aF0gPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICAgIG5ld0xlbmd0aCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc3VsdHMubGVuZ3RoID0gbmV3TGVuZ3RoO1xuXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRmaWx0ZXIkJGRlZmF1bHQgPSBsaWIkcnN2cCRmaWx0ZXIkJGZpbHRlcjtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHByb21pc2UkaGFzaCQkUHJvbWlzZUhhc2goQ29uc3RydWN0b3IsIG9iamVjdCwgbGFiZWwpIHtcbiAgICAgIHRoaXMuX3N1cGVyQ29uc3RydWN0b3IoQ29uc3RydWN0b3IsIG9iamVjdCwgdHJ1ZSwgbGFiZWwpO1xuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCRwcm9taXNlJGhhc2gkJGRlZmF1bHQgPSBsaWIkcnN2cCRwcm9taXNlJGhhc2gkJFByb21pc2VIYXNoO1xuXG4gICAgbGliJHJzdnAkcHJvbWlzZSRoYXNoJCRQcm9taXNlSGFzaC5wcm90b3R5cGUgPSBsaWIkcnN2cCR1dGlscyQkb19jcmVhdGUobGliJHJzdnAkZW51bWVyYXRvciQkZGVmYXVsdC5wcm90b3R5cGUpO1xuICAgIGxpYiRyc3ZwJHByb21pc2UkaGFzaCQkUHJvbWlzZUhhc2gucHJvdG90eXBlLl9zdXBlckNvbnN0cnVjdG9yID0gbGliJHJzdnAkZW51bWVyYXRvciQkZGVmYXVsdDtcbiAgICBsaWIkcnN2cCRwcm9taXNlJGhhc2gkJFByb21pc2VIYXNoLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fcmVzdWx0ID0ge307XG4gICAgfTtcblxuICAgIGxpYiRyc3ZwJHByb21pc2UkaGFzaCQkUHJvbWlzZUhhc2gucHJvdG90eXBlLl92YWxpZGF0ZUlucHV0ID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgIHJldHVybiBpbnB1dCAmJiB0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnO1xuICAgIH07XG5cbiAgICBsaWIkcnN2cCRwcm9taXNlJGhhc2gkJFByb21pc2VIYXNoLnByb3RvdHlwZS5fdmFsaWRhdGlvbkVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdQcm9taXNlLmhhc2ggbXVzdCBiZSBjYWxsZWQgd2l0aCBhbiBvYmplY3QnKTtcbiAgICB9O1xuXG4gICAgbGliJHJzdnAkcHJvbWlzZSRoYXNoJCRQcm9taXNlSGFzaC5wcm90b3R5cGUuX2VudW1lcmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG4gICAgICB2YXIgaW5wdXQgICA9IHRoaXMuX2lucHV0O1xuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIGlucHV0KSB7XG4gICAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRQRU5ESU5HICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnB1dCwga2V5KSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICBwb3NpdGlvbjoga2V5LFxuICAgICAgICAgICAgZW50cnk6IGlucHV0W2tleV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgbGVuZ3RoID0gcmVzdWx0cy5sZW5ndGg7XG4gICAgICB0aGlzLl9yZW1haW5pbmcgPSBsZW5ndGg7XG4gICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgcHJvbWlzZS5fc3RhdGUgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUEVORElORyAmJiBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgICAgdGhpcy5fZWFjaEVudHJ5KHJlc3VsdC5lbnRyeSwgcmVzdWx0LnBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkaGFzaCRzZXR0bGVkJCRIYXNoU2V0dGxlZChDb25zdHJ1Y3Rvciwgb2JqZWN0LCBsYWJlbCkge1xuICAgICAgdGhpcy5fc3VwZXJDb25zdHJ1Y3RvcihDb25zdHJ1Y3Rvciwgb2JqZWN0LCBmYWxzZSwgbGFiZWwpO1xuICAgIH1cblxuICAgIGxpYiRyc3ZwJGhhc2gkc2V0dGxlZCQkSGFzaFNldHRsZWQucHJvdG90eXBlID0gbGliJHJzdnAkdXRpbHMkJG9fY3JlYXRlKGxpYiRyc3ZwJHByb21pc2UkaGFzaCQkZGVmYXVsdC5wcm90b3R5cGUpO1xuICAgIGxpYiRyc3ZwJGhhc2gkc2V0dGxlZCQkSGFzaFNldHRsZWQucHJvdG90eXBlLl9zdXBlckNvbnN0cnVjdG9yID0gbGliJHJzdnAkZW51bWVyYXRvciQkZGVmYXVsdDtcbiAgICBsaWIkcnN2cCRoYXNoJHNldHRsZWQkJEhhc2hTZXR0bGVkLnByb3RvdHlwZS5fbWFrZVJlc3VsdCA9IGxpYiRyc3ZwJGVudW1lcmF0b3IkJG1ha2VTZXR0bGVkUmVzdWx0O1xuXG4gICAgbGliJHJzdnAkaGFzaCRzZXR0bGVkJCRIYXNoU2V0dGxlZC5wcm90b3R5cGUuX3ZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignaGFzaFNldHRsZWQgbXVzdCBiZSBjYWxsZWQgd2l0aCBhbiBvYmplY3QnKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkaGFzaCRzZXR0bGVkJCRoYXNoU2V0dGxlZChvYmplY3QsIGxhYmVsKSB7XG4gICAgICByZXR1cm4gbmV3IGxpYiRyc3ZwJGhhc2gkc2V0dGxlZCQkSGFzaFNldHRsZWQobGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdCwgb2JqZWN0LCBsYWJlbCkucHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJGhhc2gkc2V0dGxlZCQkZGVmYXVsdCA9IGxpYiRyc3ZwJGhhc2gkc2V0dGxlZCQkaGFzaFNldHRsZWQ7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkaGFzaCQkaGFzaChvYmplY3QsIGxhYmVsKSB7XG4gICAgICByZXR1cm4gbmV3IGxpYiRyc3ZwJHByb21pc2UkaGFzaCQkZGVmYXVsdChsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0LCBvYmplY3QsIGxhYmVsKS5wcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkaGFzaCQkZGVmYXVsdCA9IGxpYiRyc3ZwJGhhc2gkJGhhc2g7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkbWFwJCRtYXAocHJvbWlzZXMsIG1hcEZuLCBsYWJlbCkge1xuICAgICAgcmV0dXJuIGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQuYWxsKHByb21pc2VzLCBsYWJlbCkudGhlbihmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgICAgaWYgKCFsaWIkcnN2cCR1dGlscyQkaXNGdW5jdGlvbihtYXBGbikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhIGZ1bmN0aW9uIGFzIG1hcCdzIHNlY29uZCBhcmd1bWVudC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0c1tpXSA9IG1hcEZuKHZhbHVlc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdC5hbGwocmVzdWx0cywgbGFiZWwpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRtYXAkJGRlZmF1bHQgPSBsaWIkcnN2cCRtYXAkJG1hcDtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG5vZGUkJFJlc3VsdCgpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJG5vZGUkJEVSUk9SID0gbmV3IGxpYiRyc3ZwJG5vZGUkJFJlc3VsdCgpO1xuICAgIHZhciBsaWIkcnN2cCRub2RlJCRHRVRfVEhFTl9FUlJPUiA9IG5ldyBsaWIkcnN2cCRub2RlJCRSZXN1bHQoKTtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG5vZGUkJGdldFRoZW4ob2JqKSB7XG4gICAgICB0cnkge1xuICAgICAgIHJldHVybiBvYmoudGhlbjtcbiAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgbGliJHJzdnAkbm9kZSQkRVJST1IudmFsdWU9IGVycm9yO1xuICAgICAgICByZXR1cm4gbGliJHJzdnAkbm9kZSQkRVJST1I7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRub2RlJCR0cnlBcHBseShmLCBzLCBhKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmLmFwcGx5KHMsIGEpO1xuICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICBsaWIkcnN2cCRub2RlJCRFUlJPUi52YWx1ZSA9IGVycm9yO1xuICAgICAgICByZXR1cm4gbGliJHJzdnAkbm9kZSQkRVJST1I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkbm9kZSQkbWFrZU9iamVjdChfLCBhcmd1bWVudE5hbWVzKSB7XG4gICAgICB2YXIgb2JqID0ge307XG4gICAgICB2YXIgbmFtZTtcbiAgICAgIHZhciBpO1xuICAgICAgdmFyIGxlbmd0aCA9IF8ubGVuZ3RoO1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBsZW5ndGg7IHgrKykge1xuICAgICAgICBhcmdzW3hdID0gX1t4XTtcbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgaSA8IGFyZ3VtZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmFtZSA9IGFyZ3VtZW50TmFtZXNbaV07XG4gICAgICAgIG9ialtuYW1lXSA9IGFyZ3NbaSArIDFdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG5vZGUkJGFycmF5UmVzdWx0KF8pIHtcbiAgICAgIHZhciBsZW5ndGggPSBfLmxlbmd0aDtcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGxlbmd0aCAtIDEpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyZ3NbaSAtIDFdID0gX1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkbm9kZSQkd3JhcFRoZW5hYmxlKHRoZW4sIHByb21pc2UpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRoZW46IGZ1bmN0aW9uKG9uRnVsRmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoZW4uY2FsbChwcm9taXNlLCBvbkZ1bEZpbGxtZW50LCBvblJlamVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkbm9kZSQkZGVub2RlaWZ5KG5vZGVGdW5jLCBvcHRpb25zKSB7XG4gICAgICB2YXIgZm4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgbCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGwgKyAxKTtcbiAgICAgICAgdmFyIGFyZztcbiAgICAgICAgdmFyIHByb21pc2VJbnB1dCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgYXJnID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgICAgaWYgKCFwcm9taXNlSW5wdXQpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGNsZWFuIHRoaXMgdXBcbiAgICAgICAgICAgIHByb21pc2VJbnB1dCA9IGxpYiRyc3ZwJG5vZGUkJG5lZWRzUHJvbWlzZUlucHV0KGFyZyk7XG4gICAgICAgICAgICBpZiAocHJvbWlzZUlucHV0ID09PSBsaWIkcnN2cCRub2RlJCRHRVRfVEhFTl9FUlJPUikge1xuICAgICAgICAgICAgICB2YXIgcCA9IG5ldyBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0KGxpYiRyc3ZwJCRpbnRlcm5hbCQkbm9vcCk7XG4gICAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHAsIGxpYiRyc3ZwJG5vZGUkJEdFVF9USEVOX0VSUk9SLnZhbHVlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb21pc2VJbnB1dCAmJiBwcm9taXNlSW5wdXQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgYXJnID0gbGliJHJzdnAkbm9kZSQkd3JhcFRoZW5hYmxlKHByb21pc2VJbnB1dCwgYXJnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQobGliJHJzdnAkJGludGVybmFsJCRub29wKTtcblxuICAgICAgICBhcmdzW2xdID0gZnVuY3Rpb24oZXJyLCB2YWwpIHtcbiAgICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZXJyKTtcbiAgICAgICAgICBlbHNlIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsKTtcbiAgICAgICAgICBlbHNlIGlmIChvcHRpb25zID09PSB0cnVlKVxuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIGxpYiRyc3ZwJG5vZGUkJGFycmF5UmVzdWx0KGFyZ3VtZW50cykpO1xuICAgICAgICAgIGVsc2UgaWYgKGxpYiRyc3ZwJHV0aWxzJCRpc0FycmF5KG9wdGlvbnMpKVxuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIGxpYiRyc3ZwJG5vZGUkJG1ha2VPYmplY3QoYXJndW1lbnRzLCBvcHRpb25zKSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHByb21pc2VJbnB1dCkge1xuICAgICAgICAgIHJldHVybiBsaWIkcnN2cCRub2RlJCRoYW5kbGVQcm9taXNlSW5wdXQocHJvbWlzZSwgYXJncywgbm9kZUZ1bmMsIHNlbGYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBsaWIkcnN2cCRub2RlJCRoYW5kbGVWYWx1ZUlucHV0KHByb21pc2UsIGFyZ3MsIG5vZGVGdW5jLCBzZWxmKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZm4uX19wcm90b19fID0gbm9kZUZ1bmM7XG5cbiAgICAgIHJldHVybiBmbjtcbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkbm9kZSQkZGVmYXVsdCA9IGxpYiRyc3ZwJG5vZGUkJGRlbm9kZWlmeTtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG5vZGUkJGhhbmRsZVZhbHVlSW5wdXQocHJvbWlzZSwgYXJncywgbm9kZUZ1bmMsIHNlbGYpIHtcbiAgICAgIHZhciByZXN1bHQgPSBsaWIkcnN2cCRub2RlJCR0cnlBcHBseShub2RlRnVuYywgc2VsZiwgYXJncyk7XG4gICAgICBpZiAocmVzdWx0ID09PSBsaWIkcnN2cCRub2RlJCRFUlJPUikge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZXN1bHQudmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkbm9kZSQkaGFuZGxlUHJvbWlzZUlucHV0KHByb21pc2UsIGFyZ3MsIG5vZGVGdW5jLCBzZWxmKXtcbiAgICAgIHJldHVybiBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0LmFsbChhcmdzKS50aGVuKGZ1bmN0aW9uKGFyZ3Mpe1xuICAgICAgICB2YXIgcmVzdWx0ID0gbGliJHJzdnAkbm9kZSQkdHJ5QXBwbHkobm9kZUZ1bmMsIHNlbGYsIGFyZ3MpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBsaWIkcnN2cCRub2RlJCRFUlJPUikge1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlc3VsdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRub2RlJCRuZWVkc1Byb21pc2VJbnB1dChhcmcpIHtcbiAgICAgIGlmIChhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKGFyZy5jb25zdHJ1Y3RvciA9PT0gbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBsaWIkcnN2cCRub2RlJCRnZXRUaGVuKGFyZyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcmFjZSQkcmFjZShhcnJheSwgbGFiZWwpIHtcbiAgICAgIHJldHVybiBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0LnJhY2UoYXJyYXksIGxhYmVsKTtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJHJhY2UkJGRlZmF1bHQgPSBsaWIkcnN2cCRyYWNlJCRyYWNlO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHJlamVjdCQkcmVqZWN0KHJlYXNvbiwgbGFiZWwpIHtcbiAgICAgIHJldHVybiBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0LnJlamVjdChyZWFzb24sIGxhYmVsKTtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJHJlamVjdCQkZGVmYXVsdCA9IGxpYiRyc3ZwJHJlamVjdCQkcmVqZWN0O1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHJlc29sdmUkJHJlc29sdmUodmFsdWUsIGxhYmVsKSB7XG4gICAgICByZXR1cm4gbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdC5yZXNvbHZlKHZhbHVlLCBsYWJlbCk7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRyZXNvbHZlJCRkZWZhdWx0ID0gbGliJHJzdnAkcmVzb2x2ZSQkcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRyZXRocm93JCRyZXRocm93KHJlYXNvbikge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdGhyb3cgcmVhc29uO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyByZWFzb247XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRyZXRocm93JCRkZWZhdWx0ID0gbGliJHJzdnAkcmV0aHJvdyQkcmV0aHJvdztcblxuICAgIC8vIGRlZmF1bHQgYXN5bmMgaXMgYXNhcDtcbiAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZy5hc3luYyA9IGxpYiRyc3ZwJGFzYXAkJGRlZmF1bHQ7XG4gICAgdmFyIGxpYiRyc3ZwJCRjYXN0ID0gbGliJHJzdnAkcmVzb2x2ZSQkZGVmYXVsdDtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkYXN5bmMoY2FsbGJhY2ssIGFyZykge1xuICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWcuYXN5bmMoY2FsbGJhY2ssIGFyZyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJG9uKCkge1xuICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWdbJ29uJ10uYXBwbHkobGliJHJzdnAkY29uZmlnJCRjb25maWcsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJG9mZigpIHtcbiAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnWydvZmYnXS5hcHBseShsaWIkcnN2cCRjb25maWckJGNvbmZpZywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgaW5zdHJ1bWVudGF0aW9uIHRocm91Z2ggYHdpbmRvdy5fX1BST01JU0VfSU5UUlVNRU5UQVRJT05fX2BcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvd1snX19QUk9NSVNFX0lOU1RSVU1FTlRBVElPTl9fJ10gPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgbGliJHJzdnAkJGNhbGxiYWNrcyA9IHdpbmRvd1snX19QUk9NSVNFX0lOU1RSVU1FTlRBVElPTl9fJ107XG4gICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZ3VyZSgnaW5zdHJ1bWVudCcsIHRydWUpO1xuICAgICAgZm9yICh2YXIgbGliJHJzdnAkJGV2ZW50TmFtZSBpbiBsaWIkcnN2cCQkY2FsbGJhY2tzKSB7XG4gICAgICAgIGlmIChsaWIkcnN2cCQkY2FsbGJhY2tzLmhhc093blByb3BlcnR5KGxpYiRyc3ZwJCRldmVudE5hbWUpKSB7XG4gICAgICAgICAgbGliJHJzdnAkJG9uKGxpYiRyc3ZwJCRldmVudE5hbWUsIGxpYiRyc3ZwJCRjYWxsYmFja3NbbGliJHJzdnAkJGV2ZW50TmFtZV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJHVtZCQkUlNWUCA9IHtcbiAgICAgICdyYWNlJzogbGliJHJzdnAkcmFjZSQkZGVmYXVsdCxcbiAgICAgICdQcm9taXNlJzogbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdCxcbiAgICAgICdhbGxTZXR0bGVkJzogbGliJHJzdnAkYWxsJHNldHRsZWQkJGRlZmF1bHQsXG4gICAgICAnaGFzaCc6IGxpYiRyc3ZwJGhhc2gkJGRlZmF1bHQsXG4gICAgICAnaGFzaFNldHRsZWQnOiBsaWIkcnN2cCRoYXNoJHNldHRsZWQkJGRlZmF1bHQsXG4gICAgICAnZGVub2RlaWZ5JzogbGliJHJzdnAkbm9kZSQkZGVmYXVsdCxcbiAgICAgICdvbic6IGxpYiRyc3ZwJCRvbixcbiAgICAgICdvZmYnOiBsaWIkcnN2cCQkb2ZmLFxuICAgICAgJ21hcCc6IGxpYiRyc3ZwJG1hcCQkZGVmYXVsdCxcbiAgICAgICdmaWx0ZXInOiBsaWIkcnN2cCRmaWx0ZXIkJGRlZmF1bHQsXG4gICAgICAncmVzb2x2ZSc6IGxpYiRyc3ZwJHJlc29sdmUkJGRlZmF1bHQsXG4gICAgICAncmVqZWN0JzogbGliJHJzdnAkcmVqZWN0JCRkZWZhdWx0LFxuICAgICAgJ2FsbCc6IGxpYiRyc3ZwJGFsbCQkZGVmYXVsdCxcbiAgICAgICdyZXRocm93JzogbGliJHJzdnAkcmV0aHJvdyQkZGVmYXVsdCxcbiAgICAgICdkZWZlcic6IGxpYiRyc3ZwJGRlZmVyJCRkZWZhdWx0LFxuICAgICAgJ0V2ZW50VGFyZ2V0JzogbGliJHJzdnAkZXZlbnRzJCRkZWZhdWx0LFxuICAgICAgJ2NvbmZpZ3VyZSc6IGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlndXJlLFxuICAgICAgJ2FzeW5jJzogbGliJHJzdnAkJGFzeW5jXG4gICAgfTtcblxuICAgIC8qIGdsb2JhbCBkZWZpbmU6dHJ1ZSBtb2R1bGU6dHJ1ZSB3aW5kb3c6IHRydWUgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmVbJ2FtZCddKSB7XG4gICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBsaWIkcnN2cCR1bWQkJFJTVlA7IH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlWydleHBvcnRzJ10pIHtcbiAgICAgIG1vZHVsZVsnZXhwb3J0cyddID0gbGliJHJzdnAkdW1kJCRSU1ZQO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzWydSU1ZQJ10gPSBsaWIkcnN2cCR1bWQkJFJTVlA7XG4gICAgfVxufSkuY2FsbCh0aGlzKTtcblxuXG59KShyZXF1aXJlKFwiX19icm93c2VyaWZ5X3Byb2Nlc3NcIikpIiwidmFyIGJlaGF2aW91cnMgPSB7XG4gICAgJ3dhbGtlcic6ICByZXF1aXJlKCcuL3dhbGtlcicpXG59O1xuXG5cbmZ1bmN0aW9uIENoYXJhY3RlcihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuaW5pdChkZXNjcmlwdGlvbik7ICAgIFxufVxuXG5DaGFyYWN0ZXIucHJvdG90eXBlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnaWRsZSc7XG4gICAgICAgIHRoaXMucGhhc2UgPSAwO1xuICAgICAgICB0aGlzLmR4ID0gMDtcbiAgICAgICAgdGhpcy5keSA9IDA7XG5cbiAgICAgICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgZGVzY3JpcHRpb25bcHJvcGVydHldKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmJlaGF2aW91cikge1xuICAgICAgICAgICAgdGhpcy5iZWhhdmlvdXIgPSBuZXcgYmVoYXZpb3Vyc1t0aGlzLmJlaGF2aW91ci50eXBlXSh0aGlzLmJlaGF2aW91ciwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0UHJvcGVydHk6IGZ1bmN0aW9uIHNldFByb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmKHRoaXNbbmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBpZihuYW1lID09PSAnYWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMucGhhc2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcjtcbiIsImZ1bmN0aW9uIFdhbGtlcihkZXNjcmlwdGlvbiwgY2hhcmFjdGVyKSB7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXI7XG4gICAgdGhpcy53YXlQb2ludHMgPSBkZXNjcmlwdGlvbi53YXlQb2ludHM7XG4gICAgdGhpcy5jdXJyZW50V2F5cG9pbnQgPSBudWxsO1xufVxuXG5XYWxrZXIucHJvdG90eXBlID0ge1xuICAgIGluY1dheVBvaW50OiBmdW5jdGlvbiBpbmNXYXlQb2ludCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50V2F5cG9pbnQgPSAodGhpcy5jdXJyZW50V2F5cG9pbnQgKyAxKSAlIHRoaXMud2F5UG9pbnRzLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICAgIGlmKHRoaXMuY3VycmVudFdheXBvaW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci54ID0gdGhpcy53YXlQb2ludHNbMF0ueDtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnkgPSB0aGlzLndheVBvaW50c1swXS55O1xuICAgICAgICAgICAgdGhpcy5pbmNXYXlQb2ludCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjdXJyZW50V2F5cG9pbnQgPSB0aGlzLndheVBvaW50c1t0aGlzLmN1cnJlbnRXYXlwb2ludF07XG4gICAgICAgIHZhciB3YWxrVmVjdG9yID0ge1xuICAgICAgICAgICAgeDogY3VycmVudFdheXBvaW50LnggLSB0aGlzLmNoYXJhY3Rlci54LFxuICAgICAgICAgICAgeTogY3VycmVudFdheXBvaW50LnkgLSB0aGlzLmNoYXJhY3Rlci55XG4gICAgICAgIH07XG4gICAgICAgIHZhciBkaXN0YW5jZUZyb21OZXh0V2F5cG9pbnQgPSBNYXRoLnNxcnQoKHdhbGtWZWN0b3IueCkgKiAod2Fsa1ZlY3Rvci54KSArICh3YWxrVmVjdG9yLnkpICogKHdhbGtWZWN0b3IueSkpO1xuICAgICAgICBpZihkaXN0YW5jZUZyb21OZXh0V2F5cG9pbnQgPCAxMCkge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIueCA9IHRoaXMud2F5UG9pbnRzW3RoaXMuY3VycmVudFdheXBvaW50XS54O1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIueSA9IHRoaXMud2F5UG9pbnRzW3RoaXMuY3VycmVudFdheXBvaW50XS55O1xuICAgICAgICAgICAgdGhpcy5pbmNXYXlQb2ludCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdhbGtWZWN0b3IueCA9IHdhbGtWZWN0b3IueCAvIGRpc3RhbmNlRnJvbU5leHRXYXlwb2ludDtcbiAgICAgICAgd2Fsa1ZlY3Rvci55ID0gd2Fsa1ZlY3Rvci55IC8gZGlzdGFuY2VGcm9tTmV4dFdheXBvaW50O1xuICAgICAgICB0aGlzLmNoYXJhY3Rlci5keCA9IHdhbGtWZWN0b3IueCAqIDI7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyLmR5ID0gd2Fsa1ZlY3Rvci55ICogMjtcbiAgICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gV2Fsa2VyO1xuIl19
;