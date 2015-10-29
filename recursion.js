var range = function (start, end) {
  var result = [];

  if(end < start){
    return [];
  } else if (start === end){
    return [end];
  } else {
    result = result.concat([start]);
    return result = result.concat(range(start + 1, end));
  }
};

var expo1 = function(b, exp) {
  if(exp < 0){
    return "Error";
  }
  else if(exp == 0){
    return 1;
  }
  else{
    return b * expo1(b, exp - 1);
  }
}

var expo2 = function(b, exp) {
  if(exp < 0){
    return "Error";
  }
  else if(exp == 0){
    return 1;
  }
  else{
    if(exp % 2 == 0){
      var number = expo2(b, exp / 2);
      return number * number;
    }
    else{
      var number2 = expo2(b, ( exp - 1) / 2);
      return b * (number2 * number2);
    }
  }
};

var fibbo = function(n){
  var result = [0,1];

  if (n==0){
    return [];
  } else if (n == 1) {
    return [0];
  } else if (n == 2) {
    return result;
  } else {
    result = fibbo(n - 1);
    return result.concat(result[result.length - 1] + result[result.length - 2])
  }
};

var bsearch = function(arr, target){

  var mid_point = Math.floor(arr.length / 2)

  if(arr[mid_point] == target){
    return mid_point;
  }
  else if(mid_point == 0){
    return [];
  }
  else if(arr[mid_point] > target){
    return bsearch(arr.slice(0, mid_point), target);
  }
  else if(arr[mid_point] < target){
    var idx = bsearch(arr.slice(mid_point),target);
    if(idx == []){
      return "Not found";
    }
    else{
      return (mid_point + idx);
    }
  }

};
