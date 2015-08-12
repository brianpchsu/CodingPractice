/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  var first = version1.split('.');
  var second = version2.split('.');
  var firstLen = first.length;
  var secondLen = second.length;
  var index1 = 0, index2 = 0;


  while(index1 < firstLen && index2 < secondLen){
    if(parseInt(first[index1]) > parseInt(second[index2])){
      return 1;
    } else if (parseInt(first[index1]) < parseInt(second[index2])){
      return -1;
    } else {
      index1++;
      index2++;
    }
  }
  console.log("first ", first, " second ", second);
  console.log("firstLen", firstLen);
  console.log("secondLen", secondLen);
  console.log("index1", index1);
  console.log("index2", index2);
  if(index1 === index2){
    return 0;
  } else if (index1 > index2){
    return 1;
  } else {
    return -1;
  }
};

// console.log(compareVersion('0.1', '1.1'));
// console.log(compareVersion('1.4', '0.2'));
// console.log(compareVersion('0.1', '0.1'));
console.log(compareVersion('1.1', '1.10'));
// console.log(compareVersion('01', '1'));
// console.log(compareVersion('1', '1.1'));
