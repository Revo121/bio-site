const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const lines = [];

for(let i = 0; i < 40; i++){
    lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: 100 + Math.random() * 300,
        speed: 1 + Math.random() * 2,
        angle: -Math.PI/4,
        color: `hsla(${Math.random()*360}, 100%, 50%, 0.6)`,
    });
}

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + Math.cos(line.angle)*line.length, line.y + Math.sin(line.angle)*line.length);
        ctx.strokeStyle = line.color;
        ctx.lineWidth = 2;
        ctx.shadowColor = line.color;
        ctx.shadowBlur = 10;
        ctx.stroke();

        line.x += line.speed;
        line.y += line.speed;

        if(line.x - line.length > canvas.width || line.y - line.length > canvas.height){
            line.x = -line.length;
            line.y = Math.random() * canvas.height/2;
        }
    });
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
