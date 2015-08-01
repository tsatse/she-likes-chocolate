function render(time, host) {
    var currentPhase = host.phaseInstances[host.phaseName];
    var ctx = host.ctx;
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var renderingData = host.gameStructure.phases[host.phaseName].rendering;

    ctx.fillStyle = renderingData.backgroundColor || 'black';
    ctx.fillRect(0, 0, width, height);
    if(renderingData.image) {
        var image = host.images[renderingData.image];
        ctx.drawImage(image, 0, 0, image.width, image.height);
    }
    ctx.font = 'normal 44pt helvetica' || renderingData.font;
    var metrics = ctx.measureText(renderingData.text);
    var x = (ctx.canvas.width - metrics.width) / 2;
    var y = (ctx.canvas.height / 2);


    ctx.fillStyle = renderingData.color || 'white';
    ctx.fillText(renderingData.text, x, y);
}


module.exports = render;
