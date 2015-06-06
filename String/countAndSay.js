/**
 * @param {number} n
 * @return {string}


 */


var countAndSay = function(n) {
  if(n < 1) return '';
  var result = '1';
  for(var i = 2; i <= n; i++){
    var temp = '';
    var count = 1;
    var prev = result[0];

    for(var j = 1; j < result.length; j++){
      if(result[j] === prev){
        count++;
      } else {
        temp += count.toString() + prev;
        count = 1;
        prev = result[j];
      }
    }

    temp += count.toString() + prev;
    result = temp;
  }
  return result;
};

console.log(countAndSay(3));
