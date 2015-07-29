/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var result = [];
  fillParenthesis(n, 0, 0, "", result);
  return result;
};

var fillParenthesis = function(n, left, right, currentString, result){
  if(left < right) return;
  if(left === n && right === n){
    result.push(currentString);
    return;
  }
  if(left === n){
    fillParenthesis(n, left, right+1, currentString + ")", result);
    return;
  }
  fillParenthesis(n, left+1, right, currentString + "(", result);
  fillParenthesis(n, left, right+1, currentString + ")", result);
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
