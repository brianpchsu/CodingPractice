/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  if(!board.length || board.length !== 9 || board[0].length !==9) return false;

  // check row
  for(var row = 0; row < 9; row++){
    var tempObj = {};
    for(var col = 0; col < 9; col++){
      if(board[row][col] === '.'){
        continue;
      } else if (parseInt(board[row][col]) < 0 || parseInt(board[row][col]) > 10){
        return false;
      } else if (parseInt(board[row][col]) >0 && parseInt(board[row][col]) < 10){
        if(tempObj[board[row][col]]){
          return false;
        } else {
          tempObj[board[row][col]] = true;
        }
      }
    }
  }

  // check col
  for(var col = 0; col < 9; col++){
    var tempObj = {};
    for(var row = 0; row < 9; row++){
      if(board[row][col] === '.'){
        continue;
      } else if (parseInt(board[row][col]) < 0 || parseInt(board[row][col]) > 10){
        return false;
      } else if (parseInt(board[row][col]) >0 && parseInt(board[row][col]) < 10){
        if(tempObj[board[row][col]]){
          return false;
        } else {
          tempObj[board[row][col]] = true;
        }
      }
    }
  }

  // check subbox
  for(var row = 0; row < 3; row++){
    for(var col = 0 ; col < 3; col++){
      var checkRow = 3 * row;
      var checkCol = 3 * col;
      var tempObj = {};
      for(var i = checkRow; i < checkRow + 3; i++){
        for(var j = checkCol; j < checkCol + 3; j++){
          if(board[i][j] === '.'){
            continue;
          } else if (parseInt(board[i][j]) < 0 || parseInt(board[i][j]) > 10){
            return false;
          } else if (parseInt(board[i][j]) > 0 && parseInt(board[i][j]) < 10){
            if(tempObj[board[i][j]]){
              return false;
            } else {
              tempObj[board[i][j]] = true;
            }
          }
        }
      }
    }
  }
  return true;
};
