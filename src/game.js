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
    this.lastUpdate = null;
    this.gameCanvas = canvas;
    this.gameCanvas.width = window.innerWidth;
    this.gameCanvas.height = window.innerHeight;
    this.keys = keys;
    this.ctx = this.gameCanvas.getContext('2d');
    document.addEventListener('keydown', function(event) {
            this.keys[event.keyCode] = true;
        }.bind(this), false);

    document.addEventListener('keyup', function(event) {
            this.keys[event.keyCode] = false;
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

    gotoPhase: function gotoPhase(phaseNumber, callback) {
        this.phaseIndex = phaseNumber;
        if(this.phases[this.phaseIndex]) {
            var phaseDescription = this.phases[this.phaseIndex];
            if(phaseDescription.images) {
                Utils.loadImages(
                    phaseDescription.images,
                    function(imgs) {
                        this.images = imgs;
                        this.currentPhase = new gameplays[phaseDescription.gameplayType](phaseDescription, this);
                        this.currentPhase.host = this;
                        for(var propertyName in phaseDescription) {
                            if(['images', 'gameplayType'].indexOf(propertyName) === -1) {
                                this.currentPhase[propertyName] = phaseDescription[propertyName];
                            }
                        }
                        callback();
                    }.bind(this)
                );
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
