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
            }.bind(this))
            .catch(function(error) {
                console.error(error);
            });
    },

    gotoSink: function gotoSink(sinkName) {
        return this.gotoPhase(this.gameStructure.plan[this.phaseName][sinkName]);
    },

    unregisterEventHandlers: function unregisterEventHandlers(phase) {
        var eventHandlers = phase.eventHandlers;

        if(!eventHandlers) {
            return;
        }
        for(var eventName in eventHandlers) {
            delete this.registeredEventHandlers[eventName];
        }
    },

    registerEventHandlers: function registerEventHandler(phase) {
        var eventHandlers = phase.eventHandlers;

        if(!eventHandlers) {
            return;
        }
        for(var eventName in eventHandlers) {
            this.registeredEventHandlers[eventName] = eventHandlers[eventName].bind(phase);
        }
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

    getHierarchy: function getHierarchy(phaseName, children) {
        if(!children) {
            children = [];
        }
        var currentHierarchy = [phaseName].concat(children);
        if(this.gameStructure.phases[phaseName].basedOn) {
            return this.getHierarchy(this.gameStructure.phases[phaseName].basedOn, currentHierarchy);
        }
        else {
            return currentHierarchy;
        }
    },

    getFullDescription: function getFullDescription(phaseName) {
        var hierarchy = this.getHierarchy(phaseName);
        return hierarchy.reduce(function(phaseSoFar, currentPhaseName) {
            for(var propertyName in this.gameStructure.phases[currentPhaseName]) {
                phaseSoFar[propertyName] = this.gameStructure.phases[currentPhaseName][propertyName];
            }
            return phaseSoFar;
        }.bind(this), {});
    },

    gotoPhase: function gotoPhase(phaseName) {
        var phaseDescription;
        this.changingPhase = true;

        return RSVP.Promise.resolve()
            .then(function() {
                if(this.phaseInstances[this.phaseName]) {
                    this.unregisterEventHandlers(this.phaseInstances[this.phaseName]);
                }
                this.phaseName = phaseName;
                if(!this.gameStructure.phases[this.phaseName]) {
                    throw(new Error('No phase with name ' + phaseName));
                }
                phaseDescription = this.getFullDescription(this.phaseName);
                if(phaseDescription.images) {
                    return this.loadImages(phaseDescription.images);
                }
            }.bind(this))
            .then(function(images) {
                if(images) {
                    this.images = images;
                }         
                if(!this.phaseInstances[phaseName]) {
                    this.phaseInstances[phaseName] = new gameplays[phaseDescription.gameplayType](this);
                    this.phaseInstances[phaseName].host = this;
                    this.phaseInstances[phaseName].name = phaseName;
                    for(var propertyName in phaseDescription) {
                        if(['images', 'gameplayType'].indexOf(propertyName) === -1) {
                            this.phaseInstances[phaseName][propertyName] = phaseDescription[propertyName];
                        }
                    }
                }
                if(this.phaseInstances[phaseName].init) {
                    this.phaseInstances[phaseName].init(phaseName);
                }
                this.registerEventHandlers(this.phaseInstances[this.phaseName]);
                this.changingPhase = false;
            }.bind(this))
            .catch(function(error) {
                console.error(error);
            });
    },

    loop: function loop(time) {
        if(this.changingPhase) {
            return;
        }
        if(!this.lastUpdate) {
            this.lastUpdate = time;
        }
        this.phaseInstances[this.phaseName].update(time);
        this.lastUpdate = time;
        this.phaseInstances[this.phaseName].draw(time);

        requestAnimationFrame(this.loop.bind(this));
    }
};


module.exports = Game;
