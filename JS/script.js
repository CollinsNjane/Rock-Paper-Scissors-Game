let userScore = 0;
let computerScore = 0;
let wins = 0;
let ties = 0;
let losses = 0;
let games = 1;
let playerSelection = "";
const userScore_DOM = document.getElementById("userScore");
const compScore_DOM = document.getElementById("compScore");
const tiesScore_DOM = document.getElementById("tiesScore");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

rock_div.addEventListener("click", function () {
  if (games <= 5) {
    playerSelection = "rock";
    game();
    if (games == 6) {
      if (computerScore > userScore) {
        console.log("You lost the game of 5 rounds");
        document.getElementById("finalGames").innerHTML =
          "You lost the game of 5 rounds" + "\n";
      }
      if (userScore > computerScore) {
        console.log("You Won the game of 5 rounds");
        document.getElementById("finalGames").innerHTML =
          "You Won the game of 5 rounds" + "\n";
      }
      if (userScore == computerScore) {
        console.log("There was no winner, it was a draw for all the 5 rounds");
        document.getElementById("finalGames").innerHTML =
          "There was no winner, it was a draw for all the 5 rounds" + "\n";
      }
      console.log("You won " + wins + " times!");
      document.getElementById("finalWins").innerHTML =
        "You won " + wins + " times!" + "\n";
      console.log("You lost " + losses + " times!");
      document.getElementById("finalLosses").innerHTML =
        "You lost " + losses + " times!" + "\n";
      console.log("You tied " + ties + " times!");
      document.getElementById("finalTies").innerHTML =
        "You tied " + ties + " times!" + "\n";
      console.log("");
    }
  }
});
paper_div.addEventListener("click", function () {
  if (games <= 5) {
    playerSelection = "paper";
    game();
    if (games == 6) {
      if (computerScore > userScore) {
        console.log("You lost the game of 5 rounds");
        document.getElementById("finalGames").innerHTML =
          "You lost the game of 5 rounds" + "\n";
      }
      if (userScore > computerScore) {
        console.log("You Won the game of 5 rounds");
        document.getElementById("finalGames").innerHTML =
          "You Won the game of 5 rounds" + "\n";
      }
      if (userScore == computerScore) {
        console.log("There was no winner, it was a draw for all the 5 rounds");
        document.getElementById("finalGames").innerHTML =
          "There was no winner, it was a draw for all the 5 rounds" + "\n";
      }
      console.log("You won " + wins + " times!");
      document.getElementById("finalWins").innerHTML =
        "You won " + wins + " times!" + "\n";
      console.log("You lost " + losses + " times!");
      document.getElementById("finalLosses").innerHTML =
        "You lost " + losses + " times!" + "\n";
      console.log("You tied " + ties + " times!");
      document.getElementById("finalTies").innerHTML =
        "You tied " + ties + " times!" + "\n";
      console.log("");
    }
  }
});
scissors_div.addEventListener("click", function () {
  if (games <= 5) {
    playerSelection = "scissors";
    game();
    if (games == 6) {
      if (computerScore > userScore) {
        console.log("You lost the game of 5 rounds");
        document.getElementById("finalGames").innerHTML =
          "You lost the game of 5 rounds" + "\n";
      }
      if (userScore > computerScore) {
        console.log("You Won the game of 5 rounds");
        document.getElementById("finalGames").innerHTML =
          "You Won the game of 5 rounds" + "\n";
      }
      if (userScore == computerScore) {
        console.log("There was no winner, it was a draw for all the 5 rounds");
        document.getElementById("finalGames").innerHTML =
          "There was no winner, it was a draw for all the 5 rounds" + "\n";
      }
      console.log("You won " + wins + " times!");
      document.getElementById("finalWins").innerHTML =
        "You won " + wins + " times!" + "\n";
      console.log("You lost " + losses + " times!");
      document.getElementById("finalLosses").innerHTML =
        "You lost " + losses + " times!" + "\n";
      console.log("You tied " + ties + " times!");
      document.getElementById("finalTies").innerHTML =
        "You tied " + ties + " times!" + "\n";
      console.log("");
    }
  }
});

function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomOption = options[Math.floor(Math.random() * options.length)];
  return randomOption;
}
function playRound(playerParam, computerParam) {
  let player = playerParam.toLowerCase();
  let computer = computerParam.toLowerCase();
  if (player == "rock" && computer == "scissors") {
    return "You Win! Rock beats Scissors!";
  }
  if (player == "paper" && computer == "rock") {
    return "You Win! Paper beats Rock!";
  }
  if (player == "scissors" && computer == "paper") {
    return "You Win! Scissors beats Paper!";
  }
  if (player == "scissors" && computer == "rock") {
    return "You Lose! Rock beats Scissors!";
  }
  if (player == "rock" && computer == "paper") {
    return "You Lose! Paper beats Rock!";
  }
  if (player == "paper" && computer == "scissors") {
    return "You Lose! Scissors beats Paper!";
  }
  if (player == computer) {
    return "It's a Tie!";
  }
}
function testing() {
  const playerSelection = "Rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
}
function game() {
  let computerSelection = computerPlay();
  console.log("<!----- Game " + games + " has started -----> ");
  console.log("Player is " + playerSelection);
  console.log("Computer is " + computerSelection);
  let sentence = playRound(playerSelection, computerSelection);
  console.log(sentence);
  let word = sentence.split(" ");
  if (word[1] == "Win!") {
    userScore++;
    document.getElementById("userScore").textContent = userScore;
    wins++;
    document.getElementById("resultsP").innerHTML =
      sentence + " You have won round " + games;
    console.log("You have won round " + games);
  }
  if (word[1] == "Lose!") {
    computerScore++;
    document.getElementById("compScore").textContent = computerScore;
    losses++;
    document.getElementById("resultsP").innerHTML =
      sentence + " You have lost round " + games;
    console.log("You have lost round " + games);
  }
  if (word[2] == "Tie!") {
    ties++;
    document.getElementById("tiesScore").textContent = ties;
    document.getElementById("resultsP").innerHTML =
      "Round " + games + " was a tie";
    console.log("Round " + games + " was a tie");
  }
  console.log("<!----- Game " + games + " has ended -----> ");
  console.log("");
  games++;
  playerSelection = "";
}

//game();
