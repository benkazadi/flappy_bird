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
    x:0,
    y:0,
    velocity: 0
}

//game over
function showGameOver() {
    menu.style.display = "block";
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