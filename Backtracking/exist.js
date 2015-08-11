/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  // if(board.length === 0 || board[0].length === 0) return false;
  var visited = board.slice();
  for(var i = 0; i < board.length; i++){
    for(var j = 0; j < board[0].length; j++){
      visited[i][j] = false;
    }
  }
  console.log("visited", visited);

  for(var i = 0; i < board.length; i++){
    for(var j = 0; j < board[0].length; j++){
      if(findWord(board, visited, i, j, word, 0)){
        return true;
      }
    }
  }
  return false;
};

var findWord = function(board, visited, row, col, word, index){
  if(index === word.length) return true;
  console.log("visited", visited);

  if(row < 0 || col < 0 || row >= board.length || col >= board[0].length || visited[row][col] || board[row][col] !== word[index]){
    console.log("row", row, "- col", col, "- board[0]", board[0].length, "- visited[row][col]", visited[row][col], "- board[row][col]", board[row][col], "- word[index]", word[index]);
    return false;
  }
  visited[i][j] = true;
  console.log("visited", visited);
  if(findWord(board, visited, row-1, col, word, index+1)) return true;
  if(findWord(board, visited, row+1, col, word, index+1)) return true;
  if(findWord(board, visited, row, col-1, word, index+1)) return true;
  if(findWord(board, visited, row, col+1, word, index+1)) return true;
  visited[row][col] = false;
  return false;
};

console.log(exist(["a"], "a"));
