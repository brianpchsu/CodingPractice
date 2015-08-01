/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Solution 1
var subsets = function(nums) {
  // assign results to empty set
  var results = [[]];

  // for each member in argument set
  for (var i = 0; i < nums.length; i ++) {
    //for each result, concat with the element
    results = results.concat(results.map(function (subset) {
      return subset.concat(nums[i]);
    }));
  };
  // sort the array inside the result
  results.map(function(subset){
    return subset.sort(function(a,b){
      return a-b;
    });
  });
  return results;
};

// Solution 2
var subsets = function(nums){
  var result = [[]];
  if(!nums || nums.length ===0) return result;
  nums.sort(function(a,b){
    return a-b;
  });
  for(var i = 0; i < nums.length; i++){
    var size = result.length;
    for(var j = 0; j < size; j++){
      var item = result[j];
      item = item.concat(nums[i]);
      result.push(item);
    }
  }
  return result;
};

// // Solution 3
// var subsets = function(nums){
//   if(nums === null) return null;
//   nums.sort(function(a, b){
//     return a-b;
//   });
//   return helper(nums, nums.length-1);
// };

// var helper = function(nums, index){
//   if(index === -1){
//     var result = [];
//     var elem = [];
//     result.push(elem);
//     return result;
//   }
//   result = helper(nums, index-1);
//   var size = result.length;
//   for(var i = 0; i < size; i++){
//     var elem = result[i];
//     elem.push(nums[i]);
//     result.push(elem);
//   }
//   return result;
// }
console.log(subsets([4,1,0]));
// console.log(subsets([1,2,3,4,5,6,7,8,10,0]));
