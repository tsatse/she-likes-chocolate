export default class LinearTalker {
    constructor(definition, character) {
        this.dialogs = definition.dialogs;
        this.currentDialog = 0;
        this.currentLine = 0;
    }

    update() {
    }

    _incDialog() {
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
    }

    action() {
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
}
