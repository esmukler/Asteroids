var sum = function() {
  var args = Array.prototype.slice.call(arguments);
  var total = 0;
  args.forEach( function(arg) {
    total += arg;
  });
  return total;
};

console.log(sum(1, 2, 3, 9));


Function.prototype.myBind = function(context) {
  var fn = this;
  var args = Array.prototype.slice.call(arguments);

  return function(){
    return fn.apply(args.shift(), args);
  }
};

var cat = {
  name: "Breakfast",
  age: 8,

  purr: function () {
    console.log("meow!");
  },

  age_one_year: function () {
    // more about `this` momentarily
    this.age += 1;
  },

  friends: function (friend1, friend2) {
    console.log("My name is " + this.name + "and my friends are "
      + friend1 + " and " + friend2);
  }

};

var catFriends = cat.friends.myBind(cat, "tom", "jerry");

console.log(catFriends());

var curriedSum = function(numArgs){
  var numbers = [];
  var sum = 0;

  var _curriedSum = function(num){
    numbers.push(num);
    if (numbers.length === numArgs) {
      for (var i = 0; i< numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;

};

var csFour = curriedSum(4);

console.log(csFour(2)(3)(4)(10));


Function.prototype.curry = function(numArgs) {
  var fn = this;

  var args = [];

  var _curry = function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(fn, args)
    } else {
      return _curry;
    }
  };

  return _curry;
};

var sumThree = function(num1, num2, num3){
  return num1 + num2 + num3;
}


console.log(sumThree(1,2,3) );

var curriedSumThree = sumThree.curry(3);

console.log(curriedSumThree(4)(5)(6));
