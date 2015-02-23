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
      game.step();
      game.draw(ctx);
    }, 20);
  };

})();
