//importing assets
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restartBtn");

//game variables
let isRunning = true;
const gravity = 10;

//player
let bird = {
    id: document.getElementById("bird"),
    x:500,
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
        bird.id.style.transform = `translate(${bird.x}px, ${bird.y}px)`;

        pipePosition -= pipeSpeed;
        container.style.transform = `translateX(${pipePosition}px)`;
        requestAnimationFrame(gameFrame);
    } else {
        isRunning = false;
    }
}

window.addEventListener("keypress", (ev) => {
    if(ev.key == " ") {
        bird.y = -200;
        bird.id.style.transform = `translate(${bird.x}px, ${bird.y}px)`;
    }
}, false)
restartBtn.addEventListener("click", () => {
    window.location.reload();
}, false)

gameFrame();