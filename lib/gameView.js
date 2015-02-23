(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  GameView = Asteroids.GameView = function(game, ctx, pts){
    this.game = game;
    this.ctx = ctx;
    this.pts = pts
  };

  GameView.prototype.start = function(){
    var game = this.game;
    var ctx = this.ctx;
    var that = this;
    this.bindKeyHandlers();

    window.setInterval( function(){
      game.step();
      game.draw(ctx);
      that.drawPoints();
    }, 20);
  };

  GameView.prototype.drawPoints = function() {
    this.pts.clearRect(0, 0, this.game.DIM_X, 100);
    this.pts.font = "48px serif";
    this.pts.fillStyle = "white";
    this.pts.fillText("Points: " + this.game.points, 100, 50);
  }

  GameView.prototype.bindKeyHandlers = function(){
    game = this.game;
    key('up', function(){game.ship.power( [0,-1] )});
    key('down', function(){game.ship.power( [0,1] )});
    key('left', function(){game.ship.power( [-1,0] )});
    key('right', function(){game.ship.power( [1,0] )});
    key('space', function(){game.ship.fireBullet()});
  };

})();
