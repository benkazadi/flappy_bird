//importing assets
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restartBtn");
const container = document.getElementById("container");

//game variables
let isRunning = true;
const gravity = 10;
const pipeSpeed = 5;
const pipePosition = 600;

//player
let bird = {
    id: document.getElementById("bird"),
    x:0,
    y:0,
    velocity: 0
}

//creating the pipe to genrate
const pipeEl = document.createElement("div");
pipeEl.className = "pipe";

//game loop
function gameFrame() {
    if(isRunning) {
        bird.y += gravity;
        bird.id.style.transform = `translate(0px, ${bird.y}px)`;
        requestAnimationFrame(gameFrame);
    } else {
        isRunning = false;
    }
}

window.addEventListener("keypress", (ev) => {
    if(ev.key == " ") {
        bird.y = -200;
        bird.id.style.transform = `translate(0px, ${bird.y}px)`;
    }
}, false)
restartBtn.addEventListener("click", () => {
    window.location.reload();
}, false)

gameFrame();