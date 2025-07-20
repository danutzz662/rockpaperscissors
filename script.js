let roundsNumber = Number(prompt("How many rounds do you want to play?", ""));
function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "";
      break;
  }
}
function getHumanChoice() {
  let choice = prompt("Rock?Paper?Scissors?", "");
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerC, humanC) {
  humanC = humanC.toLowerCase();
  console.log("You chose", humanC);
  console.log("The computer chose", computerC);
  if (computerC === humanC) {
    console.log("It's a tie!");
  } else if (
    (humanC === "rock" && computerC === "scissors") ||
    (humanC === "paper" && computerC === "rock") ||
    (humanC === "scissors" && computerC === "paper")
  ) {
    console.log("You won");
    humanScore++;
  } else {
    console.log("The computer won");
    computerScore++;
  }
}
function playGame(num) {
  for (let i = 0; i < num; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
  }
  console.log("Final score");
  console.log("Your score", humanScore);
  console.log("Computer's score", computerScore);
  if (humanScore > computerScore) console.log("Great you won!");
  else if (humanScore === computerScore) console.log("It's a tie");
  else console.log("The computer won");
}
playGame(roundsNumber);
