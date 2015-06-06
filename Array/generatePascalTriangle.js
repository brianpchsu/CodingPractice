/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var result = [];
  if(numRows < 1) return result;
  var first = [1];
  result.push(first);

  for(var i = 1; i < numRows; i++){
    var temp = new Array(i+1);
    var prev = result[i-1];
    temp[0] = 1, temp[i] = 1;
    for(var j = 1; j < i; j++){
      temp[j] = prev[j-1] + prev[j];
    }
    result.push(temp);
  }
  return result;
};

console.log(generate(3));
console.log(generate(5));
