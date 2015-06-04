/**
 * @param {string} s
 * @return {boolean}

 any string with a 'e', it require digit in front of it (& no other e) and after it
 any string with a '.', it couldn't have '.' or 'e' in front of it
 any string with a '+' or '-', the sign needs to be the first digit or the sign needs to be right after e
 */
var isNumber = function(s) {
  // if s is empty, not a number
  if(!s) return false;
  // trim white space
  s = s.trim();
  // three boolean for checking
  var hasNum = false, hasE = false, hasDot = false;
  // iterate from the beginning of the string
  for(var i = 0; i < s.length; i++){
    // if the character is e
    if(s[i] === 'e'){
      // if has no number or has other e already, return false
      if(!hasNum || hasE){
        return false;
      }
      // update hasE to true
      hasE = true;
      // need to check if there is number after e, so make hasNum to false
      hasNum = false;
    } else if(s[i] ==='.'){
      // if there was already a 'e' or '.', not a valid number
      if(hasE || hasDot){
        return false;
      }
      // make hasDot to true
      hasDot = true;
      // if the character is '+' or '-'
    } else if(s[i] ==='+' || s[i] ==='-'){
      // if the sign is not in the beginning of string and not follow after e, it's not a valid number
      if(i !== 0 && s[i-1] !=='e'){
        return false;
      }
      // if character is legit number, make hasNum to true
    } else if(parseInt(s[i]) >= 0 &&  parseInt(s[i]) <= 9){
      hasNum = true;
      // if s[i] is '.'
      // if the character is not among these categories, it's not a valid number
    } else {
      return false;
    }
  }
  // return hasNum for final result
  return hasNum;
};

console.log(isNumber('078332e437'));
console.log(isNumber('0.1'));
console.log(isNumber('abc'));
console.log(isNumber('1 a'));
console.log(isNumber('2e10'));

