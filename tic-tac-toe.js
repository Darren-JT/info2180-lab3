document.addEventListener("DOMContentLoaded", function() {

const board = document.getElementById("board");

  const children = board.children;
  let i = 0;

  while(i < children.length) {

    children[i].classList.add("square");

    i++;


  }

});

let currentPlayer = "X";

let gameActive = true;
let board = Array(9).fill(null);
