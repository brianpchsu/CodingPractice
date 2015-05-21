/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var pureStringArr = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase().split('');
  var validLength = pureStringArr.length;
  for(var i = 0; i < Math.floor(validLength/2); i++){
    if(pureStringArr[i] !== pureStringArr[validLength - 1 - i]){
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome('1a2'));
