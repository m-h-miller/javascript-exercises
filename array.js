Array.prototype.mein_einzigartig = function () {
  var result = [];
  for( i = 0; i < this.length; i++ ) {
    if ( result.indexOf(this[i]) === -1 ) {
      result.push( this[i] );
    }
  };
  return result;
};

Array.prototype.my_sum = function () {
  var result = [];
  for ( i=0; i < this.length - 1; i++ ) {

    for ( j=i+1; j < this.length; j++ ) {
      if ( (this[i] + this[j]) === 0){
        result.push([i, j]);
      }
    }
  }
  return result;
};
