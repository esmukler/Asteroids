(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(atts) {
    this.pos = atts.pos;
    this.vel = atts.vel;
    this.radius = atts.radius;
    this.color = atts.color;
  }

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.addPosToVel = function(pos, vel){
    return [ pos[0] + vel[0], pos[1] + vel[1] ];
  }

  MovingObject.prototype.move = function(){
    this.pos = this.addPosToVel(this.pos, this.vel);
  };
  
})();
