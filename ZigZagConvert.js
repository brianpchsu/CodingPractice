/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows <= 1 || s.length === 0) return s;
  var result = '';
  for(var i = 0; i < numRows; i++){
    for( var j = 0, index = i; index < s.length; j++, index = (2 * numRows - 2) * j + i){
      result += s[index];
      if(i === 0 || i === numRows -1){
        continue;
      }
      if(index+ (numRows - i - 1) *2 < s.length){
        result += s[index + (numRows - i - 1) * 2]
      }
    }
  }
  return result;
};

console.log(convert("PAYPALISHIRING", 3)); //"PAHNAPLSIIGYIR"

