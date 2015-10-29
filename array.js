Array.prototype.meinEinzigartig = function () {
  var result = [];
  for( i = 0; i < this.length; i++ ) {
    if ( result.indexOf(this[i]) === -1 ) {
      result.push( this[i] );
    }
  };
  return result;
};

Array.prototype.mySum = function () {
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

Array.prototype.myTranspose = function () {
  var result = [];

  for (i=0; i < this[0].length; i++ ){
    var columns = [];

    for (j=0; j < this.length; j++){
      columns.push(this[j][i]);
    }
    result.push(columns);
  }
  return result;
};
