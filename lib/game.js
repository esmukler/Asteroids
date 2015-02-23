(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function(){
    this.DIM_X = 700;
    this.DIM_Y = 500;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.addAsteroids();
  }

  Game.prototype.randomPostion = function(){
    var posX = Math.floor(this.DIM_X * Math.random());
    var posY = Math.floor(this.DIM_Y * Math.random());
    return [posX, posY];
  };

  Game.prototype.addAsteroids = function(){
    for(var i = 0; i < this.NUM_ASTEROIDS; i++){
      var asteroid = new Asteroids.Asteroid(
        { pos: this.randomPostion(), game: this });
      this.asteroids.push(asteroid);
    }
  };

  Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

    this.asteroids.forEach( function(asteroid){
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function(){
    this.asteroids.forEach( function(asteroid){
      asteroid.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    var wrappedX = pos[0] >= 0 ? pos[0] % this.DIM_X : this.DIM_X + pos[0];
    var wrappedY = pos[1] >= 0 ? pos[1] % this.DIM_Y : this.DIM_Y + pos[1];

    return [wrappedX, wrappedY];
  };

  Game.prototype.checkCollisions = function() {
    this.asteroids.forEach( function(ast1) {
      this.asteroids.forEach( function(ast2) {
        if (ast1 !== ast2 && ast1.isCollidedWith(ast2)) {
          alert("COLLISION");
        }
      });
    }, this);
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

})();
