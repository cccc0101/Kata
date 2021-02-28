let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let board = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],];
function generateBoard(first,second){
  board[first[0]][first[1]] = 1;
  board[second[0]][second[1]] = 1;
  return board
}
function queenThreat(){
  return (whiteQueen[0] == blackQueen[0] || whiteQueen[1]== blackQueen[1] || (whiteQueen[0]+whiteQueen[1]) == (blackQueen[0]+blackQueen[1])|| (whiteQueen[0] - blackQueen[0]) == (whiteQueen[1] - blackQueen[1])) ? true : false 
}
let generatedBoard = generateBoard(whiteQueen, blackQueen)
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));



