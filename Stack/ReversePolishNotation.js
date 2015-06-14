/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  var stack = [];
  for(var i = 0; i < tokens.length; i++){
    if((tokens[i][0] === '-' && tokens[i].length >1) || tokens[i][0] >='0' && tokens[i][0] <='9'){
      stack.push(parseInt(tokens[i]));
    } else {
      var v1 = stack.pop();
      var v2 = stack.pop();
      // console.log("i is ", i, 'v2 is ', v2, ' v1 is ', v1);
      if(tokens[i] === "+") stack.push(v2 + v1);
      if(tokens[i] === "-") stack.push(v2 - v1);
      if(tokens[i] === "*") stack.push(v2 * v1);
      if(tokens[i] === "/") {
        var temp = v2 / v1 > 0? Math.floor(v2/v1): Math.ceil(v2/v1);
        stack.push(Math.round(temp));
      }
      // console.log(stack);
    }
  }
  return stack.pop();
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
console.log(evalRPN(["4","13","5","/","+"]));
