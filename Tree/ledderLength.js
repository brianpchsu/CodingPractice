/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {set<string>} wordDict
 * @return {number}
 */
 var Queue = function(){
   this._storage = [];
   this.push = function(value){
     this._storage.push(value);
   };
   this.peek = function(){
     return this._storage[0];
   };
   this.pop = function(){
     return this._storage.shift();
   };
   this.size = function(){
     return this._storage.length;
   };
   this.isEmpty = function(){
     return this._storage.length === 0;
   };
 } ;
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

var ladderLength = function(beginWord, endWord, wordDict) {
  var queue = new Queue();
  queue.push(beginWord);
  wordDict.remove(beginWord);
  var pathLength = 1;

  while(!queue.isEmpty()){
    var count = queue.size();
    for(var i = 0; i < count; i++){
      var current = queue.pop();
      for(var c = 0; c < 26; c++){
        for(var j = 0; j < current.length; j++){
          if(alphabet[c] ===current[j]){
            continue;
          }
          var temp = replace(current, j, alphabet[c]);
          if(temp === end){
            return pathLength + 1;
          }
          if(wordDict.contains(temp)){
            queue.push(temp);
            wordDict.remove(temp);
          }
        }
      }
    }
    pathLength++;
  }
  return 0;
};

var replace = function(inputString, index, character){
  var alphabetArr = inputString.split('');
  alphabetArr[index] = character;
  return alphabetArr.join('');
};

console.log(replace('abcd', 3, 'z'));
