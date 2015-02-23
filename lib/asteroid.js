(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  if (typeof Asteroids.Util === "undefined") {
    window.Asteroids.Util = {};
  }

  var MovingObject = Asteroids.MovingObject;

  var Asteroid = Asteroids.Asteroid = function(atts) {
    this.pos = atts.pos;
    this.COLOR = "#FF0000";
    this.RADIUS = 5;
    this.vel = Asteroids.Util.randomVec(10);
  }

  Asteroids.Util.inherits(Asteroid, MovingObject);






})();
