//Part 1

document.addEventListener("DOMContentLoaded", function() {

const board = document.getElementById("board");
const squares = board.children; 

  const children = board.children;
  for (let i = 0; i < children.length; i++) {
    children[i].classList.add("square");
  }


//Part 2
let currentPlayer = "X";

let gameActive = true;
let gameBoard = Array(9).fill(null); 

for (let i = 0; i < 9; i++) {
  squares[i].addEventListener("click", function() {

    if (!gameActive || gameBoard[i] !== null) return; 

    squares[i].textContent = currentPlayer;
    squares[i].classList.add(currentPlayer);

    gameBoard[i] = currentPlayer;


    currentPlayer = currentPlayer === "X" ? "O" : "X";

    let winner = checkWinner();
    if (winner) {
      gameActive = false;
      const status = document.getElementById("status");
      status.textContent = "Congratulations! " + winner + " is the Winner!";
      status.classList.add("you-won");
    }

  });
}
    
// Part 3 

for (let j = 0; j < 9; j++) {
  squares[j].addEventListener("mouseover", function () {

    if (gameBoard[j] === null && gameActive) {
      squares[j].classList.add("hover");

    }

  });

  squares[j].addEventListener("mouseout", function () {

    squares[j].classList.remove("hover");

  });
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