(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  if (typeof Asteroids.Util === "undefined") {
    window.Asteroids.Util = {};
  }

  Asteroids.Util.inherits = function(ChildClass, ParentClass) {
    function Surrogate(){};

    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate;
  };

  Asteroids.Util.randomVec = function(length) {
    var randX = Math.floor(length * Math.random());
    var randY = Math.floor(length * Math.random());
    return [randX, randY];
  };





















})();
