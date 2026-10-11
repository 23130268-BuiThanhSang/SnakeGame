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
    menu.hidden = true;
    village.hidden = false;
    // thiss is delete all component exist in canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
//funtion define back to menu
function backToMenu(){
    village.hidden = true;
    menu.hidden = false;
}


// add listener for button
playButton.addEventListener("click", startGame);
backToMenuButton.addEventListener("click", backToMenu);