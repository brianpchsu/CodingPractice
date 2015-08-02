
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function(nums) {
//   if(nums.length === 1) return nums;
//   result = [[nums[0]]];

//   for(var i = 1; i < nums.length; i++){
//     var resultLength = result.length;
//     for(var j = 0; j < resultLength; j++){
//       // console.log("resultLength", resultLength);
//       var temp = result[j].slice();
//       dele
//       for(var k = 0; k <= temp.length; k++){
//         console.log("result is ", result);
//         console.log("temp is ", temp);
//         var temp2 = temp.splice(k, 0, nums[i]);
//         console.log("temp2 is ", temp2);
//         result.push(temp2);
//         console.log("result", result);
//       }
//       // result[j].push(nums[i]);
//     }
//   }
//   return result;
// };

var helper = function(nums, used, item, result){
  if(item.length === nums.length){
    // console.log("push item", item);
    result.push(item.slice());
    // console.log("result", result);
    return;
  }
  for(var i = 0; i < nums.length; i++){
    if(!used[i]){
      used[i] = true;
      item.push(nums[i]);
      // console.log("item", item);
      helper(nums, used, item, result);
      item.pop();
      used[i] = false;
    }
  }
};

var permute = function(nums) {
  if(nums.length <= 1 ) return [nums];
  var result = [];
  helper(nums, [], [], result);
  return result;
};


console.log(permute([1]));
console.log(permute([1,2]));
