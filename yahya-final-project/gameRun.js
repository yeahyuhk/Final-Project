function gameRun() {


  background(70, 0, 100);

  // FOR PARALLAX BACKGROUND EFFECT
  // farthest background shapes
  if (landscapes2.length <= 6) {
    landscapes2.push(new landscape(lastWidth2 + 20, 50, 25, random(-100, -50), 5));
  }
  lastWidth3 = landscapes2[landscapes2.length - 1].platformEnd + random(80, 150);
  for (var b = landscapes2.length - 1; b >= 0; b--) {
    var l2 = landscapes2[b];
    l2.run();
    if (l2.isDead()) {
      //remove the particle
      landscapes2.splice(b, 1);
    }
  }
  
  // middle background shapes 
  if (landscapes.length <= 6) {
    landscapes.push(new landscape(lastWidth2, 50, 50, 40, 2.5));
  }
  lastWidth2 = landscapes[landscapes.length - 1].platformEnd + random(80, 150);
  for (var j = landscapes.length - 1; j >= 0; j--) {
    var l = landscapes[j];
    l.run();
    if (l.isDead()) {
      //remove the particle
      landscapes.splice(j, 1);
    }
  }

  if (firstRun == 1) {
    setup();
    speed += difficulty;
    firstRun = 0;
    accelerator = difficulty / 1000;
    frameCounter = 0;
  }
  speed += 0.002 + accelerator //CONSTANTLY INCREASES UNIVERSAL SPEED VARIABLE
  frameCounter += 1;

  //SCORE BOARD
  textAlign(LEFT);
  stroke(255);
  noFill();
  rectMode(CORNERS);
  rect(width - 150, 30, width + 10, 80);
  rect(width - 150, 90, width + 10, 135);

  noStroke();
  fill('white');
  textSize(28);
  text('Time: ' + score, width - 140, 60)
  text('Mode: ' + modename, width - 140, 120)

  // Platform generator
  // NEW PLATFORM IS CREATED AT THIS RATE and added to array
  // github code used as reference

  if (platforms.length <= 6) {
    platforms.push(new Platform(lastWidth, initial));
    initial = 0;
  }

  //provides previous platform information to next platform
  lastWidth = platforms[platforms.length - 1].platformEnd + random(80, 150);

  // inspired by particle examples on github
  // runs through platform array to display all platforms
  for (var i = platforms.length - 1; i >= 0; i--) {
    var p = platforms[i];
    p.run();
    if (p.isDead()) {
      //remove the particle
      platforms.splice(i, 1);
    }
  }

  //PLAYER FUNCTIONS

  if (frameCounter <= 180) {
    // player outline
    stroke(10, 50);
    fill(250, 50);
    ellipseMode(CORNER);
    ellipse(130, 210, 20, 20);

    //pre game countdown
    fill(20, 100);
    rect(0, 0, width, height);
    textAlign(CENTER);
    textSize(60);
    noStroke();
    fill(255);

    // pre game timer
    text(time, width / 2, height / 2);
    if (frameCounter % 60 === 0) {
      time -= 1;
    }
  }
  if (mouseIsPressed) {
    player.jump();
  }
  
  //starts afer 3 seconds
  if (frameCounter >= 175) {
    //initiates player
    player.run();
    //score counter
    if (frameCounter % 15 === 0) {
      score += .25;
    }
  }

}