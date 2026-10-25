/**
 * author: Bui Thanh Sang -23130268
 * @type {HTMLElement}
 */

/**
 * this is declare variable level 1
 * @type {HTMLElement}
 */
const menu =document.getElementById("Menu");
const village = document.getElementById("Village");


/**
 * declare for choose level(chapters)
 * @type {HTMLElement}
 */
const selectChapterButton = document.getElementById("selectChapterButton");
const selectLevel = document.getElementById("SelectLevel");
const level1Button = document.getElementById("Level1Button");
const level2Button = document.getElementById("Level2Button");
const level3Button = document.getElementById("Level3Button");
const level4Button = document.getElementById("Level4Button");
const level5Button = document.getElementById("Level5Button");
const level6Button = document.getElementById("Level6Button");
const level7Button = document.getElementById("Level7Button");
const levelBackToMenu = document.getElementById("LevelBackToMenu");





const backToMenuButton = document.getElementById("backToMenu");
const canvas = document.getElementById("GameCanvas");
 const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("Score");
const mouseEatenElement = document.getElementById("mouseEaten");
/**
 * declare for variable win game screen
 * @type {HTMLElement}
 */
const winScreen = document.getElementById("WinScreen");
const nextLevelButton = document.getElementById("nextLevel");
const winMessage = document.getElementById("WinMessage");
const winBackToMenu = document.getElementById("winBackToMenu");
const finalScoreElement = document.getElementById("FinalScore");
/**
 * declare for variable  guide game  screen
 * @type {HTMLElement}
 */
const guideScreen = document.getElementById("GuideScreen");
const startGame = document.getElementById("startGame");
const playButton = document.getElementById("playButton");
const guideMessage = document.getElementById("GuideMessage");
/**
 * declare for variable lose game
 * @type {HTMLElement}
 */
const gameOverScreen = document.getElementById("GameOverScreen");
const gameOverScore = document.getElementById("GameOverScore");
const retryButton = document.getElementById("retryButton");
const gameOverBackToMenu = document.getElementById("gameOverBackToMenu");
// const mouseImage = new Image();
// mouseImage.src = "Resource/Img/download.png";


/**
 * this is variable for level 2
 * @type {HTMLElement}
 */
const forest = document.getElementById("Forest");
const forestScore = document.getElementById("ForestScore");
const forestMouseEaten = document.getElementById("ForestMouseEaten");
const forestCanvas = document.getElementById("ForestCanvas");
const forestBackToMenu = document.getElementById("forestBackToMenu");
const ctx2 = forestCanvas.getContext("2d");

/**
 * this is declare for variable Knight Image and create initial knight
 * @type {HTMLImageElement}
 */
const knightImg = new Image();
knightImg.src = "Resource/knight.png";
let knight = null;
let knightLoop = null;

/**
 * this is declare variable for level 3
 * @type {HTMLElement}
 */
const swarm = document.getElementById("Swarm");
const swarmScore = document.getElementById("SwarmScore");
const swarmMouseEaten = document.getElementById("SwarmMouseEaten");
const swarmCanvas = document.getElementById("SwarmCanvas");
const swarmBackToMenu = document.getElementById("swarmBackToMenu");

/**
 * this is declare for spider
 * @type {HTMLImageElement}
 */
const spiderImg = new Image();
spiderImg.src = "Resource/spider.png";
let spiders =[];
let spiderLoop = null;

/**
 * this is decalre for variable level 4
 * @type {HTMLElement}
 */
const cave = document.getElementById("Cave");
const caveScore = document.getElementById("CaveScore");
const caveMouseEaten = document.getElementById("CaveMouseEaten");
const caveCanvas = document.getElementById("CaveCanvas");
const caveBackToMenu = document.getElementById("caveBackToMenu");

/**
 * this is declare for obstacle loop and spider image specialize for level 4
 * @type {null}
 */
let obstacleLoop = null;
let levelStartTime =0;
const spiderImg2 = new Image();
spiderImg2.src = "Resource/spider2.png";


/**
 * this is declare for variable level 5
 * @type {HTMLElement}
 */
const mineField = document.getElementById("MineField");
const mineFieldScore = document.getElementById("MineFieldScore");
const mineFieldMouseEaten = document.getElementById("MineFieldMouseEaten");
const mineFieldCanvas = document.getElementById("MineFieldCanvas");
const mineFieldBackToMenu = document.getElementById("mineFieldBackToMenu");


/**
 * this is declare for initial mines and timer for mines
 * @type {*[]}
 */
let mines =[];
let mineSpawnTimer = null;
let mineCountDownTimer = null;


/**
 * this is declare for variable level 6
 * @type {HTMLElement}
 */
const volcano = document.getElementById("Volcano");
const volcanoScore = document.getElementById("VolcanoScore");
const volcanoMouseEaten = document.getElementById("VolcanoMouseEaten");
const volcanoCanvas = document.getElementById("VolcanoCanvas");
const volcanoBackToMenu = document.getElementById("volcanoBackToMenu");

/**
 * this is declare for variable level 7
 *
 */

const glassWorld = document.getElementById("GlassWorld");
const glassWorldScore = document.getElementById("GlassWorldScore");
const glassWorldMouseEaten = document.getElementById("GlassWorldMouseEaten");
const glassWorldCanvas = document.getElementById("GlassWorldCanvas");
const glassWorldBackToMenu = document.getElementById("glassWorldBackToMenu");

/**
 * this is decalre for poison skill of snake
 * @type {*[]}
 */
let poisonsExist =[];
let snakePoisonLoop = null;
/**
 * this is declare for firebreath skill of dragon
 * @type {*[]}
 */
let fireExist=[];
let dragonFireLoop=null;
let fireMoveLoop=null;

/**
 * this is declare for dragon and dragon loop
 * @type {null}
 */
let dragon  = null;
let dragonHP=0;
let dragonLoop = null;


/**
 * this is game config width and height and multi
 * @type {number}
 */
const gridSize = 25;
const cellSize = 20;
/**
 * this is canvas for level 1
 * @type {number}
 */
canvas.width = gridSize*cellSize;
canvas.height = gridSize*cellSize;
/**'
 * this is canvas for level 2
 * @type {number}
 */
forestCanvas.width = gridSize*cellSize;
forestCanvas.height = gridSize*cellSize;
/**
 * this is canvas for level 3
 * @type {number}
 */
