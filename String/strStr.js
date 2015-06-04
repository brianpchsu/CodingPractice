/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(!needle) return 0;
  if(!haystack) return -1;
  var hayLength = haystack.length, needleLength = needle.length;
  if(hayLength < needleLength) return -1;

  for(var i = 0; i <= hayLength - needleLength; i++){
    var isSuccess = true;
    for(var j = 0; j < needleLength; j++){
      if(haystack[i+j] !== needle[j]){
        isSuccess = false;
        break;
      }
    }
    if(isSuccess) return i;
  }
  return -1;
};

console.log(strStr('aaa','a'));
console.log(strStr('a','a'));
