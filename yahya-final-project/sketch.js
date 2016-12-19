var player, calculator, accelerator, modename, initial, initial2, gameOver, restart;
var platforms = [];
var landscapes = [];
var landscapes2 = [];
var speed = 4;
var lastWidth, lastWidth2;
var difficulty = 1;
var score = 0;
var time = 3;
var start = false;
var firstRun = 1;
var frameCounter = 0;


function reset() {
  platforms = [];
  landscapes = [];
  landscapes2 = [];
  speed = 4;
  ground = random(260, 500);
  lastWidth = 70;
  lastWidth2 = 70;
  lastwidth3 = 70;
  score = 0;
  time = 3;
  start = false;
  player.alive = true;
  player.y = 230;
  firstRun = 1;
  initial = 1500;
  initial2 = 1500;
  initial3 = 1500;

  gameOver = false;
  restart = false;

}

function preload() {
  calculator = loadFont('data/calculator.ttf');
}

function setup() {
  textFont(calculator);
  frameRate(60);
  //  createCanvas(700, 500);
  createCanvas(windowWidth, windowHeight);

  if (difficulty == 5) {
    initial = 2000;
  } else {
    initial = 1500;
  }
  // parameters for first platform
  lastWidth = 40;
  lastWidth2 = 40;
  lastWidth3 = 40;

  //creates player
  player = new Player();

}

function draw() {

  if (restart === true) {
    reset();
  } else if (player.y >= 570) {
    gameEnd();
  } else if (start === false && player.alive === true) {
    newGame();
  } else {
    gameRun();

    if (difficulty == 1) {
      modename = 'EASY';
    } else if (difficulty == 3) {
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
  text("VECTOR RUN", width / 2, 100);
  rectMode(CENTER);

  noFill();
  textSize(40);
  stroke(40, 180, 250);
  rect(width / 2, 170, 300, 70);
  fill(255);
  text('EASY', width / 2, 180);

  noFill();
  stroke(50, 170, 50);
  rect(width / 2, 275, 300, 70);
  fill(255);
  text('MEDIUM', width / 2, 285);

  noFill();
  stroke('red');
  rect(width / 2, 380, 300, 70);
  fill(255);
  text('HARD', width / 2, 390);

  if (windowHeight < 400) {
    rectMode(CORNER);
    noStroke();
    fill(0, 150);
    rect(0, 0, width, height);
    stroke(255);
    fill(255);
    textSize(55);
    text('Window is too small!', width / 2, height / 2);
  }

  //MODE SELECT
  if (mouseIsPressed && (mouseX >= (width / 2 - 150) && mouseX <= (width / 2 + 150))) {
    if (mouseY >= 135 && mouseY <= 205) {
      difficulty = 1;
      start = true;
    }
    if (mouseY >= 240 && mouseY <= 310) {
      difficulty = 3;
      start = true;
    }
    if (mouseY >= 345 && mouseY <= 425) {
      difficulty = 5;
      start = true;
      initial = 2000;
    }
  }
}

function gameEnd() {
  background(240, 10, 255, 15);
  textAlign(CENTER);
  textSize(70);
  fill(255);
  noStroke();
  text("YOU DIED", width / 2, height / 4);

  //restart button
  rectMode(CENTER);
  noFill();
  stroke(255);
  rect(width / 2, 3.5 * height / 4, 300, 40);
  noStroke();
  fill(255);
  textSize(25);
  text('RESTART', width / 2, 3.55 * height / 4);

  textSize(50);
  text("Score: " + score + " seconds", width / 2, (height / 2));
  text("Mode: " + modename, width / 2, (height / 2) - 50);
  gameOver = true;

  if (mouseIsPressed && gameOver === true) {
    restart = true;
    gameOver = false;
  }
}