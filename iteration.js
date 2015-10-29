Array.prototype.myBubbleSort = function() {
  var sorted = false;

  while (!sorted) {
    sorted = true;
    for (var i=0; i < this.length - 1; i++ ){
      if (this[i] > this[i + 1]) {
        var x = this[i];
        var y = this[i + 1];
        this[i+1] = x;
        this[i] = y;
        sorted = false
      }
    }
  }
  return this;
};

String.prototype.mySubStrings = function() {
  result = [];

  for( var i = 0; i < this.length; i++){
    for( var j=i+1 ; j < this.length + 1; j++ ){
      result.push(this.substring(i, j));
    }
  }
  return result;
};