swarmCanvas.width = gridSize*cellSize;
swarmCanvas.height = gridSize*cellSize;
/**'
 * this is canvas for level 4
 * @type {number}
 */
caveCanvas.width = gridSize*cellSize;
caveCanvas.height = gridSize*cellSize;
/**
 * this is canvas for level 5
 * @type {number}
 */
mineFieldCanvas.width = gridSize*cellSize;
mineFieldCanvas.height = gridSize*cellSize;
/**
 * this is canvas for level 6
 * @type {number}
 */
volcanoCanvas.width = gridSize*cellSize;
volcanoCanvas.height = gridSize*cellSize;
/**
 * thisi is canvas for level 7
 */
glassWorldCanvas.width = gridSize*cellSize;
glassWorldCanvas.height = gridSize*cellSize;
/**
 * this is current game state
 * @type {null}
 */
let gameLoop = null;
let currentLevelName = null;
let selectLevelName = null;
let activeLevel = null;
let activeCtx = null;


/**
 * this is define for initial snake
 * @type {*[]}
 */
let snake =[];
/**
 * this is direction initial
 * @type {{x: number, y: number}}
 */
let direction ={x:1,y:0};
/**
 * this is next direction initial
 * @type {{x: number, y: number}}
 */
let nextDirection ={x:1,y:0};
/**
 * this is decalre for initial food
 * @type {{x: number, y: number}}
 */
let food = {x:15,y:10};
/**
 * this is decalre for score
 * @type {number}
 */
let score = 0;

/**
 * this is special. this is config for each level and be used for start level to determine for level
 * use array save object config for level
 */
/**
 * this is config for level 1
 * @type {{name: string, screen: HTMLElement, canvas: HTMLElement, scoreElement: HTMLElement, targetScore: number, mouseElement: HTMLElement, backgroundColor: string, gridColor: string, snakeHeadColor: string, snakeBodyColor: string, snakeSpeed: number, foodColor: string, obstaclesColor: string, obstacles: *[]}}
 */
const villageLevel={
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
}
/**
 * this is config for level 2
 * @type {{name: string, screen: HTMLElement, canvas: HTMLElement, scoreElement: HTMLElement, targetScore: number, mouseElement: HTMLElement, backgroundColor: string, gridColor: string, snakeHeadColor: string, snakeBodyColor: string, snakeSpeed: number, hasKnight: boolean, knightSpeed: number, knightAppearScore: number, knightImage: HTMLImageElement, foodColor: string, obstaclesColor: string, obstacleColorCore: string, obstacles: [{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]}}
 */
const forestLevel={
    name: "Forest",
    screen: forest,
    canvas: forestCanvas,
    scoreElement: forestScore,
    targetScore: 5,
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
    obstacleColorCore:"#4ae110",
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

}
/**
 * this is config for leval 3
 * @type {{name: string, screen: HTMLElement, canvas: HTMLElement, scoreElement: HTMLElement, targetScore: number, mouseElement: HTMLElement, backgroundColor: string, gridColor: string, snakeHeadColor: string, snakeBodyColor: string, snakeSpeed: number, foodColor: string, obstaclesColor: string, obstacleColorCore: string, obstacles: [{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},null,null,null,null,null,null,null,null,null,null], hasSpider: boolean, spiderCount: number, spiderImage: HTMLImageElement, spiderSpeed: number}}
 */
const swarmLevel={
    name: "Swarm",
    screen: swarm,
    canvas: swarmCanvas,
    scoreElement: swarmScore,
    targetScore: 5,
    mouseElement: swarmMouseEaten,
    backgroundColor: "#385448",
    gridColor: "#30483b",
    snakeHeadColor: "#b5d66b",
    snakeBodyColor: "#6b9b4a",
    snakeSpeed: 150,
    foodColor: "#da0e32",
    obstaclesColor: "#493d2c",
    obstacleColorCore:"#1a671f",
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

};
/**
 * this is config for level 4
 * @type {{name: string, screen: HTMLElement, canvas: HTMLElement, scoreElement: HTMLElement, targetScore: number, mouseElement: HTMLElement, backgroundColor: string, gridColor: string, snakeHeadColor: string, snakeBodyColor: string, snakeSpeed: number, foodColor: string, obstaclesColor: string, obstacleColorCore: string, obstacles: [{x: number, y: number, visible: boolean, phaseOffset: number},{x: number, y: number, visible: boolean, phaseOffset: number},{x: number, y: number, visible: boolean, phaseOffset: number},{x: number, y: number, visible: boolean, phaseOffset: number},{x: number, y: number, visible: boolean, phaseOffset: number},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], hasSpider: boolean, spiderCount: number, spiderImage: HTMLImageElement, spiderSpeed: number}}
 */
