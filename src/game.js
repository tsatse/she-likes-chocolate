var Utils = require('utils');
var keys = require('./keys');


var gameplays = {
    Dialogue: require('./gameplay/dialogue'),
    Wander: require('./gameplay/wander')
};


function Game(canvas, phases) {
    this.phaseIndex = null;
    this.currentPhase = null;
    if(phases) {
        this.setPhases(phases);
    }
    this.registeredEventHandlers = {};
    this.lastUpdate = null;
    this.gameCanvas = canvas;
    this.gameCanvas.width = window.innerWidth;
    this.gameCanvas.height = window.innerHeight;
    this.keys = keys;
    this.ctx = this.gameCanvas.getContext('2d');
    document.addEventListener('keydown', function(event) {
            this.keys[event.keyCode] = true;
            if(this.registeredEventHandlers.keydown) {
                this.registeredEventHandlers.keydown(event);
            }
        }.bind(this), false);

    document.addEventListener('keyup', function(event) {
            this.keys[event.keyCode] = false;
            if(this.registeredEventHandlers.keyup) {
                this.registeredEventHandlers.keyup(event);
            }
        }.bind(this), false);
}

Game.prototype = {
    setPhases: function setPhases(phases) {
        this.phases = phases;
    },

    start: function start() {
        this.gotoPhase(0, function() {
            requestAnimationFrame(this.loop.bind(this));
        }.bind(this));
    },

    setPhase: function setPhase(phaseDescription) {
        this.currentPhase = new gameplays[phaseDescription.gameplayType](this);
        this.currentPhase.host = this;
        for(var propertyName in phaseDescription) {
            if(['images', 'gameplayType'].indexOf(propertyName) === -1) {
                this.currentPhase[propertyName] = phaseDescription[propertyName];
            }
        }
    },

    registerEventHandler: function registerEventHandler(eventName, callback) {
        this.registeredEventHandlers[eventName] = callback;
    },

    nextPhase: function nextPhase() {
        if((this.phaseIndex + 1) < this.phases.length) {
            this.gotoPhase(this.phaseIndex + 1);
        }
    },

    gotoPhase: function gotoPhase(phaseNumber, callback) {
        this.phaseIndex = phaseNumber;
        if(this.phases[this.phaseIndex]) {
            var phaseDescription = this.phases[this.phaseIndex];
            if(phaseDescription.images) {
                Utils.loadImages(
                    phaseDescription.images,
                    function(imgs) {
                        this.images = imgs;
                        this.setPhase(phaseDescription);
                        callback();
                    }.bind(this)
                );
            }
            else {
                this.setPhase(phaseDescription);
                callback();
            }
        }
    },

    loop: function loop(time) {
        if(!this.lastUpdate) {
            this.lastUpdate = time;
        }
        this.currentPhase.update(time);
        this.lastUpdate = time;
        this.currentPhase.draw(time);
        requestAnimationFrame(this.loop.bind(this));
    }
};


module.exports = Game;
