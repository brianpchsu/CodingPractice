/**
 * @param {string} str
 * @returns {string}

 What constitutes a word?
 A sequence of non-space characters constitutes a word.
 Could the input string contain leading or trailing spaces?
 Yes. However, your reversed string should not contain leading or trailing spaces.
 How about multiple spaces between two words?
 Reduce them to a single space in the reversed string.

  Given s = "the sky is blue",
  return "blue is sky the".
 */
var reverseWords = function(str) {
  // if str contain only white space, return ''
  if (!str.replace(/\s/g, '').length) {
      // string only contained whitespace (ie. spaces, tabs or line breaks)
      return '';
  }
  // else change str to array, reverse, rejoin to string, trim front & back, replace multiple white
  // space with just one white space
  return str.split(' ').reverse().join(' ').trim().replace(/\s{2,}/g, ' ');
};


