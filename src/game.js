var RSVP = require('rsvp');

var Utils = require('utils');
var keys = require('./keys');


var gameplays = {
    Dialogue: require('./gameplay/dialogue'),
    Wander: require('./gameplay/wander')
};


function Game(canvas, gameStructure) {
    this.phaseName = null;
    this.gameStructure = gameStructure;
    this.phaseInstances = {};
    this.registeredEventHandlers = {};
    this.lastUpdate = null;
    this.keys = keys;
    this.gameCanvas = canvas;
    this.gameCanvas.width = window.innerWidth;
    this.gameCanvas.height = window.innerHeight;
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
    start: function start() {
        return this.gotoPhase(this.gameStructure.entry)
            .then(function() {
                requestAnimationFrame(this.loop.bind(this));
            }.bind(this));
    },

    setPhase: function setPhase(phaseName, phaseDescription) {
        if(this.phaseInstances[phaseName]) {
            return;
        }
        this.phaseInstances[phaseName] = new gameplays[phaseDescription.gameplayType](this);
        this.phaseInstances[phaseName].host = this;
        for(var propertyName in phaseDescription) {
            if(['images', 'gameplayType'].indexOf(propertyName) === -1) {
                this.phaseInstances[phaseName][propertyName] = phaseDescription[propertyName];
            }
        }
    },

    gotoSink: function gotoSink(sinkName) {
        return this.gotoPhase(this.gameStructure.plan[this.phaseName][sinkName]);
    },

    registerEventHandler: function registerEventHandler(eventName, callback) {
        this.registeredEventHandlers[eventName] = callback;
    },

    loadImages: function loadImages(images) {
        return new RSVP.Promise(function(resolve, reject) {
            if(images) {
                Utils.loadImages(images, function(imgs) {
                    resolve(imgs);
                });
            }
        });
    },

    gotoPhase: function gotoPhase(phaseName) {
        var phaseDescription;

        return RSVP.Promise.resolve()
            .then(function() {
                this.phaseName = phaseName;
                if(!this.gameStructure.phases[this.phaseName]) {
                    throw(new Error('No phase with name ' + phaseName));
                }
                phaseDescription = this.gameStructure.phases[this.phaseName];
                if(phaseDescription.images) {
                    return this.loadImages(phaseDescription.images);
                }
            }.bind(this))
            .then(function(images) {
                if(images) {
                    this.images = images;
                }                
                return this.setPhase(this.phaseName, phaseDescription);
            }.bind(this));
    },

    loop: function loop(time) {
        if(!this.lastUpdate) {
            this.lastUpdate = time;
        }
        if(this.phaseInstances[this.phaseName]) {
            this.phaseInstances[this.phaseName].update(time);
            this.lastUpdate = time;
            this.phaseInstances[this.phaseName].draw(time);
        }
        requestAnimationFrame(this.loop.bind(this));
    }
};


module.exports = Game;
