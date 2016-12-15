var player, calculator, accelerator, modename, initial, gameOver, restart;
var platforms = [];
var speed = 4;
var lastWidth;
var difficulty = 1;
var score = 0;
var time = 3;
var start = false;
var firstRun = 1;
var frameCounter = 0;


function reset() {
  platforms = [];
  speed = 4;
  ground = random(260, 500);
  lastwidth = 70;
  score = 0;
  time = 3;
  start = false;
  player.alive = true;
  player.y = 230;
  firstRun = 1;
  initial = 1500;
  gameOver = false;
  restart = false;

}

function preload() {
  calculator = loadFont('data/calculator.ttf');
}

function setup() {
  textFont(calculator);
  frameRate(60);
  createCanvas(700, 500);

  initial = 1500;

  // parameters for first platform
  lastWidth = 40;

  //creates player
  player = new Player();

}

function draw() {

  if (restart === true) {
    reset();
  } else if (player.y >= height - 20) {
    gameEnd();
  } else if (start === false && player.alive === true) {
    newGame();
  } else {
    gameRun();

    if (difficulty == 1) {
      modename = 'EASY';
    } else if (difficulty == 2) {
      modename = 'MEDIUM';
    } else {
      modename = 'HARD';
    }

  }
}

//JUMP CONTROLS 
function keyPressed() {
  if (key === ' ' || keyCode === UP_ARROW) {
    if (start === true && player.alive === true) {
      player.jump();
    } else if (gameOver === true) {
      restart = true;
    }
  }
}


function newGame() {

  //MAIN MENU AND GAME MODES
  background(0);
  textSize(85);
  fill(255);
  textAlign(CENTER);
  text("VECTOR RUN", width / 2, height / 4);
  rectMode(CORNER);

  noFill();
  textSize(40);
  stroke(40, 180, 250);
  rect(200, 170, 300, 70);
  fill(255);
  text('EASY', width / 2, 215);

  noFill();
  stroke(50, 170, 50);
  rect(200, 275, 300, 70);
  fill(255);
  text('MEDIUM', width / 2, 320);

  noFill();
  stroke('red');
  rect(200, 380, 300, 70);
  fill(255);
  text('HARD', width / 2, 425);

  //MODE SELECT
  if (mouseIsPressed && (mouseX >= 200 && mouseX <= 500)) {
    if (mouseY >= 170 && mouseY <= 240) {
      difficulty = 1;
      start = true;
    }
    if (mouseY >= 275 && mouseY <= 345) {
      difficulty = 2;
      start = true;
    }
    if (mouseY >= 380 && mouseY <= 450) {
      difficulty = 3;
      start = true;
    }
  }
}


function gameEnd() {
  background(250, 50, 50, 15);
  textAlign(CENTER);
  textSize(70);
  fill(255);
  noStroke();
  text("YOU DIED", width / 2, height / 4);

  //restart button
  noFill();
  stroke(255);
  rect(200, 345, 300, 40);
  noStroke();
  fill(255);
  textSize(25);
  text('RESTART', width / 2, 370);

  textSize(50);
  text("Score: " + score + " seconds", width / 2, (height / 2));
  text("Mode: " + modename, width / 2, (height / 2) - 50);
  gameOver = true;

  if (mouseIsPressed && gameOver === true) {
    restart = true;
    gameOver = false;
  }
}