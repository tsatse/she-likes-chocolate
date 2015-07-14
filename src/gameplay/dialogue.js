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
                this.host.nextPhase();
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
            ctx.fillStyle = 'white';
            ctx.fillRect(position.x, position.y, 350, 200);
            ctx.fillStyle = 'black';
            ctx.fillText(currentLine.text, position.x, position.y + 10);
        }
    }
};


module.exports = Dialogue;
