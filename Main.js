// declare variable or constant here for global
// -------- Variable LEVEL  1
const menu =document.getElementById("Menu");
const village = document.getElementById("Village");
const playButton = document.getElementById("playButton");
const selectChapterButton = document.getElementById("selectChapterButton");

const backToMenuButton = document.getElementById("backToMenu");
const canvas = document.getElementById("GameCanvas");
 const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("Score");
const mouseEatenElement = document.getElementById("mouseEaten");
// declare for win game screen
const winScreen = document.getElementById("WinScreen");
const nextLevelButton = document.getElementById("nextLevel");
const winMessage = document.getElementById("WinMessage");
const winBackToMenu = document.getElementById("winBackToMenu");
const finalScoreElement = document.getElementById("FinalScore");
// declare for lose game
const gameOverScreen = document.getElementById("GameOverScreen");
const gameOverScore = document.getElementById("GameOverScore");
const retryButton = document.getElementById("retryButton");
const gameOverBackToMenu = document.getElementById("gameOverBackToMenu");
// const mouseImage = new Image();
// mouseImage.src = "Assets/Img/download.png";


// --------------------- Variable LEVEL 2
const forest = document.getElementById("Forest");
const forestScore = document.getElementById("ForestScore");
const forestMouseEaten = document.getElementById("ForestMouseEaten");
const forestCanvas = document.getElementById("ForestCanvas");
const forestBackToMenu = document.getElementById("forestBackToMenu");
const ctx2 = forestCanvas.getContext("2d");

// declare for knightImg and initial knight
const knightImg = new Image();
knightImg.src = "Assets/Img/knight.png";
let knight = null;
let knightLoop = null;


// game config for global
// size for each map define here
// size for map for all level
const gridSize = 25;
const cellSize = 20;
// canvas for level 1
canvas.width = gridSize*cellSize;
canvas.height = gridSize*cellSize;
// canvas for level 2
forestCanvas.width = gridSize*cellSize;
forestCanvas.height = gridSize*cellSize;
// current game state
let gameLoop = null;
let currentLevelName = null;
let activeLevel = null;
let activeCtx = null;





// define Snake at here
let snake =[];
// direction current
let direction ={x:1,y:0};
// next direction . default direction current
let nextDirection ={x:1,y:0};
// declare food for game
let food = {x:15,y:10};
// declare score
let score = 0;

// ----LEVEL Config
const levels ={
    village:{
        name: "Village",
        screen: village,
        canvas: canvas,
        scoreElement: scoreElement,
        targetScore: 6,
        mouseElement: mouseEatenElement,
        backgroundColor: "#c6be3e",
        gridColor: "#6d9640",
        snakeHeadColor: "#1d3a12",
        snakeBodyColor: "#42812a",
        snakeSpeed: 180,
        foodColor: "#da0e32",
        obstaclesColor: "",
        obstacles:[]
    },
    forest:{
        name: "Forest",
        screen: forest,
        canvas: forestCanvas,
        scoreElement: forestScore,
        targetScore: 7,
        mouseElement: forestMouseEaten,
        backgroundColor: "#527d3a",
        gridColor: "#3c642d",
        snakeHeadColor: "#716912",
        snakeBodyColor: "#ddb348",
        snakeSpeed: 150,
        hasKnight: true,
        knightSpeed: 350,
        knightAppearScore: 6,
        knightImage: knightImg,
        foodColor: "#da0e32",
        obstaclesColor: "#6a2e14",
        obstacles:[
            { x: 8, y: 5 },
            { x: 8, y: 6 },
            { x: 8, y: 7 },
            { x: 15, y: 13 },
            { x: 16, y: 13 },
            { x: 17, y: 13 },
            { x: 20, y: 4 },
            { x: 20, y: 5 },
            { x: 4, y: 18 },
            { x: 5, y: 18 },
            { x: 6, y: 18 }
        ]

    }

}
// ---------------------------------------------------------------------------------------------
// core game and menu

// funtion tranform level or menu in here
// function define for start level
function startLevel(levelName){
    if (gameLoop !== null){
        clearInterval(gameLoop);
        gameLoop = null;
    }
    if (knightLoop !== null) {
        clearInterval(knightLoop);
        knightLoop = null;
    }
    knight = null;


    currentLevelName=levelName;
    activeLevel=levels[levelName];
    activeCtx=activeLevel.canvas.getContext("2d");




    menu.hidden = true;
    winScreen.hidden = true;
    gameOverScreen.hidden = true;
    forest.hidden = true;
    village.hidden = true;
    activeLevel.screen.hidden = false;



    score=0;
    activeLevel.scoreElement.textContent = 0;
    activeLevel.mouseElement.textContent =0;
    snake =[
        { x: 3, y: 10 },
        { x: 2, y: 10 },
        { x: 1, y: 10 }
    ]
    direction = { x: 1, y: 0 };
    nextDirection = { x: 1, y: 0 };
    createFood();
     drawGame();
    gameLoop = setInterval(moveSnake, activeLevel.snakeSpeed);

}

