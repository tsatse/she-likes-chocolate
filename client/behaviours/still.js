export default class Still {
    constructor(definition, character) {
        this.position = definition.position;
    }

    update() {
        this.character.x = this.position.x;
        this.character.y = this.position.y;
    }
    
    action() {
        
    }
}
