function PressAnyKey() {
}

PressAnyKey.prototype = {
    init: function init() {
        this.armed = false;
        var timeout = this.host.phaseInstances[this.host.phaseName].timeout;
        if(timeout) {
            this.timer = setTimeout(function() {
                this.host.gotoSink('keyPressed');
            }.bind(this), timeout);
        }
        this._onClick = function() {
            this._cleanUpAndGo();
        }.bind(this);
        document.body.addEventListener('click', this._onClick);
    },

    _cleanUpAndGo: function _cleanUp() {
        if(this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        document.body.removeEventListener('click', this._onClick);
        this.host.gotoSink('keyPressed');
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
            this._cleanUpAndGo();
        }
        return true;
    }
};


module.exports = PressAnyKey;
