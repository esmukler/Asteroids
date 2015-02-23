(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Util = {};

  Asteroids.Util.inherits = function(ChildClass, ParentClass) {
    function Surrogate(){};

    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate;
  };

  Asteroids.Util.randomVec = function(length) {
    var randX = Math.ceil((length * Math.random()) - 5);
    var randY = Math.ceil((length * Math.random()) - 5);
    return [randX, randY];
  };



})();
