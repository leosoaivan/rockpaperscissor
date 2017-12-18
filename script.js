const gameChoices = ["rock", "paper", "scissor"];

function computerPlay() {
  return gameChoices[Math.floor(Math.random()*gameChoices.length)];
}

function beginGame(computerSelection, playerSelection) {
  let computerIndex = gameChoices.indexOf(computerSelection);
  let playerIndex = gameChoices.indexOf(playerSelection);
  let results = computerIndex - playerIndex;
  
  if (results === 0) {
    console.log("The computer picked " + computerSelection + ", too.");
    console.log("You tied!");
  } else {
    console.log("The computer picked " + computerSelection + ".");
    if (results == -1 || results == 2) {
      console.log("You won!");
    } else {
      console.log("You lost!");
    }
  }
  console.log("GOOD GAME THO")
}

function game() {
  let gameCount = 5;
  
  while (gameCount > 0) {
    playerSelection = prompt("Choose 'rock', 'paper', or 'scissor.");
    playerSelection = playerSelection.toLowerCase();
    
    beginGame(computerPlay(), playerSelection);
    
    gameCount--;
  }
}

game();