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
var insert = function(intervals, newInterval) {
  intervals.sort(function(a, b){
    return a.start - b.start;
  });
  var result = [];
  for(var i = 0; i < intervals.length; i++){
    if(intervals[i].end < newInterval.start){
      result.push(intervals[i]);
    } else if (intervals[i].start > newInterval.end){
      result.push(newInterval);
      newInterval = intervals[i];
    } else if (intervals[i].end >= newInterval.start || intervals[i].start <= newInterval.end){
      newInterval.start = Math.min(intervals[i].start, newInterval.start);
      newInterval.end = Math.max(intervals[i].end, newInterval.end);
    }
  }
  result.push(newInterval);
  return result;
};
