(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(atts) {
    this.pos = atts.pos;
    this.vel = atts.vel;
    this.radius = atts.radius;
    this.color = atts.color;
    this.game = game;
  }

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = "#000000";
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    //ctx.fillStyle = "black";
    ctx.strokeStyle = this.color;
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.stroke();
  };

  MovingObject.prototype.addPosToVel = function(pos, vel){
    return [ pos[0] + vel[0], pos[1] + vel[1] ];
  }

  MovingObject.prototype.move = function(){
    if (this.isWrappable) {
      this.pos = this.addPosToVel(this.game.wrap(this.pos), this.vel);
    } else {
      this.pos = this.addPosToVel(this.pos, this.vel);
      if (this.game.isOutOfBounds(this.pos)) {
        this.game.remove(this);
      }
    }
  };

  MovingObject.prototype.distance = function(pos1, pos2){
    var x = Math.pow((pos2[0] - pos1[0]),2);
    var y  = Math.pow((pos2[1] - pos1[1]),2)
    return Math.sqrt( x + y );
  };

  MovingObject.prototype.isCollidedWith = function(otherObject){
     return this.distance(this.pos, otherObject.pos) < (this.radius + otherObject.radius)
  };

  MovingObject.prototype.collideWith = function(otherObject){
  };

  MovingObject.prototype.isWrappable = true;

})();
