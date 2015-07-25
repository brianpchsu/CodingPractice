/*
  largest set of number
  find the lowest n numbers and the highest n number

  Input: a set of number (array)
  Output: lower n numbers and the upper n numbers in separate tuple array

  Thinking:
    1. sort
    2. select the n front each end, use hashmap for recording repeat number
*/

var selectNnumber = function(inputArr, n){
  // sort the inputArr in ascending order
  inputArr.sort(function(a, b){
    return a - b;
  });
  // define result, lowerRange record, and higherRange record
  var result = [[], []], lowRecord = {}, highRecord = {};
  // define start and end position for checking
  var start = 0, end = inputArr.length -1;
  // while the amount of lower end result hasn't reach n yet and start (checking) position is still in the input range
  while(result[0].length < n && start < inputArr.length){
    // check if the input number hasn't been inserted to the result yet
    if(!lowRecord[inputArr[start]]){
      // insert the number to the result
      result[0].push(inputArr[start]);
      // insert the number to hashmap for later checking
      lowRecord[inputArr[start]] = true;
      // increment the start position
      start++;
      // if the number had been inserted to the result already
    } else {
      // just check the next number
      start++;
    }
  }
  // the higher range is the same as the lower range, just use the end position and reverse the direction
  while(result[1].length < n && end >= 0){
    if(!highRecord[inputArr[end]]){
      result[1].push(inputArr[end]);
      highRecord[inputArr[end]] = true;
      end--;
    } else {
      end--;
    }
  }
  return result;
};

console.log(selectNnumber([3, 2, 1, 0, 6, 5, 4], 2));
console.log(selectNnumber([3, 2, 1, 0, 6, 5, 4], 4));
console.log(selectNnumber([0], 4));


