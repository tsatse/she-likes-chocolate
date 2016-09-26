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
