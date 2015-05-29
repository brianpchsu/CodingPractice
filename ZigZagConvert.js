/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}

if numRows = 2
0 2 4 6
1 3 5 7

if numRows = 3
0     4     8
1  3  5  7  9
2     6     10

 */

var convert = function(s, numRows) {
  // edge case, no need to reorder
  if(numRows <= 1 || s.length === 0) return s;
  var result = '';
  // check from each row
  for(var i = 0; i < numRows; i++){
    // define the j and index for locating right position
    for( var j = 0, index = i; index < s.length; j++, index = (2 * numRows - 2) * j + i){
      // add character to result
      result += s[index];
      // if it's the first and last row, no need to middle character, go to next character in the same row
      if(i === 0 || i === numRows -1){
        continue;
      }
      // if it's in the middle rows, check if it's still inside string, add that to result
      if(index+ (numRows - i - 1) *2 < s.length){
        result += s[index + (numRows - i - 1) * 2]
      }
    }
  }
  return result;
};

console.log(convert("PAYPALISHIRING", 3)); //"PAHNAPLSIIGYIR"

