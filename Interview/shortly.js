var longUrlMap = {}, shortUrlMap= {};

// bit.ly/12345
var shortly = function(url){
  // check if we already have url
  if(longUrlMap[url]){
    return longUrlMap[url];
  } else {
    console.log(longUrlMap);
    var shorterUrl = hashURL(url);
    longUrlMap[url] = shorterUrl;
    shortUrlMap[shorterUrl] = url;
    return shorterUrl;
  }
};

var checkShortUrl = function(url){
  return shortUrlMap[url]? shortUrlMap[url] : null;
};

//helper funciton for generating shorten url
var hashURL = function(url){
  var inputSelection = [0,1,2, 3, 4, 5, 6, 7, 8, 9, 'a', 'z'];
  var shorResult = '';
  for(var i =0; i< 6; i++){
    shorResult += inputSelection[Math.floor(Math.random()*inputSelection.length)];
  }
  while(true){
    if(checkDBShortUrl(result)){
      result = hashURL(url);
    } else {
      break;
    }
  }
  return shorResult;
};


var checkDBShortUrl = function(){

};

shortly.exports = shortly;

var temp = shortly('uber.com');
console.log(checkShortUrl(temp));
console.log(checkShortUrl('abc'));
// console.log(shortly('uber.com'));
// console.log(shortly('google.com'));
// console.log(shortly('uber.com'));
