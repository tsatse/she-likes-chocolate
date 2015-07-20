var lastFrameUpdate = null;

function drawCharacter(ctx, character, mapOffset, images) {
    var image = images[character.sprites[character.action]];
    var xOffsetInSource = character.phase * character.width;

    ctx.drawImage(
        image,
        xOffsetInSource, 0,
        character.width, character.height,
        character.x - mapOffset.x, character.y - mapOffset.y,
        character.width, character.height
        );
}

function getMapOffset(x, y, mapWidth) {
    var result = {x:0, y:0};
    if(x > (window.innerWidth / 2)) {
        result.x = Math.min(x - window.innerWidth / 2, mapWidth - window.innerWidth);
    }
    
    return result;
}

function drawMap(ctx, mapOffset, images, mapWidth) {
    ctx.drawImage(
        images.sky,
        0, 0,
        images.sky.width, images.sky.height,
        0, 0,
        window.innerWidth, images.sky.height
        );
    ctx.drawImage(
        images.houses,
        Math.min(mapOffset.x, mapWidth - window.innerWidth), mapOffset.y,
        Math.min(window.innerWidth, images.houses.width), images.houses.height,
        0, 0,
        Math.min(window.innerWidth, images.houses.width), images.houses.height
        );
}

function drawForeground(ctx, mapOffset, foregroundImage) {
    ctx.drawImage(
        foregroundImage,
        ((mapOffset.x * 1.5) % foregroundImage.width) | 0, mapOffset.y,
        Math.min(ctx.canvas.width, foregroundImage.width), foregroundImage.height,
        0, 0,
        Math.min(ctx.canvas.width, foregroundImage.width), foregroundImage.height
        );
}

function isVisible(character, currentMapOffset) {
    if(
        (character.x - currentMapOffset.x) > 0 &&
        (character.x - currentMapOffset.x) < window.innerWidth
    ) {
        return true;
    }
    return false;
}

function drawDialogue(ctx, currentLine, defaultProperties) {
    if(currentLine === null) {
        return;
    }
    var position = defaultProperties[currentLine.who];
    if(currentLine.position) {
        position = currentLine.position;
    }

    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.font = 'normal 14pt helvetica';
    var metrics = ctx.measureText(currentLine.text);
    ctx.fillStyle = 'white';
    if(defaultProperties[currentLine.who].color) {
        ctx.fillStyle = defaultProperties[currentLine.who].color;
    }
    ctx.strokeStyle = 'black';
    ctx.strokeRect(position.x, position.y, metrics.width + 10, 30);
    ctx.globalAlpha = 0.85;
    ctx.fillRect(position.x, position.y, metrics.width + 10, 30);
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'black';
    ctx.fillText(currentLine.text, position.x + 5, position.y + 5);
}

function drawCharacters(host, currentMapOffset) {
    var characterList = Object.keys(host.characters);
    characterList.sort(function(a, b) {
        return host.characters[a].y - host.characters[b].y;
    }.bind(this));
    for(var i = 0 ; i < characterList.length ; i++) {
        var character = host.characters[characterList[i]];
        if(isVisible(character, currentMapOffset)) {
            drawCharacter(host.ctx, character, currentMapOffset, host.images);
        }
    }
}

function updateFrames(time, images, characters) {
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
            character.phase = (character.phase + 1) % (images[character.sprites[character.action]].width / character.width);
        }.bind(this));
    lastFrameUpdate = time;
}



function render(time, host) {
    updateFrames(time, host.images, host.characters);
    if((time - host.lastDraw) < 40) {
        return;
    }
    var currentPhase = host.getCurrentPhase();
    var currentMapOffset = getMapOffset(
        host.characters.me.x,
        host.characters.me.y,
        currentPhase.mapWidth
        );
    drawMap(
        host.ctx,
        currentMapOffset,
        host.images,
        currentPhase.mapWidth
        );
    drawCharacters(host, currentMapOffset);
    drawForeground(host.ctx, currentMapOffset, host.images.foreground);
    if('currentLine' in currentPhase && currentPhase.currentLine !== null) {
        drawDialogue(
            host.ctx,
            currentPhase.lines[currentPhase.currentLine],
            currentPhase.defaultProperties
            );
    }
}


module.exports = render;