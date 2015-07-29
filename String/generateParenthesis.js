/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  // define final result array for storing string
  var result = [];
  // use helper function to make recrusive call for filling parenthesis
  fillParenthesis(n, 0, 0, "", result);
  // return the result after filling
  return result;
};

// helper function for adding more parenthesis
var fillParenthesis = function(n, left, right, currentString, result){
  // if left parenthesis num is less than right parenthesis num(shouldn't happen!) return
  if(left < right) return;
  // if left and right parenthesis num both reach desired number, add currentString to result
  if(left === n && right === n){
    result.push(currentString);
    return;
  }
  // if left parenthesis num reaches the n, just add more right (parenthesis)
  if(left === n){
    fillParenthesis(n, left, right+1, currentString + ")", result);
    return;
  }
  // recursive call for all kinds of possibilities, add left parenthesis and right parenthesis
  fillParenthesis(n, left+1, right, currentString + "(", result);
  fillParenthesis(n, left, right+1, currentString + ")", result);
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
