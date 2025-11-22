const canvas = document.querySelector(".play-board");
const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });

const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");

canvas.width = 600;
canvas.height = 600;

ctx.imageSmoothingEnabled = false;

const tile = 20;
const tileCount = canvas.width / tile;

let snake = [{ x: 5, y: 5 }];
let vx = 0, vy = 0;

let foodX = 10, foodY = 10;

let lastUpdate = 0;
let speed = 8; 

let score = 0;
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;


let inputQueue = [];
let isGameOver = false;


function randomFood() {
    foodX = Math.floor(Math.random() * tileCount);
    foodY = Math.floor(Math.random() * tileCount);
}


document.addEventListener("keydown", e => {
    if (isGameOver) return;
    

    if (!e.key.startsWith("Arrow")) return;
    
    e.preventDefault(); 
    

    if (inputQueue.length >= 2) return;
    
    const lastInput = inputQueue[inputQueue.length - 1] || { vx, vy };
    
    if (e.key === "ArrowUp" && lastInput.vy !== 1) {
        inputQueue.push({ vx: 0, vy: -1 });
    }
    else if (e.key === "ArrowDown" && lastInput.vy !== -1) {
        inputQueue.push({ vx: 0, vy: 1 });
    }
    else if (e.key === "ArrowLeft" && lastInput.vx !== 1) {
        inputQueue.push({ vx: -1, vy: 0 });
    }
    else if (e.key === "ArrowRight" && lastInput.vx !== -1) {
        inputQueue.push({ vx: 1, vy: 0 });
    }
});


// Game update logic
function update() {
    if (isGameOver) return;

    if (inputQueue.length > 0) {
        const input = inputQueue.shift();
        vx = input.vx;
        vy = input.vy;
    }

    if (vx === 0 && vy === 0) return;

    const head = { x: snake[0].x + vx, y: snake[0].y + vy };

    // hit wall
    if (head.x < 0 || head.x >= tileCount ||
        head.y < 0 || head.y >= tileCount) {
        return resetGame();
    }

    // hit self
    for (let i = 0; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return resetGame();
        }
    }

    snake.unshift(head);

    // eat food
    if (head.x === foodX && head.y === foodY) {
        score++;
        scoreElement.innerText = `Score: ${score}`;
        highScore = Math.max(highScore, score);
        localStorage.setItem("high-score", highScore);
        highScoreElement.innerText = `High Score: ${highScore}`;
        randomFood();
    } else {
        snake.pop();
    }
}


// Draw
let needsRedraw = true;

function draw() {
    if (!needsRedraw) return;
    
    // Clear 
    ctx.fillStyle = "#212837";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // food
    ctx.fillStyle = "#ff003d";
    ctx.fillRect(foodX * tile, foodY * tile, tile - 2, tile - 2);

    // snake 
    ctx.fillStyle = "#60cbff";
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x * tile, snake[i].y * tile, tile - 2, tile - 2);
    }
    
    needsRedraw = false;
}


// Game loop
function loop(timestamp) {
    // Update logic với fixed timestep
    if (timestamp - lastUpdate > 1000 / speed) {
        update();
        needsRedraw = true;
        lastUpdate = timestamp;
    }

   
    draw();
    
    requestAnimationFrame(loop);
}


// Reset game 
function resetGame() {
    isGameOver = true;
    
 
    setTimeout(() => {
        if (confirm(`Game Over! Score: ${score}\nPlay again?`)) {
            snake = [{ x: 5, y: 5 }];
            vx = vy = 0;
            score = 0;
            scoreElement.innerText = "Score: 0";
            randomFood();
            inputQueue = [];
            isGameOver = false;
            needsRedraw = true;
        }
    }, 100);
}

randomFood();
needsRedraw = true;
requestAnimationFrame(loop);
