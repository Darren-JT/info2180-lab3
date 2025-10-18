//Part 1

document.addEventListener("DOMContentLoaded", function() {

const board = document.getElementById("board");
const squares = board.children; 

  const children = board.children;
  let i = 0;

  while(i < children.length) {

    children[i].classList.add("square");

    i++;

  }


//Part 2
let currentPlayer = "X";

let gameActive = true;
let gameBoard = Array(9).fill(null); 

i = 0;
while(i < 9) {

    squares[i].addEventListener("click", function() {

        if (!gameActive || gameBoard[i] !== null) return; 

        squares[i].textContent = currentPlayer;
        squares[i].classList.add(currentPlayer);

        gameBoard[i] = currentPlayer;

        if(currentPlayer === "X") {
            currentPlayer = "O";

        } 
        else {
            currentPlayer = "X";
        }

        let winner = checkWinner();
        if (winner) {
          gameActive = false;
          const status = document.getElementById("status");
          status.textContent = "Congratulations! " + winner + " is the Winner!";
          status.classList.add("you-won");
        }

    });

    i++;
}
    
// Part 3 

let j = 0;
while (j < 9) {
  squares[j].addEventListener("mouseover", function () {

    if (gameBoard[j] === null && gameActive) {
      squares[j].classList.add("hover");

    }

  });

  squares[j].addEventListener("mouseout", function () {

    squares[j].classList.remove("hover");

  });

  j++;
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combo of winningCombos) {


    const [a, b, c] = combo;

    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {

      return gameBoard[a];

    }

    
  }
  return null;
}

}); 