const caveLevel={
    name: "Cave",
        screen: cave,
        canvas: caveCanvas,
        scoreElement: caveScore,
        targetScore: 5,
        mouseElement: caveMouseEaten,
        backgroundColor: "#292d3e",
        gridColor: "#3b4054",
        snakeHeadColor: "#b5d66b",
        snakeBodyColor: "#6b9b4a",
        snakeSpeed: 150,
        foodColor:"#da0e32",
        obstaclesColor: "#777b8c",
        obstacleColorCore:"#1c2961",
        obstacles:[
        // { x: 8, y: 5 , visible: true, phaseOffset:1},

        // { x: 15, y: 13 , visible: true, phaseOffset:2},
        // { x: 16, y: 13 , visible: true, phaseOffset:2},
        // { x: 17, y: 13 , visible: true, phaseOffset:2},
        // { x: 9, y: 17 , visible: true, phaseOffset:3},
        // { x: 9, y: 18 , visible: true, phaseOffset:3},
        //

        //
        // { x: 21, y: 2 , visible: true, phaseOffset:2},
        // { x: 25, y: 6 , visible: true, phaseOffset:2},
        // { x: 24, y: 6 , visible: true, phaseOffset:2},
        // { x: 11, y: 20 , visible: true, phaseOffset:0},
        // { x: 12, y: 20 , visible: true, phaseOffset:0},
        // { x: 13, y: 20 , visible: true, phaseOffset:3},
        // { x: 14, y: 20 , visible: true, phaseOffset:3},
        // { x: 8, y: 15 , visible: true, phaseOffset:0},

        { x:16, y: 8 , visible: true, phaseOffset:0},
        { x:15, y: 8 , visible: true,phaseOffset:0},
        { x:10, y: 4 , visible: true,phaseOffset:2},
        { x:11, y: 4 , visible: true, phaseOffset:2},
        // { x: 8, y: 6 , visible: true, phaseOffset:1},
        // { x: 8, y: 7 , visible: true, phaseOffset:1},
        // { x: 8, y: 8 , visible: true, phaseOffset:1},
        { x:13, y: 4 , visible: true, phaseOffset:2},
        { x:12, y:4 , visible: true, phaseOffset:2},
        { x:12, y: 12 , visible: true,phaseOffset:3},

        { x:14, y: 12 , visible: true,phaseOffset:3},
        { x:13, y: 8 , visible: true,phaseOffset:0},
        { x:14, y: 8 , visible: true,phaseOffset:0},

        { x:12, y: 22 , visible: true,phaseOffset:1},

        { x:15, y: 22 , visible: true,phaseOffset:1},
        // { x: 9, y: 19 , visible: true, phaseOffset:3},
        // { x: 19, y: 2 , visible: true, phaseOffset:1},
        // { x: 20, y: 2 , visible: true, phaseOffset:1},



        {x:18, y: 18 ,visible: true,phaseOffset:2},
        {x:14, y: 11 ,visible: true,phaseOffset:3},
        {x:13, y: 12 ,visible: true,phaseOffset:3},
        {x:18, y: 20 ,visible: true,phaseOffset:2},
        {x:3, y: 19 ,visible: true,phaseOffset:3},
        {x:4, y: 19 ,visible: true,phaseOffset:3},


        {x:5, y: 19 ,visible: true,phaseOffset:3},
        {x:6, y: 19 ,visible: true,phaseOffset:3},
        {x:4, y: 15 ,visible: true,phaseOffset:0},
        {x:5, y: 15 ,visible: true,phaseOffset:0},


        {x:14, y: 22 ,visible: true,phaseOffset:1},
        {x:13, y: 22 ,visible: true,phaseOffset:1},
        {x:18, y: 17 ,visible: true,phaseOffset:2},
        {x:21, y: 4 ,visible: true,phaseOffset:1},




        {x:21, y: 5 ,visible: true,phaseOffset:1},
        {x:21, y: 6 ,visible: true,phaseOffset:1},





        {x:21, y: 7 ,visible: true,phaseOffset:1},
        {x:7, y: 15 ,visible: true,phaseOffset:0},
        {x:6, y: 15 ,visible: true,phaseOffset:0},
        {x:21, y: 8 ,visible: true,phaseOffset:1},
        {x:21, y: 10 ,visible: true,phaseOffset:1},
        {x:21, y: 9 ,visible: true,phaseOffset:1}
    ],
        hasSpider: true,
        spiderCount: 3,
        spiderImage: spiderImg2,
        spiderSpeed: 1000,

};
/**
 * this is config for level 5
 * @type {{name: string, screen: HTMLElement, canvas: HTMLElement, scoreElement: HTMLElement, targetScore: number, mouseElement: HTMLElement, backgroundColor: string, gridColor: string, snakeHeadColor: string, snakeBodyColor: string, snakeSpeed: number, foodColor: string, obstaclesColor: string, obstacleColorCore: string, obstacles: [{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], mineCount: number, mineColor: string, mineTimeCountDown: number}}
 */
const mineFieldLevel={
    name: "MineField",
    screen: mineField,
    canvas: mineFieldCanvas,
    scoreElement: mineFieldScore,
    targetScore: 6,
    mouseElement:mineFieldMouseEaten,
    backgroundColor: "#33352e",
    gridColor: "#4a4d40",
    snakeHeadColor: "#b5d66b",
    snakeBodyColor: "#6b9b4a",
    snakeSpeed: 150,
    foodColor: "#da0e32",
    obstaclesColor: "#c6c2bd",
    obstacleColorCore:"#6e470f",
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
};
/**
 * this is config for level 6
 * @type {{name: string, screen: HTMLElement, canvas: HTMLElement, scoreElement: HTMLElement, mouseElement: HTMLElement, targetScore: number, backgroundColor: string, gridColor: string, snakeHeadColor: string, snakeBodyColor: string, snakeSpeed: number, poisonKey: string, snakePoisonColor: string, snakePoisonSpeed: number, snakePoisonDame: number, foodColor: string, obstaclesColor: string, obstacleColorCore: string, obstacles: [{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},null,null,null,null,null,null,null], dragonColor: string, dragonSize: number, dragonSpeed: number, dragonStep: number, dragonHP: number, fireBreathColor: string, fireBreathWarningColor: string, fireBreathTimeCountDown: number, fireBreathSpeed: number}}
 */
const volcanolevel ={
    name: "Volcano",
    screen: volcano,
    canvas: volcanoCanvas,
    scoreElement: volcanoScore,
    mouseElement: volcanoMouseEaten,
    targetScore: 5,
    backgroundColor: "#171616",
    gridColor:"#593333",
    snakeHeadColor: "#15cf0e",
    snakeBodyColor: "#42812a",
    snakeSpeed: 145,
    poisonKey:"q",
    snakePoisonColor: "#a50dd8",
    snakePoisonSpeed: 20,
    snakePoisonDame:1,
    foodColor: "#ecd90a",
    obstaclesColor: "#80797a",
    obstacleColorCore:"#8a0c23",
    obstacles:[


        { x: 9, y: 5 },
        { x: 10, y: 5 },
        { x: 11, y: 5 },
        { x: 12, y: 5 },
        { x: 13, y: 5 },
        { x: 14, y: 5 },
        { x: 9, y: 20 },
        { x: 10, y: 20 },
        { x: 11, y: 20 },
        { x: 12, y: 20 },
        { x: 13, y: 20 },
        { x: 14, y: 20 },
        // { x: 19, y: 11 },
        // { x: 19, y: 10 },
        // { x: 19, y: 13 },
        // { x: 19, y: 12 }

    ],
    dragonColor: "#510715",
    dragonSize:1,
    dragonSpeed: 900,
    dragonStep:1,
    dragonHP: 10,
    fireBreathColor:"#f80321",
    fireBreathWarningColor: "#b52626",
    fireBreathTimeCountDown: 3500,
    fireBreathSpeed: 90,



};

