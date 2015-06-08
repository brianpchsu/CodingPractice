/**
 * @param {string[]} strs
 * @return {string[]}
 */
var anagrams = function(strs) {
  // define result array and temp record using hash table
  var result = [], record = {};
  // check each string in array
  for(var i = 0; i < strs.length; i++){
    //each string, split to array and sorted, rejoin as string
    var temp = strs[i].split('').sort().join('');
    // check if our record already have this string, if not, create array for it
    if(!record[temp]) {
      record[temp] = [];
    }
    // push current string insdie the hash table (sorted string as key)
    record[temp].push(strs[i]);
  }
  // check each key in the hash table
  for(var key in record){
    // if there are anagram for that string, store the anagrams to results
    if(record[key].length > 1){
      result = result.concat(record[key]);
    }
  }
  return result;
};

console.log(anagrams(["tea","and","ate","eat","dan"]));
