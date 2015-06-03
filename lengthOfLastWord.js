/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var lastLength = 0;
  for(var i = s.length - 1; i >=0; i--){
    if(s[i] === ' '){
      if(lastLength === 0){
        continue;
      } else {
        break;
      }
    } else {
      lastLength++;
    }
  }
  return lastLength;
};

console.log(lengthOfLastWord("hello world "))
