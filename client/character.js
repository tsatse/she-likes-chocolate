import walker from './behaviours/walker';
import shopKeeper from './behaviours/shop-keeper';
import linearTalker from './behaviours/linear-talker';
import still from './behaviours/still';


const behaviours = {
    walker,
    shopKeeper,
    linearTalker,
    still,
};

class Character {
    constructor(description) {
        this.init(description);    
    }

    init(description) {
        this.action = 'idle';
        this.phase = 0;
        this.dx = 0;
        this.dy = 0;
        this._behaviour = [];

        for(const property in description) {
            this.setProperty(property, description[property]);
        }
        if(this.behaviour) {
            this._behaviour = this.behaviour.map((behaviourData) => {
                const newBehaviour = new behaviours[behaviourData.type](behaviourData, this);
                newBehaviour.character = this;
                return newBehaviour;
            });
        }
    }

    performAction() {
        this._behaviour.forEach(behaviour => behaviour.action());
    }

    setProperty(name, value) {
        if(this[name] !== value) {
            if(name === 'action') {
                this.phase = 0;
            }
            this[name] = value;
        }
    }
}


module.exports = Character;
