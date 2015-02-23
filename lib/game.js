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
    this.ship = new Asteroids.Ship({game: this, pos: [this.DIM_X / 2, this.DIM_Y / 2]});
    this.bullets = [];
  }

  Game.prototype.allObjects = function() {
    return this.asteroids.concat(this.ship, this.bullets);
  }

  Game.prototype.addObject = function(object) {
    if(object instanceof Asteroids.Bullet){
      this.bullets.push(object);
    }
  }

  Game.prototype.remove = function(object){
    if(object instanceof Asteroids.Bullet){
      this.bullets.splice(this.bullets.indexOf(object), 1);
    } else if (object instanceof Asteroids.Asteroid){
      this.asteroids.splice(this.asteroids.indexOf(object), 1);
    }
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

      console.log(asteroid.vel);
      this.asteroids.push(asteroid);
    }
  };

  Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

    this.allObjects().forEach( function(object){
      object.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function(){
    this.allObjects().forEach( function(object){
      object.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    var wrappedX = pos[0] >= 0 ? pos[0] % this.DIM_X : this.DIM_X + pos[0];
    var wrappedY = pos[1] >= 0 ? pos[1] % this.DIM_Y : this.DIM_Y + pos[1];

    return [wrappedX, wrappedY];
  };

  Game.prototype.checkCollisions = function() {
    this.allObjects().forEach( function(ast1) {
      this.allObjects().forEach( function(ast2) {
        if (ast1 !== ast2 && ast1.isCollidedWith(ast2)) {
          ast1.collideWith(ast2);
        }
      });
    }, this);
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.isOutOfBounds = function(pos) {
    return (pos[0] < 0 || pos[0] > this.DIM_X ||
            pos[1] < 0 || pos[1] > this.DIM_Y);
  }


})();
