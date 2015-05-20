/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [];
  var pairs = {'(' : ')', '[' : ']', '{' : '}'};

  for (var i = 0; i < s.length; i++){
    var chr = s[i];
    if(pairs[chr]){
      stack.push(chr);
    } else if(chr === ')' || chr === ']' || chr === '}'){
      if(pairs[stack.pop()] !== chr){
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid('()[{}]'))
