var speed = 1.5; // UNIVERSAL SPEED VARIABLE
var player;
var initial;     // WIDTH VALUE FOR FIRST PLATFORM
var framecount = 0;
var platforms = [];  // ARRAY FOR STORING NEWLY CREATED PLATFORMS

function setup() {
  frameRate(60);
  createCanvas(700, 500);

  player = createVector(120, 350);
  initial = width;
}

function draw() {

  //BLUE BACKGROUND
  background(70, 100, 210);
  fill(255);

  speed += 0.005   //CONSTANTLY INCREASES UNIVERSAL SPEED VARIABLE

  // APPEARANCE FOR PLATFORMS // GREEN
  strokeWeight(2);
  stroke(60, 180, 50);
  fill(100, 220, 80);
  rectMode(CORNERS);

  // DISPLAYS FIRST PLATFORM BLOCK UNTIL IT GOES OFF SCREEN (initial is width)
  if (initial >= 0) {  
    rect(0, player.y, initial -= speed, height);
  }

  //VECTOR REFERENCE
  //stroke(100, 200, 10);
  //point(player.x, player.y);


  // currently, I'm having trouble with this
  // I want the platforms to show up faster over time using SPEED
  // rather than be created a constant rate
  
  if (frameCount % 60 === 0) {  // NEW PLATFORM IS CREATED AT THIS RATE
    platforms.push(new Platform(width + 30, speed));  // NEW PLATFORM IS ADDED TO PLATFORM ARRAY
  }                                                   // WITH CURRENT SPEED
                                                      // i want this speed to change over time
 
  // taken from particle examples on github
  for (var i = platforms.length - 1; i >= 0; i--) {
  
    var p = platforms[i];
    p.run();
    
    if (p.isDead()) {
      //remove the particle
      platforms.splice(i, 1);
    }
  }

  //PLAYER
  noStroke();
  fill('MAGENTA');
  rectMode(CORNER);
  rect(player.x - 10, player.y - 20, 20, 20)


}