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
