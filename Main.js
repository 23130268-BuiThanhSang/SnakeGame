// declare variable or constant here
const menu =document.getElementById("Menu");
const village = document.getElementById("Village");
const playButton = document.getElementById("playButton");
const selectChapterButton = document.getElementById("selectChapterButton");
const storyButton = document.getElementById("storyButton");
const backToMenuButton = document.getElementById("backToMenu");
const canvas = document.getElementById("GameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("Score");
const mouseEatenElement = document.getElementById("mouseEaten");
// declare for win game screen
const winScreen = document.getElementById("WinScreen");
const winBackToMenu = document.getElementById("winBackToMenu");
const finalScoreElement = document.getElementById("FinalScore");
// declare for lose game
const gameOverScreen = document.getElementById("GameOverScreen");
const gameOverScore = document.getElementById("GameOverScore");
const retryButton = document.getElementById("retryButton");
const gameOverBackToMenu = document.getElementById("gameOverBackToMenu");

// const mouseImage = new Image();
// mouseImage.src = "Assets/Img/download.png";








const targetScore =6;


// size for each map define here
// size for map level 1
const gridSize = 25;
const cellSize = 20;

canvas.width = gridSize*cellSize;
canvas.height = gridSize*cellSize;

let gameLoop = null;
// funtion tranform level or menu in here
// funtion define tranform menu to level 1
function startGame(){
    if (gameLoop !== null){
        clearInterval(gameLoop);
    }
    menu.hidden = true;
    winScreen.hidden = true;
    gameOverScreen.hidden = true;
    village.hidden = false;
    scoreElement.textContent = 0;
    score=0;
    mouseEatenElement.textContent=0;
    snake =[
        { x: 3, y: 10 },
        { x: 2, y: 10 },
        { x: 1, y: 10 }
    ]
    direction = { x: 1, y: 0 };
    nextDirection = { x: 1, y: 0 };
    drawGame();
    gameLoop = setInterval(moveSnake, 200);
}

// function define win game
function winGame(){
    clearInterval(gameLoop);
    gameLoop = null;
    village.hidden = true;
    winScreen.hidden = false;
    finalScoreElement.textContent = score*100;
}
// function define lose game
function loseGame(){
    clearInterval(gameLoop);
    gameLoop = null;
    village.hidden = true;
    winScreen.hidden = true;
    gameOverScreen.hidden = false;
    gameOverScore.textContent = score*100;

}


//funtion define back to menu
function backToMenu(){
    village.hidden = true;
    winScreen.hidden = true;
    gameOverScreen.hidden = true;
    menu.hidden = false;
}

// define Snake at here
let snake =[];
// direction current
let direction ={x:1,y:0};
// next direction . default direction current
let nextDirection ={x:1,y:0};
// declare food for game
let food = {x:15,y:10}
// declare score
let score = 0;
// draw snake
function drawSnake(){
    for (let i = 0; i < snake.length; i++) {
        const part = snake[i];
        // color head bold and color light
        if(i===0){
            ctx.fillStyle = "#1d3a12";
        }else{
            ctx.fillStyle = "#42812a"
        }
        ctx.fillRect(part.x*cellSize+1,part.y*cellSize+1,cellSize-2,cellSize-2);
    }
}
// create food
function createFood(){
    let newFood;
    let isOnSnake;
    do{
        isOnSnake = false;
        newFood = { x: Math.floor(Math.random()*gridSize),
                    y: Math.floor(Math.random()*gridSize),};
        for ( let segment of snake){
            if(segment.x === newFood.x && segment.y === newFood.y){
                isOnSnake = true;
                break;
            }
        }

    }while(isOnSnake)
    food = newFood;
}
// draw food
function drawFood(){
    ctx.fillStyle = "#da0e32";
    ctx.fillRect(food.x*cellSize+1,food.y*cellSize+1, cellSize -2, cellSize-2);
//     ctx.drawImage(mouseImage,food.x * cellSize +1, food.y * cellSize+1, cellSize -2, cellSize -2);
}

// define map at here
function drawBackground(){
    ctx.fillStyle = "#c6be3e";
    // ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle ="#6d9640";
    ctx.lineWidth = 0.5;
    for (let i = 0; i < gridSize; i++){
        const position = i*cellSize;

        ctx.beginPath();
        ctx.moveTo(position,0);
        ctx.lineTo(position,canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,position);
        ctx.lineTo(canvas.width,position);
        ctx.stroke();
    }
}

// draw game
function drawGame(){
    drawBackground();
    drawSnake();
    drawFood();
}
// move for snake
function moveSnake(){
    const head =snake[0];
    direction =nextDirection;
    const newHead={
        x: head.x+direction.x,
        y: head.y+direction.y
    };
    // check bitseft
    const bitSeft = snake.some(segment => segment.x === newHead.x && segment.y === newHead.y);
    if(bitSeft){
        loseGame();
        return;
    }
    // check clossion wwall
    if(newHead.x<0|| newHead.x >=gridSize|| newHead.y<0|| newHead.y >=gridSize){
        loseGame();
        return;
    }
    // check is food
    const ateFood = newHead.x === food.x && newHead.y === food.y;
    snake.unshift(newHead);
    if(ateFood){
        score++;
        scoreElement.textContent = score*100;
        mouseEatenElement.textContent = score;

        if(score>=targetScore){
            winGame();
            return;
        }
        createFood();
    }else{
        snake.pop();
    }



    drawGame();
}

// add listener for key
document.addEventListener("keydown", function(e){
    if(village.hidden) {
        return;
    }
    let newDirection = null;
    switch (e.key.toLowerCase()) {
        case "arrowup":
        case"w":
            newDirection = {x: 0, y: -1};
            break;
        case "arrowdown":
        case "s":
            newDirection = {x: 0, y: 1};
            break;
        case "arrowleft":
        case "a":
            newDirection = {x: -1, y: 0};
            break;
        case "arrowright":
            case "d":
                newDirection = {x: 1, y: 0};
                break;
    }
    if (newDirection===null){
        return;
    }
    if(newDirection.x === -direction.x && newDirection.y === -direction.y){
        return;
    }
    // prevent arrow scroll page
    e.preventDefault();
    nextDirection = newDirection;
});



// add listener for button
playButton.addEventListener("click", startGame);
backToMenuButton.addEventListener("click", backToMenu);
winBackToMenu.addEventListener("click", backToMenu);
retryButton.addEventListener("click",startGame);
gameOverBackToMenu.addEventListener("click", backToMenu);
