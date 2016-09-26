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
