(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject;

  var Bullet = Asteroids.Bullet = function(atts) {
    this.pos = atts.pos;
    this.game = atts.game;
    this.color = "#000000";
    this.radius = 2;
    this.vel = [atts.vel[0]*2, atts.vel[1]*2];
  }

  Asteroids.Util.inherits(Bullet, MovingObject);

  Bullet.prototype.collideWith = function(otherObject){
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
      console.log("Gotcha!")
    }
  };

  Bullet.prototype.isWrappable = false;


})();
