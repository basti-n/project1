/**
Constants 
**/
const CANVAS_BORDER_COLOUR = "black";
const CANVAS_BACKGROUND_COLOUR = "white";
const SNAKE_COLOR = "lightgreen";
const SNAKE_BORDER = "darkgreen";

let snake [
    {x:150, y:150},
    {x:140, y:150},
    {x:130, y:150},
    {x:120, y:150},
    {x:110, y:150}
]

// get the canvas element
var gameCanvas = document.getElementById("gameCanvas");

// return 2 dimensional drawing context
var ctx = gameCanvas.getContext("2d");

// Canvas background color
ctx.fillstyle = CANVAS_BACKGROUND_COLOUR;

// Canvas border color 
ctx.strokestyle = CANVAS_BORDER_COLOUR;

// Draw rectangle within Canvas
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

// Draw a border for Canvas 
ctx.strokeRect(0,0, gameCanvas.width, gameCanvas.height);

drawSnake(); 

function drawSnake () {
    //loop through all snake parts to draw
    snake.foreach(drawSnakePart)
}

function drawSnakePart (snakePart) {

    // define snake color
    ctx.fillstyle(SNAKE_COLOR);

    // define border color for snake
    ctx.strokestyle(SNAKE_BORDER);

    // Fill snake with color
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);

    // Fill border color of snake
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
