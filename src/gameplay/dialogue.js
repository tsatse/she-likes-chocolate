function Dialogue(host) {
    this.currentLine = null;
    host.registerEventHandler('keyup', this.onKeyUp.bind(this));
    this.goToNextLine();
}

Dialogue.prototype = {
    onKeyUp: function(event) {
        if(event.keyCode === 32) {
            this.goToNextLine();
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

    update: function update() {

    },

    draw: function draw() {
        if(this.currentLine !== null) {
            var currentLine = this.lines[this.currentLine];
            var ctx = this.host.ctx;
            var position = this.defaultPositions[currentLine.who];
            if(currentLine.position) {
                position = currentLine.position;
            }

            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            ctx.font = 'normal 14pt helvetica';
            var metrics = ctx.measureText(currentLine.text);
            ctx.fillStyle = 'white';
            if(this.defaultPositions[currentLine.who].color) {
                ctx.fillStyle = this.defaultPositions[currentLine.who].color;
            }
            ctx.fillRect(position.x, position.y, metrics.width + 10, 30);
            ctx.fillStyle = 'black';
            ctx.fillText(currentLine.text, position.x + 5, position.y + 5);
        }
    }
};


module.exports = Dialogue;