const glassWorldLevel ={
    name: "GlassWorld",
    screen: glassWorld,
    canvas: glassWorldCanvas,
    scoreElement: glassWorldScore,
    mouseElement: glassWorldMouseEaten,
    targetScore: 6,
    backgroundColor: "#0aecec",
    gridColor: "#1e46ca",
    snakeHeadColor: "#391603",
    snakeBodyColor: "#b10a37",
    snakeSpeed: 145,
    foodColor: "#da0e32",
    obstaclesColor: "#ededed",
    obstacles:[]
}
/**
 * this is array for all level
 * @type {{village: {name: string, screen: HTMLElement, canvas: HTMLElement, scoreElement: HTMLElement, targetScore: number, mouseElement: HTMLElement, backgroundColor: string, gridColor: string, snakeHeadColor: string, snakeBodyColor: string, snakeSpeed: number, foodColor: string, obstaclesColor: string, obstacles: *[]}, forest: {name: string, screen: HTMLElement, canvas: HTMLElement, scoreElement: HTMLElement, targetScore: number, mouseElement: HTMLElement, backgroundColor: string, gridColor: string, snakeHeadColor: string, snakeBodyColor: string, snakeSpeed: number, hasKnight: boolean, knightSpeed: number, knightAppearScore: number, knightImage: HTMLImageElement, foodColor: string, obstaclesColor: string, obstacleColorCore: string, obstacles: [{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]}, swarm: {name: string, screen: HTMLElement, canvas: HTMLElement, scoreElement: HTMLElement, targetScore: number, mouseElement: HTMLElement, backgroundColor: string, gridColor: string, snakeHeadColor: string, snakeBodyColor: string, snakeSpeed: number, foodColor: string, obstaclesColor: string, obstacleColorCore: string, obstacles: [{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},null,null,null,null,null,null,null,null,null,null], hasSpider: boolean, spiderCount: number, spiderImage: HTMLImageElement, spiderSpeed: number}, cave: {name: string, screen: HTMLElement, canvas: HTMLElement, scoreElement: HTMLElement, targetScore: number, mouseElement: HTMLElement, backgroundColor: string, gridColor: string, snakeHeadColor: string, snakeBodyColor: string, snakeSpeed: number, foodColor: string, obstaclesColor: string, obstacleColorCore: string, obstacles: [{x: number, y: number, visible: boolean, phaseOffset: number},{x: number, y: number, visible: boolean, phaseOffset: number},{x: number, y: number, visible: boolean, phaseOffset: number},{x: number, y: number, visible: boolean, phaseOffset: number},{x: number, y: number, visible: boolean, phaseOffset: number},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], hasSpider: boolean, spiderCount: number, spiderImage: HTMLImageElement, spiderSpeed: number}, mineField: {name: string, screen: HTMLElement, canvas: HTMLElement, scoreElement: HTMLElement, targetScore: number, mouseElement: HTMLElement, backgroundColor: string, gridColor: string, snakeHeadColor: string, snakeBodyColor: string, snakeSpeed: number, foodColor: string, obstaclesColor: string, obstacleColorCore: string, obstacles: [{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], mineCount: number, mineColor: string, mineTimeCountDown: number}, volcano: {name: string, screen: HTMLElement, canvas: HTMLElement, scoreElement: HTMLElement, mouseElement: HTMLElement, targetScore: number, backgroundColor: string, gridColor: string, snakeHeadColor: string, snakeBodyColor: string, snakeSpeed: number, poisonKey: string, snakePoisonColor: string, snakePoisonSpeed: number, snakePoisonDame: number, foodColor: string, obstaclesColor: string, obstacleColorCore: string, obstacles: [{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},{x: number, y: number},null,null,null,null,null,null,null], dragonColor: string, dragonSize: number, dragonSpeed: number, dragonStep: number, dragonHP: number, fireBreathColor: string, fireBreathWarningColor: string, fireBreathTimeCountDown: number, fireBreathSpeed: number}}}
 */
const levels ={
    village:villageLevel,
    forest: forestLevel,
    swarm:swarmLevel,
    cave:caveLevel,
    mineField:mineFieldLevel,
    volcano: volcanolevel,
    glassWorld: glassWorldLevel
}

/**
 * this is function start game use for multi level. start level create loop for game and create initial value
 * input: levelName
 * output: start level have levelName
 * @param levelName
 */
function startLevel(levelName){
        if (gameLoop !== null){
            clearInterval(gameLoop);
            gameLoop = null;
        }
        if (knightLoop !== null) {
            clearInterval(knightLoop);
            knightLoop = null;
        }

        if (spiderLoop !== null) {
            clearInterval(spiderLoop);
            spiderLoop = null;
        }

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
        if (dragonLoop !== null){
            clearInterval(dragonLoop);
            dragonLoop = null;
        }
        if (dragonFireLoop !== null){
            clearInterval(dragonFireLoop);
            dragonFireLoop = null;
        }
        if (fireMoveLoop !== null){
            clearInterval(fireMoveLoop);
            fireMoveLoop = null;
        }











        currentLevelName=levelName;
        activeLevel=levels[levelName];
        activeCtx=activeLevel.canvas.getContext("2d");




        selectLevel.hidden=true;
        menu.hidden = true;
        guideScreen.hidden=true;
        winScreen.hidden = true;
        gameOverScreen.hidden = true;
        forest.hidden = true;
        village.hidden = true;
        swarm.hidden = true;
        cave.hidden = true;
        mineField.hidden = true;
        volcano.hidden = true;
        glassWorld.hidden = true;
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
        knight = null;
        spiders= [];
        mines=[];
        poisonsExist=[];
        fireExist=[];

        if (currentLevelName === "cave"){
            levelStartTime=Date.now();
            for (const obstacle of activeLevel.obstacles){
                obstacle.visible = true;
            }
            updateObstacles();
            obstacleLoop= setInterval(updateObstacles, 100);
        }
        if(activeLevel.hasSpider){
            createSpider();
            spiderLoop = setInterval(moveSpider, activeLevel.spiderSpeed);
        }
        if (activeLevel.hasKnight){
            spawnKnight();
        }
        createDragon();
        createFood();
        gameLoop = setInterval(moveSnake, activeLevel.snakeSpeed);
        if (currentLevelName === "mineField"){
            startCreateMine();
            startMineCountDown();
        }
        if (currentLevelName === "volcano"){
            snakePoisonLoop= setInterval(movePoison,activeLevel.snakePoisonSpeed);
            dragonLoop = setInterval(moveDragon,activeLevel.dragonSpeed);
            dragonFireLoop = setInterval(fireBreath,activeLevel.fireBreathTimeCountDown);
            fireMoveLoop = setInterval(moveFire,activeLevel.fireBreathSpeed);
        }
        drawGame();
    }


