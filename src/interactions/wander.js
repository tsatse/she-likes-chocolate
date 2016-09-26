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
        return ((y - 150) / 4 + 150) / 150;
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
                if(character._behaviour) {
                    character._behaviour.forEach(function(behaviour) {
                        behaviour.update();
                    });
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
                if(
                    (character.x + character.dx) > this.minX &&
                    (character.x + character.dx) < this.maxX
                )
                    { character.x += character.dx; }
                if(
                    (character.y + character.dy) > this.minY &&
                    (character.y + character.dy) < this.maxY
                )
                    { character.y += character.dy; }
            }.bind(this));
    }
};


module.exports = Wander;
