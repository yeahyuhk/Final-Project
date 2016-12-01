var speed = 1.5;
var player;
var initial = 200;
var framecount = 0;
var platforms = [];

function setup() {
  frameRate(60);
  createCanvas(700, 500);

  player = createVector(120, 350);
  initial = width;
}

function draw() {

  //BLUE BACKGROUND
  background(100, 150, 250);
  fill(255);

  //INCREASES SPEED
  if (frameCount % 2 === 0) {
    speed += .01;
    console.log(speed);
  }

  //FIRST GROUND BLOCK
  strokeWeight(2);
  stroke(60, 180, 50);
  fill(100, 220, 80);
  rectMode(CORNERS);

  if (initial >= 0) {
    rect(0, player.y, initial -= speed, height);
  }


  //VECTOR REFERENCE
  stroke(100, 200, 10);
  point(player.x, player.y);

  if (frameCount % 60 === 0) {
    platforms.push(new Platform(width + 30, speed));
  }
  for (var i = platforms.length - 1; i >= 0; i--) {
    console.log(platforms[i]);
    var p = platforms[i];
    p.run();
    if (p.isDead()) {
      //remove the particle
      particles.splice(i, 1);
    }
  }

  //PLAYER
  noStroke();
  fill('MAGENTA');
  rectMode(CORNER);
  rect(player.x - 10, player.y - 20, 20, 20)


  //GROUND LINE
  /*
  stroke(255);
  strokeWeight(1);
  line(0, player.y, width, player.y);
  */
}