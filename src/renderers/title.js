export default function render(time, host) {
    const currentPhase = host.phaseInstances[host.phaseName];
    const ctx = host.ctx;
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const renderingData = host.gameStructure.phases[host.phaseName].rendering;

    ctx.fillStyle = renderingData.backgroundColor || 'black';
    ctx.fillRect(0, 0, width, height);
    if(renderingData.image) {
        const image = host.images[renderingData.image];
        ctx.drawImage(image, 0, 0, image.width, image.height);
    }

    if(renderingData.text) {
        ctx.font = 'normal 44pt helvetica' || renderingData.font;
        const metrics = ctx.measureText(renderingData.text);
        const x = (ctx.canvas.width - metrics.width) / 2;
        const y = (ctx.canvas.height / 2);


        ctx.fillStyle = renderingData.color || 'white';
        ctx.fillText(renderingData.text, x, y);
    }
}
