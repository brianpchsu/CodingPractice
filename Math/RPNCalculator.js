// reverse polish notation (post-fix)
// 4 * (7 - 2) = 20
// 4 7 2 - *
// 4 5 *
// 20
//
// 2 5 3 + 4 + +
// 14
// "4 7 2 - *"
// 4 5 2 1 / 5 * + -
// -11

var RPNCalculator = function(str){
  var tempArr = str.split(" "); // [4, 7, 2, -, *]
  var current = 0;
  var toRun = false;
  while(tempArr.length >1 && current >=0){
    if(tempArr[current] === "+"){
      var tempNum = parseInt(tempArr[current-2]) +   parseInt(tempArr[current-1]);
      toRun = true;
    } else if (tempArr[current] === "-"){
      var tempNum =  parseInt(tempArr[current-2]) -   parseInt(tempArr[current-1]);
      toRun = true;
    }
    else if (tempArr[current] === "*"){
      var tempNum =  parseInt(tempArr[current-2]) *   parseInt(tempArr[current-1]);
      toRun = true;
    }
    else if (tempArr[current] === "/"){
      var tempNum =  parseInt(tempArr[current-2]) /   parseInt(tempArr[current-1]);
      toRun = true;
    }
    if(toRun){
      // console.log("current is ", current);
      // console.log("tempArr before ", tempArr);
      tempArr[current-2] = tempNum;
      tempArr.splice(current-1, 2);
      current = current-2;
      toRun = false;
      // console.log("tempArr update to ", tempArr);
      // console.log("new cuurent pointer", current);
    }
    current++;
  }
  return tempArr[0];
}

console.log(RPNCalculator("4 5 2 1 / 5 * + -"));
