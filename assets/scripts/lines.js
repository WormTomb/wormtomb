const topLinePadding = 0.95;
const bottomLinePadding = 0.9;

const draw = (canvas) => {
    const ctx = canvas.getContext("2d");
    
    if (!ctx)
        return;
    
    ctx.beginPath();

    const width = canvas.width;
    const topPadding = topLinePadding * width;
    const bottomPadding = bottomLinePadding * width;
    
    ctx.lineWidth = 10;
    ctx.moveTo(topPadding,0);
    ctx.lineTo(width - topPadding,0);
    ctx.stroke();

    ctx.lineWidth = 4;
    ctx.moveTo(bottomPadding,13);
    ctx.lineTo(width - bottomPadding,13);
    ctx.stroke();
}

const setWidth = () => {
    canvas.width = window.innerWidth;
}

const canvas = document.getElementById('Lines');

setWidth();
draw(canvas);

window.addEventListener('resize', () => {
   setWidth(); 
   draw(canvas);
});