// function define win game
function winGame(){
    stopGameLoop();
    activeLevel.screen.hidden = true;
    winScreen.hidden = false;
    finalScoreElement.textContent = score*100;
    if(currentLevelName === "village"){
        winMessage.textContent = "YOU HAVE COMPLETED VILLAGE!";
        nextLevelButton.hidden = false;
    }else if(currentLevelName === "forest"){
        winMessage.textContent = "YOU HAVE COMPLETED FOREST!";
        nextLevelButton.hidden = false;
    }
}
// function define lose game
function loseGame(){
    stopGameLoop();
    activeLevel.screen.hidden = true;
    winScreen.hidden = true;
    gameOverScreen.hidden = false;
    gameOverScore.textContent = score*100;

}
// function define stop Gameloop for global
function stopGameLoop(){
    if (gameLoop !== null) {
        clearInterval(gameLoop);
        gameLoop = null;
    }
    if (knightLoop !== null) {
        clearInterval(knightLoop);
        knightLoop = null;
    }
}
//funtion define back to menu
function backToMenu(){
    stopGameLoop();
    village.hidden = true;
    forest.hidden = true;
    winScreen.hidden = true;
    gameOverScreen.hidden = true;
    menu.hidden = false;
    knight=null;
    activeLevel=null;
    activeCtx = null;
}


// draw snake
function drawSnake(){
    for (let i = 0; i < snake.length; i++) {
        const part = snake[i];
        // color head bold and color light
        if(i===0){
            activeCtx.fillStyle = activeLevel.snakeHeadColor;
        }else{
            activeCtx.fillStyle = activeLevel.snakeBodyColor;
        }
        activeCtx.fillRect(part.x*cellSize+1,part.y*cellSize+1,cellSize-2,cellSize-2);
    }
}
// create food
function createFood(){
    let newFood;
    let isBlocked;
    do{
        isBlocked = false;
        newFood = { x: Math.floor(Math.random()*gridSize),
                    y: Math.floor(Math.random()*gridSize),};
        for ( let segment of snake){
            if(segment.x === newFood.x && segment.y === newFood.y){
                isBlocked = true;
                break;
            }
        }
        if (!isBlocked && knight !== null && knight.x === newFood.x && knight.y === newFood.y) {
            isBlocked = true;
        }
        if(isBlocked===false){
            for (const obstacle of activeLevel.obstacles){
                if (obstacle.x === newFood.x && obstacle.y === newFood.y){
                    isBlocked = true;
                    break;
                }
            }
        }

    }while(isBlocked)
    food = newFood;
}
// draw food
function drawFood(){
    activeCtx.fillStyle = activeLevel.foodColor;
    activeCtx.fillRect(food.x*cellSize+1,food.y*cellSize+1, cellSize -2, cellSize-2);
//     ctx.drawImage(mouseImage,food.x * cellSize +1, food.y * cellSize+1, cellSize -2, cellSize -2);
}

// define map at here
function drawBackground(){
    activeCtx.fillStyle = activeLevel.backgroundColor;
    // ctx.fillStyle = "white";
    activeCtx.fillRect(0, 0, activeLevel.canvas.width, activeLevel.canvas.height);

    activeCtx.strokeStyle = activeLevel.gridColor;
    activeCtx.lineWidth = 0.5;
    for (let i = 0; i < gridSize; i++){
        const position = i*cellSize;

        activeCtx.beginPath();
        activeCtx.moveTo(position,0);
        activeCtx.lineTo(position,activeLevel.canvas.height);
        activeCtx.stroke();

        activeCtx.beginPath();
        activeCtx.moveTo(0,position);
        activeCtx.lineTo(activeLevel.canvas.width,position);
        activeCtx.stroke();
    }
}

// draw obstacles
function drawObtacles(){
    for(const obstacle of activeLevel.obstacles){
        activeCtx.fillStyle = activeLevel.obstaclesColor;
        activeCtx.fillRect(obstacle.x*cellSize+1,obstacle.y*cellSize+1,cellSize-2,cellSize-2);
        // this is more design
        activeCtx.fillStyle = "#68864a";
        activeCtx.fillRect(obstacle.x*cellSize+4,obstacle.y*cellSize+4,cellSize-8,cellSize-8);

    }
}

