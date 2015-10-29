var func = function(x) {
  var sum = x + 1
  return sum;
}

Array.prototype.myEach = function (func) {
  for ( var i=0; i < this.length; i++ ){
    func(this[i]);
  }

  return this;
};

// [1,2,3].myEach(function(x) {
//
// });

Array.prototype.myMap = function (func) {
  var result = [];

  this.myEach(function(element){
    result.push(func(element))
  });

  return result;
};
//
// var addOne = function(x) {
//   return x + 1;
// }
//
// [1,2,3].myMap(addOne)
//
// var target = this.myEach(func);
//
// for ( i=0; i < target.length; i++ ) {
//   result.push(func.call(this[i]));
// }

var multiply = function (x, y) {
  return x * y;
};

var minus = function ( x, y) {
  return x - y;
};

Array.prototype.myInject = function (callback) {
    var acc = this[0];
    var rest = this.slice(1);
    rest.myEach(function(el){
      acc = callback(acc,el);
    })
    return acc;
};
