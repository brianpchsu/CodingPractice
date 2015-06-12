/**
 * @param {number} n
 * @return {string}

 When n is 1, output 1
 when n is 2, last output is 1, so this output is 11
 when n is 3, last output is 11, so ths output is 21
 when n is 4, last output is 21, so this output is 1211
 */

var countAndSay = function(n) {
  // if n is less than 1, then no count will occur
  if(n < 1) return '';
  // result for the beginning case, 1
  var result = '1';
  // iterate from 2 to n
  for(var i = 2; i <= n; i++){
    // define temp as string buffer, count for counting
    var temp = '', count = 1, prev = result[0];
    // checking from reuslt position 1 to the end
    for(var j = 1; j < result.length; j++){
      // if result[j] equal to prev, continue increment count
      if(result[j] === prev){
        count++;
        // if result[j] is not equal to prev
      } else {
        // add the count and prev (num) to temp
        temp += count.toString() + prev;
        // reset count
        count = 1;
        //update result[j] to prev
        prev = result[j];
      }
    }
    // reaching the end, put the count and prev to temp
    temp += count.toString() + prev;
    // save temp to result, the updated result for next round of count
    result = temp;
  }
  return result;
};

console.log(countAndSay(3));
