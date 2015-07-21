/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  // get the total area
  var area = (C-A) * (D-B) + (G-E) * (H-F);
  // if the bottom left x of the first rectangle is greater than top right x of the second rectangle
  // or if bottom left y of the first rectangle is greater than top right y of the second rectangle
  // or if top right y of the first rectangle is less than bottom left y of the second rectangle
  // or if top right x of the first rectangle is less than the bottom left x of the second rectangle
  // then there is no overlap
  if( A >= G || B >= H || D <= F ||  C <= E){
    return area;
  }

  // if there is an overlap, get the coordinate of the overlapping part
  var top = Math.min(D, H);
  var bottom = Math.max(B, F);
  var left = Math.max(A, E);
  var right = Math.min(C, G);

  // return the total area by deducting the overlapping area
  return area - (top-bottom) * (right - left);
};


console.log(computeArea(-3,0,3,4,0,-1,9,2));