// draw game
function drawGame(){
    drawBackground();
    drawObtacles();
    drawSnake();
    drawKnight();
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
    // check collision obstacles
    const hitObstacle = activeLevel.obstacles.some(obstacle =>obstacle.x === newHead.x && obstacle.y === newHead.y);
    if(hitObstacle){
        loseGame();
        return;
    }
    //check colisson knight
    if(knight!==null&&newHead.x===knight.x && newHead.y===knight.y){
        loseGame();
        return;
    }
    // check is food
    const ateFood = newHead.x === food.x && newHead.y === food.y;
    snake.unshift(newHead);
    if(ateFood){
        score++;
        activeLevel.scoreElement.textContent = score*100;
        activeLevel.mouseElement.textContent = score;
        if(activeLevel.hasKnight&&score>=activeLevel.knightAppearScore&&knight===null){
            spawnKnight();
        }
        if(score>=activeLevel.targetScore){
            winGame();
            return;
        }
        createFood();
    }else{
        snake.pop();
    }
    drawGame();
}

// ------------------------------------------------------
// special for level 2
// this is function define position for knight
function createKnight(){
    let position;
    let isBlocked;
    do{
        // same create food
        isBlocked = false;
        position =  {
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
        };
        for (const segment of snake) {
            if (
                segment.x === position.x &&
                segment.y === position.y
            ) {
                isBlocked = true;
                break;
            }
        }
        if (!isBlocked) {
            for (const obstacle of activeLevel.obstacles) {
                if (
                    obstacle.x === position.x &&
                    obstacle.y === position.y
                ) {
                    isBlocked = true;
                    break;
                }
            }
        }
    }while(isBlocked)
    return position;
}
// function base on BFS find the way the most
function findKnightNextStep(){
    if(knight===null || snake.length===0){
        return null;
    }
    const target = snake[0];
    const startKey = `${knight.x},${knight.y}`;
    const targetKey = `${target.x},${target.y}`;
    const queue = [knight];
    const visited = new Set([startKey]);
    const parent ={};
    parent[startKey]=null;
    const directions =[
        {x:0, y:-1},
        {x:0, y:1},
        {x:-1,y:0},
        {x:1,y:0},
    ];
    while(queue.length>0){
        const current = queue.shift();
        const currentKey = `${current.x},${current.y}`;
        if(currentKey===targetKey){
            break;
        }
        for(const direction of directions){
            const next = {
                x: current.x+direction.x,
                y: current.y+direction.y,
            };
            const nextKey = `${next.x},${next.y}`;
            if(next.x<0||next.x>=gridSize||next.y<0||next.y>=gridSize){
                continue;
            }
            if (visited.has(nextKey)) {
                continue;
            }
            const hitObstacle = activeLevel.obstacles.some(obstacle =>obstacle.x === next.x&&obstacle.y===next.y);
            if(hitObstacle){
                continue;
            }

            const hitSnakeBody = snake.some((segment, index)=>index>0 && segment.x === next.x && segment.y === next.y);
            if(hitSnakeBody){
                continue;
            }
            visited.add(nextKey);
            parent[nextKey] = currentKey;
            queue.push(next);
        }
    }
    if(!visited.has(targetKey)){
        return null;
    }
    let currentKey = targetKey;
    while(parent[currentKey] !== startKey){
        currentKey = parent[currentKey];
        if (currentKey === null || currentKey === undefined) {
            return null;
        }
    }
    const coordinates = currentKey.split(',');
    return{
        x:Number(coordinates[0]),
        y:Number(coordinates[1]),
    };
}
// function move the knight
function moveKnight(){
    if(knight===null || activeLevel===null||currentLevelName !=="forest"){
        return;
    }
    const nextStep =findKnightNextStep();
    if(nextStep===null){
        return;
    }
    knight = nextStep;
    const caughtSnake= snake.some(segment => segment.x === knight.x && segment.y === knight.y);
    if(caughtSnake){
        loseGame();
        return;
    }
    drawGame();
}
// this is function draw knight base on position from createKnight
function drawKnight(){
    if(knight === null || !activeLevel.hasKnight){
        return;
    }
    const imageKnight = activeLevel.knightImage;
    const x = knight.x*cellSize;
    const y = knight.y*cellSize;
    activeCtx.drawImage(imageKnight, x,y,cellSize,cellSize);
}
// create for knight and loop knight to move
function spawnKnight(){
    if (knight !== null || !activeLevel.hasKnight){
        return;
    }
    knight = createKnight();
    drawGame();
    knightLoop = setInterval(moveKnight, activeLevel.knightSpeed);
}















// add listener for key
document.addEventListener("keydown", function(e){
    if(activeLevel===null|| activeLevel.screen.hidden) {
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
playButton.addEventListener("click",
    function(){
        startLevel("village")
    });
nextLevelButton.addEventListener("click",
    function(){
    if (currentLevelName==="village"){
        startLevel("forest")
    }
    });
retryButton.addEventListener("click",
    function(){
        if(currentLevelName !== null){
            startLevel(currentLevelName)
        }
    });
backToMenuButton.addEventListener("click", backToMenu);
forestBackToMenu.addEventListener("click", backToMenu);
winBackToMenu.addEventListener("click", backToMenu);
gameOverBackToMenu.addEventListener("click", backToMenu);

