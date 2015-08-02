function PressAnyKey() {
}

PressAnyKey.prototype = {
    init: function init() {
        this.armed = false;
    },
    
    update: function(time) {
        if(!this.armed) {
            if(!Object.keys(this.host.keys)
                .map(function(key) {
                    return this.host.keys[key];
                }.bind(this))
                .some(function(key) {
                    return key;
                })) {
                this.armed = true;
            }
            return;
        }
        if(Object.keys(this.host.keys)
            .map(function(key) {
                return this.host.keys[key];
            }.bind(this))
            .some(function(key) {
                return key;
            })) {
            this.host.gotoSink('keyPressed');
        }
        return true;
    }
};


module.exports = PressAnyKey;
