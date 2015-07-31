function Wander(host) {
}

Wander.prototype = {
    init: function() {
    },

    update: function update(time) {
        this.updateMovement(time);
        return true;
    },

    updateMovement: function updateMovement(time) {
        var unit = 2;
        this.host.characters.me.dx = 0;
        this.host.characters.me.dy = 0;
        if(this.host.keys.shift) {
            unit *= 2;
        }
        if(this.host.keys[37] || this.host.keys['Q'.charCodeAt()] || this.host.keys['A'.charCodeAt()]) { this.host.characters.me.dx -= unit;}
        if(this.host.keys[39] || this.host.keys['D'.charCodeAt()]) { this.host.characters.me.dx += unit;}
        if(this.host.keys[38] || this.host.keys['Z'.charCodeAt()] || this.host.keys['W'.charCodeAt()]) { this.host.characters.me.dy -= unit / 2;}
        if(this.host.keys[40] || this.host.keys['S'.charCodeAt()]) { this.host.characters.me.dy += unit / 2;}

        for(var sinkName in this.sinks) {
            var sink = this.sinks[sinkName];
            if(
                (
                    this.host.characters.me.x === sink.x &&
                    this.host.characters.me.y >= sink.y &&
                    this.host.characters.me.y <= sink.y + sink.height &&
                    ['walkRight', 'runRight'].indexOf(this.host.characters.me.action) !== -1
                ) ||

                (
                    this.host.characters.me.x === sink.x + sink.width &&
                    this.host.characters.me.y >= sink.y &&
                    this.host.characters.me.y <= sink.y + sink.height &&
                    ['walkLeft', 'runLeft'].indexOf(this.host.characters.me.action) !== -1
                ) ||

                (
                    this.host.characters.me.y === sink.y &&
                    this.host.characters.me.x >= sink.x &&
                    this.host.characters.me.x <= sink.x + sink.width &&
                    ['walkDown', 'runDown'].indexOf(this.host.characters.me.action) !== -1
                ) ||

                (
                    this.host.characters.me.y === sink.y + sink.height &&
                    this.host.characters.me.x >= sink.x &&
                    this.host.characters.me.x <= sink.x + sink.width &&
                    ['walkUp', 'runUp'].indexOf(this.host.characters.me.action) !== -1
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

                if(character.dx > 2)
                    { character.setProperty('action', 'runRight');}
                else if(character.dx > 0)
                    { character.setProperty('action', 'walkRight');}
                else if(character.dx < -2)
                    { character.setProperty('action', 'runLeft');}
                else if(character.dx < 0)
                    { character.setProperty('action', 'walkLeft');}
                else if(character.dy > 2)
                    { character.setProperty('action', 'runUp');}
                else if(character.dy > 0)
                    { character.setProperty('action', 'walkUp');}
                else if(character.dy < -2)
                    { character.setProperty('action', 'runDown');}
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
