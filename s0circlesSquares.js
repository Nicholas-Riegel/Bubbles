const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.fillStyle = "white";
// ctx.fillRect(10, 10, 50, 50);

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // ctx.fillStyle = "white";
    // ctx.fillRect(10, 10, 50, 50);
});

// Filled Circle
// x, y, radius, startAngle, endAngle, drawCounterClockwise
// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.arc(100, 100, 50, 0, Math.PI * 2, false);
// ctx.fill();

// Outlined Circle
// x, y, radius, startAngle, endAngle, drawCounterClockwise
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2, false);
ctx.stroke();