;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
module.exports={
    "phases": {
        "title": {
            "gameplayType": "PressAnyKey",
            "rendering": {
                "type": "title",
                "text": "She likes chocolate"
            },
            "timeout": 2000
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
            "walkSurface": [
                {
                    "x": 200,
                    "y": 440,
                    "zoom": 1.2
                },
                {
                    "x": 200,
                    "y": 265,
                    "zoom": 1
                },
                {
                    "x": 2350,
                    "y": 265,
                    "zoom": 1
                },
                {
                    "x": 2350,
                    "y": 440,
                    "zoom": 1.2
                }
            ],
            "characters": {
                "her": {
                    "sprites": "herDay",
                    "width": 90,
                    "height": 150,
                    "x": 125,
                    "y": 305,
                    "dialogColor": "orange",
                    "behaviour": [{
                        "type": "linearTalker",
                        "dialogs": [
                            [
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
                            ],
                            [
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
                        ]
                    }]
                },
                "me": {
                    "sprites": "meDay",
                    "width": 90,
                    "height": 150,
                    "x": 203,
                    "y": 300,
                    "dialogColor": "cyan"
                }
            },
            "sinks": {
                "getAtJoes": {
                    "x": 400,
                    "y": 215,
                    "width": 50,
                    "height": 50
                }
            }
        },

        "atJoes": {
            "gameplayType": "Wander",
            "renderHeight": 450,
            "mapWidth": 2400,
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
                    "y": 85,
                    "behaviour": [{
                        "type": "shopKeeper"
                    }]
                }
            },
            "walkSurface": [
                {
                    "x": 200,
                    "y": 380,
                    "zoom": 1.2
                },
                {
                    "x": 200,
                    "y": 150,
                    "zoom": 1
                },
                {
                    "x": 2350,
                    "y": 150,
                    "zoom": 1
                },
                {
                    "x": 2350,
                    "y": 380,
                    "zoom": 1.2
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

        "outFromJoes": {
            "gameplayType": "Wander",
            "characters": {
                "me": {
                    "sprites": "meDay",
                    "width": 90,
                    "height": 150,
                    "x": 425,
                    "y": 270
                }
            },
            "walkSurface": [
                {
                    "x": 200,
                    "y": 440,
                    "zoom": 1.2
                },
                {
                    "x": 200,
                    "y": 265,
                    "zoom": 1
                },
                {
                    "x": 2350,
                    "y": 265,
                    "zoom": 1
                },
                {
                    "x": 2350,
                    "y": 440,
                    "zoom": 1.2
                }
            ],
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
            "mapWidth": 2400
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
        "title": {"keyPressed": "intro"},
        "intro": {"getAtJoes": "atJoes"},
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

//var override = require('./override-for-debug.json'); gameDefinition = Utils.merge(gameDefinition, override);

var theGame = new GameEngine(
    document.getElementById('game-canvas'),
    gameDefinition    
);


theGame.start();

},{"./definition.json":1,"./game":3,"utils":4}],5:[function(require,module,exports){
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

    getZ: function getZ(x, y, walkSurface) {
        return ((y - 150) / 4 + 150) / 150;
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
function Wander(host) {
}

Wander.prototype = {
    init: function() {
    },

    update: function update(time) {
        this.updateMovement(time);
        this.checkAction();
        return true;
    },

    checkAction: function checkAction() {
        var nearCharacters = Object.keys(this.characters)
            .map(function(characterName) {
                return this.host.characters[characterName];
            }.bind(this))
            .filter(function(character) {
                return character !== this.host.characters.me &&
                    this.getDistance(this.host.characters.me, character) < 100;
            }.bind(this));

        if(this.host.keys[32] && !this.firstDone) {
            this.firstDone = true;
            nearCharacters.forEach(function(character) {
                character.performAction();
            });
        }
        if(!this.host.keys[32]) {
            this.firstDone = false;
        }
    },

    getDistance: function getDistance(pos1, pos2) {
        var x = pos1.x - pos2.x;
        var y = pos1.y - pos2.y;
        return Math.sqrt(x * x + y * y);
    },

    isInSink: function isInSink(character, sink) {
        return (
            (character.x + character.width) >= sink.x &&
            character.x <= (sink.x + sink.width) &&
            character.y >= sink.y &&
            character.y <= (sink.y + sink.height)
        );
    },

    getZ: function getZ(x, y, walkSurface) {
        var box = this._getBoundingIndices(x, y, walkSurface);

        if(
            box.topLeft === null ||
            box.topRight === null ||
            box.bottomLeft === null ||
            box.bottomRight === null
        ) {
            return 1;
        }

        var leftXSlope = (
            (walkSurface[box.bottomLeft].x - walkSurface[box.topLeft].x) /
            (walkSurface[box.bottomLeft].y - walkSurface[box.topLeft].y)
        );
        var leftZSlope = (
            (walkSurface[box.bottomLeft].zoom - walkSurface[box.topLeft].zoom) /
            (walkSurface[box.bottomLeft].y - walkSurface[box.topLeft].y)
        );
        var midLeft = {
            x: walkSurface[box.topLeft].x + leftXSlope * (y - walkSurface[box.topLeft].y),
            z: walkSurface[box.topLeft].zoom + leftZSlope * (y - walkSurface[box.topLeft].y),
        };

        var rightXSlope = (
            (walkSurface[box.bottomRight].x - walkSurface[box.topRight].x) /
            (walkSurface[box.bottomRight].y - walkSurface[box.topRight].y)
        );
        var rightZSlope = (
            (walkSurface[box.bottomRight].zoom - walkSurface[box.topRight].zoom) /
            (walkSurface[box.bottomRight].y - walkSurface[box.topRight].y)
        );
        var midRight = {
            x: walkSurface[box.topRight].x + rightXSlope * (y - walkSurface[box.topRight].y),
            z: walkSurface[box.topRight].zoom + rightZSlope * (y - walkSurface[box.topRight].y),
        };

        var midSlope = (midRight.z - midLeft.z) / (midRight.x - midLeft.x);

        return midLeft.z + midSlope * midLeft.x;
        // return ((y - 150) / 4 + 150) / 150;
    },

    _getBoundingIndices: function _getBoundingIndices(x, y, surface) {
        var topLeft = null;
        var bottomLeft = null;
        var topRight = null;
        var bottomRight = null;

        surface.forEach(function(point, index) {
            if(
                point.x < x && point.y < y && (
                    !topLeft ||
                    (
                        point.y > surface[topLeft].y ||
                        (point.y === surface[topLeft].y && index < topLeft)
                    )
                )
            ) {
                topLeft = index;
            }

            if(
                point.x < x && point.y > y && (
                    !bottomLeft ||
                    (
                        point.y < surface[bottomLeft].y ||
                        (point.y === surface[bottomLeft].y && index > bottomLeft)
                    )
                )
            ) {
                bottomLeft = index;
            }

            if(
                point.x > x && point.y < y && (
                    !topRight ||
                    (
                        point.y > surface[topRight].y ||
                        (point.y === surface[topRight].y && index > topRight)
                    )
                )
            ) {
                topRight = index;
            }

            if(
                point.x > x && point.y > y &&  (
                    !bottomRight ||
                    (
                        point.y < surface[bottomRight].y ||
                        (point.y === surface[bottomRight].y && index < bottomRight)
                    )
                )
            ) {
                bottomRight = index;
            }
        });
        return {
            topLeft: topLeft,
            topRight: topRight,
            bottomRight: bottomRight,
            bottomLeft: bottomLeft,
        };
    },

    _isInSurface: function _isInSurface(x, y, surface) {
        var boundingIndices = this._getBoundingIndices(x, y, surface);
        
        return ((boundingIndices.topLeft - boundingIndices.bottomLeft) === 1) &&
            ((boundingIndices.bottomRight - boundingIndices.topRight) === 1);
    },

    _getCurrentSink: function _getCurrentSink(me) {
        for(var sinkName in this.sinks) {
            var sink = this.sinks[sinkName];
            var nextCoords = {x: me.x + me.dx, y: me.y + me.dy, width: me.width, height: me.height};
            if(
                !this.isInSink(me, sink) &&
                this.isInSink(nextCoords, sink)
            ) {
                return sinkName;
            }
        }
    },

    _updateSpeed: function _updateSpeed(character) {
        var unit = 2;
        character.dx = 0;
        character.dy = 0;
        if(this.host.keys.shift) {
            unit *= 2;
        }
        if(this.host.keys[37] || this.host.keys['Q'.charCodeAt()] || this.host.keys['A'.charCodeAt()]) {
            character.dx -= unit;
        }
        if(this.host.keys[39] || this.host.keys['D'.charCodeAt()]) {
            character.dx += unit;
        }
        if(this.host.keys[38] || this.host.keys['Z'.charCodeAt()] || this.host.keys['W'.charCodeAt()]) {
            character.dy -= unit / 2;
        }
        if(this.host.keys[40] || this.host.keys['S'.charCodeAt()]) {
            character.dy += unit / 2;
        }
    },

    _updateCharacterPose: function _updateCharacterPose(character) {
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
    },

    _updateCharacterPosition: function _updateCharacterPosition(character) {
        if(this._isInSurface(character.x + character.dx, character.y + character.dy, this.walkSurface)) {
            character.x += character.dx;
            character.y += character.dy;
        } else if(this._isInSurface(character.x + character.dx, character.y, this.walkSurface)) {
            character.x += character.dx;
        } else if(this._isInSurface(character.x, character.y + character.dy, this.walkSurface)) {
            character.y += character.dy;
        }
    },

    updateMovement: function updateMovement(time) {
        var me = this.host.characters.me;

        this._updateSpeed(me);

        var currentSink = this._getCurrentSink(me);
        if(currentSink) {
            me.action = 'idle';
            this.host.gotoSink(currentSink);
            return;
        }

        Object.keys(this.host.characters)
            .map(function(characterName) {
                return this.host.characters[characterName];
            }.bind(this))
            .forEach(function(character) {
                if(character._behaviour) {
                    character._behaviour.forEach(function(behaviour) {
                        behaviour.update();
                    });
                }
                this._updateCharacterPose(character);
                this._updateCharacterPosition(character);
            }.bind(this));
    }
};


module.exports = Wander;

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
function DefaultGameplay() {
    
}

DefaultGameplay.prototype = {
    update: function update() {
    }
};


module.exports = DefaultGameplay;

},{}],9:[function(require,module,exports){
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
                image.width, image.height
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

function getDistance(pos1, pos2) {
    var x = pos1.x - pos2.x;
    var y = pos1.y - pos2.y;
    return Math.sqrt(x * x + y * y);
}

function drawCharacters(host, currentMapOffset, renderCoords) {
    var characterList = Object.keys(host.characters)
        .map(function(characterName) {
            return host.characters[characterName];
        }.bind(this))
        .sort(function(a, b) {
            return a.y - b.y;
        });

    characterList.forEach(function(character) {
        if(isVisible(character, currentMapOffset)) {
            drawCharacter(
                host.ctx,
                character,
                currentMapOffset,
                host.images,
                renderCoords,
                host.gameStructure.sprites[character.sprites],
                host.getCurrentPhase(),
                host.characters
            );
        }
    });

    var dispayActionHint = false;
    characterList.forEach(function(character) {
        if(character !== host.characters.me && getDistance(character, host.characters.me) < 100) {
            dispayActionHint = true;
        }
    }.bind(this));
    if(dispayActionHint && host.debug) {
        drawActionHint(host.ctx, host.characters.me, renderCoords);
    }
}

function drawActionHint(ctx, me, renderCoords) {
    ctx.fillStyle = 'black';
    ctx.globalAlpha = 0.5;
    ctx.fillRect(me.x + me.width / 2 - 25, me.y - me.height + 25 + renderCoords.y, 50, 50);
    // ctx.fillRect(me.x + me.width / 2 - 25, me.y - me.height + 25, 50, 50);
    ctx.globalAlpha = 1;
}

function drawCharacter(ctx, character, mapOffset, images, renderCoords, sprites, phase, characters) {
    var image = images[sprites[character.action]];
    var xOffsetInSource = character.phase * character.width;

    var scale = phase.getZ && phase.getZ(character.x, character.y, phase.walkSurface);
    ctx.drawImage(
        image,
        xOffsetInSource,
        0,
        character.width,
        character.height,
        character.x - mapOffset.x + renderCoords.x - (character.width * scale - character.width) / 2,
        character.y - mapOffset.y + renderCoords.y - character.height * scale,
        character.width * scale,
        character.height * scale
    );
    if(character.talkActivation) {
        character.talkActivation -= 1;
        drawDialogue(ctx, character.currentLine, renderCoords, characters[character.currentLine.who], mapOffset, phase);
    }
}

function drawDialogue(ctx, currentLine, renderCoords, character, mapOffset, phase) {
    if(currentLine === null) {
        return;
    }

    var scale = phase.getZ(character.x, character.y, phase.walkSurface);

    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.font = 'normal 14pt helvetica';
    var metrics = ctx.measureText(currentLine.text);
    var position = {};
    position.x = character.x - mapOffset.x - metrics.width / 2 + character.width / 2;
    position.y = character.y - mapOffset.y - 40 - character.height * scale;

    ctx.fillStyle = 'white';
    if(character.dialogColor) {
        ctx.fillStyle = character.dialogColor;
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
        var scale = (phase.getZ && phase.getZ(character.x, character.y, phase.walkSurface)) || 1;
        ctx.strokeStyle = 'rgb(0, 255, 0)';
        ctx.strokeRect(
            renderCoords.x + character.x - mapOffset.x,
            renderCoords.y + character.y - mapOffset.y - character.height * scale,
            character.width, character.height * scale
            );
        ctx.fillStyle = 'black';
        ctx.fillText(
            '[' + (character.x) + ', ' + (character.y + character.height) + ']',
            character.x + renderCoords.x - mapOffset.x,
            character.y + renderCoords.y - mapOffset.y - character.height * scale
            );
    }
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 0, 0.3)';
    if(walkSurface) {
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

    if(host.debug) {
        drawDebug(host.ctx, currentPhase, renderCoords, host.characters, currentMapOffset);
    }
}


module.exports = render;

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
module.exports = {
    37: false,
    38: false,
    39: false,
    40: false
};

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
},{}],12:[function(require,module,exports){
var behaviours = {
    walker:  require('./behaviours/walker'),
    shopKeeper: require('./behaviours/shop-keeper'),
    linearTalker: require('./behaviours/linear-talker')
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
        this._behaviour = [];

        for(var property in description) {
            this.setProperty(property, description[property]);
        }
        if(this.behaviour) {
            this._behaviour = this.behaviour.map(function(behaviourData) {
                var newBehaviour = new behaviours[behaviourData.type](behaviourData, this);
                newBehaviour.character = this;
                return newBehaviour;
            }.bind(this));
        }
    },

    performAction: function performAction() {
        this._behaviour.forEach(function(behaviour) {
            behaviour.action();
        });
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

},{"./behaviours/walker":13,"./behaviours/shop-keeper":14,"./behaviours/linear-talker":15}],3:[function(require,module,exports){
var RSVP = require('rsvp');

var Utils = require('utils');
var keys = require('./keys');
var Character = require('./character');


var interactions = {
    Dialogue: require('./interactions/dialogue'),
    Wander: require('./interactions/wander'),
    PressAnyKey: require('./interactions/press-any-key'),
    default: require('./interactions/default')
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

    window.addEventListener('resize', function(event) {
            this.gameCanvas.width = window.innerWidth;
            this.gameCanvas.height = window.innerHeight;
        }.bind(this));
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
                    imagesToLoad[imageName] = this.gameStructure.paths[imageName];
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

    getPhaseData: function getPhaseData(phaseName) {
        if(!this.gameStructure.phases[this.phaseName]) {
            throw(new Error('No phase with name ' + phaseName));
        }
        var phaseDescription = this.getFullDescription(this.phaseName);
        this.updateWithDefaults(phaseDescription);
        return phaseDescription;
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
                phaseDescription = this.getPhaseData(phaseName);
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
                    if(!interactions[phaseDescription.gameplayType]) {
                        throw(new Error('no gameplay called ' + phaseDescription.gameplayType));
                    }
                    this.phaseInstances[phaseName] = new interactions[phaseDescription.gameplayType](this);
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
        requestAnimationFrame(this.loop.bind(this));
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

    }
};


module.exports = Game;

},{"./character":12,"./interactions/dialogue":5,"./interactions/wander":6,"./interactions/press-any-key":7,"./interactions/default":8,"./renderers/point-n-click":9,"./renderers/title":10,"./keys":11,"utils":4,"rsvp":16}],13:[function(require,module,exports){
function Walker(definition, character) {
    this.wayPoints = definition.wayPoints;
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
    },
    
    action: function action() {
        
    }
};


module.exports = Walker;

},{}],14:[function(require,module,exports){
function ShopKeeper(definition, character) {
}

ShopKeeper.prototype = {
    update: function update() {
        this.character.dx = 1;
    },

    action: function action() {
        
    }
};


module.exports = ShopKeeper;
},{}],15:[function(require,module,exports){
function LinearTalker(definition, character) {
    this.dialogs = definition.dialogs;
    this.currentDialog = 0;
    this.currentLine = 0;
}

LinearTalker.prototype = {
    update: function update() {

    },

    _incDialog: function _incDialog() {
        if(this.currentLine + 1 >= this.dialogs[this.currentDialog].length) {
            if(this.currentDialog + 1 < this.dialogs.length) {
                this.currentDialog += 1;
                this.currentLine = 0;
                return true;
            }
        }
        else {
            this.currentLine += 1;
        }
    },

    action: function action() {
        if(
            this.dialogs.length >= this.currentDialog + 1 &&
            this.dialogs[this.currentDialog].length >= this.currentLine &&
            !(this.dialogWasIncremented && this.character.talkActivation)
        ) {
            this.character.currentLine = this.dialogs[this.currentDialog][this.currentLine];
            this.character.talkActivation = 120;
            this.dialogWasIncremented = this._incDialog();
        }
    }
};


module.exports = LinearTalker;

},{}],17:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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
},{"__browserify_process":17}]},{},[2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2RlZmluaXRpb24uanNvbiIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2luZGV4LmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9zcmMvaW50ZXJhY3Rpb25zL2RpYWxvZ3VlLmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9zcmMvaW50ZXJhY3Rpb25zL3dhbmRlci5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2ludGVyYWN0aW9ucy9wcmVzcy1hbnkta2V5LmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9zcmMvaW50ZXJhY3Rpb25zL2RlZmF1bHQuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL3NyYy9yZW5kZXJlcnMvcG9pbnQtbi1jbGljay5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL3JlbmRlcmVycy90aXRsZS5qcyIsIi9Vc2Vycy90c2F0c2UvcHJvamVjdHMvc2hlLWxpa2VzLWNob2NvbGF0ZS9zcmMvc3JjL2tleXMuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL25vZGVfbW9kdWxlcy91dGlscy9zcmMvdXRpbHMuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL3NyYy9jaGFyYWN0ZXIuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL3NyYy9nYW1lLmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9zcmMvYmVoYXZpb3Vycy93YWxrZXIuanMiLCIvVXNlcnMvdHNhdHNlL3Byb2plY3RzL3NoZS1saWtlcy1jaG9jb2xhdGUvc3JjL3NyYy9iZWhhdmlvdXJzL3Nob3Ata2VlcGVyLmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9zcmMvYmVoYXZpb3Vycy9saW5lYXItdGFsa2VyLmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9ub2RlX21vZHVsZXMvZ3J1bnQtYnJvd3NlcmlmeTIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiL1VzZXJzL3RzYXRzZS9wcm9qZWN0cy9zaGUtbGlrZXMtY2hvY29sYXRlL3NyYy9ub2RlX21vZHVsZXMvcnN2cC9kaXN0L3JzdnAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcFRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwicGhhc2VzXCI6IHtcbiAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgICBcImdhbWVwbGF5VHlwZVwiOiBcIlByZXNzQW55S2V5XCIsXG4gICAgICAgICAgICBcInJlbmRlcmluZ1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJTaGUgbGlrZXMgY2hvY29sYXRlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInRpbWVvdXRcIjogMjAwMFxuICAgICAgICB9LFxuXG4gICAgICAgIFwiaW50cm9cIjoge1xuICAgICAgICAgICAgXCJnYW1lcGxheVR5cGVcIjogXCJXYW5kZXJcIixcbiAgICAgICAgICAgIFwicmVuZGVyaW5nXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJQb2ludE5DbGlja1wiLFxuICAgICAgICAgICAgICAgIFwicGxhbmVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBcInNreVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ6XCI6IDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBcImhvdXNlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ6XCI6IDFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBcImZvcmVncm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwielwiOiAxLjVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbmRlckhlaWdodFwiOiA0NTAsXG4gICAgICAgICAgICBcIm1hcFdpZHRoXCI6IDI0MDAsXG4gICAgICAgICAgICBcIndhbGtTdXJmYWNlXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIFwieVwiOiA0NDAsXG4gICAgICAgICAgICAgICAgICAgIFwiem9vbVwiOiAxLjJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDI2NSxcbiAgICAgICAgICAgICAgICAgICAgXCJ6b29tXCI6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDIzNTAsXG4gICAgICAgICAgICAgICAgICAgIFwieVwiOiAyNjUsXG4gICAgICAgICAgICAgICAgICAgIFwiem9vbVwiOiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAyMzUwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogNDQwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMS4yXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2hhcmFjdGVyc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJoZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNwcml0ZXNcIjogXCJoZXJEYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTUwLFxuICAgICAgICAgICAgICAgICAgICBcInhcIjogMTI1LFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMzA1LFxuICAgICAgICAgICAgICAgICAgICBcImRpYWxvZ0NvbG9yXCI6IFwib3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYmVoYXZpb3VyXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaW5lYXJUYWxrZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlhbG9nc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndob1wiOiBcIm1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJIZXkgISBXaGF0J3MgdXAgP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2hvXCI6IFwiaGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJIaS4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2hvXCI6IFwibWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIldoYXQncyB3cm9uZyA/IHlvdSBzZWVtIHNvIGRvd24uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aG9cIjogXCJoZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkl0J3Mgb2ssIEknbSBqdXN0IGluIHRoZSBtb29kIGZvciBzdGFyaW5nIGF0IHRoZSBzZWEgZm9yIGEgd2hpbGUuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aG9cIjogXCJtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiV2hhdCBjYW4gSSBkbyB0byBjaGVlciB5b3UgdXAgP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2hvXCI6IFwiaGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJBbGwgSSB3aXNoIGZvciByaWdodCBub3cgaXMgYSBsaXR0bGUgcGllY2Ugb2YgY2hvY29sYXRlLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2hvXCI6IFwibWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlJlYWxseSA/IEFoIGFoLCBqdXN0IHlvdSB3YWl0ICFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2hvXCI6IFwibWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkhleSwgSSdtIGFsbW9zdCBkb25lICFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndob1wiOiBcImhlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiZ3JlYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndob1wiOiBcIm1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJXZWxsIEknZCBiZXR0ZXIgZ2V0IGdvaW5nIHRoZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3ByaXRlc1wiOiBcIm1lRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogOTAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDIwMyxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJkaWFsb2dDb2xvclwiOiBcImN5YW5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNpbmtzXCI6IHtcbiAgICAgICAgICAgICAgICBcImdldEF0Sm9lc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgIFwieVwiOiAyMTUsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNTAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDUwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwiYXRKb2VzXCI6IHtcbiAgICAgICAgICAgIFwiZ2FtZXBsYXlUeXBlXCI6IFwiV2FuZGVyXCIsXG4gICAgICAgICAgICBcInJlbmRlckhlaWdodFwiOiA0NTAsXG4gICAgICAgICAgICBcIm1hcFdpZHRoXCI6IDI0MDAsXG4gICAgICAgICAgICBcInJlbmRlcmluZ1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiUG9pbnROQ2xpY2tcIixcbiAgICAgICAgICAgICAgICBcInBsYW5lc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJza3lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwielwiOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJmb3JlZ3JvdW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInpcIjogMS41XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjaGFyYWN0ZXJzXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcHJpdGVzXCI6IFwibWVEYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTUwLFxuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjAzLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMTg1XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImpvZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3ByaXRlc1wiOiBcIm1lRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogOTAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDIwMyxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDg1LFxuICAgICAgICAgICAgICAgICAgICBcImJlaGF2aW91clwiOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2hvcEtlZXBlclwiXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid2Fsa1N1cmZhY2VcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDM4MCxcbiAgICAgICAgICAgICAgICAgICAgXCJ6b29tXCI6IDEuMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMTUwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjM1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJ6b29tXCI6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDIzNTAsXG4gICAgICAgICAgICAgICAgICAgIFwieVwiOiAzODAsXG4gICAgICAgICAgICAgICAgICAgIFwiem9vbVwiOiAxLjJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJzaW5rc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJleGl0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDE4MixcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDM1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMjAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEzMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcIm91dEZyb21Kb2VzXCI6IHtcbiAgICAgICAgICAgIFwiZ2FtZXBsYXlUeXBlXCI6IFwiV2FuZGVyXCIsXG4gICAgICAgICAgICBcImNoYXJhY3RlcnNcIjoge1xuICAgICAgICAgICAgICAgIFwibWVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNwcml0ZXNcIjogXCJtZURheVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDkwLFxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiA0MjUsXG4gICAgICAgICAgICAgICAgICAgIFwieVwiOiAyNzBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3YWxrU3VyZmFjZVwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogNDQwLFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMS4yXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIFwieVwiOiAyNjUsXG4gICAgICAgICAgICAgICAgICAgIFwiem9vbVwiOiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAyMzUwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMjY1LFxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIjogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjM1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDQ0MCxcbiAgICAgICAgICAgICAgICAgICAgXCJ6b29tXCI6IDEuMlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJlbmRlcmluZ1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiUG9pbnROQ2xpY2tcIixcbiAgICAgICAgICAgICAgICBcInBsYW5lc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJza3lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwielwiOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJob3VzZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwielwiOiAxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJmb3JlZ3JvdW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInpcIjogMS41XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW5kZXJIZWlnaHRcIjogNDUwLFxuICAgICAgICAgICAgXCJtYXBXaWR0aFwiOiAyNDAwXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJmaW5cIjoge1xuICAgICAgICAgICAgXCJnYW1lcGxheVR5cGVcIjogXCJQcmVzc0FueUtleVwiLFxuICAgICAgICAgICAgXCJyZW5kZXJpbmdcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiRmluXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInRpbWVvdXRcIjogMjAwMFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInBsYW5cIjoge1xuICAgICAgICBcInRpdGxlXCI6IHtcImtleVByZXNzZWRcIjogXCJpbnRyb1wifSxcbiAgICAgICAgXCJpbnRyb1wiOiB7XCJnZXRBdEpvZXNcIjogXCJhdEpvZXNcIn0sXG4gICAgICAgIFwiYXRKb2VzXCI6IHtcImV4aXRcIjogXCJvdXRGcm9tSm9lc1wifSxcbiAgICAgICAgXCJvdXRGcm9tSm9lc1wiOiB7fSxcbiAgICAgICAgXCJmaW5cIjoge1wia2V5UHJlc3NlZFwiOiBcImF0Sm9lc1wifVxuICAgIH0sXG4gICAgXCJzcHJpdGVzXCI6IHtcbiAgICAgICAgXCJtZURheVwiOiB7XG4gICAgICAgICAgICBcImlkbGVcIjogXCJtZVNwcml0ZUlkbGVcIixcbiAgICAgICAgICAgIFwidGFsa2luZ1wiOiBcIm1lU3ByaXRlSWRsZVwiLFxuICAgICAgICAgICAgXCJ3YWxrTGVmdFwiOiBcIm1lU3ByaXRlXCIsXG4gICAgICAgICAgICBcInJ1bkxlZnRcIjogXCJtZVNwcml0ZVwiLFxuICAgICAgICAgICAgXCJ3YWxrUmlnaHRcIjogXCJtZVNwcml0ZVJpZ2h0XCIsXG4gICAgICAgICAgICBcInJ1blJpZ2h0XCI6IFwibWVTcHJpdGVSaWdodFwiLFxuICAgICAgICAgICAgXCJ3YWxrVXBcIjogXCJtZVNwcml0ZUlkbGVcIixcbiAgICAgICAgICAgIFwicnVuVXBcIjogXCJtZVNwcml0ZUlkbGVcIixcbiAgICAgICAgICAgIFwid2Fsa0Rvd25cIjogXCJtZVNwcml0ZUlkbGVcIixcbiAgICAgICAgICAgIFwicnVuRG93blwiOiBcIm1lU3ByaXRlSWRsZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGVyRGF5XCI6IHtcbiAgICAgICAgICAgIFwiaWRsZVwiOiBcImhlclNwcml0ZVwiLFxuICAgICAgICAgICAgXCJ0YWxraW5nXCI6IFwiaGVyU3ByaXRlXCIsXG4gICAgICAgICAgICBcIndhbGtMZWZ0XCI6IFwiaGVyU3ByaXRlXCIsXG4gICAgICAgICAgICBcIndhbGtSaWdodFwiOiBcImhlclNwcml0ZVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwicGF0aHNcIjoge1xuICAgICAgICBcInNreVwiOlxuICAgICAgICAgICAgXCJhcnQvc2t5LnBuZ1wiLFxuICAgICAgICBcImZvcmVncm91bmRcIjpcbiAgICAgICAgICAgIFwiYXJ0L2ZvcmVncm91bmQucG5nXCIsXG4gICAgICAgIFwiaG91c2VzXCI6XG4gICAgICAgICAgICBcImFydC9ob3VzZXMucG5nXCIsXG4gICAgICAgIFwiaGVyU3ByaXRlXCI6XG4gICAgICAgICAgICBcImFydC9oZXJfc3ByaXRlLnBuZ1wiLFxuICAgICAgICBcIm1lU3ByaXRlXCI6XG4gICAgICAgICAgICBcImFydC9tZV9zcHJpdGUucG5nXCIsXG4gICAgICAgIFwibWVTcHJpdGVSaWdodFwiOlxuICAgICAgICAgICAgXCJhcnQvbWVfc3ByaXRlX3JpZ2h0LnBuZ1wiLFxuICAgICAgICBcIm1lU3ByaXRlSWRsZVwiOlxuICAgICAgICAgICAgXCJhcnQvbWVfc3ByaXRlX2lkbGUucG5nXCJcbiAgICB9LFxuICAgIFwiZW50cnlcIjogXCJ0aXRsZVwiXG59XG4iLCLvu792YXIgVXRpbHMgPSByZXF1aXJlKCd1dGlscycpO1xyXG52YXIgR2FtZUVuZ2luZSA9IHJlcXVpcmUoJy4vZ2FtZScpO1xyXG52YXIgZ2FtZURlZmluaXRpb24gPSByZXF1aXJlKCcuL2RlZmluaXRpb24uanNvbicpO1xyXG5cclxuLy92YXIgb3ZlcnJpZGUgPSByZXF1aXJlKCcuL292ZXJyaWRlLWZvci1kZWJ1Zy5qc29uJyk7IGdhbWVEZWZpbml0aW9uID0gVXRpbHMubWVyZ2UoZ2FtZURlZmluaXRpb24sIG92ZXJyaWRlKTtcclxuXHJcbnZhciB0aGVHYW1lID0gbmV3IEdhbWVFbmdpbmUoXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKSxcclxuICAgIGdhbWVEZWZpbml0aW9uICAgIFxyXG4pO1xyXG5cclxuXHJcbnRoZUdhbWUuc3RhcnQoKTtcclxuIiwiZnVuY3Rpb24gRGlhbG9ndWUoaG9zdCkge1xuICAgIHRoaXMuY3VycmVudExpbmUgPSAwO1xufVxuXG5EaWFsb2d1ZS5wcm90b3R5cGUgPSB7XG4gICAgZXZlbnRIYW5kbGVyczoge1xuICAgICAgICBrZXl1cDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvTmV4dExpbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnb1RvTmV4dExpbmU6IGZ1bmN0aW9uIGdvVG9OZXh0TGluZSgpIHtcbiAgICAgICAgaWYodGhpcy5jdXJyZW50TGluZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5nb1RvTGluZSgwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudExpbmUgKyAxIDwgdGhpcy5saW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9MaW5lKHRoaXMuY3VycmVudExpbmUgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5nb3RvU2luaygnZW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0WjogZnVuY3Rpb24gZ2V0Wih4LCB5LCB3YWxrU3VyZmFjZSkge1xuICAgICAgICByZXR1cm4gKCh5IC0gMTUwKSAvIDQgKyAxNTApIC8gMTUwO1xuICAgIH0sXG5cbiAgICBnb1RvTGluZTogZnVuY3Rpb24gZ29Ub0xpbmUobGluZU51bWJlcikge1xuICAgICAgICB0aGlzLmN1cnJlbnRMaW5lID0gbGluZU51bWJlcjtcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zYXZlQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuc2F2ZUNhbnZhcy53aWR0aCA9IHRoaXMuaG9zdC5nYW1lQ2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLnNhdmVDYW52YXMuaGVpZ2h0ID0gdGhpcy5ob3N0LmdhbWVDYW52YXMuaGVpZ2h0O1xuICAgICAgICB2YXIgY3R4ID0gdGhpcy5zYXZlQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZUNhbnZhcyxcbiAgICAgICAgICAgIDAsIDAsIHRoaXMuaG9zdC5nYW1lQ2FudmFzLndpZHRoLCB0aGlzLmhvc3QuZ2FtZUNhbnZhcy5oZWlnaHQsXG4gICAgICAgICAgICAwLCAwLCB0aGlzLmhvc3QuZ2FtZUNhbnZhcy53aWR0aCwgdGhpcy5ob3N0LmdhbWVDYW52YXMuaGVpZ2h0XG4gICAgICAgICAgICApO1xuICAgICAgICBpZih0aGlzLnJlc3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExpbmUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGludm9sdmVkQ2hhcmFjdGVycyA9IHRoaXMubGluZXMucmVkdWNlKGZ1bmN0aW9uKGNoYXJhY3RlcnNTb0ZhciwgbGluZSkge1xuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnNTb0ZhcltsaW5lLndob10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGFyYWN0ZXJzU29GYXI7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICB7fVxuICAgICAgICApO1xuICAgICAgICBPYmplY3Qua2V5cyhpbnZvbHZlZENoYXJhY3RlcnMpLmZvckVhY2goZnVuY3Rpb24oY2hhcmFjdGVyTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV0uYWN0aW9uID0gJ3RhbGtpbmcnO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcblxuICAgIH0sXG5cbiAgICBkcmF3OiBmdW5jdGlvbiBkcmF3KCkge1xuICAgIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBEaWFsb2d1ZTtcbiIsImZ1bmN0aW9uIFdhbmRlcihob3N0KSB7XG59XG5cbldhbmRlci5wcm90b3R5cGUgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVNb3ZlbWVudCh0aW1lKTtcbiAgICAgICAgdGhpcy5jaGVja0FjdGlvbigpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgY2hlY2tBY3Rpb246IGZ1bmN0aW9uIGNoZWNrQWN0aW9uKCkge1xuICAgICAgICB2YXIgbmVhckNoYXJhY3RlcnMgPSBPYmplY3Qua2V5cyh0aGlzLmNoYXJhY3RlcnMpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGNoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV07XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGNoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGFyYWN0ZXIgIT09IHRoaXMuaG9zdC5jaGFyYWN0ZXJzLm1lICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGlzdGFuY2UodGhpcy5ob3N0LmNoYXJhY3RlcnMubWUsIGNoYXJhY3RlcikgPCAxMDA7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmKHRoaXMuaG9zdC5rZXlzWzMyXSAmJiAhdGhpcy5maXJzdERvbmUpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3REb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIG5lYXJDaGFyYWN0ZXJzLmZvckVhY2goZnVuY3Rpb24oY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyLnBlcmZvcm1BY3Rpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLmhvc3Qua2V5c1szMl0pIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3REb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0RGlzdGFuY2U6IGZ1bmN0aW9uIGdldERpc3RhbmNlKHBvczEsIHBvczIpIHtcbiAgICAgICAgdmFyIHggPSBwb3MxLnggLSBwb3MyLng7XG4gICAgICAgIHZhciB5ID0gcG9zMS55IC0gcG9zMi55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH0sXG5cbiAgICBpc0luU2luazogZnVuY3Rpb24gaXNJblNpbmsoY2hhcmFjdGVyLCBzaW5rKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoY2hhcmFjdGVyLnggKyBjaGFyYWN0ZXIud2lkdGgpID49IHNpbmsueCAmJlxuICAgICAgICAgICAgY2hhcmFjdGVyLnggPD0gKHNpbmsueCArIHNpbmsud2lkdGgpICYmXG4gICAgICAgICAgICBjaGFyYWN0ZXIueSA+PSBzaW5rLnkgJiZcbiAgICAgICAgICAgIGNoYXJhY3Rlci55IDw9IChzaW5rLnkgKyBzaW5rLmhlaWdodClcbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgZ2V0WjogZnVuY3Rpb24gZ2V0Wih4LCB5LCB3YWxrU3VyZmFjZSkge1xuICAgICAgICB2YXIgYm94ID0gdGhpcy5fZ2V0Qm91bmRpbmdJbmRpY2VzKHgsIHksIHdhbGtTdXJmYWNlKTtcblxuICAgICAgICBpZihcbiAgICAgICAgICAgIGJveC50b3BMZWZ0ID09PSBudWxsIHx8XG4gICAgICAgICAgICBib3gudG9wUmlnaHQgPT09IG51bGwgfHxcbiAgICAgICAgICAgIGJveC5ib3R0b21MZWZ0ID09PSBudWxsIHx8XG4gICAgICAgICAgICBib3guYm90dG9tUmlnaHQgPT09IG51bGxcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZWZ0WFNsb3BlID0gKFxuICAgICAgICAgICAgKHdhbGtTdXJmYWNlW2JveC5ib3R0b21MZWZ0XS54IC0gd2Fsa1N1cmZhY2VbYm94LnRvcExlZnRdLngpIC9cbiAgICAgICAgICAgICh3YWxrU3VyZmFjZVtib3guYm90dG9tTGVmdF0ueSAtIHdhbGtTdXJmYWNlW2JveC50b3BMZWZ0XS55KVxuICAgICAgICApO1xuICAgICAgICB2YXIgbGVmdFpTbG9wZSA9IChcbiAgICAgICAgICAgICh3YWxrU3VyZmFjZVtib3guYm90dG9tTGVmdF0uem9vbSAtIHdhbGtTdXJmYWNlW2JveC50b3BMZWZ0XS56b29tKSAvXG4gICAgICAgICAgICAod2Fsa1N1cmZhY2VbYm94LmJvdHRvbUxlZnRdLnkgLSB3YWxrU3VyZmFjZVtib3gudG9wTGVmdF0ueSlcbiAgICAgICAgKTtcbiAgICAgICAgdmFyIG1pZExlZnQgPSB7XG4gICAgICAgICAgICB4OiB3YWxrU3VyZmFjZVtib3gudG9wTGVmdF0ueCArIGxlZnRYU2xvcGUgKiAoeSAtIHdhbGtTdXJmYWNlW2JveC50b3BMZWZ0XS55KSxcbiAgICAgICAgICAgIHo6IHdhbGtTdXJmYWNlW2JveC50b3BMZWZ0XS56b29tICsgbGVmdFpTbG9wZSAqICh5IC0gd2Fsa1N1cmZhY2VbYm94LnRvcExlZnRdLnkpLFxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByaWdodFhTbG9wZSA9IChcbiAgICAgICAgICAgICh3YWxrU3VyZmFjZVtib3guYm90dG9tUmlnaHRdLnggLSB3YWxrU3VyZmFjZVtib3gudG9wUmlnaHRdLngpIC9cbiAgICAgICAgICAgICh3YWxrU3VyZmFjZVtib3guYm90dG9tUmlnaHRdLnkgLSB3YWxrU3VyZmFjZVtib3gudG9wUmlnaHRdLnkpXG4gICAgICAgICk7XG4gICAgICAgIHZhciByaWdodFpTbG9wZSA9IChcbiAgICAgICAgICAgICh3YWxrU3VyZmFjZVtib3guYm90dG9tUmlnaHRdLnpvb20gLSB3YWxrU3VyZmFjZVtib3gudG9wUmlnaHRdLnpvb20pIC9cbiAgICAgICAgICAgICh3YWxrU3VyZmFjZVtib3guYm90dG9tUmlnaHRdLnkgLSB3YWxrU3VyZmFjZVtib3gudG9wUmlnaHRdLnkpXG4gICAgICAgICk7XG4gICAgICAgIHZhciBtaWRSaWdodCA9IHtcbiAgICAgICAgICAgIHg6IHdhbGtTdXJmYWNlW2JveC50b3BSaWdodF0ueCArIHJpZ2h0WFNsb3BlICogKHkgLSB3YWxrU3VyZmFjZVtib3gudG9wUmlnaHRdLnkpLFxuICAgICAgICAgICAgejogd2Fsa1N1cmZhY2VbYm94LnRvcFJpZ2h0XS56b29tICsgcmlnaHRaU2xvcGUgKiAoeSAtIHdhbGtTdXJmYWNlW2JveC50b3BSaWdodF0ueSksXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG1pZFNsb3BlID0gKG1pZFJpZ2h0LnogLSBtaWRMZWZ0LnopIC8gKG1pZFJpZ2h0LnggLSBtaWRMZWZ0LngpO1xuXG4gICAgICAgIHJldHVybiBtaWRMZWZ0LnogKyBtaWRTbG9wZSAqIG1pZExlZnQueDtcbiAgICAgICAgLy8gcmV0dXJuICgoeSAtIDE1MCkgLyA0ICsgMTUwKSAvIDE1MDtcbiAgICB9LFxuXG4gICAgX2dldEJvdW5kaW5nSW5kaWNlczogZnVuY3Rpb24gX2dldEJvdW5kaW5nSW5kaWNlcyh4LCB5LCBzdXJmYWNlKSB7XG4gICAgICAgIHZhciB0b3BMZWZ0ID0gbnVsbDtcbiAgICAgICAgdmFyIGJvdHRvbUxlZnQgPSBudWxsO1xuICAgICAgICB2YXIgdG9wUmlnaHQgPSBudWxsO1xuICAgICAgICB2YXIgYm90dG9tUmlnaHQgPSBudWxsO1xuXG4gICAgICAgIHN1cmZhY2UuZm9yRWFjaChmdW5jdGlvbihwb2ludCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmKFxuICAgICAgICAgICAgICAgIHBvaW50LnggPCB4ICYmIHBvaW50LnkgPCB5ICYmIChcbiAgICAgICAgICAgICAgICAgICAgIXRvcExlZnQgfHxcbiAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQueSA+IHN1cmZhY2VbdG9wTGVmdF0ueSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHBvaW50LnkgPT09IHN1cmZhY2VbdG9wTGVmdF0ueSAmJiBpbmRleCA8IHRvcExlZnQpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0b3BMZWZ0ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKFxuICAgICAgICAgICAgICAgIHBvaW50LnggPCB4ICYmIHBvaW50LnkgPiB5ICYmIChcbiAgICAgICAgICAgICAgICAgICAgIWJvdHRvbUxlZnQgfHxcbiAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQueSA8IHN1cmZhY2VbYm90dG9tTGVmdF0ueSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHBvaW50LnkgPT09IHN1cmZhY2VbYm90dG9tTGVmdF0ueSAmJiBpbmRleCA+IGJvdHRvbUxlZnQpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBib3R0b21MZWZ0ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKFxuICAgICAgICAgICAgICAgIHBvaW50LnggPiB4ICYmIHBvaW50LnkgPCB5ICYmIChcbiAgICAgICAgICAgICAgICAgICAgIXRvcFJpZ2h0IHx8XG4gICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50LnkgPiBzdXJmYWNlW3RvcFJpZ2h0XS55IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAocG9pbnQueSA9PT0gc3VyZmFjZVt0b3BSaWdodF0ueSAmJiBpbmRleCA+IHRvcFJpZ2h0KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdG9wUmlnaHQgPSBpbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgcG9pbnQueCA+IHggJiYgcG9pbnQueSA+IHkgJiYgIChcbiAgICAgICAgICAgICAgICAgICAgIWJvdHRvbVJpZ2h0IHx8XG4gICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50LnkgPCBzdXJmYWNlW2JvdHRvbVJpZ2h0XS55IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAocG9pbnQueSA9PT0gc3VyZmFjZVtib3R0b21SaWdodF0ueSAmJiBpbmRleCA8IGJvdHRvbVJpZ2h0KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgYm90dG9tUmlnaHQgPSBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3BMZWZ0OiB0b3BMZWZ0LFxuICAgICAgICAgICAgdG9wUmlnaHQ6IHRvcFJpZ2h0LFxuICAgICAgICAgICAgYm90dG9tUmlnaHQ6IGJvdHRvbVJpZ2h0LFxuICAgICAgICAgICAgYm90dG9tTGVmdDogYm90dG9tTGVmdCxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgX2lzSW5TdXJmYWNlOiBmdW5jdGlvbiBfaXNJblN1cmZhY2UoeCwgeSwgc3VyZmFjZSkge1xuICAgICAgICB2YXIgYm91bmRpbmdJbmRpY2VzID0gdGhpcy5fZ2V0Qm91bmRpbmdJbmRpY2VzKHgsIHksIHN1cmZhY2UpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuICgoYm91bmRpbmdJbmRpY2VzLnRvcExlZnQgLSBib3VuZGluZ0luZGljZXMuYm90dG9tTGVmdCkgPT09IDEpICYmXG4gICAgICAgICAgICAoKGJvdW5kaW5nSW5kaWNlcy5ib3R0b21SaWdodCAtIGJvdW5kaW5nSW5kaWNlcy50b3BSaWdodCkgPT09IDEpO1xuICAgIH0sXG5cbiAgICBfZ2V0Q3VycmVudFNpbms6IGZ1bmN0aW9uIF9nZXRDdXJyZW50U2luayhtZSkge1xuICAgICAgICBmb3IodmFyIHNpbmtOYW1lIGluIHRoaXMuc2lua3MpIHtcbiAgICAgICAgICAgIHZhciBzaW5rID0gdGhpcy5zaW5rc1tzaW5rTmFtZV07XG4gICAgICAgICAgICB2YXIgbmV4dENvb3JkcyA9IHt4OiBtZS54ICsgbWUuZHgsIHk6IG1lLnkgKyBtZS5keSwgd2lkdGg6IG1lLndpZHRoLCBoZWlnaHQ6IG1lLmhlaWdodH07XG4gICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICAhdGhpcy5pc0luU2luayhtZSwgc2luaykgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzSW5TaW5rKG5leHRDb29yZHMsIHNpbmspXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2lua05hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3VwZGF0ZVNwZWVkOiBmdW5jdGlvbiBfdXBkYXRlU3BlZWQoY2hhcmFjdGVyKSB7XG4gICAgICAgIHZhciB1bml0ID0gMjtcbiAgICAgICAgY2hhcmFjdGVyLmR4ID0gMDtcbiAgICAgICAgY2hhcmFjdGVyLmR5ID0gMDtcbiAgICAgICAgaWYodGhpcy5ob3N0LmtleXMuc2hpZnQpIHtcbiAgICAgICAgICAgIHVuaXQgKj0gMjtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmhvc3Qua2V5c1szN10gfHwgdGhpcy5ob3N0LmtleXNbJ1EnLmNoYXJDb2RlQXQoKV0gfHwgdGhpcy5ob3N0LmtleXNbJ0EnLmNoYXJDb2RlQXQoKV0pIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlci5keCAtPSB1bml0O1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaG9zdC5rZXlzWzM5XSB8fCB0aGlzLmhvc3Qua2V5c1snRCcuY2hhckNvZGVBdCgpXSkge1xuICAgICAgICAgICAgY2hhcmFjdGVyLmR4ICs9IHVuaXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5ob3N0LmtleXNbMzhdIHx8IHRoaXMuaG9zdC5rZXlzWydaJy5jaGFyQ29kZUF0KCldIHx8IHRoaXMuaG9zdC5rZXlzWydXJy5jaGFyQ29kZUF0KCldKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXIuZHkgLT0gdW5pdCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5ob3N0LmtleXNbNDBdIHx8IHRoaXMuaG9zdC5rZXlzWydTJy5jaGFyQ29kZUF0KCldKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXIuZHkgKz0gdW5pdCAvIDI7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3VwZGF0ZUNoYXJhY3RlclBvc2U6IGZ1bmN0aW9uIF91cGRhdGVDaGFyYWN0ZXJQb3NlKGNoYXJhY3Rlcikge1xuICAgICAgICBpZihjaGFyYWN0ZXIuZHggPiAyKVxuICAgICAgICAgICAgeyBjaGFyYWN0ZXIuc2V0UHJvcGVydHkoJ2FjdGlvbicsICdydW5SaWdodCcpO31cbiAgICAgICAgZWxzZSBpZihjaGFyYWN0ZXIuZHggPiAwKVxuICAgICAgICAgICAgeyBjaGFyYWN0ZXIuc2V0UHJvcGVydHkoJ2FjdGlvbicsICd3YWxrUmlnaHQnKTt9XG4gICAgICAgIGVsc2UgaWYoY2hhcmFjdGVyLmR4IDwgLTIpXG4gICAgICAgICAgICB7IGNoYXJhY3Rlci5zZXRQcm9wZXJ0eSgnYWN0aW9uJywgJ3J1bkxlZnQnKTt9XG4gICAgICAgIGVsc2UgaWYoY2hhcmFjdGVyLmR4IDwgMClcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyLnNldFByb3BlcnR5KCdhY3Rpb24nLCAnd2Fsa0xlZnQnKTt9XG4gICAgICAgIGVsc2UgaWYoY2hhcmFjdGVyLmR5ID4gMilcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyLnNldFByb3BlcnR5KCdhY3Rpb24nLCAncnVuRG93bicpO31cbiAgICAgICAgZWxzZSBpZihjaGFyYWN0ZXIuZHkgPiAwKVxuICAgICAgICAgICAgeyBjaGFyYWN0ZXIuc2V0UHJvcGVydHkoJ2FjdGlvbicsICd3YWxrRG93bicpO31cbiAgICAgICAgZWxzZSBpZihjaGFyYWN0ZXIuZHkgPCAtMilcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyLnNldFByb3BlcnR5KCdhY3Rpb24nLCAncnVuVXAnKTt9XG4gICAgICAgIGVsc2UgaWYoY2hhcmFjdGVyLmR5IDwgMClcbiAgICAgICAgICAgIHsgY2hhcmFjdGVyLnNldFByb3BlcnR5KCdhY3Rpb24nLCAnd2Fsa1VwJyk7fVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB7IGNoYXJhY3Rlci5zZXRQcm9wZXJ0eSgnYWN0aW9uJywgJ2lkbGUnKTsgfVxuICAgIH0sXG5cbiAgICBfdXBkYXRlQ2hhcmFjdGVyUG9zaXRpb246IGZ1bmN0aW9uIF91cGRhdGVDaGFyYWN0ZXJQb3NpdGlvbihjaGFyYWN0ZXIpIHtcbiAgICAgICAgaWYodGhpcy5faXNJblN1cmZhY2UoY2hhcmFjdGVyLnggKyBjaGFyYWN0ZXIuZHgsIGNoYXJhY3Rlci55ICsgY2hhcmFjdGVyLmR5LCB0aGlzLndhbGtTdXJmYWNlKSkge1xuICAgICAgICAgICAgY2hhcmFjdGVyLnggKz0gY2hhcmFjdGVyLmR4O1xuICAgICAgICAgICAgY2hhcmFjdGVyLnkgKz0gY2hhcmFjdGVyLmR5O1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5faXNJblN1cmZhY2UoY2hhcmFjdGVyLnggKyBjaGFyYWN0ZXIuZHgsIGNoYXJhY3Rlci55LCB0aGlzLndhbGtTdXJmYWNlKSkge1xuICAgICAgICAgICAgY2hhcmFjdGVyLnggKz0gY2hhcmFjdGVyLmR4O1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5faXNJblN1cmZhY2UoY2hhcmFjdGVyLngsIGNoYXJhY3Rlci55ICsgY2hhcmFjdGVyLmR5LCB0aGlzLndhbGtTdXJmYWNlKSkge1xuICAgICAgICAgICAgY2hhcmFjdGVyLnkgKz0gY2hhcmFjdGVyLmR5O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZU1vdmVtZW50OiBmdW5jdGlvbiB1cGRhdGVNb3ZlbWVudCh0aW1lKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXMuaG9zdC5jaGFyYWN0ZXJzLm1lO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNwZWVkKG1lKTtcblxuICAgICAgICB2YXIgY3VycmVudFNpbmsgPSB0aGlzLl9nZXRDdXJyZW50U2luayhtZSk7XG4gICAgICAgIGlmKGN1cnJlbnRTaW5rKSB7XG4gICAgICAgICAgICBtZS5hY3Rpb24gPSAnaWRsZSc7XG4gICAgICAgICAgICB0aGlzLmhvc3QuZ290b1NpbmsoY3VycmVudFNpbmspO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5ob3N0LmNoYXJhY3RlcnMpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGNoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV07XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZihjaGFyYWN0ZXIuX2JlaGF2aW91cikge1xuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXIuX2JlaGF2aW91ci5mb3JFYWNoKGZ1bmN0aW9uKGJlaGF2aW91cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3VyLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ2hhcmFjdGVyUG9zZShjaGFyYWN0ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNoYXJhY3RlclBvc2l0aW9uKGNoYXJhY3Rlcik7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBXYW5kZXI7XG4iLCJmdW5jdGlvbiBQcmVzc0FueUtleSgpIHtcbn1cblxuUHJlc3NBbnlLZXkucHJvdG90eXBlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYXJtZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHRpbWVvdXQgPSB0aGlzLmhvc3QucGhhc2VJbnN0YW5jZXNbdGhpcy5ob3N0LnBoYXNlTmFtZV0udGltZW91dDtcbiAgICAgICAgaWYodGltZW91dCkge1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LmdvdG9TaW5rKCdrZXlQcmVzc2VkJyk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uQ2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFuVXBBbmRHbygpO1xuICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrKTtcbiAgICB9LFxuXG4gICAgX2NsZWFuVXBBbmRHbzogZnVuY3Rpb24gX2NsZWFuVXAoKSB7XG4gICAgICAgIGlmKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrKTtcbiAgICAgICAgdGhpcy5ob3N0LmdvdG9TaW5rKCdrZXlQcmVzc2VkJyk7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24odGltZSkge1xuICAgICAgICBpZighdGhpcy5hcm1lZCkge1xuICAgICAgICAgICAgaWYoIU9iamVjdC5rZXlzKHRoaXMuaG9zdC5rZXlzKVxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3Qua2V5c1trZXldO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAuc29tZShmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJtZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMuaG9zdC5rZXlzKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmtleXNba2V5XTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5zb21lKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgdGhpcy5fY2xlYW5VcEFuZEdvKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFByZXNzQW55S2V5O1xuIiwiZnVuY3Rpb24gRGVmYXVsdEdhbWVwbGF5KCkge1xuICAgIFxufVxuXG5EZWZhdWx0R2FtZXBsYXkucHJvdG90eXBlID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZhdWx0R2FtZXBsYXk7XG4iLCJ2YXIgbGFzdEZyYW1lVXBkYXRlID0gbnVsbDtcblxuXG5mdW5jdGlvbiBkcmF3UGxhbmVzKGN0eCwgbWFwT2Zmc2V0LCBpbWFnZXMsIG1hcFdpZHRoLCByZW5kZXJDb29yZHMsIHBsYW5lcykge1xuICAgIHBsYW5lcy5mb3JFYWNoKGZ1bmN0aW9uKHBsYW5lKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IGltYWdlc1twbGFuZS5pbWFnZV07XG4gICAgICAgIGlmKCFwbGFuZS56KSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgICAgICAgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCxcbiAgICAgICAgICAgICAgICByZW5kZXJDb29yZHMueCwgcmVuZGVyQ29vcmRzLnksXG4gICAgICAgICAgICAgICAgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgICAgIE1hdGgubWluKG1hcE9mZnNldC54LCBtYXBXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSwgbWFwT2Zmc2V0LnksXG4gICAgICAgICAgICAgICAgTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIGltYWdlLndpZHRoKSwgaW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHJlbmRlckNvb3Jkcy54LCByZW5kZXJDb29yZHMueSxcbiAgICAgICAgICAgICAgICBNYXRoLm1pbihyZW5kZXJDb29yZHMud2lkdGgsIGltYWdlLndpZHRoKSwgcmVuZGVyQ29vcmRzLmhlaWdodFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXREaXN0YW5jZShwb3MxLCBwb3MyKSB7XG4gICAgdmFyIHggPSBwb3MxLnggLSBwb3MyLng7XG4gICAgdmFyIHkgPSBwb3MxLnkgLSBwb3MyLnk7XG4gICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbn1cblxuZnVuY3Rpb24gZHJhd0NoYXJhY3RlcnMoaG9zdCwgY3VycmVudE1hcE9mZnNldCwgcmVuZGVyQ29vcmRzKSB7XG4gICAgdmFyIGNoYXJhY3Rlckxpc3QgPSBPYmplY3Qua2V5cyhob3N0LmNoYXJhY3RlcnMpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24oY2hhcmFjdGVyTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGhvc3QuY2hhcmFjdGVyc1tjaGFyYWN0ZXJOYW1lXTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS55IC0gYi55O1xuICAgICAgICB9KTtcblxuICAgIGNoYXJhY3Rlckxpc3QuZm9yRWFjaChmdW5jdGlvbihjaGFyYWN0ZXIpIHtcbiAgICAgICAgaWYoaXNWaXNpYmxlKGNoYXJhY3RlciwgY3VycmVudE1hcE9mZnNldCkpIHtcbiAgICAgICAgICAgIGRyYXdDaGFyYWN0ZXIoXG4gICAgICAgICAgICAgICAgaG9zdC5jdHgsXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRNYXBPZmZzZXQsXG4gICAgICAgICAgICAgICAgaG9zdC5pbWFnZXMsXG4gICAgICAgICAgICAgICAgcmVuZGVyQ29vcmRzLFxuICAgICAgICAgICAgICAgIGhvc3QuZ2FtZVN0cnVjdHVyZS5zcHJpdGVzW2NoYXJhY3Rlci5zcHJpdGVzXSxcbiAgICAgICAgICAgICAgICBob3N0LmdldEN1cnJlbnRQaGFzZSgpLFxuICAgICAgICAgICAgICAgIGhvc3QuY2hhcmFjdGVyc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGRpc3BheUFjdGlvbkhpbnQgPSBmYWxzZTtcbiAgICBjaGFyYWN0ZXJMaXN0LmZvckVhY2goZnVuY3Rpb24oY2hhcmFjdGVyKSB7XG4gICAgICAgIGlmKGNoYXJhY3RlciAhPT0gaG9zdC5jaGFyYWN0ZXJzLm1lICYmIGdldERpc3RhbmNlKGNoYXJhY3RlciwgaG9zdC5jaGFyYWN0ZXJzLm1lKSA8IDEwMCkge1xuICAgICAgICAgICAgZGlzcGF5QWN0aW9uSGludCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICAgIGlmKGRpc3BheUFjdGlvbkhpbnQgJiYgaG9zdC5kZWJ1Zykge1xuICAgICAgICBkcmF3QWN0aW9uSGludChob3N0LmN0eCwgaG9zdC5jaGFyYWN0ZXJzLm1lLCByZW5kZXJDb29yZHMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhd0FjdGlvbkhpbnQoY3R4LCBtZSwgcmVuZGVyQ29vcmRzKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY3R4Lmdsb2JhbEFscGhhID0gMC41O1xuICAgIGN0eC5maWxsUmVjdChtZS54ICsgbWUud2lkdGggLyAyIC0gMjUsIG1lLnkgLSBtZS5oZWlnaHQgKyAyNSArIHJlbmRlckNvb3Jkcy55LCA1MCwgNTApO1xuICAgIC8vIGN0eC5maWxsUmVjdChtZS54ICsgbWUud2lkdGggLyAyIC0gMjUsIG1lLnkgLSBtZS5oZWlnaHQgKyAyNSwgNTAsIDUwKTtcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xufVxuXG5mdW5jdGlvbiBkcmF3Q2hhcmFjdGVyKGN0eCwgY2hhcmFjdGVyLCBtYXBPZmZzZXQsIGltYWdlcywgcmVuZGVyQ29vcmRzLCBzcHJpdGVzLCBwaGFzZSwgY2hhcmFjdGVycykge1xuICAgIHZhciBpbWFnZSA9IGltYWdlc1tzcHJpdGVzW2NoYXJhY3Rlci5hY3Rpb25dXTtcbiAgICB2YXIgeE9mZnNldEluU291cmNlID0gY2hhcmFjdGVyLnBoYXNlICogY2hhcmFjdGVyLndpZHRoO1xuXG4gICAgdmFyIHNjYWxlID0gcGhhc2UuZ2V0WiAmJiBwaGFzZS5nZXRaKGNoYXJhY3Rlci54LCBjaGFyYWN0ZXIueSwgcGhhc2Uud2Fsa1N1cmZhY2UpO1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIGltYWdlLFxuICAgICAgICB4T2Zmc2V0SW5Tb3VyY2UsXG4gICAgICAgIDAsXG4gICAgICAgIGNoYXJhY3Rlci53aWR0aCxcbiAgICAgICAgY2hhcmFjdGVyLmhlaWdodCxcbiAgICAgICAgY2hhcmFjdGVyLnggLSBtYXBPZmZzZXQueCArIHJlbmRlckNvb3Jkcy54IC0gKGNoYXJhY3Rlci53aWR0aCAqIHNjYWxlIC0gY2hhcmFjdGVyLndpZHRoKSAvIDIsXG4gICAgICAgIGNoYXJhY3Rlci55IC0gbWFwT2Zmc2V0LnkgKyByZW5kZXJDb29yZHMueSAtIGNoYXJhY3Rlci5oZWlnaHQgKiBzY2FsZSxcbiAgICAgICAgY2hhcmFjdGVyLndpZHRoICogc2NhbGUsXG4gICAgICAgIGNoYXJhY3Rlci5oZWlnaHQgKiBzY2FsZVxuICAgICk7XG4gICAgaWYoY2hhcmFjdGVyLnRhbGtBY3RpdmF0aW9uKSB7XG4gICAgICAgIGNoYXJhY3Rlci50YWxrQWN0aXZhdGlvbiAtPSAxO1xuICAgICAgICBkcmF3RGlhbG9ndWUoY3R4LCBjaGFyYWN0ZXIuY3VycmVudExpbmUsIHJlbmRlckNvb3JkcywgY2hhcmFjdGVyc1tjaGFyYWN0ZXIuY3VycmVudExpbmUud2hvXSwgbWFwT2Zmc2V0LCBwaGFzZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmF3RGlhbG9ndWUoY3R4LCBjdXJyZW50TGluZSwgcmVuZGVyQ29vcmRzLCBjaGFyYWN0ZXIsIG1hcE9mZnNldCwgcGhhc2UpIHtcbiAgICBpZihjdXJyZW50TGluZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNjYWxlID0gcGhhc2UuZ2V0WihjaGFyYWN0ZXIueCwgY2hhcmFjdGVyLnksIHBoYXNlLndhbGtTdXJmYWNlKTtcblxuICAgIGN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgIGN0eC5mb250ID0gJ25vcm1hbCAxNHB0IGhlbHZldGljYSc7XG4gICAgdmFyIG1ldHJpY3MgPSBjdHgubWVhc3VyZVRleHQoY3VycmVudExpbmUudGV4dCk7XG4gICAgdmFyIHBvc2l0aW9uID0ge307XG4gICAgcG9zaXRpb24ueCA9IGNoYXJhY3Rlci54IC0gbWFwT2Zmc2V0LnggLSBtZXRyaWNzLndpZHRoIC8gMiArIGNoYXJhY3Rlci53aWR0aCAvIDI7XG4gICAgcG9zaXRpb24ueSA9IGNoYXJhY3Rlci55IC0gbWFwT2Zmc2V0LnkgLSA0MCAtIGNoYXJhY3Rlci5oZWlnaHQgKiBzY2FsZTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIGlmKGNoYXJhY3Rlci5kaWFsb2dDb2xvcikge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY2hhcmFjdGVyLmRpYWxvZ0NvbG9yO1xuICAgIH1cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgIGN0eC5zdHJva2VSZWN0KFxuICAgICAgICBwb3NpdGlvbi54ICsgcmVuZGVyQ29vcmRzLngsXG4gICAgICAgIHBvc2l0aW9uLnkgKyByZW5kZXJDb29yZHMueSxcbiAgICAgICAgbWV0cmljcy53aWR0aCArIDEwLCAzMFxuICAgICAgICApO1xuICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuODU7XG4gICAgY3R4LmZpbGxSZWN0KFxuICAgICAgICBwb3NpdGlvbi54ICsgcmVuZGVyQ29vcmRzLngsXG4gICAgICAgIHBvc2l0aW9uLnkgKyByZW5kZXJDb29yZHMueSxcbiAgICAgICAgbWV0cmljcy53aWR0aCArIDEwLFxuICAgICAgICAzMFxuICAgICAgICApO1xuICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY3R4LmZpbGxUZXh0KFxuICAgICAgICBjdXJyZW50TGluZS50ZXh0LFxuICAgICAgICBwb3NpdGlvbi54ICsgNSArIHJlbmRlckNvb3Jkcy54LFxuICAgICAgICBwb3NpdGlvbi55ICsgNSArIHJlbmRlckNvb3Jkcy55XG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIGRyYXdEZWJ1ZyhjdHgsIHBoYXNlLCByZW5kZXJDb29yZHMsIGNoYXJhY3RlcnMsIG1hcE9mZnNldCkge1xuICAgIHZhciBzaW5rO1xuICAgIHZhciBjaGFyYWN0ZXI7XG4gICAgdmFyIHg7XG4gICAgdmFyIHk7XG4gICAgdmFyIHdhbGtTdXJmYWNlID0gcGhhc2Uud2Fsa1N1cmZhY2U7XG5cbiAgICBmb3IodmFyIHNpbmtOYW1lIGluIHBoYXNlLnNpbmtzKSB7XG4gICAgICAgIHNpbmsgPSBwaGFzZS5zaW5rc1tzaW5rTmFtZV07XG4gICAgICAgIHggPSBzaW5rLnggKyByZW5kZXJDb29yZHMueCAtIG1hcE9mZnNldC54O1xuICAgICAgICB5ID0gc2luay55ICsgcmVuZGVyQ29vcmRzLnkgLSBtYXBPZmZzZXQueTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwgMCwgMCwgMC41KSc7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCBzaW5rLndpZHRoLCBzaW5rLmhlaWdodCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDI1NSwgMjU1LCAyNTUpJztcbiAgICAgICAgY3R4LmZpbGxUZXh0KHNpbmtOYW1lLCB4ICsgMSwgeSArIDEpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsIDI1NSwgMjU1KSc7XG4gICAgICAgIGN0eC5maWxsVGV4dChzaW5rTmFtZSwgeCAtIDEsIHkgLSAxKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMCwgMCwgMCknO1xuICAgICAgICBjdHguZmlsbFRleHQoc2lua05hbWUsIHgsIHkpO1xuICAgIH1cblxuICAgIGZvcih2YXIgY2hhcmFjdGVyTmFtZSBpbiBjaGFyYWN0ZXJzKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IGNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV07XG4gICAgICAgIHZhciBzY2FsZSA9IChwaGFzZS5nZXRaICYmIHBoYXNlLmdldFooY2hhcmFjdGVyLngsIGNoYXJhY3Rlci55LCBwaGFzZS53YWxrU3VyZmFjZSkpIHx8IDE7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2IoMCwgMjU1LCAwKSc7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KFxuICAgICAgICAgICAgcmVuZGVyQ29vcmRzLnggKyBjaGFyYWN0ZXIueCAtIG1hcE9mZnNldC54LFxuICAgICAgICAgICAgcmVuZGVyQ29vcmRzLnkgKyBjaGFyYWN0ZXIueSAtIG1hcE9mZnNldC55IC0gY2hhcmFjdGVyLmhlaWdodCAqIHNjYWxlLFxuICAgICAgICAgICAgY2hhcmFjdGVyLndpZHRoLCBjaGFyYWN0ZXIuaGVpZ2h0ICogc2NhbGVcbiAgICAgICAgICAgICk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICBjdHguZmlsbFRleHQoXG4gICAgICAgICAgICAnWycgKyAoY2hhcmFjdGVyLngpICsgJywgJyArIChjaGFyYWN0ZXIueSArIGNoYXJhY3Rlci5oZWlnaHQpICsgJ10nLFxuICAgICAgICAgICAgY2hhcmFjdGVyLnggKyByZW5kZXJDb29yZHMueCAtIG1hcE9mZnNldC54LFxuICAgICAgICAgICAgY2hhcmFjdGVyLnkgKyByZW5kZXJDb29yZHMueSAtIG1hcE9mZnNldC55IC0gY2hhcmFjdGVyLmhlaWdodCAqIHNjYWxlXG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAwLCAwLjMpJztcbiAgICBpZih3YWxrU3VyZmFjZSkge1xuICAgICAgICBjdHgubW92ZVRvKFxuICAgICAgICAgICAgcmVuZGVyQ29vcmRzLnggKyB3YWxrU3VyZmFjZVswXS54IC0gbWFwT2Zmc2V0LngsXG4gICAgICAgICAgICByZW5kZXJDb29yZHMueSArIHdhbGtTdXJmYWNlWzBdLnkgLSBtYXBPZmZzZXQueVxuICAgICAgICAgICAgKTtcblxuICAgICAgICB3YWxrU3VyZmFjZS5zbGljZSgxKS5mb3JFYWNoKGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgICAgICAgIHJlbmRlckNvb3Jkcy54ICsgcG9pbnQueCAtIG1hcE9mZnNldC54LFxuICAgICAgICAgICAgICAgIHJlbmRlckNvb3Jkcy55ICsgcG9pbnQueSAtIG1hcE9mZnNldC55XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRNYXBPZmZzZXQoeCwgeSwgbWFwV2lkdGgpIHtcbiAgICB2YXIgcmVzdWx0ID0ge3g6MCwgeTowfTtcbiAgICBpZih4ID4gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikpIHtcbiAgICAgICAgcmVzdWx0LnggPSBNYXRoLm1pbih4IC0gd2luZG93LmlubmVyV2lkdGggLyAyLCBtYXBXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gaXNWaXNpYmxlKGNoYXJhY3RlciwgY3VycmVudE1hcE9mZnNldCkge1xuICAgIGlmKFxuICAgICAgICAoY2hhcmFjdGVyLnggKyBjaGFyYWN0ZXIud2lkdGggLSBjdXJyZW50TWFwT2Zmc2V0LngpID4gMCAmJlxuICAgICAgICAoY2hhcmFjdGVyLnggLSBjdXJyZW50TWFwT2Zmc2V0LngpIDwgd2luZG93LmlubmVyV2lkdGhcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRnJhbWVzKHRpbWUsIGltYWdlcywgY2hhcmFjdGVycywgc3ByaXRlcykge1xuICAgIGlmKCFsYXN0RnJhbWVVcGRhdGUpIHtcbiAgICAgICAgbGFzdEZyYW1lVXBkYXRlID0gdGltZTtcbiAgICB9XG4gICAgaWYoKHRpbWUgLSBsYXN0RnJhbWVVcGRhdGUpIDwgKDEwMDAgLyAxMikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhjaGFyYWN0ZXJzKVxuICAgICAgICAubWFwKGZ1bmN0aW9uKGNoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdO1xuICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGNoYXJhY3Rlcikge1xuICAgICAgICAgICAgY2hhcmFjdGVyLnBoYXNlID0gKGNoYXJhY3Rlci5waGFzZSArIDEpICUgKGltYWdlc1tzcHJpdGVzW2NoYXJhY3Rlci5zcHJpdGVzXVtjaGFyYWN0ZXIuYWN0aW9uXV0ud2lkdGggLyBjaGFyYWN0ZXIud2lkdGgpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIGxhc3RGcmFtZVVwZGF0ZSA9IHRpbWU7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcih0aW1lLCBob3N0KSB7XG4gICAgdXBkYXRlRnJhbWVzKHRpbWUsIGhvc3QuaW1hZ2VzLCBob3N0LmNoYXJhY3RlcnMsIGhvc3QuZ2FtZVN0cnVjdHVyZS5zcHJpdGVzKTtcbiAgICBpZigodGltZSAtIGhvc3QubGFzdERyYXcpIDwgNDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY3VycmVudFBoYXNlID0gaG9zdC5nZXRDdXJyZW50UGhhc2UoKTtcbiAgICB2YXIgcmVuZGVyQ29vcmRzID0ge1xuICAgICAgICB3aWR0aDogY3VycmVudFBoYXNlLnJlbmRlcldpZHRoIHx8IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IGN1cnJlbnRQaGFzZS5yZW5kZXJIZWlnaHQgfHwgd2luZG93LmlubmVySGVpZ2h0XG4gICAgfTtcblxuICAgIHJlbmRlckNvb3Jkcy54ID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gcmVuZGVyQ29vcmRzLndpZHRoKSAvIDI7XG4gICAgcmVuZGVyQ29vcmRzLnkgPSAod2luZG93LmlubmVySGVpZ2h0IC0gcmVuZGVyQ29vcmRzLmhlaWdodCkgLyAyO1xuXG4gICAgdmFyIGN1cnJlbnRNYXBPZmZzZXQgPSBnZXRNYXBPZmZzZXQoXG4gICAgICAgIGhvc3QuY2hhcmFjdGVycy5tZS54LFxuICAgICAgICBob3N0LmNoYXJhY3RlcnMubWUueSxcbiAgICAgICAgY3VycmVudFBoYXNlLm1hcFdpZHRoXG4gICAgICAgICk7XG4gICAgdmFyIHBsYW5lcyA9IGN1cnJlbnRQaGFzZS5yZW5kZXJpbmcucGxhbmVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gYS56IC0gYi56O1xuICAgIH0pO1xuXG4gICAgdmFyIGJhY2tncm91bmRQbGFuZXMgPSBwbGFuZXMuZmlsdGVyKGZ1bmN0aW9uKHBsYW5lKSB7cmV0dXJuIHBsYW5lLnogPD0gMTt9KTtcbiAgICB2YXIgZm9yZWdyb3VuZFBsYW5lcyA9IHBsYW5lcy5maWx0ZXIoZnVuY3Rpb24ocGxhbmUpIHtyZXR1cm4gcGxhbmUueiA+IDE7fSk7XG4gICAgXG4gICAgaG9zdC5jdHguY2xlYXJSZWN0KDAsIDAsIGhvc3QuY3R4LmNhbnZhcy53aWR0aCwgaG9zdC5jdHguY2FudmFzLmhlaWdodCk7XG4gICAgXG4gICAgZHJhd1BsYW5lcyhcbiAgICAgICAgaG9zdC5jdHgsXG4gICAgICAgIGN1cnJlbnRNYXBPZmZzZXQsXG4gICAgICAgIGhvc3QuaW1hZ2VzLFxuICAgICAgICBjdXJyZW50UGhhc2UubWFwV2lkdGgsXG4gICAgICAgIHJlbmRlckNvb3JkcyxcbiAgICAgICAgYmFja2dyb3VuZFBsYW5lc1xuICAgICAgICApO1xuXG4gICAgZHJhd0NoYXJhY3RlcnMoXG4gICAgICAgIGhvc3QsXG4gICAgICAgIGN1cnJlbnRNYXBPZmZzZXQsXG4gICAgICAgIHJlbmRlckNvb3Jkc1xuICAgICAgICApO1xuXG4gICAgZHJhd1BsYW5lcyhcbiAgICAgICAgaG9zdC5jdHgsXG4gICAgICAgIGN1cnJlbnRNYXBPZmZzZXQsXG4gICAgICAgIGhvc3QuaW1hZ2VzLFxuICAgICAgICBjdXJyZW50UGhhc2UubWFwV2lkdGgsXG4gICAgICAgIHJlbmRlckNvb3JkcyxcbiAgICAgICAgZm9yZWdyb3VuZFBsYW5lc1xuICAgICAgICApO1xuXG4gICAgaWYoaG9zdC5kZWJ1Zykge1xuICAgICAgICBkcmF3RGVidWcoaG9zdC5jdHgsIGN1cnJlbnRQaGFzZSwgcmVuZGVyQ29vcmRzLCBob3N0LmNoYXJhY3RlcnMsIGN1cnJlbnRNYXBPZmZzZXQpO1xuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlbmRlcjtcbiIsImZ1bmN0aW9uIHJlbmRlcih0aW1lLCBob3N0KSB7XG4gICAgdmFyIGN1cnJlbnRQaGFzZSA9IGhvc3QucGhhc2VJbnN0YW5jZXNbaG9zdC5waGFzZU5hbWVdO1xuICAgIHZhciBjdHggPSBob3N0LmN0eDtcbiAgICB2YXIgd2lkdGggPSBjdHguY2FudmFzLndpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBjdHguY2FudmFzLmhlaWdodDtcbiAgICB2YXIgcmVuZGVyaW5nRGF0YSA9IGhvc3QuZ2FtZVN0cnVjdHVyZS5waGFzZXNbaG9zdC5waGFzZU5hbWVdLnJlbmRlcmluZztcblxuICAgIGN0eC5maWxsU3R5bGUgPSByZW5kZXJpbmdEYXRhLmJhY2tncm91bmRDb2xvciB8fCAnYmxhY2snO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBpZihyZW5kZXJpbmdEYXRhLmltYWdlKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IGhvc3QuaW1hZ2VzW3JlbmRlcmluZ0RhdGEuaW1hZ2VdO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZihyZW5kZXJpbmdEYXRhLnRleHQpIHtcbiAgICAgICAgY3R4LmZvbnQgPSAnbm9ybWFsIDQ0cHQgaGVsdmV0aWNhJyB8fCByZW5kZXJpbmdEYXRhLmZvbnQ7XG4gICAgICAgIHZhciBtZXRyaWNzID0gY3R4Lm1lYXN1cmVUZXh0KHJlbmRlcmluZ0RhdGEudGV4dCk7XG4gICAgICAgIHZhciB4ID0gKGN0eC5jYW52YXMud2lkdGggLSBtZXRyaWNzLndpZHRoKSAvIDI7XG4gICAgICAgIHZhciB5ID0gKGN0eC5jYW52YXMuaGVpZ2h0IC8gMik7XG5cblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gcmVuZGVyaW5nRGF0YS5jb2xvciB8fCAnd2hpdGUnO1xuICAgICAgICBjdHguZmlsbFRleHQocmVuZGVyaW5nRGF0YS50ZXh0LCB4LCB5KTtcbiAgICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSByZW5kZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAzNzogZmFsc2UsXG4gICAgMzg6IGZhbHNlLFxuICAgIDM5OiBmYWxzZSxcbiAgICA0MDogZmFsc2Vcbn07XG4iLCIoZnVuY3Rpb24oKXsoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgdmFyIGlkQ291bnRlcnMgPSB7fTtcbiAgICB2YXIgVXRpbHMgPSB7XG4gICAgICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgMyBzaW1wbGUgdHlwZXMsIGFuZCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYobnVsbCA9PT0gb2JqIHx8ICdvYmplY3QnICE9PSB0eXBlb2Ygb2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvcHk7XG4gICAgICAgICAgICAvLyBIYW5kbGUgRGF0ZVxuICAgICAgICAgICAgaWYob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvcHkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvcHkuc2V0VGltZShvYmouZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEhhbmRsZSBBcnJheVxuICAgICAgICAgICAgaWYob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBjb3B5ID0gW107XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMCwgbGVuID0gb2JqLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvcHlbaV0gPSBjbG9uZShvYmpbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGFuZGxlIE9iamVjdFxuICAgICAgICAgICAgaWYob2JqIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgY29weSA9IHt9O1xuICAgICAgICAgICAgICAgIGZvcih2YXIgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3B5W2F0dHJdID0gY2xvbmUob2JqW2F0dHJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gY29weSBvYmohIEl0cyB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uKG9iamVjdDEsIG9iamVjdDIpIHtcbiAgICAgICAgICAgIGZvcih2YXIgYXR0cmlidXRlTmFtZSBpbiBvYmplY3QyKSB7XG4gICAgICAgICAgICAgICAgaWYob2JqZWN0Mi5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QxW2F0dHJpYnV0ZU5hbWVdID0gb2JqZWN0MlthdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0MTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWVwTWVyZ2U6IGZ1bmN0aW9uIChvYmplY3QxLCBvYmplY3QyKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gb2JqZWN0Mikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggb2JqZWN0Mltwcm9wZXJ0eU5hbWVdLmNvbnN0cnVjdG9yID09PSBPYmplY3QgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QxW3Byb3BlcnR5TmFtZV0gPSBVdGlscy5kZWVwTWVyZ2Uob2JqZWN0MVtwcm9wZXJ0eU5hbWVdLCBvYmplY3QyW3Byb3BlcnR5TmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0MVtwcm9wZXJ0eU5hbWVdID0gb2JqZWN0Mltwcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDFbcHJvcGVydHlOYW1lXSA9IG9iamVjdDJbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvYmplY3QxO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRJbWFnZXM6IGZ1bmN0aW9uKGltYWdlc1VSTHMsIGFsbERvbmUpIHtcbiAgICAgICAgICAgIHZhciBpbWFnZXNOYW1lcyA9IE9iamVjdC5rZXlzKGltYWdlc1VSTHMpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgdmFyIGxvYWRlZCA9IDA7XG4gICAgICAgICAgICB2YXIgbG9hZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVkICs9IDE7XG4gICAgICAgICAgICAgICAgaWYobG9hZGVkID09PSBpbWFnZXNOYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsRG9uZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaW1hZ2VzTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2VOYW1lID0gaW1hZ2VzTmFtZXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IGltYWdlc1VSTHNbaW1hZ2VOYW1lXTtcbiAgICAgICAgICAgICAgICBpZih1cmwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IG5ldyBnbG9iYWwuSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2ltYWdlTmFtZV0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSBsb2FkQ2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2FkZWQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2ltYWdlTmFtZV0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXRNZXRob2RTaWduYXR1cmU6IGZ1bmN0aW9uKG9iamVjdCwgbWV0aG9kU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbWV0aG9kU3RyaW5nLnN1YnN0cig5LCBtZXRob2RTdHJpbmcuaW5kZXhPZignKScpICsgMSAtIDkpO1xuICAgICAgICAgICAgaWYob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gb2JqZWN0LnRvU3RyaW5nKCkgKyAnLicgKyByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHVwZGF0ZUN0eFdpdGhJbWFnZXM6IGZ1bmN0aW9uKGltYWdlcywgZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBuYW1lcyA9IE9iamVjdC5rZXlzKGltYWdlcyk7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IG5hbWVzW2ldO1xuICAgICAgICAgICAgICAgIGlmKGltYWdlc1tuYW1lXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltuYW1lXS5jbGVhclJlY3QoMCwgMCwgaW1hZ2VzW25hbWVdLndpZHRoLCBpbWFnZXNbbmFtZV0uaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25bbmFtZV0uZHJhd0ltYWdlKGltYWdlc1tuYW1lXSwgMCwgMCwgaW1hZ2VzW25hbWVdLndpZHRoLCBpbWFnZXNbbmFtZV0uaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uW25hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZHJhd0xpbmU6IGZ1bmN0aW9uKGN0eCwgcDEsIHAyKSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHAxLngsIHAxLnkpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhwMi54LCBwMi55KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkYXNoTGluZTogZnVuY3Rpb24oeCwgeSwgeDIsIHkyLCBkYSkge1xuICAgICAgICAgICAgaWYoIWRhKSB7XG4gICAgICAgICAgICAgICAgZGEgPSBbMTAsIDVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICAgICAgICB2YXIgZHggPSAoeDIgLSB4KSxcbiAgICAgICAgICAgICAgICBkeSA9ICh5MiAtIHkpO1xuICAgICAgICAgICAgdmFyIGxlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgICAgICB2YXIgcm90ID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUoeCwgeSk7XG4gICAgICAgICAgICB0aGlzLm1vdmVUbygwLCAwKTtcbiAgICAgICAgICAgIHRoaXMucm90YXRlKHJvdCk7XG4gICAgICAgICAgICB2YXIgZGMgPSBkYS5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgZGkgPSAwLFxuICAgICAgICAgICAgICAgIGRyYXcgPSB0cnVlO1xuICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgICAgICB3aGlsZShsZW4gPiB4KSB7XG4gICAgICAgICAgICAgICAgeCArPSBkYVtkaSsrICUgZGNdO1xuICAgICAgICAgICAgICAgIGlmKHggPiBsZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGxlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoZHJhdykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmVUbyh4LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvKHgsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkcmF3ID0gIWRyYXc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkYXNoUmVjdDogZnVuY3Rpb24oeCwgeSwgZHgsIGR5LCBkYSkge1xuICAgICAgICAgICAgdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIFV0aWxzLmRhc2hMaW5lLmNhbGwodGhpcywgeCwgeSwgeCArIGR4LCB5LCBkYSk7XG4gICAgICAgICAgICBVdGlscy5kYXNoTGluZS5jYWxsKHRoaXMsIHggKyBkeCwgeSwgeCArIGR4LCB5ICsgZHksIGRhKTtcbiAgICAgICAgICAgIFV0aWxzLmRhc2hMaW5lLmNhbGwodGhpcywgeCArIGR4LCB5ICsgZHksIHgsIHkgKyBkeSwgZGEpO1xuICAgICAgICAgICAgVXRpbHMuZGFzaExpbmUuY2FsbCh0aGlzLCB4LCB5ICsgZHksIHgsIHksIGRhKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLnN0cm9rZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRyYXdQaXhlbDogZnVuY3Rpb24oeCwgeSwgciwgZywgYiwgd2lkdGgpIHtcbiAgICAgICAgICAgIHZhciBpbWFnZURhdGEgPSB0aGlzLmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgd2lkdGgpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVsoaSArIGogKiB3aWR0aCkgKiA0ICsgMF0gPSByO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVsoaSArIGogKiB3aWR0aCkgKiA0ICsgMV0gPSBnO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVsoaSArIGogKiB3aWR0aCkgKiA0ICsgMl0gPSBiO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVsoaSArIGogKiB3aWR0aCkgKiA0ICsgM10gPSAyNTU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB4IC0gcGFyc2VJbnQod2lkdGggLyAyKSwgeSAtIHBhcnNlSW50KHdpZHRoIC8gMikpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRyYXdQaXhlbExpbmU6IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyLCByLCBnLCBiLCB3aWR0aCkge1xuICAgICAgICAgICAgLy8gRGVmaW5lIGRpZmZlcmVuY2VzIGFuZCBlcnJvciBjaGVja1xuICAgICAgICAgICAgdmFyIGR4ID0gTWF0aC5hYnMoeDIgLSB4MSk7XG4gICAgICAgICAgICB2YXIgZHkgPSBNYXRoLmFicyh5MiAtIHkxKTtcbiAgICAgICAgICAgIHZhciBzeCA9ICh4MSA8IHgyKSA/IDEgOiAtMTtcbiAgICAgICAgICAgIHZhciBzeSA9ICh5MSA8IHkyKSA/IDEgOiAtMTtcbiAgICAgICAgICAgIHZhciBlcnIgPSBkeCAtIGR5O1xuICAgICAgICAgICAgVXRpbHMuZHJhd1BpeGVsLmNhbGwodGhpcywgeDEsIHkxLCByLCBnLCBiLCB3aWR0aCk7XG4gICAgICAgICAgICAvLyBNYWluIGxvb3BcbiAgICAgICAgICAgIHdoaWxlKCEoKHgxID09PSB4MikgJiYgKHkxID09PSB5MikpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUyID0gZXJyIDw8IDE7XG4gICAgICAgICAgICAgICAgaWYoZTIgPiAtZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyIC09IGR5O1xuICAgICAgICAgICAgICAgICAgICB4MSArPSBzeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoZTIgPCBkeCkge1xuICAgICAgICAgICAgICAgICAgICBlcnIgKz0gZHg7XG4gICAgICAgICAgICAgICAgICAgIHkxICs9IHN5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBVdGlscy5kcmF3UGl4ZWwuY2FsbCh0aGlzLCB4MSwgeTEsIHIsIGcsIGIsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZXNpemVDYW52YXM6IGZ1bmN0aW9uKGN0eCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IGN0eC5jYW52YXM7XG4gICAgICAgICAgICBpZihjYW52YXMud2lkdGggIT09IHdpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICAgICAgICAgIHZhciB0bXBDYW52YXMgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgdmFyIHRtcEN0eCA9IHRtcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIHZhciBtaW5XaWR0aCA9IE1hdGgubWluKHdpZHRoLCBjYW52YXMud2lkdGgpO1xuICAgICAgICAgICAgICAgIHZhciBtaW5IZWlnaHQgPSBNYXRoLm1pbihoZWlnaHQsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRtcENhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB0bXBDYW52YXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0bXBDdHguZHJhd0ltYWdlKGNhbnZhcywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodG1wQ2FudmFzLCAwLCAwLCBtaW5XaWR0aCwgbWluSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAwLCAwLCBtaW5XaWR0aCwgbWluSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjdHg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TmV3SWQ6IGZ1bmN0aW9uKGNvdW50ZXJOYW1lKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBmb3JtYXRSZXN1bHQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmFtZSArICdfJyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgaWYoIWNvdW50ZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgY291bnRlck5hbWUgPSAnI2RlZmF1bHRfaWRfbmFtZSMnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIWlkQ291bnRlcnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0SWRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighaWRDb3VudGVycy5oYXNPd25Qcm9wZXJ0eShjb3VudGVyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBpZENvdW50ZXJzW2NvdW50ZXJOYW1lXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSBmb3JtYXRSZXN1bHQoY291bnRlck5hbWUsIGlkQ291bnRlcnNbY291bnRlck5hbWVdKTtcbiAgICAgICAgICAgIGlkQ291bnRlcnNbY291bnRlck5hbWVdKys7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2V0SWRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlkQ291bnRlcnMgPSB7fTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRJZENvdW50ZXJzOiBmdW5jdGlvbihjb3VudGVycykge1xuICAgICAgICAgICAgaWRDb3VudGVycyA9IGNvdW50ZXJzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldElkQ291bnRlcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkQ291bnRlcnM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0RWxlbWVudFBvc2l0aW9uOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgbGVmdCA9IDA7XG4gICAgICAgICAgICB2YXIgdG9wID0gMDtcbiAgICAgICAgICAgIHZhciBlID0gZWxlbWVudDtcbiAgICAgICAgICAgIHdoaWxlKGUub2Zmc2V0UGFyZW50ICE9PSB1bmRlZmluZWQgJiYgZS5vZmZzZXRQYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IGUub2Zmc2V0TGVmdCArIChlLmNsaWVudExlZnQgIT09IG51bGwgPyBlLmNsaWVudExlZnQgOiAwKTtcbiAgICAgICAgICAgICAgICB0b3AgKz0gZS5vZmZzZXRUb3AgKyAoZS5jbGllbnRUb3AgIT09IG51bGwgPyBlLmNsaWVudFRvcCA6IDApO1xuICAgICAgICAgICAgICAgIGUgPSBlLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogbGVmdCxcbiAgICAgICAgICAgICAgICB5OiB0b3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TW91c2VQb3NpdGlvbjogZnVuY3Rpb24oZXZlbnQsIGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBVdGlscy5yZWFkR2xvYmFsTW91c2UoZXZlbnQpO1xuICAgICAgICAgICAgaWYoZG9tRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50UG9zaXRpb24gPSBVdGlscy5nZXRFbGVtZW50UG9zaXRpb24oZG9tRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnggLT0gZWxlbWVudFBvc2l0aW9uLng7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnkgLT0gZWxlbWVudFBvc2l0aW9uLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGFzc2VydE5vdE51bGw6IGZ1bmN0aW9uKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICBpZighdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIG51bGwgdmFsdWUgJyArIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGVtcHR5RG9tRWxlbWVudDogZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgICAgd2hpbGUoZG9tRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWRHbG9iYWxNb3VzZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgIGlmKGV2ZW50LnBhZ2VYICE9PSB1bmRlZmluZWQgJiYgZXZlbnQucGFnZVkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC54ID0gZXZlbnQucGFnZVg7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnkgPSBldmVudC5wYWdlWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC54ID0gZXZlbnQuY2xpZW50WCArIGdsb2JhbC5kb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgKyBnbG9iYWwuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnkgPSBldmVudC5jbGllbnRZICsgZ2xvYmFsLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgZ2xvYmFsLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGluZGV4T2Y6IGZ1bmN0aW9uKGFycmF5LCB2YWx1ZSkge1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoYXJyYXlbaV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIEhTTFZhbHVlOiBmdW5jdGlvbihuMSwgbjIsIGh1ZSkge1xuICAgICAgICAgICAgdmFyIHZhbDtcbiAgICAgICAgICAgIGlmKGh1ZSA+IDYpIHtcbiAgICAgICAgICAgICAgICBodWUgLT0gNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoaHVlIDwgMCkge1xuICAgICAgICAgICAgICAgIGh1ZSArPSA2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaHVlIDwgMSkge1xuICAgICAgICAgICAgICAgIHZhbCA9IG4xICsgKG4yIC0gbjEpICogaHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihodWUgPCAzKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gbjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGh1ZSA8IDQpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBuMSArIChuMiAtIG4xKSAqICg0IC0gaHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbCA9IG4xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBIU0xUb1JHQjogZnVuY3Rpb24oaCwgcywgbCkge1xuICAgICAgICAgICAgdmFyIHIsIGcsIGI7XG4gICAgICAgICAgICBoID0gaCAtIE1hdGguZmxvb3IoaCk7XG4gICAgICAgICAgICBzID0gdGhpcy5jbGFtcChzLCAwLCAxKTtcbiAgICAgICAgICAgIGwgPSB0aGlzLmNsYW1wKGwsIDAsIDEpO1xuICAgICAgICAgICAgaWYocyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHIgPSBsO1xuICAgICAgICAgICAgICAgIGcgPSBsO1xuICAgICAgICAgICAgICAgIGIgPSBsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG0xLCBtMjtcbiAgICAgICAgICAgICAgICBpZihsIDw9IDAuNSkge1xuICAgICAgICAgICAgICAgICAgICBtMiA9IGwgKiAoMSArIHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbTIgPSBsICsgcyAtIGwgKiBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtMSA9IDIuMCAqIGwgLSBtMjtcbiAgICAgICAgICAgICAgICByID0gdGhpcy5IU0xWYWx1ZShtMSwgbTIsIGggKiA2LjAgKyAyLjApO1xuICAgICAgICAgICAgICAgIGcgPSB0aGlzLkhTTFZhbHVlKG0xLCBtMiwgaCAqIDYuMCk7XG4gICAgICAgICAgICAgICAgYiA9IHRoaXMuSFNMVmFsdWUobTEsIG0yLCBoICogNi4wIC0gMi4wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcjogcixcbiAgICAgICAgICAgICAgICBnOiBnLFxuICAgICAgICAgICAgICAgIGI6IGJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgUkdCVG9IU1Y6IGZ1bmN0aW9uIFJHQlRvSFNWKGNvbG9yUkdCKSB7XG4gICAgICAgICAgICB2YXIgciA9IGNvbG9yUkdCLnIgLyAyNTU7XG4gICAgICAgICAgICB2YXIgZyA9IGNvbG9yUkdCLmcgLyAyNTU7XG4gICAgICAgICAgICB2YXIgYiA9IGNvbG9yUkdCLmIgLyAyNTU7XG4gICAgICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgICAgICAgICB2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICAgICAgICB2YXIgaCwgcywgdiA9IG1heDtcblxuICAgICAgICAgICAgdmFyIGQgPSBtYXggLSBtaW47XG4gICAgICAgICAgICBzID0gbWF4ID09PSAwID8gMCA6IGQgLyBtYXg7XG5cbiAgICAgICAgICAgIGlmKG1heCA9PT0gbWluKSB7XG4gICAgICAgICAgICAgICAgaCA9IDA7IC8vIGFjaHJvbWF0aWNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3aXRjaChtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSByOlxuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgZzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoYiAtIHIpIC8gZCArIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IChyIC0gZykgLyBkICsgNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoIC89IDY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaDogaCxcbiAgICAgICAgICAgICAgICBzOiBzLFxuICAgICAgICAgICAgICAgIHY6IHZcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgSFNWVG9SR0I6IGZ1bmN0aW9uIEhTVlRvUkdCKGgsIHMsIHYpIHtcbiAgICAgICAgICAgIHZhciByLCBnLCBiO1xuXG4gICAgICAgICAgICB2YXIgaSA9IE1hdGguZmxvb3IoaCAqIDYpO1xuICAgICAgICAgICAgdmFyIGYgPSBoICogNiAtIGk7XG4gICAgICAgICAgICB2YXIgcCA9IHYgKiAoMSAtIHMpO1xuICAgICAgICAgICAgdmFyIHEgPSB2ICogKDEgLSBmICogcyk7XG4gICAgICAgICAgICB2YXIgdCA9IHYgKiAoMSAtICgxIC0gZikgKiBzKTtcblxuICAgICAgICAgICAgc3dpdGNoKGkgJSA2KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICByID0gdjtcbiAgICAgICAgICAgICAgICAgICAgZyA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBxO1xuICAgICAgICAgICAgICAgICAgICBnID0gdjtcbiAgICAgICAgICAgICAgICAgICAgYiA9IHA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgciA9IHA7XG4gICAgICAgICAgICAgICAgICAgIGcgPSB2O1xuICAgICAgICAgICAgICAgICAgICBiID0gdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByID0gcDtcbiAgICAgICAgICAgICAgICAgICAgZyA9IHE7XG4gICAgICAgICAgICAgICAgICAgIGIgPSB2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHIgPSB0O1xuICAgICAgICAgICAgICAgICAgICBnID0gcDtcbiAgICAgICAgICAgICAgICAgICAgYiA9IHY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgciA9IHY7XG4gICAgICAgICAgICAgICAgICAgIGcgPSBwO1xuICAgICAgICAgICAgICAgICAgICBiID0gcTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcjogcGFyc2VJbnQociAqIDI1NSksXG4gICAgICAgICAgICAgICAgZzogcGFyc2VJbnQoZyAqIDI1NSksXG4gICAgICAgICAgICAgICAgYjogcGFyc2VJbnQoYiAqIDI1NSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgSFNWVG9IU0w6IGZ1bmN0aW9uKGgsIHMsIHYpIHtcbiAgICAgICAgICAgIC8vIGRldGVybWluZSB0aGUgbGlnaHRuZXNzIGluIHRoZSByYW5nZSBbMCwxMDBdXG4gICAgICAgICAgICB2YXIgbCA9ICgyIC0gcyAvIDEwMCkgKiB2IC8gMjtcblxuICAgICAgICAgICAgdmFyIGhzbCA9IHtcbiAgICAgICAgICAgICAgICAnaCc6IGgsXG4gICAgICAgICAgICAgICAgJ3MnOiBzICogdiAvIChsIDwgNTAgPyBsICogMiA6IDIwMCAtIGwgKiAyKSxcbiAgICAgICAgICAgICAgICAnbCc6IGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIGNvcnJlY3QgYSBkaXZpc2lvbi1ieS16ZXJvIGVycm9yXG4gICAgICAgICAgICBpZihpc05hTihoc2wucykpIHtcbiAgICAgICAgICAgICAgICBoc2wucyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaHNsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNsYW1wOiBmdW5jdGlvbih2LCBtaW4sIG1heCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHYsIG1heCksIG1pbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBVdGlscztcbn0pICh0aGlzKTtcblxuXG59KSgpIiwidmFyIGJlaGF2aW91cnMgPSB7XG4gICAgd2Fsa2VyOiAgcmVxdWlyZSgnLi9iZWhhdmlvdXJzL3dhbGtlcicpLFxuICAgIHNob3BLZWVwZXI6IHJlcXVpcmUoJy4vYmVoYXZpb3Vycy9zaG9wLWtlZXBlcicpLFxuICAgIGxpbmVhclRhbGtlcjogcmVxdWlyZSgnLi9iZWhhdmlvdXJzL2xpbmVhci10YWxrZXInKVxufTtcblxuXG5mdW5jdGlvbiBDaGFyYWN0ZXIoZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmluaXQoZGVzY3JpcHRpb24pOyAgICBcbn1cblxuQ2hhcmFjdGVyLnByb3RvdHlwZSA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gJ2lkbGUnO1xuICAgICAgICB0aGlzLnBoYXNlID0gMDtcbiAgICAgICAgdGhpcy5keCA9IDA7XG4gICAgICAgIHRoaXMuZHkgPSAwO1xuICAgICAgICB0aGlzLl9iZWhhdmlvdXIgPSBbXTtcblxuICAgICAgICBmb3IodmFyIHByb3BlcnR5IGluIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KHByb3BlcnR5LCBkZXNjcmlwdGlvbltwcm9wZXJ0eV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuYmVoYXZpb3VyKSB7XG4gICAgICAgICAgICB0aGlzLl9iZWhhdmlvdXIgPSB0aGlzLmJlaGF2aW91ci5tYXAoZnVuY3Rpb24oYmVoYXZpb3VyRGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdCZWhhdmlvdXIgPSBuZXcgYmVoYXZpb3Vyc1tiZWhhdmlvdXJEYXRhLnR5cGVdKGJlaGF2aW91ckRhdGEsIHRoaXMpO1xuICAgICAgICAgICAgICAgIG5ld0JlaGF2aW91ci5jaGFyYWN0ZXIgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdCZWhhdmlvdXI7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHBlcmZvcm1BY3Rpb246IGZ1bmN0aW9uIHBlcmZvcm1BY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX2JlaGF2aW91ci5mb3JFYWNoKGZ1bmN0aW9uKGJlaGF2aW91cikge1xuICAgICAgICAgICAgYmVoYXZpb3VyLmFjdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2V0UHJvcGVydHk6IGZ1bmN0aW9uIHNldFByb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmKHRoaXNbbmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBpZihuYW1lID09PSAnYWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMucGhhc2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcjtcbiIsInZhciBSU1ZQID0gcmVxdWlyZSgncnN2cCcpO1xuXG52YXIgVXRpbHMgPSByZXF1aXJlKCd1dGlscycpO1xudmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcbnZhciBDaGFyYWN0ZXIgPSByZXF1aXJlKCcuL2NoYXJhY3RlcicpO1xuXG5cbnZhciBpbnRlcmFjdGlvbnMgPSB7XG4gICAgRGlhbG9ndWU6IHJlcXVpcmUoJy4vaW50ZXJhY3Rpb25zL2RpYWxvZ3VlJyksXG4gICAgV2FuZGVyOiByZXF1aXJlKCcuL2ludGVyYWN0aW9ucy93YW5kZXInKSxcbiAgICBQcmVzc0FueUtleTogcmVxdWlyZSgnLi9pbnRlcmFjdGlvbnMvcHJlc3MtYW55LWtleScpLFxuICAgIGRlZmF1bHQ6IHJlcXVpcmUoJy4vaW50ZXJhY3Rpb25zL2RlZmF1bHQnKVxufTtcblxudmFyIHJlbmRlcmVycyA9IHtcbiAgICBQb2ludE5DbGljazogcmVxdWlyZSgnLi9yZW5kZXJlcnMvcG9pbnQtbi1jbGljaycpLFxuICAgIHRpdGxlOiByZXF1aXJlKCcuL3JlbmRlcmVycy90aXRsZScpLFxuICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge31cbn07XG5cblxuZnVuY3Rpb24gR2FtZShjYW52YXMsIGdhbWVTdHJ1Y3R1cmUpIHtcbiAgICB0aGlzLnBoYXNlTmFtZSA9IG51bGw7XG4gICAgdGhpcy5jaGFyYWN0ZXJzID0ge307XG4gICAgdGhpcy5nYW1lU3RydWN0dXJlID0gZ2FtZVN0cnVjdHVyZTtcbiAgICB0aGlzLnBoYXNlSW5zdGFuY2VzID0ge307XG4gICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRIYW5kbGVycyA9IHt9O1xuICAgIHRoaXMubGFzdFVwZGF0ZSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy5pbWFnZXMgPSB7fTtcbiAgICB0aGlzLmRlYnVnID0gdGhpcy5nYW1lU3RydWN0dXJlLmRlYnVnO1xuICAgIHRoaXMua2V5cyA9IGtleXM7XG4gICAgdGhpcy5nYW1lQ2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuZ2FtZUNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuZ2FtZUNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5jdHggPSB0aGlzLmdhbWVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09ICdJJy5jaGFyQ29kZUF0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYnVnID0gIXRoaXMuZGVidWc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmtleXNbZXZlbnQua2V5Q29kZV0gPSB0cnVlO1xuICAgICAgICAgICAgaWYoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleXMuc2hpZnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5yZWdpc3RlcmVkRXZlbnRIYW5kbGVycy5rZXlkb3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRIYW5kbGVycy5rZXlkb3duKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmtleUNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgICBpZighZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleXMuc2hpZnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucmVnaXN0ZXJlZEV2ZW50SGFuZGxlcnMua2V5dXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudEhhbmRsZXJzLmtleXVwKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgdGhpcy5nYW1lQ2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbn1cblxuR2FtZS5wcm90b3R5cGUgPSB7XG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nb3RvUGhhc2UodGhpcy5nYW1lU3RydWN0dXJlLmVudHJ5KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldEN1cnJlbnRQaGFzZTogZnVuY3Rpb24gZ2V0Q3VycmVudFBoYXNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5waGFzZUluc3RhbmNlc1t0aGlzLnBoYXNlTmFtZV07XG4gICAgfSxcblxuICAgIGdvdG9TaW5rOiBmdW5jdGlvbiBnb3RvU2luayhzaW5rTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nb3RvUGhhc2UodGhpcy5nYW1lU3RydWN0dXJlLnBsYW5bdGhpcy5waGFzZU5hbWVdW3NpbmtOYW1lXSk7XG4gICAgfSxcblxuICAgIHVucmVnaXN0ZXJFdmVudEhhbmRsZXJzOiBmdW5jdGlvbiB1bnJlZ2lzdGVyRXZlbnRIYW5kbGVycyhwaGFzZSkge1xuICAgICAgICB2YXIgZXZlbnRIYW5kbGVycyA9IHBoYXNlLmV2ZW50SGFuZGxlcnM7XG5cbiAgICAgICAgaWYoIWV2ZW50SGFuZGxlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IodmFyIGV2ZW50TmFtZSBpbiBldmVudEhhbmRsZXJzKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yZWdpc3RlcmVkRXZlbnRIYW5kbGVyc1tldmVudE5hbWVdO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlZ2lzdGVyRXZlbnRIYW5kbGVyczogZnVuY3Rpb24gcmVnaXN0ZXJFdmVudEhhbmRsZXIocGhhc2UpIHtcbiAgICAgICAgdmFyIGV2ZW50SGFuZGxlcnMgPSBwaGFzZS5ldmVudEhhbmRsZXJzO1xuXG4gICAgICAgIGlmKCFldmVudEhhbmRsZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yKHZhciBldmVudE5hbWUgaW4gZXZlbnRIYW5kbGVycykge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRIYW5kbGVyc1tldmVudE5hbWVdID0gZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdLmJpbmQocGhhc2UpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGxvYWRJbWFnZXM6IGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUlNWUC5Qcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYoaW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgVXRpbHMubG9hZEltYWdlcyhpbWFnZXMsIGZ1bmN0aW9uKGltZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbWdzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldEhpZXJhcmNoeTogZnVuY3Rpb24gZ2V0SGllcmFyY2h5KHBoYXNlTmFtZSwgY2hpbGRyZW4pIHtcbiAgICAgICAgaWYoIWNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjdXJyZW50SGllcmFyY2h5ID0gW3BoYXNlTmFtZV0uY29uY2F0KGNoaWxkcmVuKTtcbiAgICAgICAgaWYodGhpcy5nYW1lU3RydWN0dXJlLnBoYXNlc1twaGFzZU5hbWVdLmJhc2VkT24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhpZXJhcmNoeSh0aGlzLmdhbWVTdHJ1Y3R1cmUucGhhc2VzW3BoYXNlTmFtZV0uYmFzZWRPbiwgY3VycmVudEhpZXJhcmNoeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEhpZXJhcmNoeTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRGdWxsRGVzY3JpcHRpb246IGZ1bmN0aW9uIGdldEZ1bGxEZXNjcmlwdGlvbihwaGFzZU5hbWUpIHtcbiAgICAgICAgdmFyIGhpZXJhcmNoeSA9IHRoaXMuZ2V0SGllcmFyY2h5KHBoYXNlTmFtZSk7XG4gICAgICAgIHJldHVybiBoaWVyYXJjaHkucmVkdWNlKGZ1bmN0aW9uKHBoYXNlU29GYXIsIGN1cnJlbnRQaGFzZU5hbWUpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50RGVzY3JpcHRpb24gPSB0aGlzLmdhbWVTdHJ1Y3R1cmUucGhhc2VzW2N1cnJlbnRQaGFzZU5hbWVdO1xuICAgICAgICAgICAgZm9yKHZhciBwcm9wZXJ0eU5hbWUgaW4gY3VycmVudERlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgICAgIHBoYXNlU29GYXJbcHJvcGVydHlOYW1lXSAmJlxuICAgICAgICAgICAgICAgICAgICAhKGN1cnJlbnREZXNjcmlwdGlvbi5ub0luaGVyaXQgJiYgY3VycmVudERlc2NyaXB0aW9uLm5vSW5oZXJpdFtwcm9wZXJ0eU5hbWVdKSAmJlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YoY3VycmVudERlc2NyaXB0aW9uW3Byb3BlcnR5TmFtZV0pICE9PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBwaGFzZVNvRmFyW3Byb3BlcnR5TmFtZV0gPSBVdGlscy5kZWVwTWVyZ2UocGhhc2VTb0Zhcltwcm9wZXJ0eU5hbWVdLCBjdXJyZW50RGVzY3JpcHRpb25bcHJvcGVydHlOYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwaGFzZVNvRmFyW3Byb3BlcnR5TmFtZV0gPSBjdXJyZW50RGVzY3JpcHRpb25bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGhhc2VTb0ZhcjtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCB7fSk7XG4gICAgfSxcblxuICAgIGZpbHRlckltYWdlc1RvTG9hZDogZnVuY3Rpb24gZmlsdGVySW1hZ2VzVG9Mb2FkKHBoYXNlKSB7XG4gICAgICAgIHZhciBpbWFnZXNUb0xvYWQgPSB7fTtcbiAgICAgICAgdmFyIGltYWdlTmFtZTtcbiAgICAgICAgdmFyIGNoYXJhY3Rlck5hbWU7XG5cbiAgICAgICAgaWYocGhhc2UucmVuZGVyaW5nLnBsYW5lcykge1xuICAgICAgICAgICAgcGhhc2UucmVuZGVyaW5nLnBsYW5lcy5mb3JFYWNoKGZ1bmN0aW9uKHBsYW5lKXtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5pbWFnZXNbcGxhbmUuaW1hZ2VdKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc1RvTG9hZFtwbGFuZS5pbWFnZV0gPSB0aGlzLmdhbWVTdHJ1Y3R1cmUucGF0aHNbcGxhbmUuaW1hZ2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwaGFzZS5yZW5kZXJpbmcuaW1hZ2UpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmltYWdlc1twaGFzZS5yZW5kZXJpbmcuaW1hZ2VdKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VzVG9Mb2FkW3BoYXNlLnJlbmRlcmluZy5pbWFnZV0gPSB0aGlzLmdhbWVTdHJ1Y3R1cmUucGF0aHNbcGhhc2UucmVuZGVyaW5nLmltYWdlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihjaGFyYWN0ZXJOYW1lIGluIHBoYXNlLmNoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgIGZvcih2YXIgc3RhdGVOYW1lIGluIHRoaXMuZ2FtZVN0cnVjdHVyZS5zcHJpdGVzW3BoYXNlLmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV0uc3ByaXRlc10pIHtcbiAgICAgICAgICAgICAgICBpbWFnZU5hbWUgPSB0aGlzLmdhbWVTdHJ1Y3R1cmUuc3ByaXRlc1twaGFzZS5jaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdLnNwcml0ZXNdW3N0YXRlTmFtZV07XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuaW1hZ2VzW2ltYWdlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzVG9Mb2FkW2ltYWdlTmFtZV0gPSB0aGlzLmdhbWVTdHJ1Y3R1cmUucGF0aHNbaW1hZ2VOYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW1hZ2VzVG9Mb2FkO1xuICAgIH0sXG5cbiAgICBtZXJnZUltYWdlczogZnVuY3Rpb24gbWVyZ2VJbWFnZXMoaW1hZ2VzKSB7XG4gICAgICAgIHZhciBpbWFnZU5hbWU7XG5cbiAgICAgICAgZm9yKGltYWdlTmFtZSBpbiBpbWFnZXMpIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzW2ltYWdlTmFtZV0gPSBpbWFnZXNbaW1hZ2VOYW1lXTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVXaXRoRGVmYXVsdHM6IGZ1bmN0aW9uIHVwZGF0ZVdpdGhEZWZhdWx0cyhwaGFzZURlc2NyaXB0aW9uKSB7XG4gICAgICAgIGlmKCFwaGFzZURlc2NyaXB0aW9uLmdhbWVwbGF5VHlwZSkge1xuICAgICAgICAgICAgcGhhc2VEZXNjcmlwdGlvbi5nYW1lcGxheVR5cGUgPSAnZGVmYXVsdCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXBoYXNlRGVzY3JpcHRpb24ucmVuZGVyaW5nKSB7XG4gICAgICAgICAgICBwaGFzZURlc2NyaXB0aW9uLnJlbmRlcmluZyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImRlZmF1bHRcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRQaGFzZURhdGE6IGZ1bmN0aW9uIGdldFBoYXNlRGF0YShwaGFzZU5hbWUpIHtcbiAgICAgICAgaWYoIXRoaXMuZ2FtZVN0cnVjdHVyZS5waGFzZXNbdGhpcy5waGFzZU5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyhuZXcgRXJyb3IoJ05vIHBoYXNlIHdpdGggbmFtZSAnICsgcGhhc2VOYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBoYXNlRGVzY3JpcHRpb24gPSB0aGlzLmdldEZ1bGxEZXNjcmlwdGlvbih0aGlzLnBoYXNlTmFtZSk7XG4gICAgICAgIHRoaXMudXBkYXRlV2l0aERlZmF1bHRzKHBoYXNlRGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gcGhhc2VEZXNjcmlwdGlvbjtcbiAgICB9LFxuXG4gICAgZ290b1BoYXNlOiBmdW5jdGlvbiBnb3RvUGhhc2UocGhhc2VOYW1lKSB7XG4gICAgICAgIHZhciBwaGFzZURlc2NyaXB0aW9uO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lO1xuICAgICAgICB0aGlzLmNoYW5naW5nUGhhc2UgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBSU1ZQLlByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnBoYXNlSW5zdGFuY2VzW3RoaXMucGhhc2VOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVucmVnaXN0ZXJFdmVudEhhbmRsZXJzKHRoaXMucGhhc2VJbnN0YW5jZXNbdGhpcy5waGFzZU5hbWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5waGFzZU5hbWUgPSBwaGFzZU5hbWU7XG4gICAgICAgICAgICAgICAgcGhhc2VEZXNjcmlwdGlvbiA9IHRoaXMuZ2V0UGhhc2VEYXRhKHBoYXNlTmFtZSk7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlc1RvTG9hZCA9IHRoaXMuZmlsdGVySW1hZ2VzVG9Mb2FkKHBoYXNlRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKGltYWdlc1RvTG9hZCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRJbWFnZXMoaW1hZ2VzVG9Mb2FkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihpbWFnZXMpIHtcbiAgICAgICAgICAgICAgICBpZihpbWFnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXJnZUltYWdlcyhpbWFnZXMpO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICBcbiAgICAgICAgICAgICAgICBpZighdGhpcy5waGFzZUluc3RhbmNlc1twaGFzZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFpbnRlcmFjdGlvbnNbcGhhc2VEZXNjcmlwdGlvbi5nYW1lcGxheVR5cGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyhuZXcgRXJyb3IoJ25vIGdhbWVwbGF5IGNhbGxlZCAnICsgcGhhc2VEZXNjcmlwdGlvbi5nYW1lcGxheVR5cGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBoYXNlSW5zdGFuY2VzW3BoYXNlTmFtZV0gPSBuZXcgaW50ZXJhY3Rpb25zW3BoYXNlRGVzY3JpcHRpb24uZ2FtZXBsYXlUeXBlXSh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waGFzZUluc3RhbmNlc1twaGFzZU5hbWVdLmhvc3QgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBoYXNlSW5zdGFuY2VzW3BoYXNlTmFtZV0ubmFtZSA9IHBoYXNlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKHByb3BlcnR5TmFtZSBpbiBwaGFzZURlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihbJ2ltYWdlcycsICdnYW1lcGxheVR5cGUnXS5pbmRleE9mKHByb3BlcnR5TmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waGFzZUluc3RhbmNlc1twaGFzZU5hbWVdW3Byb3BlcnR5TmFtZV0gPSBwaGFzZURlc2NyaXB0aW9uW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYocGhhc2VEZXNjcmlwdGlvbi5jaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJEZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYXJhY3Rlck5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGZvcihjaGFyYWN0ZXJOYW1lIGluIHBoYXNlRGVzY3JpcHRpb24uY2hhcmFjdGVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuY2hhcmFjdGVyc1tjaGFyYWN0ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckRlc2NyaXB0aW9uID0gcGhhc2VEZXNjcmlwdGlvbi5jaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyc1tjaGFyYWN0ZXJOYW1lXSA9IG5ldyBDaGFyYWN0ZXIoY2hhcmFjdGVyRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHByb3BlcnR5TmFtZSBpbiBwaGFzZURlc2NyaXB0aW9uLmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdW3Byb3BlcnR5TmFtZV0gPSBwaGFzZURlc2NyaXB0aW9uLmNoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV1bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yKGNoYXJhY3Rlck5hbWUgaW4gdGhpcy5jaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZighcGhhc2VEZXNjcmlwdGlvbi5jaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2hhcmFjdGVyc1tjaGFyYWN0ZXJOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMucGhhc2VJbnN0YW5jZXNbcGhhc2VOYW1lXS5pbml0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGhhc2VJbnN0YW5jZXNbcGhhc2VOYW1lXS5pbml0KHBoYXNlTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudEhhbmRsZXJzKHRoaXMucGhhc2VJbnN0YW5jZXNbdGhpcy5waGFzZU5hbWVdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJzW3RoaXMucGhhc2VJbnN0YW5jZXNbdGhpcy5waGFzZU5hbWVdLnJlbmRlcmluZy50eXBlXTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5naW5nUGhhc2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHJlbmRlckRlYnVnOiBmdW5jdGlvbiByZW5kZXJEZWJ1ZygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdub3JtYWwgMTRwdCBoZWx2ZXRpY2EnO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLnBoYXNlTmFtZSwgMTAsIDI0KTtcbiAgICB9LFxuXG4gICAgbG9vcDogZnVuY3Rpb24gbG9vcCh0aW1lKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG4gICAgICAgIGlmKCF0aGlzLmNoYW5naW5nUGhhc2UgJiYgdGhpcy5yZW5kZXJlcikge1xuICAgICAgICAgICAgaWYoIXRoaXMubGFzdFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFVwZGF0ZSA9IHRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLnBoYXNlSW5zdGFuY2VzW3RoaXMucGhhc2VOYW1lXS51cGRhdGUodGltZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RVcGRhdGUgPSB0aW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighdGhpcy5sYXN0RHJhdykge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdERyYXcgPSB0aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5yZW5kZXJlcih0aW1lLCB0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdERyYXcgPSB0aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5kZWJ1Zykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRGVidWcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iLCJmdW5jdGlvbiBXYWxrZXIoZGVmaW5pdGlvbiwgY2hhcmFjdGVyKSB7XG4gICAgdGhpcy53YXlQb2ludHMgPSBkZWZpbml0aW9uLndheVBvaW50cztcbiAgICB0aGlzLmN1cnJlbnRXYXlwb2ludCA9IG51bGw7XG59XG5cbldhbGtlci5wcm90b3R5cGUgPSB7XG4gICAgaW5jV2F5UG9pbnQ6IGZ1bmN0aW9uIGluY1dheVBvaW50KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRXYXlwb2ludCA9ICh0aGlzLmN1cnJlbnRXYXlwb2ludCArIDEpICUgdGhpcy53YXlQb2ludHMubGVuZ3RoO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYodGhpcy5jdXJyZW50V2F5cG9pbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnggPSB0aGlzLndheVBvaW50c1swXS54O1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIueSA9IHRoaXMud2F5UG9pbnRzWzBdLnk7XG4gICAgICAgICAgICB0aGlzLmluY1dheVBvaW50KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGN1cnJlbnRXYXlwb2ludCA9IHRoaXMud2F5UG9pbnRzW3RoaXMuY3VycmVudFdheXBvaW50XTtcbiAgICAgICAgdmFyIHdhbGtWZWN0b3IgPSB7XG4gICAgICAgICAgICB4OiBjdXJyZW50V2F5cG9pbnQueCAtIHRoaXMuY2hhcmFjdGVyLngsXG4gICAgICAgICAgICB5OiBjdXJyZW50V2F5cG9pbnQueSAtIHRoaXMuY2hhcmFjdGVyLnlcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGRpc3RhbmNlRnJvbU5leHRXYXlwb2ludCA9IE1hdGguc3FydCgod2Fsa1ZlY3Rvci54KSAqICh3YWxrVmVjdG9yLngpICsgKHdhbGtWZWN0b3IueSkgKiAod2Fsa1ZlY3Rvci55KSk7XG4gICAgICAgIGlmKGRpc3RhbmNlRnJvbU5leHRXYXlwb2ludCA8IDEwKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci54ID0gdGhpcy53YXlQb2ludHNbdGhpcy5jdXJyZW50V2F5cG9pbnRdLng7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci55ID0gdGhpcy53YXlQb2ludHNbdGhpcy5jdXJyZW50V2F5cG9pbnRdLnk7XG4gICAgICAgICAgICB0aGlzLmluY1dheVBvaW50KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2Fsa1ZlY3Rvci54ID0gd2Fsa1ZlY3Rvci54IC8gZGlzdGFuY2VGcm9tTmV4dFdheXBvaW50O1xuICAgICAgICB3YWxrVmVjdG9yLnkgPSB3YWxrVmVjdG9yLnkgLyBkaXN0YW5jZUZyb21OZXh0V2F5cG9pbnQ7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyLmR4ID0gd2Fsa1ZlY3Rvci54ICogMjtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIuZHkgPSB3YWxrVmVjdG9yLnkgKiAyO1xuICAgIH0sXG4gICAgXG4gICAgYWN0aW9uOiBmdW5jdGlvbiBhY3Rpb24oKSB7XG4gICAgICAgIFxuICAgIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBXYWxrZXI7XG4iLCJmdW5jdGlvbiBTaG9wS2VlcGVyKGRlZmluaXRpb24sIGNoYXJhY3Rlcikge1xufVxuXG5TaG9wS2VlcGVyLnByb3RvdHlwZSA9IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIuZHggPSAxO1xuICAgIH0sXG5cbiAgICBhY3Rpb246IGZ1bmN0aW9uIGFjdGlvbigpIHtcbiAgICAgICAgXG4gICAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNob3BLZWVwZXI7IiwiZnVuY3Rpb24gTGluZWFyVGFsa2VyKGRlZmluaXRpb24sIGNoYXJhY3Rlcikge1xuICAgIHRoaXMuZGlhbG9ncyA9IGRlZmluaXRpb24uZGlhbG9ncztcbiAgICB0aGlzLmN1cnJlbnREaWFsb2cgPSAwO1xuICAgIHRoaXMuY3VycmVudExpbmUgPSAwO1xufVxuXG5MaW5lYXJUYWxrZXIucHJvdG90eXBlID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuXG4gICAgfSxcblxuICAgIF9pbmNEaWFsb2c6IGZ1bmN0aW9uIF9pbmNEaWFsb2coKSB7XG4gICAgICAgIGlmKHRoaXMuY3VycmVudExpbmUgKyAxID49IHRoaXMuZGlhbG9nc1t0aGlzLmN1cnJlbnREaWFsb2ddLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50RGlhbG9nICsgMSA8IHRoaXMuZGlhbG9ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREaWFsb2cgKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaW5lID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExpbmUgKz0gMTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhY3Rpb246IGZ1bmN0aW9uIGFjdGlvbigpIHtcbiAgICAgICAgaWYoXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ3MubGVuZ3RoID49IHRoaXMuY3VycmVudERpYWxvZyArIDEgJiZcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nc1t0aGlzLmN1cnJlbnREaWFsb2ddLmxlbmd0aCA+PSB0aGlzLmN1cnJlbnRMaW5lICYmXG4gICAgICAgICAgICAhKHRoaXMuZGlhbG9nV2FzSW5jcmVtZW50ZWQgJiYgdGhpcy5jaGFyYWN0ZXIudGFsa0FjdGl2YXRpb24pXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuY3VycmVudExpbmUgPSB0aGlzLmRpYWxvZ3NbdGhpcy5jdXJyZW50RGlhbG9nXVt0aGlzLmN1cnJlbnRMaW5lXTtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnRhbGtBY3RpdmF0aW9uID0gMTIwO1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dXYXNJbmNyZW1lbnRlZCA9IHRoaXMuX2luY0RpYWxvZygpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmVhclRhbGtlcjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbiIsIihmdW5jdGlvbihwcm9jZXNzKXsvKiFcbiAqIEBvdmVydmlldyBSU1ZQIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTQgWWVodWRhIEthdHosIFRvbSBEYWxlLCBTdGVmYW4gUGVubmVyIGFuZCBjb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aWxkZWlvL3JzdnAuanMvbWFzdGVyL0xJQ0VOU0VcbiAqIEB2ZXJzaW9uICAgMy4wLjE4XG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHV0aWxzJCRvYmplY3RPckZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHV0aWxzJCRpc0Z1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCR1dGlscyQkaXNNYXliZVRoZW5hYmxlKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkdXRpbHMkJF9pc0FycmF5O1xuICAgIGlmICghQXJyYXkuaXNBcnJheSkge1xuICAgICAgbGliJHJzdnAkdXRpbHMkJF9pc0FycmF5ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpYiRyc3ZwJHV0aWxzJCRfaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJHV0aWxzJCRpc0FycmF5ID0gbGliJHJzdnAkdXRpbHMkJF9pc0FycmF5O1xuXG4gICAgdmFyIGxpYiRyc3ZwJHV0aWxzJCRub3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9O1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkdXRpbHMkJEYoKSB7IH1cblxuICAgIHZhciBsaWIkcnN2cCR1dGlscyQkb19jcmVhdGUgPSAoT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiAobykge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2Vjb25kIGFyZ3VtZW50IG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgICAgIH1cbiAgICAgIGxpYiRyc3ZwJHV0aWxzJCRGLnByb3RvdHlwZSA9IG87XG4gICAgICByZXR1cm4gbmV3IGxpYiRyc3ZwJHV0aWxzJCRGKCk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkZXZlbnRzJCRpbmRleE9mKGNhbGxiYWNrcywgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGk9MCwgbD1jYWxsYmFja3MubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgICBpZiAoY2FsbGJhY2tzW2ldID09PSBjYWxsYmFjaykgeyByZXR1cm4gaTsgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkZXZlbnRzJCRjYWxsYmFja3NGb3Iob2JqZWN0KSB7XG4gICAgICB2YXIgY2FsbGJhY2tzID0gb2JqZWN0Ll9wcm9taXNlQ2FsbGJhY2tzO1xuXG4gICAgICBpZiAoIWNhbGxiYWNrcykge1xuICAgICAgICBjYWxsYmFja3MgPSBvYmplY3QuX3Byb21pc2VDYWxsYmFja3MgPSB7fTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhbGxiYWNrcztcbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkZXZlbnRzJCRkZWZhdWx0ID0ge1xuXG4gICAgICAvKipcbiAgICAgICAgYFJTVlAuRXZlbnRUYXJnZXQubWl4aW5gIGV4dGVuZHMgYW4gb2JqZWN0IHdpdGggRXZlbnRUYXJnZXQgbWV0aG9kcy4gRm9yXG4gICAgICAgIEV4YW1wbGU6XG5cbiAgICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgICB2YXIgb2JqZWN0ID0ge307XG5cbiAgICAgICAgUlNWUC5FdmVudFRhcmdldC5taXhpbihvYmplY3QpO1xuXG4gICAgICAgIG9iamVjdC5vbignZmluaXNoZWQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIC8vIGhhbmRsZSBldmVudFxuICAgICAgICB9KTtcblxuICAgICAgICBvYmplY3QudHJpZ2dlcignZmluaXNoZWQnLCB7IGRldGFpbDogdmFsdWUgfSk7XG4gICAgICAgIGBgYFxuXG4gICAgICAgIGBFdmVudFRhcmdldC5taXhpbmAgYWxzbyB3b3JrcyB3aXRoIHByb3RvdHlwZXM6XG5cbiAgICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgICB2YXIgUGVyc29uID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgUlNWUC5FdmVudFRhcmdldC5taXhpbihQZXJzb24ucHJvdG90eXBlKTtcblxuICAgICAgICB2YXIgeWVodWRhID0gbmV3IFBlcnNvbigpO1xuICAgICAgICB2YXIgdG9tID0gbmV3IFBlcnNvbigpO1xuXG4gICAgICAgIHllaHVkYS5vbigncG9rZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1llaHVkYSBzYXlzIE9XJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvbS5vbigncG9rZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1RvbSBzYXlzIE9XJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHllaHVkYS50cmlnZ2VyKCdwb2tlJyk7XG4gICAgICAgIHRvbS50cmlnZ2VyKCdwb2tlJyk7XG4gICAgICAgIGBgYFxuXG4gICAgICAgIEBtZXRob2QgbWl4aW5cbiAgICAgICAgQGZvciBSU1ZQLkV2ZW50VGFyZ2V0XG4gICAgICAgIEBwcml2YXRlXG4gICAgICAgIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIGV4dGVuZCB3aXRoIEV2ZW50VGFyZ2V0IG1ldGhvZHNcbiAgICAgICovXG4gICAgICAnbWl4aW4nOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgb2JqZWN0WydvbiddICAgICAgPSB0aGlzWydvbiddO1xuICAgICAgICBvYmplY3RbJ29mZiddICAgICA9IHRoaXNbJ29mZiddO1xuICAgICAgICBvYmplY3RbJ3RyaWdnZXInXSA9IHRoaXNbJ3RyaWdnZXInXTtcbiAgICAgICAgb2JqZWN0Ll9wcm9taXNlQ2FsbGJhY2tzID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYGV2ZW50TmFtZWAgaXMgdHJpZ2dlcmVkXG5cbiAgICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgICBvYmplY3Qub24oJ2V2ZW50JywgZnVuY3Rpb24oZXZlbnRJbmZvKXtcbiAgICAgICAgICAvLyBoYW5kbGUgdGhlIGV2ZW50XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9iamVjdC50cmlnZ2VyKCdldmVudCcpO1xuICAgICAgICBgYGBcblxuICAgICAgICBAbWV0aG9kIG9uXG4gICAgICAgIEBmb3IgUlNWUC5FdmVudFRhcmdldFxuICAgICAgICBAcHJpdmF0ZVxuICAgICAgICBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGxpc3RlbiBmb3JcbiAgICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGV2ZW50IGlzIHRyaWdnZXJlZC5cbiAgICAgICovXG4gICAgICAnb24nOiBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBhbGxDYWxsYmFja3MgPSBsaWIkcnN2cCRldmVudHMkJGNhbGxiYWNrc0Zvcih0aGlzKSwgY2FsbGJhY2tzO1xuXG4gICAgICAgIGNhbGxiYWNrcyA9IGFsbENhbGxiYWNrc1tldmVudE5hbWVdO1xuXG4gICAgICAgIGlmICghY2FsbGJhY2tzKSB7XG4gICAgICAgICAgY2FsbGJhY2tzID0gYWxsQ2FsbGJhY2tzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaWIkcnN2cCRldmVudHMkJGluZGV4T2YoY2FsbGJhY2tzLCBjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAgWW91IGNhbiB1c2UgYG9mZmAgdG8gc3RvcCBmaXJpbmcgYSBwYXJ0aWN1bGFyIGNhbGxiYWNrIGZvciBhbiBldmVudDpcblxuICAgICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICAgIGZ1bmN0aW9uIGRvU3R1ZmYoKSB7IC8vIGRvIHN0dWZmISB9XG4gICAgICAgIG9iamVjdC5vbignc3R1ZmYnLCBkb1N0dWZmKTtcblxuICAgICAgICBvYmplY3QudHJpZ2dlcignc3R1ZmYnKTsgLy8gZG9TdHVmZiB3aWxsIGJlIGNhbGxlZFxuXG4gICAgICAgIC8vIFVucmVnaXN0ZXIgT05MWSB0aGUgZG9TdHVmZiBjYWxsYmFja1xuICAgICAgICBvYmplY3Qub2ZmKCdzdHVmZicsIGRvU3R1ZmYpO1xuICAgICAgICBvYmplY3QudHJpZ2dlcignc3R1ZmYnKTsgLy8gZG9TdHVmZiB3aWxsIE5PVCBiZSBjYWxsZWRcbiAgICAgICAgYGBgXG5cbiAgICAgICAgSWYgeW91IGRvbid0IHBhc3MgYSBgY2FsbGJhY2tgIGFyZ3VtZW50IHRvIGBvZmZgLCBBTEwgY2FsbGJhY2tzIGZvciB0aGVcbiAgICAgICAgZXZlbnQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgZXZlbnQgZmlyZXMuIEZvciBleGFtcGxlOlxuXG4gICAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgICAgdmFyIGNhbGxiYWNrMSA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgICAgdmFyIGNhbGxiYWNrMiA9IGZ1bmN0aW9uKCl7fTtcblxuICAgICAgICBvYmplY3Qub24oJ3N0dWZmJywgY2FsbGJhY2sxKTtcbiAgICAgICAgb2JqZWN0Lm9uKCdzdHVmZicsIGNhbGxiYWNrMik7XG5cbiAgICAgICAgb2JqZWN0LnRyaWdnZXIoJ3N0dWZmJyk7IC8vIGNhbGxiYWNrMSBhbmQgY2FsbGJhY2syIHdpbGwgYmUgZXhlY3V0ZWQuXG5cbiAgICAgICAgb2JqZWN0Lm9mZignc3R1ZmYnKTtcbiAgICAgICAgb2JqZWN0LnRyaWdnZXIoJ3N0dWZmJyk7IC8vIGNhbGxiYWNrMSBhbmQgY2FsbGJhY2syIHdpbGwgbm90IGJlIGV4ZWN1dGVkIVxuICAgICAgICBgYGBcblxuICAgICAgICBAbWV0aG9kIG9mZlxuICAgICAgICBAZm9yIFJTVlAuRXZlbnRUYXJnZXRcbiAgICAgICAgQHByaXZhdGVcbiAgICAgICAgQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSBldmVudCB0byBzdG9wIGxpc3RlbmluZyB0b1xuICAgICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBvcHRpb25hbCBhcmd1bWVudC4gSWYgZ2l2ZW4sIG9ubHkgdGhlIGZ1bmN0aW9uXG4gICAgICAgIGdpdmVuIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBldmVudCdzIGNhbGxiYWNrIHF1ZXVlLiBJZiBubyBgY2FsbGJhY2tgXG4gICAgICAgIGFyZ3VtZW50IGlzIGdpdmVuLCBhbGwgY2FsbGJhY2tzIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBldmVudCdzIGNhbGxiYWNrXG4gICAgICAgIHF1ZXVlLlxuICAgICAgKi9cbiAgICAgICdvZmYnOiBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBhbGxDYWxsYmFja3MgPSBsaWIkcnN2cCRldmVudHMkJGNhbGxiYWNrc0Zvcih0aGlzKSwgY2FsbGJhY2tzLCBpbmRleDtcblxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgYWxsQ2FsbGJhY2tzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFja3MgPSBhbGxDYWxsYmFja3NbZXZlbnROYW1lXTtcblxuICAgICAgICBpbmRleCA9IGxpYiRyc3ZwJGV2ZW50cyQkaW5kZXhPZihjYWxsYmFja3MsIGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7IGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpOyB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAgVXNlIGB0cmlnZ2VyYCB0byBmaXJlIGN1c3RvbSBldmVudHMuIEZvciBleGFtcGxlOlxuXG4gICAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgICAgb2JqZWN0Lm9uKCdmb28nLCBmdW5jdGlvbigpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdmb28gZXZlbnQgaGFwcGVuZWQhJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBvYmplY3QudHJpZ2dlcignZm9vJyk7XG4gICAgICAgIC8vICdmb28gZXZlbnQgaGFwcGVuZWQhJyBsb2dnZWQgdG8gdGhlIGNvbnNvbGVcbiAgICAgICAgYGBgXG5cbiAgICAgICAgWW91IGNhbiBhbHNvIHBhc3MgYSB2YWx1ZSBhcyBhIHNlY29uZCBhcmd1bWVudCB0byBgdHJpZ2dlcmAgdGhhdCB3aWxsIGJlXG4gICAgICAgIHBhc3NlZCBhcyBhbiBhcmd1bWVudCB0byBhbGwgZXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgZXZlbnQ6XG5cbiAgICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgICBvYmplY3Qub24oJ2ZvbycsIGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZS5uYW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JqZWN0LnRyaWdnZXIoJ2ZvbycsIHsgbmFtZTogJ2JhcicgfSk7XG4gICAgICAgIC8vICdiYXInIGxvZ2dlZCB0byB0aGUgY29uc29sZVxuICAgICAgICBgYGBcblxuICAgICAgICBAbWV0aG9kIHRyaWdnZXJcbiAgICAgICAgQGZvciBSU1ZQLkV2ZW50VGFyZ2V0XG4gICAgICAgIEBwcml2YXRlXG4gICAgICAgIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gYmUgdHJpZ2dlcmVkXG4gICAgICAgIEBwYXJhbSB7QW55fSBvcHRpb25zIG9wdGlvbmFsIHZhbHVlIHRvIGJlIHBhc3NlZCB0byBhbnkgZXZlbnQgaGFuZGxlcnMgZm9yXG4gICAgICAgIHRoZSBnaXZlbiBgZXZlbnROYW1lYFxuICAgICAgKi9cbiAgICAgICd0cmlnZ2VyJzogZnVuY3Rpb24oZXZlbnROYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBhbGxDYWxsYmFja3MgPSBsaWIkcnN2cCRldmVudHMkJGNhbGxiYWNrc0Zvcih0aGlzKSwgY2FsbGJhY2tzLCBjYWxsYmFjaztcblxuICAgICAgICBpZiAoY2FsbGJhY2tzID0gYWxsQ2FsbGJhY2tzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAvLyBEb24ndCBjYWNoZSB0aGUgY2FsbGJhY2tzLmxlbmd0aCBzaW5jZSBpdCBtYXkgZ3Jvd1xuICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2tzW2ldO1xuXG4gICAgICAgICAgICBjYWxsYmFjayhvcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnID0ge1xuICAgICAgaW5zdHJ1bWVudDogZmFsc2VcbiAgICB9O1xuXG4gICAgbGliJHJzdnAkZXZlbnRzJCRkZWZhdWx0WydtaXhpbiddKGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnKTtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlndXJlKG5hbWUsIHZhbHVlKSB7XG4gICAgICBpZiAobmFtZSA9PT0gJ29uZXJyb3InKSB7XG4gICAgICAgIC8vIGhhbmRsZSBmb3IgbGVnYWN5IHVzZXJzIHRoYXQgZXhwZWN0IHRoZSBhY3R1YWxcbiAgICAgICAgLy8gZXJyb3IgdG8gYmUgcGFzc2VkIHRvIHRoZWlyIGZ1bmN0aW9uIGFkZGVkIHZpYVxuICAgICAgICAvLyBgUlNWUC5jb25maWd1cmUoJ29uZXJyb3InLCBzb21lRnVuY3Rpb25IZXJlKTtgXG4gICAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnWydvbiddKCdlcnJvcicsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZ1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnW25hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCRpbnN0cnVtZW50JCRxdWV1ZSA9IFtdO1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkaW5zdHJ1bWVudCQkc2NoZWR1bGVGbHVzaCgpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaWIkcnN2cCRpbnN0cnVtZW50JCRxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGVudHJ5ID0gbGliJHJzdnAkaW5zdHJ1bWVudCQkcXVldWVbaV07XG5cbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGVudHJ5LnBheWxvYWQ7XG5cbiAgICAgICAgICBwYXlsb2FkLmd1aWQgPSBwYXlsb2FkLmtleSArIHBheWxvYWQuaWQ7XG4gICAgICAgICAgcGF5bG9hZC5jaGlsZEd1aWQgPSBwYXlsb2FkLmtleSArIHBheWxvYWQuY2hpbGRJZDtcbiAgICAgICAgICBpZiAocGF5bG9hZC5lcnJvcikge1xuICAgICAgICAgICAgcGF5bG9hZC5zdGFjayA9IHBheWxvYWQuZXJyb3Iuc3RhY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWdbJ3RyaWdnZXInXShlbnRyeS5uYW1lLCBlbnRyeS5wYXlsb2FkKTtcbiAgICAgICAgfVxuICAgICAgICBsaWIkcnN2cCRpbnN0cnVtZW50JCRxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgfSwgNTApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGluc3RydW1lbnQkJGluc3RydW1lbnQoZXZlbnROYW1lLCBwcm9taXNlLCBjaGlsZCkge1xuICAgICAgaWYgKDEgPT09IGxpYiRyc3ZwJGluc3RydW1lbnQkJHF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGV2ZW50TmFtZSxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBrZXk6IHByb21pc2UuX2d1aWRLZXksXG4gICAgICAgICAgICBpZDogIHByb21pc2UuX2lkLFxuICAgICAgICAgICAgZXZlbnROYW1lOiBldmVudE5hbWUsXG4gICAgICAgICAgICBkZXRhaWw6IHByb21pc2UuX3Jlc3VsdCxcbiAgICAgICAgICAgIGNoaWxkSWQ6IGNoaWxkICYmIGNoaWxkLl9pZCxcbiAgICAgICAgICAgIGxhYmVsOiBwcm9taXNlLl9sYWJlbCxcbiAgICAgICAgICAgIHRpbWVTdGFtcDogbGliJHJzdnAkdXRpbHMkJG5vdygpLFxuICAgICAgICAgICAgZXJyb3I6IGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnW1wiaW5zdHJ1bWVudC13aXRoLXN0YWNrXCJdID8gbmV3IEVycm9yKHByb21pc2UuX2xhYmVsKSA6IG51bGxcbiAgICAgICAgICB9fSkpIHtcbiAgICAgICAgICAgIGxpYiRyc3ZwJGluc3RydW1lbnQkJHNjaGVkdWxlRmx1c2goKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJGluc3RydW1lbnQkJGRlZmF1bHQgPSBsaWIkcnN2cCRpbnN0cnVtZW50JCRpbnN0cnVtZW50O1xuXG4gICAgZnVuY3Rpb24gIGxpYiRyc3ZwJCRpbnRlcm5hbCQkd2l0aE93blByb21pc2UoKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkbm9vcCgpIHt9XG5cbiAgICB2YXIgbGliJHJzdnAkJGludGVybmFsJCRQRU5ESU5HICAgPSB2b2lkIDA7XG4gICAgdmFyIGxpYiRyc3ZwJCRpbnRlcm5hbCQkRlVMRklMTEVEID0gMTtcbiAgICB2YXIgbGliJHJzdnAkJGludGVybmFsJCRSRUpFQ1RFRCAgPSAyO1xuXG4gICAgdmFyIGxpYiRyc3ZwJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IgPSBuZXcgbGliJHJzdnAkJGludGVybmFsJCRFcnJvck9iamVjdCgpO1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRnZXRUaGVuKHByb21pc2UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW47XG4gICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSwgdGhlbikge1xuICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWcuYXN5bmMoZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICB2YXIgc2VhbGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvciA9IGxpYiRyc3ZwJCRpbnRlcm5hbCQkdHJ5VGhlbih0aGVuLCB0aGVuYWJsZSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBpZiAoc2VhbGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoZW5hYmxlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgIGlmIChzZWFsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0sICdTZXR0bGU6ICcgKyAocHJvbWlzZS5fbGFiZWwgfHwgJyB1bmtub3duIHByb21pc2UnKSk7XG5cbiAgICAgICAgaWYgKCFzZWFsZWQgJiYgZXJyb3IpIHtcbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSwgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSkge1xuICAgICAgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgdGhlbmFibGUuX29uRXJyb3IgPSBudWxsO1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHRoZW5hYmxlLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHRoZW5hYmxlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlKSB7XG4gICAgICBpZiAobWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3RvciA9PT0gcHJvbWlzZS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHRoZW4gPSBsaWIkcnN2cCQkaW50ZXJuYWwkJGdldFRoZW4obWF5YmVUaGVuYWJsZSk7XG5cbiAgICAgICAgaWYgKHRoZW4gPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IpIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkcnN2cCQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGliJHJzdnAkdXRpbHMkJGlzRnVuY3Rpb24odGhlbikpIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpIHtcbiAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChsaWIkcnN2cCR1dGlscyQkb2JqZWN0T3JGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgICAgIGlmIChwcm9taXNlLl9vbkVycm9yKSB7XG4gICAgICAgIHByb21pc2UuX29uRXJyb3IocHJvbWlzZS5fcmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgbGliJHJzdnAkJGludGVybmFsJCRwdWJsaXNoKHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSkge1xuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG5cbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fc3RhdGUgPSBsaWIkcnN2cCQkaW50ZXJuYWwkJEZVTEZJTExFRDtcblxuICAgICAgaWYgKHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAobGliJHJzdnAkY29uZmlnJCRjb25maWcuaW5zdHJ1bWVudCkge1xuICAgICAgICAgIGxpYiRyc3ZwJGluc3RydW1lbnQkJGRlZmF1bHQoJ2Z1bGZpbGxlZCcsIHByb21pc2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZy5hc3luYyhsaWIkcnN2cCQkaW50ZXJuYWwkJHB1Ymxpc2gsIHByb21pc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUkVKRUNURUQ7XG4gICAgICBwcm9taXNlLl9yZXN1bHQgPSByZWFzb247XG4gICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZy5hc3luYyhsaWIkcnN2cCQkaW50ZXJuYWwkJHB1Ymxpc2hSZWplY3Rpb24sIHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgICB2YXIgc3Vic2NyaWJlcnMgPSBwYXJlbnQuX3N1YnNjcmliZXJzO1xuICAgICAgdmFyIGxlbmd0aCA9IHN1YnNjcmliZXJzLmxlbmd0aDtcblxuICAgICAgcGFyZW50Ll9vbkVycm9yID0gbnVsbDtcblxuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoXSA9IGNoaWxkO1xuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoICsgbGliJHJzdnAkJGludGVybmFsJCRGVUxGSUxMRURdID0gb25GdWxmaWxsbWVudDtcbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aCArIGxpYiRyc3ZwJCRpbnRlcm5hbCQkUkVKRUNURURdICA9IG9uUmVqZWN0aW9uO1xuXG4gICAgICBpZiAobGVuZ3RoID09PSAwICYmIHBhcmVudC5fc3RhdGUpIHtcbiAgICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWcuYXN5bmMobGliJHJzdnAkJGludGVybmFsJCRwdWJsaXNoLCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcHVibGlzaChwcm9taXNlKSB7XG4gICAgICB2YXIgc3Vic2NyaWJlcnMgPSBwcm9taXNlLl9zdWJzY3JpYmVycztcbiAgICAgIHZhciBzZXR0bGVkID0gcHJvbWlzZS5fc3RhdGU7XG5cbiAgICAgIGlmIChsaWIkcnN2cCRjb25maWckJGNvbmZpZy5pbnN0cnVtZW50KSB7XG4gICAgICAgIGxpYiRyc3ZwJGluc3RydW1lbnQkJGRlZmF1bHQoc2V0dGxlZCA9PT0gbGliJHJzdnAkJGludGVybmFsJCRGVUxGSUxMRUQgPyAnZnVsZmlsbGVkJyA6ICdyZWplY3RlZCcsIHByb21pc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuXG4gICAgICB2YXIgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwgPSBwcm9taXNlLl9yZXN1bHQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgY2hpbGQgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICAgICAgY2FsbGJhY2sgPSBzdWJzY3JpYmVyc1tpICsgc2V0dGxlZF07XG5cbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2soZGV0YWlsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKSB7XG4gICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IgPSBuZXcgbGliJHJzdnAkJGludGVybmFsJCRFcnJvck9iamVjdCgpO1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCR0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZGV0YWlsKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUi5lcnJvciA9IGU7XG4gICAgICAgIHJldHVybiBsaWIkcnN2cCQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHNldHRsZWQsIHByb21pc2UsIGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgICAgIHZhciBoYXNDYWxsYmFjayA9IGxpYiRyc3ZwJHV0aWxzJCRpc0Z1bmN0aW9uKGNhbGxiYWNrKSxcbiAgICAgICAgICB2YWx1ZSwgZXJyb3IsIHN1Y2NlZWRlZCwgZmFpbGVkO1xuXG4gICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgdmFsdWUgPSBsaWIkcnN2cCQkaW50ZXJuYWwkJHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IpIHtcbiAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgICAgIGVycm9yID0gdmFsdWUuZXJyb3I7XG4gICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkcnN2cCQkaW50ZXJuYWwkJHdpdGhPd25Qcm9taXNlKCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IGRldGFpbDtcbiAgICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgLy8gbm9vcFxuICAgICAgfSBlbHNlIGlmIChoYXNDYWxsYmFjayAmJiBzdWNjZWVkZWQpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmFpbGVkKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gbGliJHJzdnAkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gbGliJHJzdnAkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGludGVybmFsJCRpbml0aWFsaXplUHJvbWlzZShwcm9taXNlLCByZXNvbHZlcikge1xuICAgICAgdmFyIHJlc29sdmVkID0gZmFsc2U7XG4gICAgICB0cnkge1xuICAgICAgICByZXNvbHZlcihmdW5jdGlvbiByZXNvbHZlUHJvbWlzZSh2YWx1ZSl7XG4gICAgICAgICAgaWYgKHJlc29sdmVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbiByZWplY3RQcm9taXNlKHJlYXNvbikge1xuICAgICAgICAgIGlmIChyZXNvbHZlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkZW51bWVyYXRvciQkbWFrZVNldHRsZWRSZXN1bHQoc3RhdGUsIHBvc2l0aW9uLCB2YWx1ZSkge1xuICAgICAgaWYgKHN0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJEZVTEZJTExFRCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXRlOiAnZnVsZmlsbGVkJyxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhdGU6ICdyZWplY3RlZCcsXG4gICAgICAgICAgcmVhc29uOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGVudW1lcmF0b3IkJEVudW1lcmF0b3IoQ29uc3RydWN0b3IsIGlucHV0LCBhYm9ydE9uUmVqZWN0LCBsYWJlbCkge1xuICAgICAgdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgICAgdGhpcy5wcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRyc3ZwJCRpbnRlcm5hbCQkbm9vcCwgbGFiZWwpO1xuICAgICAgdGhpcy5fYWJvcnRPblJlamVjdCA9IGFib3J0T25SZWplY3Q7XG5cbiAgICAgIGlmICh0aGlzLl92YWxpZGF0ZUlucHV0KGlucHV0KSkge1xuICAgICAgICB0aGlzLl9pbnB1dCAgICAgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5sZW5ndGggICAgID0gaW5wdXQubGVuZ3RoO1xuICAgICAgICB0aGlzLl9yZW1haW5pbmcgPSBpbnB1dC5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5faW5pdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aCB8fCAwO1xuICAgICAgICAgIHRoaXMuX2VudW1lcmF0ZSgpO1xuICAgICAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdCh0aGlzLnByb21pc2UsIHRoaXMuX3ZhbGlkYXRpb25FcnJvcigpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkZW51bWVyYXRvciQkZGVmYXVsdCA9IGxpYiRyc3ZwJGVudW1lcmF0b3IkJEVudW1lcmF0b3I7XG5cbiAgICBsaWIkcnN2cCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fdmFsaWRhdGVJbnB1dCA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICByZXR1cm4gbGliJHJzdnAkdXRpbHMkJGlzQXJyYXkoaW5wdXQpO1xuICAgIH07XG5cbiAgICBsaWIkcnN2cCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fdmFsaWRhdGlvbkVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXknKTtcbiAgICB9O1xuXG4gICAgbGliJHJzdnAkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3Jlc3VsdCA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCk7XG4gICAgfTtcblxuICAgIGxpYiRyc3ZwJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9lbnVtZXJhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsZW5ndGggID0gdGhpcy5sZW5ndGg7XG4gICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcbiAgICAgIHZhciBpbnB1dCAgID0gdGhpcy5faW5wdXQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBwcm9taXNlLl9zdGF0ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRQRU5ESU5HICYmIGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9lYWNoRW50cnkoaW5wdXRbaV0sIGkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsaWIkcnN2cCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZWFjaEVudHJ5ID0gZnVuY3Rpb24oZW50cnksIGkpIHtcbiAgICAgIHZhciBjID0gdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvcjtcbiAgICAgIGlmIChsaWIkcnN2cCR1dGlscyQkaXNNYXliZVRoZW5hYmxlKGVudHJ5KSkge1xuICAgICAgICBpZiAoZW50cnkuY29uc3RydWN0b3IgPT09IGMgJiYgZW50cnkuX3N0YXRlICE9PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgICBlbnRyeS5fb25FcnJvciA9IG51bGw7XG4gICAgICAgICAgdGhpcy5fc2V0dGxlZEF0KGVudHJ5Ll9zdGF0ZSwgaSwgZW50cnkuX3Jlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KGMucmVzb2x2ZShlbnRyeSksIGkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW1haW5pbmctLTtcbiAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gdGhpcy5fbWFrZVJlc3VsdChsaWIkcnN2cCQkaW50ZXJuYWwkJEZVTEZJTExFRCwgaSwgZW50cnkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsaWIkcnN2cCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fc2V0dGxlZEF0ID0gZnVuY3Rpb24oc3RhdGUsIGksIHZhbHVlKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcblxuICAgICAgaWYgKHByb21pc2UuX3N0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG5cbiAgICAgICAgaWYgKHRoaXMuX2Fib3J0T25SZWplY3QgJiYgc3RhdGUgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gdGhpcy5fbWFrZVJlc3VsdChzdGF0ZSwgaSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxpYiRyc3ZwJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9tYWtlUmVzdWx0ID0gZnVuY3Rpb24oc3RhdGUsIGksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxpYiRyc3ZwJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl93aWxsU2V0dGxlQXQgPSBmdW5jdGlvbihwcm9taXNlLCBpKSB7XG4gICAgICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG5cbiAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHByb21pc2UsIHVuZGVmaW5lZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KGxpYiRyc3ZwJCRpbnRlcm5hbCQkRlVMRklMTEVELCBpLCB2YWx1ZSk7XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KGxpYiRyc3ZwJCRpbnRlcm5hbCQkUkVKRUNURUQsIGksIHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHByb21pc2UkYWxsJCRhbGwoZW50cmllcywgbGFiZWwpIHtcbiAgICAgIHJldHVybiBuZXcgbGliJHJzdnAkZW51bWVyYXRvciQkZGVmYXVsdCh0aGlzLCBlbnRyaWVzLCB0cnVlIC8qIGFib3J0IG9uIHJlamVjdCAqLywgbGFiZWwpLnByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRwcm9taXNlJGFsbCQkZGVmYXVsdCA9IGxpYiRyc3ZwJHByb21pc2UkYWxsJCRhbGw7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcHJvbWlzZSRyYWNlJCRyYWNlKGVudHJpZXMsIGxhYmVsKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJHJzdnAkJGludGVybmFsJCRub29wLCBsYWJlbCk7XG5cbiAgICAgIGlmICghbGliJHJzdnAkdXRpbHMkJGlzQXJyYXkoZW50cmllcykpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLicpKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcblxuICAgICAgZnVuY3Rpb24gb25GdWxmaWxsbWVudCh2YWx1ZSkge1xuICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvblJlamVjdGlvbihyZWFzb24pIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IHByb21pc2UuX3N0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcgJiYgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkc3Vic2NyaWJlKENvbnN0cnVjdG9yLnJlc29sdmUoZW50cmllc1tpXSksIHVuZGVmaW5lZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJHByb21pc2UkcmFjZSQkZGVmYXVsdCA9IGxpYiRyc3ZwJHByb21pc2UkcmFjZSQkcmFjZTtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRwcm9taXNlJHJlc29sdmUkJHJlc29sdmUob2JqZWN0LCBsYWJlbCkge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICAgIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0LmNvbnN0cnVjdG9yID09PSBDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcihsaWIkcnN2cCQkaW50ZXJuYWwkJG5vb3AsIGxhYmVsKTtcbiAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCBvYmplY3QpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQgPSBsaWIkcnN2cCRwcm9taXNlJHJlc29sdmUkJHJlc29sdmU7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcHJvbWlzZSRyZWplY3QkJHJlamVjdChyZWFzb24sIGxhYmVsKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRyc3ZwJCRpbnRlcm5hbCQkbm9vcCwgbGFiZWwpO1xuICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkcHJvbWlzZSRyZWplY3QkJGRlZmF1bHQgPSBsaWIkcnN2cCRwcm9taXNlJHJlamVjdCQkcmVqZWN0O1xuXG4gICAgdmFyIGxpYiRyc3ZwJHByb21pc2UkJGd1aWRLZXkgPSAncnN2cF8nICsgbGliJHJzdnAkdXRpbHMkJG5vdygpICsgJy0nO1xuICAgIHZhciBsaWIkcnN2cCRwcm9taXNlJCRjb3VudGVyID0gMDtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHByb21pc2UkJG5lZWRzUmVzb2x2ZXIoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcHJvbWlzZSQkbmVlZHNOZXcoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgUHJvbWlzZSBvYmplY3RzIHJlcHJlc2VudCB0aGUgZXZlbnR1YWwgcmVzdWx0IG9mIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb24uIFRoZVxuICAgICAgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCwgd2hpY2hcbiAgICAgIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNl4oCZcyBldmVudHVhbCB2YWx1ZSBvciB0aGUgcmVhc29uXG4gICAgICB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICAgICAgVGVybWlub2xvZ3lcbiAgICAgIC0tLS0tLS0tLS0tXG5cbiAgICAgIC0gYHByb21pc2VgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB3aXRoIGEgYHRoZW5gIG1ldGhvZCB3aG9zZSBiZWhhdmlvciBjb25mb3JtcyB0byB0aGlzIHNwZWNpZmljYXRpb24uXG4gICAgICAtIGB0aGVuYWJsZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBhIGB0aGVuYCBtZXRob2QuXG4gICAgICAtIGB2YWx1ZWAgaXMgYW55IGxlZ2FsIEphdmFTY3JpcHQgdmFsdWUgKGluY2x1ZGluZyB1bmRlZmluZWQsIGEgdGhlbmFibGUsIG9yIGEgcHJvbWlzZSkuXG4gICAgICAtIGBleGNlcHRpb25gIGlzIGEgdmFsdWUgdGhhdCBpcyB0aHJvd24gdXNpbmcgdGhlIHRocm93IHN0YXRlbWVudC5cbiAgICAgIC0gYHJlYXNvbmAgaXMgYSB2YWx1ZSB0aGF0IGluZGljYXRlcyB3aHkgYSBwcm9taXNlIHdhcyByZWplY3RlZC5cbiAgICAgIC0gYHNldHRsZWRgIHRoZSBmaW5hbCByZXN0aW5nIHN0YXRlIG9mIGEgcHJvbWlzZSwgZnVsZmlsbGVkIG9yIHJlamVjdGVkLlxuXG4gICAgICBBIHByb21pc2UgY2FuIGJlIGluIG9uZSBvZiB0aHJlZSBzdGF0ZXM6IHBlbmRpbmcsIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQuXG5cbiAgICAgIFByb21pc2VzIHRoYXQgYXJlIGZ1bGZpbGxlZCBoYXZlIGEgZnVsZmlsbG1lbnQgdmFsdWUgYW5kIGFyZSBpbiB0aGUgZnVsZmlsbGVkXG4gICAgICBzdGF0ZS4gIFByb21pc2VzIHRoYXQgYXJlIHJlamVjdGVkIGhhdmUgYSByZWplY3Rpb24gcmVhc29uIGFuZCBhcmUgaW4gdGhlXG4gICAgICByZWplY3RlZCBzdGF0ZS4gIEEgZnVsZmlsbG1lbnQgdmFsdWUgaXMgbmV2ZXIgYSB0aGVuYWJsZS5cblxuICAgICAgUHJvbWlzZXMgY2FuIGFsc28gYmUgc2FpZCB0byAqcmVzb2x2ZSogYSB2YWx1ZS4gIElmIHRoaXMgdmFsdWUgaXMgYWxzbyBhXG4gICAgICBwcm9taXNlLCB0aGVuIHRoZSBvcmlnaW5hbCBwcm9taXNlJ3Mgc2V0dGxlZCBzdGF0ZSB3aWxsIG1hdGNoIHRoZSB2YWx1ZSdzXG4gICAgICBzZXR0bGVkIHN0YXRlLiAgU28gYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCByZWplY3RzIHdpbGxcbiAgICAgIGl0c2VsZiByZWplY3QsIGFuZCBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IGZ1bGZpbGxzIHdpbGxcbiAgICAgIGl0c2VsZiBmdWxmaWxsLlxuXG5cbiAgICAgIEJhc2ljIFVzYWdlOlxuICAgICAgLS0tLS0tLS0tLS0tXG5cbiAgICAgIGBgYGpzXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBvbiBzdWNjZXNzXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuXG4gICAgICAgIC8vIG9uIGZhaWx1cmVcbiAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICB9KTtcblxuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgLy8gb24gcmVqZWN0aW9uXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBZHZhbmNlZCBVc2FnZTpcbiAgICAgIC0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBQcm9taXNlcyBzaGluZSB3aGVuIGFic3RyYWN0aW5nIGF3YXkgYXN5bmNocm9ub3VzIGludGVyYWN0aW9ucyBzdWNoIGFzXG4gICAgICBgWE1MSHR0cFJlcXVlc3Rgcy5cblxuICAgICAgYGBganNcbiAgICAgIGZ1bmN0aW9uIGdldEpTT04odXJsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBoYW5kbGVyO1xuICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgeGhyLnNlbmQoKTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSB0aGlzLkRPTkUpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2dldEpTT046IGAnICsgdXJsICsgJ2AgZmFpbGVkIHdpdGggc3RhdHVzOiBbJyArIHRoaXMuc3RhdHVzICsgJ10nKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZ2V0SlNPTignL3Bvc3RzLmpzb24nKS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAvLyBvbiByZWplY3Rpb25cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFVubGlrZSBjYWxsYmFja3MsIHByb21pc2VzIGFyZSBncmVhdCBjb21wb3NhYmxlIHByaW1pdGl2ZXMuXG5cbiAgICAgIGBgYGpzXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldEpTT04oJy9wb3N0cycpLFxuICAgICAgICBnZXRKU09OKCcvY29tbWVudHMnKVxuICAgICAgXSkudGhlbihmdW5jdGlvbih2YWx1ZXMpe1xuICAgICAgICB2YWx1ZXNbMF0gLy8gPT4gcG9zdHNKU09OXG4gICAgICAgIHZhbHVlc1sxXSAvLyA9PiBjb21tZW50c0pTT05cblxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQGNsYXNzIFJTVlAuUHJvbWlzZVxuICAgICAgQHBhcmFtIHtmdW5jdGlvbn0gcmVzb2x2ZXJcbiAgICAgIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCBvcHRpb25hbCBzdHJpbmcgZm9yIGxhYmVsaW5nIHRoZSBwcm9taXNlLlxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRwcm9taXNlJCRQcm9taXNlKHJlc29sdmVyLCBsYWJlbCkge1xuICAgICAgdGhpcy5faWQgPSBsaWIkcnN2cCRwcm9taXNlJCRjb3VudGVyKys7XG4gICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xuICAgICAgdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuXG4gICAgICBpZiAobGliJHJzdnAkY29uZmlnJCRjb25maWcuaW5zdHJ1bWVudCkge1xuICAgICAgICBsaWIkcnN2cCRpbnN0cnVtZW50JCRkZWZhdWx0KCdjcmVhdGVkJywgdGhpcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaWIkcnN2cCQkaW50ZXJuYWwkJG5vb3AgIT09IHJlc29sdmVyKSB7XG4gICAgICAgIGlmICghbGliJHJzdnAkdXRpbHMkJGlzRnVuY3Rpb24ocmVzb2x2ZXIpKSB7XG4gICAgICAgICAgbGliJHJzdnAkcHJvbWlzZSQkbmVlZHNSZXNvbHZlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIGxpYiRyc3ZwJHByb21pc2UkJFByb21pc2UpKSB7XG4gICAgICAgICAgbGliJHJzdnAkcHJvbWlzZSQkbmVlZHNOZXcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UodGhpcywgcmVzb2x2ZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0ID0gbGliJHJzdnAkcHJvbWlzZSQkUHJvbWlzZTtcblxuICAgIC8vIGRlcHJlY2F0ZWRcbiAgICBsaWIkcnN2cCRwcm9taXNlJCRQcm9taXNlLmNhc3QgPSBsaWIkcnN2cCRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQ7XG4gICAgbGliJHJzdnAkcHJvbWlzZSQkUHJvbWlzZS5hbGwgPSBsaWIkcnN2cCRwcm9taXNlJGFsbCQkZGVmYXVsdDtcbiAgICBsaWIkcnN2cCRwcm9taXNlJCRQcm9taXNlLnJhY2UgPSBsaWIkcnN2cCRwcm9taXNlJHJhY2UkJGRlZmF1bHQ7XG4gICAgbGliJHJzdnAkcHJvbWlzZSQkUHJvbWlzZS5yZXNvbHZlID0gbGliJHJzdnAkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0O1xuICAgIGxpYiRyc3ZwJHByb21pc2UkJFByb21pc2UucmVqZWN0ID0gbGliJHJzdnAkcHJvbWlzZSRyZWplY3QkJGRlZmF1bHQ7XG5cbiAgICBsaWIkcnN2cCRwcm9taXNlJCRQcm9taXNlLnByb3RvdHlwZSA9IHtcbiAgICAgIGNvbnN0cnVjdG9yOiBsaWIkcnN2cCRwcm9taXNlJCRQcm9taXNlLFxuXG4gICAgICBfZ3VpZEtleTogbGliJHJzdnAkcHJvbWlzZSQkZ3VpZEtleSxcblxuICAgICAgX29uRXJyb3I6IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWcuYXN5bmMoZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5fb25FcnJvcikge1xuICAgICAgICAgICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZ1sndHJpZ2dlciddKCdlcnJvcicsIHJlYXNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfSxcblxuICAgIC8qKlxuICAgICAgVGhlIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsXG4gICAgICB3aGljaCByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZVxuICAgICAgcmVhc29uIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uKHVzZXIpe1xuICAgICAgICAvLyB1c2VyIGlzIGF2YWlsYWJsZVxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gdXNlciBpcyB1bmF2YWlsYWJsZSwgYW5kIHlvdSBhcmUgZ2l2ZW4gdGhlIHJlYXNvbiB3aHlcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIENoYWluaW5nXG4gICAgICAtLS0tLS0tLVxuXG4gICAgICBUaGUgcmV0dXJuIHZhbHVlIG9mIGB0aGVuYCBpcyBpdHNlbGYgYSBwcm9taXNlLiAgVGhpcyBzZWNvbmQsICdkb3duc3RyZWFtJ1xuICAgICAgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZpcnN0IHByb21pc2UncyBmdWxmaWxsbWVudFxuICAgICAgb3IgcmVqZWN0aW9uIGhhbmRsZXIsIG9yIHJlamVjdGVkIGlmIHRoZSBoYW5kbGVyIHRocm93cyBhbiBleGNlcHRpb24uXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHVzZXIubmFtZTtcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgcmV0dXJuICdkZWZhdWx0IG5hbWUnO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodXNlck5hbWUpIHtcbiAgICAgICAgLy8gSWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGB1c2VyTmFtZWAgd2lsbCBiZSB0aGUgdXNlcidzIG5hbWUsIG90aGVyd2lzZSBpdFxuICAgICAgICAvLyB3aWxsIGJlIGAnZGVmYXVsdCBuYW1lJ2BcbiAgICAgIH0pO1xuXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScpO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gaWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGByZWFzb25gIHdpbGwgYmUgJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jy5cbiAgICAgICAgLy8gSWYgYGZpbmRVc2VyYCByZWplY3RlZCwgYHJlYXNvbmAgd2lsbCBiZSAnYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScuXG4gICAgICB9KTtcbiAgICAgIGBgYFxuICAgICAgSWYgdGhlIGRvd25zdHJlYW0gcHJvbWlzZSBkb2VzIG5vdCBzcGVjaWZ5IGEgcmVqZWN0aW9uIGhhbmRsZXIsIHJlamVjdGlvbiByZWFzb25zIHdpbGwgYmUgcHJvcGFnYXRlZCBmdXJ0aGVyIGRvd25zdHJlYW0uXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFBlZGFnb2dpY2FsRXhjZXB0aW9uKCdVcHN0cmVhbSBlcnJvcicpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBUaGUgYFBlZGdhZ29jaWFsRXhjZXB0aW9uYCBpcyBwcm9wYWdhdGVkIGFsbCB0aGUgd2F5IGRvd24gdG8gaGVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQXNzaW1pbGF0aW9uXG4gICAgICAtLS0tLS0tLS0tLS1cblxuICAgICAgU29tZXRpbWVzIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBwcm9wYWdhdGUgdG8gYSBkb3duc3RyZWFtIHByb21pc2UgY2FuIG9ubHkgYmVcbiAgICAgIHJldHJpZXZlZCBhc3luY2hyb25vdXNseS4gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgYnkgcmV0dXJuaW5nIGEgcHJvbWlzZSBpbiB0aGVcbiAgICAgIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvbiBoYW5kbGVyLiBUaGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgdGhlbiBiZSBwZW5kaW5nXG4gICAgICB1bnRpbCB0aGUgcmV0dXJuZWQgcHJvbWlzZSBpcyBzZXR0bGVkLiBUaGlzIGlzIGNhbGxlZCAqYXNzaW1pbGF0aW9uKi5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgICAvLyBUaGUgdXNlcidzIGNvbW1lbnRzIGFyZSBub3cgYXZhaWxhYmxlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBJZiB0aGUgYXNzaW1saWF0ZWQgcHJvbWlzZSByZWplY3RzLCB0aGVuIHRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCBhbHNvIHJlamVjdC5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIGZ1bGZpbGxzLCB3ZSdsbCBoYXZlIHRoZSB2YWx1ZSBoZXJlXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgcmVqZWN0cywgd2UnbGwgaGF2ZSB0aGUgcmVhc29uIGhlcmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFNpbXBsZSBFeGFtcGxlXG4gICAgICAtLS0tLS0tLS0tLS0tLVxuXG4gICAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGZpbmRSZXN1bHQoKTtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfVxuICAgICAgYGBgXG5cbiAgICAgIEVycmJhY2sgRXhhbXBsZVxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFJlc3VsdChmdW5jdGlvbihyZXN1bHQsIGVycil7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAvLyBmYWlsdXJlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBQcm9taXNlIEV4YW1wbGU7XG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIGZpbmRSZXN1bHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFkdmFuY2VkIEV4YW1wbGVcbiAgICAgIC0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgdmFyIGF1dGhvciwgYm9va3M7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF1dGhvciA9IGZpbmRBdXRob3IoKTtcbiAgICAgICAgYm9va3MgID0gZmluZEJvb2tzQnlBdXRob3IoYXV0aG9yKTtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfVxuICAgICAgYGBgXG5cbiAgICAgIEVycmJhY2sgRXhhbXBsZVxuXG4gICAgICBgYGBqc1xuXG4gICAgICBmdW5jdGlvbiBmb3VuZEJvb2tzKGJvb2tzKSB7XG5cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZmFpbHVyZShyZWFzb24pIHtcblxuICAgICAgfVxuXG4gICAgICBmaW5kQXV0aG9yKGZ1bmN0aW9uKGF1dGhvciwgZXJyKXtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICAvLyBmYWlsdXJlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZpbmRCb29va3NCeUF1dGhvcihhdXRob3IsIGZ1bmN0aW9uKGJvb2tzLCBlcnIpIHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgZm91bmRCb29rcyhib29rcyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgICAgICAgICAgIGZhaWx1cmUocmVhc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBQcm9taXNlIEV4YW1wbGU7XG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIGZpbmRBdXRob3IoKS5cbiAgICAgICAgdGhlbihmaW5kQm9va3NCeUF1dGhvcikuXG4gICAgICAgIHRoZW4oZnVuY3Rpb24oYm9va3Mpe1xuICAgICAgICAgIC8vIGZvdW5kIGJvb2tzXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQG1ldGhvZCB0aGVuXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvbkZ1bGZpbGxlZFxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3RlZFxuICAgICAgQHBhcmFtIHtTdHJpbmd9IGxhYmVsIG9wdGlvbmFsIHN0cmluZyBmb3IgbGFiZWxpbmcgdGhlIHByb21pc2UuXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICB0aGVuOiBmdW5jdGlvbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbiwgbGFiZWwpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXM7XG4gICAgICAgIHZhciBzdGF0ZSA9IHBhcmVudC5fc3RhdGU7XG5cbiAgICAgICAgaWYgKHN0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJEZVTEZJTExFRCAmJiAhb25GdWxmaWxsbWVudCB8fCBzdGF0ZSA9PT0gbGliJHJzdnAkJGludGVybmFsJCRSRUpFQ1RFRCAmJiAhb25SZWplY3Rpb24pIHtcbiAgICAgICAgICBpZiAobGliJHJzdnAkY29uZmlnJCRjb25maWcuaW5zdHJ1bWVudCkge1xuICAgICAgICAgICAgbGliJHJzdnAkaW5zdHJ1bWVudCQkZGVmYXVsdCgnY2hhaW5lZCcsIHRoaXMsIHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudC5fb25FcnJvciA9IG51bGw7XG5cbiAgICAgICAgdmFyIGNoaWxkID0gbmV3IHRoaXMuY29uc3RydWN0b3IobGliJHJzdnAkJGludGVybmFsJCRub29wLCBsYWJlbCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBwYXJlbnQuX3Jlc3VsdDtcblxuICAgICAgICBpZiAobGliJHJzdnAkY29uZmlnJCRjb25maWcuaW5zdHJ1bWVudCkge1xuICAgICAgICAgIGxpYiRyc3ZwJGluc3RydW1lbnQkJGRlZmF1bHQoJ2NoYWluZWQnLCBwYXJlbnQsIGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1tzdGF0ZSAtIDFdO1xuICAgICAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLmFzeW5jKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHN0YXRlLCBjaGlsZCwgY2FsbGJhY2ssIHJlc3VsdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfSxcblxuICAgIC8qKlxuICAgICAgYGNhdGNoYCBpcyBzaW1wbHkgc3VnYXIgZm9yIGB0aGVuKHVuZGVmaW5lZCwgb25SZWplY3Rpb24pYCB3aGljaCBtYWtlcyBpdCB0aGUgc2FtZVxuICAgICAgYXMgdGhlIGNhdGNoIGJsb2NrIG9mIGEgdHJ5L2NhdGNoIHN0YXRlbWVudC5cblxuICAgICAgYGBganNcbiAgICAgIGZ1bmN0aW9uIGZpbmRBdXRob3IoKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZG4ndCBmaW5kIHRoYXQgYXV0aG9yJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHN5bmNocm9ub3VzXG4gICAgICB0cnkge1xuICAgICAgICBmaW5kQXV0aG9yKCk7XG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfVxuXG4gICAgICAvLyBhc3luYyB3aXRoIHByb21pc2VzXG4gICAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBtZXRob2QgY2F0Y2hcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0aW9uXG4gICAgICBAcGFyYW0ge1N0cmluZ30gbGFiZWwgb3B0aW9uYWwgc3RyaW5nIGZvciBsYWJlbGluZyB0aGUgcHJvbWlzZS5cbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cbiAgICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0aW9uLCBsYWJlbCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uLCBsYWJlbCk7XG4gICAgICB9LFxuXG4gICAgLyoqXG4gICAgICBgZmluYWxseWAgd2lsbCBiZSBpbnZva2VkIHJlZ2FyZGxlc3Mgb2YgdGhlIHByb21pc2UncyBmYXRlIGp1c3QgYXMgbmF0aXZlXG4gICAgICB0cnkvY2F0Y2gvZmluYWxseSBiZWhhdmVzXG5cbiAgICAgIFN5bmNocm9ub3VzIGV4YW1wbGU6XG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kQXV0aG9yKCkge1xuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQXV0aG9yKCk7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmaW5kQXV0aG9yKCk7IC8vIHN1Y2NlZWQgb3IgZmFpbFxuICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICByZXR1cm4gZmluZE90aGVyQXV0aGVyKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICAvLyBhbHdheXMgcnVuc1xuICAgICAgICAvLyBkb2Vzbid0IGFmZmVjdCB0aGUgcmV0dXJuIHZhbHVlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgQXN5bmNocm9ub3VzIGV4YW1wbGU6XG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgcmV0dXJuIGZpbmRPdGhlckF1dGhlcigpO1xuICAgICAgfSkuZmluYWxseShmdW5jdGlvbigpe1xuICAgICAgICAvLyBhdXRob3Igd2FzIGVpdGhlciBmb3VuZCwgb3Igbm90XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAbWV0aG9kIGZpbmFsbHlcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICBAcGFyYW0ge1N0cmluZ30gbGFiZWwgb3B0aW9uYWwgc3RyaW5nIGZvciBsYWJlbGluZyB0aGUgcHJvbWlzZS5cbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cbiAgICAgICdmaW5hbGx5JzogZnVuY3Rpb24oY2FsbGJhY2ssIGxhYmVsKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCBsYWJlbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFsbCRzZXR0bGVkJCRBbGxTZXR0bGVkKENvbnN0cnVjdG9yLCBlbnRyaWVzLCBsYWJlbCkge1xuICAgICAgdGhpcy5fc3VwZXJDb25zdHJ1Y3RvcihDb25zdHJ1Y3RvciwgZW50cmllcywgZmFsc2UgLyogZG9uJ3QgYWJvcnQgb24gcmVqZWN0ICovLCBsYWJlbCk7XG4gICAgfVxuXG4gICAgbGliJHJzdnAkYWxsJHNldHRsZWQkJEFsbFNldHRsZWQucHJvdG90eXBlID0gbGliJHJzdnAkdXRpbHMkJG9fY3JlYXRlKGxpYiRyc3ZwJGVudW1lcmF0b3IkJGRlZmF1bHQucHJvdG90eXBlKTtcbiAgICBsaWIkcnN2cCRhbGwkc2V0dGxlZCQkQWxsU2V0dGxlZC5wcm90b3R5cGUuX3N1cGVyQ29uc3RydWN0b3IgPSBsaWIkcnN2cCRlbnVtZXJhdG9yJCRkZWZhdWx0O1xuICAgIGxpYiRyc3ZwJGFsbCRzZXR0bGVkJCRBbGxTZXR0bGVkLnByb3RvdHlwZS5fbWFrZVJlc3VsdCA9IGxpYiRyc3ZwJGVudW1lcmF0b3IkJG1ha2VTZXR0bGVkUmVzdWx0O1xuICAgIGxpYiRyc3ZwJGFsbCRzZXR0bGVkJCRBbGxTZXR0bGVkLnByb3RvdHlwZS5fdmFsaWRhdGlvbkVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdhbGxTZXR0bGVkIG11c3QgYmUgY2FsbGVkIHdpdGggYW4gYXJyYXknKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkYWxsJHNldHRsZWQkJGFsbFNldHRsZWQoZW50cmllcywgbGFiZWwpIHtcbiAgICAgIHJldHVybiBuZXcgbGliJHJzdnAkYWxsJHNldHRsZWQkJEFsbFNldHRsZWQobGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdCwgZW50cmllcywgbGFiZWwpLnByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRhbGwkc2V0dGxlZCQkZGVmYXVsdCA9IGxpYiRyc3ZwJGFsbCRzZXR0bGVkJCRhbGxTZXR0bGVkO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFsbCQkYWxsKGFycmF5LCBsYWJlbCkge1xuICAgICAgcmV0dXJuIGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQuYWxsKGFycmF5LCBsYWJlbCk7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRhbGwkJGRlZmF1bHQgPSBsaWIkcnN2cCRhbGwkJGFsbDtcbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkbGVuID0gMDtcbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkdG9TdHJpbmcgPSB7fS50b1N0cmluZztcbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkdmVydHhOZXh0O1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFzYXAkJGFzYXAoY2FsbGJhY2ssIGFyZykge1xuICAgICAgbGliJHJzdnAkYXNhcCQkcXVldWVbbGliJHJzdnAkYXNhcCQkbGVuXSA9IGNhbGxiYWNrO1xuICAgICAgbGliJHJzdnAkYXNhcCQkcXVldWVbbGliJHJzdnAkYXNhcCQkbGVuICsgMV0gPSBhcmc7XG4gICAgICBsaWIkcnN2cCRhc2FwJCRsZW4gKz0gMjtcbiAgICAgIGlmIChsaWIkcnN2cCRhc2FwJCRsZW4gPT09IDIpIHtcbiAgICAgICAgLy8gSWYgbGVuIGlzIDEsIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIHNjaGVkdWxlIGFuIGFzeW5jIGZsdXNoLlxuICAgICAgICAvLyBJZiBhZGRpdGlvbmFsIGNhbGxiYWNrcyBhcmUgcXVldWVkIGJlZm9yZSB0aGUgcXVldWUgaXMgZmx1c2hlZCwgdGhleVxuICAgICAgICAvLyB3aWxsIGJlIHByb2Nlc3NlZCBieSB0aGlzIGZsdXNoIHRoYXQgd2UgYXJlIHNjaGVkdWxpbmcuXG4gICAgICAgIGxpYiRyc3ZwJGFzYXAkJHNjaGVkdWxlRmx1c2goKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkZGVmYXVsdCA9IGxpYiRyc3ZwJGFzYXAkJGFzYXA7XG5cbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkYnJvd3NlcldpbmRvdyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgdmFyIGxpYiRyc3ZwJGFzYXAkJGJyb3dzZXJHbG9iYWwgPSBsaWIkcnN2cCRhc2FwJCRicm93c2VyV2luZG93IHx8IHt9O1xuICAgIHZhciBsaWIkcnN2cCRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGxpYiRyc3ZwJGFzYXAkJGJyb3dzZXJHbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBsaWIkcnN2cCRhc2FwJCRicm93c2VyR2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgdmFyIGxpYiRyc3ZwJGFzYXAkJGlzTm9kZSA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5cbiAgICAvLyB0ZXN0IGZvciB3ZWIgd29ya2VyIGJ1dCBub3QgaW4gSUUxMFxuICAgIHZhciBsaWIkcnN2cCRhc2FwJCRpc1dvcmtlciA9IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJztcblxuICAgIC8vIG5vZGVcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRhc2FwJCR1c2VOZXh0VGljaygpIHtcbiAgICAgIHZhciBuZXh0VGljayA9IHByb2Nlc3MubmV4dFRpY2s7XG4gICAgICAvLyBub2RlIHZlcnNpb24gMC4xMC54IGRpc3BsYXlzIGEgZGVwcmVjYXRpb24gd2FybmluZyB3aGVuIG5leHRUaWNrIGlzIHVzZWQgcmVjdXJzaXZlbHlcbiAgICAgIC8vIHNldEltbWVkaWF0ZSBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkIGluc3RlYWRcbiAgICAgIHZhciB2ZXJzaW9uID0gcHJvY2Vzcy52ZXJzaW9ucy5ub2RlLm1hdGNoKC9eKD86KFxcZCspXFwuKT8oPzooXFxkKylcXC4pPyhcXCp8XFxkKykkLyk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2ZXJzaW9uKSAmJiB2ZXJzaW9uWzFdID09PSAnMCcgJiYgdmVyc2lvblsyXSA9PT0gJzEwJykge1xuICAgICAgICBuZXh0VGljayA9IHNldEltbWVkaWF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbmV4dFRpY2sobGliJHJzdnAkYXNhcCQkZmx1c2gpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB2ZXJ0eFxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFzYXAkJHVzZVZlcnR4VGltZXIoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpYiRyc3ZwJGFzYXAkJHZlcnR4TmV4dChsaWIkcnN2cCRhc2FwJCRmbHVzaCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFzYXAkJHVzZU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgbGliJHJzdnAkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIobGliJHJzdnAkYXNhcCQkZmx1c2gpO1xuICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBub2RlLmRhdGEgPSAoaXRlcmF0aW9ucyA9ICsraXRlcmF0aW9ucyAlIDIpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB3ZWIgd29ya2VyXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkYXNhcCQkdXNlTWVzc2FnZUNoYW5uZWwoKSB7XG4gICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaWIkcnN2cCRhc2FwJCRmbHVzaDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGFzYXAkJHVzZVNldFRpbWVvdXQoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQobGliJHJzdnAkYXNhcCQkZmx1c2gsIDEpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkYXNhcCQkcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkYXNhcCQkZmx1c2goKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpYiRyc3ZwJGFzYXAkJGxlbjsgaSs9Mikge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBsaWIkcnN2cCRhc2FwJCRxdWV1ZVtpXTtcbiAgICAgICAgdmFyIGFyZyA9IGxpYiRyc3ZwJGFzYXAkJHF1ZXVlW2krMV07XG5cbiAgICAgICAgY2FsbGJhY2soYXJnKTtcblxuICAgICAgICBsaWIkcnN2cCRhc2FwJCRxdWV1ZVtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGliJHJzdnAkYXNhcCQkcXVldWVbaSsxXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgbGliJHJzdnAkYXNhcCQkbGVuID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRhc2FwJCRhdHRlbXB0VmVydGV4KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHIgPSByZXF1aXJlO1xuICAgICAgICB2YXIgdmVydHggPSByKCd2ZXJ0eCcpO1xuICAgICAgICBsaWIkcnN2cCRhc2FwJCR2ZXJ0eE5leHQgPSB2ZXJ0eC5ydW5Pbkxvb3AgfHwgdmVydHgucnVuT25Db250ZXh0O1xuICAgICAgICByZXR1cm4gbGliJHJzdnAkYXNhcCQkdXNlVmVydHhUaW1lcigpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBsaWIkcnN2cCRhc2FwJCR1c2VTZXRUaW1lb3V0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJGFzYXAkJHNjaGVkdWxlRmx1c2g7XG4gICAgLy8gRGVjaWRlIHdoYXQgYXN5bmMgbWV0aG9kIHRvIHVzZSB0byB0cmlnZ2VyaW5nIHByb2Nlc3Npbmcgb2YgcXVldWVkIGNhbGxiYWNrczpcbiAgICBpZiAobGliJHJzdnAkYXNhcCQkaXNOb2RlKSB7XG4gICAgICBsaWIkcnN2cCRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJHJzdnAkYXNhcCQkdXNlTmV4dFRpY2soKTtcbiAgICB9IGVsc2UgaWYgKGxpYiRyc3ZwJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICBsaWIkcnN2cCRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJHJzdnAkYXNhcCQkdXNlTXV0YXRpb25PYnNlcnZlcigpO1xuICAgIH0gZWxzZSBpZiAobGliJHJzdnAkYXNhcCQkaXNXb3JrZXIpIHtcbiAgICAgIGxpYiRyc3ZwJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkcnN2cCRhc2FwJCR1c2VNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIH0gZWxzZSBpZiAobGliJHJzdnAkYXNhcCQkYnJvd3NlcldpbmRvdyA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsaWIkcnN2cCRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJHJzdnAkYXNhcCQkYXR0ZW1wdFZlcnRleCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWIkcnN2cCRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJHJzdnAkYXNhcCQkdXNlU2V0VGltZW91dCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRkZWZlciQkZGVmZXIobGFiZWwpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9IHsgfTtcblxuICAgICAgZGVmZXJyZWRbJ3Byb21pc2UnXSA9IG5ldyBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBkZWZlcnJlZFsncmVzb2x2ZSddID0gcmVzb2x2ZTtcbiAgICAgICAgZGVmZXJyZWRbJ3JlamVjdCddID0gcmVqZWN0O1xuICAgICAgfSwgbGFiZWwpO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQ7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRkZWZlciQkZGVmYXVsdCA9IGxpYiRyc3ZwJGRlZmVyJCRkZWZlcjtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRmaWx0ZXIkJGZpbHRlcihwcm9taXNlcywgZmlsdGVyRm4sIGxhYmVsKSB7XG4gICAgICByZXR1cm4gbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdC5hbGwocHJvbWlzZXMsIGxhYmVsKS50aGVuKGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgICBpZiAoIWxpYiRyc3ZwJHV0aWxzJCRpc0Z1bmN0aW9uKGZpbHRlckZuKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgZmlsdGVyJ3Mgc2Vjb25kIGFyZ3VtZW50LlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICB2YXIgZmlsdGVyZWQgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZmlsdGVyZWRbaV0gPSBmaWx0ZXJGbih2YWx1ZXNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQuYWxsKGZpbHRlcmVkLCBsYWJlbCkudGhlbihmdW5jdGlvbihmaWx0ZXJlZCkge1xuICAgICAgICAgIHZhciByZXN1bHRzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgICAgICAgdmFyIG5ld0xlbmd0aCA9IDA7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyZWRbaV0pIHtcbiAgICAgICAgICAgICAgcmVzdWx0c1tuZXdMZW5ndGhdID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICBuZXdMZW5ndGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXN1bHRzLmxlbmd0aCA9IG5ld0xlbmd0aDtcblxuICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkZmlsdGVyJCRkZWZhdWx0ID0gbGliJHJzdnAkZmlsdGVyJCRmaWx0ZXI7XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRwcm9taXNlJGhhc2gkJFByb21pc2VIYXNoKENvbnN0cnVjdG9yLCBvYmplY3QsIGxhYmVsKSB7XG4gICAgICB0aGlzLl9zdXBlckNvbnN0cnVjdG9yKENvbnN0cnVjdG9yLCBvYmplY3QsIHRydWUsIGxhYmVsKTtcbiAgICB9XG5cbiAgICB2YXIgbGliJHJzdnAkcHJvbWlzZSRoYXNoJCRkZWZhdWx0ID0gbGliJHJzdnAkcHJvbWlzZSRoYXNoJCRQcm9taXNlSGFzaDtcblxuICAgIGxpYiRyc3ZwJHByb21pc2UkaGFzaCQkUHJvbWlzZUhhc2gucHJvdG90eXBlID0gbGliJHJzdnAkdXRpbHMkJG9fY3JlYXRlKGxpYiRyc3ZwJGVudW1lcmF0b3IkJGRlZmF1bHQucHJvdG90eXBlKTtcbiAgICBsaWIkcnN2cCRwcm9taXNlJGhhc2gkJFByb21pc2VIYXNoLnByb3RvdHlwZS5fc3VwZXJDb25zdHJ1Y3RvciA9IGxpYiRyc3ZwJGVudW1lcmF0b3IkJGRlZmF1bHQ7XG4gICAgbGliJHJzdnAkcHJvbWlzZSRoYXNoJCRQcm9taXNlSGFzaC5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3Jlc3VsdCA9IHt9O1xuICAgIH07XG5cbiAgICBsaWIkcnN2cCRwcm9taXNlJGhhc2gkJFByb21pc2VIYXNoLnByb3RvdHlwZS5fdmFsaWRhdGVJbnB1dCA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICByZXR1cm4gaW5wdXQgJiYgdHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JztcbiAgICB9O1xuXG4gICAgbGliJHJzdnAkcHJvbWlzZSRoYXNoJCRQcm9taXNlSGFzaC5wcm90b3R5cGUuX3ZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignUHJvbWlzZS5oYXNoIG11c3QgYmUgY2FsbGVkIHdpdGggYW4gb2JqZWN0Jyk7XG4gICAgfTtcblxuICAgIGxpYiRyc3ZwJHByb21pc2UkaGFzaCQkUHJvbWlzZUhhc2gucHJvdG90eXBlLl9lbnVtZXJhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuICAgICAgdmFyIGlucHV0ICAgPSB0aGlzLl9pbnB1dDtcbiAgICAgIHZhciByZXN1bHRzID0gW107XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBpbnB1dCkge1xuICAgICAgICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IGxpYiRyc3ZwJCRpbnRlcm5hbCQkUEVORElORyAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5wdXQsIGtleSkpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgcG9zaXRpb246IGtleSxcbiAgICAgICAgICAgIGVudHJ5OiBpbnB1dFtrZXldXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGxlbmd0aCA9IHJlc3VsdHMubGVuZ3RoO1xuICAgICAgdGhpcy5fcmVtYWluaW5nID0gbGVuZ3RoO1xuICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IHByb21pc2UuX3N0YXRlID09PSBsaWIkcnN2cCQkaW50ZXJuYWwkJFBFTkRJTkcgJiYgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG4gICAgICAgIHRoaXMuX2VhY2hFbnRyeShyZXN1bHQuZW50cnksIHJlc3VsdC5wb3NpdGlvbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGhhc2gkc2V0dGxlZCQkSGFzaFNldHRsZWQoQ29uc3RydWN0b3IsIG9iamVjdCwgbGFiZWwpIHtcbiAgICAgIHRoaXMuX3N1cGVyQ29uc3RydWN0b3IoQ29uc3RydWN0b3IsIG9iamVjdCwgZmFsc2UsIGxhYmVsKTtcbiAgICB9XG5cbiAgICBsaWIkcnN2cCRoYXNoJHNldHRsZWQkJEhhc2hTZXR0bGVkLnByb3RvdHlwZSA9IGxpYiRyc3ZwJHV0aWxzJCRvX2NyZWF0ZShsaWIkcnN2cCRwcm9taXNlJGhhc2gkJGRlZmF1bHQucHJvdG90eXBlKTtcbiAgICBsaWIkcnN2cCRoYXNoJHNldHRsZWQkJEhhc2hTZXR0bGVkLnByb3RvdHlwZS5fc3VwZXJDb25zdHJ1Y3RvciA9IGxpYiRyc3ZwJGVudW1lcmF0b3IkJGRlZmF1bHQ7XG4gICAgbGliJHJzdnAkaGFzaCRzZXR0bGVkJCRIYXNoU2V0dGxlZC5wcm90b3R5cGUuX21ha2VSZXN1bHQgPSBsaWIkcnN2cCRlbnVtZXJhdG9yJCRtYWtlU2V0dGxlZFJlc3VsdDtcblxuICAgIGxpYiRyc3ZwJGhhc2gkc2V0dGxlZCQkSGFzaFNldHRsZWQucHJvdG90eXBlLl92YWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ2hhc2hTZXR0bGVkIG11c3QgYmUgY2FsbGVkIHdpdGggYW4gb2JqZWN0Jyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGhhc2gkc2V0dGxlZCQkaGFzaFNldHRsZWQob2JqZWN0LCBsYWJlbCkge1xuICAgICAgcmV0dXJuIG5ldyBsaWIkcnN2cCRoYXNoJHNldHRsZWQkJEhhc2hTZXR0bGVkKGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQsIG9iamVjdCwgbGFiZWwpLnByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRoYXNoJHNldHRsZWQkJGRlZmF1bHQgPSBsaWIkcnN2cCRoYXNoJHNldHRsZWQkJGhhc2hTZXR0bGVkO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJGhhc2gkJGhhc2gob2JqZWN0LCBsYWJlbCkge1xuICAgICAgcmV0dXJuIG5ldyBsaWIkcnN2cCRwcm9taXNlJGhhc2gkJGRlZmF1bHQobGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdCwgb2JqZWN0LCBsYWJlbCkucHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRyc3ZwJGhhc2gkJGRlZmF1bHQgPSBsaWIkcnN2cCRoYXNoJCRoYXNoO1xuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG1hcCQkbWFwKHByb21pc2VzLCBtYXBGbiwgbGFiZWwpIHtcbiAgICAgIHJldHVybiBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0LmFsbChwcm9taXNlcywgbGFiZWwpLnRoZW4oZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICAgIGlmICghbGliJHJzdnAkdXRpbHMkJGlzRnVuY3Rpb24obWFwRm4pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYSBmdW5jdGlvbiBhcyBtYXAncyBzZWNvbmQgYXJndW1lbnQuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgIHZhciByZXN1bHRzID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlc3VsdHNbaV0gPSBtYXBGbih2YWx1ZXNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQuYWxsKHJlc3VsdHMsIGxhYmVsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkbWFwJCRkZWZhdWx0ID0gbGliJHJzdnAkbWFwJCRtYXA7XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRub2RlJCRSZXN1bHQoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCRub2RlJCRFUlJPUiA9IG5ldyBsaWIkcnN2cCRub2RlJCRSZXN1bHQoKTtcbiAgICB2YXIgbGliJHJzdnAkbm9kZSQkR0VUX1RIRU5fRVJST1IgPSBuZXcgbGliJHJzdnAkbm9kZSQkUmVzdWx0KCk7XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRub2RlJCRnZXRUaGVuKG9iaikge1xuICAgICAgdHJ5IHtcbiAgICAgICByZXR1cm4gb2JqLnRoZW47XG4gICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGxpYiRyc3ZwJG5vZGUkJEVSUk9SLnZhbHVlPSBlcnJvcjtcbiAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJG5vZGUkJEVSUk9SO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkbm9kZSQkdHJ5QXBwbHkoZiwgcywgYSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZi5hcHBseShzLCBhKTtcbiAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgbGliJHJzdnAkbm9kZSQkRVJST1IudmFsdWUgPSBlcnJvcjtcbiAgICAgICAgcmV0dXJuIGxpYiRyc3ZwJG5vZGUkJEVSUk9SO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG5vZGUkJG1ha2VPYmplY3QoXywgYXJndW1lbnROYW1lcykge1xuICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgdmFyIG5hbWU7XG4gICAgICB2YXIgaTtcbiAgICAgIHZhciBsZW5ndGggPSBfLmxlbmd0aDtcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgbGVuZ3RoOyB4KyspIHtcbiAgICAgICAgYXJnc1t4XSA9IF9beF07XG4gICAgICB9XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmd1bWVudE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5hbWUgPSBhcmd1bWVudE5hbWVzW2ldO1xuICAgICAgICBvYmpbbmFtZV0gPSBhcmdzW2kgKyAxXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRub2RlJCRhcnJheVJlc3VsdChfKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gXy5sZW5ndGg7XG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShsZW5ndGggLSAxKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcmdzW2kgLSAxXSA9IF9baV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG5vZGUkJHdyYXBUaGVuYWJsZSh0aGVuLCBwcm9taXNlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aGVuOiBmdW5jdGlvbihvbkZ1bEZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgICAgICAgIHJldHVybiB0aGVuLmNhbGwocHJvbWlzZSwgb25GdWxGaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG5vZGUkJGRlbm9kZWlmeShub2RlRnVuYywgb3B0aW9ucykge1xuICAgICAgdmFyIGZuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShsICsgMSk7XG4gICAgICAgIHZhciBhcmc7XG4gICAgICAgIHZhciBwcm9taXNlSW5wdXQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgIGFyZyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICAgIGlmICghcHJvbWlzZUlucHV0KSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBjbGVhbiB0aGlzIHVwXG4gICAgICAgICAgICBwcm9taXNlSW5wdXQgPSBsaWIkcnN2cCRub2RlJCRuZWVkc1Byb21pc2VJbnB1dChhcmcpO1xuICAgICAgICAgICAgaWYgKHByb21pc2VJbnB1dCA9PT0gbGliJHJzdnAkbm9kZSQkR0VUX1RIRU5fRVJST1IpIHtcbiAgICAgICAgICAgICAgdmFyIHAgPSBuZXcgbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdChsaWIkcnN2cCQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwLCBsaWIkcnN2cCRub2RlJCRHRVRfVEhFTl9FUlJPUi52YWx1ZSk7XG4gICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9taXNlSW5wdXQgJiYgcHJvbWlzZUlucHV0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGFyZyA9IGxpYiRyc3ZwJG5vZGUkJHdyYXBUaGVuYWJsZShwcm9taXNlSW5wdXQsIGFyZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGFyZ3NbaV0gPSBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBsaWIkcnN2cCRwcm9taXNlJCRkZWZhdWx0KGxpYiRyc3ZwJCRpbnRlcm5hbCQkbm9vcCk7XG5cbiAgICAgICAgYXJnc1tsXSA9IGZ1bmN0aW9uKGVyciwgdmFsKSB7XG4gICAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycik7XG4gICAgICAgICAgZWxzZSBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbCk7XG4gICAgICAgICAgZWxzZSBpZiAob3B0aW9ucyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCBsaWIkcnN2cCRub2RlJCRhcnJheVJlc3VsdChhcmd1bWVudHMpKTtcbiAgICAgICAgICBlbHNlIGlmIChsaWIkcnN2cCR1dGlscyQkaXNBcnJheShvcHRpb25zKSlcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCBsaWIkcnN2cCRub2RlJCRtYWtlT2JqZWN0KGFyZ3VtZW50cywgb3B0aW9ucykpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGxpYiRyc3ZwJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChwcm9taXNlSW5wdXQpIHtcbiAgICAgICAgICByZXR1cm4gbGliJHJzdnAkbm9kZSQkaGFuZGxlUHJvbWlzZUlucHV0KHByb21pc2UsIGFyZ3MsIG5vZGVGdW5jLCBzZWxmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbGliJHJzdnAkbm9kZSQkaGFuZGxlVmFsdWVJbnB1dChwcm9taXNlLCBhcmdzLCBub2RlRnVuYywgc2VsZik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZuLl9fcHJvdG9fXyA9IG5vZGVGdW5jO1xuXG4gICAgICByZXR1cm4gZm47XG4gICAgfVxuXG4gICAgdmFyIGxpYiRyc3ZwJG5vZGUkJGRlZmF1bHQgPSBsaWIkcnN2cCRub2RlJCRkZW5vZGVpZnk7XG5cbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRub2RlJCRoYW5kbGVWYWx1ZUlucHV0KHByb21pc2UsIGFyZ3MsIG5vZGVGdW5jLCBzZWxmKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbGliJHJzdnAkbm9kZSQkdHJ5QXBwbHkobm9kZUZ1bmMsIHNlbGYsIGFyZ3MpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gbGliJHJzdnAkbm9kZSQkRVJST1IpIHtcbiAgICAgICAgbGliJHJzdnAkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVzdWx0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJG5vZGUkJGhhbmRsZVByb21pc2VJbnB1dChwcm9taXNlLCBhcmdzLCBub2RlRnVuYywgc2VsZil7XG4gICAgICByZXR1cm4gbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdC5hbGwoYXJncykudGhlbihmdW5jdGlvbihhcmdzKXtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGxpYiRyc3ZwJG5vZGUkJHRyeUFwcGx5KG5vZGVGdW5jLCBzZWxmLCBhcmdzKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbGliJHJzdnAkbm9kZSQkRVJST1IpIHtcbiAgICAgICAgICBsaWIkcnN2cCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZXN1bHQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJHJzdnAkbm9kZSQkbmVlZHNQcm9taXNlSW5wdXQoYXJnKSB7XG4gICAgICBpZiAoYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChhcmcuY29uc3RydWN0b3IgPT09IGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbGliJHJzdnAkbm9kZSQkZ2V0VGhlbihhcmcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJHJhY2UkJHJhY2UoYXJyYXksIGxhYmVsKSB7XG4gICAgICByZXR1cm4gbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdC5yYWNlKGFycmF5LCBsYWJlbCk7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRyYWNlJCRkZWZhdWx0ID0gbGliJHJzdnAkcmFjZSQkcmFjZTtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRyZWplY3QkJHJlamVjdChyZWFzb24sIGxhYmVsKSB7XG4gICAgICByZXR1cm4gbGliJHJzdnAkcHJvbWlzZSQkZGVmYXVsdC5yZWplY3QocmVhc29uLCBsYWJlbCk7XG4gICAgfVxuICAgIHZhciBsaWIkcnN2cCRyZWplY3QkJGRlZmF1bHQgPSBsaWIkcnN2cCRyZWplY3QkJHJlamVjdDtcbiAgICBmdW5jdGlvbiBsaWIkcnN2cCRyZXNvbHZlJCRyZXNvbHZlKHZhbHVlLCBsYWJlbCkge1xuICAgICAgcmV0dXJuIGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQucmVzb2x2ZSh2YWx1ZSwgbGFiZWwpO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkcmVzb2x2ZSQkZGVmYXVsdCA9IGxpYiRyc3ZwJHJlc29sdmUkJHJlc29sdmU7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkcmV0aHJvdyQkcmV0aHJvdyhyZWFzb24pIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRocm93IHJlYXNvbjtcbiAgICAgIH0pO1xuICAgICAgdGhyb3cgcmVhc29uO1xuICAgIH1cbiAgICB2YXIgbGliJHJzdnAkcmV0aHJvdyQkZGVmYXVsdCA9IGxpYiRyc3ZwJHJldGhyb3ckJHJldGhyb3c7XG5cbiAgICAvLyBkZWZhdWx0IGFzeW5jIGlzIGFzYXA7XG4gICAgbGliJHJzdnAkY29uZmlnJCRjb25maWcuYXN5bmMgPSBsaWIkcnN2cCRhc2FwJCRkZWZhdWx0O1xuICAgIHZhciBsaWIkcnN2cCQkY2FzdCA9IGxpYiRyc3ZwJHJlc29sdmUkJGRlZmF1bHQ7XG4gICAgZnVuY3Rpb24gbGliJHJzdnAkJGFzeW5jKGNhbGxiYWNrLCBhcmcpIHtcbiAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLmFzeW5jKGNhbGxiYWNrLCBhcmcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRvbigpIHtcbiAgICAgIGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnWydvbiddLmFwcGx5KGxpYiRyc3ZwJGNvbmZpZyQkY29uZmlnLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRyc3ZwJCRvZmYoKSB7XG4gICAgICBsaWIkcnN2cCRjb25maWckJGNvbmZpZ1snb2ZmJ10uYXBwbHkobGliJHJzdnAkY29uZmlnJCRjb25maWcsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGluc3RydW1lbnRhdGlvbiB0aHJvdWdoIGB3aW5kb3cuX19QUk9NSVNFX0lOVFJVTUVOVEFUSU9OX19gXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3dbJ19fUFJPTUlTRV9JTlNUUlVNRU5UQVRJT05fXyddID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGxpYiRyc3ZwJCRjYWxsYmFja3MgPSB3aW5kb3dbJ19fUFJPTUlTRV9JTlNUUlVNRU5UQVRJT05fXyddO1xuICAgICAgbGliJHJzdnAkY29uZmlnJCRjb25maWd1cmUoJ2luc3RydW1lbnQnLCB0cnVlKTtcbiAgICAgIGZvciAodmFyIGxpYiRyc3ZwJCRldmVudE5hbWUgaW4gbGliJHJzdnAkJGNhbGxiYWNrcykge1xuICAgICAgICBpZiAobGliJHJzdnAkJGNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eShsaWIkcnN2cCQkZXZlbnROYW1lKSkge1xuICAgICAgICAgIGxpYiRyc3ZwJCRvbihsaWIkcnN2cCQkZXZlbnROYW1lLCBsaWIkcnN2cCQkY2FsbGJhY2tzW2xpYiRyc3ZwJCRldmVudE5hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkcnN2cCR1bWQkJFJTVlAgPSB7XG4gICAgICAncmFjZSc6IGxpYiRyc3ZwJHJhY2UkJGRlZmF1bHQsXG4gICAgICAnUHJvbWlzZSc6IGxpYiRyc3ZwJHByb21pc2UkJGRlZmF1bHQsXG4gICAgICAnYWxsU2V0dGxlZCc6IGxpYiRyc3ZwJGFsbCRzZXR0bGVkJCRkZWZhdWx0LFxuICAgICAgJ2hhc2gnOiBsaWIkcnN2cCRoYXNoJCRkZWZhdWx0LFxuICAgICAgJ2hhc2hTZXR0bGVkJzogbGliJHJzdnAkaGFzaCRzZXR0bGVkJCRkZWZhdWx0LFxuICAgICAgJ2Rlbm9kZWlmeSc6IGxpYiRyc3ZwJG5vZGUkJGRlZmF1bHQsXG4gICAgICAnb24nOiBsaWIkcnN2cCQkb24sXG4gICAgICAnb2ZmJzogbGliJHJzdnAkJG9mZixcbiAgICAgICdtYXAnOiBsaWIkcnN2cCRtYXAkJGRlZmF1bHQsXG4gICAgICAnZmlsdGVyJzogbGliJHJzdnAkZmlsdGVyJCRkZWZhdWx0LFxuICAgICAgJ3Jlc29sdmUnOiBsaWIkcnN2cCRyZXNvbHZlJCRkZWZhdWx0LFxuICAgICAgJ3JlamVjdCc6IGxpYiRyc3ZwJHJlamVjdCQkZGVmYXVsdCxcbiAgICAgICdhbGwnOiBsaWIkcnN2cCRhbGwkJGRlZmF1bHQsXG4gICAgICAncmV0aHJvdyc6IGxpYiRyc3ZwJHJldGhyb3ckJGRlZmF1bHQsXG4gICAgICAnZGVmZXInOiBsaWIkcnN2cCRkZWZlciQkZGVmYXVsdCxcbiAgICAgICdFdmVudFRhcmdldCc6IGxpYiRyc3ZwJGV2ZW50cyQkZGVmYXVsdCxcbiAgICAgICdjb25maWd1cmUnOiBsaWIkcnN2cCRjb25maWckJGNvbmZpZ3VyZSxcbiAgICAgICdhc3luYyc6IGxpYiRyc3ZwJCRhc3luY1xuICAgIH07XG5cbiAgICAvKiBnbG9iYWwgZGVmaW5lOnRydWUgbW9kdWxlOnRydWUgd2luZG93OiB0cnVlICovXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lWydhbWQnXSkge1xuICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gbGliJHJzdnAkdW1kJCRSU1ZQOyB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZVsnZXhwb3J0cyddKSB7XG4gICAgICBtb2R1bGVbJ2V4cG9ydHMnXSA9IGxpYiRyc3ZwJHVtZCQkUlNWUDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpc1snUlNWUCddID0gbGliJHJzdnAkdW1kJCRSU1ZQO1xuICAgIH1cbn0pLmNhbGwodGhpcyk7XG5cblxufSkocmVxdWlyZShcIl9fYnJvd3NlcmlmeV9wcm9jZXNzXCIpKSJdfQ==
;