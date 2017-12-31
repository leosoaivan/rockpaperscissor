const gameChoices = ["rock", "paper", "scissor"];
const buttons = Array.from(document.querySelectorAll('button'));

function playGame() {
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      clearOldMessage();
      let gameSelections = generateGameSelections(e);
      let computerSelection = gameSelections["computerSelection"];

      let roundResult = playRound(gameSelections);
      let messageText = generateMessage(computerSelection, roundResult);
      
      addNewMessage("#container", messageText);
    })
  })
}

function clearOldMessage() {
  let oldMessage = document.querySelector("#message");
  if (oldMessage) {
    oldMessage.remove();
  }
}

function generateGameSelections(e) {
  var gameSelections = {
    "computerSelection": getComputerSelection(),
    "playerSelection": e.target.value
  };
  return gameSelections;
}

function getComputerSelection() {
  return gameChoices[Math.floor(Math.random()*gameChoices.length)];
}

function playRound(selections) {
  let comparison = compareSelections(selections);
  let result;

  if (comparison === 0) {
    result = "tie";
  } else if (comparison == -1 || comparison == 2) {
    result = "win";
  } else {
    result = "loss";
  }
  
  return result;
}

function compareSelections(selections) {
  let computerSelection = selections["computerSelection"];
  let playerSelection = selections["playerSelection"];

  let comparison = returnIndexOf(computerSelection) - returnIndexOf(playerSelection);

  return comparison;
}

function returnIndexOf(selection) {
  return gameChoices.indexOf(selection);
}

function generateMessage(computerSelection, result) {
  if (result == "tie") {
    return ("The computer picked " + computerSelection + ", too. You tied!");
  } else {
    if (result == "win") {
      return ("The computer picked " + computerSelection + ". You won!");
    } else {
      return ("The computer picked " + computerSelection + ". You lost!");
    }
  }
}

function addNewMessage(targetElement, messageText) {
  const container = document.querySelector(targetElement);
  const messageDiv = document.createElement('div')

  messageDiv.setAttribute("id", "message");
  messageDiv.textContent = messageText;
  container.appendChild(messageDiv);
}

playGame();
