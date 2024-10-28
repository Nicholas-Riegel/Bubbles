const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];

let mouse = { 
    x: undefined, 
    y: undefined 
};

// Update mouse position and add particle
function addParticles(e) {
    const touch = e.touches ? e.touches[0] : e;
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
    particlesArray.push(new Particle());
}

// Handle mouse movement
canvas.addEventListener("mousemove", (e) => addParticles(e));

// Handle touch movement
canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();  // Prevent scrolling
    addParticles(e);
});

// Handle mouse click
canvas.addEventListener("click", (e) => {
    mouse.x = e.x; 
    mouse.y = e.y;
    for (let i = 0; i < 40; i++){
        particlesArray.push(new Particle());
    }
});

// Handle touch start (similar to click)
canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
    for (let i = 0; i < 40; i++){
        particlesArray.push(new Particle());
    }
});
class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 12;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.hue = Math.random() * 360; // Random color hue
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.01;
        this.hue += 1; // Gradually change color
    }
    draw() {
        ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fill();
    }
}

// function init() {
//     for (let i = 0; i < 100; i++) {
//         particlesArray.push(new Particle());
//     }
// }

// init();

function handleParticles() {
    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
        for(let j = i; j < particlesArray.length; j++){
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `hsl(${particlesArray[i].hue}, 100%, 50%)`;
                ctx.lineWidth = .5;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    // ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

animate();