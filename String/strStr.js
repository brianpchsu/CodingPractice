/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}

 O(nm) runtime, O(1) space – Brute force:
 You could demonstrate to your interviewer that this problem can be solved using known efficient algorithms such as Rabin-Karp algorithm, KMP algorithm, and the Boyer- Moore algorithm. Since these algorithms are usually studied in an advanced algorithms class, it is sufficient to solve it using the most direct method in an interview – The brute force method.
 The brute force method is straightforward to implement. We scan the needle with the haystack from its first position and start matching all subsequent letters one by one. If one of the letters does not match, we start over again with the next position in the haystack.
 The key is to implement the solution cleanly without dealing with each edge case separately.
 */
var strStr = function(haystack, needle) {
  // if needle is empty, return 0
  if(needle.length ===0) return 0;
  if(haystack.length < needle.length) return -1;
  // check from the beginning of the hayStack
  for(var i = 0; i <= haystack.length - needle.length; i++){
    // boolean isSuccess
    var isSuccess = true;
    // check from the beginning of the needle
    for(var j = 0; j < needle.length; j++){
      // check if haystack and needle have the same character
      if(haystack[i+j] !== needle[j]){
        // if the characters are not the same, break
        isSuccess = false;
        break;
      }
    }
    // if the needle meet and the haystack's substring are the same, return the i position
    if(isSuccess) return i;
  }
  // if reaching here, no solution
  return -1;
};

console.log(strStr('aaa','a'));
console.log(strStr('a','a'));
console.log(strStr('','a'));
