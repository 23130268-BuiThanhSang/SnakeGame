// code author Bui thanh sang - 23130268 writing not AI and comment same as
// declare variable or constant here for global
// -------- Variable LEVEL  1
const menu =document.getElementById("Menu");
const village = document.getElementById("Village");
const playButton = document.getElementById("playButton");
// declare for choose level(chapters)
const selectChapterButton = document.getElementById("selectChapterButton");
const selectLevel = document.getElementById("SelectLevel");
const level1Button = document.getElementById("Level1Button");
const level2Button = document.getElementById("Level2Button");
const level3Button = document.getElementById("Level3Button");
const level4Button = document.getElementById("Level4Button");
const level5Button = document.getElementById("Level5Button");
const level6Button = document.getElementById("Level6Button");
const levelBackToMenu = document.getElementById("LevelBackToMenu");
///
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

//-----------------------variable LEVEL 3
const swarm = document.getElementById("Swarm");
const swarmScore = document.getElementById("SwarmScore");
const swarmMouseEaten = document.getElementById("SwarmMouseEaten");
const swarmCanvas = document.getElementById("SwarmCanvas");
const swarmBackToMenu = document.getElementById("swarmBackToMenu");

// declare for spider
const spiderImg = new Image();
spiderImg.src = "Assets/Img/spider.png";
let spiders =[];
let spiderLoop = null;

// -------------------------variable LEVEL 4
const cave = document.getElementById("Cave");
const caveScore = document.getElementById("CaveScore");
const caveMouseEaten = document.getElementById("CaveMouseEaten");
const caveCanvas = document.getElementById("CaveCanvas");
const caveBackToMenu = document.getElementById("caveBackToMenu");

// declare for loop obstacle
let obstacleLoop = null;
let levelStartTime =0;
const spiderImg2 = new Image();
spiderImg2.src = "Assets/Img/spider2.png";


// ---------------------------variable LEVEL 5
const mineField = document.getElementById("MineField");
const mineFieldScore = document.getElementById("MineFieldScore");
const mineFieldMouseEaten = document.getElementById("MineFieldMouseEaten");
const mineFieldCanvas = document.getElementById("MineFieldCanvas");
const mineFieldBackToMenu = document.getElementById("mineFieldBackToMenu");


// declare for mine
let mines =[];
let mineSpawnTimer = null;
let mineCountDownTimer = null;


// -------------------------variable LEVEL 6
const volcano = document.getElementById("Volcano");
const volcanoScore = document.getElementById("VolcanoScore");
const volcanoMouseEaten = document.getElementById("VolcanoMouseEaten");
const volcanoCanvas = document.getElementById("VolcanoCanvas");
const volcanoBackToMenu = document.getElementById("volcanoBackToMenu");

// declare for skill snake
let poisonsExist =[];
let snakePoisonLoop = null;

