//importing assets
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restartBtn");
const container = document.getElementById("container");

//game variables
let isRunning = true;
const gravity = 10;
const pipeSpeed = 5;
let pipePosition = 0;

//creating the pipe to genrate
const pipeEl = document.createElement("div");
pipeEl.className = "pipe";

//player
let bird = {
    id: document.getElementById("bird"),
    x:0,
    y:0,
    velocity: 0
}

//add multiple pipes
for (let i = 0; i < 5; i++) {
    pipeEl.style.translate = `${i * 500}px`;//spacing the pipes
    container.appendChild(
        pipeEl.cloneNode(true)
    );
}

//game over
function showGameOver() {
    menu.style.display = "flex";
    overlay.style.display = "block";
    console.log("You Died 😵");
}

//check height
function checkBirdHeight() {
    if (bird.y >= 1000) {
        isRunning = false;
        showGameOver();
    }
}

//game loop
function gameFrame() {
    if(isRunning) {
        //game updates
        bird.y += gravity;
        bird.id.style.transform = `translate(0px, ${bird.y}px)`;

        pipePosition -= pipeSpeed;
        container.style.transform = `translateX(${pipePosition}px)`;
        checkBirdHeight();
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