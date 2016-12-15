// Daniel Shiffman's Flappy Bird code used as reference
// https://github.com/CodingRainbow/Rainbow-Code/blob/master/challenges/CC_31_FlappyBird_p5.js/bird.js#L10


function Player() {
  this.x = 150;
  this.y = 230.0;
  this.contact = false;
  this.gravity = createVector(0, 0.6);
  this.velocity = createVector(0.6);
  this.jumpHeight = 12.0;
  this.alive = true;
  this.max = 1;

  this.run = function() {
    this.display();
    this.update();

  }

  this.display = function() {
    // DRAWS THE PLAYER
    strokeWeight(2);
    stroke(1);
    fill('MAGENTA');

    ellipseMode(CORNER);
    ellipse(this.x - 20, this.y - 20, 20, 20);
  }

  this.update = function() {
    this.velocity.y += this.gravity.y;
    this.y += this.velocity.y;
    this.velocity.limit(max);
    // WILL ALLOW JUMP ONLY IF PLAYER IS IN CONTACT WITH PLATFORM
    if (((this.y <= platforms[0].platformHeight + 10.0 && this.y >= platforms[0].platformHeight - 4.0) && (this.x <= platforms[0].platformEnd + 20 && this.x >= platforms[0].platformStart - 20)) || ((this.y <= platforms[1].platformHeight + 10.0 && this.y >= platforms[1].platformHeight - 4.0) && (this.x <= platforms[1].platformEnd + 20 && this.x >= platforms[1].platformStart - 20))) {
      this.velocity.y = -this.gravity.y;
      this.contact = true;
    } else {
      this.contact = false;
    }
  }

  // jump function, works only if this.contact is true
  this.jump = function() {
    if (this.contact === true) {
      this.velocity.y -= this.jumpHeight;
    }
  }

}