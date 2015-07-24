/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  // if the intervals is null or with 0 items, return it
  if(!intervals || intervals.length === 0) return intervals;
  // sort the intervals based on the starting value (no need to check end value if the start values are the same)
  // because we still will check end value later
  intervals = intervals.sort(function(a, b){
    return a.start - b.start;
  });
  // give result the first sorted intervals item
  var result = [intervals[0]];
  // check from the second item in the sorted intervals
  for(var i = 1; i < intervals.length; i++){
    // if the current result end is greater than the the current item's start, then there is an overlap
    if(result[result.length-1].end >= intervals[i].start){
      // update the current result end with the max value of the two
      result[result.length-1].end = Math.max(result[result.length-1].end, intervals[i].end);
    } else {
      // if no overlap, then just insert the item to intervals
      result.push(intervals[i]);
    }
  }
  return result;
};

console.log(merge([[1,3],[2,6],[15,18], [8,10]]));
