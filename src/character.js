function Character(sprites, size, properties) {
    this.init(sprites, size, properties);    
}

Character.prototype = {
    init: function init(sprites, size, properties) {
        this.action = 'idle';
        this.phase = 0;
        this.dx = 0;
        this.dy = 0;

        this.sprites = sprites;
        this.width = size.width;
        this.height = size.height;
        for(var property in properties) {
            this.setProperty(property, properties[property]);
        }
    },

    setProperty: function setProperty(name, value) {
        if(this[name] !== value) {
            if(name === 'action') {
                this.phase = 0;
            }
            this[name] = value;
        }
    }
};


module.exports = Character;
