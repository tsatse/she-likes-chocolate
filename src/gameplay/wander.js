var Character = require('../character');


function Wander() {
    this._characters = {};
}

Wander.prototype = {
    init: function() {
        var characterDescription;
        for(var characterName in this.characters) {
            characterDescription = this.characters[characterName];
            this._characters[characterName] = new Character(characterDescription.sprites, characterDescription.properties);
        }
    },

    update: function update(time) {
        this.updateMovement(time);
        this.updateFrames(time);
        return true;
    },

    updateFrames: function updateFrames(time) {
        if(((new Date()) - time) < 40) {
            return;
        }
        var characterList = Object.keys(this._characters);
        for(var i = 0 ; i < characterList.length ; i++) {
            var character = this._characters[characterList[i]];
            if(character.x + character.dx > this.minX && character.x + character.dx < this.maxX) {
                character.x += character.dx;
            }
            if(character.y + character.dy > this.minY && character.y + character.dy < this.maxY) {
                character.y += character.dy;
            }
            character.phase = (character.phase + 1) % (this.host.images[character.sprites[character.action]].width / character.width);
        }
    },

    updateMovement: function updateMovement(time) {
        var unit = 2;
        this._characters.me.dx = 0;
        this._characters.me.dy = 0;
        if(this.host.keys[37]) { this._characters.me.dx -= unit;}
        if(this.host.keys[39]) { this._characters.me.dx += unit;}
        if(this.host.keys[38]) { this._characters.me.dy -= unit;}
        if(this.host.keys[40]) { this._characters.me.dy += unit;}

        if(this._characters.me.dx > 0)
            { this._characters.me.setProperty('action', 'walkRight');}
        else if(this._characters.me.dx < 0)
            { this._characters.me.setProperty('action', 'walkLeft');}
        else if(this._characters.me.dy > 0)
            { this._characters.me.setProperty('action', 'walkUp');}
        else if(this._characters.me.dy < 0)
            { this._characters.me.setProperty('action', 'walkDown');}
        else
            { this._characters.me.setProperty('action', 'idle'); }
        if(this._characters.me.x === 202 && this._characters.me.action === 'walkLeft') {
            this.host.gotoSink('talkToHer');
        }
    },

    drawCharacter: function drawCharacter(characterName) {
        var character = this._characters[characterName];
        var image = this.host.images[character.sprites[character.action]];
        var xOffsetInSource = character.phase * character.width;

        var currentMapOffset = this.getMapOffset(this._characters.me.x, this._characters.me.y);
        this.host.ctx.drawImage(
            image,
            xOffsetInSource, 0,
            character.width, character.height,
            character.x - currentMapOffset.x, character.y - currentMapOffset.y,
            character.width, character.height
            );
    },

    getMapOffset: function getMapOffset(x, y) {
        var result = {x:0, y:0};
        if(x > (this.host.gameCanvas.width / 2)) {
            result.x = Math.min(x - this.host.gameCanvas.width / 2, this.mapWidth - this.host.gameCanvas.width);
        }
        
        return result;
    },

    drawMap: function drawMap(x, y) {
        var mapOffset = this.getMapOffset(x, y);
        this.host.ctx.drawImage(
            this.host.images.sky,
            0, 0,
            this.host.images.sky.width, this.host.images.sky.height,
            0, 0,
            this.host.gameCanvas.width, this.host.images.sky.height
            );
        this.host.ctx.drawImage(
            this.host.images.houses,
            Math.min(mapOffset.x, this.mapWidth - this.host.gameCanvas.width), mapOffset.y,
            Math.min(this.host.gameCanvas.width, this.host.images.houses.width), this.host.images.houses.height,
            0, 0,
            Math.min(this.host.gameCanvas.width, this.host.images.houses.width), this.host.images.houses.height
            );
    },

    drawForeground: function drawForeground(x, y) {
        var mapOffset = this.getMapOffset(x, y);
        this.host.ctx.drawImage(
            this.host.images.foreground,
            ((mapOffset.x * 1.5) % this.host.images.foreground.width) | 0, mapOffset.y,
            Math.min(this.host.gameCanvas.width, this.host.images.foreground.width), this.host.images.foreground.height,
            0, 0,
            Math.min(this.host.gameCanvas.width, this.host.images.foreground.width), this.host.images.foreground.height
            );
    },

    isVisible: function isVisible(characterName) {
        var character = this._characters[characterName];
        var currentMapOffset = this.getMapOffset(character.x, character.y);
        if(
            (character.x - currentMapOffset.x) > 0 &&
            (character.x - currentMapOffset.x) < this.host.gameCanvas.width
        ) {
            return true;
        }
        return false;
    },

    draw: function draw(time) {
        if((time - this.host.lastDraw) < 40) {
            return;
        }
        this.drawMap(this._characters.me.x, this._characters.me.y);
        var characterList = Object.keys(this._characters);
        characterList.sort(function(a, b) {
            return this._characters[a].y - this._characters[b].y;
        }.bind(this));
        for(var i = 0 ; i < characterList.length ; i++) {
            if(this.isVisible(characterList[i])) {
                this.drawCharacter(characterList[i]);
            }
        }
        this.drawForeground(this._characters.me.x, this._characters.me.y);
    }
};


module.exports = Wander;
