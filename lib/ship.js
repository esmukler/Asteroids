(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject;

  var Ship = Asteroids.Ship = function(atts) {
    this.pos = atts.pos;
    this.game = atts.game;
    this.color = "#000000";
    this.radius = 10;
    this.vel = [0,0];
  }

  Asteroids.Util.inherits(Ship, MovingObject);

  Ship.prototype.relocate = function() {
    this.vel = [0,0];
    this.pos = [this.game.DIM_X / 2, this.game.DIM_Y / 2];
    console.log("I'm going down! Tell my wife I love her!");
  };

  Ship.prototype.power = function(impulse){
    this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
  };

  Ship.prototype.fireBullet = function(){
    var bullet = new Asteroids.Bullet({pos: this.pos, vel:this.vel, game: this.game});
    this.game.addObject(bullet);
  };

})();
