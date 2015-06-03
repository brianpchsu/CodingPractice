/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return '';
  var prefix = strs[0];
  for(var i = 1; i < strs.length; i++){
    var j = 0;
    while(j < strs[i].length && j < prefix.length && strs[i][j] === prefix[j]){
      j++;
    }
    if(j === 0){
      return '';
    }
    prefix = prefix.substring(0, j);
  }
  return prefix;
};


console.log(longestCommonPrefix(['abc', 'abcd', 'a']))
