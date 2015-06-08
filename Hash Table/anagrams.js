/**
 * @param {string[]} strs
 * @return {string[]}
 */
var anagrams = function(strs) {
  var result = [], record = {};
  for(var i = 0; i < strs.length; i++){
    var temp = strs[i].split('').sort().join('');
    if(!record[temp]) {
      record[temp] = [];
    }
    record[temp].push(strs[i]);
  }
  for(var key in record){
    if(record[key].length > 1){
      result = result.concat(record[key]);
    }
  }
  return result;
};

console.log(anagrams(["tea","and","ate","eat","dan"]));
