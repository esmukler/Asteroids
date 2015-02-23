(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  GameView = Asteroids.GameView = function(game, ctx){
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function(){
    var game = this.game;
    var ctx = this.ctx;

    window.setInterval( function(){
      game.moveObjects();
      game.draw(ctx);
    }, 200000);
  };

})();
