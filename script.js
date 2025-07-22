const roundsNumber = 5;
let computerChoice = "";
let userScoreDisplay = document.querySelector(".userScore");
let computerScoreDisplay = document.querySelector(".computerScore");
let announcement = document.querySelector(".announcement");
// ! Gets the computer choice randomly
function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "";
  }
}
// ! Initialize the scores
let userScore = 0;
let computerScore = 0;
// ! Resets the game
function reset() {
  userScore = 0;
  computerScore = 0;
  userScoreDisplay.textContent = userScore;
  computerScoreDisplay.textContent = computerScore;
}
// ! Play one round
function playRound(computerC, humanC) {
  if (computerC === humanC) {
    announcement.textContent = "It's a tie";
  } else if (
    (humanC === "rock" && computerC === "scissors") ||
    (humanC === "paper" && computerC === "rock") ||
    (humanC === "scissors" && computerC === "paper")
  ) {
    announcement.textContent = "You won";
    userScore++;
  } else {
    announcement.textContent = "The computer won";
    computerScore++;
  }
  userScoreDisplay.textContent = userScore;
  computerScoreDisplay.textContent = computerScore;
  if (userScore === roundsNumber) {
    announcement.textContent = " You won the game!";
    reset();
  } else if (computerScore === roundsNumber) {
    announcement.textContent = " The computer won the game!";
    reset();
  }
}
// ! Record the button presses and play a round every time is pressed
const choices = document.querySelectorAll(".buttonImage");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const humanChoice = choice.id;
    computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
  });
});
