const tries = 5;
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3 + 1);

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
};

const getHumanChoice = () => {
  return prompt("What is your choice: (Rock, Paper, Scissors)");
};

const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("Tie!");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");

    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper");

    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");

    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You won! Rock beats Scissors");

    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You won! Paper beats rock");

    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You won! Scissors beats Paper");

    humanScore++;
  }
};

const playGame = () => {
  for (let i = 0; i < tries; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    TimeRanges.sle
  }

  if (humanScore > computerScore) {
    console.log("You won the game finally!");
  } else {
    console.log("You lose the game. Better luck next time.");
  }

  console.log(`Score: ${humanScore} - ${computerScore}`);
};

playGame();
