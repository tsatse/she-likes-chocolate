import {
    loadImages,
    deepMerge,
} from './utils';
import keys from './keys';
import Character from './character';
import Dialogue from './interactions/dialogue';
import Wander from './interactions/wander';
import PressAnyKey from './interactions/press-any-key';
import DefaultInteration from './interactions/default';

import PointNClick from './renderers/point-n-click';
import title from './renderers/title';

const interactions = {
    Dialogue,
    Wander,
    PressAnyKey,
    default: DefaultInteration,
};

const renderers = {
    PointNClick,
    title,
    default: function() {}
};

class Game {
    constructor(canvas, gameStructure) {
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

        window.addEventListener('resize', function(event) {
                this.gameCanvas.width = window.innerWidth;
                this.gameCanvas.height = window.innerHeight;
            }.bind(this));
    }

    start() {
        return this.gotoPhase(this.gameStructure.entry)
            .then(function() {
                requestAnimationFrame(this.loop.bind(this));
            }.bind(this))
            .catch(function(error) {
                console.error(error);
            });
    }

    getCurrentPhase() {
        return this.phaseInstances[this.phaseName];
    }

    gotoSink(sinkName) {
        return this.gotoPhase(this.gameStructure.plan[this.phaseName][sinkName]);
    }

    unregisterEventHandlers(phase) {
        const eventHandlers = phase.eventHandlers;

        if(!eventHandlers) {
            return;
        }
        for(eventName in eventHandlers) {
            delete this.registeredEventHandlers[eventName];
        }
    }

    registerEventHandlers(phase) {
        const eventHandlers = phase.eventHandlers;

        if(!eventHandlers) {
            return;
        }
        for(eventName in eventHandlers) {
            this.registeredEventHandlers[eventName] = eventHandlers[eventName].bind(phase);
        }
    }

    loadImages(images) {
        return new Promise(function(resolve, reject) {
            if(images) {
                loadImages(images, function(imgs) {
                    resolve(imgs);
                });
            }
        });
    }

    getHierarchy(phaseName, children) {
        if(!children) {
            children = [];
        }
        const currentHierarchy = [phaseName].concat(children);
        if(this.gameStructure.phases[phaseName].basedOn) {
            return this.getHierarchy(this.gameStructure.phases[phaseName].basedOn, currentHierarchy);
        }
        else {
            return currentHierarchy;
        }
    }

    getFullDescription(phaseName) {
        var hierarchy = this.getHierarchy(phaseName);
        return hierarchy.reduce(function(phaseSoFar, currentPhaseName) {
            var currentDescription = this.gameStructure.phases[currentPhaseName];
            for(var propertyName in currentDescription) {
                if(
                    phaseSoFar[propertyName] &&
                    !(currentDescription.noInherit && currentDescription.noInherit[propertyName]) &&
                    typeof(currentDescription[propertyName]) !== 'string'
                ) {
                    phaseSoFar[propertyName] = deepMerge(phaseSoFar[propertyName], currentDescription[propertyName]);
                }
                else {
                    phaseSoFar[propertyName] = currentDescription[propertyName];
                }
            }
            return phaseSoFar;
        }.bind(this), {});
    }

    filterImagesToLoad(phase) {
        const imagesToLoad = {};
        let imageName;

        if(phase.rendering.planes) {
            phase.rendering.planes.forEach(function(plane){
                if(!this.images[plane.image]) {
                    imagesToLoad[plane.image] = this.gameStructure.paths[plane.image];
                }
            }.bind(this));
        }

        if(phase.rendering.image) {
            if(!this.images[phase.rendering.image]) {
                imagesToLoad[phase.rendering.image] = this.gameStructure.paths[phase.rendering.image];
            }
        }

        for(const characterName in phase.characters) {
            for(var stateName in this.gameStructure.sprites[phase.characters[characterName].sprites]) {
                imageName = this.gameStructure.sprites[phase.characters[characterName].sprites][stateName];
                if(!this.images[imageName]) {
                    imagesToLoad[imageName] = this.gameStructure.paths[imageName];
                }
            }
        }

        return imagesToLoad;
    }

    mergeImages(images) {
        for(const imageName in images) {
            this.images[imageName] = images[imageName];
        }
    }

    updateWithDefaults(phaseDescription) {
        if(!phaseDescription.gameplayType) {
            phaseDescription.gameplayType = 'default';
        }
        if(!phaseDescription.rendering) {
            phaseDescription.rendering = {
                type: "default"
            };
        }
    }

    getPhaseData(phaseName) {
        if(!this.gameStructure.phases[this.phaseName]) {
            throw(new Error('No phase with name ' + phaseName));
        }
        var phaseDescription = this.getFullDescription(this.phaseName);
        this.updateWithDefaults(phaseDescription);
        return phaseDescription;
    }

    gotoPhase(phaseName) {
        let phaseDescription;
        this.changingPhase = true;

        return Promise.resolve()
            .then(function() {
                if(this.phaseInstances[this.phaseName]) {
                    this.unregisterEventHandlers(this.phaseInstances[this.phaseName]);
                }
                this.phaseName = phaseName;
                phaseDescription = this.getPhaseData(phaseName);
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
                    if(!interactions[phaseDescription.gameplayType]) {
                        throw(new Error('no gameplay called ' + phaseDescription.gameplayType));
                    }
                    this.phaseInstances[phaseName] = new interactions[phaseDescription.gameplayType](this);
                    this.phaseInstances[phaseName].host = this;
                    this.phaseInstances[phaseName].name = phaseName;
                    for(const propertyName in phaseDescription) {
                        if(['images', 'gameplayType'].indexOf(propertyName) === -1) {
                            this.phaseInstances[phaseName][propertyName] = phaseDescription[propertyName];
                        }
                    }
                }
                if(phaseDescription.characters) {
                    for(const characterName in phaseDescription.characters) {
                        if(!this.characters[characterName]) {
                            let characterDescription = phaseDescription.characters[characterName];
                            this.characters[characterName] = new Character(characterDescription);
                        }
                        else {
                            for(const propertyName in phaseDescription.characters[characterName]) {
                                this.characters[characterName][propertyName] = phaseDescription.characters[characterName][propertyName];
                            }
                        }
                    }
                    for(const characterName in this.characters) {
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
    }

    renderDebug() {
        this.ctx.fillStyle = 'white';
        this.ctx.font = 'normal 14pt helvetica';
        this.ctx.fillText(this.phaseName, 10, 24);
    }

    loop(time) {
        requestAnimationFrame(this.loop.bind(this));
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
    }
}


module.exports = Game;
