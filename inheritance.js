var Animal = function(name){
  this.name = name;
}

Animal.prototype.sayName = function(){
  return "My name is " + this.name;
}

function Cat(age, owner){
  //Animal.call(this, name)
  this.age = age;
  this.owner = owner;
};

function Surrogate(){};

Surrogate.prototype = Animal.prototype;

Cat.prototype = new Surrogate;

Cat.prototype.meow = function(){
  return "meow";
}



Function.prototype.inherits = function(parent){
  function Surrogate(){};

  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate;
};


function MovingObject () {};

MovingObject.prototype.move = function() {
  console.log("I moved!")
};


function Ship () {};

Ship.inherits(MovingObject);

var myShip = new Ship();
myShip.move();

Ship.prototype.fly = function() {
  console.log("I flew!");
};

myShip.fly();

var myMO = new MovingObject();

// myMO.fly();

function Asteroid () {};

Asteroid.inherits(MovingObject);

var myAst = new Asteroid();

myAst.move();
myAst.fly();
