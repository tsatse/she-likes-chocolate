function PressAnyKey() {
}

PressAnyKey.prototype = {
    update: function(time) {
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
