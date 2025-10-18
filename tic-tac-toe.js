//Part 1

document.addEventListener("DOMContentLoaded", function() {

const board = document.getElementById("board");

  const children = board.children;
  let i = 0;

  while(i < children.length) {

    children[i].classList.add("square");

    i++;


  }

});

//Part 2
let currentPlayer = "X";

let gameActive = true;
let board = Array(9).fill(null);

let i=0;
while(i < 9) {


    squares[i].addEventListener("click", function(){

        if (!gameActive || board[i] !== null) {


        squares[i].textContent = currentPlayer;
        squares[i].classList.add(currentPlayer);

        board[i] = currentPlayer;

        if(currentPlayer === "X") {
            currentPlayer = "O";

        } 
        else {
            currentPlayer = "X";
        }
        i++;
    };
    
// Part 3 

let j = 0;
while (j < 9) {
  squares[j].addEventListener("mouseover", function () {


    if (board[j] === null && gameActive) {
      squares[j].classList.add("hover");

    }

  });

  squares[j].addEventListener("mouseout", function () {

    squares[j].classList.remove("hover");

  });

  j++;
}

}