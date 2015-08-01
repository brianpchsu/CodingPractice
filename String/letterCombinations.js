/**
 * @param {string} digits
 * @return {string[]}
 */
var digitToLetter = {
  0: '0', 1: '1', 2: 'abc', 3: 'def', 4: 'ghi',  5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'
};

var letterCombinations = function(digitString) {
  //Save the current words through closurescope
  var words = [];
  if(!digitString || digitString.length === 0) return words;

  var getWords  = function(word, digits){
    //base case, reach the end
    if (digits.length ===0){
      words.push(word);
      return;
    };

    var currentDigit = digits[0];
    console.log("currentDigit", currentDigit);
    var remainDigits = digits.slice(1);
    var letters = digitToLetter[currentDigit].split('');
    for (var i = 0; i<letters.length; i++){
      console.log("word + letters[i]", word + letters[i]);
      getWords(word + letters[i], remainDigits);
    };
  };
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
