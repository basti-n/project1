/**
Constants 
**/
const CANVAS_BORDER_COLOUR = "black";
const CANVAS_BACKGROUND_COLOUR = "white";
const SNAKE_COLOR = "lightgreen";
const SNAKE_BORDER = "darkgreen";

let snake = [
    {x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150},
    {x: 110, y: 150},
];

let dx = 10; 
let dy = 0;
let score = 0; 

// get the canvas element
var gameCanvas = document.getElementById("gameCanvas");

// return 2 dimensional drawing context
var ctx = gameCanvas.getContext("2d");

// Canvas background color
ctx.fillStyle = "white";

// Canvas border color 
ctx.strokestyle = "black";

// Draw rectangle within Canvas
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

// Draw a border for Canvas 
ctx.strokeRect(0,0, gameCanvas.width, gameCanvas.height);

function clearCanvas() {

// Canvas background color
ctx.fillStyle = "white";
ctx.strokestyle = "black";
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
ctx.strokeRect(0,0, gameCanvas.width, gameCanvas.height);

}

/** Finding out the pressend KeyCode 
window.addEventListener("keydown", function keyCode(e) {
    console.log(e.keyCode);
});
**/

main();

createFood();

document.addEventListener("keydown", changeDirection);


function main(){
    if(didGameEnd()) return;

    setTimeout(function OnTick() {
        
        clearCanvas();
        drawFood();
        advanceSnake();
        drawSnake();

        main();
    }, 200);
};

function drawSnake() {
    //loop through all snake parts to draw
    snake.forEach(drawSnakePart)
}

function drawSnakePart(snakePart) {

    // define snake color
    ctx.fillStyle = SNAKE_COLOR;

    // define border color for snake
    ctx.strokestyle = SNAKE_BORDER;

    // Fill snake with color
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);

    // Fill border color of snake
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode; 
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0; 
    }

    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10; 
        dy = 0; 
    }

    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0; 
        dy = -10;
    }

    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;  
        dy = 10;
    }

};

function advanceSnake () {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy}
    
    snake.unshift(head);

    const didEatFood = snake[0].x === foodX && snake[0].y === foodY
        if(didEatFood){ 
            score += 10;
            document.getElementById("score").innerHTML = "Score: " + score; 

            createFood();
        }   else {
            snake.pop();
            };    
        };

function randomTen (min, max) {
    return Math.round((Math.random() * (max - min ) + min) / 10) * 10;
};
    
function createFood() {
    foodX = randomTen(0, gameCanvas.width -10);
    foodY = randomTen(0, gameCanvas.height -10);

    snake.forEach(function isFoodOnSnake(part) {
        const FoodIsOnSnake = part.x == foodX && part.y == foodY 
        if(FoodIsOnSnake)
            createFood();
    });
};

function drawFood() {
    ctx.fillStyle = "red";
    ctx.strokestyle = "darkred"; 

    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
};

function didGameEnd() {
    for (let i = 4 ; i < snake.length; i++) {
        const didCollide = snake[0].x === snake[i].x && snake[0].y === snake[i].y
        if(didCollide)
            return true;
    }

    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > gameCanvas.width -10;
    const hitTopWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > gameCanvas.height -10;
    const hitWall = hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;

    if(hitWall)
        return true;
};