var behaviours = {
    'walker':  require('./walker')
};


function Character(description) {
    this.init(description);    
}

Character.prototype = {
    init: function init(description) {
        this.action = 'idle';
        this.phase = 0;
        this.dx = 0;
        this.dy = 0;

        for(var property in description) {
            this.setProperty(property, description[property]);
        }
        if(this.behaviour) {
            this.behaviour = new behaviours[this.behaviour.type](this.behaviour, this);
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
