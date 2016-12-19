function Platform(previous, starter) {

  this.color = color(random(90, 230), random(110, 210), random(130, 230));
  this.lifespan = width;
  this.velocity = speed;
  this.platformStart = previous + speed * (speed + difficulty * 1.3);
  this.platformHeight = random(250, 390);
  this.platformBottom = random(30, 100);
  this.platformEnd = this.platformStart + random(210, 270) + ((speed + difficulty) * 13) + starter;

  this.run = function() {
    this.update();
    this.display();
  };

  this.update = function() {
    this.lifespan -= speed;
  }

  this.display = function() {
    noFill();
    stroke(this.color);
    fill(20, 150);
    strokeWeight(3);
    rectMode(CORNERS);
    rect(this.platformStart -= speed, this.platformHeight, this.platformEnd -= speed, this.platformHeight + this.platformBottom);
 
  }
  this.isDead = function() {
    if (this.platformEnd < 0) {
      return true;
    } else {
      return false;
    }
  }
}

function landscape(previous, initial2, filler, alt, speeder) {

  this.lifespan = width;
  this.velocity = speed / speeder;
  this.platformStart = previous + this.velocity * (this.velocity + difficulty * 1.3);
  this.platformHeight = random(100, 230) + alt;
  this.platformBottom = height;
  this.platformEnd = this.platformStart + random(210, 370) + ((this.velocity + difficulty) * 13) + initial2;

  this.run = function() {
    this.update();
    this.display();
  };

  this.update = function() {
    this.velocity = speed / speeder;
    this.lifespan -= this.velocity;
  }

  this.display = function() {
    fill(filler, 230);
    noStroke();
    strokeWeight(3);
    rectMode(CORNERS);
    rect(this.platformStart -= this.velocity, this.platformHeight, this.platformEnd -= this.velocity, this.platformHeight + this.platformBottom);

  }
  this.isDead = function() {
    if (this.platformEnd < 0) {
      return true;
    } else {
      return false;
    }
  }
}