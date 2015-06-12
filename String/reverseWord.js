/*
input: i really like google as a company
output: company a as google like really i
*/

var reverseWord = function(str) {
 // define result and tempword
 var result = '', tempWord = '';
 for(var i = 0; i < str.length ; i++){
     // if current character is white space, then
     if(str[i] === ' '){
         result = result.length? tempWord + ' ' + result: tempWord;
         tempWord = '';
     }
     else {
         tempWord += str[i];
     }
 }
 result = tempWord + ' ' + result;
 return result;
};

console.log(reverseWord('i really like google as a company'))
