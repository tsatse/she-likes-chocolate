let lastFrameUpdate = null;


function drawPlanes(ctx, mapOffset, images, mapWidth, renderCoords, planes) {
    planes.forEach(plane => {
        const image = images[plane.image];
        if(!plane.z) {
            ctx.drawImage(
                image,
                0, 0,
                image.width, image.height,
                renderCoords.x, renderCoords.y,
                image.width, image.height
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
    const x = pos1.x - pos2.x;
    const y = pos1.y - pos2.y;
    return Math.sqrt(x * x + y * y);
}

function drawCharacters(host, currentMapOffset, renderCoords) {
    const characters = Object.keys(host.characters)
        .map(characterName => host.characters[characterName])
        .sort((a, b) => a.y - b.y);

    characters.forEach(character => {
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
    characters.forEach(character => {
        if(character !== host.characters.me && getDistance(character, host.characters.me) < 100) {
            dispayActionHint = true;
        }
    });
    if(dispayActionHint && host.debug) {
        drawActionHint(host.ctx, host.characters.me, renderCoords);
    }
}

function drawActionHint(ctx, me, renderCoords) {
    ctx.fillStyle = 'black';
    ctx.globalAlpha = 0.5;
    ctx.fillRect(
        me.x + me.width / 2 - 25,
        me.y - me.height + 25 + renderCoords.y,
        50, 50);
    ctx.globalAlpha = 1;
}

function drawCharacter(ctx, character, mapOffset, images, renderCoords, sprites, phase, characters) {
    const image = images[sprites[character.action]];
    const xOffsetInSource = character.phase * character.width;

    const scale = phase.getZ && phase.getZ(character.x, character.y, phase.walkSurface);
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

    const scale = phase.getZ(character.x, character.y, phase.walkSurface);

    ctx.textAlign = 'left';
    ctx.font = 'normal 14pt helvetica';
    const metrics = ctx.measureText(currentLine.text);
    const position = {};
    position.x = character.x - mapOffset.x - metrics.width / 2 + character.width / 2;
    position.y = character.y - mapOffset.y - 40 - character.height * scale;

    ctx.fillStyle = 'white';
    if(character.dialogColor) {
        ctx.fillStyle = character.dialogColor;
    }
    ctx.strokeStyle = 'black';
    const margin = 4;
    const left = Math.max(margin, position.x + renderCoords.x);
    const top = Math.max(margin, position.y + renderCoords.y);
    ctx.strokeRect(
        left,
        top,
        metrics.width + 10, 30
        );
    ctx.globalAlpha = 0.85;
    ctx.fillRect(
        left,
        top,
        metrics.width + 10,
        30
        );
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'black';
    ctx.fillText(
        currentLine.text,
        left + 5,
        top + 5
        );
}

function drawText(ctx, text, x, y, color) {
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillText(text, x + 1, y + 1);
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillText(text, x - 1, y - 1);
    ctx.fillStyle = color || 'black';
    ctx.fillText(text, x, y);
}

function drawDebug(ctx, phase, renderCoords, characters, mapOffset) {
    let x;
    let y;
    const walkSurface = phase.walkSurface;

    if (phase.sinks) {
        Object.entries(phase.sinks)
            .forEach(([sinkName, sink]) => {
                sink = phase.sinks[sinkName];
                x = sink.x + renderCoords.x - mapOffset.x;
                y = sink.y + renderCoords.y - mapOffset.y;
                const sinkText = `[${sink.x} ${sink.y}]`;
                ctx.textAlign = 'center';
                ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
                ctx.fillRect(x, y, sink.width, sink.height);
                drawText(ctx, `[${sink.x} ${sink.y}]`, x, y, 'rgb(128,0,0)');
                drawText(
                    ctx,
                    `[${sink.x + sink.width} ${sink.y + sink.height}]`,
                    x + sink.width,
                    y + sink.height,
                    'rgb(128,0,0)'
                );
                ctx.textAlign = 'left';
            });
    }

    Object.entries(characters)
        .forEach(([characterName, character]) => {
            var scale = (phase.getZ && phase.getZ(character.x, character.y, phase.walkSurface)) || 1;
            ctx.strokeStyle = 'rgb(0, 255, 0)';
            ctx.strokeRect(
                renderCoords.x + character.x - mapOffset.x,
                renderCoords.y + character.y - mapOffset.y - character.height * scale,
                character.width, character.height * scale
                );
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            drawText(
                ctx,
                `[${character.x}, ${character.y}]`,
                character.x + renderCoords.x - mapOffset.x,
                character.y + renderCoords.y - mapOffset.y - character.height * scale,
                'rgb(0,128,0)'
            );
            drawText(
                ctx,
                `[${character.x + character.width}, ${character.y + character.height}]`,
                character.x + character.width + renderCoords.x - mapOffset.x,
                character.y + renderCoords.y - mapOffset.y * scale + 16,
                'rgb(0,128,0)'
            );
            ctx.textAlign = 'left';
        });
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 0, 0.3)';
    if (walkSurface) {
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
    const result = { x: 0, y: 0 };
    if (x > (window.innerWidth / 2)) {
        result.x = Math.min(
            x - window.innerWidth / 2,
            mapWidth - window.innerWidth
        );
    }
    
    return result;
}

function isVisible(character, currentMapOffset) {
    if (
        (character.x + character.width - currentMapOffset.x) > 0 &&
        (character.x - currentMapOffset.x) < window.innerWidth
    ) {
        return true;
    }
    return false;
}

function updateFrames(time, images, characters, sprites) {
    if (!lastFrameUpdate) {
        lastFrameUpdate = time;
    }
    if ((time - lastFrameUpdate) < (1000 / 12)) {
        return;
    }
    Object.values(characters)
        .forEach(character => {
            character.phase = (character.phase + 1) % (images[sprites[character.sprites][character.action]].width / character.width);
        });
    lastFrameUpdate = time;
}

function resetSettings(ctx) {
    ctx.textBaseline = 'top';
}

export default function render(time, host) {
    resetSettings(host.ctx);
    updateFrames(time, host.images, host.characters, host.gameStructure.sprites);
    if ((time - host.lastDraw) < 40) {
        return;
    }
    const currentPhase = host.getCurrentPhase();
    const renderCoords = {
        width: currentPhase.renderWidth || window.innerWidth,
        height: currentPhase.renderHeight || window.innerHeight
    };

    renderCoords.x = (window.innerWidth - renderCoords.width) / 2;
    renderCoords.y = (window.innerHeight - renderCoords.height) / 2;

    const currentMapOffset = getMapOffset(
        host.characters.me.x,
        host.characters.me.y,
        currentPhase.mapWidth
        );
    const planes = currentPhase.rendering.planes.sort((a, b) => (a.z - b.z));

    const backgroundPlanes = planes.filter(plane => plane.z <= 1);
    const foregroundPlanes = planes.filter(plane => plane.z > 1);
    
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
