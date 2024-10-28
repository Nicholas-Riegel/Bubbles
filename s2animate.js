const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: undefined, y: undefined };

function drawCircle() {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2, false);
    ctx.fill();
}

canvas.addEventListener("mousemove", (e) => {
    mouse = { x: e.x, y: e.y };
    // drawCircle();
});

function animate() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    requestAnimationFrame(animate);
}

animate();