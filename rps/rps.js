let userChoiceDisplay = document.getElementById("userChoice");
let botChoiceDisplay = document.getElementById("botChoice");
let resultsDisplay = document.getElementById("results");
let rpsDisplay = document.querySelectorAll("button");
let computerOption = ["rock", "paper", "scissor"];
let botChoice;
let userChoice;
rpsDisplay.forEach((rpsDisplay) =>
  rpsDisplay.addEventListener("click", (e) => {
    userChoice = e.target.name;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    results();
  })
);
let generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * rpsDisplay.length);
  botChoice = computerOption[randomNumber];
  botChoiceDisplay.innerHTML = botChoice;
};
let results = () => {
  if (botChoice == userChoice) {
    resultsDisplay.innerHTML = "draw";
  }
  if (
    (botChoice == "rock" && userChoice == "paper") ||
    (botChoice == "scissor" && userChoice == "rock") ||
    (botChoice == "paper" && userChoice == "scissor")
  ) {
    resultsDisplay.innerHTML = "win";
  }
  if (
    (botChoice == "paper" && userChoice == "rock") ||
    (botChoice == "rock" && userChoice == "scissor") ||
    (botChoice == "scissor" && userChoice == "paper")
  ) {
    resultsDisplay.innerHTML = "lose";
  }

  if (resultsDisplay.innerHTML === "lose") {
    resultsDisplay.style.color = "red";
  } else if (resultsDisplay.innerHTML === "draw") {
    resultsDisplay.style.color = "white";
  } else if (resultsDisplay.innerHTML === "win") {
    resultsDisplay.style.color = "green";
  }
};
