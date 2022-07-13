
/* Your game is going to play against the computer, so begin with a
function called computerPlay that will randomly return either
‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to
make the computer’s play. Tip: use the console to make sure this is
returning the expected output before moving to the next step! */

function computerPlay() {
    const myArray = ["ROCK", "PAPER", "SCISSORS"]
    const random2 = [Math.floor(Math.random() * myArray.length)]
    return myArray[random2];
    }

let computerSelection = computerPlay();
console.log(computerSelection)

function playerPlay(){
    let player = prompt("Rock, Paper or Scissors?")
    let answer = player.toUpperCase();
    return answer
}


let playerSelection = playerPlay()
console.log(playerSelection)

/*

Write a function that plays a single round of Rock Paper
Scissors. The function should take two parameters - the
playerSelection and computerSelection - and then
return a string that declares the winner of the round like so:
"You Lose! Paper beats Rock" 

*/


function winner() {
    if (computerSelection == "PAPER" && playerSelection == "ROCK") {
        return "You lose! Paper beats rock";
    } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
        return "You lose! Rock beats scissors";
    } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
        return "You lose! Scissors beats paper";


    } else if (computerSelection == "ROCK" && playerSelection == "PAPER") {
        return "You win! Paper beats rock";
    } else if (computerSelection == "SCISSORS" && playerSelection == "ROCK") {
        return "You win! Rock beats scissors";
    } else if (computerSelection == "PAPER" && playerSelection == "SCISSORS") {
        return "You win! Scissors beats paper";
    } else if (computerSelection == playerSelection) {
    return "Wowzers, it's a tie!"
    } else return "Uh-oh, try again!"
}

let firstRound = winner()
console.log(firstRound)
