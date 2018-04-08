export default class PressAnyKey {
    init() {
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
    }

    _cleanUpAndGo() {
        if(this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        document.body.removeEventListener('click', this._onClick);
        this.host.gotoSink('keyPressed');
    }

    update(time) {
        if(!this.armed) {
            if(!Object.keys(this.host.keys)
                .map(key => this.host.keys[key])
                .some(key => key)
            ) {
                this.armed = true;
            }
            return;
        }
        if(Object.keys(this.host.keys)
            .map(key => this.host.keys[key])
            .some(key=> key)
        ) {
            this._cleanUpAndGo();
        }
        return true;
    }
}
