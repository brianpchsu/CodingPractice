/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  var diff = new Array(gas.length);
  for(var i = 0; i < gas.length; i++){
    diff[i] = gas[i] - cost[i];
  }
  var leftGas = 0, sum = 0, startnode = 0;
  for(var i = 0; i < gas.length; i++){
    leftGas += diff[i];
    sum += diff[i];
    if(sum < 0){
      startnode = i+1;
      sum = 0;
    }
  }
  return leftGas < 0? -1: startnode;
};
