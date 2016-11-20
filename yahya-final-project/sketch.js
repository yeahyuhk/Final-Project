var speed = 1.5;
var player;
var initial = 200;
var framecount = 0;

function setup() {
  createCanvas(700, 500);
  player = createVector(120, 350);
  frameRate(60);
  initial = width;
}

function draw() {

  if (frameCount % 2 === 0) {
    speed += .01;
    console.log(speed);
  }


  //BLUE BACKGROUND
  background(100, 150, 250);
  fill(255);

  //GROUND
  noStroke();
  fill(100, 220, 80);
  rectMode(CORNERS);

  if (initial >= 0) {
    rect(0, player.y, initial -= speed, height);
  }


  //PLAYER
  noStroke();
  fill('MAGENTA');

  rectMode(CORNER);
  rect(player.x - 10, player.y - 20, 20, 20)

  //VECTOR REFERENCE
  stroke(100, 200, 10);
  point(player.x, player.y);


  //GROUND LINE
  /*
  stroke(255);
  strokeWeight(1);
  line(0, player.y, width, player.y);
  */
}