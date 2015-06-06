/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  // define result array
  var result = [];
  // if numRow is less than 1, return empty result
  if(numRows < 1) return result;
  // push the base array to result
  var first = [1];
  result.push(first);
  // iterate each row
  for(var i = 1; i < numRows; i++){
    // generate temp array for that row
    var temp = new Array(i+1);
    // use prev for reference
    var prev = result[i-1];
    // define the beginning and ending element
    temp[0] = 1, temp[i] = 1;
    // the middle element is the combination of the previous row's two combination
    for(var j = 1; j < i; j++){
      temp[j] = prev[j-1] + prev[j];
    }
    // push the temp array to result
    result.push(temp);
  }
  return result;
};

console.log(generate(3));
console.log(generate(5));
