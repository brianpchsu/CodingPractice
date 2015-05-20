/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  var stack = [];
  var longest = 0, start = -1;
  for(var i = 0; i < s.length; i++){
    if(s[i] === '('){
      stack.push(i);
    } else {
      if(stack.length > 0){
        stack.pop();
        if(stack.length === 0){
          longest = Math.max(i - start, longest);
        } else {
          longest = Math.max(i - stack[stack.length-1], longest);
        }
      } else {
        start = i;
      }
    }
  }
  return longest;
};

console.log(longestValidParentheses('()(())'));
console.log(longestValidParentheses('(()'));
console.log(longestValidParentheses('((()'));
