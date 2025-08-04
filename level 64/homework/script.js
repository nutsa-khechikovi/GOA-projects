const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();

  document.getElementById("selections").textContent = 
    `You chose: ${userChoice} | Computer chose: ${computerChoice}`;

  const resultText = determineWinner(userChoice, computerChoice);
  document.getElementById("result").textContent = resultText;
}

const buttons = document.querySelectorAll(".choices button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.getAttribute("data-choice");
    playGame(userChoice);
  });
});
