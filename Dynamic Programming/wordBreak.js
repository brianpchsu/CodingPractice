/**
 * @param {string} s
 * @param {set<string>} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  if(!s || !s.length) return true;
  var len = s.length;
  var flag = false;
  for(var i = 1; i <=len; i++){
    var subStr = s.substring(0, i);
    if(wordDict.has(subStr)){
      if(subStr.length === s.length){
        return true;
      }
      flag = wordBreak(s.substring(i, wordDict));
    }
  }
  return flag;
};

var wordBreak = function(s, wordDict) {
  if(!s || !s.length) return true;
  var result = new Array(s.length+1);
  result[0] = true;
  for(var i = 0; i < s.length; i++){
    var str = s.substring(0, i+1);
    for(var j = 0; j <=i; j++){
      if(result[j] && wordDict.has(str)){
        result[i+1] = true;
        break;
      }
    }
  }
  return result[s.length];
};
