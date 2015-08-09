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

},{"./definition.json":1,"./game":3,"utils":4}],5:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{"./keys":5,"./character":12,"./gameplay/dialogue":6,"./gameplay/wander":7,"./gameplay/press-any-key":8,"./gameplay/default":9,"./renderers/point-n-click":11,"./renderers/title":10,"rsvp":13,"utils":4}],12:[function(require,module,exports){
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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2RlZmluaXRpb24uanNvbiIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2luZGV4LmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9zcmMva2V5cy5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2dhbWVwbGF5L2RpYWxvZ3VlLmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9zcmMvZ2FtZXBsYXkvd2FuZGVyLmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9zcmMvZ2FtZXBsYXkvcHJlc3MtYW55LWtleS5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2dhbWVwbGF5L2RlZmF1bHQuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL3NyYy9yZW5kZXJlcnMvdGl0bGUuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL3NyYy9yZW5kZXJlcnMvcG9pbnQtbi1jbGljay5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvbm9kZV9tb2R1bGVzL3V0aWxzL3NyYy91dGlscy5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2dhbWUuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL3NyYy9jaGFyYWN0ZXIuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL25vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5Mi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL25vZGVfbW9kdWxlcy9yc3ZwL2Rpc3QvcnN2cC5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL3dhbGtlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdmRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeG9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwicGhhc2VzXCI6IHtcbiAgICAgICAgXCJmaXJzdERpYWxvZ3VlXCI6IHtcbiAgICAgICAgICAgIFwiZ2FtZXBsYXlUeXBlXCI6IFwiRGlhbG9ndWVcIixcbiAgICAgICAgICAgIFwiYmFzZWRPblwiOiBcImludHJvXCIsXG4gICAgICAgICAgICBcIm5vSW5oZXJpdFwiOiB7XCJnYW1lcGxheVR5cGVcIjogdHJ1ZX0sXG4gICAgICAgICAgICBcImRlZmF1bHRQcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1lXCI6IHtcInhcIjogMjAyLCBcInlcIjogMTU1LCBcImNvbG9yXCI6IFwiY3lhblwifSxcbiAgICAgICAgICAgICAgICBcImhlclwiOiB7XCJ4XCI6IDEwNSwgXCJ5XCI6IDE0NSwgXCJjb2xvclwiOiBcIm9yYW5nZVwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGluZXNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ3aG9cIjogXCJtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJIZXkgISBXaGF0J3MgdXAgP1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwid2hvXCI6IFwiaGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkhpLi4uXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ3aG9cIjogXCJtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJXaGF0J3Mgd3JvbmcgPyB5b3Ugc2VlbSBzbyBkb3duLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwid2hvXCI6IFwiaGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkl0J3Mgb2ssIEknbSBqdXN0IGluIHRoZSBtb29kIGZvciBzdGFyaW5nIGF0IHRoZSBzZWEgZm9yIGEgd2hpbGUuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ3aG9cIjogXCJtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJXaGF0IGNhbiBJIGRvIHRvIGNoZWVyIHlvdSB1cCA/XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ3aG9cIjogXCJoZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQWxsIEkgd2lzaCBmb3IgcmlnaHQgbm93IGlzIGEgbGl0dGxlIHBpZWNlIG9mIGNob2NvbGF0ZS5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIndob1wiOiBcIm1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlJlYWxseSA/IEFoIGFoLCBqdXN0IHlvdSB3YWl0ICFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcblxuICAgICAgICBcInNlY29uZERpYWxvZ3VlXCI6IHtcbiAgICAgICAgICAgIFwiYmFzZWRPblwiOiBcImZpcnN0RGlhbG9ndWVcIixcbiAgICAgICAgICAgIFwibm9Jbmhlcml0XCI6IHtcImxpbmVzXCI6IHRydWV9LFxuICAgICAgICAgICAgXCJyZXN0YXJ0XCI6IHRydWUsXG4gICAgICAgICAgICBcImxpbmVzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwid2hvXCI6IFwibWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiSGV5LCBJJ20gYWxtb3N0IGRvbmUgIVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwid2hvXCI6IFwiaGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImdyZWF0XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ3aG9cIjogXCJtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJXZWxsIEknZCBiZXR0ZXIgZ2V0IGdvaW5nIHRoZW5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgIH0sXG5cbiAgICAgICAgXCJpbnRyb1wiOiB7XG4gICAgICAgICAgICBcImdhbWVwbGF5VHlwZVwiOiBcIldhbmRlclwiLFxuICAgICAgICAgICAgXCJyZW5kZXJpbmdcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlBvaW50TkNsaWNrXCIsXG4gICAgICAgICAgICAgICAgXCJwbGFuZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IFwic2t5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInpcIjogMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IFwiaG91c2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInpcIjogMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IFwiZm9yZWdyb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ6XCI6IDEuNVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVuZGVySGVpZ2h0XCI6IDQ1MCxcbiAgICAgICAgICAgIFwibWFwV2lkdGhcIjogMjQwMCxcbiAgICAgICAgICAgIFwibWluWFwiOiAyMDAsXG4gICAgICAgICAgICBcIm1heFhcIjogMjM1MCxcbiAgICAgICAgICAgIFwibWluWVwiOiAxNTAsXG4gICAgICAgICAgICBcIm1heFlcIjogMjgwLFxuICAgICAgICAgICAgXCJ3YWxrU3VyZmFjZVwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMTUwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMjgwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMS41XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAyMzUwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMjgwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMS41XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAyMzUwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMTUwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNoYXJhY3RlcnNcIjoge1xuICAgICAgICAgICAgICAgIFwiaGVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcHJpdGVzXCI6IFwiaGVyRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogOTAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDEyNSxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDE1NVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3ByaXRlc1wiOiBcIm1lRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogOTAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDIwMyxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDE4NVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNpbmtzXCI6IHtcbiAgICAgICAgICAgICAgICBcInRhbGtUb0hlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAxODIsXG4gICAgICAgICAgICAgICAgICAgIFwieVwiOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMjAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEzMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImdvaW5nRm9yQ2hvY29cIjoge1xuICAgICAgICAgICAgXCJiYXNlZE9uXCI6IFwiaW50cm9cIixcbiAgICAgICAgICAgIFwic2lua3NcIjoge1xuICAgICAgICAgICAgICAgIFwiZ2V0QXRKb2VzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDIxNSxcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogNTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJhdEpvZXNHcmVldGluZ1wiOiB7XG4gICAgICAgICAgICBcImdhbWVwbGF5VHlwZVwiOiBcIkRpYWxvZ3VlXCIsXG4gICAgICAgICAgICBcImJhc2VkT25cIjogXCJhdEpvZXNcIixcbiAgICAgICAgICAgIFwiZGVmYXVsdFByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwibWVcIjoge1wieFwiOiAyMDIsIFwieVwiOiAxNTUsIFwiY29sb3JcIjogXCJjeWFuXCJ9LFxuICAgICAgICAgICAgICAgIFwiam9lXCI6IHtcImNvbG9yXCI6IFwib3JhbmdlXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsaW5lc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIndob1wiOiBcImpvZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJIZWxsbyBzb25cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcblxuICAgICAgICBcImF0Sm9lc1wiOiB7XG4gICAgICAgICAgICBcImdhbWVwbGF5VHlwZVwiOiBcIldhbmRlclwiLFxuICAgICAgICAgICAgXCJyZW5kZXJIZWlnaHRcIjogNDUwLFxuICAgICAgICAgICAgXCJtYXBXaWR0aFwiOiAyNDAwLFxuICAgICAgICAgICAgXCJtaW5YXCI6IDIwMCxcbiAgICAgICAgICAgIFwibWF4WFwiOiAyMzUwLFxuICAgICAgICAgICAgXCJtaW5ZXCI6IDE1MCxcbiAgICAgICAgICAgIFwibWF4WVwiOiAyODAsXG4gICAgICAgICAgICBcInJlbmRlcmluZ1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiUG9pbnROQ2xpY2tcIixcbiAgICAgICAgICAgICAgICBcInBsYW5lc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJza3lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwielwiOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJmb3JlZ3JvdW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInpcIjogMS41XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjaGFyYWN0ZXJzXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcHJpdGVzXCI6IFwibWVEYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTUwLFxuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjAzLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMTg1XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImpvZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3ByaXRlc1wiOiBcIm1lRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogOTAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDIwMyxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDg1ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3YWxrU3VyZmFjZVwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMTUwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMjgwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMS41XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAyMzUwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMjgwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMS41XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAyMzUwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMTUwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInNpbmtzXCI6IHtcbiAgICAgICAgICAgICAgICBcImV4aXRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMTgyLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMzUwLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDEyMCxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTMwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgICAgXCJnYW1lcGxheVR5cGVcIjogXCJQcmVzc0FueUtleVwiLFxuICAgICAgICAgICAgXCJyZW5kZXJpbmdcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiU2hlIGxpa2VzIGNob2NvbGF0ZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0aW1lb3V0XCI6IDIwMDBcbiAgICAgICAgfSxcblxuICAgICAgICBcImZpblwiOiB7XG4gICAgICAgICAgICBcImdhbWVwbGF5VHlwZVwiOiBcIlByZXNzQW55S2V5XCIsXG4gICAgICAgICAgICBcInJlbmRlcmluZ1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJGaW5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidGltZW91dFwiOiAyMDAwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicGxhblwiOiB7XG4gICAgICAgIFwidGl0bGVcIjoge1wia2V5UHJlc3NlZFwiOiBcImZpcnN0RGlhbG9ndWVcIn0sXG4gICAgICAgIFwiaW50cm9cIjoge1widGFsa1RvSGVyXCI6IFwiZmlyc3REaWFsb2d1ZVwifSxcbiAgICAgICAgXCJmaXJzdERpYWxvZ3VlXCI6IHtcImVuZFwiOiBcImdvaW5nRm9yQ2hvY29cIn0sXG4gICAgICAgIFwiZ29pbmdGb3JDaG9jb1wiOiB7XCJ0YWxrVG9IZXJcIjogXCJzZWNvbmREaWFsb2d1ZVwiLCBcImdldEF0Sm9lc1wiOiBcImF0Sm9lc0dyZWV0aW5nXCJ9LFxuICAgICAgICBcInNlY29uZERpYWxvZ3VlXCI6IHtcImVuZFwiOiBcImdvaW5nRm9yQ2hvY29cIn0sXG4gICAgICAgIFwiYXRKb2VzR3JlZXRpbmdcIjoge1wiZW5kXCI6IFwiYXRKb2VzXCJ9LFxuICAgICAgICBcImF0Sm9lc1wiOiB7XCJleGl0XCI6IFwib3V0RnJvbUpvZXNcIn0sXG4gICAgICAgIFwib3V0RnJvbUpvZXNcIjoge30sXG4gICAgICAgIFwiZmluXCI6IHtcImtleVByZXNzZWRcIjogXCJhdEpvZXNcIn1cbiAgICB9LFxuICAgIFwic3ByaXRlc1wiOiB7XG4gICAgICAgIFwibWVEYXlcIjoge1xuICAgICAgICAgICAgXCJpZGxlXCI6IFwibWVTcHJpdGVJZGxlXCIsXG4gICAgICAgICAgICBcInRhbGtpbmdcIjogXCJtZVNwcml0ZUlkbGVcIixcbiAgICAgICAgICAgIFwid2Fsa0xlZnRcIjogXCJtZVNwcml0ZVwiLFxuICAgICAgICAgICAgXCJydW5MZWZ0XCI6IFwibWVTcHJpdGVcIixcbiAgICAgICAgICAgIFwid2Fsa1JpZ2h0XCI6IFwibWVTcHJpdGVSaWdodFwiLFxuICAgICAgICAgICAgXCJydW5SaWdodFwiOiBcIm1lU3ByaXRlUmlnaHRcIixcbiAgICAgICAgICAgIFwid2Fsa1VwXCI6IFwibWVTcHJpdGVJZGxlXCIsXG4gICAgICAgICAgICBcInJ1blVwXCI6IFwibWVTcHJpdGVJZGxlXCIsXG4gICAgICAgICAgICBcIndhbGtEb3duXCI6IFwibWVTcHJpdGVJZGxlXCIsXG4gICAgICAgICAgICBcInJ1bkRvd25cIjogXCJtZVNwcml0ZUlkbGVcIlxuICAgICAgICB9LFxuICAgICAgICBcImhlckRheVwiOiB7XG4gICAgICAgICAgICBcImlkbGVcIjogXCJoZXJTcHJpdGVcIixcbiAgICAgICAgICAgIFwidGFsa2luZ1wiOiBcImhlclNwcml0ZVwiLFxuICAgICAgICAgICAgXCJ3YWxrTGVmdFwiOiBcImhlclNwcml0ZVwiLFxuICAgICAgICAgICAgXCJ3YWxrUmlnaHRcIjogXCJoZXJTcHJpdGVcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInBhdGhzXCI6IHtcbiAgICAgICAgXCJza3lcIjpcbiAgICAgICAgICAgIFwiYXJ0L3NreS5wbmdcIixcbiAgICAgICAgXCJmb3JlZ3JvdW5kXCI6XG4gICAgICAgICAgICBcImFydC9mb3JlZ3JvdW5kLnBuZ1wiLFxuICAgICAgICBcImhvdXNlc1wiOlxuICAgICAgICAgICAgXCJhcnQvaG91c2VzLnBuZ1wiLFxuICAgICAgICBcImhlclNwcml0ZVwiOlxuICAgICAgICAgICAgXCJhcnQvaGVyX3Nwcml0ZS5wbmdcIixcbiAgICAgICAgXCJtZVNwcml0ZVwiOlxuICAgICAgICAgICAgXCJhcnQvbWVfc3ByaXRlLnBuZ1wiLFxuICAgICAgICBcIm1lU3ByaXRlUmlnaHRcIjpcbiAgICAgICAgICAgIFwiYXJ0L21lX3Nwcml0ZV9yaWdodC5wbmdcIixcbiAgICAgICAgXCJtZVNwcml0ZUlkbGVcIjpcbiAgICAgICAgICAgIFwiYXJ0L21lX3Nwcml0ZV9pZGxlLnBuZ1wiXG4gICAgfSxcbiAgICBcImVudHJ5XCI6IFwidGl0bGVcIlxufVxuIiwi77u/dmFyIFV0aWxzID0gcmVxdWlyZSgndXRpbHMnKTtcclxudmFyIEdhbWVFbmdpbmUgPSByZXF1aXJlKCcuL2dhbWUnKTtcclxudmFyIGdhbWVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi9kZWZpbml0aW9uLmpzb24nKTtcclxuXHJcbi8vIHZhciBvdmVycmlkZSA9IHJlcXVpcmUoJy4vb3ZlcnJpZGUtZm9yLWRlYnVnLmpzb24nKTsgZ2FtZURlZmluaXRpb24gPSBVdGlscy5tZXJnZShnYW1lRGVmaW5pdGlvbiwgb3ZlcnJpZGUpO1xyXG5cclxudmFyIHRoZUdhbWUgPSBuZXcgR2FtZUVuZ2luZShcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpLFxyXG4gICAgZ2FtZURlZmluaXRpb24gICAgXHJcbik7XHJcblxyXG5cclxudGhlR2FtZS5zdGFydCgpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAzNzogZmFsc2UsXG4gICAgMzg6IGZhbHNlLFxuICAgIDM5OiBmYWxzZSxcbiAgICA0MDogZmFsc2Vcbn07XG4iLCJmdW5jdGlvbiBEaWFsb2d1ZShob3N0KSB7XG4gICAgdGhpcy5jdXJyZW50TGluZSA9IDA7XG59XG5cbkRpYWxvZ3VlLnByb3RvdHlwZSA9IHtcbiAgICBldmVudEhhbmRsZXJzOiB7XG4gICAgICAgIGtleXVwOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9OZXh0TGluZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdvVG9OZXh0TGluZTogZnVuY3Rpb24gZ29Ub05leHRMaW5lKCkge1xuICAgICAgICBpZih0aGlzLmN1cnJlbnRMaW5lID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmdvVG9MaW5lKDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50TGluZSArIDEgPCB0aGlzLmxpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ29Ub0xpbmUodGhpcy5jdXJyZW50TGluZSArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LmdvdG9TaW5rKCdlbmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnb1RvTGluZTogZnVuY3Rpb24gZ29Ub0xpbmUobGluZU51bWJlcikge1xuICAgICAgICB0aGlzLmN1cnJlbnRMaW5lID0gbGluZU51bWJlcjtcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zYXZlQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuc2F2ZUNhbnZhcy53aWR0aCA9IHRoaXMuaG9zdC5nYW1lQ2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLnNhdmVDYW52YXMuaGVpZ2h0ID0gdGhpcy5ob3N0LmdhbWVDYW52YXMuaGVpZ2h0O1xuICAgICAgICB2YXIgY3R4ID0gdGhpcy5zYXZlQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZUNhbnZhcyxcbiAgICAgICAgICAgIDAsIDAsIHRoaXMuaG9zdC5nYW1lQ2FudmFzLndpZHRoLCB0aGlzLmhvc3QuZ2FtZUNhbnZhcy5oZWlnaHQsXG4gICAgICAgICAgICAwLCAwLCB0aGlzLmhvc3QuZ2FtZUNhbnZhcy53aWR0aCwgdGhpcy5ob3N0LmdhbWVDYW52YXMuaGVpZ2h0XG4gICAgICAgICAgICApO1xuICAgICAgICBpZih0aGlzLnJlc3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExpbmUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGludm9sdmVkQ2hhcmFjdGVycyA9IHRoaXMubGluZXMucmVkdWNlKGZ1bmN0aW9uKGNoYXJhY3RlcnNTb0ZhciwgbGluZSkge1xuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnNTb0ZhcltsaW5lLndob10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGFyYWN0ZXJzU29GYXI7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICB7fVxuICAgICAgICApO1xuICAgICAgICBPYmplY3Qua2V5cyhpbnZvbHZlZENoYXJhY3RlcnMpLmZvckVhY2goZnVuY3Rpb24oY2hhcmFjdGVyTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV0uYWN0aW9uID0gJ3RhbGtpbmcnO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcblxuICAgIH0sXG5cbiAgICBkcmF3OiBmdW5jdGlvbiBkcmF3KCkge1xuICAgIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBEaWFsb2d1ZTtcbiIsImZ1bmN0aW9uIFdhbmRlcihob3N0KSB7XG59XG5cbldhbmRlci5wcm90b3R5cGUgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVNb3ZlbWVudCh0aW1lKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIGlzSW5TaW5rOiBmdW5jdGlvbiBpc0luU2luayhjaGFyYWN0ZXIsIHNpbmspIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIChjaGFyYWN0ZXIueCArIGNoYXJhY3Rlci53aWR0aCkgPj0gc2luay54ICYmXG4gICAgICAgICAgICBjaGFyYWN0ZXIueCA8PSAoc2luay54ICsgc2luay53aWR0aCkgJiZcbiAgICAgICAgICAgIChjaGFyYWN0ZXIueSArIGNoYXJhY3Rlci5oZWlnaHQpID49IHNpbmsueSAmJlxuICAgICAgICAgICAgY2hhcmFjdGVyLnkgPD0gKHNpbmsueSArIHNpbmsuaGVpZ2h0KVxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICB1cGRhdGVNb3ZlbWVudDogZnVuY3Rpb24gdXBkYXRlTW92ZW1lbnQodGltZSkge1xuICAgICAgICB2YXIgdW5pdCA9IDI7XG4gICAgICAgIHZhciBtZSA9IHRoaXMuaG9zdC5jaGFyYWN0ZXJzLm1lO1xuICAgICAgICBtZS5keCA9IDA7XG4gICAgICAgIG1lLmR5ID0gMDtcbiAgICAgICAgaWYodGhpcy5ob3N0LmtleXMuc2hpZnQpIHtcbiAgICAgICAgICAgIHVuaXQgKj0gMjtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmhvc3Qua2V5c1szN10gfHwgdGhpcy5ob3N0LmtleXNbJ1EnLmNoYXJDb2RlQXQoKV0gfHwgdGhpcy5ob3N0LmtleXNbJ0EnLmNoYXJDb2RlQXQoKV0pIHtcbiAgICAgICAgICAgIG1lLmR4IC09IHVuaXQ7fVxuICAgICAgICBpZih0aGlzLmhvc3Qua2V5c1szOV0gfHwgdGhpcy5ob3N0LmtleXNbJ0QnLmNoYXJDb2RlQXQoKV0pIHtcbiAgICAgICAgICAgIG1lLmR4ICs9IHVuaXQ7fVxuICAgICAgICBpZih0aGlzLmhvc3Qua2V5c1szOF0gfHwgdGhpcy5ob3N0LmtleXNbJ1onLmNoYXJDb2RlQXQoKV0gfHwgdGhpcy5ob3N0LmtleXNbJ1cnLmNoYXJDb2RlQXQoKV0pIHtcbiAgICAgICAgICAgIG1lLmR5IC09IHVuaXQgLyAyO31cbiAgICAgICAgaWYodGhpcy5ob3N0LmtleXNbNDBdIHx8IHRoaXMuaG9zdC5rZXlzWydTJy5jaGFyQ29kZUF0KCldKSB7XG4gICAgICAgICAgICBtZS5keSArPSB1bml0IC8gMjt9XG5cbiAgICAgICAgZm9yKHZhciBzaW5rTmFtZSBpbiB0aGlzLnNpbmtzKSB7XG4gICAgICAgICAgICB2YXIgc2luayA9IHRoaXMuc2lua3Nbc2lua05hbWVdO1xuICAgICAgICAgICAgdmFyIG5leHRDb29yZHMgPSB7eDogbWUueCArIG1lLmR4LCB5OiBtZS55ICsgbWUuZHksIHdpZHRoOiBtZS53aWR0aCwgaGVpZ2h0OiBtZS5oZWlnaHR9O1xuICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgIXRoaXMuaXNJblNpbmsobWUsIHNpbmspICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc0luU2luayhuZXh0Q29vcmRzLCBzaW5rKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgbWUuYWN0aW9uID0gJ2lkbGUnO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5nb3RvU2luayhzaW5rTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5ob3N0LmNoYXJhY3RlcnMpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGNoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV07XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZihjaGFyYWN0ZXIuYmVoYXZpb3VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3Rlci5iZWhhdmlvdXIudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoY2hhcmFjdGVyLmR4ID4gMilcbiAgICAgICAgICAgICAgICAgICAgeyBjaGFyYWN0ZXIuc2V0UHJvcGVydHkoJ2FjdGlvbicsICdydW5SaWdodCcpO31cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNoYXJhY3Rlci5keCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHsgY2hhcmFjdGVyLnNldFByb3BlcnR5KCdhY3Rpb24nLCAnd2Fsa1JpZ2h0Jyk7fVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoY2hhcmFjdGVyLmR4IDwgLTIpXG4gICAgICAgICAgICAgICAgICAgIHsgY2hhcmFjdGVyLnNldFByb3BlcnR5KCdhY3Rpb24nLCAncnVuTGVmdCcpO31cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNoYXJhY3Rlci5keCA8IDApXG4gICAgICAgICAgICAgICAgICAgIHsgY2hhcmFjdGVyLnNldFByb3BlcnR5KCdhY3Rpb24nLCAnd2Fsa0xlZnQnKTt9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihjaGFyYWN0ZXIuZHkgPiAyKVxuICAgICAgICAgICAgICAgICAgICB7IGNoYXJhY3Rlci5zZXRQcm9wZXJ0eSgnYWN0aW9uJywgJ3J1bkRvd24nKTt9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihjaGFyYWN0ZXIuZHkgPiAwKVxuICAgICAgICAgICAgICAgICAgICB7IGNoYXJhY3Rlci5zZXRQcm9wZXJ0eSgnYWN0aW9uJywgJ3dhbGtEb3duJyk7fVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoY2hhcmFjdGVyLmR5IDwgLTIpXG4gICAgICAgICAgICAgICAgICAgIHsgY2hhcmFjdGVyLnNldFByb3BlcnR5KCdhY3Rpb24nLCAncnVuVXAnKTt9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihjaGFyYWN0ZXIuZHkgPCAwKVxuICAgICAgICAgICAgICAgICAgICB7IGNoYXJhY3Rlci5zZXRQcm9wZXJ0eSgnYWN0aW9uJywgJ3dhbGtVcCcpO31cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5ob3N0LmNoYXJhY3RlcnMubWUuc2V0UHJvcGVydHkoJ2FjdGlvbicsICdpZGxlJyk7IH1cbiAgICAgICAgICAgICAgICBpZihjaGFyYWN0ZXIueCArIGNoYXJhY3Rlci5keCA+IHRoaXMubWluWCAmJiBjaGFyYWN0ZXIueCArIGNoYXJhY3Rlci5keCA8IHRoaXMubWF4WCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIueCArPSBjaGFyYWN0ZXIuZHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGNoYXJhY3Rlci55ICsgY2hhcmFjdGVyLmR5ID4gdGhpcy5taW5ZICYmIGNoYXJhY3Rlci55ICsgY2hhcmFjdGVyLmR5IDwgdGhpcy5tYXhZKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3Rlci55ICs9IGNoYXJhY3Rlci5keTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBXYW5kZXI7XG4iLCJmdW5jdGlvbiBQcmVzc0FueUtleSgpIHtcbn1cblxuUHJlc3NBbnlLZXkucHJvdG90eXBlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYXJtZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHRpbWVvdXQgPSB0aGlzLmhvc3QucGhhc2VJbnN0YW5jZXNbdGhpcy5ob3N0LnBoYXNlTmFtZV0udGltZW91dDtcbiAgICAgICAgaWYodGltZW91dCkge1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LmdvdG9TaW5rKCdrZXlQcmVzc2VkJyk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uQ2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFuVXBBbmRHbygpO1xuICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrKTtcbiAgICB9LFxuXG4gICAgX2NsZWFuVXBBbmRHbzogZnVuY3Rpb24gX2NsZWFuVXAoKSB7XG4gICAgICAgIGlmKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrKTtcbiAgICAgICAgdGhpcy5ob3N0LmdvdG9TaW5rKCdrZXlQcmVzc2VkJyk7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24odGltZSkge1xuICAgICAgICBpZighdGhpcy5hcm1lZCkge1xuICAgICAgICAgICAgaWYoIU9iamVjdC5rZXlzKHRoaXMuaG9zdC5rZXlzKVxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3Qua2V5c1trZXldO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAuc29tZShmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJtZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMuaG9zdC5rZXlzKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmtleXNba2V5XTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5zb21lKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgdGhpcy5fY2xlYW5VcEFuZEdvKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFByZXNzQW55S2V5O1xuIiwiZnVuY3Rpb24gRGVmYXVsdEdhbWVwbGF5KCkge1xuICAgIFxufVxuXG5EZWZhdWx0R2FtZXBsYXkucHJvdG90eXBlID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZhdWx0R2FtZXBsYXk7XG4iLCJmdW5jdGlvbiByZW5kZXIodGltZSwgaG9zdCkge1xuICAgIHZhciBjdXJyZW50UGhhc2UgPSBob3N0LnBoYXNlSW5zdGFuY2VzW2hvc3QucGhhc2VOYW1lXTtcbiAgICB2YXIgY3R4ID0gaG9zdC5jdHg7XG4gICAgdmFyIHdpZHRoID0gY3R4LmNhbnZhcy53aWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gY3R4LmNhbnZhcy5oZWlnaHQ7XG4gICAgdmFyIHJlbmRlcmluZ0RhdGEgPSBob3N0LmdhbWVTdHJ1Y3R1cmUucGhhc2VzW2hvc3QucGhhc2VOYW1lXS5yZW5kZXJpbmc7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gcmVuZGVyaW5nRGF0YS5iYWNrZ3JvdW5kQ29sb3IgfHwgJ2JsYWNrJztcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgaWYocmVuZGVyaW5nRGF0YS5pbWFnZSkge1xuICAgICAgICB2YXIgaW1hZ2UgPSBob3N0LmltYWdlc1tyZW5kZXJpbmdEYXRhLmltYWdlXTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgfVxuXG4gICAgaWYocmVuZGVyaW5nRGF0YS50ZXh0KSB7XG4gICAgICAgIGN0eC5mb250ID0gJ25vcm1hbCA0NHB0IGhlbHZldGljYScgfHwgcmVuZGVyaW5nRGF0YS5mb250O1xuICAgICAgICB2YXIgbWV0cmljcyA9IGN0eC5tZWFzdXJlVGV4dChyZW5kZXJpbmdEYXRhLnRleHQpO1xuICAgICAgICB2YXIgeCA9IChjdHguY2FudmFzLndpZHRoIC0gbWV0cmljcy53aWR0aCkgLyAyO1xuICAgICAgICB2YXIgeSA9IChjdHguY2FudmFzLmhlaWdodCAvIDIpO1xuXG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHJlbmRlcmluZ0RhdGEuY29sb3IgfHwgJ3doaXRlJztcbiAgICAgICAgY3R4LmZpbGxUZXh0KHJlbmRlcmluZ0RhdGEudGV4dCwgeCwgeSk7XG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gcmVuZGVyO1xuIiwidmFyIGxhc3RGcmFtZVVwZGF0ZSA9IG51bGw7XG5cblxuZnVuY3Rpb24gZHJhd1BsYW5lcyhjdHgsIG1hcE9mZnNldCwgaW1hZ2VzLCBtYXBXaWR0aCwgcmVuZGVyQ29vcmRzLCBwbGFuZXMpIHtcbiAgICBwbGFuZXMuZm9yRWFjaChmdW5jdGlvbihwbGFuZSkge1xuICAgICAgICB2YXIgaW1hZ2UgPSBpbWFnZXNbcGxhbmUuaW1hZ2VdO1xuICAgICAgICBpZighcGxhbmUueikge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgcmVuZGVyQ29vcmRzLngsIHJlbmRlckNvb3Jkcy55LFxuICAgICAgICAgICAgICAgIHJlbmRlckNvb3Jkcy53aWR0aCwgaW1hZ2UuaGVpZ2h0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICAgICAgTWF0aC5taW4obWFwT2Zmc2V0LngsIG1hcFdpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpLCBtYXBPZmZzZXQueSxcbiAgICAgICAgICAgICAgICBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgaW1hZ2Uud2lkdGgpLCBpbWFnZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgcmVuZGVyQ29vcmRzLngsIHJlbmRlckNvb3Jkcy55LFxuICAgICAgICAgICAgICAgIE1hdGgubWluKHJlbmRlckNvb3Jkcy53aWR0aCwgaW1hZ2Uud2lkdGgpLCByZW5kZXJDb29yZHMuaGVpZ2h0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkcmF3Q2hhcmFjdGVycyhob3N0LCBjdXJyZW50TWFwT2Zmc2V0LCByZW5kZXJDb29yZHMpIHtcbiAgICB2YXIgY2hhcmFjdGVyTGlzdCA9IE9iamVjdC5rZXlzKGhvc3QuY2hhcmFjdGVycyk7XG4gICAgY2hhcmFjdGVyTGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGhvc3QuY2hhcmFjdGVyc1thXS55IC0gaG9zdC5jaGFyYWN0ZXJzW2JdLnk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICBmb3IodmFyIGkgPSAwIDsgaSA8IGNoYXJhY3Rlckxpc3QubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGFyYWN0ZXIgPSBob3N0LmNoYXJhY3RlcnNbY2hhcmFjdGVyTGlzdFtpXV07XG4gICAgICAgIGlmKGlzVmlzaWJsZShjaGFyYWN0ZXIsIGN1cnJlbnRNYXBPZmZzZXQpKSB7XG4gICAgICAgICAgICBkcmF3Q2hhcmFjdGVyKFxuICAgICAgICAgICAgICAgIGhvc3QuY3R4LFxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcixcbiAgICAgICAgICAgICAgICBjdXJyZW50TWFwT2Zmc2V0LFxuICAgICAgICAgICAgICAgIGhvc3QuaW1hZ2VzLFxuICAgICAgICAgICAgICAgIHJlbmRlckNvb3JkcyxcbiAgICAgICAgICAgICAgICBob3N0LmdhbWVTdHJ1Y3R1cmUuc3ByaXRlc1tjaGFyYWN0ZXIuc3ByaXRlc11cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmF3Q2hhcmFjdGVyKGN0eCwgY2hhcmFjdGVyLCBtYXBPZmZzZXQsIGltYWdlcywgcmVuZGVyQ29vcmRzLCBzcHJpdGVzKSB7XG4gICAgdmFyIGltYWdlID0gaW1hZ2VzW3Nwcml0ZXNbY2hhcmFjdGVyLmFjdGlvbl1dO1xuICAgIHZhciB4T2Zmc2V0SW5Tb3VyY2UgPSBjaGFyYWN0ZXIucGhhc2UgKiBjaGFyYWN0ZXIud2lkdGg7XG5cbiAgICB2YXIgc2NhbGUgPSAoKGNoYXJhY3Rlci55IC0gMTUwKSAvIDQgKyAxNTApIC8gMTUwO1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIGltYWdlLFxuICAgICAgICB4T2Zmc2V0SW5Tb3VyY2UsIDAsXG4gICAgICAgIGNoYXJhY3Rlci53aWR0aCxcbiAgICAgICAgY2hhcmFjdGVyLmhlaWdodCxcbiAgICAgICAgY2hhcmFjdGVyLnggLSBtYXBPZmZzZXQueCArIHJlbmRlckNvb3Jkcy54IC0gKGNoYXJhY3Rlci53aWR0aCAqIHNjYWxlIC0gY2hhcmFjdGVyLndpZHRoKSAvIDIsXG4gICAgICAgIGNoYXJhY3Rlci55IC0gbWFwT2Zmc2V0LnkgKyByZW5kZXJDb29yZHMueSxcbiAgICAgICAgY2hhcmFjdGVyLndpZHRoICogc2NhbGUsIGNoYXJhY3Rlci5oZWlnaHQgKiBzY2FsZVxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiBkcmF3RGlhbG9ndWUoY3R4LCBjdXJyZW50TGluZSwgZGVmYXVsdFByb3BlcnRpZXMsIHJlbmRlckNvb3JkcywgY2hhcmFjdGVyLCBtYXBPZmZzZXQpIHtcbiAgICBpZihjdXJyZW50TGluZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgY3R4LmZvbnQgPSAnbm9ybWFsIDE0cHQgaGVsdmV0aWNhJztcbiAgICB2YXIgbWV0cmljcyA9IGN0eC5tZWFzdXJlVGV4dChjdXJyZW50TGluZS50ZXh0KTtcbiAgICB2YXIgcG9zaXRpb24gPSBkZWZhdWx0UHJvcGVydGllc1tjdXJyZW50TGluZS53aG9dO1xuICAgIGlmKCFwb3NpdGlvbi54KSB7XG4gICAgICAgIHBvc2l0aW9uLnggPSBjaGFyYWN0ZXIueCAtIG1hcE9mZnNldC54IC0gbWV0cmljcy53aWR0aCAvIDIgKyBjaGFyYWN0ZXIud2lkdGggLyAyO1xuICAgIH1cbiAgICBpZighcG9zaXRpb24ueSkge1xuICAgICAgICBwb3NpdGlvbi55ID0gY2hhcmFjdGVyLnkgLSBtYXBPZmZzZXQueSAtIDQwO1xuICAgIH1cblxuICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIGlmKGRlZmF1bHRQcm9wZXJ0aWVzW2N1cnJlbnRMaW5lLndob10uY29sb3IpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGRlZmF1bHRQcm9wZXJ0aWVzW2N1cnJlbnRMaW5lLndob10uY29sb3I7XG4gICAgfVxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgY3R4LnN0cm9rZVJlY3QoXG4gICAgICAgIHBvc2l0aW9uLnggKyByZW5kZXJDb29yZHMueCxcbiAgICAgICAgcG9zaXRpb24ueSArIHJlbmRlckNvb3Jkcy55LFxuICAgICAgICBtZXRyaWNzLndpZHRoICsgMTAsIDMwXG4gICAgICAgICk7XG4gICAgY3R4Lmdsb2JhbEFscGhhID0gMC44NTtcbiAgICBjdHguZmlsbFJlY3QoXG4gICAgICAgIHBvc2l0aW9uLnggKyByZW5kZXJDb29yZHMueCxcbiAgICAgICAgcG9zaXRpb24ueSArIHJlbmRlckNvb3Jkcy55LFxuICAgICAgICBtZXRyaWNzLndpZHRoICsgMTAsXG4gICAgICAgIDMwXG4gICAgICAgICk7XG4gICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjdHguZmlsbFRleHQoXG4gICAgICAgIGN1cnJlbnRMaW5lLnRleHQsXG4gICAgICAgIHBvc2l0aW9uLnggKyA1ICsgcmVuZGVyQ29vcmRzLngsXG4gICAgICAgIHBvc2l0aW9uLnkgKyA1ICsgcmVuZGVyQ29vcmRzLnlcbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gZHJhd0RlYnVnKGN0eCwgcGhhc2UsIHJlbmRlckNvb3JkcywgY2hhcmFjdGVycywgbWFwT2Zmc2V0KSB7XG4gICAgdmFyIHNpbms7XG4gICAgdmFyIGNoYXJhY3RlcjtcbiAgICB2YXIgeDtcbiAgICB2YXIgeTtcbiAgICB2YXIgd2Fsa1N1cmZhY2UgPSBwaGFzZS53YWxrU3VyZmFjZTtcblxuICAgIGZvcih2YXIgc2lua05hbWUgaW4gcGhhc2Uuc2lua3MpIHtcbiAgICAgICAgc2luayA9IHBoYXNlLnNpbmtzW3NpbmtOYW1lXTtcbiAgICAgICAgeCA9IHNpbmsueCArIHJlbmRlckNvb3Jkcy54IC0gbWFwT2Zmc2V0Lng7XG4gICAgICAgIHkgPSBzaW5rLnkgKyByZW5kZXJDb29yZHMueSAtIG1hcE9mZnNldC55O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LCAwLCAwLCAwLjUpJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHksIHNpbmsud2lkdGgsIHNpbmsuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LCAyNTUsIDI1NSknO1xuICAgICAgICBjdHguZmlsbFRleHQoc2lua05hbWUsIHggKyAxLCB5ICsgMSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwgMjU1LCAyNTUpJztcbiAgICAgICAgY3R4LmZpbGxUZXh0KHNpbmtOYW1lLCB4IC0gMSwgeSAtIDEpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigwLCAwLCAwKSc7XG4gICAgICAgIGN0eC5maWxsVGV4dChzaW5rTmFtZSwgeCwgeSk7XG4gICAgfVxuXG4gICAgZm9yKHZhciBjaGFyYWN0ZXJOYW1lIGluIGNoYXJhY3RlcnMpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gY2hhcmFjdGVyc1tjaGFyYWN0ZXJOYW1lXTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYigwLCAyNTUsIDApJztcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoXG4gICAgICAgICAgICByZW5kZXJDb29yZHMueCArIGNoYXJhY3Rlci54IC0gbWFwT2Zmc2V0LngsXG4gICAgICAgICAgICByZW5kZXJDb29yZHMueSArIGNoYXJhY3Rlci55IC0gbWFwT2Zmc2V0LnksXG4gICAgICAgICAgICBjaGFyYWN0ZXIud2lkdGgsIGNoYXJhY3Rlci5oZWlnaHRcbiAgICAgICAgICAgICk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICBjdHguZmlsbFRleHQoXG4gICAgICAgICAgICAnWycgKyBjaGFyYWN0ZXIueCArICcsICcgKyBjaGFyYWN0ZXIueSArICddJyxcbiAgICAgICAgICAgIGNoYXJhY3Rlci54ICsgcmVuZGVyQ29vcmRzLnggLSBtYXBPZmZzZXQueCxcbiAgICAgICAgICAgIGNoYXJhY3Rlci55ICsgcmVuZGVyQ29vcmRzLnkgLSBtYXBPZmZzZXQueVxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMCwgMC4zKSc7XG4gICAgY3R4Lm1vdmVUbyhcbiAgICAgICAgcmVuZGVyQ29vcmRzLnggKyB3YWxrU3VyZmFjZVswXS54IC0gbWFwT2Zmc2V0LngsXG4gICAgICAgIHJlbmRlckNvb3Jkcy55ICsgd2Fsa1N1cmZhY2VbMF0ueSAtIG1hcE9mZnNldC55XG4gICAgICAgICk7XG5cbiAgICB3YWxrU3VyZmFjZS5zbGljZSgxKS5mb3JFYWNoKGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgICByZW5kZXJDb29yZHMueCArIHBvaW50LnggLSBtYXBPZmZzZXQueCxcbiAgICAgICAgICAgIHJlbmRlckNvb3Jkcy55ICsgcG9pbnQueSAtIG1hcE9mZnNldC55XG4gICAgICAgICAgICApO1xuICAgIH0pO1xuICAgIGN0eC5maWxsKCk7XG59XG5cbmZ1bmN0aW9uIGdldE1hcE9mZnNldCh4LCB5LCBtYXBXaWR0aCkge1xuICAgIHZhciByZXN1bHQgPSB7eDowLCB5OjB9O1xuICAgIGlmKHggPiAod2luZG93LmlubmVyV2lkdGggLyAyKSkge1xuICAgICAgICByZXN1bHQueCA9IE1hdGgubWluKHggLSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIG1hcFdpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBpc1Zpc2libGUoY2hhcmFjdGVyLCBjdXJyZW50TWFwT2Zmc2V0KSB7XG4gICAgaWYoXG4gICAgICAgIChjaGFyYWN0ZXIueCArIGNoYXJhY3Rlci53aWR0aCAtIGN1cnJlbnRNYXBPZmZzZXQueCkgPiAwICYmXG4gICAgICAgIChjaGFyYWN0ZXIueCAtIGN1cnJlbnRNYXBPZmZzZXQueCkgPCB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVGcmFtZXModGltZSwgaW1hZ2VzLCBjaGFyYWN0ZXJzLCBzcHJpdGVzKSB7XG4gICAgaWYoIWxhc3RGcmFtZVVwZGF0ZSkge1xuICAgICAgICBsYXN0RnJhbWVVcGRhdGUgPSB0aW1lO1xuICAgIH1cbiAgICBpZigodGltZSAtIGxhc3RGcmFtZVVwZGF0ZSkgPCAoMTAwMCAvIDEyKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKGNoYXJhY3RlcnMpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24oY2hhcmFjdGVyTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV07XG4gICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXIucGhhc2UgPSAoY2hhcmFjdGVyLnBoYXNlICsgMSkgJSAoaW1hZ2VzW3Nwcml0ZXNbY2hhcmFjdGVyLnNwcml0ZXNdW2NoYXJhY3Rlci5hY3Rpb25dXS53aWR0aCAvIGNoYXJhY3Rlci53aWR0aCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgbGFzdEZyYW1lVXBkYXRlID0gdGltZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKHRpbWUsIGhvc3QpIHtcbiAgICB1cGRhdGVGcmFtZXModGltZSwgaG9zdC5pbWFnZXMsIGhvc3QuY2hhcmFjdGVycywgaG9zdC5nYW1lU3RydWN0dXJlLnNwcml0ZXMpO1xuICAgIGlmKCh0aW1lIC0gaG9zdC5sYXN0RHJhdykgPCA0MCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjdXJyZW50UGhhc2UgPSBob3N0LmdldEN1cnJlbnRQaGFzZSgpO1xuICAgIHZhciByZW5kZXJDb29yZHMgPSB7XG4gICAgICAgIHdpZHRoOiBjdXJyZW50UGhhc2UucmVuZGVyV2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodDogY3VycmVudFBoYXNlLnJlbmRlckhlaWdodCB8fCB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB9O1xuXG4gICAgcmVuZGVyQ29vcmRzLnggPSAod2luZG93LmlubmVyV2lkdGggLSByZW5kZXJDb29yZHMud2lkdGgpIC8gMjtcbiAgICByZW5kZXJDb29yZHMueSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSByZW5kZXJDb29yZHMuaGVpZ2h0KSAvIDI7XG5cbiAgICB2YXIgY3VycmVudE1hcE9mZnNldCA9IGdldE1hcE9mZnNldChcbiAgICAgICAgaG9zdC5jaGFyYWN0ZXJzLm1lLngsXG4gICAgICAgIGhvc3QuY2hhcmFjdGVycy5tZS55LFxuICAgICAgICBjdXJyZW50UGhhc2UubWFwV2lkdGhcbiAgICAgICAgKTtcbiAgICB2YXIgcGxhbmVzID0gY3VycmVudFBoYXNlLnJlbmRlcmluZy5wbGFuZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLnogLSBiLno7XG4gICAgfSk7XG5cbiAgICB2YXIgYmFja2dyb3VuZFBsYW5lcyA9IHBsYW5lcy5maWx0ZXIoZnVuY3Rpb24ocGxhbmUpIHtyZXR1cm4gcGxhbmUueiA8PSAxO30pO1xuICAgIHZhciBmb3JlZ3JvdW5kUGxhbmVzID0gcGxhbmVzLmZpbHRlcihmdW5jdGlvbihwbGFuZSkge3JldHVybiBwbGFuZS56ID4gMTt9KTtcbiAgICBcbiAgICBob3N0LmN0eC5jbGVhclJlY3QoMCwgMCwgaG9zdC5jdHguY2FudmFzLndpZHRoLCBob3N0LmN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICBcbiAgICBkcmF3UGxhbmVzKFxuICAgICAgICBob3N0LmN0eCxcbiAgICAgICAgY3VycmVudE1hcE9mZnNldCxcbiAgICAgICAgaG9zdC5pbWFnZXMsXG4gICAgICAgIGN1cnJlbnRQaGFzZS5tYXBXaWR0aCxcbiAgICAgICAgcmVuZGVyQ29vcmRzLFxuICAgICAgICBiYWNrZ3JvdW5kUGxhbmVzXG4gICAgICAgICk7XG5cbiAgICBkcmF3Q2hhcmFjdGVycyhcbiAgICAgICAgaG9zdCxcbiAgICAgICAgY3VycmVudE1hcE9mZnNldCxcbiAgICAgICAgcmVuZGVyQ29vcmRzXG4gICAgICAgICk7XG5cbiAgICBkcmF3UGxhbmVzKFxuICAgICAgICBob3N0LmN0eCxcbiAgICAgICAgY3VycmVudE1hcE9mZnNldCxcbiAgICAgICAgaG9zdC5pbWFnZXMsXG4gICAgICAgIGN1cnJlbnRQaGFzZS5tYXBXaWR0aCxcbiAgICAgICAgcmVuZGVyQ29vcmRzLFxuICAgICAgICBmb3JlZ3JvdW5kUGxhbmVzXG4gICAgICAgICk7XG5cbiAgICBpZignY3VycmVudExpbmUnIGluIGN1cnJlbnRQaGFzZSAmJiBjdXJyZW50UGhhc2UuY3VycmVudExpbmUgIT09IG51bGwpIHtcbiAgICAgICAgZHJhd0RpYWxvZ3VlKFxuICAgICAgICAgICAgaG9zdC5jdHgsXG4gICAgICAgICAgICBjdXJyZW50UGhhc2UubGluZXNbY3VycmVudFBoYXNlLmN1cnJlbnRMaW5lXSxcbiAgICAgICAgICAgIGN1cnJlbnRQaGFzZS5kZWZhdWx0UHJvcGVydGllcyxcbiAgICAgICAgICAgIHJlbmRlckNvb3JkcyxcbiAgICAgICAgICAgIGhvc3QuY2hhcmFjdGVyc1tjdXJyZW50UGhhc2UubGluZXNbY3VycmVudFBoYXNlLmN1cnJlbnRMaW5lXS53aG9dLFxuICAgICAgICAgICAgY3VycmVudE1hcE9mZnNldFxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZihob3N0LmRlYnVnKSB7XG4gICAgICAgIGRyYXdEZWJ1Zyhob3N0LmN0eCwgY3VycmVudFBoYXNlLCByZW5kZXJDb29yZHMsIGhvc3QuY2hhcmFjdGVycywgY3VycmVudE1hcE9mZnNldCk7XG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gcmVuZGVyO1xuIiwiKGZ1bmN0aW9uKCl7KGZ1bmN0aW9uKGdsb2JhbCkge1xuICAgIHZhciBpZENvdW50ZXJzID0ge307XG4gICAgdmFyIFV0aWxzID0ge1xuICAgICAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgdGhlIDMgc2ltcGxlIHR5cGVzLCBhbmQgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmKG51bGwgPT09IG9iaiB8fCAnb2JqZWN0JyAhPT0gdHlwZW9mIG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjb3B5O1xuICAgICAgICAgICAgLy8gSGFuZGxlIERhdGVcbiAgICAgICAgICAgIGlmKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICBjb3B5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBjb3B5LnNldFRpbWUob2JqLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBIYW5kbGUgQXJyYXlcbiAgICAgICAgICAgIGlmKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgY29weSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IG9iai5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBjb3B5W2ldID0gY2xvbmUob2JqW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBPYmplY3RcbiAgICAgICAgICAgIGlmKG9iaiBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgICAgIGNvcHkgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29weVthdHRyXSA9IGNsb25lKG9ialthdHRyXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGNvcHkgb2JqISBJdHMgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1lcmdlOiBmdW5jdGlvbihvYmplY3QxLCBvYmplY3QyKSB7XG4gICAgICAgICAgICBmb3IodmFyIGF0dHJpYnV0ZU5hbWUgaW4gb2JqZWN0Mikge1xuICAgICAgICAgICAgICAgIGlmKG9iamVjdDIuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0MVthdHRyaWJ1dGVOYW1lXSA9IG9iamVjdDJbYXR0cmlidXRlTmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVlcE1lcmdlOiBmdW5jdGlvbiAob2JqZWN0MSwgb2JqZWN0Mikge1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIG9iamVjdDIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIG9iamVjdDJbcHJvcGVydHlOYW1lXS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0MVtwcm9wZXJ0eU5hbWVdID0gVXRpbHMuZGVlcE1lcmdlKG9iamVjdDFbcHJvcGVydHlOYW1lXSwgb2JqZWN0Mltwcm9wZXJ0eU5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdDFbcHJvcGVydHlOYW1lXSA9IG9iamVjdDJbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QxW3Byb3BlcnR5TmFtZV0gPSBvYmplY3QyW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0MTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkSW1hZ2VzOiBmdW5jdGlvbihpbWFnZXNVUkxzLCBhbGxEb25lKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2VzTmFtZXMgPSBPYmplY3Qua2V5cyhpbWFnZXNVUkxzKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgIHZhciBsb2FkZWQgPSAwO1xuICAgICAgICAgICAgdmFyIGxvYWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxvYWRlZCArPSAxO1xuICAgICAgICAgICAgICAgIGlmKGxvYWRlZCA9PT0gaW1hZ2VzTmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbERvbmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGltYWdlc05hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlTmFtZSA9IGltYWdlc05hbWVzW2ldO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBpbWFnZXNVUkxzW2ltYWdlTmFtZV07XG4gICAgICAgICAgICAgICAgaWYodXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBuZXcgZ2xvYmFsLkltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpbWFnZU5hbWVdID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gbG9hZENhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gdXJsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpbWFnZU5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TWV0aG9kU2lnbmF0dXJlOiBmdW5jdGlvbihvYmplY3QsIG1ldGhvZFN0cmluZykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG1ldGhvZFN0cmluZy5zdWJzdHIoOSwgbWV0aG9kU3RyaW5nLmluZGV4T2YoJyknKSArIDEgLSA5KTtcbiAgICAgICAgICAgIGlmKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9iamVjdC50b1N0cmluZygpICsgJy4nICsgcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVDdHhXaXRoSW1hZ2VzOiBmdW5jdGlvbihpbWFnZXMsIGRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbmFtZXMgPSBPYmplY3Qua2V5cyhpbWFnZXMpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgICAgICAgICBpZihpbWFnZXNbbmFtZV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25bbmFtZV0uY2xlYXJSZWN0KDAsIDAsIGltYWdlc1tuYW1lXS53aWR0aCwgaW1hZ2VzW25hbWVdLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uW25hbWVdLmRyYXdJbWFnZShpbWFnZXNbbmFtZV0sIDAsIDAsIGltYWdlc1tuYW1lXS53aWR0aCwgaW1hZ2VzW25hbWVdLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltuYW1lXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRyYXdMaW5lOiBmdW5jdGlvbihjdHgsIHAxLCBwMikge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhwMS54LCBwMS55KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocDIueCwgcDIueSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGFzaExpbmU6IGZ1bmN0aW9uKHgsIHksIHgyLCB5MiwgZGEpIHtcbiAgICAgICAgICAgIGlmKCFkYSkge1xuICAgICAgICAgICAgICAgIGRhID0gWzEwLCA1XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICAgICAgdmFyIGR4ID0gKHgyIC0geCksXG4gICAgICAgICAgICAgICAgZHkgPSAoeTIgLSB5KTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgdmFyIHJvdCA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKHgsIHkpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlVG8oMCwgMCk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZShyb3QpO1xuICAgICAgICAgICAgdmFyIGRjID0gZGEubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGRpID0gMCxcbiAgICAgICAgICAgICAgICBkcmF3ID0gdHJ1ZTtcbiAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgICAgd2hpbGUobGVuID4geCkge1xuICAgICAgICAgICAgICAgIHggKz0gZGFbZGkrKyAlIGRjXTtcbiAgICAgICAgICAgICAgICBpZih4ID4gbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBsZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGRyYXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lVG8oeCwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUbyh4LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHJhdyA9ICFkcmF3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGFzaFJlY3Q6IGZ1bmN0aW9uKHgsIHksIGR4LCBkeSwgZGEpIHtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBVdGlscy5kYXNoTGluZS5jYWxsKHRoaXMsIHgsIHksIHggKyBkeCwgeSwgZGEpO1xuICAgICAgICAgICAgVXRpbHMuZGFzaExpbmUuY2FsbCh0aGlzLCB4ICsgZHgsIHksIHggKyBkeCwgeSArIGR5LCBkYSk7XG4gICAgICAgICAgICBVdGlscy5kYXNoTGluZS5jYWxsKHRoaXMsIHggKyBkeCwgeSArIGR5LCB4LCB5ICsgZHksIGRhKTtcbiAgICAgICAgICAgIFV0aWxzLmRhc2hMaW5lLmNhbGwodGhpcywgeCwgeSArIGR5LCB4LCB5LCBkYSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5zdHJva2UoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkcmF3UGl4ZWw6IGZ1bmN0aW9uKHgsIHksIHIsIGcsIGIsIHdpZHRoKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2VEYXRhID0gdGhpcy5jcmVhdGVJbWFnZURhdGEod2lkdGgsIHdpZHRoKTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbKGkgKyBqICogd2lkdGgpICogNCArIDBdID0gcjtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbKGkgKyBqICogd2lkdGgpICogNCArIDFdID0gZztcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbKGkgKyBqICogd2lkdGgpICogNCArIDJdID0gYjtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbKGkgKyBqICogd2lkdGgpICogNCArIDNdID0gMjU1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgeCAtIHBhcnNlSW50KHdpZHRoIC8gMiksIHkgLSBwYXJzZUludCh3aWR0aCAvIDIpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkcmF3UGl4ZWxMaW5lOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MiwgciwgZywgYiwgd2lkdGgpIHtcbiAgICAgICAgICAgIC8vIERlZmluZSBkaWZmZXJlbmNlcyBhbmQgZXJyb3IgY2hlY2tcbiAgICAgICAgICAgIHZhciBkeCA9IE1hdGguYWJzKHgyIC0geDEpO1xuICAgICAgICAgICAgdmFyIGR5ID0gTWF0aC5hYnMoeTIgLSB5MSk7XG4gICAgICAgICAgICB2YXIgc3ggPSAoeDEgPCB4MikgPyAxIDogLTE7XG4gICAgICAgICAgICB2YXIgc3kgPSAoeTEgPCB5MikgPyAxIDogLTE7XG4gICAgICAgICAgICB2YXIgZXJyID0gZHggLSBkeTtcbiAgICAgICAgICAgIFV0aWxzLmRyYXdQaXhlbC5jYWxsKHRoaXMsIHgxLCB5MSwgciwgZywgYiwgd2lkdGgpO1xuICAgICAgICAgICAgLy8gTWFpbiBsb29wXG4gICAgICAgICAgICB3aGlsZSghKCh4MSA9PT0geDIpICYmICh5MSA9PT0geTIpKSkge1xuICAgICAgICAgICAgICAgIHZhciBlMiA9IGVyciA8PCAxO1xuICAgICAgICAgICAgICAgIGlmKGUyID4gLWR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGVyciAtPSBkeTtcbiAgICAgICAgICAgICAgICAgICAgeDEgKz0gc3g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGUyIDwgZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyICs9IGR4O1xuICAgICAgICAgICAgICAgICAgICB5MSArPSBzeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVXRpbHMuZHJhd1BpeGVsLmNhbGwodGhpcywgeDEsIHkxLCByLCBnLCBiLCB3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzaXplQ2FudmFzOiBmdW5jdGlvbihjdHgsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xuICAgICAgICAgICAgaWYoY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG1wQ2FudmFzID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIHZhciB0bXBDdHggPSB0bXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1pbih3aWR0aCwgY2FudmFzLndpZHRoKTtcbiAgICAgICAgICAgICAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5taW4oaGVpZ2h0LCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0bXBDYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgdG1wQ2FudmFzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdG1wQ3R4LmRyYXdJbWFnZShjYW52YXMsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRtcENhbnZhcywgMCwgMCwgbWluV2lkdGgsIG1pbkhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgbWluV2lkdGgsIG1pbkhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3R4O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldE5ld0lkOiBmdW5jdGlvbihjb3VudGVyTmFtZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZm9ybWF0UmVzdWx0KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hbWUgKyAnXycgKyB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgICAgIGlmKCFjb3VudGVyTmFtZSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJOYW1lID0gJyNkZWZhdWx0X2lkX25hbWUjJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCFpZENvdW50ZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldElkcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIWlkQ291bnRlcnMuaGFzT3duUHJvcGVydHkoY291bnRlck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgaWRDb3VudGVyc1tjb3VudGVyTmFtZV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ID0gZm9ybWF0UmVzdWx0KGNvdW50ZXJOYW1lLCBpZENvdW50ZXJzW2NvdW50ZXJOYW1lXSk7XG4gICAgICAgICAgICBpZENvdW50ZXJzW2NvdW50ZXJOYW1lXSsrO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICByZXNldElkczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZENvdW50ZXJzID0ge307XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0SWRDb3VudGVyczogZnVuY3Rpb24oY291bnRlcnMpIHtcbiAgICAgICAgICAgIGlkQ291bnRlcnMgPSBjb3VudGVycztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRJZENvdW50ZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBpZENvdW50ZXJzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldEVsZW1lbnRQb3NpdGlvbjogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGxlZnQgPSAwO1xuICAgICAgICAgICAgdmFyIHRvcCA9IDA7XG4gICAgICAgICAgICB2YXIgZSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB3aGlsZShlLm9mZnNldFBhcmVudCAhPT0gdW5kZWZpbmVkICYmIGUub2Zmc2V0UGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGVmdCArPSBlLm9mZnNldExlZnQgKyAoZS5jbGllbnRMZWZ0ICE9PSBudWxsID8gZS5jbGllbnRMZWZ0IDogMCk7XG4gICAgICAgICAgICAgICAgdG9wICs9IGUub2Zmc2V0VG9wICsgKGUuY2xpZW50VG9wICE9PSBudWxsID8gZS5jbGllbnRUb3AgOiAwKTtcbiAgICAgICAgICAgICAgICBlID0gZS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IGxlZnQsXG4gICAgICAgICAgICAgICAgeTogdG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldE1vdXNlUG9zaXRpb246IGZ1bmN0aW9uKGV2ZW50LCBkb21FbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gVXRpbHMucmVhZEdsb2JhbE1vdXNlKGV2ZW50KTtcbiAgICAgICAgICAgIGlmKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudFBvc2l0aW9uID0gVXRpbHMuZ2V0RWxlbWVudFBvc2l0aW9uKGRvbUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC54IC09IGVsZW1lbnRQb3NpdGlvbi54O1xuICAgICAgICAgICAgICAgIHJlc3VsdC55IC09IGVsZW1lbnRQb3NpdGlvbi55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICBhc3NlcnROb3ROdWxsOiBmdW5jdGlvbih2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICAgICAgaWYoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBudWxsIHZhbHVlICcgKyBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBlbXB0eURvbUVsZW1lbnQ6IGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHdoaWxlKGRvbUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZWFkR2xvYmFsTW91c2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgICAgICBpZihldmVudC5wYWdlWCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50LnBhZ2VZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQueCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICAgICAgICAgIHJlc3VsdC55ID0gZXZlbnQucGFnZVk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQueCA9IGV2ZW50LmNsaWVudFggKyBnbG9iYWwuZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICsgZ2xvYmFsLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIHJlc3VsdC55ID0gZXZlbnQuY2xpZW50WSArIGdsb2JhbC5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArIGdsb2JhbC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICBpbmRleE9mOiBmdW5jdGlvbihhcnJheSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBIU0xWYWx1ZTogZnVuY3Rpb24objEsIG4yLCBodWUpIHtcbiAgICAgICAgICAgIHZhciB2YWw7XG4gICAgICAgICAgICBpZihodWUgPiA2KSB7XG4gICAgICAgICAgICAgICAgaHVlIC09IDY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGh1ZSA8IDApIHtcbiAgICAgICAgICAgICAgICBodWUgKz0gNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGh1ZSA8IDEpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBuMSArIChuMiAtIG4xKSAqIGh1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoaHVlIDwgMykge1xuICAgICAgICAgICAgICAgIHZhbCA9IG4yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihodWUgPCA0KSB7XG4gICAgICAgICAgICAgICAgdmFsID0gbjEgKyAobjIgLSBuMSkgKiAoNCAtIGh1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBuMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgSFNMVG9SR0I6IGZ1bmN0aW9uKGgsIHMsIGwpIHtcbiAgICAgICAgICAgIHZhciByLCBnLCBiO1xuICAgICAgICAgICAgaCA9IGggLSBNYXRoLmZsb29yKGgpO1xuICAgICAgICAgICAgcyA9IHRoaXMuY2xhbXAocywgMCwgMSk7XG4gICAgICAgICAgICBsID0gdGhpcy5jbGFtcChsLCAwLCAxKTtcbiAgICAgICAgICAgIGlmKHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICByID0gbDtcbiAgICAgICAgICAgICAgICBnID0gbDtcbiAgICAgICAgICAgICAgICBiID0gbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBtMSwgbTI7XG4gICAgICAgICAgICAgICAgaWYobCA8PSAwLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgbTIgPSBsICogKDEgKyBzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG0yID0gbCArIHMgLSBsICogcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbTEgPSAyLjAgKiBsIC0gbTI7XG4gICAgICAgICAgICAgICAgciA9IHRoaXMuSFNMVmFsdWUobTEsIG0yLCBoICogNi4wICsgMi4wKTtcbiAgICAgICAgICAgICAgICBnID0gdGhpcy5IU0xWYWx1ZShtMSwgbTIsIGggKiA2LjApO1xuICAgICAgICAgICAgICAgIGIgPSB0aGlzLkhTTFZhbHVlKG0xLCBtMiwgaCAqIDYuMCAtIDIuMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHI6IHIsXG4gICAgICAgICAgICAgICAgZzogZyxcbiAgICAgICAgICAgICAgICBiOiBiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIFJHQlRvSFNWOiBmdW5jdGlvbiBSR0JUb0hTVihjb2xvclJHQikge1xuICAgICAgICAgICAgdmFyIHIgPSBjb2xvclJHQi5yIC8gMjU1O1xuICAgICAgICAgICAgdmFyIGcgPSBjb2xvclJHQi5nIC8gMjU1O1xuICAgICAgICAgICAgdmFyIGIgPSBjb2xvclJHQi5iIC8gMjU1O1xuICAgICAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgICAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICAgICAgdmFyIGgsIHMsIHYgPSBtYXg7XG5cbiAgICAgICAgICAgIHZhciBkID0gbWF4IC0gbWluO1xuICAgICAgICAgICAgcyA9IG1heCA9PT0gMCA/IDAgOiBkIC8gbWF4O1xuXG4gICAgICAgICAgICBpZihtYXggPT09IG1pbikge1xuICAgICAgICAgICAgICAgIGggPSAwOyAvLyBhY2hyb21hdGljXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2gobWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGc6XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gKGIgLSByKSAvIGQgKyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgYjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSAociAtIGcpIC8gZCArIDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaCAvPSA2O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGg6IGgsXG4gICAgICAgICAgICAgICAgczogcyxcbiAgICAgICAgICAgICAgICB2OiB2XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIEhTVlRvUkdCOiBmdW5jdGlvbiBIU1ZUb1JHQihoLCBzLCB2KSB7XG4gICAgICAgICAgICB2YXIgciwgZywgYjtcblxuICAgICAgICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKGggKiA2KTtcbiAgICAgICAgICAgIHZhciBmID0gaCAqIDYgLSBpO1xuICAgICAgICAgICAgdmFyIHAgPSB2ICogKDEgLSBzKTtcbiAgICAgICAgICAgIHZhciBxID0gdiAqICgxIC0gZiAqIHMpO1xuICAgICAgICAgICAgdmFyIHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyk7XG5cbiAgICAgICAgICAgIHN3aXRjaChpICUgNikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgciA9IHY7XG4gICAgICAgICAgICAgICAgICAgIGcgPSB0O1xuICAgICAgICAgICAgICAgICAgICBiID0gcDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICByID0gcTtcbiAgICAgICAgICAgICAgICAgICAgZyA9IHY7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBwO1xuICAgICAgICAgICAgICAgICAgICBnID0gdjtcbiAgICAgICAgICAgICAgICAgICAgYiA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgciA9IHA7XG4gICAgICAgICAgICAgICAgICAgIGcgPSBxO1xuICAgICAgICAgICAgICAgICAgICBiID0gdjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICByID0gdDtcbiAgICAgICAgICAgICAgICAgICAgZyA9IHA7XG4gICAgICAgICAgICAgICAgICAgIGIgPSB2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIHIgPSB2O1xuICAgICAgICAgICAgICAgICAgICBnID0gcDtcbiAgICAgICAgICAgICAgICAgICAgYiA9IHE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHI6IHBhcnNlSW50KHIgKiAyNTUpLFxuICAgICAgICAgICAgICAgIGc6IHBhcnNlSW50KGcgKiAyNTUpLFxuICAgICAgICAgICAgICAgIGI6IHBhcnNlSW50KGIgKiAyNTUpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIEhTVlRvSFNMOiBmdW5jdGlvbihoLCBzLCB2KSB7XG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgdGhlIGxpZ2h0bmVzcyBpbiB0aGUgcmFuZ2UgWzAsMTAwXVxuICAgICAgICAgICAgdmFyIGwgPSAoMiAtIHMgLyAxMDApICogdiAvIDI7XG5cbiAgICAgICAgICAgIHZhciBoc2wgPSB7XG4gICAgICAgICAgICAgICAgJ2gnOiBoLFxuICAgICAgICAgICAgICAgICdzJzogcyAqIHYgLyAobCA8IDUwID8gbCAqIDIgOiAyMDAgLSBsICogMiksXG4gICAgICAgICAgICAgICAgJ2wnOiBsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBjb3JyZWN0IGEgZGl2aXNpb24tYnktemVybyBlcnJvclxuICAgICAgICAgICAgaWYoaXNOYU4oaHNsLnMpKSB7XG4gICAgICAgICAgICAgICAgaHNsLnMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhzbDtcbiAgICAgICAgfSxcblxuICAgICAgICBjbGFtcDogZnVuY3Rpb24odiwgbWluLCBtYXgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2LCBtYXgpLCBtaW4pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG59KSAodGhpcyk7XG5cblxufSkoKSIsInZhciBSU1ZQID0gcmVxdWlyZSgncnN2cCcpO1xuXG52YXIgVXRpbHMgPSByZXF1aXJlKCd1dGlscycpO1xudmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcbnZhciBDaGFyYWN0ZXIgPSByZXF1aXJlKCcuL2NoYXJhY3RlcicpO1xuXG5cbnZhciBnYW1lcGxheXMgPSB7XG4gICAgRGlhbG9ndWU6IHJlcXVpcmUoJy4vZ2FtZXBsYXkvZGlhbG9ndWUnKSxcbiAgICBXYW5kZXI6IHJlcXVpcmUoJy4vZ2FtZXBsYXkvd2FuZGVyJyksXG4gICAgUHJlc3NBbnlLZXk6IHJlcXVpcmUoJy4vZ2FtZXBsYXkvcHJlc3MtYW55LWtleScpLFxuICAgIGRlZmF1bHQ6IHJlcXVpcmUoJy4vZ2FtZXBsYXkvZGVmYXVsdCcpXG59O1xuXG52YXIgcmVuZGVyZXJzID0ge1xuICAgIFBvaW50TkNsaWNrOiByZXF1aXJlKCcuL3JlbmRlcmVycy9wb2ludC1uLWNsaWNrJyksXG4gICAgdGl0bGU6IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3RpdGxlJyksXG4gICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7fVxufTtcblxuXG5mdW5jdGlvbiBHYW1lKGNhbnZhcywgZ2FtZVN0cnVjdHVyZSkge1xuICAgIHRoaXMucGhhc2VOYW1lID0gbnVsbDtcbiAgICB0aGlzLmNoYXJhY3RlcnMgPSB7fTtcbiAgICB0aGlzLmdhbWVTdHJ1Y3R1cmUgPSBnYW1lU3RydWN0dXJlO1xuICAgIHRoaXMucGhhc2VJbnN0YW5jZXMgPSB7fTtcbiAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudEhhbmRsZXJzID0ge307XG4gICAgdGhpcy5sYXN0VXBkYXRlID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xuICAgIHRoaXMuZGVidWcgPSB0aGlzLmdhbWVTdHJ1Y3R1cmUuZGVidWc7XG4gICAgdGhpcy5rZXlzID0ga2V5cztcbiAgICB0aGlzLmdhbWVDYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5nYW1lQ2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5nYW1lQ2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLmN0eCA9IHRoaXMuZ2FtZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gJ0knLmNoYXJDb2RlQXQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVidWcgPSAhdGhpcy5kZWJ1ZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMua2V5c1tldmVudC5rZXlDb2RlXSA9IHRydWU7XG4gICAgICAgICAgICBpZihldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5cy5zaGlmdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLnJlZ2lzdGVyZWRFdmVudEhhbmRsZXJzLmtleWRvd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudEhhbmRsZXJzLmtleWRvd24oZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyksIGZhbHNlKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmtleXNbZXZlbnQua2V5Q29kZV0gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKCFldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5cy5zaGlmdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5yZWdpc3RlcmVkRXZlbnRIYW5kbGVycy5rZXl1cCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50SGFuZGxlcnMua2V5dXAoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyksIGZhbHNlKTtcbn1cblxuR2FtZS5wcm90b3R5cGUgPSB7XG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nb3RvUGhhc2UodGhpcy5nYW1lU3RydWN0dXJlLmVudHJ5KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldEN1cnJlbnRQaGFzZTogZnVuY3Rpb24gZ2V0Q3VycmVudFBoYXNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5waGFzZUluc3RhbmNlc1t0aGlzLnBoYXNlTmFtZV07XG4gICAgfSxcblxuICAgIGdvdG9TaW5rOiBmdW5jdGlvbiBnb3RvU2luayhzaW5rTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nb3RvUGhhc2UodGhpcy5nYW1lU3RydWN0dXJlLnBsYW5bdGhpcy5waGFzZU5hbWVdW3NpbmtOYW1lXSk7XG4gICAgfSxcblxuICAgIHVucmVnaXN0ZXJFdmVudEhhbmRsZXJzOiBmdW5jdGlvbiB1bnJlZ2lzdGVyRXZlbnRIYW5kbGVycyhwaGFzZSkge1xuICAgICAgICB2YXIgZXZlbnRIYW5kbGVycyA9IHBoYXNlLmV2ZW50SGFuZGxlcnM7XG5cbiAgICAgICAgaWYoIWV2ZW50SGFuZGxlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IodmFyIGV2ZW50TmFtZSBpbiBldmVudEhhbmRsZXJzKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yZWdpc3RlcmVkRXZlbnRIYW5kbGVyc1tldmVudE5hbWVdO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlZ2lzdGVyRXZlbnRIYW5kbGVyczogZnVuY3Rpb24gcmVnaXN0ZXJFdmVudEhhbmRsZXIocGhhc2UpIHtcbiAgICAgICAgdmFyIGV2ZW50SGFuZGxlcnMgPSBwaGFzZS5ldmVudEhhbmRsZXJzO1xuXG4gICAgICAgIGlmKCFldmVudEhhbmRsZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yKHZhciBldmVudE5hbWUgaW4gZXZlbnRIYW5kbGVycykge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRIYW5kbGVyc1tldmVudE5hbWVdID0gZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdLmJpbmQocGhhc2UpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGxvYWRJbWFnZXM6IGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUlNWUC5Qcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYoaW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgVXRpbHMubG9hZEltYWdlcyhpbWFnZXMsIGZ1bmN0aW9uKGltZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbWdzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldEhpZXJhcmNoeTogZnVuY3Rpb24gZ2V0SGllcmFyY2h5KHBoYXNlTmFtZSwgY2hpbGRyZW4pIHtcbiAgICAgICAgaWYoIWNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjdXJyZW50SGllcmFyY2h5ID0gW3BoYXNlTmFtZV0uY29uY2F0KGNoaWxkcmVuKTtcbiAgICAgICAgaWYodGhpcy5nYW1lU3RydWN0dXJlLnBoYXNlc1twaGFzZU5hbWVdLmJhc2VkT24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhpZXJhcmNoeSh0aGlzLmdhbWVTdHJ1Y3R1cmUucGhhc2VzW3BoYXNlTmFtZV0uYmFzZWRPbiwgY3VycmVudEhpZXJhcmNoeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEhpZXJhcmNoeTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRGdWxsRGVzY3JpcHRpb246IGZ1bmN0aW9uIGdldEZ1bGxEZXNjcmlwdGlvbihwaGFzZU5hbWUpIHtcbiAgICAgICAgdmFyIGhpZXJhcmNoeSA9IHRoaXMuZ2V0SGllcmFyY2h5KHBoYXNlTmFtZSk7XG4gICAgICAgIHJldHVybiBoaWVyYXJjaHkucmVkdWNlKGZ1bmN0aW9uKHBoYXNlU29GYXIsIGN1cnJlbnRQaGFzZU5hbWUpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50RGVzY3JpcHRpb24gPSB0aGlzLmdhbWVTdHJ1Y3R1cmUucGhhc2VzW2N1cnJlbnRQaGFzZU5hbWVdO1xuICAgICAgICAgICAgZm9yKHZhciBwcm9wZXJ0eU5hbWUgaW4gY3VycmVudERlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgICAgIHBoYXNlU29GYXJbcHJvcGVydHlOYW1lXSAmJlxuICAgICAgICAgICAgICAgICAgICAhKGN1cnJlbnREZXNjcmlwdGlvbi5ub0luaGVyaXQgJiYgY3VycmVudERlc2NyaXB0aW9uLm5vSW5oZXJpdFtwcm9wZXJ0eU5hbWVdKSAmJlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YoY3VycmVudERlc2NyaXB0aW9uW3Byb3BlcnR5TmFtZV0pICE9PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBwaGFzZVNvRmFyW3Byb3BlcnR5TmFtZV0gPSBVdGlscy5kZWVwTWVyZ2UocGhhc2VTb0Zhcltwcm9wZXJ0eU5hbWVdLCBjdXJyZW50RGVzY3JpcHRpb25bcHJvcGVydHlOYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwaGFzZVNvRmFyW3Byb3BlcnR5TmFtZV0gPSBjdXJyZW50RGVzY3JpcHRpb25bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGhhc2VTb0ZhcjtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCB7fSk7XG4gICAgfSxcblxuICAgIGZpbHRlckltYWdlc1RvTG9hZDogZnVuY3Rpb24gZmlsdGVySW1hZ2VzVG9Mb2FkKHBoYXNlKSB7XG4gICAgICAgIHZhciBpbWFnZXNUb0xvYWQgPSB7fTtcbiAgICAgICAgdmFyIGltYWdlTmFtZTtcbiAgICAgICAgdmFyIGNoYXJhY3Rlck5hbWU7XG5cbiAgICAgICAgaWYocGhhc2UucmVuZGVyaW5nLnBsYW5lcykge1xuICAgICAgICAgICAgcGhhc2UucmVuZGVyaW5nLnBsYW5lcy5mb3JFYWNoKGZ1bmN0aW9uKHBsYW5lKXtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5pbWFnZXNbcGxhbmUuaW1hZ2VdKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc1RvTG9hZFtwbGFuZS5pbWFnZV0gPSB0aGlzLmdhbWVTdHJ1Y3R1cmUucGF0aHNbcGxhbmUuaW1hZ2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwaGFzZS5yZW5kZXJpbmcuaW1hZ2UpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmltYWdlc1twaGFzZS5yZW5kZXJpbmcuaW1hZ2VdKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VzVG9Mb2FkW3BoYXNlLnJlbmRlcmluZy5pbWFnZV0gPSB0aGlzLmdhbWVTdHJ1Y3R1cmUucGF0aHNbcGhhc2UucmVuZGVyaW5nLmltYWdlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihjaGFyYWN0ZXJOYW1lIGluIHBoYXNlLmNoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgIGZvcih2YXIgc3RhdGVOYW1lIGluIHRoaXMuZ2FtZVN0cnVjdHVyZS5zcHJpdGVzW3BoYXNlLmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV0uc3ByaXRlc10pIHtcbiAgICAgICAgICAgICAgICBpbWFnZU5hbWUgPSB0aGlzLmdhbWVTdHJ1Y3R1cmUuc3ByaXRlc1twaGFzZS5jaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdLnNwcml0ZXNdW3N0YXRlTmFtZV07XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuaW1hZ2VzW2ltYWdlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzVG9Mb2FkW2ltYWdlTmFtZV0gPSAgdGhpcy5nYW1lU3RydWN0dXJlLnBhdGhzW2ltYWdlTmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGltYWdlc1RvTG9hZDtcbiAgICB9LFxuXG4gICAgbWVyZ2VJbWFnZXM6IGZ1bmN0aW9uIG1lcmdlSW1hZ2VzKGltYWdlcykge1xuICAgICAgICB2YXIgaW1hZ2VOYW1lO1xuXG4gICAgICAgIGZvcihpbWFnZU5hbWUgaW4gaW1hZ2VzKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlc1tpbWFnZU5hbWVdID0gaW1hZ2VzW2ltYWdlTmFtZV07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlV2l0aERlZmF1bHRzOiBmdW5jdGlvbiB1cGRhdGVXaXRoRGVmYXVsdHMocGhhc2VEZXNjcmlwdGlvbikge1xuICAgICAgICBpZighcGhhc2VEZXNjcmlwdGlvbi5nYW1lcGxheVR5cGUpIHtcbiAgICAgICAgICAgIHBoYXNlRGVzY3JpcHRpb24uZ2FtZXBsYXlUeXBlID0gJ2RlZmF1bHQnO1xuICAgICAgICB9XG4gICAgICAgIGlmKCFwaGFzZURlc2NyaXB0aW9uLnJlbmRlcmluZykge1xuICAgICAgICAgICAgcGhhc2VEZXNjcmlwdGlvbi5yZW5kZXJpbmcgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJkZWZhdWx0XCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ290b1BoYXNlOiBmdW5jdGlvbiBnb3RvUGhhc2UocGhhc2VOYW1lKSB7XG4gICAgICAgIHZhciBwaGFzZURlc2NyaXB0aW9uO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lO1xuICAgICAgICB0aGlzLmNoYW5naW5nUGhhc2UgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBSU1ZQLlByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnBoYXNlSW5zdGFuY2VzW3RoaXMucGhhc2VOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVucmVnaXN0ZXJFdmVudEhhbmRsZXJzKHRoaXMucGhhc2VJbnN0YW5jZXNbdGhpcy5waGFzZU5hbWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5waGFzZU5hbWUgPSBwaGFzZU5hbWU7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuZ2FtZVN0cnVjdHVyZS5waGFzZXNbdGhpcy5waGFzZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KG5ldyBFcnJvcignTm8gcGhhc2Ugd2l0aCBuYW1lICcgKyBwaGFzZU5hbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGhhc2VEZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RnVsbERlc2NyaXB0aW9uKHRoaXMucGhhc2VOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVdpdGhEZWZhdWx0cyhwaGFzZURlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2VzVG9Mb2FkID0gdGhpcy5maWx0ZXJJbWFnZXNUb0xvYWQocGhhc2VEZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgaWYoT2JqZWN0LmtleXMoaW1hZ2VzVG9Mb2FkKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZEltYWdlcyhpbWFnZXNUb0xvYWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGltYWdlcykge1xuICAgICAgICAgICAgICAgIGlmKGltYWdlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lcmdlSW1hZ2VzKGltYWdlcyk7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnBoYXNlSW5zdGFuY2VzW3BoYXNlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waGFzZUluc3RhbmNlc1twaGFzZU5hbWVdID0gbmV3IGdhbWVwbGF5c1twaGFzZURlc2NyaXB0aW9uLmdhbWVwbGF5VHlwZV0odGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGhhc2VJbnN0YW5jZXNbcGhhc2VOYW1lXS5ob3N0ID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waGFzZUluc3RhbmNlc1twaGFzZU5hbWVdLm5hbWUgPSBwaGFzZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGZvcihwcm9wZXJ0eU5hbWUgaW4gcGhhc2VEZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoWydpbWFnZXMnLCAnZ2FtZXBsYXlUeXBlJ10uaW5kZXhPZihwcm9wZXJ0eU5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGhhc2VJbnN0YW5jZXNbcGhhc2VOYW1lXVtwcm9wZXJ0eU5hbWVdID0gcGhhc2VEZXNjcmlwdGlvbltwcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHBoYXNlRGVzY3JpcHRpb24uY2hhcmFjdGVycykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhcmFjdGVyRGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJOYW1lO1xuICAgICAgICAgICAgICAgICAgICBmb3IoY2hhcmFjdGVyTmFtZSBpbiBwaGFzZURlc2NyaXB0aW9uLmNoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEZXNjcmlwdGlvbiA9IHBoYXNlRGVzY3JpcHRpb24uY2hhcmFjdGVyc1tjaGFyYWN0ZXJOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV0gPSBuZXcgQ2hhcmFjdGVyKGNoYXJhY3RlckRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihwcm9wZXJ0eU5hbWUgaW4gcGhhc2VEZXNjcmlwdGlvbi5jaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyc1tjaGFyYWN0ZXJOYW1lXVtwcm9wZXJ0eU5hbWVdID0gcGhhc2VEZXNjcmlwdGlvbi5jaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvcihjaGFyYWN0ZXJOYW1lIGluIHRoaXMuY2hhcmFjdGVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXBoYXNlRGVzY3JpcHRpb24uY2hhcmFjdGVyc1tjaGFyYWN0ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnBoYXNlSW5zdGFuY2VzW3BoYXNlTmFtZV0uaW5pdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBoYXNlSW5zdGFuY2VzW3BoYXNlTmFtZV0uaW5pdChwaGFzZU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRIYW5kbGVycyh0aGlzLnBoYXNlSW5zdGFuY2VzW3RoaXMucGhhc2VOYW1lXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyc1t0aGlzLnBoYXNlSW5zdGFuY2VzW3RoaXMucGhhc2VOYW1lXS5yZW5kZXJpbmcudHlwZV07XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2luZ1BoYXNlID0gZmFsc2U7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICByZW5kZXJEZWJ1ZzogZnVuY3Rpb24gcmVuZGVyRGVidWcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnbm9ybWFsIDE0cHQgaGVsdmV0aWNhJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy5waGFzZU5hbWUsIDEwLCAyNCk7XG4gICAgfSxcblxuICAgIGxvb3A6IGZ1bmN0aW9uIGxvb3AodGltZSkge1xuICAgICAgICBpZighdGhpcy5jaGFuZ2luZ1BoYXNlICYmIHRoaXMucmVuZGVyZXIpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmxhc3RVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RVcGRhdGUgPSB0aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5waGFzZUluc3RhbmNlc1t0aGlzLnBoYXNlTmFtZV0udXBkYXRlKHRpbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gdGltZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIXRoaXMubGFzdERyYXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REcmF3ID0gdGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucmVuZGVyZXIodGltZSwgdGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REcmF3ID0gdGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMuZGVidWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckRlYnVnKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICAgIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lO1xuIiwidmFyIGJlaGF2aW91cnMgPSB7XG4gICAgJ3dhbGtlcic6ICByZXF1aXJlKCcuL3dhbGtlcicpXG59O1xuXG5cbmZ1bmN0aW9uIENoYXJhY3RlcihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuaW5pdChkZXNjcmlwdGlvbik7ICAgIFxufVxuXG5DaGFyYWN0ZXIucHJvdG90eXBlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnaWRsZSc7XG4gICAgICAgIHRoaXMucGhhc2UgPSAwO1xuICAgICAgICB0aGlzLmR4ID0gMDtcbiAgICAgICAgdGhpcy5keSA9IDA7XG5cbiAgICAgICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgZGVzY3JpcHRpb25bcHJvcGVydHldKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmJlaGF2aW91cikge1xuICAgICAgICAgICAgdGhpcy5iZWhhdmlvdXIgPSBuZXcgYmVoYXZpb3Vyc1t0aGlzLmJlaGF2aW91ci50eXBlXSh0aGlzLmJlaGF2aW91ciwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0UHJvcGVydHk6IGZ1bmN0aW9uIHNldFByb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmKHRoaXNbbmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBpZihuYW1lID09PSAnYWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMucGhhc2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbiIsIihmdW5jdGlvbihwcm9jZXNzKXsvKiFcbiAqIEBvdmVydmlldyBSU1ZQIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTQgWWVodWRhIEthdHosIFRvbSBEYWxlLCBTdGVmYW4gUGVubmVyIGFuZCBjb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aWxkZWlvL3JzdnAuanMvbWFzdGVyL0xJQ0VOU0VcbiAqIEB2ZXJzaW9uICAgMy4wLjE4XG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHV0aWxzJCRvYmplY3RPckZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHV0aWxzJCRpc0Z1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCR1dGlscyQkaXNNYXliZVRoZW5hYmxlKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkdXRpbHMkJF9pc0FycmF5O1xuICAgIGlmICghQXJyYXkuaXNBcnJheSkge1xuICAgICAgbGliJHJzdnAkdXRpbHMkJF9pc0FycmF5ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpYiRyc3ZwJHV0aWxzJCRfaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJHV0aWxzJCRpc0FycmF5ID0gbGliJHJzdnAkdXRpbHMkJF9pc0FycmF5O1xuXG4gICAgdmFyIGxpYiRyc3ZwJHV0aWxzJCRub3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9O1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkdXRpbHMkJEYoKSB7IH1cblxuICAgIHZhciBsaWIkcnN2cCR1dGlscyQkb19jcmVhdGUgPSAoT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiAobykge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2Vjb25kIGFyZ3VtZW50IG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgICAgIH1cbiAgICAgIGxpYiRyc3ZwJHV0aWxzJCRGLnByb3RvdHlwZSA9IG87XG4gICAgICByZXR1cm4gbmV3IGxpYiRyc3ZwJHV0aWxzJCRGKCk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkZXZlbnRzJCRpbmRleE9mKGNhbGxiYWNrcywgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGk9MCwgbD1jYWxsYmFja3MubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgICBpZiAoY2FsbGJhY2tzW2ldID09PSBjYWxsYmFjaykgeyByZXR1cm4gaTsgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkZXZlbnRzJCRjYWxsYmFja3NGb3Iob2JqZWN0KSB7XG4gICAgICB2YXIgY2FsbGJhY2tzID0gb2JqZWN0Ll9wcm9taXNlQ2FsbGJhY2tzO1xuXG4gICAgICBpZiAoIWNhbGxiYWNrcykge1xuICAgICAgICBjYWxsYmFja3MgPSBvYmplY3QuX3Byb21pc2VDYWxsYmFja3MgPSB7fTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhbGxiYWNrcztcbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkZXZlbnRzJCRkZWZhdWx0ID0ge1xuXG4gICAgICAvKipcbiAgICAgICAgYFJTVlAuRXZlbnRUYXJnZXQubWl4aW5gIGV4dGVuZHMgYW4gb2JqZWN0IHdpdGggRXZlbnRUYXJnZXQgbWV0aG9kcy4gRm9yXG4gICAgICAgIEV4YW1wbGU6XG5cbiAgICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgICB2YXIgb2JqZWN0ID0ge307XG5cbiAgICAgICAgUlNWUC5FdmVudFRhcmdldC5taXhpbihvYmplY3QpO1xuXG4gICAgICAgIG9iamVjdC5vbignZmluaXNoZWQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIC8vIGhhbmRsZSBldmVudFxuICAgICAgICB9KTtcblxuICAgICAgICBvYmplY3QudHJpZ2dlcignZmluaXNoZWQnLCB7IGRldGFpbDogdmFsdWUgfSk7XG4gICAgICAgIGBgYFxuXG4gICAgICAgIGBFdmVudFRhcmdldC5taXhpbmAgYWxzbyB3b3JrcyB3aXRoIHByb3RvdHlwZXM6XG5cbiAgICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgICB2YXIgUGVyc29uID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgUlNWUC5FdmVudFRhcmdldC5taXhpbihQZXJzb24ucHJvdG90eXBlKTtcblxuICAgICAgICB2YXIgeWVodWRhID0gbmV3IFBlcnNvbigpO1xuICAgICAgICB2YXIgdG9tID0gbmV3IFBlcnNvbigpO1xuXG4gICAgICAgIHllaHVkYS5vbigncG9rZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1llaHVkYSBzYXlzIE9XJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvbS5vbigncG9rZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1RvbSBzYXlzIE9XJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHllaHVkYS50cmlnZ2VyKCdwb2tlJyk7XG4gICAgICAgIHRvbS50cmlnZ2VyKCdwb2tlJyk7XG4gICAgICAgIGBgYFxuXG4gICAgICAgIEBtZXRob2QgbWl4aW5cbiAgICAgICAgQGZvciBSU1ZQLkV2ZW50VGFyZ2V0XG4gICAgICAgIEBwcml2YXRlXG4gICAgICAgIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIGV4dGVuZCB3aXRoIEV2ZW50VGFyZ2V0IG1ldGhvZHNcbiAgICAgICovXG4gICAgICAnbWl4aW4nOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgb2JqZWN0WydvbiddICAgICAgPSB0aGlzWydvbiddO1xuICAgICAgICBvYmplY3RbJ29mZiddICAgICA9IHRoaXNbJ29mZiddO1xuICAgICAgICBvYmplY3RbJ3RyaWdnZXInXSA9IHRoaXNbJ3RyaWdnZXInXTtcbiAgICAgICAgb2JqZWN0Ll9wcm9taXNlQ2FsbGJhY2tzID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYGV2ZW50TmFtZWAgaXMgdHJpZ2dlcmVkXG5cbiAgICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgICBvYmplY3Qub24oJ2V2ZW50JywgZnVuY3Rpb24oZXZlbnRJbmZvKXtcbiAgICAgICAgICAvLyBoYW5kbGUgdGhlIGV2ZW50XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9iamVjdC50cmlnZ2VyKCdldmVudCcpO1xuICAgICAgICBgYGBcblxuICAgICAgICBAbWV0aG9kIG9uXG4gICAgICAgIEBmb3IgUlNWUC5FdmVudFRhcmdldFxuICAgICAgICBAcHJpdmF0ZVxuICAgICAgICBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGxpc3RlbiBmb3JcbiAgICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGV2ZW50IGlzIHRyaWdnZXJlZC5cbiAgICAgICovXG4gICAgICAnb24nOiBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBhbGxDYWxsYmFja3MgPSBsaWIkcnN2cCRldmVudHMkJGNhbGxiYWNrc0Zvcih0aGlzKSwgY2FsbGJhY2tzO1xuXG4gICAgICAgIGNhbGxiYWNrcyA9IGFsbENhbGxiYWNrc1tldmVudE5hbWVdO1xuXG4gICAgICAgIGlmICghY2FsbGJhY2tzKSB7XG4gICAgICAgICAgY2FsbGJhY2tzID0gYWxsQ2FsbGJhY2tzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaWIkcnN2cCRldmVudHMkJGluZGV4T2YoY2FsbGJhY2tzLCBjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAgWW91IGNhbiB1c2UgYG9mZmAgdG8gc3RvcCBmaXJpbmcgYSBwYXJ0aWN1bGFyIGNhbGxiYWNrIGZvciBhbiBldmVudDpcblxuICAgICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICAgIGZ1bmN0aW9uIGRvU3R1ZmYoKSB7IC8vIGRvIHN0dWZmISB9XG4gICAgICAgIG9iamVjdC5vbignc3R1ZmYnLCBkb1N0dWZmKTtcblxuICAgICAgICBvYmplY3QudHJpZ2dlcignc3R1ZmYnKTsgLy8gZG9TdHVmZiB3aWxsIGJlIGNhbGxlZFxuXG4gICAgICAgIC8vIFVucmVnaXN0ZXIgT05MWSB0aGUgZG9TdHVmZiBjYWxsYmFja1xuICAgICAgICBvYmplY3Qub2ZmKCdzdHVmZicsIGRvU3R1ZmYpO1xuICAgICAgICBvYmplY3QudHJpZ2dlcignc3R1ZmYnKTsgLy8gZG9TdHVmZiB3aWxsIE5PVCBiZSBjYWxsZWRcbiAgICAgICAgYGBgXG5cbiAgICAgICAgSWYgeW91IGRvbid0IHBhc3MgYSBgY2FsbGJhY2tgIGFyZ3VtZW50IHRvIGBvZmZgLCBBTEwgY2FsbGJhY2tzIGZvciB0aGVcbiAgICAgICAgZXZlbnQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgZXZlbnQgZmlyZXMuIEZvciBleGFtcGxlOlxuXG4gICAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgICAgdmFyIGNhbGxiYWNrMSA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgICAgdmFyIGNhbGxiYWNrMiA9IGZ1bmN0aW9uKCl7fTtcblxuICAgICAgICBvYmplY3Qub24oJ3N0dWZmJywgY2FsbGJhY2sxKTtcbiAgICAgICAgb2JqZWN0Lm9uKCdzdHVmZicsIGNhbGxiYWNrMik7XG5cbiAgICAgICAgb2JqZWN0LnRyaWdnZXIoJ3N0dWZmJyk7IC8vIGNhbGxiYWNrMSBhbmQgY2FsbGJhY2syIHdpbGwgYmUgZXhlY3V0ZWQuXG5cbiAgICAgICAgb2JqZWN0Lm9mZignc3R1ZmYnKTtcbiAgICAgICAgb2JqZWN0LnRyaWdnZXIoJ3N0dWZmJyk7IC8vIGNhbGxiYWNrMSBhbmQgY2FsbGJhY2syIHdpbGwgbm90IGJlIGV4ZWN1dGVkIVxuICAgICAgICBgYGBcblxuICAgICAgICBAbWV0aG9kIG9mZlxuICAgICAgICBAZm9yIFJTVlAuRXZlbnRUYXJnZXRcbiAgICAgICAgQHByaXZhdGVcbiAgICAgICAgQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSBldmVudCB0byBzdG9wIGxpc3RlbmluZyB0b1xuICAgICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBvcHRpb25hbCBhcmd1bWVudC4gSWYgZ2l2ZW4sIG9ubHkgdGhlIGZ1bmN0aW9uXG4gICAgICAgIGdpdmVuIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBldmVudCdzIGNhbGxiYWNrIHF1ZXVlLiBJZiBubyBgY2FsbGJhY2tgXG4gICAgICAgIGFyZ3VtZW50IGlzIGdpdmVuLCBhbGwgY2FsbGJhY2tzIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBldmVudCdzIGNhbGxiYWNrXG4gICAgICAgIHF1ZXVlLlxuICAgICAgKi9cbiAgICAgICdvZmYnOiBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBhbGxDYWxsYmFja3MgPSBsaWIkcnN2cCRldmVudHMkJGNhbGxiYWNrc0Zvcih0aGlzKSwgY2FsbGJhY2tzLCBpbmRleDtcblxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgYWxsQ2FsbGJhY2tzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFja3MgPSBhbGxDYWxsYmFja3NbZXZlbnROYW1lXTtcblxuICAgICAgICBpbmRleCA9IGxpYiRyc3ZwJGV2ZW50cyQkaW5kZXhPZihjYWxsYmFja3MsIGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7IGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpOyB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAgVXNlIGB0cmlnZ2VyYCB0byBmaXJlIGN1c3RvbSBldmVudHMuIEZvciBleGFtcGxlOlxuXG4gICAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgICAgb2JqZWN0Lm9uKCdmb28nLCBmdW5jdGlvbigpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdmb28gZXZlbnQgaGFwcGVuZWQhJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBvYmplY3QudHJpZ2dlcignZm9vJyk7XG4gICAgICAgIC8vICdmb28gZXZlbnQgaGFwcGVuZWQhJyBsb2dnZWQgdG8gdGhlIGNvbnNvbGVcbiAgICAgICAgYGBgXG5cbiAgICAgICAgWW91IGNhbiBhbHNvIHBhc3MgYSB2YWx1ZSBhcyBhIHNlY29uZCBhcmd1bWVudCB0byBgdHJpZ2dlcmAgdGhhdCB3aWxsIGJlXG4gICAgICAgIHBhc3NlZCBhcyBhbiBhcmd1bWVudCB0byBhbGwgZXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgZXZlbnQ6XG5cbiAgICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgICBvYmplY3Qub24oJ2ZvbycsIGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZS5uYW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JqZWN0LnRyaWdnZXIoJ2ZvbycsIHsgbmFtZTogJ2JhcicgfSk7XG4gICAgICAgIC8vICdiYXInIGxvZ2dlZCB0byB0aGUgY29uc29sZVxuICAgICAgICBgYGBcblxuICAgICAgICBAbWV0aG9kIHRyaWdnZXJcbiAgICAgICAgQGZvciBSU1ZQLkV2ZW50VGFyZ2V0XG4gICAgICAgIEBwcml2YXRlXG4gICAgICAgIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gYmUgdHJpZ2dlcmVkXG4gICAgICAgIEBwYXJhbSB7QW55fSBvcHRpb25zIG9wdGlvbmFsIHZhbHVlIHRvIGJlIHBhc3NlZCB0byBhbnkgZXZlbnQgaGFuZGxlcnMgZm9yXG4gICAgICAgIHRoZSBnaXZlbiBgZXZlbnROYW1lYFxuICAgICAgKi9cbiAgICAgICd0cmlnZ2VyJzogZnVuY3Rpb24oZXZlbnROYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBhbGxDYWxsYmFja3MgPSBsaWIkcnN2cCRldmVudHMkJGNhbGxiYWNrc0Zvcih0aGlzKSwgY2FsbGJhY2tzLCBjYWxsYmFjaztcblxuICAgICAgICBpZiAoY2FsbGJhY2tzID0gYWxsQ2FsbGJhY2tzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAvLyBEb24ndCBjYWNoZSB0aGUgY2FsbGJhY2tzLmxlbmd0aCBzaW5jZSBpdCBtYXkgZ3Jvd1xuICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2tzW2ldO1xuXG4gICAgICAgICAgICBjYWxsYmFjayhvcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnID0ge1xuICAgICAgaW5zdHJ1bWVudDogZmFsc2VcbiAgICB9O1xuXG4gICAgbGliJHJzdnAkZXZlbnRzJCRkZWZhdWx0WydtaXhpbiddKGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnKTtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlndXJlKG5hbWUsIHZhbHVlKSB7XG4gICAgICBpZiAobmFtZSA9PT0gJ29uZXJyb3InKSB7XG4gICAgICAgIC8vIGhhbmRsZSBmb3IgbGVnYWN5IHVzZXJzIHRoYXQgZXhwZWN0IHRoZSBhY3R1YWxcbiAgICAgICAgLy8gZXJyb3IgdG8gYmUgcGFzc2VkIHRvIHRoZWlyIGZ1bmN0aW9uIGFkZGVkIHZpYVxuICAgICAgICAvLyBgUlNWUC5jb25maWd1cmUoJ29uZXJyb3InLCBzb21lRnVuY3Rpb25IZXJlKTtgXG4gICAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnWydvbiddKCdlcnJvcicsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZ1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnW25hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCRpbnN0cnVtZW50JCRxdWV1ZSA9IFtdO1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkaW5zdHJ1bWVudCQkc2NoZWR1bGVGbHVzaCgpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaWIkcnN2cCRpbnN0cnVtZW50JCRxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGVudHJ5ID0gbGliJHJzdnAkaW5zdHJ1bWVudCQkcXVldWVbaV07XG5cbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGVudHJ5LnBheWxvYWQ7XG5cbiAgICAgICAgICBwYXlsb2FkLmd1aWQgPSBwYXlsb2FkLmtleSArIHBheWxvYWQuaWQ7XG4gICAgICAgICAgcGF5bG9hZC5jaGlsZEd1aWQgPSBwYXlsb2FkLmtleSArIHBheWxvYWQuY2hpbGRJZDtcbiAgICAgICAgICBpZiAocGF5bG9hZC5lcnJvcikge1xuICAgICAgICAgICAgcGF5bG9hZC5zdGFjayA9IHBheWxvYWQuZXJyb3Iuc3RhY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWdbJ3RyaWdnZXInXShlbnRyeS5uYW1lLCBlbnRyeS5wYXlsb2FkKTtcbiAgICAgICAgfVxuICAgICAgICBsaWIkcnN2cCRpbnN0cnVtZW50JCRxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgfSwgNTApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGluc3RydW1lbnQkJGluc3RydW1lbnQoZXZlbnROYW1lLCBwcm9taXNlLCBjaGlsZCkge1xuICAgICAgaWYgKDEgPT09IGxpYiRyc3ZwJGluc3RydW1lbnQkJHF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGV2ZW50TmFtZSxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBrZXk6IHByb21pc2UuX2d1aWRLZXksXG4gICAgICAgICAgICBpZDogIHByb21pc2UuX2lkLFxuICAgICAgICAgICAgZXZlbnROYW1lOiBldmVudE5hbWUsXG4gICAgICAgICAgICBkZXRhaWw6IHByb21pc2UuX3Jlc3VsdCxcbiAgICAgICAgICAgIGNoaWxkSWQ6IGNoaWxkICYmIGNoaWxkLl9pZCxcbiAgICAgICAgICAgIGxhYmVsOiBwcm9taXNlLl9sYWJlbCxcbiAgICAgICAgICAgIHRpbWVTdGFtcDogbGliJHJzdnAkdXRpbHMkJG5vdygpLFxuICAgICAgICAgICAgZXJyb3I6IGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnW1wiaW5zdHJ1bWVudC13aXRoLXN0YWNrXCJdID8gbmV3IEVycm9yKHByb21pc2UuX2xhYmVsKSA6IG51bGxcbiAgICAgICAgICB9fSkpIHtcbiAgICAgICAgICAgIGxpYiRyc3ZwJGluc3RydW1lbnQkJHNjaGVkdWxlRmx1c2goKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJGluc3RydW1lbnQkJGRlZmF1bHQgPSBsaWIkcnN2cCRpbnN0cnVtZW50JCRpbnN0cnVtZW50O1xuXG4gICAgZnVuY3Rpb24gIGxpYiRyc3ZwJCRpbnRlcm5hbCQkd2l0aE93blByb21pc2UoKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkbm9vcCgpIHt9XG5cbiAgICB2YXIgbGliJHJzdnAkJGludGVybmFsJCRQRU5ESU5HICAgPSB2b2lkIDA7XG4gICAgdmFyIGxpYiRyc3ZwJCRpbnRlcm5hbCQkRlVMRklMTEVEID0gMTtcbiAgICB2YXIgbGliJHJzdnAkJGludGVybmFsJCRSRUpFQ1RFRCAgPSAyO1xuXG4gICAgdmFyIGxpYiRyc3ZwJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IgPSBuZXcgbGliJHJzdnAkJGludGVybmFsJCRFcnJvck9iamVjdCgpO1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRnZXRUaGVuKHByb21pc2UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW47XG4gICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSwgdGhlbikge1xuICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWcuYXN5bmMoZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICB2YXIgc2VhbGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvciA9IGxpYiRyc3ZwJCRpbnRlcm5hbCQkdHJ5VGhlbih0aGVuLCB0aGVuYWJsZSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBpZiAoc2VhbGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoZW5hYmxlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgIGlmIChzZWFsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0sICdTZXR0bGU6ICcgKyAocHJvbWlzZS5fbGFiZWwgfHwgJyB1bmtub3duIHByb21pc2UnKSk7XG5cbiAgICAgICAgaWYgKCFzZWFsZWQgJiYgZXJyb3IpIHtcbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSwgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSkge1xuICAgICAgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgdGhlbmFibGUuX29uRXJyb3IgPSBudWxsO1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHRoZW5hYmxlLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHRoZW5hYmxlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlKSB7XG4gICAgICBpZiAobWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3RvciA9PT0gcHJvbWlzZS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHRoZW4gPSBsaWIkcnN2cCQkaW50ZXJuYWwkJGdldFRoZW4obWF5YmVUaGVuYWJsZSk7XG5cbiAgICAgICAgaWYgKHRoZW4gPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IpIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkcnN2cCQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGliJHJzdnAkdXRpbHMkJGlzRnVuY3Rpb24odGhlbikpIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpIHtcbiAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChsaWIkcnN2cCR1dGlscyQkb2JqZWN0T3JGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgICAgIGlmIChwcm9taXNlLl9vbkVycm9yKSB7XG4gICAgICAgIHByb21pc2UuX29uRXJyb3IocHJvbWlzZS5fcmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgbGliJHJzdnAkJGludGVybmFsJCRwdWJsaXNoKHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSkge1xuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG5cbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fc3RhdGUgPSBsaWIkcnN2cCQkaW50ZXJuYWwkJEZVTEZJTExFRDtcblxuICAgICAgaWYgKHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAobGliJHJzdnAkY29uZmlnJCRjb25maWcuaW5zdHJ1bWVudCkge1xuICAgICAgICAgIGxpYiRyc3ZwJGluc3RydW1lbnQkJGRlZmF1bHQoJ2Z1bGZpbGxlZCcsIHByb21pc2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZy5hc3luYyhsaWIkcnN2cCQkaW50ZXJuYWwkJHB1Ymxpc2gsIHByb21pc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUkVKRUNURUQ7XG4gICAgICBwcm9taXNlLl9yZXN1bHQgPSByZWFzb247XG4gICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZy5hc3luYyhsaWIkcnN2cCQkaW50ZXJuYWwkJHB1Ymxpc2hSZWplY3Rpb24sIHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgICB2YXIgc3Vic2NyaWJlcnMgPSBwYXJlbnQuX3N1YnNjcmliZXJzO1xuICAgICAgdmFyIGxlbmd0aCA9IHN1YnNjcmliZXJzLmxlbmd0aDtcblxuICAgICAgcGFyZW50Ll9vbkVycm9yID0gbnVsbDtcblxuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoXSA9IGNoaWxkO1xuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoICsgbGliJHJzdnAkJGludGVybmFsJCRGVUxGSUxMRURdID0gb25GdWxmaWxsbWVudDtcbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aCArIGxpYiRyc3ZwJCRpbnRlcm5hbCQkUkVKRUNURURdICA9IG9uUmVqZWN0aW9uO1xuXG4gICAgICBpZiAobGVuZ3RoID09PSAwICYmIHBhcmVudC5fc3RhdGUpIHtcbiAgICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWcuYXN5bmMobGliJHJzdnAkJGludGVybmFsJCRwdWJsaXNoLCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcHVibGlzaChwcm9taXNlKSB7XG4gICAgICB2YXIgc3Vic2NyaWJlcnMgPSBwcm9taXNlLl9zdWJzY3JpYmVycztcbiAgICAgIHZhciBzZXR0bGVkID0gcHJvbWlzZS5fc3RhdGU7XG5cbiAgICAgIGlmIChsaWIkcnN2cCRjb25maWckJGNvbmZpZy5pbnN0cnVtZW50KSB7XG4gICAgICAgIGxpYiRyc3ZwJGluc3RydW1lbnQkJGRlZmF1bHQoc2V0dGxlZCA9PT0gbGliJHJzdnAkJGludGVybmFsJCRGVUxGSUxMRUQgPyAnZnVsZmlsbGVkJyA6ICdyZWplY3RlZCcsIHByb21pc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuXG4gICAgICB2YXIgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwgPSBwcm9taXNlLl9yZXN1bHQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgY2hpbGQgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICAgICAgY2FsbGJhY2sgPSBzdWJzY3JpYmVyc1tpICsgc2V0dGxlZF07XG5cbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2soZGV0YWlsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKSB7XG4gICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IgPSBuZXcgbGliJHJzdnAkJGludGVybmFsJCRFcnJvck9iamVjdCgpO1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCR0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZGV0YWlsKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUi5lcnJvciA9IGU7XG4gICAgICAgIHJldHVybiBsaWIkcnN2cCQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHNldHRsZWQsIHByb21pc2UsIGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgICAgIHZhciBoYXNDYWxsYmFjayA9IGxpYiRyc3ZwJHV0aWxzJCRpc0Z1bmN0aW9uKGNhbGxiYWNrKSxcbiAgICAgICAgICB2YWx1ZSwgZXJyb3IsIHN1Y2NlZWRlZCwgZmFpbGVkO1xuXG4gICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgdmFsdWUgPSBsaWIkcnN2cCQkaW50ZXJuYWwkJHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IpIHtcbiAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgICAgIGVycm9yID0gdmFsdWUuZXJyb3I7XG4gICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkcnN2cCQkaW50ZXJuYWwkJHdpdGhPd25Qcm9taXNlKCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IGRldGFpbDtcbiAgICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgLy8gbm9vcFxuICAgICAgfSBlbHNlIGlmIChoYXNDYWxsYmFjayAmJiBzdWNjZWVkZWQpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmFpbGVkKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gbGliJHJzdnAkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gbGliJHJzdnAkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRpbml0aWFsaXplUHJvbWlzZShwcm9taXNlLCByZXNvbHZlcikge1xuICAgICAgdmFyIHJlc29sdmVkID0gZmFsc2U7XG4gICAgICB0cnkge1xuICAgICAgICByZXNvbHZlcihmdW5jdGlvbiByZXNvbHZlUHJvbWlzZSh2YWx1ZSl7XG4gICAgICAgICAgaWYgKHJlc29sdmVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbiByZWplY3RQcm9taXNlKHJlYXNvbikge1xuICAgICAgICAgIGlmIChyZXNvbHZlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkZW51bWVyYXRvciQkbWFrZVNldHRsZWRSZXN1bHQoc3RhdGUsIHBvc2l0aW9uLCB2YWx1ZSkge1xuICAgICAgaWYgKHN0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJEZVTEZJTExFRCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXRlOiAnZnVsZmlsbGVkJyxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhdGU6ICdyZWplY3RlZCcsXG4gICAgICAgICAgcmVhc29uOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGVudW1lcmF0b3IkJEVudW1lcmF0b3IoQ29uc3RydWN0b3IsIGlucHV0LCBhYm9ydE9uUmVqZWN0LCBsYWJlbCkge1xuICAgICAgdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgICAgdGhpcy5wcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRyc3ZwJCRpbnRlcm5hbCQkbm9vcCwgbGFiZWwpO1xuICAgICAgdGhpcy5fYWJvcnRPblJlamVjdCA9IGFib3J0T25SZWplY3Q7XG5cbiAgICAgIGlmICh0aGlzLl92YWxpZGF0ZUlucHV0KGlucHV0KSkge1xuICAgICAgICB0aGlzLl9pbnB1dCAgICAgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5sZW5ndGggICAgID0gaW5wdXQubGVuZ3RoO1xuICAgICAgICB0aGlzLl9yZW1haW5pbmcgPSBpbnB1dC5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5faW5pdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aCB8fCAwO1xuICAgICAgICAgIHRoaXMuX2VudW1lcmF0ZSgpO1xuICAgICAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdCh0aGlzLnByb21pc2UsIHRoaXMuX3ZhbGlkYXRpb25FcnJvcigpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkZW51bWVyYXRvciQkZGVmYXVsdCA9IGxpYiRyc3ZwJGVudW1lcmF0b3IkJEVudW1lcmF0b3I7XG5cbiAgICBsaWIkcnN2cCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fdmFsaWRhdGVJbnB1dCA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICByZXR1cm4gbGliJHJzdnAkdXRpbHMkJGlzQXJyYXkoaW5wdXQpO1xuICAgIH07XG5cbiAgICBsaWIkcnN2cCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fdmFsaWRhdGlvbkVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXknKTtcbiAgICB9O1xuXG4gICAgbGliJHJzdnAkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3Jlc3VsdCA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCk7XG4gICAgfTtcblxuICAgIGxpYiRyc3ZwJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9lbnVtZXJhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsZW5ndGggID0gdGhpcy5sZW5ndGg7XG4gICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcbiAgICAgIHZhciBpbnB1dCAgID0gdGhpcy5faW5wdXQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBwcm9taXNlLl9zdGF0ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRQRU5ESU5HICYmIGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9lYWNoRW50cnkoaW5wdXRbaV0sIGkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsaWIkcnN2cCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZWFjaEVudHJ5ID0gZnVuY3Rpb24oZW50cnksIGkpIHtcbiAgICAgIHZhciBjID0gdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvcjtcbiAgICAgIGlmIChsaWIkcnN2cCR1dGlscyQkaXNNYXliZVRoZW5hYmxlKGVudHJ5KSkge1xuICAgICAgICBpZiAoZW50cnkuY29uc3RydWN0b3IgPT09IGMgJiYgZW50cnkuX3N0YXRlICE9PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgICBlbnRyeS5fb25FcnJvciA9IG51bGw7XG4gICAgICAgICAgdGhpcy5fc2V0dGxlZEF0KGVudHJ5Ll9zdGF0ZSwgaSwgZW50cnkuX3Jlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KGMucmVzb2x2ZShlbnRyeSksIGkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW1haW5pbmctLTtcbiAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gdGhpcy5fbWFrZVJlc3VsdChsaWIkcnN2cCQkaW50ZXJuYWwkJEZVTEZJTExFRCwgaSwgZW50cnkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsaWIkcnN2cCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fc2V0dGxlZEF0ID0gZnVuY3Rpb24oc3RhdGUsIGksIHZhbHVlKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcblxuICAgICAgaWYgKHByb21pc2UuX3N0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG5cbiAgICAgICAgaWYgKHRoaXMuX2Fib3J0T25SZWplY3QgJiYgc3RhdGUgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gdGhpcy5fbWFrZVJlc3VsdChzdGF0ZSwgaSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxpYiRyc3ZwJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9tYWtlUmVzdWx0ID0gZnVuY3Rpb24oc3RhdGUsIGksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxpYiRyc3ZwJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl93aWxsU2V0dGxlQXQgPSBmdW5jdGlvbihwcm9taXNlLCBpKSB7XG4gICAgICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG5cbiAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHByb21pc2UsIHVuZGVmaW5lZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KGxpYiRyc3ZwJCRpbnRlcm5hbCQkRlVMRklMTEVELCBpLCB2YWx1ZSk7XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KGxpYiRyc3ZwJCRpbnRlcm5hbCQkUkVKRUNURUQsIGksIHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHByb21pc2UkYWxsJCRhbGwoZW50cmllcywgbGFiZWwpIHtcbiAgICAgIHJldHVybiBuZXcgbGliJHJzdnAkZW51bWVyYXRvciQkZGVmYXVsdCh0aGlzLCBlbnRyaWVzLCB0cnVlIC8qIGFib3J0IG9uIHJlamVjdCAqLywgbGFiZWwpLnByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRwcm9taXNlJGFsbCQkZGVmYXVsdCA9IGxpYiRyc3ZwJHByb21pc2UkYWxsJCRhbGw7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcHJvbWlzZSRyYWNlJCRyYWNlKGVudHJpZXMsIGxhYmVsKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJHJzdnAkJGludGVybmFsJCRub29wLCBsYWJlbCk7XG5cbiAgICAgIGlmICghbGliJHJzdnAkdXRpbHMkJGlzQXJyYXkoZW50cmllcykpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLicpKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcblxuICAgICAgZnVuY3Rpb24gb25GdWxmaWxsbWVudCh2YWx1ZSkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvblJlamVjdGlvbihyZWFzb24pIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IHByb21pc2UuX3N0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcgJiYgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkc3Vic2NyaWJlKENvbnN0cnVjdG9yLnJlc29sdmUoZW50cmllc1tpXSksIHVuZGVmaW5lZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJHByb21pc2UkcmFjZSQkZGVmYXVsdCA9IGxpYiRyc3ZwJHByb21pc2UkcmFjZSQkcmFjZTtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRwcm9taXNlJHJlc29sdmUkJHJlc29sdmUob2JqZWN0LCBsYWJlbCkge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICAgIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0LmNvbnN0cnVjdG9yID09PSBDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcihsaWIkcnN2cCQkaW50ZXJuYWwkJG5vb3AsIGxhYmVsKTtcbiAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCBvYmplY3QpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQgPSBsaWIkcnN2cCRwcm9taXNlJHJlc29sdmUkJHJlc29sdmU7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcHJvbWlzZSRyZWplY3QkJHJlamVjdChyZWFzb24sIGxhYmVsKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRyc3ZwJCRpbnRlcm5hbCQkbm9vcCwgbGFiZWwpO1xuICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkcHJvbWlzZSRyZWplY3QkJGRlZmF1bHQgPSBsaWIkcnN2cCRwcm9taXNlJHJlamVjdCQkcmVqZWN0O1xuXG4gICAgdmFyIGxpYiRyc3ZwJHByb21pc2UkJGd1aWRLZXkgPSAncnN2cF8nICsgbGliJHJzdnAkdXRpbHMkJG5vdygpICsgJy0nO1xuICAgIHZhciBsaWIkcnN2cCRwcm9taXNlJCRjb3VudGVyID0gMDtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHByb21pc2UkJG5lZWRzUmVzb2x2ZXIoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcHJvbWlzZSQkbmVlZHNOZXcoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgUHJvbWlzZSBvYmplY3RzIHJlcHJlc2VudCB0aGUgZXZlbnR1YWwgcmVzdWx0IG9mIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb24uIFRoZVxuICAgICAgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCwgd2hpY2hcbiAgICAgIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNl4oCZcyBldmVudHVhbCB2YWx1ZSBvciB0aGUgcmVhc29uXG4gICAgICB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICAgICAgVGVybWlub2xvZ3lcbiAgICAgIC0tLS0tLS0tLS0tXG5cbiAgICAgIC0gYHByb21pc2VgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB3aXRoIGEgYHRoZW5gIG1ldGhvZCB3aG9zZSBiZWhhdmlvciBjb25mb3JtcyB0byB0aGlzIHNwZWNpZmljYXRpb24uXG4gICAgICAtIGB0aGVuYWJsZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBhIGB0aGVuYCBtZXRob2QuXG4gICAgICAtIGB2YWx1ZWAgaXMgYW55IGxlZ2FsIEphdmFTY3JpcHQgdmFsdWUgKGluY2x1ZGluZyB1bmRlZmluZWQsIGEgdGhlbmFibGUsIG9yIGEgcHJvbWlzZSkuXG4gICAgICAtIGBleGNlcHRpb25gIGlzIGEgdmFsdWUgdGhhdCBpcyB0aHJvd24gdXNpbmcgdGhlIHRocm93IHN0YXRlbWVudC5cbiAgICAgIC0gYHJlYXNvbmAgaXMgYSB2YWx1ZSB0aGF0IGluZGljYXRlcyB3aHkgYSBwcm9taXNlIHdhcyByZWplY3RlZC5cbiAgICAgIC0gYHNldHRsZWRgIHRoZSBmaW5hbCByZXN0aW5nIHN0YXRlIG9mIGEgcHJvbWlzZSwgZnVsZmlsbGVkIG9yIHJlamVjdGVkLlxuXG4gICAgICBBIHByb21pc2UgY2FuIGJlIGluIG9uZSBvZiB0aHJlZSBzdGF0ZXM6IHBlbmRpbmcsIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQuXG5cbiAgICAgIFByb21pc2VzIHRoYXQgYXJlIGZ1bGZpbGxlZCBoYXZlIGEgZnVsZmlsbG1lbnQgdmFsdWUgYW5kIGFyZSBpbiB0aGUgZnVsZmlsbGVkXG4gICAgICBzdGF0ZS4gIFByb21pc2VzIHRoYXQgYXJlIHJlamVjdGVkIGhhdmUgYSByZWplY3Rpb24gcmVhc29uIGFuZCBhcmUgaW4gdGhlXG4gICAgICByZWplY3RlZCBzdGF0ZS4gIEEgZnVsZmlsbG1lbnQgdmFsdWUgaXMgbmV2ZXIgYSB0aGVuYWJsZS5cblxuICAgICAgUHJvbWlzZXMgY2FuIGFsc28gYmUgc2FpZCB0byAqcmVzb2x2ZSogYSB2YWx1ZS4gIElmIHRoaXMgdmFsdWUgaXMgYWxzbyBhXG4gICAgICBwcm9taXNlLCB0aGVuIHRoZSBvcmlnaW5hbCBwcm9taXNlJ3Mgc2V0dGxlZCBzdGF0ZSB3aWxsIG1hdGNoIHRoZSB2YWx1ZSdzXG4gICAgICBzZXR0bGVkIHN0YXRlLiAgU28gYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCByZWplY3RzIHdpbGxcbiAgICAgIGl0c2VsZiByZWplY3QsIGFuZCBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IGZ1bGZpbGxzIHdpbGxcbiAgICAgIGl0c2VsZiBmdWxmaWxsLlxuXG5cbiAgICAgIEJhc2ljIFVzYWdlOlxuICAgICAgLS0tLS0tLS0tLS0tXG5cbiAgICAgIGBgYGpzXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBvbiBzdWNjZXNzXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuXG4gICAgICAgIC8vIG9uIGZhaWx1cmVcbiAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICB9KTtcblxuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgLy8gb24gcmVqZWN0aW9uXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBZHZhbmNlZCBVc2FnZTpcbiAgICAgIC0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBQcm9taXNlcyBzaGluZSB3aGVuIGFic3RyYWN0aW5nIGF3YXkgYXN5bmNocm9ub3VzIGludGVyYWN0aW9ucyBzdWNoIGFzXG4gICAgICBgWE1MSHR0cFJlcXVlc3Rgcy5cblxuICAgICAgYGBganNcbiAgICAgIGZ1bmN0aW9uIGdldEpTT04odXJsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBoYW5kbGVyO1xuICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgeGhyLnNlbmQoKTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSB0aGlzLkRPTkUpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2dldEpTT046IGAnICsgdXJsICsgJ2AgZmFpbGVkIHdpdGggc3RhdHVzOiBbJyArIHRoaXMuc3RhdHVzICsgJ10nKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZ2V0SlNPTignL3Bvc3RzLmpzb24nKS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAvLyBvbiByZWplY3Rpb25cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFVubGlrZSBjYWxsYmFja3MsIHByb21pc2VzIGFyZSBncmVhdCBjb21wb3NhYmxlIHByaW1pdGl2ZXMuXG5cbiAgICAgIGBgYGpzXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldEpTT04oJy9wb3N0cycpLFxuICAgICAgICBnZXRKU09OKCcvY29tbWVudHMnKVxuICAgICAgXSkudGhlbihmdW5jdGlvbih2YWx1ZXMpe1xuICAgICAgICB2YWx1ZXNbMF0gLy8gPT4gcG9zdHNKU09OXG4gICAgICAgIHZhbHVlc1sxXSAvLyA9PiBjb21tZW50c0pTT05cblxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQGNsYXNzIFJTVlAuUHJvbWlzZVxuICAgICAgQHBhcmFtIHtmdW5jdGlvbn0gcmVzb2x2ZXJcbiAgICAgIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCBvcHRpb25hbCBzdHJpbmcgZm9yIGxhYmVsaW5nIHRoZSBwcm9taXNlLlxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRwcm9taXNlJCRQcm9taXNlKHJlc29sdmVyLCBsYWJlbCkge1xuICAgICAgdGhpcy5faWQgPSBsaWIkcnN2cCRwcm9taXNlJCRjb3VudGVyKys7XG4gICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xuICAgICAgdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuXG4gICAgICBpZiAobGliJHJzdnAkY29uZmlnJCRjb25maWcuaW5zdHJ1bWVudCkge1xuICAgICAgICBsaWIkcnN2cCRpbnN0cnVtZW50JCRkZWZhdWx0KCdjcmVhdGVkJywgdGhpcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaWIkcnN2cCQkaW50ZXJuYWwkJG5vb3AgIT09IHJlc29sdmVyKSB7XG4gICAgICAgIGlmICghbGliJHJzdnAkdXRpbHMkJGlzRnVuY3Rpb24ocmVzb2x2ZXIpKSB7XG4gICAgICAgICAgbGliJHJzdnAkcHJvbWlzZSQkbmVlZHNSZXNvbHZlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIGxpYiRyc3ZwJHByb21pc2UkJFByb21pc2UpKSB7XG4gICAgICAgICAgbGliJHJzdnAkcHJvbWlzZSQkbmVlZHNOZXcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UodGhpcywgcmVzb2x2ZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0ID0gbGliJHJzdnAkcHJvbWlzZSQkUHJvbWlzZTtcblxuICAgIC8vIGRlcHJlY2F0ZWRcbiAgICBsaWIkcnN2cCRwcm9taXNlJCRQcm9taXNlLmNhc3QgPSBsaWIkcnN2cCRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQ7XG4gICAgbGliJHJzdnAkcHJvbWlzZSQkUHJvbWlzZS5hbGwgPSBsaWIkcnN2cCRwcm9taXNlJGFsbCQkZGVmYXVsdDtcbiAgICBsaWIkcnN2cCRwcm9taXNlJCRQcm9taXNlLnJhY2UgPSBsaWIkcnN2cCRwcm9taXNlJHJhY2UkJGRlZmF1bHQ7XG4gICAgbGliJHJzdnAkcHJvbWlzZSQkUHJvbWlzZS5yZXNvbHZlID0gbGliJHJzdnAkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0O1xuICAgIGxpYiRyc3ZwJHByb21pc2UkJFByb21pc2UucmVqZWN0ID0gbGliJHJzdnAkcHJvbWlzZSRyZWplY3QkJGRlZmF1bHQ7XG5cbiAgICBsaWIkcnN2cCRwcm9taXNlJCRQcm9taXNlLnByb3RvdHlwZSA9IHtcbiAgICAgIGNvbnN0cnVjdG9yOiBsaWIkcnN2cCRwcm9taXNlJCRQcm9taXNlLFxuXG4gICAgICBfZ3VpZEtleTogbGliJHJzdnAkcHJvbWlzZSQkZ3VpZEtleSxcblxuICAgICAgX29uRXJyb3I6IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWcuYXN5bmMoZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5fb25FcnJvcikge1xuICAgICAgICAgICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZ1sndHJpZ2dlciddKCdlcnJvcicsIHJlYXNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfSxcblxuICAgIC8qKlxuICAgICAgVGhlIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsXG4gICAgICB3aGljaCByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZVxuICAgICAgcmVhc29uIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uKHVzZXIpe1xuICAgICAgICAvLyB1c2VyIGlzIGF2YWlsYWJsZVxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gdXNlciBpcyB1bmF2YWlsYWJsZSwgYW5kIHlvdSBhcmUgZ2l2ZW4gdGhlIHJlYXNvbiB3aHlcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIENoYWluaW5nXG4gICAgICAtLS0tLS0tLVxuXG4gICAgICBUaGUgcmV0dXJuIHZhbHVlIG9mIGB0aGVuYCBpcyBpdHNlbGYgYSBwcm9taXNlLiAgVGhpcyBzZWNvbmQsICdkb3duc3RyZWFtJ1xuICAgICAgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZpcnN0IHByb21pc2UncyBmdWxmaWxsbWVudFxuICAgICAgb3IgcmVqZWN0aW9uIGhhbmRsZXIsIG9yIHJlamVjdGVkIGlmIHRoZSBoYW5kbGVyIHRocm93cyBhbiBleGNlcHRpb24uXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHVzZXIubmFtZTtcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgcmV0dXJuICdkZWZhdWx0IG5hbWUnO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodXNlck5hbWUpIHtcbiAgICAgICAgLy8gSWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGB1c2VyTmFtZWAgd2lsbCBiZSB0aGUgdXNlcidzIG5hbWUsIG90aGVyd2lzZSBpdFxuICAgICAgICAvLyB3aWxsIGJlIGAnZGVmYXVsdCBuYW1lJ2BcbiAgICAgIH0pO1xuXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScpO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gaWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGByZWFzb25gIHdpbGwgYmUgJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jy5cbiAgICAgICAgLy8gSWYgYGZpbmRVc2VyYCByZWplY3RlZCwgYHJlYXNvbmAgd2lsbCBiZSAnYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScuXG4gICAgICB9KTtcbiAgICAgIGBgYFxuICAgICAgSWYgdGhlIGRvd25zdHJlYW0gcHJvbWlzZSBkb2VzIG5vdCBzcGVjaWZ5IGEgcmVqZWN0aW9uIGhhbmRsZXIsIHJlamVjdGlvbiByZWFzb25zIHdpbGwgYmUgcHJvcGFnYXRlZCBmdXJ0aGVyIGRvd25zdHJlYW0uXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFBlZGFnb2dpY2FsRXhjZXB0aW9uKCdVcHN0cmVhbSBlcnJvcicpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBUaGUgYFBlZGdhZ29jaWFsRXhjZXB0aW9uYCBpcyBwcm9wYWdhdGVkIGFsbCB0aGUgd2F5IGRvd24gdG8gaGVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQXNzaW1pbGF0aW9uXG4gICAgICAtLS0tLS0tLS0tLS1cblxuICAgICAgU29tZXRpbWVzIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBwcm9wYWdhdGUgdG8gYSBkb3duc3RyZWFtIHByb21pc2UgY2FuIG9ubHkgYmVcbiAgICAgIHJldHJpZXZlZCBhc3luY2hyb25vdXNseS4gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgYnkgcmV0dXJuaW5nIGEgcHJvbWlzZSBpbiB0aGVcbiAgICAgIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvbiBoYW5kbGVyLiBUaGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgdGhlbiBiZSBwZW5kaW5nXG4gICAgICB1bnRpbCB0aGUgcmV0dXJuZWQgcHJvbWlzZSBpcyBzZXR0bGVkLiBUaGlzIGlzIGNhbGxlZCAqYXNzaW1pbGF0aW9uKi5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgICAvLyBUaGUgdXNlcidzIGNvbW1lbnRzIGFyZSBub3cgYXZhaWxhYmxlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBJZiB0aGUgYXNzaW1saWF0ZWQgcHJvbWlzZSByZWplY3RzLCB0aGVuIHRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCBhbHNvIHJlamVjdC5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIGZ1bGZpbGxzLCB3ZSdsbCBoYXZlIHRoZSB2YWx1ZSBoZXJlXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgcmVqZWN0cywgd2UnbGwgaGF2ZSB0aGUgcmVhc29uIGhlcmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFNpbXBsZSBFeGFtcGxlXG4gICAgICAtLS0tLS0tLS0tLS0tLVxuXG4gICAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGZpbmRSZXN1bHQoKTtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfVxuICAgICAgYGBgXG5cbiAgICAgIEVycmJhY2sgRXhhbXBsZVxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFJlc3VsdChmdW5jdGlvbihyZXN1bHQsIGVycil7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAvLyBmYWlsdXJlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBQcm9taXNlIEV4YW1wbGU7XG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIGZpbmRSZXN1bHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFkdmFuY2VkIEV4YW1wbGVcbiAgICAgIC0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgdmFyIGF1dGhvciwgYm9va3M7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF1dGhvciA9IGZpbmRBdXRob3IoKTtcbiAgICAgICAgYm9va3MgID0gZmluZEJvb2tzQnlBdXRob3IoYXV0aG9yKTtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfVxuICAgICAgYGBgXG5cbiAgICAgIEVycmJhY2sgRXhhbXBsZVxuXG4gICAgICBgYGBqc1xuXG4gICAgICBmdW5jdGlvbiBmb3VuZEJvb2tzKGJvb2tzKSB7XG5cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZmFpbHVyZShyZWFzb24pIHtcblxuICAgICAgfVxuXG4gICAgICBmaW5kQXV0aG9yKGZ1bmN0aW9uKGF1dGhvciwgZXJyKXtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICAvLyBmYWlsdXJlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZpbmRCb29va3NCeUF1dGhvcihhdXRob3IsIGZ1bmN0aW9uKGJvb2tzLCBlcnIpIHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgZm91bmRCb29rcyhib29rcyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgICAgICAgICAgIGZhaWx1cmUocmVhc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBQcm9taXNlIEV4YW1wbGU7XG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIGZpbmRBdXRob3IoKS5cbiAgICAgICAgdGhlbihmaW5kQm9va3NCeUF1dGhvcikuXG4gICAgICAgIHRoZW4oZnVuY3Rpb24oYm9va3Mpe1xuICAgICAgICAgIC8vIGZvdW5kIGJvb2tzXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQG1ldGhvZCB0aGVuXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvbkZ1bGZpbGxlZFxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3RlZFxuICAgICAgQHBhcmFtIHtTdHJpbmd9IGxhYmVsIG9wdGlvbmFsIHN0cmluZyBmb3IgbGFiZWxpbmcgdGhlIHByb21pc2UuXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICB0aGVuOiBmdW5jdGlvbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbiwgbGFiZWwpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXM7XG4gICAgICAgIHZhciBzdGF0ZSA9IHBhcmVudC5fc3RhdGU7XG5cbiAgICAgICAgaWYgKHN0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJEZVTEZJTExFRCAmJiAhb25GdWxmaWxsbWVudCB8fCBzdGF0ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRSRUpFQ1RFRCAmJiAhb25SZWplY3Rpb24pIHtcbiAgICAgICAgICBpZiAobGliJHJzdnAkY29uZmlnJCRjb25maWcuaW5zdHJ1bWVudCkge1xuICAgICAgICAgICAgbGliJHJzdnAkaW5zdHJ1bWVudCQkZGVmYXVsdCgnY2hhaW5lZCcsIHRoaXMsIHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudC5fb25FcnJvciA9IG51bGw7XG5cbiAgICAgICAgdmFyIGNoaWxkID0gbmV3IHRoaXMuY29uc3RydWN0b3IobGliJHJzdnAkJGludGVybmFsJCRub29wLCBsYWJlbCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBwYXJlbnQuX3Jlc3VsdDtcblxuICAgICAgICBpZiAobGliJHJzdnAkY29uZmlnJCRjb25maWcuaW5zdHJ1bWVudCkge1xuICAgICAgICAgIGxpYiRyc3ZwJGluc3RydW1lbnQkJGRlZmF1bHQoJ2NoYWluZWQnLCBwYXJlbnQsIGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1tzdGF0ZSAtIDFdO1xuICAgICAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLmFzeW5jKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHN0YXRlLCBjaGlsZCwgY2FsbGJhY2ssIHJlc3VsdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfSxcblxuICAgIC8qKlxuICAgICAgYGNhdGNoYCBpcyBzaW1wbHkgc3VnYXIgZm9yIGB0aGVuKHVuZGVmaW5lZCwgb25SZWplY3Rpb24pYCB3aGljaCBtYWtlcyBpdCB0aGUgc2FtZVxuICAgICAgYXMgdGhlIGNhdGNoIGJsb2NrIG9mIGEgdHJ5L2NhdGNoIHN0YXRlbWVudC5cblxuICAgICAgYGBganNcbiAgICAgIGZ1bmN0aW9uIGZpbmRBdXRob3IoKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZG4ndCBmaW5kIHRoYXQgYXV0aG9yJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHN5bmNocm9ub3VzXG4gICAgICB0cnkge1xuICAgICAgICBmaW5kQXV0aG9yKCk7XG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfVxuXG4gICAgICAvLyBhc3luYyB3aXRoIHByb21pc2VzXG4gICAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBtZXRob2QgY2F0Y2hcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0aW9uXG4gICAgICBAcGFyYW0ge1N0cmluZ30gbGFiZWwgb3B0aW9uYWwgc3RyaW5nIGZvciBsYWJlbGluZyB0aGUgcHJvbWlzZS5cbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cbiAgICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0aW9uLCBsYWJlbCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uLCBsYWJlbCk7XG4gICAgICB9LFxuXG4gICAgLyoqXG4gICAgICBgZmluYWxseWAgd2lsbCBiZSBpbnZva2VkIHJlZ2FyZGxlc3Mgb2YgdGhlIHByb21pc2UncyBmYXRlIGp1c3QgYXMgbmF0aXZlXG4gICAgICB0cnkvY2F0Y2gvZmluYWxseSBiZWhhdmVzXG5cbiAgICAgIFN5bmNocm9ub3VzIGV4YW1wbGU6XG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kQXV0aG9yKCkge1xuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQXV0aG9yKCk7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmaW5kQXV0aG9yKCk7IC8vIHN1Y2NlZWQgb3IgZmFpbFxuICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICByZXR1cm4gZmluZE90aGVyQXV0aGVyKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICAvLyBhbHdheXMgcnVuc1xuICAgICAgICAvLyBkb2Vzbid0IGFmZmVjdCB0aGUgcmV0dXJuIHZhbHVlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgQXN5bmNocm9ub3VzIGV4YW1wbGU6XG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgcmV0dXJuIGZpbmRPdGhlckF1dGhlcigpO1xuICAgICAgfSkuZmluYWxseShmdW5jdGlvbigpe1xuICAgICAgICAvLyBhdXRob3Igd2FzIGVpdGhlciBmb3VuZCwgb3Igbm90XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAbWV0aG9kIGZpbmFsbHlcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICBAcGFyYW0ge1N0cmluZ30gbGFiZWwgb3B0aW9uYWwgc3RyaW5nIGZvciBsYWJlbGluZyB0aGUgcHJvbWlzZS5cbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cbiAgICAgICdmaW5hbGx5JzogZnVuY3Rpb24oY2FsbGJhY2ssIGxhYmVsKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCBsYWJlbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFsbCRzZXR0bGVkJCRBbGxTZXR0bGVkKENvbnN0cnVjdG9yLCBlbnRyaWVzLCBsYWJlbCkge1xuICAgICAgdGhpcy5fc3VwZXJDb25zdHJ1Y3RvcihDb25zdHJ1Y3RvciwgZW50cmllcywgZmFsc2UgLyogZG9uJ3QgYWJvcnQgb24gcmVqZWN0ICovLCBsYWJlbCk7XG4gICAgfVxuXG4gICAgbGliJHJzdnAkYWxsJHNldHRsZWQkJEFsbFNldHRsZWQucHJvdG90eXBlID0gbGliJHJzdnAkdXRpbHMkJG9fY3JlYXRlKGxpYiRyc3ZwJGVudW1lcmF0b3IkJGRlZmF1bHQucHJvdG90eXBlKTtcbiAgICBsaWIkcnN2cCRhbGwkc2V0dGxlZCQkQWxsU2V0dGxlZC5wcm90b3R5cGUuX3N1cGVyQ29uc3RydWN0b3IgPSBsaWIkcnN2cCRlbnVtZXJhdG9yJCRkZWZhdWx0O1xuICAgIGxpYiRyc3ZwJGFsbCRzZXR0bGVkJCRBbGxTZXR0bGVkLnByb3RvdHlwZS5fbWFrZVJlc3VsdCA9IGxpYiRyc3ZwJGVudW1lcmF0b3IkJG1ha2VTZXR0bGVkUmVzdWx0O1xuICAgIGxpYiRyc3ZwJGFsbCRzZXR0bGVkJCRBbGxTZXR0bGVkLnByb3RvdHlwZS5fdmFsaWRhdGlvbkVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdhbGxTZXR0bGVkIG11c3QgYmUgY2FsbGVkIHdpdGggYW4gYXJyYXknKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkYWxsJHNldHRsZWQkJGFsbFNldHRsZWQoZW50cmllcywgbGFiZWwpIHtcbiAgICAgIHJldHVybiBuZXcgbGliJHJzdnAkYWxsJHNldHRsZWQkJEFsbFNldHRsZWQobGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdCwgZW50cmllcywgbGFiZWwpLnByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRhbGwkc2V0dGxlZCQkZGVmYXVsdCA9IGxpYiRyc3ZwJGFsbCRzZXR0bGVkJCRhbGxTZXR0bGVkO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFsbCQkYWxsKGFycmF5LCBsYWJlbCkge1xuICAgICAgcmV0dXJuIGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQuYWxsKGFycmF5LCBsYWJlbCk7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRhbGwkJGRlZmF1bHQgPSBsaWIkcnN2cCRhbGwkJGFsbDtcbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkbGVuID0gMDtcbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkdG9TdHJpbmcgPSB7fS50b1N0cmluZztcbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkdmVydHhOZXh0O1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFzYXAkJGFzYXAoY2FsbGJhY2ssIGFyZykge1xuICAgICAgbGliJHJzdnAkYXNhcCQkcXVldWVbbGliJHJzdnAkYXNhcCQkbGVuXSA9IGNhbGxiYWNrO1xuICAgICAgbGliJHJzdnAkYXNhcCQkcXVldWVbbGliJHJzdnAkYXNhcCQkbGVuICsgMV0gPSBhcmc7XG4gICAgICBsaWIkcnN2cCRhc2FwJCRsZW4gKz0gMjtcbiAgICAgIGlmIChsaWIkcnN2cCRhc2FwJCRsZW4gPT09IDIpIHtcbiAgICAgICAgLy8gSWYgbGVuIGlzIDEsIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIHNjaGVkdWxlIGFuIGFzeW5jIGZsdXNoLlxuICAgICAgICAvLyBJZiBhZGRpdGlvbmFsIGNhbGxiYWNrcyBhcmUgcXVldWVkIGJlZm9yZSB0aGUgcXVldWUgaXMgZmx1c2hlZCwgdGhleVxuICAgICAgICAvLyB3aWxsIGJlIHByb2Nlc3NlZCBieSB0aGlzIGZsdXNoIHRoYXQgd2UgYXJlIHNjaGVkdWxpbmcuXG4gICAgICAgIGxpYiRyc3ZwJGFzYXAkJHNjaGVkdWxlRmx1c2goKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkZGVmYXVsdCA9IGxpYiRyc3ZwJGFzYXAkJGFzYXA7XG5cbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkYnJvd3NlcldpbmRvdyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgdmFyIGxpYiRyc3ZwJGFzYXAkJGJyb3dzZXJHbG9iYWwgPSBsaWIkcnN2cCRhc2FwJCRicm93c2VyV2luZG93IHx8IHt9O1xuICAgIHZhciBsaWIkcnN2cCRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGxpYiRyc3ZwJGFzYXAkJGJyb3dzZXJHbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBsaWIkcnN2cCRhc2FwJCRicm93c2VyR2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgdmFyIGxpYiRyc3ZwJGFzYXAkJGlzTm9kZSA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5cbiAgICAvLyB0ZXN0IGZvciB3ZWIgd29ya2VyIGJ1dCBub3QgaW4gSUUxMFxuICAgIHZhciBsaWIkcnN2cCRhc2FwJCRpc1dvcmtlciA9IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJztcblxuICAgIC8vIG5vZGVcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRhc2FwJCR1c2VOZXh0VGljaygpIHtcbiAgICAgIHZhciBuZXh0VGljayA9IHByb2Nlc3MubmV4dFRpY2s7XG4gICAgICAvLyBub2RlIHZlcnNpb24gMC4xMC54IGRpc3BsYXlzIGEgZGVwcmVjYXRpb24gd2FybmluZyB3aGVuIG5leHRUaWNrIGlzIHVzZWQgcmVjdXJzaXZlbHlcbiAgICAgIC8vIHNldEltbWVkaWF0ZSBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkIGluc3RlYWRcbiAgICAgIHZhciB2ZXJzaW9uID0gcHJvY2Vzcy52ZXJzaW9ucy5ub2RlLm1hdGNoKC9eKD86KFxcZCspXFwuKT8oPzooXFxkKylcXC4pPyhcXCp8XFxkKykkLyk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2ZXJzaW9uKSAmJiB2ZXJzaW9uWzFdID09PSAnMCcgJiYgdmVyc2lvblsyXSA9PT0gJzEwJykge1xuICAgICAgICBuZXh0VGljayA9IHNldEltbWVkaWF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbmV4dFRpY2sobGliJHJzdnAkYXNhcCQkZmx1c2gpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB2ZXJ0eFxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFzYXAkJHVzZVZlcnR4VGltZXIoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpYiRyc3ZwJGFzYXAkJHZlcnR4TmV4dChsaWIkcnN2cCRhc2FwJCRmbHVzaCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFzYXAkJHVzZU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgbGliJHJzdnAkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIobGliJHJzdnAkYXNhcCQkZmx1c2gpO1xuICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBub2RlLmRhdGEgPSAoaXRlcmF0aW9ucyA9ICsraXRlcmF0aW9ucyAlIDIpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB3ZWIgd29ya2VyXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkYXNhcCQkdXNlTWVzc2FnZUNoYW5uZWwoKSB7XG4gICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaWIkcnN2cCRhc2FwJCRmbHVzaDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFzYXAkJHVzZVNldFRpbWVvdXQoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQobGliJHJzdnAkYXNhcCQkZmx1c2gsIDEpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkYXNhcCQkZmx1c2goKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpYiRyc3ZwJGFzYXAkJGxlbjsgaSs9Mikge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBsaWIkcnN2cCRhc2FwJCRxdWV1ZVtpXTtcbiAgICAgICAgdmFyIGFyZyA9IGxpYiRyc3ZwJGFzYXAkJHF1ZXVlW2krMV07XG5cbiAgICAgICAgY2FsbGJhY2soYXJnKTtcblxuICAgICAgICBsaWIkcnN2cCRhc2FwJCRxdWV1ZVtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGliJHJzdnAkYXNhcCQkcXVldWVbaSsxXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgbGliJHJzdnAkYXNhcCQkbGVuID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRhc2FwJCRhdHRlbXB0VmVydGV4KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHIgPSByZXF1aXJlO1xuICAgICAgICB2YXIgdmVydHggPSByKCd2ZXJ0eCcpO1xuICAgICAgICBsaWIkcnN2cCRhc2FwJCR2ZXJ0eE5leHQgPSB2ZXJ0eC5ydW5Pbkxvb3AgfHwgdmVydHgucnVuT25Db250ZXh0O1xuICAgICAgICByZXR1cm4gbGliJHJzdnAkYXNhcCQkdXNlVmVydHhUaW1lcigpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBsaWIkcnN2cCRhc2FwJCR1c2VTZXRUaW1lb3V0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJGFzYXAkJHNjaGVkdWxlRmx1c2g7XG4gICAgLy8gRGVjaWRlIHdoYXQgYXN5bmMgbWV0aG9kIHRvIHVzZSB0byB0cmlnZ2VyaW5nIHByb2Nlc3Npbmcgb2YgcXVldWVkIGNhbGxiYWNrczpcbiAgICBpZiAobGliJHJzdnAkYXNhcCQkaXNOb2RlKSB7XG4gICAgICBsaWIkcnN2cCRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJHJzdnAkYXNhcCQkdXNlTmV4dFRpY2soKTtcbiAgICB9IGVsc2UgaWYgKGxpYiRyc3ZwJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICBsaWIkcnN2cCRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJHJzdnAkYXNhcCQkdXNlTXV0YXRpb25PYnNlcnZlcigpO1xuICAgIH0gZWxzZSBpZiAobGliJHJzdnAkYXNhcCQkaXNXb3JrZXIpIHtcbiAgICAgIGxpYiRyc3ZwJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkcnN2cCRhc2FwJCR1c2VNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIH0gZWxzZSBpZiAobGliJHJzdnAkYXNhcCQkYnJvd3NlcldpbmRvdyA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsaWIkcnN2cCRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJHJzdnAkYXNhcCQkYXR0ZW1wdFZlcnRleCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWIkcnN2cCRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJHJzdnAkYXNhcCQkdXNlU2V0VGltZW91dCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRkZWZlciQkZGVmZXIobGFiZWwpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9IHsgfTtcblxuICAgICAgZGVmZXJyZWRbJ3Byb21pc2UnXSA9IG5ldyBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBkZWZlcnJlZFsncmVzb2x2ZSddID0gcmVzb2x2ZTtcbiAgICAgICAgZGVmZXJyZWRbJ3JlamVjdCddID0gcmVqZWN0O1xuICAgICAgfSwgbGFiZWwpO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQ7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRkZWZlciQkZGVmYXVsdCA9IGxpYiRyc3ZwJGRlZmVyJCRkZWZlcjtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRmaWx0ZXIkJGZpbHRlcihwcm9taXNlcywgZmlsdGVyRm4sIGxhYmVsKSB7XG4gICAgICByZXR1cm4gbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdC5hbGwocHJvbWlzZXMsIGxhYmVsKS50aGVuKGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgICBpZiAoIWxpYiRyc3ZwJHV0aWxzJCRpc0Z1bmN0aW9uKGZpbHRlckZuKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgZmlsdGVyJ3Mgc2Vjb25kIGFyZ3VtZW50LlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICB2YXIgZmlsdGVyZWQgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZmlsdGVyZWRbaV0gPSBmaWx0ZXJGbih2YWx1ZXNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQuYWxsKGZpbHRlcmVkLCBsYWJlbCkudGhlbihmdW5jdGlvbihmaWx0ZXJlZCkge1xuICAgICAgICAgIHZhciByZXN1bHRzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgICAgICAgdmFyIG5ld0xlbmd0aCA9IDA7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyZWRbaV0pIHtcbiAgICAgICAgICAgICAgcmVzdWx0c1tuZXdMZW5ndGhdID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICBuZXdMZW5ndGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXN1bHRzLmxlbmd0aCA9IG5ld0xlbmd0aDtcblxuICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkZmlsdGVyJCRkZWZhdWx0ID0gbGliJHJzdnAkZmlsdGVyJCRmaWx0ZXI7XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRwcm9taXNlJGhhc2gkJFByb21pc2VIYXNoKENvbnN0cnVjdG9yLCBvYmplY3QsIGxhYmVsKSB7XG4gICAgICB0aGlzLl9zdXBlckNvbnN0cnVjdG9yKENvbnN0cnVjdG9yLCBvYmplY3QsIHRydWUsIGxhYmVsKTtcbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkcHJvbWlzZSRoYXNoJCRkZWZhdWx0ID0gbGliJHJzdnAkcHJvbWlzZSRoYXNoJCRQcm9taXNlSGFzaDtcblxuICAgIGxpYiRyc3ZwJHByb21pc2UkaGFzaCQkUHJvbWlzZUhhc2gucHJvdG90eXBlID0gbGliJHJzdnAkdXRpbHMkJG9fY3JlYXRlKGxpYiRyc3ZwJGVudW1lcmF0b3IkJGRlZmF1bHQucHJvdG90eXBlKTtcbiAgICBsaWIkcnN2cCRwcm9taXNlJGhhc2gkJFByb21pc2VIYXNoLnByb3RvdHlwZS5fc3VwZXJDb25zdHJ1Y3RvciA9IGxpYiRyc3ZwJGVudW1lcmF0b3IkJGRlZmF1bHQ7XG4gICAgbGliJHJzdnAkcHJvbWlzZSRoYXNoJCRQcm9taXNlSGFzaC5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3Jlc3VsdCA9IHt9O1xuICAgIH07XG5cbiAgICBsaWIkcnN2cCRwcm9taXNlJGhhc2gkJFByb21pc2VIYXNoLnByb3RvdHlwZS5fdmFsaWRhdGVJbnB1dCA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICByZXR1cm4gaW5wdXQgJiYgdHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JztcbiAgICB9O1xuXG4gICAgbGliJHJzdnAkcHJvbWlzZSRoYXNoJCRQcm9taXNlSGFzaC5wcm90b3R5cGUuX3ZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignUHJvbWlzZS5oYXNoIG11c3QgYmUgY2FsbGVkIHdpdGggYW4gb2JqZWN0Jyk7XG4gICAgfTtcblxuICAgIGxpYiRyc3ZwJHByb21pc2UkaGFzaCQkUHJvbWlzZUhhc2gucHJvdG90eXBlLl9lbnVtZXJhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuICAgICAgdmFyIGlucHV0ICAgPSB0aGlzLl9pbnB1dDtcbiAgICAgIHZhciByZXN1bHRzID0gW107XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBpbnB1dCkge1xuICAgICAgICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUEVORElORyAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5wdXQsIGtleSkpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgcG9zaXRpb246IGtleSxcbiAgICAgICAgICAgIGVudHJ5OiBpbnB1dFtrZXldXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGxlbmd0aCA9IHJlc3VsdHMubGVuZ3RoO1xuICAgICAgdGhpcy5fcmVtYWluaW5nID0gbGVuZ3RoO1xuICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IHByb21pc2UuX3N0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcgJiYgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG4gICAgICAgIHRoaXMuX2VhY2hFbnRyeShyZXN1bHQuZW50cnksIHJlc3VsdC5wb3NpdGlvbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGhhc2gkc2V0dGxlZCQkSGFzaFNldHRsZWQoQ29uc3RydWN0b3IsIG9iamVjdCwgbGFiZWwpIHtcbiAgICAgIHRoaXMuX3N1cGVyQ29uc3RydWN0b3IoQ29uc3RydWN0b3IsIG9iamVjdCwgZmFsc2UsIGxhYmVsKTtcbiAgICB9XG5cbiAgICBsaWIkcnN2cCRoYXNoJHNldHRsZWQkJEhhc2hTZXR0bGVkLnByb3RvdHlwZSA9IGxpYiRyc3ZwJHV0aWxzJCRvX2NyZWF0ZShsaWIkcnN2cCRwcm9taXNlJGhhc2gkJGRlZmF1bHQucHJvdG90eXBlKTtcbiAgICBsaWIkcnN2cCRoYXNoJHNldHRsZWQkJEhhc2hTZXR0bGVkLnByb3RvdHlwZS5fc3VwZXJDb25zdHJ1Y3RvciA9IGxpYiRyc3ZwJGVudW1lcmF0b3IkJGRlZmF1bHQ7XG4gICAgbGliJHJzdnAkaGFzaCRzZXR0bGVkJCRIYXNoU2V0dGxlZC5wcm90b3R5cGUuX21ha2VSZXN1bHQgPSBsaWIkcnN2cCRlbnVtZXJhdG9yJCRtYWtlU2V0dGxlZFJlc3VsdDtcblxuICAgIGxpYiRyc3ZwJGhhc2gkc2V0dGxlZCQkSGFzaFNldHRsZWQucHJvdG90eXBlLl92YWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ2hhc2hTZXR0bGVkIG11c3QgYmUgY2FsbGVkIHdpdGggYW4gb2JqZWN0Jyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGhhc2gkc2V0dGxlZCQkaGFzaFNldHRsZWQob2JqZWN0LCBsYWJlbCkge1xuICAgICAgcmV0dXJuIG5ldyBsaWIkcnN2cCRoYXNoJHNldHRsZWQkJEhhc2hTZXR0bGVkKGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQsIG9iamVjdCwgbGFiZWwpLnByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRoYXNoJHNldHRsZWQkJGRlZmF1bHQgPSBsaWIkcnN2cCRoYXNoJHNldHRsZWQkJGhhc2hTZXR0bGVkO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGhhc2gkJGhhc2gob2JqZWN0LCBsYWJlbCkge1xuICAgICAgcmV0dXJuIG5ldyBsaWIkcnN2cCRwcm9taXNlJGhhc2gkJGRlZmF1bHQobGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdCwgb2JqZWN0LCBsYWJlbCkucHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJGhhc2gkJGRlZmF1bHQgPSBsaWIkcnN2cCRoYXNoJCRoYXNoO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG1hcCQkbWFwKHByb21pc2VzLCBtYXBGbiwgbGFiZWwpIHtcbiAgICAgIHJldHVybiBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0LmFsbChwcm9taXNlcywgbGFiZWwpLnRoZW4oZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICAgIGlmICghbGliJHJzdnAkdXRpbHMkJGlzRnVuY3Rpb24obWFwRm4pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYSBmdW5jdGlvbiBhcyBtYXAncyBzZWNvbmQgYXJndW1lbnQuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgIHZhciByZXN1bHRzID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlc3VsdHNbaV0gPSBtYXBGbih2YWx1ZXNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQuYWxsKHJlc3VsdHMsIGxhYmVsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkbWFwJCRkZWZhdWx0ID0gbGliJHJzdnAkbWFwJCRtYXA7XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRub2RlJCRSZXN1bHQoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCRub2RlJCRFUlJPUiA9IG5ldyBsaWIkcnN2cCRub2RlJCRSZXN1bHQoKTtcbiAgICB2YXIgbGliJHJzdnAkbm9kZSQkR0VUX1RIRU5fRVJST1IgPSBuZXcgbGliJHJzdnAkbm9kZSQkUmVzdWx0KCk7XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRub2RlJCRnZXRUaGVuKG9iaikge1xuICAgICAgdHJ5IHtcbiAgICAgICByZXR1cm4gb2JqLnRoZW47XG4gICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGxpYiRyc3ZwJG5vZGUkJEVSUk9SLnZhbHVlPSBlcnJvcjtcbiAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJG5vZGUkJEVSUk9SO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkbm9kZSQkdHJ5QXBwbHkoZiwgcywgYSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZi5hcHBseShzLCBhKTtcbiAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgbGliJHJzdnAkbm9kZSQkRVJST1IudmFsdWUgPSBlcnJvcjtcbiAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJG5vZGUkJEVSUk9SO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG5vZGUkJG1ha2VPYmplY3QoXywgYXJndW1lbnROYW1lcykge1xuICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgdmFyIG5hbWU7XG4gICAgICB2YXIgaTtcbiAgICAgIHZhciBsZW5ndGggPSBfLmxlbmd0aDtcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgbGVuZ3RoOyB4KyspIHtcbiAgICAgICAgYXJnc1t4XSA9IF9beF07XG4gICAgICB9XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmd1bWVudE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5hbWUgPSBhcmd1bWVudE5hbWVzW2ldO1xuICAgICAgICBvYmpbbmFtZV0gPSBhcmdzW2kgKyAxXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRub2RlJCRhcnJheVJlc3VsdChfKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gXy5sZW5ndGg7XG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShsZW5ndGggLSAxKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcmdzW2kgLSAxXSA9IF9baV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG5vZGUkJHdyYXBUaGVuYWJsZSh0aGVuLCBwcm9taXNlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aGVuOiBmdW5jdGlvbihvbkZ1bEZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgICAgICAgIHJldHVybiB0aGVuLmNhbGwocHJvbWlzZSwgb25GdWxGaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG5vZGUkJGRlbm9kZWlmeShub2RlRnVuYywgb3B0aW9ucykge1xuICAgICAgdmFyIGZuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShsICsgMSk7XG4gICAgICAgIHZhciBhcmc7XG4gICAgICAgIHZhciBwcm9taXNlSW5wdXQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgIGFyZyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICAgIGlmICghcHJvbWlzZUlucHV0KSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBjbGVhbiB0aGlzIHVwXG4gICAgICAgICAgICBwcm9taXNlSW5wdXQgPSBsaWIkcnN2cCRub2RlJCRuZWVkc1Byb21pc2VJbnB1dChhcmcpO1xuICAgICAgICAgICAgaWYgKHByb21pc2VJbnB1dCA9PT0gbGliJHJzdnAkbm9kZSQkR0VUX1RIRU5fRVJST1IpIHtcbiAgICAgICAgICAgICAgdmFyIHAgPSBuZXcgbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdChsaWIkcnN2cCQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwLCBsaWIkcnN2cCRub2RlJCRHRVRfVEhFTl9FUlJPUi52YWx1ZSk7XG4gICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9taXNlSW5wdXQgJiYgcHJvbWlzZUlucHV0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGFyZyA9IGxpYiRyc3ZwJG5vZGUkJHdyYXBUaGVuYWJsZShwcm9taXNlSW5wdXQsIGFyZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGFyZ3NbaV0gPSBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0KGxpYiRyc3ZwJCRpbnRlcm5hbCQkbm9vcCk7XG5cbiAgICAgICAgYXJnc1tsXSA9IGZ1bmN0aW9uKGVyciwgdmFsKSB7XG4gICAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycik7XG4gICAgICAgICAgZWxzZSBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbCk7XG4gICAgICAgICAgZWxzZSBpZiAob3B0aW9ucyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCBsaWIkcnN2cCRub2RlJCRhcnJheVJlc3VsdChhcmd1bWVudHMpKTtcbiAgICAgICAgICBlbHNlIGlmIChsaWIkcnN2cCR1dGlscyQkaXNBcnJheShvcHRpb25zKSlcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCBsaWIkcnN2cCRub2RlJCRtYWtlT2JqZWN0KGFyZ3VtZW50cywgb3B0aW9ucykpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChwcm9taXNlSW5wdXQpIHtcbiAgICAgICAgICByZXR1cm4gbGliJHJzdnAkbm9kZSQkaGFuZGxlUHJvbWlzZUlucHV0KHByb21pc2UsIGFyZ3MsIG5vZGVGdW5jLCBzZWxmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbGliJHJzdnAkbm9kZSQkaGFuZGxlVmFsdWVJbnB1dChwcm9taXNlLCBhcmdzLCBub2RlRnVuYywgc2VsZik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZuLl9fcHJvdG9fXyA9IG5vZGVGdW5jO1xuXG4gICAgICByZXR1cm4gZm47XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJG5vZGUkJGRlZmF1bHQgPSBsaWIkcnN2cCRub2RlJCRkZW5vZGVpZnk7XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRub2RlJCRoYW5kbGVWYWx1ZUlucHV0KHByb21pc2UsIGFyZ3MsIG5vZGVGdW5jLCBzZWxmKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbGliJHJzdnAkbm9kZSQkdHJ5QXBwbHkobm9kZUZ1bmMsIHNlbGYsIGFyZ3MpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gbGliJHJzdnAkbm9kZSQkRVJST1IpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVzdWx0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG5vZGUkJGhhbmRsZVByb21pc2VJbnB1dChwcm9taXNlLCBhcmdzLCBub2RlRnVuYywgc2VsZil7XG4gICAgICByZXR1cm4gbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdC5hbGwoYXJncykudGhlbihmdW5jdGlvbihhcmdzKXtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGxpYiRyc3ZwJG5vZGUkJHRyeUFwcGx5KG5vZGVGdW5jLCBzZWxmLCBhcmdzKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbGliJHJzdnAkbm9kZSQkRVJST1IpIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZXN1bHQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkbm9kZSQkbmVlZHNQcm9taXNlSW5wdXQoYXJnKSB7XG4gICAgICBpZiAoYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChhcmcuY29uc3RydWN0b3IgPT09IGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbGliJHJzdnAkbm9kZSQkZ2V0VGhlbihhcmcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHJhY2UkJHJhY2UoYXJyYXksIGxhYmVsKSB7XG4gICAgICByZXR1cm4gbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdC5yYWNlKGFycmF5LCBsYWJlbCk7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRyYWNlJCRkZWZhdWx0ID0gbGliJHJzdnAkcmFjZSQkcmFjZTtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRyZWplY3QkJHJlamVjdChyZWFzb24sIGxhYmVsKSB7XG4gICAgICByZXR1cm4gbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdC5yZWplY3QocmVhc29uLCBsYWJlbCk7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRyZWplY3QkJGRlZmF1bHQgPSBsaWIkcnN2cCRyZWplY3QkJHJlamVjdDtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRyZXNvbHZlJCRyZXNvbHZlKHZhbHVlLCBsYWJlbCkge1xuICAgICAgcmV0dXJuIGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQucmVzb2x2ZSh2YWx1ZSwgbGFiZWwpO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkcmVzb2x2ZSQkZGVmYXVsdCA9IGxpYiRyc3ZwJHJlc29sdmUkJHJlc29sdmU7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcmV0aHJvdyQkcmV0aHJvdyhyZWFzb24pIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRocm93IHJlYXNvbjtcbiAgICAgIH0pO1xuICAgICAgdGhyb3cgcmVhc29uO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkcmV0aHJvdyQkZGVmYXVsdCA9IGxpYiRyc3ZwJHJldGhyb3ckJHJldGhyb3c7XG5cbiAgICAvLyBkZWZhdWx0IGFzeW5jIGlzIGFzYXA7XG4gICAgbGliJHJzdnAkY29uZmlnJCRjb25maWcuYXN5bmMgPSBsaWIkcnN2cCRhc2FwJCRkZWZhdWx0O1xuICAgIHZhciBsaWIkcnN2cCQkY2FzdCA9IGxpYiRyc3ZwJHJlc29sdmUkJGRlZmF1bHQ7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGFzeW5jKGNhbGxiYWNrLCBhcmcpIHtcbiAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLmFzeW5jKGNhbGxiYWNrLCBhcmcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRvbigpIHtcbiAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnWydvbiddLmFwcGx5KGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRvZmYoKSB7XG4gICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZ1snb2ZmJ10uYXBwbHkobGliJHJzdnAkY29uZmlnJCRjb25maWcsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGluc3RydW1lbnRhdGlvbiB0aHJvdWdoIGB3aW5kb3cuX19QUk9NSVNFX0lOVFJVTUVOVEFUSU9OX19gXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3dbJ19fUFJPTUlTRV9JTlNUUlVNRU5UQVRJT05fXyddID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGxpYiRyc3ZwJCRjYWxsYmFja3MgPSB3aW5kb3dbJ19fUFJPTUlTRV9JTlNUUlVNRU5UQVRJT05fXyddO1xuICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWd1cmUoJ2luc3RydW1lbnQnLCB0cnVlKTtcbiAgICAgIGZvciAodmFyIGxpYiRyc3ZwJCRldmVudE5hbWUgaW4gbGliJHJzdnAkJGNhbGxiYWNrcykge1xuICAgICAgICBpZiAobGliJHJzdnAkJGNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eShsaWIkcnN2cCQkZXZlbnROYW1lKSkge1xuICAgICAgICAgIGxpYiRyc3ZwJCRvbihsaWIkcnN2cCQkZXZlbnROYW1lLCBsaWIkcnN2cCQkY2FsbGJhY2tzW2xpYiRyc3ZwJCRldmVudE5hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCR1bWQkJFJTVlAgPSB7XG4gICAgICAncmFjZSc6IGxpYiRyc3ZwJHJhY2UkJGRlZmF1bHQsXG4gICAgICAnUHJvbWlzZSc6IGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQsXG4gICAgICAnYWxsU2V0dGxlZCc6IGxpYiRyc3ZwJGFsbCRzZXR0bGVkJCRkZWZhdWx0LFxuICAgICAgJ2hhc2gnOiBsaWIkcnN2cCRoYXNoJCRkZWZhdWx0LFxuICAgICAgJ2hhc2hTZXR0bGVkJzogbGliJHJzdnAkaGFzaCRzZXR0bGVkJCRkZWZhdWx0LFxuICAgICAgJ2Rlbm9kZWlmeSc6IGxpYiRyc3ZwJG5vZGUkJGRlZmF1bHQsXG4gICAgICAnb24nOiBsaWIkcnN2cCQkb24sXG4gICAgICAnb2ZmJzogbGliJHJzdnAkJG9mZixcbiAgICAgICdtYXAnOiBsaWIkcnN2cCRtYXAkJGRlZmF1bHQsXG4gICAgICAnZmlsdGVyJzogbGliJHJzdnAkZmlsdGVyJCRkZWZhdWx0LFxuICAgICAgJ3Jlc29sdmUnOiBsaWIkcnN2cCRyZXNvbHZlJCRkZWZhdWx0LFxuICAgICAgJ3JlamVjdCc6IGxpYiRyc3ZwJHJlamVjdCQkZGVmYXVsdCxcbiAgICAgICdhbGwnOiBsaWIkcnN2cCRhbGwkJGRlZmF1bHQsXG4gICAgICAncmV0aHJvdyc6IGxpYiRyc3ZwJHJldGhyb3ckJGRlZmF1bHQsXG4gICAgICAnZGVmZXInOiBsaWIkcnN2cCRkZWZlciQkZGVmYXVsdCxcbiAgICAgICdFdmVudFRhcmdldCc6IGxpYiRyc3ZwJGV2ZW50cyQkZGVmYXVsdCxcbiAgICAgICdjb25maWd1cmUnOiBsaWIkcnN2cCRjb25maWckJGNvbmZpZ3VyZSxcbiAgICAgICdhc3luYyc6IGxpYiRyc3ZwJCRhc3luY1xuICAgIH07XG5cbiAgICAvKiBnbG9iYWwgZGVmaW5lOnRydWUgbW9kdWxlOnRydWUgd2luZG93OiB0cnVlICovXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lWydhbWQnXSkge1xuICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gbGliJHJzdnAkdW1kJCRSU1ZQOyB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZVsnZXhwb3J0cyddKSB7XG4gICAgICBtb2R1bGVbJ2V4cG9ydHMnXSA9IGxpYiRyc3ZwJHVtZCQkUlNWUDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpc1snUlNWUCddID0gbGliJHJzdnAkdW1kJCRSU1ZQO1xuICAgIH1cbn0pLmNhbGwodGhpcyk7XG5cblxufSkocmVxdWlyZShcIl9fYnJvd3NlcmlmeV9wcm9jZXNzXCIpKSIsImZ1bmN0aW9uIFdhbGtlcihkZXNjcmlwdGlvbiwgY2hhcmFjdGVyKSB7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXI7XG4gICAgdGhpcy53YXlQb2ludHMgPSBkZXNjcmlwdGlvbi53YXlQb2ludHM7XG4gICAgdGhpcy5jdXJyZW50V2F5cG9pbnQgPSBudWxsO1xufVxuXG5XYWxrZXIucHJvdG90eXBlID0ge1xuICAgIGluY1dheVBvaW50OiBmdW5jdGlvbiBpbmNXYXlQb2ludCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50V2F5cG9pbnQgPSAodGhpcy5jdXJyZW50V2F5cG9pbnQgKyAxKSAlIHRoaXMud2F5UG9pbnRzLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICAgIGlmKHRoaXMuY3VycmVudFdheXBvaW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci54ID0gdGhpcy53YXlQb2ludHNbMF0ueDtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnkgPSB0aGlzLndheVBvaW50c1swXS55O1xuICAgICAgICAgICAgdGhpcy5pbmNXYXlQb2ludCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjdXJyZW50V2F5cG9pbnQgPSB0aGlzLndheVBvaW50c1t0aGlzLmN1cnJlbnRXYXlwb2ludF07XG4gICAgICAgIHZhciB3YWxrVmVjdG9yID0ge1xuICAgICAgICAgICAgeDogY3VycmVudFdheXBvaW50LnggLSB0aGlzLmNoYXJhY3Rlci54LFxuICAgICAgICAgICAgeTogY3VycmVudFdheXBvaW50LnkgLSB0aGlzLmNoYXJhY3Rlci55XG4gICAgICAgIH07XG4gICAgICAgIHZhciBkaXN0YW5jZUZyb21OZXh0V2F5cG9pbnQgPSBNYXRoLnNxcnQoKHdhbGtWZWN0b3IueCkgKiAod2Fsa1ZlY3Rvci54KSArICh3YWxrVmVjdG9yLnkpICogKHdhbGtWZWN0b3IueSkpO1xuICAgICAgICBpZihkaXN0YW5jZUZyb21OZXh0V2F5cG9pbnQgPCAxMCkge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIueCA9IHRoaXMud2F5UG9pbnRzW3RoaXMuY3VycmVudFdheXBvaW50XS54O1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIueSA9IHRoaXMud2F5UG9pbnRzW3RoaXMuY3VycmVudFdheXBvaW50XS55O1xuICAgICAgICAgICAgdGhpcy5pbmNXYXlQb2ludCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdhbGtWZWN0b3IueCA9IHdhbGtWZWN0b3IueCAvIGRpc3RhbmNlRnJvbU5leHRXYXlwb2ludDtcbiAgICAgICAgd2Fsa1ZlY3Rvci55ID0gd2Fsa1ZlY3Rvci55IC8gZGlzdGFuY2VGcm9tTmV4dFdheXBvaW50O1xuICAgICAgICB0aGlzLmNoYXJhY3Rlci5keCA9IHdhbGtWZWN0b3IueCAqIDI7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyLmR5ID0gd2Fsa1ZlY3Rvci55ICogMjtcbiAgICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gV2Fsa2VyO1xuIl19
;