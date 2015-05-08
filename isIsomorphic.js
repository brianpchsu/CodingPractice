/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}

 Given two strings s and t, determine if they are isomorphic.

 Two strings are isomorphic if the characters in s can be replaced to get t.

 All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

 For example,
 Given "egg", "add", return true.

 Given "foo", "bar", return false.

 Given "paper", "title", return true.

 Note:
 You may assume both s and t have the same length.

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
