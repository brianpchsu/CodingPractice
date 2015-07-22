/**
 * @param {number} n
 * @return {string}
 */
var numToCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var convertToTitle = function(n) {
  var result = '';
  if(n < 0) return '';
  while(n > 0){
    var remaining = n%26;
    n = Math.floor(n/26);
    if(remaining === 0){
      result +='Z';
      n--;
    } else {
      result += (numToCharacter[remaining - 1]);
    }
  }
  return result.split('').reverse().join('');
};

console.log(convertToTitle(1));
console.log(convertToTitle(2));
console.log(convertToTitle(26));
console.log(convertToTitle(27));
console.log(convertToTitle(28));
