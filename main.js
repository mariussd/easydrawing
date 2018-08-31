let blueButton = document.getElementById("blue");
let greenButton = document.getElementById("green");
let redButton = document.getElementById("red");
let blackButton = document.getElementById("black");

let drawingColor = "";
let circleRadius = 10;

let mousedown = false;
let mouseX = 0;
let mouseY = 0;
let eventTimer = 0;

let timeoutId = 0;

let canvas = document.getElementById("mainCanvas");
let canvasCoordinates = canvas.getBoundingClientRect();
let ctx = canvas.getContext("2d");

blueButton.addEventListener("click", () => {
    drawingColor = "blue";
});
redButton.addEventListener("click", () => {
    drawingColor = "red";
});
greenButton.addEventListener("click", () => {
    drawingColor = "green";
});
blackButton.addEventListener("click", () => {
    drawingColor = "black";
});

canvas.addEventListener("mousedown", event => {
    mouseX = event.pageX - canvasCoordinates.x;
    mouseY = event.pageY - canvasCoordinates.y;
    eventTimer = -1;
    if (eventTimer === -1) {
        placeCircle(mouseX, mouseY);
    }
});

canvas.addEventListener("mousemove", event => {
    mouseX = event.pageX - canvasCoordinates.x;
    mouseY = event.pageY - canvasCoordinates.y;
});

canvas.addEventListener("mouseup", () => {
    eventTimer = 0;
});

function placeCircle(x, y) {
    ctx.fillStyle = drawingColor;
    ctx.beginPath();
    ctx.arc(x, y, circleRadius, 0, Math.PI * 2);
    ctx.fill();
    if (eventTimer === -1) {
        setTimeout(() => placeCircle(mouseX, mouseY), 1);
    } else {
        return;
    }
}