/**
 * this is function guideline for player base on level name
 * input: levelName
 * output: guide screen
 * @param levelName
 */
function guideLevelGame(levelName){
    menu.hidden=true;
    selectLevel.hidden=true;
    winScreen.hidden = true;
    gameOverScreen.hidden = true;
    forest.hidden = true;
    village.hidden = true;
    swarm.hidden = true;
    cave.hidden = true;
    mineField.hidden = true;
    volcano.hidden = true;
    guideScreen.hidden=false;
    selectLevelName=levelName;
    if(selectLevelName === "village"){
        guideMessage.textContent = "Chào mừng bạn đến Level 1 Village. Màn  này cần bạn đạt đủ 600 điểm để hoàn thành!";

    }else if(selectLevelName === "forest"){
        guideMessage.textContent = "Chào mừng bạn đến Level 2 Forest. Màn  này sẽ xuất hiện 1 kỵ sĩ sẽ liên tục  đuổi theo bạn để tiêu diệt bạn. Nhiệm vụ của bạn là không để kỵ sĩ bắt được (kỹ sĩ sẽ liên tục đuổi theo khi kỵ sĩ chạm vào đầu rắn sẽ chết) và đạt đủ 500 điểm để hoàn thành";


    }else if(selectLevelName === "swarm"){
        guideMessage.textContent = "Chào mừng bạn đến Level 3 Swarm. Màn này sẽ xuất hiện nhện độc và sẽ di chuyển 1 cách ngẫu nhiên. Nhiệm vụ của bạn là né tránh nhện( Nhện chạm vào bất kỳ bộ phận nào của rắn thì rắn sẽ chết) và đạt đủ 500 điểm để hoàn thành  ";

    }else if (selectLevelName === "cave"){
        guideMessage.textContent = "Chào mừng bạn đến Level 4 Cave. Màn này sẽ xuất  nhện độc và các bức tường đá sẽ liên tục biến mất và xuất hiện theo chu kỳ. Nhiệm vụ của bạn là né tránh nhện độc và ghi nhớ chù kỳ xuất hiện và ẩn đi của các bức tường để né tránh và đạt đủ 500 điểm để hoàn thành";

    }else if(selectLevelName === "mineField"){
        guideMessage.textContent = "Chào mừng bạn đến Level 5 Mine Field. Màn này sẽ xuất hiện mìn và trên mìn sẽ có hiện thời gian đếm ngược tới thời gian nổ của mìn.Nhiệm vụ của bạn là chú ý quan sát thời gian đến ngược của mìn nếu chưa về 0 thì mìn an toàn nếu mìn về 0 thì sẽ phát nổ bạn cần tránh khỏi phạm vi vụ nổ, nếu không rắn sẽ chết. Bạn cần đạt 600 điểm để hoàn thành";

    }else if(selectLevelName === "volcano"){
        guideMessage.textContent = "Chào mừng đến level 6 Volcano. Màn này sẽ xuất hiện rồng và trên người nó có hiện số điểm sinh lực, rồng có thể phun lửa ra 8 hướng sau 1 khoản thời gian(chạm phải tường sẽ bị chặn lại), rồng sẽ chết khi sinh lực về 0. Màn này rắn của bạn có khả năng phun độc khi bạn nhấn Q để gây sát thương lên rồng. Nhiệm vụ của bạn là sống sót trước sự công kích của rồng(né tránh sau tường tránh lửa của rồng hoặc phun độctiêu diệt rồng) và đạt 500 điểm để hoàn thành";

    }else if (selectLevelName === "glassWorld"){
        guideMessage.textContent ="Chào mừng đến level 7 Glass World. Màn này khi bạn ăn thức ăn thì rắn sẽ bị đổi đầu thành đuổi và đuôi thành đầu. Nhiệm vụ của bạn là đạt đủ điểm để hoàn thành!";
    }
}

/**
 * this is function win game use for player achieve score
 */
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
        nextLevelButton.hidden = false;
    }else if(currentLevelName === "glassWorld"){
        winMessage.textContent = "YOU HAVE COMPLETED GLASS WORLD!";
        nextLevelButton.hidden = true;
    }
}

/**
 * this is function lose game
 */
function loseGame(){
    stopGameLoop();
    activeLevel.screen.hidden = true;
    selectLevel.hidden=true;
    winScreen.hidden = true;
    gameOverScreen.hidden = false;
    gameOverScore.textContent = score*100;

}

/**
 * this is function end for all loop when creating in start level
 */
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

/**
 * this is function back to menu for all screen
 */
function backToMenu(){
    stopGameLoop();
    village.hidden = true;
    forest.hidden = true;
    swarm.hidden = true;
    cave.hidden = true;
    mineField.hidden = true;
    volcano.hidden = true;
    glassWorld.hidden = true;
    winScreen.hidden = true;

    gameOverScreen.hidden = true;
    menu.hidden = false;
    knight=null;
    activeLevel=null;
    activeCtx = null;
}


/**
 * this is function draw snake
 */
function drawSnake(){
    for (let i = 0; i < snake.length; i++) {
        const part = snake[i];
        if(i===0){
            activeCtx.fillStyle = activeLevel.snakeHeadColor;
        }else{
            activeCtx.fillStyle = activeLevel.snakeBodyColor;
        }
        activeCtx.fillRect(part.x*cellSize+1,part.y*cellSize+1,cellSize-2,cellSize-2);
    }
}

/**
 * this is function create food at random location
 * prevent stack over flow by limitloop=1000
 */
function createFood(){
    let newFood;
    let isBlocked = true;
    let limitLoop=0;
    while(isBlocked&&limitLoop<1000){
        limitLoop++;
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

    }
    food = newFood;
}

/**
 * this is function draw for food
 */
function drawFood(){
    activeCtx.fillStyle = activeLevel.foodColor;
    activeCtx.fillRect(food.x*cellSize+1,food.y*cellSize+1, cellSize -2, cellSize-2);
//     ctx.drawImage(mouseImage,food.x * cellSize +1, food.y * cellSize+1, cellSize -2, cellSize -2);
}

/**
 * this is function draw for background
 */
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

/**
 * this is function draw obstacle
 */
