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
  if(!intervals || intervals.length === 0) return intervals;
  intervals = intervals.sort(function(a, b){
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

console.log(merge([[1,3],[2,6],[15,18], [8,10]]));
