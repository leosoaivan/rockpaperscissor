const gameChoices = ["rock", "paper", "scissor"];

function computerPlay() {
  return gameChoices[Math.floor(Math.random()*gameChoices.length)];
}

function playerPlay() {
  playerSelection = prompt("Choose 'rock', 'paper', or 'scissor.");
  return playerSelection.toLowerCase();
}

function playRound(computerSelection, playerSelection) {
  let computerIndex = gameChoices.indexOf(computerSelection);
  let playerIndex = gameChoices.indexOf(playerSelection);
  let comparison = computerIndex - playerIndex;
  let result;

  if (comparison === 0) {
    result = "tie";
  } else if (comparison == -1 || comparison == 2) {
    result = "win";
  } else {
    result = "loss";
  } return result;
}

function game() {
  let gameCount = 5;
  let computerScore = 0;
  let playerScore = 0;
  
  while (gameCount > 0) {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    let roundResult = playRound(computerSelection, playerSelection);
    
    if (roundResult == "tie") {
      console.log("The computer picked " + computerSelection + ", too.");
      console.log("You tied!");
    } else {
      console.log("The computer picked " + computerSelection + ".");
      if (roundResult == "win") {
        playerScore++;
        console.log("You won!");
      } else {
        computerScore++;
        console.log("You lost!");
      }
    }
    console.log(`The current score is COMPUTER:${computerScore} and YOU:${playerScore}\n`);
    gameCount--;
  }
}

game();