function drawObtacles(){
    for(const obstacle of activeLevel.obstacles){
        if (obstacle.visible===false){
            continue;
        }
        activeCtx.fillStyle = activeLevel.obstaclesColor;
        activeCtx.fillRect(obstacle.x*cellSize+1,obstacle.y*cellSize+1,cellSize-2,cellSize-2);
        // this is more design
        activeCtx.fillStyle = activeLevel.obstacleColorCore;
        activeCtx.fillRect(obstacle.x*cellSize+4,obstacle.y*cellSize+4,cellSize-8,cellSize-8);

    }
}

/**
 * this is function draw for all component in game
 */
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
    drawFire();
}

/**
 * this is function move for snake and calculate when snake have food
 */
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
        if (obstacle.x === newHead.x && obstacle.y === newHead.y){
            return true;
        }
         if (currentLevelName === "cave" && obstacle.visible){
             return snake.some(segment => segment.x === obstacle.x && segment.y === obstacle.y);
         }
         return false;

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
    const dragonSize = activeLevel.dragonSize;
    // check dragon
    const hitDragon =dragon!==null&&Math.abs(dragon.x-newHead.x)<=dragonSize && Math.abs(dragon.y-newHead.y)<=dragonSize;
    if(hitDragon){
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
        // if(activeLevel.hasKnight&&score>=activeLevel.knightAppearScore&&knight===null){
        //     spawnKnight();
        // }
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

/**
 * this is special for level 2
 * @returns {{x: number, y: number}}
 */
/**
 * this is function create location initial knight base on create food
 * @returns {{x: number, y: number}}
 */
function createKnight(){
    let locationKnight;
    let isBlocked=true;
    let limitLoop =0;
    while(isBlocked&&limitLoop<1000){
        limitLoop++;
        isBlocked = false;
        locationKnight =  {
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
        };
        for (const segment of snake) {
            if (
                segment.x === locationKnight.x &&
                segment.y === locationKnight.y
            ) {
                isBlocked = true;
                break;
            }
        }
        if (!isBlocked) {
            for (const obstacle of activeLevel.obstacles) {
                if (
                    obstacle.x === locationKnight.x &&
                    obstacle.y === locationKnight.y
                ) {
                    isBlocked = true;
                    break;
                }
            }
        }
    }
    return locationKnight;
}

/**
 * this is function find step valid for knight base on compare distance manhattan direction valid
 * @returns {{x: *, y: *}}
 */
function findKnightNextStep(){
    const directions =[
        {x:0, y:-1},
        {x:0, y:1},
        {x:-1,y:0},
        {x:1,y:0},
    ];
    const target = snake[0];
    let stepKnight=[];
    for (let i=0; i<directions.length; i++){
        const direction = directions[i];
        let nextStepKnightX = knight.x+direction.x;
        let nextStepKnightY = knight.y+direction.y;
        let distanceTarget = Math.abs(target.x-nextStepKnightX)+Math.abs(target.y-nextStepKnightY);
        stepKnight.push({nextStepKnightX,nextStepKnightY,distanceTarget});
    }
    let mostDistance=10000000;
    let locationMostDistance=0;
    for (let i=0; i<stepKnight.length; i++){
        nextStep = stepKnight[i];
        if (nextStep.nextStepKnightX<0||nextStep.nextStepKnightX>=gridSize||nextStep.nextStepKnightY<0||nextStep.nextStepKnightY>=gridSize){
            continue;
        }
        const hitObtacle = activeLevel.obstacles.some(obstacle =>nextStep.nextStepKnightX===obstacle.x&&nextStep.nextStepKnightY===obstacle.y);
        if (hitObtacle){
            continue;
        }
        const hitSnake = snake.some(segment=>segment.x===nextStep.nextStepKnightX&&segment.y===nextStep.nextStepKnightY);
        if (hitSnake){
            loseGame();
            return;
        }
        if (nextStep.distanceTarget<=mostDistance){
            mostDistance = nextStep.distanceTarget;
            locationMostDistance = i;
        }
    }
    let newPositionKnight = {x: stepKnight[locationMostDistance].nextStepKnightX, y:stepKnight[locationMostDistance].nextStepKnightY};
    return{x:newPositionKnight.x, y:newPositionKnight.y};
}

/**
 * this is function move knight base on step has been found in function findKnightNextStep
 */
function moveKnight(){
    if(knight===null || activeLevel===null){
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

/**
 * this is function draw knight
 */
function drawKnight(){
    if(knight === null || !activeLevel.hasKnight){
        return;
    }
    const imageKnight = activeLevel.knightImage;
    const x = knight.x*cellSize;
    const y = knight.y*cellSize;
    activeCtx.drawImage(imageKnight, x,y,cellSize,cellSize);
}

/**
 * this is function spawn knight because i plan to achieve score when knight appear
 */
function spawnKnight(){
    if (knight !== null || !activeLevel.hasKnight){
        return;
    }
    knight = createKnight();
    drawGame();
    knightLoop = setInterval(moveKnight, activeLevel.knightSpeed);
}


/**
 * this is special for level 3
 */
/**
 * this is function create spiders random in map base on create food
 */
function createSpider(){
    spiders = [];
    for (let i=0; i < activeLevel.spiderCount; i++){
        let spiderLocation;
        let isBlocked=true;
        let limitLoop=0;
        while(isBlocked&&limitLoop<1000){
            limitLoop++;
            isBlocked = false;
            spiderLocation = {x:Math.floor(Math.random()*gridSize),
                y:Math.floor(Math.random()*gridSize)};
            for (const segment of snake){
                if(spiderLocation.x===segment.x && spiderLocation.y===segment.y){
                    isBlocked = true;
                    break;
                }
            }
            for (const obstacle of activeLevel.obstacles){
                if (spiderLocation.x===obstacle.x && spiderLocation.y===obstacle.y){
                    isBlocked = true;
                    break;
                }
            }
        }
        spiders.push(spiderLocation);
    }
}

/**
 * this is function draw for all spider
 */
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

/**
 * this is function move for all spiders
 * choose random direction in all directions. spider move when direction valid and not move when direction not valid
 */
function moveSpider(){
    if (!activeLevel.hasSpider){
        return;
    }
    const directions =  [
        {x:0, y:-1},
        {x:0, y:1},
        {x:-1, y:0},
        {x:1,y:0}
    ]
    for ( const spider of spiders){
        let randomIndex = Math.floor(Math.random()*directions.length);
        const direction = directions[randomIndex];
        const nextDirectionX = spider.x+direction.x;
        const nextDirectionY = spider.y+direction.y;
        let hitWall = false;
        let hitFood = false;
        if(nextDirectionX<0|| nextDirectionX>=gridSize||nextDirectionY<0|| nextDirectionY>=gridSize){
            hitWall = true;
        }
        if (food.x===nextDirectionX && food.y===nextDirectionY){
            hitFood = true;
        }
        const hitObtacle = activeLevel.obstacles.some(obtacle=>{
            if(currentLevelName==="cave"&&obtacle.visible===false){
                return false;
            }
            return obtacle.x===nextDirectionX&&obtacle.y===nextDirectionY;
        });
        if (hitWall===false&&hitFood===false&&hitObtacle===false){
            spider.x=nextDirectionX;
            spider.y=nextDirectionY;
        }






        const hitSnake = snake.some(segment => segment.x === spider.x&& segment.y===spider.y);
        if (hitSnake){
            loseGame();
            return;
        }
    }


    drawGame();
}


/**
 * this is special for level 4
 */

/**
 * this is function update status for obstacle by cycle
 * cycle 3s show, 3s hidden: full cycle 6s
 */
function updateObstacles(){
    const elapedTime =(Date.now()-levelStartTime)/1000;
    for(const obstacle of activeLevel.obstacles){
        const time = elapedTime + obstacle.phaseOffset;
        const cycleTime = time % 6;
        if (cycleTime<3){
            obstacle.visible=true;
        }else{
            obstacle.visible=false;
        }
    }
        drawGame();
}

/**
 * this is special for level 5
 */
/**
 * this is function create mine.
 * check mines not explosion and count mines achieve count mine in game config
 * create mines location valid base on create food
 */
function createMines(){
    const activeMines = mines.filter(mine => mine.exploding===false);
    if(activeMines.length>=activeLevel.mineCount){
        return;
    }
    let x;
    let y;
    let validPosition=false;
    let limitLoop = 0;
    while(validPosition===false && limitLoop<100){
        limitLoop++;
        x=Math.floor(Math.random()*(gridSize-2)+1);
        y=Math.floor(Math.random()*(gridSize-2)+1);
        const isSnake = snake.some(segment => segment.x===x && segment.y===y);
        const isFood = food.x===x&&food.y===y;
        const isObstacle = activeLevel.obstacles.some(obstacle=>obstacle.x===x && obstacle.y===y);
        const isMine = mines.some(mine => mine.x===x && mine.y===y);
        if(isSnake===false&&isFood===false&&isObstacle===false&&isMine===false){
            validPosition=true;
        }
    }
    if (validPosition){
        mines.push({x: x, y: y, exploding: false, timeLeft: activeLevel.mineTimeCountDown, explosionTime:1});
    }

}

/**
 * this is function update status for mines
 * check mine is exploion and set status and minus time left
 */
function updateMines(){
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

/**
 * this is function check snake in exploision to lose game :)))
 * @returns {boolean}
 */
function checkMineExplosion(){
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

/**
 * this is function draw for mines
 */
function drawMines(){
    activeCtx.textAlign="center";
    activeCtx.textBaseline="middle";
    for (const mine of mines){
        if (mine.exploding===false){
            activeCtx.fillStyle = activeLevel.mineColor;
            activeCtx.fillRect(mine.x*cellSize,mine.y*cellSize,cellSize,cellSize);
            activeCtx.fillStyle="white";
            activeCtx.fillText(mine.timeLeft,mine.x*cellSize+(cellSize/2),mine.y*cellSize+(cellSize/2));
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

/**
 * this is function start create mine and set interval. i'm stupid when write it
 */
function startCreateMine(){
    createMines();
    mineSpawnTimer = setInterval(() => {createMines();},1000);
}

/**
 * this is function count down for mine
 */
function startMineCountDown(){
    if (mineCountDownTimer!==null){
        clearInterval(mineCountDownTimer);
        mineCountDownTimer = null;
    }
    mineCountDownTimer = setInterval(() => {updateMines(); drawGame();},500);
}

/**
 * this is special for level 6
 */
/**
 * this is function define for skill shoot of snake
 */
function  shootPoison(){
    const headSnake = snake[0];
    poisonsExist.push({x: headSnake.x, y: headSnake.y,directionPoisonX:direction.x,directionPoisonY:direction.y});
    drawGame();
}

/**
 * this is function move skill poison
 */
function movePoison(){
    for (let i=poisonsExist.length-1;i>=0;i--){
        const poison = poisonsExist[i];
        poison.x += poison.directionPoisonX;
        poison.y += poison.directionPoisonY;
        if (poison.x<0||poison.y<0||poison.x>=gridSize||poison.y>=gridSize) {
            poisonsExist.splice(i,1);
            continue;
        }
        const hitObstacle = activeLevel.obstacles.some(obstacle => obstacle.x===poison.x&&obstacle.y===poison.y);
        if(hitObstacle){
            poisonsExist.splice(i,1);
            continue;
        }
        const dragonSize = activeLevel.dragonSize;
        const hitDragon = Math.abs(dragon.x-poison.x)<=dragonSize
                                    && Math.abs(dragon.y-poison.y)<=dragonSize;
        if(hitDragon){
            dragonHP--;
            poisonsExist.splice(i,1);
        }
        if(dragonHP<=0){
            if (dragonFireLoop!==null){
                clearInterval(dragonFireLoop);
                dragonFireLoop = null;
            }
            if(fireMoveLoop!==null){
                clearInterval(fireMoveLoop);
                fireMoveLoop = null;
            }
            dragon=null;
            fireExist=[];
            drawGame();
            return;
        }
    }
    drawGame();
}

/**
 * this is function draw poison
 */
function drawPoison(){
    activeCtx.fillStyle = activeLevel.snakePoisonColor;
    for (const poison of poisonsExist){
        activeCtx.fillRect(poison.x*cellSize+1,poison.y*cellSize+1,cellSize-2,cellSize-2);
    }
}

/**
 * this is function create dragon base on create food
 */
function createDragon(){
    if (currentLevelName!=="volcano"){
        return;
    }
    const dragonSize = activeLevel.dragonSize;
    let isBlocked =true;
    let isSnake;
    let isObstacle=false;
    let isFood=false;
    let limitLoop =0;
    while(isBlocked){
        limitLoop++;
        dragon={
            x:dragonSize+Math.floor(Math.random()*(gridSize-2*dragonSize)),
            y:dragonSize+Math.floor(Math.random()*(gridSize-2*dragonSize))
        };
        isSnake=snake.some(segment=>Math.abs(segment.x-dragon.x)<=dragonSize &&Math.abs(segment.y-dragon.y)<=dragonSize);
        isObstacle=activeLevel.obstacles.some(obstacle => Math.abs(obstacle.x-dragon.x)<=dragonSize &&Math.abs(obstacle.y-dragon.y)<=dragonSize);
        isFood=Math.abs(food.x-dragon.x)<=dragonSize&&Math.abs(food.y-dragon.y)<=dragonSize;
        if (isSnake===false&&isObstacle===false&&isFood===false){
            isBlocked=false;
        }
    }

    dragonHP=activeLevel.dragonHP;



}

/**
 * this is function draw dragon
 */
function drawDraron(){
    if(dragon===null) {
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

/**
 * this is function move dragon random base on move spider
 */
function moveDragon(){
    if (dragon===null){
        return;
    }
    const step =activeLevel.dragonStep;
    const directions =  [
        {x:0, y:-step},
        {x:0, y:step},
        {x:-step, y:0},
        {x:step,y:0},
        {x:step, y:step},
        {x:-step,y:-step},
        {x:step,y:-step},
        {x:-step,y:step}
    ];
        const dragonSize = activeLevel.dragonSize;
        const randomIndex=Math.floor(Math.random()*directions.length);
        const direction = directions[randomIndex];
        const nextDragonStep ={x:dragon.x+direction.x,y:dragon.y+direction.y};
        const isObtacle = activeLevel.obstacles.some(obstacle=>Math.abs(obstacle.x-nextDragonStep.x)<=dragonSize &&Math.abs(obstacle.y-nextDragonStep.y)<=dragonSize);
        let hitWall=false;
        if (nextDragonStep.x-dragonSize<0||nextDragonStep.x+dragonSize>=gridSize||nextDragonStep.y-dragonSize<0||nextDragonStep.y+dragonSize>=gridSize){
            hitWall=true;
        }
        let hitFood=false;
        if (nextDragonStep.x===food.x||nextDragonStep.y===food.y){
            hitFood=true;
        }
        if (hitWall===false&&isObtacle===false&&hitFood===false){
            dragon.x=nextDragonStep.x;
            dragon.y=nextDragonStep.y;
            const hitSnake = snake.some(segment=>Math.abs(segment.x-dragon.x)<=dragonSize &&Math.abs(segment.y-dragon.y)<=dragonSize);
            if(hitSnake){
                loseGame();
                return;
            }
        }

    drawGame();
}

/**
 * this is function firebreath of dragon
 */
function fireBreath(){
    if (dragon===null){
        return;
    }
    const directions =  [
        {x:0, y:-1},
        {x:0, y:1},
        {x:-1, y:0},
        {x:1,y:0},
        {x:1, y:1},
        {x:-1,y:-1},
        {x:1,y:-1},
        {x:-1,y:1}
    ];
   for (let i=0;i<directions.length;i++){
       const direction = directions[i];
       fireExist.push({x:dragon.x,y:dragon.y, directionX:direction.x, directionY: direction.y});
   }
   drawGame();
}

/**
 *  this is function move fire base on move poison
 */
function moveFire(){
    if (fireExist===null){
        return;
    }
    for(let i=fireExist.length-1;i>=0;i--){
        const fire = fireExist[i];
        fire.x += fire.directionX;
        fire.y += fire.directionY;
        if (fire.x<0||fire.y<0||fire.x>=gridSize||fire.y>=gridSize) {
            fireExist.splice(i,1);
            continue;
        }
        const hitObstacle = activeLevel.obstacles.some(obstacle => obstacle.x===fire.x&&obstacle.y===fire.y);
        if(hitObstacle){
            fireExist.splice(i,1);
            continue;
        }
        const hitSnake = snake.some(segment=>segment.x===fire.x&&segment.y===fire.y);
        if(hitSnake){
            loseGame();
            return;
        }
    }
    drawGame();
}

/**
 * this is function draw fire
 */
function  drawFire(){
    activeCtx.fillStyle = activeLevel.fireBreathColor;
    for (const fire of fireExist){
        activeCtx.fillRect(fire.x*cellSize+1,fire.y*cellSize+1,cellSize-2,cellSize-2);
    }
}


/**
 * this is adlistener for event key
 */
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


/**
 * thi is add event for button
 */
startGame.addEventListener("click", function(){
    guideLevelGame("village");
});
playButton.addEventListener("click",
    function(){
        if(selectLevelName===null){
            return;
        }
        startLevel(selectLevelName)
    });
selectChapterButton.addEventListener("click",
    function (){
    menu.hidden=true;
    selectLevel.hidden=false;
    }
    );
level1Button.addEventListener("click",
    function (){
    guideLevelGame("village");
    // startLevel(selectLevelName);
    }
    );
level2Button.addEventListener("click",
    function (){
    guideLevelGame("forest");
        // startLevel(selectLevelName);
    }
);

level3Button.addEventListener("click",
    function (){
    guideLevelGame("swarm")
        // startLevel(selectLevelName);
    }
);

level4Button.addEventListener("click",
    function (){
    guideLevelGame("cave")
        // startLevel(selectLevelName);
    }
);
level5Button.addEventListener("click",
    function (){
    guideLevelGame("mineField")
    // startLevel(selectLevelName);
    }
    );
level6Button.addEventListener("click",
    function (){
    guideLevelGame("volcano")
    // startLevel(selectLevelName);
    });
level7Button.addEventListener("click",
    function (){
        guideLevelGame("glassWorld")
        // startLevel(selectLevelName);
    });

nextLevelButton.addEventListener("click",
    function(){
    if (currentLevelName==="village"){
        guideLevelGame("forest");
    }else if(currentLevelName==="forest"){
        guideLevelGame("swarm");
    }else if(currentLevelName==="swarm"){
        guideLevelGame("cave");
    }else if (currentLevelName==="cave"){
        guideLevelGame("mineField");
    }else if(currentLevelName==="mineField"){
        guideLevelGame("volcano");
    }else if(currentLevelName==="volcano"){
        guideLevelGame("glassWorld");
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
glassWorldBackToMenu.addEventListener("click",backToMenu);

