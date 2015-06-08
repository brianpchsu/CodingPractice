/**
 * @param {number[]} nums
 * @return {number[][]}
 */
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


console.log(subsets([4,1,0]));
// console.log(subsets([1,2,3,4,5,6,7,8,10,0]));
