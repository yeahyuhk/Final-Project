var Platform = function(previous, speed) {
  this.lifespan = width;
  this.velocity = speed;
  var position = previous + 30;
  this.last = previous;
  this.tall = random(300, 400);
  this.wide = random(150, 250);

  this.run = function() {
    this.update();
    this.display();
  };

  this.update = function() {
    //console.log('position is: ', position);
    // console.log('speed is : ', speed);
    position += (speed);
    this.lifespan -= speed;

  }

  this.display = function() {
    strokeWeight(2);
    stroke(60, 180, 50);
    fill(100, 220, 80);
    rectMode(CORNERS);
    rect(width - position, this.tall, this.wide -= speed, height);

  }
  this.isDead = function() {
    if (this.wide < 0.0) {
      return true;

    } else {
      return false;
    }
  }
}