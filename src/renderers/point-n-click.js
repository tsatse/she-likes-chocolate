var lastFrameUpdate = null;


function drawPlanes(ctx, mapOffset, images, mapWidth, renderCoords, planes) {
    planes.forEach(function(plane) {
        var image = images[plane.image];
        if(!plane.z) {
            ctx.drawImage(
                image,
                0, 0,
                image.width, image.height,
                renderCoords.x, renderCoords.y,
                renderCoords.width, image.height
                );
        }
        else {
            ctx.drawImage(
                image,
                Math.min(mapOffset.x, mapWidth - window.innerWidth), mapOffset.y,
                Math.min(window.innerWidth, image.width), image.height,
                renderCoords.x, renderCoords.y,
                Math.min(renderCoords.width, image.width), renderCoords.height
            );
        }
    });
}

function getDistance(pos1, pos2) {
    var x = pos1.x - pos2.x;
    var y = pos1.y - pos2.y;
    return Math.sqrt(x * x + y * y);
}

function drawCharacters(host, currentMapOffset, renderCoords) {
    var characterList = Object.keys(host.characters)
        .map(function(characterName) {
            return host.characters[characterName];
        }.bind(this))
        .sort(function(a, b) {
            return a.y - b.y;
        });

    characterList.forEach(function(character) {
        if(isVisible(character, currentMapOffset)) {
            drawCharacter(
                host.ctx,
                character,
                currentMapOffset,
                host.images,
                renderCoords,
                host.gameStructure.sprites[character.sprites],
                host.getCurrentPhase(),
                host.characters
            );
        }
    });

    var dispayActionHint = false;
    characterList.forEach(function(character) {
        if(character !== host.characters.me && getDistance(character, host.characters.me) < 100) {
            dispayActionHint = true;
        }
    }.bind(this));
    if(dispayActionHint) {
        drawActionHint(host.ctx, host.characters.me, renderCoords);
    }
}

function drawActionHint(ctx, me, renderCoords) {
    ctx.fillStyle = 'black';
    ctx.globalAlpha = 0.5;
    ctx.fillRect(me.x + me.width / 2 - 25, me.y - me.height + 25 + renderCoords.y, 50, 50);
    // ctx.fillRect(me.x + me.width / 2 - 25, me.y - me.height + 25, 50, 50);
    ctx.globalAlpha = 1;
}

function drawCharacter(ctx, character, mapOffset, images, renderCoords, sprites, phase, characters) {
    var image = images[sprites[character.action]];
    var xOffsetInSource = character.phase * character.width;

    var scale = phase.getZ && phase.getZ(character.x, character.y, phase.walkSurface);
    ctx.drawImage(
        image,
        xOffsetInSource,
        0,
        character.width,
        character.height,
        character.x - mapOffset.x + renderCoords.x - (character.width * scale - character.width) / 2,
        character.y - mapOffset.y + renderCoords.y - character.height * scale,
        character.width * scale,
        character.height * scale
    );
    if(character.talkActivation) {
        character.talkActivation -= 1;
        drawDialogue(ctx, character.currentLine, renderCoords, characters[character.currentLine.who], mapOffset, phase);
    }
}

function drawDialogue(ctx, currentLine, renderCoords, character, mapOffset, phase) {
    if(currentLine === null) {
        return;
    }

    var scale = phase.getZ(character.x, character.y, phase.walkSurface);

    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.font = 'normal 14pt helvetica';
    var metrics = ctx.measureText(currentLine.text);
    var position = {};
    position.x = character.x - mapOffset.x - metrics.width / 2 + character.width / 2;
    position.y = character.y - mapOffset.y - 40 - character.height * scale;

    ctx.fillStyle = 'white';
    if(character.dialogColor) {
        ctx.fillStyle = character.dialogColor;
    }
    ctx.strokeStyle = 'black';
    ctx.strokeRect(
        position.x + renderCoords.x,
        position.y + renderCoords.y,
        metrics.width + 10, 30
        );
    ctx.globalAlpha = 0.85;
    ctx.fillRect(
        position.x + renderCoords.x,
        position.y + renderCoords.y,
        metrics.width + 10,
        30
        );
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'black';
    ctx.fillText(
        currentLine.text,
        position.x + 5 + renderCoords.x,
        position.y + 5 + renderCoords.y
        );
}

