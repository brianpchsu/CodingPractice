/**
 * @param {number[]} nums
 * @return {number}
 */
// Original solution O(2n)
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

// another solution O(n+1), slightly improve
var singleNumber = function(nums) {
  var record = {};
  for(var i = 0; i < nums.length; i++){
     // if the key already exist, the 2nd time just delete the nums
     if( record[ nums[i] ] ) {
       delete record[nums[i]];
      } else {
      // record the key
      record[ nums[i] ] = true;
      }
  }
  // return the only key in record
   for(key in record){
     return parseInt(key);
   }
};

