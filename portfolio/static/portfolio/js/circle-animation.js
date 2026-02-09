// circle-animation.js
const canvas = document.getElementById('circleCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to full screen
function resizeCanvas() {
    const parent = canvas.parentElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Create circles
const circles = [];
for (let i = 0; i < 50; i++) {
    circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 20 + 5,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: `rgba(59,130,246,${Math.random()})`
    });
}

// Animate circles
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();

        c.x += c.dx;
        c.y += c.dy;

        // Bounce off edges
        if (c.x + c.r > canvas.width || c.x - c.r < 0) c.dx *= -1;
        if (c.y + c.r > canvas.height || c.y - c.r < 0) c.dy *= -1;
    });
    requestAnimationFrame(animate);
}

animate();

setTimeout(() => {
    card.classList.add("idle")
}, 1200)