function drawDebug(ctx, phase, renderCoords, characters, mapOffset) {
    var sink;
    var character;
    var x;
    var y;
    var walkSurface = phase.walkSurface;

    for(var sinkName in phase.sinks) {
        sink = phase.sinks[sinkName];
        x = sink.x + renderCoords.x - mapOffset.x;
        y = sink.y + renderCoords.y - mapOffset.y;
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.fillRect(x, y, sink.width, sink.height);
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillText(sinkName, x + 1, y + 1);
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillText(sinkName, x - 1, y - 1);
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillText(sinkName, x, y);
    }

    for(var characterName in characters) {
        character = characters[characterName];
        var scale = (phase.getZ && phase.getZ(character.x, character.y, phase.walkSurface)) || 1;
        ctx.strokeStyle = 'rgb(0, 255, 0)';
        ctx.strokeRect(
            renderCoords.x + character.x - mapOffset.x,
            renderCoords.y + character.y - mapOffset.y - character.height * scale,
            character.width, character.height * scale
            );
        ctx.fillStyle = 'black';
        ctx.fillText(
            '[' + (character.x) + ', ' + (character.y + character.height) + ']',
            character.x + renderCoords.x - mapOffset.x,
            character.y + renderCoords.y - mapOffset.y - character.height * scale
            );
    }
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 0, 0.3)';
    if(walkSurface) {
        ctx.moveTo(
            renderCoords.x + walkSurface[0].x - mapOffset.x,
            renderCoords.y + walkSurface[0].y - mapOffset.y
            );

        walkSurface.slice(1).forEach(function(point) {
            ctx.lineTo(
                renderCoords.x + point.x - mapOffset.x,
                renderCoords.y + point.y - mapOffset.y
                );
        });
        ctx.fill();
    }
}

function getMapOffset(x, y, mapWidth) {
    var result = {x:0, y:0};
    if(x > (window.innerWidth / 2)) {
        result.x = Math.min(x - window.innerWidth / 2, mapWidth - window.innerWidth);
    }
    
    return result;
}

function isVisible(character, currentMapOffset) {
    if(
        (character.x + character.width - currentMapOffset.x) > 0 &&
        (character.x - currentMapOffset.x) < window.innerWidth
    ) {
        return true;
    }
    return false;
}

function updateFrames(time, images, characters, sprites) {
    if(!lastFrameUpdate) {
        lastFrameUpdate = time;
    }
    if((time - lastFrameUpdate) < (1000 / 12)) {
        return;
    }
    Object.keys(characters)
        .map(function(characterName) {
            return characters[characterName];
        }.bind(this))
        .forEach(function(character) {
            character.phase = (character.phase + 1) % (images[sprites[character.sprites][character.action]].width / character.width);
        }.bind(this));
    lastFrameUpdate = time;
}

function render(time, host) {
    updateFrames(time, host.images, host.characters, host.gameStructure.sprites);
    if((time - host.lastDraw) < 40) {
        return;
    }
    var currentPhase = host.getCurrentPhase();
    var renderCoords = {
        width: currentPhase.renderWidth || window.innerWidth,
        height: currentPhase.renderHeight || window.innerHeight
    };

    renderCoords.x = (window.innerWidth - renderCoords.width) / 2;
    renderCoords.y = (window.innerHeight - renderCoords.height) / 2;

    var currentMapOffset = getMapOffset(
        host.characters.me.x,
        host.characters.me.y,
        currentPhase.mapWidth
        );
    var planes = currentPhase.rendering.planes.sort(function(a, b) {
        return a.z - b.z;
    });

    var backgroundPlanes = planes.filter(function(plane) {return plane.z <= 1;});
    var foregroundPlanes = planes.filter(function(plane) {return plane.z > 1;});
    
    host.ctx.clearRect(0, 0, host.ctx.canvas.width, host.ctx.canvas.height);
    
    drawPlanes(
        host.ctx,
        currentMapOffset,
        host.images,
        currentPhase.mapWidth,
        renderCoords,
        backgroundPlanes
        );

    drawCharacters(
        host,
        currentMapOffset,
        renderCoords
        );

    drawPlanes(
        host.ctx,
        currentMapOffset,
        host.images,
        currentPhase.mapWidth,
        renderCoords,
        foregroundPlanes
        );

    if(host.debug) {
        drawDebug(host.ctx, currentPhase, renderCoords, host.characters, currentMapOffset);
    }
}


module.exports = render;
