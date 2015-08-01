var RSVP = require('rsvp');

var Utils = require('utils');
var keys = require('./keys');
var Character = require('./character');


var gameplays = {
    Dialogue: require('./gameplay/dialogue'),
    Wander: require('./gameplay/wander'),
    default: function() {}
};

var renderers = {
    PointNClick: require('./renderers/point-n-click'),
    default: function() {}
};


function Game(canvas, gameStructure) {
    this.phaseName = null;
    this.characters = {};
    this.gameStructure = gameStructure;
    this.phaseInstances = {};
    this.registeredEventHandlers = {};
    this.lastUpdate = null;
    this.renderer = null;
    this.images = {};
    this.debug = this.gameStructure.debug;
    this.keys = keys;
    this.gameCanvas = canvas;
    this.gameCanvas.width = window.innerWidth;
    this.gameCanvas.height = window.innerHeight;
    this.ctx = this.gameCanvas.getContext('2d');
    document.addEventListener('keydown', function(event) {
            //event.preventDefault();
            if(event.keyCode === 'I'.charCodeAt()) {
                this.debug = !this.debug;
            }
            this.keys[event.keyCode] = true;
            if(event.shiftKey) {
                this.keys.shift = true;
            }
            if(this.registeredEventHandlers.keydown) {
                this.registeredEventHandlers.keydown(event);
            }
        }.bind(this), false);

    document.addEventListener('keyup', function(event) {
            event.preventDefault();
            this.keys[event.keyCode] = false;
            if(!event.shiftKey) {
                this.keys.shift = false;
            }
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

    getCurrentPhase: function getCurrentPhase() {
        return this.phaseInstances[this.phaseName];
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
            var currentDescription = this.gameStructure.phases[currentPhaseName];
            for(var propertyName in currentDescription) {
                if(phaseSoFar[propertyName] && !(currentDescription.noInherit && currentDescription.noInherit[propertyName])) {
                    phaseSoFar[propertyName] = Utils.deepMerge(phaseSoFar[propertyName], currentDescription[propertyName]);
                }
                else {
                    phaseSoFar[propertyName] = currentDescription[propertyName];
                }
            }
            return phaseSoFar;
        }.bind(this), {});
    },

    filterImagesToLoad: function filterImagesToLoad(phase) {
        var imagesToLoad = {};
        var imageName;
        var characterName;

        phase.rendering.planes.forEach(function(plane){
            if(!this.images[plane.image]) {
                imagesToLoad[plane.image] = this.gameStructure.paths[plane.image];
            }
        }.bind(this));

        for(characterName in phase.characters) {
            for(var stateName in this.gameStructure.sprites[phase.characters[characterName].sprites]) {
                imageName = this.gameStructure.sprites[phase.characters[characterName].sprites][stateName];
                if(!this.images[imageName]) {
                    imagesToLoad[imageName] =  this.gameStructure.paths[imageName];
                }
            }
        }

        return imagesToLoad;
    },

    mergeImages: function mergeImages(images) {
        var imageName;

        for(imageName in images) {
            this.images[imageName] = images[imageName];
        }
    },

    updateWithDefaults: function updateWithDefaults(phaseDescription) {
        if(!phaseDescription.gameplayType) {
            phaseDescription.gameplayType = 'default';
        }
        if(!phaseDescription.rendering) {
            phaseDescription.rendering = {
                type: "default"
            };
        }
    },

    gotoPhase: function gotoPhase(phaseName) {
        var phaseDescription;
        var propertyName;
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
                this.updateWithDefaults(phaseDescription);
                var imagesToLoad = this.filterImagesToLoad(phaseDescription);
                if(Object.keys(imagesToLoad).length) {
                    return this.loadImages(imagesToLoad);
                }
            }.bind(this))
            .then(function(images) {
                if(images) {
                    this.mergeImages(images);
                }         
                if(!this.phaseInstances[phaseName]) {
                    this.phaseInstances[phaseName] = new gameplays[phaseDescription.gameplayType](this);
                    this.phaseInstances[phaseName].host = this;
                    this.phaseInstances[phaseName].name = phaseName;
                    for(propertyName in phaseDescription) {
                        if(['images', 'gameplayType'].indexOf(propertyName) === -1) {
                            this.phaseInstances[phaseName][propertyName] = phaseDescription[propertyName];
                        }
                    }
                }
                if(phaseDescription.characters) {
                    var characterDescription;
                    var characterName;
                    for(characterName in phaseDescription.characters) {
                        if(!this.characters[characterName]) {
                            characterDescription = phaseDescription.characters[characterName];
                            this.characters[characterName] = new Character(characterDescription);
                        }
                        else {
                            for(propertyName in phaseDescription.characters[characterName]) {
                                this.characters[characterName][propertyName] = phaseDescription.characters[characterName][propertyName];
                            }
                        }
                    }
                    for(characterName in this.characters) {
                        if(!phaseDescription.characters[characterName]) {
                            delete this.characters[characterName];
                        }
                    }
                }

                if(this.phaseInstances[phaseName].init) {
                    this.phaseInstances[phaseName].init(phaseName);
                }
                this.registerEventHandlers(this.phaseInstances[this.phaseName]);
                this.renderer = renderers[this.phaseInstances[this.phaseName].rendering.type];
                this.changingPhase = false;
            }.bind(this))
            .catch(function(error) {
                console.error(error);
            });
    },

    renderDebug: function renderDebug() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(this.phaseName, 10, 10);
    },

    loop: function loop(time) {
        if(!this.changingPhase && this.renderer) {
            if(!this.lastUpdate) {
                this.lastUpdate = time;
            }
            if(this.phaseInstances[this.phaseName].update(time)) {
                this.lastUpdate = time;
            }

            if(!this.lastDraw) {
                this.lastDraw = time;
            }
            if(this.renderer(time, this)) {
                this.lastDraw = time;
            }
            if(this.debug) {
                this.renderDebug();
            }
        }

        requestAnimationFrame(this.loop.bind(this));
    }
};


module.exports = Game;
