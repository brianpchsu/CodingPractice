/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // use an object (hash table underneath)
  var record = {};
  // record all numbers
  for(var i = 0; i < nums.length; i++){
    record[nums[i]] = record[nums[i]]+1 || 1;
  }
  // find the single occurance number
  for(var key in record){
    if (record[key] === 1){
      // the key is string, parseInt to convert it back to number
      return parseInt(key);
    }
  }
};


