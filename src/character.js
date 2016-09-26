var behaviours = {
    walker:  require('./behaviours/walker'),
    shopKeeper: require('./behaviours/shop-keeper'),
    linearTalker: require('./behaviours/linear-talker')
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
        this._behaviour = [];

        for(var property in description) {
            this.setProperty(property, description[property]);
        }
        if(this.behaviour) {
            this._behaviour = this.behaviour.map(function(behaviourData) {
                var newBehaviour = new behaviours[behaviourData.type](behaviourData, this);
                newBehaviour.character = this;
                return newBehaviour;
            }.bind(this));
        }
    },

    performAction: function performAction() {
        this._behaviour.forEach(function(behaviour) {
            behaviour.action();
        });
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
