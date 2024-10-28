const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];

let mouse = { 
    x: undefined, 
    y: undefined 
};

canvas.addEventListener("mousemove", (e) => {
    mouse.x = e.x; 
    mouse.y = e.y;
});

class Particle {
    constructor(){
        // this.x = mouse.x;
        // this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height; 
        this.size = Math.random() * 20;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        // if (this.size > 0.2) this.size -= 0.1;
    }
    draw(){
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
    }
}

init();

function handleParticles() {
    particlesArray.forEach((particle, i) => {
        particle.update();
        particle.draw();
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

animate();