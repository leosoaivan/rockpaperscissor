const buttons = Array.from(document.querySelectorAll('button'));
const gameChoices = ["rock", "paper", "scissor"];

function computerPlay() {
  return gameChoices[Math.floor(Math.random()*gameChoices.length)];
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
  }
  
  return result;
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

function clearMessages() {
  let oldMessage = document.querySelector("#message");
  if (oldMessage) {
    oldMessage.remove();
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    clearMessages();
    const container = document.querySelector("#container")

    let computerSelection = computerPlay();
    let playerSelection = e.target.value;
    
    let roundResult = playRound(computerSelection, playerSelection);
    let messageText = generateMessage(computerSelection, roundResult);

    const messageDiv = document.createElement('div')
    messageDiv.setAttribute("id", "message");

    messageDiv.textContent = messageText;

    container.appendChild(messageDiv);
  })
})