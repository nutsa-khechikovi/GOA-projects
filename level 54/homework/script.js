const secretNumber = 7;
const button = document.getElementById("guessBtn");
button.addEventListener("click", function() {
    const userGuess = Number(prompt("Enter a number between 1 and 10"));
    if (userGuess > secretNumber) {
     alert("Your number is too high, try again.");
    } else if (userGuess < secretNumber) {
      alert("Your number is too low, try again.");
    } else if (userGuess === secretNumber) {
     alert("You have guessed the secret number!");
    } else {
     alert("Invalid input!");
    }
});