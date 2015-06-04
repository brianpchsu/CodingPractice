/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  //define stack and input pairs
  var stack = [];
  var pairs = {'(' : ')', '[' : ']', '{' : '}'};

  for (var i = 0; i < s.length; i++){
    var chr = s[i];
    // if chr is the left parentheses or bracket, push it to stack
    if(pairs[chr]){
      stack.push(chr);
      //if chr is the right side of parentheses
    } else if(chr === ')' || chr === ']' || chr === '}'){
      // check if the pair matched
      if(pairs[stack.pop()] !== chr){
        return false;
      }
    }
  }
  // return if all parentheses closed
  return stack.length === 0;
};

console.log(isValid('()[{}]'))
