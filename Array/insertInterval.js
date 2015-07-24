/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
// Solution 1
var insert = function(intervals, newInterval) {
  // sort the origin interval based on the start value
  intervals.sort(function(a, b){
    return a.start - b.start;
  });
  // define final result array
  var result = [];
  // checking from each item in intervals
  for(var i = 0; i < intervals.length; i++){
    // if the item in the interval is less than newInterval(no overlap)
    if(intervals[i].end < newInterval.start){
      //add the item to result
      result.push(intervals[i]);
      // if the item.start is greater than the the newInterval's end
    } else if (intervals[i].start > newInterval.end){
      //push the smaller newInterval to result
      result.push(newInterval);
      // save the item to newInterval for next iteration
      newInterval = intervals[i];
      // if the item's end is greater than newInterval's start or
      // the item's start is less than newInterval's end
    } else if (intervals[i].end >= newInterval.start || intervals[i].start <= newInterval.end){
      // then the new start will be the smaller start
      newInterval.start = Math.min(intervals[i].start, newInterval.start);
      // and the new end will be the bigger end
      newInterval.end = Math.max(intervals[i].end, newInterval.end);
    }
  }
  //after all the iteration, save the newInterval to the result
  result.push(newInterval);
  return result;
};

// Solution 2 use the mergeInterval method
var insert = function(intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort(function(a, b){
    return a.start - b.start;
  });
  var result = [intervals[0]];
  for(var i = 1; i < intervals.length; i++){
    if(result[result.length-1].end >= intervals[i].start){
      result[result.length-1].end = Math.max(result[result.length-1].end, intervals[i].end);
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
};
