function Dialogue(host) {
    this._currentLine = 0;
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
        if(this._currentLine === null) {
            this.goToLine(0);
        }
        else {
            if(this._currentLine + 1 < this.lines.length) {
                this.goToLine(this._currentLine + 1);
            }
            else {
                this.host.gotoSink('end');
            }
        }
    },

    goToLine: function goToLine(lineNumber) {
        this._currentLine = lineNumber;
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
            this._currentLine = 0;
        }

        var involvedCharacters = this.lines.reduce(function(charactersSoFar, line) {
                charactersSoFar[line.who] = true;
            }.bind(this),
            {}
        );
        Object.keys(involvedCharacters).forEach(function(characterName) {
            host.characters[characterName].action = 'talking';
        }.bind(this));
    },

    update: function update() {

    },

    draw: function draw() {
        if(this._currentLine !== null) {
            var currentLine = this.lines[this._currentLine];
            var ctx = this.host.ctx;
            var position = this.defaultProperties[currentLine.who];
            if(currentLine.position) {
                position = currentLine.position;
            }

            ctx.drawImage(
                this.saveCanvas,
                0, 0, this.host.gameCanvas.width, this.host.gameCanvas.height,
                0, 0, this.host.gameCanvas.width, this.host.gameCanvas.height
                );
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            ctx.font = 'normal 14pt helvetica';
            var metrics = ctx.measureText(currentLine.text);
            ctx.fillStyle = 'white';
            if(this.defaultProperties[currentLine.who].color) {
                ctx.fillStyle = this.defaultProperties[currentLine.who].color;
            }
            ctx.strokeStyle = 'black';
            ctx.strokeRect(position.x, position.y, metrics.width + 10, 30);
            ctx.globalAlpha = 0.85;
            ctx.fillRect(position.x, position.y, metrics.width + 10, 30);
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'black';
            ctx.fillText(currentLine.text, position.x + 5, position.y + 5);
        }
    }
};


module.exports = Dialogue;
