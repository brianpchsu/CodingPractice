/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
   // if the input string is 0 or 0 combination, no way to decode
   if(parseInt(s) === 0) return 0;
   // if string start with 0, no way to decode
   if(s[0] === '0') return 0;
   // if string is empty string or 1 digit string, return the length of string as result
   if(s.length < 2) return s.length;
   // define result array
   var result = [];
   // check each character in array
   for(var i = 0; i< s.length; i++){
     f1 = 0, f2 = 0;
     // if the character is not 0
     if(s[i] !== '0'){
       // f1 will be 1 for 0 index, or the previous result num
       f1 = i > 0? result[i-1] : 1;
       // check if two digit num is in the range, 10 & 20 are omitted because there is only 1 way of decoding
       var num = parseInt(s.substring(i, i+2));
       if(num > 10 && num <= 26 && num !==20 && s[i+2] !== '0'){
         // f2 will be 1 if it's less than 1 index, or result [i-2] (combination of 2 two digit numbers)
         f2 = i > 1? result[i-2] : 1;
       }
       // combine f1 and f2 to result[i]
       result[i] = f1 + f2;
     } else {
       // if two '0' in a row, no way to decode
       if(s[i+1] === '0') return 0;
       // if char before '0' is greater than 2, no way to decode
       if(parseInt(s[i-1]) > 2) return 0;
       // result[i] will be the same as previous result or 0
       result[i] = result[i-1]? result[i-1]: 0;
     }
   }
   // return last calculated result
   return result[result.length-1];
 };

console.log(numDecodings('1212'));
console.log(numDecodings('11'));
console.log(numDecodings('10'));
console.log(numDecodings('110'));
