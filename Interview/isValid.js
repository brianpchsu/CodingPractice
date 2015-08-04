/**
 * @param {string} s
 * @return {boolean in Yes or No}
 */

var isValid = function(s) {
  // Change input to array, string can work as well though, for better performance, just use string s[i]
  var inputArr = s.split('');
  // define the stack for storing temp elements in the process
  var stack = [];
  // have a pairs map for all possibilities
  var pairs = {'(' : ')', '[' : ']', '{' : '}'};

  // iterate through the input from the beginning index
  for (var i = 0; i < inputArr.length; i++){
    // save inputArr[i] to current for cleaner view in later lines
    var current = inputArr[i];
    // if we got the left side of parenthese
    if(pairs[current]){
      // save the right side of parenthese to the stack
      stack.push(pairs[current]);
      //if current is the right side of parentheses
    } else {
      // pop the last element from stack and check if the pair matched
      if(stack.pop() !== current){
        return "No";
      }
    }
  }
  // in the end, check if there is element in the stack, if no then all matched up
  return stack.length === 0? "Yes": "No";
};

// Time complexity: O(n)
// Space complexity: O(2n), can be O(n) if not converting from string to array in the beginning

console.log(isValid('{}[]()')); // Should be yes
console.log(isValid('{[(({}[])]}'));  // Should be No