// declare for dragon
let dragon  = null;
let dragonHP=0;
let dragonLoop = null;
let dragonFireLoop=null;
let dragonFireExist =[];
let dragonFireTimeLeft =0;











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
// canvas for level 3
swarmCanvas.width = gridSize*cellSize;
swarmCanvas.height = gridSize*cellSize;
// canvas for level 4
caveCanvas.width = gridSize*cellSize;
caveCanvas.height = gridSize*cellSize;
// canvas for level 5
mineFieldCanvas.width = gridSize*cellSize;
mineFieldCanvas.height = gridSize*cellSize;
// canvas for level 6
volcanoCanvas.width = gridSize*cellSize;
volcanoCanvas.height = gridSize*cellSize;
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
        snakeSpeed: 160,
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
        knightSpeed: 450,
        knightAppearScore: 0,
        knightImage: knightImg,
        foodColor: "#da0e32",
        obstaclesColor: "#6a2e14",
        obstacles:[
            { x: 8, y: 5 },
            { x: 8, y: 6 },
            { x: 8, y: 7 },

            { x: 19, y: 9 },

            { x: 22, y: 7 },
            { x: 7, y: 18 },
            { x: 7, y: 19 },
            { x: 7, y: 20 },
            { x: 7, y: 21 },
            { x: 13, y: 3 },
            { x: 14, y: 3 },
            { x: 14, y: 4 },
            { x: 14, y: 5 },
            { x: 14, y: 6 },
            { x: 18, y: 19 },
            { x: 19, y: 19 },
            { x: 20, y: 19 },
            { x: 20, y: 20 },
            { x: 20, y: 21 },
            { x: 21, y: 19 },

            { x: 4, y: 5 },
            { x: 6, y: 5 },
            { x: 4, y: 6 },
            { x: 4, y: 7 },
            { x: 6, y: 7 },
            { x: 10, y: 16 },
            { x: 11, y: 16 },
            { x: 12, y: 16 },
            { x: 13, y: 16 },
            { x: 16, y: 6 },
            { x: 16, y: 7 },
            { x: 16, y: 8 },
            { x: 17, y: 8 },
            { x: 18, y: 8 },
            { x: 3, y: 13 },
            { x: 4, y: 13 },


            { x: 10, y: 22 },
            { x: 11, y: 22 },
            { x: 12, y: 22 },
            { x: 13, y: 22 },
            { x: 16, y: 22 },
            { x: 17, y: 22 },
            { x: 18, y: 22 },
            { x: 23, y: 16 },
            { x: 23, y: 17 },
            { x: 23, y: 18 }
        ]

    },
    swarm:{
        name: "Swarm",
        screen: swarm,
        canvas: swarmCanvas,
        scoreElement: swarmScore,
        targetScore: 7,
        mouseElement: swarmMouseEaten,
        backgroundColor: "#385448",
        gridColor: "#30483b",
        snakeHeadColor: "#b5d66b",
        snakeBodyColor: "#6b9b4a",
        snakeSpeed: 150,
        foodColor: "#da0e32",
        obstaclesColor: "#493d2c",
        obstacles:[
            {x: 8, y:5},
            {x: 8, y:6},
            {x:8 , y:7},
            {x:15, y:13},
            {x:16, y:13},
            {x:17, y:13},
            {x:20, y:3},
            {x:20, y:4},
            {x:20, y:5},
            {x:4, y:18},
            {x:5, y:18},
            {x:6, y:18},
            { x: 22, y: 10 },
            { x: 22, y: 11 },
            { x: 22, y: 12 }
        ],
        hasSpider: true,
        spiderCount: 7,
        spiderImage: spiderImg,
        spiderSpeed: 550

    },
    cave:{
        name: "Cave",
        screen: cave,
        canvas: caveCanvas,
        scoreElement: caveScore,
        targetScore: 7,
        mouseElement: caveMouseEaten,
        backgroundColor: "#292d3e",
        gridColor: "#3b4054",
        snakeHeadColor: "#b5d66b",
        snakeBodyColor: "#6b9b4a",
        snakeSpeed: 150,
        foodColor:"#da0e32",
        obstaclesColor: "#777b8c",
        obstacles:[
            { x: 8, y: 5 , visible: true, phaseOffset:1},
            { x: 8, y: 6 , visible: true, phaseOffset:1},
            { x: 8, y: 7 , visible: true, phaseOffset:1},
            { x: 8, y: 8 , visible: true, phaseOffset:1},
            { x: 15, y: 13 , visible: true, phaseOffset:2},
            { x: 16, y: 13 , visible: true, phaseOffset:2},
            { x: 17, y: 13 , visible: true, phaseOffset:2},
            { x: 9, y: 17 , visible: true, phaseOffset:3},
            { x: 9, y: 18 , visible: true, phaseOffset:3},

            { x: 9, y: 19 , visible: true, phaseOffset:3},
            { x: 19, y: 2 , visible: true, phaseOffset:1},
            { x: 20, y: 2 , visible: true, phaseOffset:1},

            { x: 21, y: 2 , visible: true, phaseOffset:2},
            { x: 25, y: 6 , visible: true, phaseOffset:2},
            { x: 24, y: 6 , visible: true, phaseOffset:2},
            { x: 11, y: 20 , visible: true, phaseOffset:0},
            { x: 12, y: 20 , visible: true, phaseOffset:0},
            { x: 13, y: 20 , visible: true, phaseOffset:3},
            { x: 14, y: 20 , visible: true, phaseOffset:3},
            { x: 8, y: 15 , visible: true, phaseOffset:0},
        ],
        hasSpider: true,
        spiderCount: 3,
        spiderImage: spiderImg2,
        spiderSpeed: 600,

    },
    mineField:{
        name: "MineField",
        screen: mineField,
        canvas: mineFieldCanvas,
        scoreElement: mineFieldScore,
        targetScore: 9,
        mouseElement:mineFieldMouseEaten,
        backgroundColor: "#33352e",
        gridColor: "#4a4d40",
        snakeHeadColor: "#b5d66b",
        snakeBodyColor: "#6b9b4a",
        snakeSpeed: 150,
        foodColor: "#da0e32",
        obstaclesColor: "#493d2c",
        obstacles:[
            { x: 8, y: 5 },
            { x: 8, y: 6 },
            { x: 8, y: 7 },

            { x: 19, y: 9 },

            { x: 22, y: 7 },
            { x: 7, y: 18 },
            { x: 7, y: 19 },
            { x: 7, y: 20 },
            { x: 7, y: 21 },
            { x: 13, y: 3 },
            { x: 14, y: 3 },
            { x: 14, y: 4 },
            { x: 14, y: 5 },
            { x: 14, y: 6 },
            { x: 18, y: 19 },
            { x: 19, y: 19 },
            { x: 20, y: 19 },
            { x: 20, y: 20 },
            { x: 20, y: 21 },
            { x: 21, y: 19 },

            { x: 4, y: 5 },
            { x: 6, y: 5 },
            { x: 4, y: 6 },
            { x: 4, y: 7 },
            { x: 6, y: 7 },
            { x: 10, y: 16 },
            { x: 11, y: 16 },
            { x: 12, y: 16 },
            { x: 13, y: 16 },
            { x: 16, y: 6 },
            { x: 16, y: 7 },
            { x: 16, y: 8 },
            { x: 17, y: 8 },
            { x: 18, y: 8 },
            { x: 3, y: 13 },
            { x: 4, y: 13 },


            { x: 10, y: 22 },
            { x: 11, y: 22 },
            { x: 12, y: 22 },
            { x: 13, y: 22 },
            { x: 16, y: 22 },
            { x: 17, y: 22 },
            { x: 18, y: 22 },
            { x: 23, y: 16 },
            { x: 23, y: 17 },
            { x: 23, y: 18 }],
        mineCount:20,
        mineColor: "#4a0d18",
        mineTimeCountDown: 10,
    },
        volcano:{
            name: "Volcano",
            screen: volcano,
            canvas: volcanoCanvas,
            scoreElement: volcanoScore,
            mouseElement: volcanoMouseEaten,
            targetScore: 5,
            backgroundColor: "#171616",
            gridColor:"#593333",
            snakeHeadColor: "#1d3a12",
            snakeBodyColor: "#42812a",
            snakeSpeed: 150,
            poisonKey:"q",
            snakePoisonColor: "#a50dd8",
            snakePoisonSpeed: 20,
            snakePoisonDame:1,
            foodColor: "#ecd90a",
            obstaclesColor: "#493d2c",
            obstacles:[{ x: 4, y: 5 },
                { x: 4, y: 6 },
                { x: 4, y: 7 },
                { x: 6, y: 5 },
                { x: 6, y: 7 },
                { x: 12, y: 3 },
                { x: 13, y: 3 },
                { x: 13, y: 4 },
                { x: 13, y: 5 },
                { x: 13, y: 6 },
                { x: 19, y: 9 },
                { x: 22, y: 7 },
                { x: 7, y: 18 },
                { x: 7, y: 19 },
                { x: 7, y: 20 },
                { x: 7, y: 21 },
                { x: 10, y: 16 },
                { x: 11, y: 16 },
                { x: 12, y: 16 },
                { x: 13, y: 16 },
                { x: 16, y: 6 },
                { x: 16, y: 7 },
                { x: 16, y: 8 },
                { x: 17, y: 8 },
                { x: 18, y: 8 },
                { x: 23, y: 16 },
                { x: 23, y: 17 },
                { x: 23, y: 18 },
                { x: 3, y: 13 },
                { x: 4, y: 13 },
                { x: 10, y: 22 },
                { x: 11, y: 22 },
                { x: 12, y: 22 },
                { x: 13, y: 22 },
                { x: 16, y: 22 },
                { x: 17, y: 22 },
                { x: 18, y: 22 },
                { x: 18, y: 19 },
                { x: 19, y: 19 },
                { x: 20, y: 19 },
                { x: 20, y: 20 },
                { x: 20, y: 21 },
                { x: 21, y: 19 },
                { x: 8, y: 5 },
                { x: 8, y: 6 },
                { x: 8, y: 7 },
                { x: 14, y: 4 },
                { x: 14, y: 5 },
                { x: 14, y: 6 }],
            dragonColor: "#510715",
            dragonSize:1,
            dragonSpeed: 150,
            dragonHP: 5,
            fireBreathColor:"#f80321",
            fireBreathWarningColor: "#b52626",
            fireBreathTimeCountDown: 10,
            fireBreathSpeed: 150,



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
        if (spiderLoop !== null) {
            clearInterval(spiderLoop);
            spiderLoop = null;
        }
        spiders= [];
        if(obstacleLoop !== null){
            clearInterval(obstacleLoop);
            obstacleLoop = null;
        }
        if (mineCountDownTimer!==null){
            clearInterval(mineCountDownTimer);
            mineCountDownTimer = null;
        }
        if (mineSpawnTimer!==null){
            clearInterval(mineSpawnTimer);
            mineSpawnTimer = null;
        }
        if(snakePoisonLoop !== null){
            clearInterval(snakePoisonLoop);
            snakePoisonLoop = null;
        }








        currentLevelName=levelName;
        activeLevel=levels[levelName];
        activeCtx=activeLevel.canvas.getContext("2d");




        selectLevel.hidden=true;
        menu.hidden = true;
        winScreen.hidden = true;
        gameOverScreen.hidden = true;
        forest.hidden = true;
        village.hidden = true;
        swarm.hidden = true;
        cave.hidden = true;
        mineField.hidden = true;
        volcano.hidden = true;
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
        mines=[];
        poisonsExist=[];
    createDragon();
        if (currentLevelName === "cave"){
            levelStartTime=Date.now();
            for (const obstacle of activeLevel.obstacles){
                obstacle.visible = true;
            }
            updateObstacles();
        }



        if(activeLevel.hasSpider){
            createSpider();
        }
        if (activeLevel.hasKnight){
            spawnKnight();
        }
        createFood();
         drawGame();
        gameLoop = setInterval(moveSnake, activeLevel.snakeSpeed);
        if (activeLevel.hasSpider) {
            spiderLoop = setInterval(moveSpider, activeLevel.spiderSpeed);
        }
        if(currentLevelName === "cave"){
            obstacleLoop= setInterval(updateObstacles, 100);
        }
        if (currentLevelName === "mineField"){
            startSpawnMine();
            startMineCountDown();
        }
        if (currentLevelName === "volcano"){
            snakePoisonLoop= setInterval(movePoison,activeLevel.snakePoisonSpeed);
        }
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
    }else if(currentLevelName === "swarm"){
        winMessage.textContent = "YOU HAVE COMPLETED SWARM!";
        nextLevelButton.hidden = false;
    }else if (currentLevelName === "cave"){
        winMessage.textContent = "YOU HAVE COMPLETED CAVE!";
        nextLevelButton.hidden = false;
    }else if(currentLevelName === "mineField"){
        winMessage.textContent = "YOU HAVE COMPLETED MINE FIELD!";
        nextLevelButton.hidden = false;
    }else if(currentLevelName === "volcano"){
        winMessage.textContent = "YOU HAVE COMPLETED VOLCANO!";
        nextLevelButton.hidden = true;
    }
}
// function define lose game
function loseGame(){
    stopGameLoop();
    activeLevel.screen.hidden = true;
    selectLevel.hidden=true;
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
    if(spiderLoop !== null) {
        clearInterval(spiderLoop);
        spiderLoop = null;
    }
    if(obstacleLoop !== null){
        clearInterval(obstacleLoop);
        obstacleLoop = null;
    }
    if (mineSpawnTimer!==null){
        clearInterval(mineSpawnTimer);
        mineSpawnTimer = null;
    }
    if(mineCountDownTimer!==null){
        clearInterval(mineCountDownTimer);
        mineCountDownTimer = null;
    }
    if (snakePoisonLoop !== null) {
        clearInterval(snakePoisonLoop);
        snakePoisonLoop = null;
    }
}
//funtion define back to menu
function backToMenu(){
    stopGameLoop();
    village.hidden = true;
    forest.hidden = true;
    swarm.hidden = true;
    cave.hidden = true;
    mineField.hidden = true;
    volcano.hidden = true;
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
        if(!isBlocked && activeLevel.hasSpider){
            for (const spider of spiders){
                if (spider.x === newFood.x && spider.y === newFood.y){
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
        if (currentLevelName === "cave" && !obstacle.visible){
            continue;
        }
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
    drawSpider();
    drawMines();
    drawPoison();
    drawDraron();
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
    const hitObstacle = activeLevel.obstacles.some(obstacle =>{
        if(currentLevelName === "cave" && !obstacle.visible){
            return false;
        }
         return obstacle.x === newHead.x && obstacle.y === newHead.y
    });

    if(hitObstacle){
        loseGame();
        return;
    }
    //check colisson knight
    if(knight!==null&&newHead.x===knight.x && newHead.y===knight.y){
        loseGame();
        return;
    }
    // check colission spider
    const hitSpider = spiders.some(spider => spider.x === newHead.x && spider.y === newHead.y);
    if (hitSpider){
        loseGame();
        return;
    }
    // check explosion
    if (checkMineExplosion()){
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
// this is function define position initial for knight
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





//--------------------------------------
// special for level 3
// function define for create spider for game
function createSpider(){
    spiders = [];
    for (let i=0; i < activeLevel.spiderCount; i++){
        let position;
        let isBlocked;
        do{
            isBlocked = false;
            position = {x:Math.floor(Math.random()*gridSize),
                y:Math.floor(Math.random()*gridSize)};
            // check is snake
            for (const segment of snake){
                if(position.x===segment.x && position.y===segment.y){
                    isBlocked = true;
                    break;
                }
            }
            // check is obtacle
            for (const obstacle of activeLevel.obstacles){
                if (position.x===obstacle.x && position.y===obstacle.y){
                    isBlocked = true;
                    break;
                }
            }
        }while(isBlocked)
        spiders.push(position);
    }
}
// function define for draw spider
function drawSpider(){
    if (!activeLevel.hasSpider){
        return;
    }
    const imageSpider = activeLevel.spiderImage;
    for(const spider of spiders){
        const x = spider.x*cellSize;
        const y = spider.y*cellSize;
        activeCtx.drawImage(imageSpider, x,y,cellSize,cellSize);
    }
}
// function move random for all spider
function moveSpider(){
    if (!activeLevel.hasSpider|| (currentLevelName!=="swarm"&& currentLevelName!=="cave")){
        return;
    }
    const directions =  [
        {x:0, y:-1},
        {x:0, y:1},
        {x:-1, y:0},
        {x:1,y:0}
    ]
    for ( const spider of spiders){
        const choice = [...directions].sort(() => Math.random() - 0.5);
        for (const direction of choice){
            const nextX = spider.x+direction.x;
            const nextY = spider.y+direction.y;
            // check is wall
            if (nextX<0||nextX>=gridSize||nextY<0||nextY>=gridSize){
                continue;
            }
            // check obstacles
            const hitObstacle = activeLevel.obstacles.some(
                obstacle=>{
                    if(currentLevelName==="cave"&&!obstacle.visible){
                        return false;
                    }
                     return obstacle.x===nextX && obstacle.y===nextY}
            );
            if (hitObstacle){
                continue;
            }
            // check is food
            if (nextX===food.x && nextY===food.y){
                continue;
            }
            // check is
            spider.x = nextX;
            spider.y = nextY;
            break;
        }
        // check colission snake
        const hitSnake = snake.some(segment => segment.x === spider.x&& segment.y===spider.y);
        if (hitSnake){
            loseGame();
            return;
        }
    }


    drawGame();
}




// -----------------------------------
// special for level 4
function updateObstacles(){
    if(currentLevelName!=="cave"){
        return;
    }
    const elapedTime =(Date.now()-levelStartTime)/1000;
    let hasChanged = false;
    for(const obstacle of activeLevel.obstacles){
        const time =(elapedTime + obstacle.phaseOffset)%6;
        const shouldBeVisible =time<3;
        if(obstacle.visible!==shouldBeVisible){
            obstacle.visible=shouldBeVisible;
            hasChanged = true;
        }
    }
    if (hasChanged){
        drawGame();
    }
}

// ------------------------------------
// special for level 5
function spawnMine(){
    if(currentLevelName!=="mineField"){
        return;
    }
    const activeMines = mines.filter(mine => !mine.exploding);
    if(activeMines.length>=activeLevel.mineCount){
        return;
    }
    let x;
    let y;
    let validPosition=false;
    let attempts = 0;
    while(!validPosition && attempts<100){
        x=Math.floor(Math.random()*(gridSize-2)+1);
        y=Math.floor(Math.random()*(gridSize-2)+1);
        attempts++;
    //     check is snake
        const isSnake = snake.some(segment => segment.x===x && segment.y===y);
    //     check is food
        const isFood = food.x===x&&food.y===y;
    //     check is obstacle
        const isObstacle = activeLevel.obstacles.some(obstacle=>obstacle.x===x && obstacle.y===y);
    //     check is mine
        const isMine = mines.some(mine => mine.x===x && mine.y===y);

        if(isSnake===false&&isFood===false&&isObstacle===false&&isMine===false){
            validPosition=true;
        }
    }
    if (validPosition){
        mines.push({
            x: x,
            y: y,
            exploding: false,
            timeLeft: activeLevel.mineTimeCountDown,
            explosionTime:1
        });
    }

}
// function check and update status explosion for mine
function updateMines(){
    if(currentLevelName!=="mineField"){
        return;
    }
    for(let i=mines.length-1;i>=0;i--){
        const mine = mines[i];
        if(mine.exploding===false){
            mine.timeLeft --;
            if (mine.timeLeft <= 0){
                mine.exploding=true;
                mine.explosionTime=1;
            }
        }else{
            mine.explosionTime--;
            if (mine.explosionTime <= 0){
                mines.splice(i,1);
            }
        }
    }
}

function checkMineExplosion(){
    if (currentLevelName!=="mineField"){
        return;
    }
    for (const mine of mines){
        if (mine.exploding===true){
            for (const segment of snake){
                const distanceX = Math.abs(segment.x-mine.x);
                const distanceY = Math.abs(segment.y-mine.y);
                if (distanceX<=1&&distanceY<=1){
                    return true;
                }
            }
        }
    }
    return false;
}

function drawMines(){
    if (currentLevelName!=="mineField"){
        return;
    }
    activeCtx.textAlign="center";
    activeCtx.textBaseline="middle";
    for (const mine of mines){
        if (mine.exploding===false){
            activeCtx.fillStyle = activeLevel.mineColor;
            activeCtx.fillRect(mine.x*cellSize,mine.y*cellSize,cellSize,cellSize);
            activeCtx.fillStyle="white";
            const secondLeft = Math.ceil(mine.timeLeft || 0);
            activeCtx.fillText(secondLeft,mine.x*cellSize+(cellSize/2),mine.y*cellSize+(cellSize/2));
        }else if(mine.exploding===true){
            activeCtx.fillStyle="#e3851a";
            for (let y=-1;y<=1;y++){
                for (let x=-1;x<=1;x++){
                    activeCtx.fillRect((mine.x+x)*cellSize,(mine.y+y)*cellSize,cellSize,cellSize);
                }
            }

        }

    }
}

function startSpawnMine(){
    if(currentLevelName!=="mineField"){
        return;
    }
    spawnMine();
    mineSpawnTimer = setInterval(() => {spawnMine();},1000);
}

function startMineCountDown(){
    if (mineCountDownTimer!==null){
        clearInterval(mineCountDownTimer);
        mineCountDownTimer = null;
    }
    mineCountDownTimer = setInterval(() => {updateMines(); drawGame();},500);
}

// -------------------------------------------------------------
// special for level 6

// function define for action shoot poison of snake
function  shootPoison(){
    if(currentLevelName!=="volcano"){
        return;
    }
    const headSnake = snake[0];
    poisonsExist.push({x: headSnake.x, y: headSnake.y,directionPoisonX:direction.x,directionPoisonY:direction.y});
    drawGame();
}
// function define for action move of poison
function movePoison(){
    if(currentLevelName!=="volcano"){
        return;
    }
    for (let i=poisonsExist.length-1;i>=0;i--){
        poison = poisonsExist[i];
        poison.x += poison.directionPoisonX;
        poison.y += poison.directionPoisonY;
        if (poison.x<0||poison.y<0||poison.x>=gridSize||poisonsExist.y>=gridSize) {
            poisonsExist.splice(i,1);
            continue;
        }
        const hitObstacle = activeLevel.obstacles.some(obstacle => obstacle.x===poison.x&&obstacle.y===poison.y);
        if(hitObstacle){
            poisonsExist.splice(i,1);
            continue;
        }
    }
    drawGame();
}
// function define for action draw poison
function drawPoison(){
    if(currentLevelName!=="volcano"){
        return;
    }
    activeCtx.fillStyle = activeLevel.snakePoisonColor;
    for (const poison of poisonsExist){
        activeCtx.fillRect(poison.x*cellSize+1,poison.y*cellSize+1,cellSize-2,cellSize-2);
    }
}

function createDragon(){
    const dragonSize = activeLevel.dragonSize;
    let isSnake;
    let isObstacle=false;
    let isFood=false;
    do{
        dragon={
            x:dragonSize+Math.floor(Math.random()*(gridSize-2*dragonSize)),
            y:dragonSize+Math.floor(Math.random()*(gridSize-2*dragonSize))
        };
        // check location is snake
        isSnake=snake.some(segment=>Math.abs(segment.x-dragon.x)<=dragonSize
                                    &&Math.abs(segment.y-dragon.y)<=dragonSize);
        //     check location is obstacle
        isObstacle=activeLevel.obstacles.some(obstacle => Math.abs(obstacle.x-dragon.x)<=dragonSize
                                    &&Math.abs(obstacle.y-dragon.y)<=dragonSize);
        //     check is food
        isFood=Math.abs(food.x-dragon.x)<=dragonSize&&Math.abs(food.y-dragon.y)<=dragonSize;

    }while (isSnake||isObstacle||isFood)

    dragonHP=activeLevel.dragonHP;



}

function drawDraron(){
    if(currentLevelName!=="volcano"||dragon===null) {
        return;
    }
    const size = activeLevel.dragonSize;
    activeCtx.fillStyle = activeLevel.dragonColor;
    for (let y=-size;y<=size;y++){
        for (let x=-size;x<=size;x++){
            activeCtx.fillRect((dragon.x+x)*cellSize,(dragon.y+y)*cellSize,cellSize,cellSize);
        }
    }
    activeCtx.fillStyle = "skyblue";
    activeCtx.fillRect(dragon.x*cellSize, dragon.y*cellSize, cellSize,cellSize);
    activeCtx.fillStyle="white";
    activeCtx.textAlign="center";
     activeCtx.textBaseline="middle";
    activeCtx.fillText(dragonHP,dragon.x*cellSize+cellSize/2,dragon.y*cellSize+cellSize/2);
}











// add listener for key
document.addEventListener("keydown", function(e){
    if(activeLevel===null|| activeLevel.screen.hidden) {
        return;
    }
    if(currentLevelName==="volcano"&&e.key.toLowerCase()===activeLevel.poisonKey){
        e.preventDefault();
        shootPoison();
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
selectChapterButton.addEventListener("click",
    function (){
    menu.hidden=true;
    selectLevel.hidden=false;
    }
    );
level1Button.addEventListener("click",
    function (){
    startLevel("village");
    }
    );
level2Button.addEventListener("click",
    function (){
        startLevel("forest");
    }
);

level3Button.addEventListener("click",
    function (){
        startLevel("swarm");
    }
);

level4Button.addEventListener("click",
    function (){
        startLevel("cave");
    }
);
level5Button.addEventListener("click",
    function (){
    startLevel("mineField");
    }
    );
level6Button.addEventListener("click",
    function (){
    startLevel("volcano");
    });

nextLevelButton.addEventListener("click",
    function(){
    if (currentLevelName==="village"){
        startLevel("forest")
    }else if(currentLevelName==="forest"){
        startLevel("swarm");
    }else if(currentLevelName==="swarm"){
        startLevel("cave");
    }else if (currentLevelName==="cave"){
        startLevel("mineField");
    }else if(currentLevelName==="mineField"){
        startLevel("volcano")
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
swarmBackToMenu.addEventListener("click",backToMenu)
caveBackToMenu.addEventListener("click",backToMenu);
winBackToMenu.addEventListener("click", backToMenu);
gameOverBackToMenu.addEventListener("click", backToMenu);
levelBackToMenu.addEventListener("click", backToMenu);
mineFieldBackToMenu.addEventListener("click",backToMenu);
volcanoBackToMenu.addEventListener("click",backToMenu);

