/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // replace non alphanumeric character with empty string and conver all to lower case
  var pureString = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  // get new string's length
  var validLength = pureString.length;
  // check head and tail's string character
  for(var i = 0; i < Math.floor(validLength/2); i++){
    // if two characters are not the same, return false
    if(pureString[i] !== pureString[validLength - 1 - i]){
      return false;
    }
  }
  // if all characters match, return true
  return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome('12a21'));
