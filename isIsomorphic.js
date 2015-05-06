/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {
    var sourceMap = {};
    var usedChar = [];
    // //Check if two string are in the same length (in assumption)
    // if(s.length !== t.length){
    //   return false;
    // }
    // check every character in the first string
    for( var i = 0; i< s.length; i++){
      // if no record of the character in the sourceMap object
      if(!sourceMap[s[i]]){
        // if the character is used by other souce already, return false
        if(usedChar.indexOf(t[i])>-1){
          return false;
        }
        // save the conter part of the letter t[i] in sourceMap
        sourceMap[s[i]] = t[i];
        // update the usedChar array
        usedChar.push(t[i]);
      } else {  // if source map contain the s[i]
        // check if the couter part match the previous one
        if(t[i] !==sourceMap[s[i]]){
          // if not match, return false
          return false;
        }
      }
    }
    // after all characters check, the two string are isomorphic
    return true;
};
