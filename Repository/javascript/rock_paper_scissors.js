console.log("Hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors")
    return userInput;
  else {
    console.log("Error 404");
  }
};
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "Game was a tie";
  if (userChoice === "rock")
    if (computerChoice === "Paper") return "Computer Won";
    else {
      return "User won";
    }
  if (userChoice === "paper")
    if (computerChoice === "Scissors") return "Computer Won";
    else {
      return "User lost";
    }
  if (userChoice === "scissors")
    if (computerChoice === "Rock") return "Computer Won";
    else {
      return "User lost";
    }
}
console.log(determineWinner("rock", "rock"));

const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
