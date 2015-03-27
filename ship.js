(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject;

  var Ship = Asteroids.Ship = function(atts) {
    this.pos = atts.pos;
    this.game = atts.game;
    this.color = "#00FFFF";
    this.radius = 10;
    this.vel = [0,0];
  }

  Asteroids.Util.inherits(Ship, MovingObject);

  Ship.prototype.draw = function(ctx) {
    ctx.save();

    var x = this.pos[0];
    var y = this.pos[1];

    // ctx.translate(0, 0)
    // ctx.rotate(20*Math.PI/180);

    ctx.fillStyle = this.color;
    ctx.beginPath();


    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y + 20);
    ctx.lineTo(x - 10, y + 20);
    ctx.closePath();


    ctx.fill();
    ctx.restore();
  };



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
