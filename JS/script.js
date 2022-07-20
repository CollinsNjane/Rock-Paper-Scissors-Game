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
  let counter1 = 0;
  let counter2 = 0;
  let wins = 0;
  let ties = 0;
  let losses = 0;
  let games = 1;
  let playerSelection = "";
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    do {
      playerSelection = window.prompt("Rock, Paper, Scissors?!", "");
    } while (
      playerSelection.toLowerCase() != "rock" &&
      playerSelection.toLowerCase() != "paper" &&
      playerSelection.toLowerCase() != "scissors"
    );
    console.log("<!----- Game " + games + " has started -----> ");
    console.log("Player is " + playerSelection);
    console.log("Computer is " + computerSelection);
    let sentence = playRound(playerSelection, computerSelection);
    console.log(sentence);
    let word = sentence.split(" ");
    if (word[1] == "Win!") {
      counter1++;
      wins++;
      console.log("You have won round " + games);
    }
    if (word[1] == "Lose!") {
      counter2++;
      losses++;
      console.log("You have lost round " + games);
    }
    if (word[2] == "Tie!") {
      ties++;
      console.log("Round " + games + " was a tie");
    }
    console.log("<!----- Game " + games + " has ended -----> ");
    console.log("");
    games++;
  }
  if (counter2 > counter1) {
    console.log("You lost the game of 5 rounds");
  }
  if (counter1 > counter2) {
    console.log("You Won the game of 5 rounds");
  }
  if (counter1 == counter2) {
    console.log("There was no winner, it was a draw");
  }
  console.log("You won " + wins + " times!");
  console.log("You lost " + losses + " times!");
  console.log("You tied " + ties + " times!");
}
game();
