(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function(){
    this.DIM_X = 300;
    this.DIM_Y = 300;
    this.NUM_ASTEROIDS = 5;
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
      var asteroid = new Asteroids.Asteroid({ pos: this.randomPostion() });
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
      console.log(asteroid);
      asteroid.move();
    });
  };

})();
