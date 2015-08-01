/**
 * @param {string} digits
 * @return {string[]}
 */
// define the map for number to letter check out
var digitToLetter = {
  0: '0', 1: '1', 2: 'abc', 3: 'def', 4: 'ghi',  5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'
};

var letterCombinations = function(digitString) {
  //define final results word
  var words = [];
  // if null or empty input, just return
  if(!digitString || digitString.length === 0) return words;

  // helper function to achieve dfs
  var getWords  = function(word, digits){
    //base case, when the digits is empty, reach the end, save the word to result
    if (digits.length ===0){
      words.push(word);
      return;
    }
    // during process, get the 1st number
    var currentDigit = digits[0];
    console.log("currentDigit", currentDigit);
    // copy the slice remaining array to remainDigits
    var remainDigits = digits.slice(1);
    // for each digit, get all the possible letter in array
    var letters = digitToLetter[currentDigit].split('');
    for (var i = 0; i<letters.length; i++){
      console.log("word + letters[i]", word + letters[i]);
      // for each letter, concat the temp word with this letter, make recursive call with the remaining options
      getWords(word + letters[i], remainDigits);
    }
  };
  // initial call, use empty string and input number array for the call
  getWords('', digitString.split(''));
  return words;
};

// console.log(letterCombinations(''));
console.log(letterCombinations('23'));
// console.log(letterCombinations('234'));


// Solution 2
// var letterCombinations = function(digits) {
//   var result = [];
//   if(!digits || digits.length === 0) return result;
//   if(digits.length === 1) return digitToLetter[digits[0]];
//   digits = digits.split('');
//   result = digitToLetter[digits[0]];
//   for(var i = 1; i < digits.length; i++){
//     var size = result.length;
//     var letter = digitToLetter[digits[i]];
//     for(var j = 0; j < size; j++){
//       for(var k = 0; k < letter.length; k++){
//         var comb = result[j];
//         comb = comb + letter[k];
//         result.push(comb);
//       }
//       // result[j].push(letter[0]);
//     }
//   }
//   return result;
// };
