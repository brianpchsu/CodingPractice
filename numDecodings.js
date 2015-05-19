/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
   if(parseInt(s) === 0) return 0;
   if(s[0] === '0') return 0;
   if(s.length < 2) return s.length;
   var result = [];
   for(var i = 0; i< s.length; i++){
     f1 = 0, f2 = 0;
     if(s[i] !== '0'){
       f1 = i > 0? result[i-1] : 1;
       var num = parseInt(s.substring(i, i+2));
       if(num > 10 && num <= 26 && num !==20 && s[i+2] !== '0'){
         f2 = 1;
       }
       result[i] = f1 + f2;
     } else {
       if(s[i+1] === '0') return 0;
       result[i] = result[i-1]? result[i-1]: 0;
     }
     if(result[i] === 0) return 0;
   }
   return result[result.length-1];
 };

console.log(numDecodings('121'));
console.log(numDecodings('11'));
console.log(numDecodings('10'));
console.log(numDecodings('110'));
