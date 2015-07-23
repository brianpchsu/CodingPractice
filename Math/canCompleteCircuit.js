/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  // define remainingGas for overall record, currentSum for checking current valid station,
  // startNode for the potential final output position
  var remainingGas = 0, currentSum = 0, startNode = 0;
  for(var i = 0; i < gas.length; i++){
    // update the remainingGas with each station's adding gas and comcurrentSumption
    remainingGas += gas[i] - cost[i];
    // check the currentSum for that station
    currentSum += gas[i] - cost[i];
    // if the currentSum is less than 0, then it's not possible to circle from that point (run out of gas)
    // update the node to the next one and currentSum to 0
    if(currentSum < 0){
      startNode = i+1;
      currentSum = 0;
    }
  }
  // if overall remainingGas is less than 0, then it's not possible to go over circular route
  // otherwise it's possible to start from the startNode position
  return remainingGas < 0? -1: startNode;
};
