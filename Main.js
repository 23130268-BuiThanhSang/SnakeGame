// declare variable or constant here
const menu =document.getElementById("Menu");
const village = document.getElementById("Village");
const playButton = document.getElementById("playButton");
const selectChapterButton = document.getElementById("selectChapterButton");
const storyButton = document.getElementById("storyButton");
const backToMenuButton = document.getElementById("backToMenu");
const canvas = document.getElementById("GameCanvas");
const ctx = canvas.getContext("2d");

// size for each map define here
// size for map level 1
const gridSize = 25;
const cellSize = 20;

canvas.width = gridSize*cellSize;
canvas.height = gridSize*cellSize;

// funtion tranform level or menu in here
// funtion define tranform menu to level 1
function startGame(){
    if (gameLoop !== null){
        clearInterval(gameLoop);
    }
    menu.hidden = true;
    village.hidden = false;
    snake =[
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
    ]
    direction = { x: 1, y: 0 };
    nextDirection = { x: 1, y: 0 };
    drawGame();
    gameLoop = setInterval(moveSnake, 150);
}
//funtion define back to menu
function backToMenu(){
    village.hidden = true;
    menu.hidden = false;
}

// define Snake at here
let snake =[
    {x: 10, y:10}
    ,{x: 9, y:10}
    ,{x:8, y:10}
];
// direction current
let direction ={x:1,y:0};
// next direction . default direction current
let nextDirection ={x:1,y:0};

let gameLoop = null;
// draw snake
function drawSnake(){
    for (let i = 0; i < snake.length; i++) {
        const part = snake[i];
        // color head bold and color light
        if(i===0){
            ctx.fillStyle = "#1d3a12";
        }else{
            ctx.fillStyle = "#2f5d1e"
        }
        ctx.fillRect(part.x*cellSize+1,part.y*cellSize+1,cellSize-2,cellSize-2);
    }
}

// define map at here
function drawBackground(){
    ctx.fillStyle = "#c6be3e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle ="#6d9640";
    ctx.lineWidth = 1;
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
}
// move for snake
function moveSnake(){
    const head =snake[0];
    direction =nextDirection;
    const newHead={
        x: head.x+direction.x,
        y: head.y+direction.y
    };

    snake.unshift(newHead);
    snake.pop();

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