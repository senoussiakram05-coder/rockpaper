console.log("Hello World");

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  }

  if (randomNumber < 2 / 3) {
    return "paper";
  }

  return "scissors";
}

function getHumanChoice() {
  return prompt("Choose rock, paper, or scissors:");
}

function playGame() {
  let humanScore = 2;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const humanSelection = humanChoice.toLowerCase();
    const computerSelection = computerChoice.toLowerCase();

    if (humanSelection === computerSelection) {
      console.log(`Tie! Both players chose ${humanSelection}`);
      return;
    }

    const humanWins =
      (humanSelection === "rock" && computerSelection === "scissors") ||
      (humanSelection === "paper" && computerSelection === "rock") ||
      (humanSelection === "scissors" && computerSelection === "paper");

    if (humanWins) {
      humanScore++;
      console.log(`You win! ${humanSelection} beats ${computerSelection}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
    }
  }

  for (let round = 0; round < 5; round++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log(`Final score: You ${humanScore}, Computer ${computerScore}`);
}

playGame();
