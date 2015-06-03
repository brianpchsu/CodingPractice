/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // if strs is empty, return empty string
  if(strs.length === 0) return '';
  // intial prefix as first word
  var prefix = strs[0];
  // check each letters from strs
  for(var i = 1; i < strs.length; i++){
    // define j as pointer for character
    var j = 0;
    // the condition to have common prefix
    while(j < strs[i].length && j < prefix.length && strs[i][j] === prefix[j]){
      j++;
    }
    // if j is 0 after the while loop, these is no common prefix
    if(j === 0){
      return '';
    }
    // prefix is from 0 to j position
    prefix = prefix.substring(0, j);
  }
  return prefix;
};


console.log(longestCommonPrefix(['abc', 'abcd', 'a']))
