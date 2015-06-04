/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // define last word's length
  var lastLength = 0;
  // iterate through from the end of string
  for(var i = s.length - 1; i >=0; i--){
    // if the character is white space
    if(s[i] === ' '){
      // if the ending character is white space, continue
      if(lastLength === 0){
        continue;
      } else {
        // if it's the middle character, we had last word, break iteration
        break;
      }
      // if it's normal character, increment the length
    } else {
      lastLength++;
    }
  }
  // return the length
  return lastLength;
};

console.log(lengthOfLastWord("hello world "))
