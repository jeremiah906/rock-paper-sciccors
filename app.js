//Cache DOM
let userScore = 0;
let computerScore = 0;
let userScore_DOM = document.getElementById("user-score");
let computerScore_DOM = document.getElementById("computer-score");
const resultMessage = document.querySelector(".result-message");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resetButton = document.querySelector(".reset");

resultMessage.innerText = `Pick Your Choice To Start Game`;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function win(userChoice, compChoice) {
  let newUserScore = ++userScore;
  userScore_DOM.innerText = newUserScore;
  resultMessage.innerText = `You Won! ${userChoice} beats ${compChoice} `;
}

function lose(userChoice, compChoice) {
  let newCompScore = ++computerScore;
  computerScore_DOM.innerText = newCompScore;
  resultMessage.innerText = `You Lost ... ${compChoice} beats ${userChoice} `;
}

function draw() {
  resultMessage.innerText = `It's A Draw.`;
}

resetButton.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScore_DOM.innerText = 0;
  computerScore_DOM.innerText = 0;
  resultMessage.innerText = `Pick Your Choice To Start Game`;
});

function game(userChoice) {
  const compChoice = getComputerChoice();

  switch (userChoice + compChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, compChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, compChoice);
      break;
    default:
      draw();
      break;
  }
}

// Starting game
(function init() {
  rock.addEventListener("click", () => game("rock"));

  paper.addEventListener("click", () => game("paper"));

  scissors.addEventListener("click", () => game("scissors"));
})();
