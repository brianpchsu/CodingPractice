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
  var area = (C-A) * (D-B) + (G-E) * (H-F);
  if( B >= H || D <= F || A >= G || C <= E){
    return area;
  }
  var top = Math.min(D, H);
  var bottom = Math.max(B, F);
  var left = Math.max(A, E);
  var right = Math.min(C, G);

  return area - (top-bottom) * (right - left);
};


console.log(computeArea(-3,0,3,4,0,-1,9,2));
