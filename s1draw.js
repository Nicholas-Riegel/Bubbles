const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circles = []; // Array to store circles

// Function to draw a circle
function drawCircle(x, y) {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2, false);
    ctx.fill();
}

// Event listener to handle clicks and mouse movements
canvas.addEventListener("click", (e) => {
    const mouse = { x: e.x, y: e.y };
    circles.push(mouse); // Store the circle position
    drawCircle(mouse.x, mouse.y);
});

canvas.addEventListener("mousemove", (e) => {
    const mouse = { x: e.x, y: e.y };
    circles.push(mouse); // Store the circle position
    drawCircle(mouse.x, mouse.y);
});

// Redraw all circles from the array
function redrawCircles() {
    circles.forEach(circle => {
        drawCircle(circle.x, circle.y);
    });
}

// Handle window resize
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    redrawCircles(); // Redraw circles after resizing
});
