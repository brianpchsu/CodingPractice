/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  // define stack, longest, and start (pointer)
  var stack = [];
  var longest = 0, start = -1;
  for(var i = 0; i < s.length; i++){
    // if it's '(', add index to stack
    if(s[i] === '('){
      stack.push(i);
    } else {
      // if stack is not empty
      if(stack.length > 0){
        stack.pop();
        // if stack is empty after pop
        if(stack.length === 0){
          // longest will be the max of start to i or longest
          longest = Math.max(i - start, longest);
        } else {
          // longest will be the max of current index in stack to i or longest
          longest = Math.max(i - stack[stack.length-1], longest);
        }
        // if stack is empty, update pointer to i
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
