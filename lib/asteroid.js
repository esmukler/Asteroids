(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject;

  var Asteroid = Asteroids.Asteroid = function(atts) {
    this.pos = atts.pos;
    this.color = "#FF0000";
    this.radius = 20;
    this.vel = Asteroids.Util.randomVec(10);
    this.game = atts.game;
  }

  Asteroids.Util.inherits(Asteroid, MovingObject);

  Asteroid.prototype.collideWith = function(otherObject){
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };

})();
