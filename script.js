const MAX_SCORE = 5;
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

const showResult = (result) => {
  const resultBox = document.querySelector("#result");
  resultBox.textContent = result;
};

const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    showResult("Tie!");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    showResult("You lose! Paper beats Rock");

    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    showResult("You lose! Scissors beats Paper");

    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    showResult("You lose! Rock beats Scissors");

    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    showResult("You won! Rock beats Scissors");

    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    showResult("You won! Paper beats rock");

    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    showResult("You won! Scissors beats Paper");

    humanScore++;
  }
};

const playGame = (humanChoice) => {
  if (humanScore !== MAX_SCORE && computerScore !== MAX_SCORE) {
    playRound(humanChoice, getComputerChoice());
  } else {
    if (humanScore > computerScore) {
      showResult(
        `You won the game finally! Score: ${humanScore} - ${computerScore}`,
      );
    } else {
      showResult(
        `You lose the game. Better luck next time. Score: ${humanScore} - ${computerScore}`,
      );
    }
    humanScore = 0;
    computerScore = 0;
  }
};

const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", (event) => {
  playGame(event.target.textContent);
});
