function Platform(previous, initial) {
  this.lifespan = width;
  this.velocity = speed;
  this.platformStart = previous + speed * (speed + difficulty * 2);
  this.platformHeight = random(250, 390);
  this.platformBottom = random(30, 100);
  this.platformEnd = this.platformStart + random(210, 270) + ((speed + difficulty) * 15) + initial;

  this.run = function() {
    this.update();
    this.display();
  };

  this.update = function() {
    this.lifespan -= speed;
  }

  this.display = function() {
    noFill();
    // fill(random(180,255),random(180,255),random(180,255));
    // fill(255, this.platformEnd-50);
    // stroke(255, this.platformEnd + 20);
    stroke(random(120, 200), random(120, 200), random(120, 200), this.platformEnd + 20);
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