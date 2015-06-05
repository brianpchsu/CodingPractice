/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // if board is empty or board length is not 9, return false;
  if(!board.length || board.length !== 9 || board[0].length !==9) return false;

  // check row
  for(var row = 0; row < 9; row++){
    // use tempObj to record each row's data
    var tempObj = {};
    for(var col = 0; col < 9; col++){
      // empty cell, continue
      if(board[row][col] === '.'){
        continue;
        // prefilled number
      } else if (parseInt(board[row][col]) >0 && parseInt(board[row][col]) < 10){
        // if number already exists, duplicate, return false
        if(tempObj[board[row][col]]){
          return false;
        } else {
          // else, update obj with that number
          tempObj[board[row][col]] = true;
        }
      }
    }
  }

  // check col, same as checking row, but different order
  for(var col = 0; col < 9; col++){
    var tempObj = {};
    for(var row = 0; row < 9; row++){
      if(board[row][col] === '.'){
        continue;
      } else if (parseInt(board[row][col]) >0 && parseInt(board[row][col]) < 10){
        if(tempObj[board[row][col]]){
          return false;
        } else {
          tempObj[board[row][col]] = true;
        }
      }
    }
  }

  // check subbox, 3 X 3 boxes
  for(var row = 0; row < 3; row++){
    for(var col = 0 ; col < 3; col++){
      // define the checkRow and checkCol for later row, col position
      var checkRow = 3 * row;
      var checkCol = 3 * col;
      // define tempObj for each subbox
      var tempObj = {};
      for(var i = checkRow; i < checkRow + 3; i++){
        for(var j = checkCol; j < checkCol + 3; j++){
          if(board[i][j] === '.'){
            continue;
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
  // if reaching here, no false situation, valid Sudoku board
  return true;
};
