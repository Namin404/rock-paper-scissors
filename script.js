
/* 

Your game is going to play against the computer, so begin with a
function called computerPlay that will randomly return either
‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to
make the computer’s play. Tip: use the console to make sure this is
returning the expected output before moving to the next step! 

*/



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


function winner(computerSelection, playerSelection) {
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

let firstRound = winner(computerSelection, playerSelection)
console.log(firstRound)

/*

Write a NEW function called game(). Call the playRound function inside of
this one to play a 5 round game that keeps score and reports a winner or
loser at the end.


Remember loops? This is a great opportunity to use one to play those
five rounds:

At this point you should be using console.log() to display the results of
each round and the winner at the end.

Use prompt() to get input from the user. Read the docs here if you need to.

Feel free to re-work your previous functions if you need to. Specifically, you
might want to change the return value to something more useful.

Feel free to create more “helper” functions if you think it would be useful.

*/

// Your game function is going to loop five times. Each iteration of that 
// loop you will make a playerSelection and a computerSelection and then 
// pass them to your winner function to get the results.


function game() {

    for (let i = 0; i < 5; i++) { 
        if (i == 0) { 
            firstRound;
        } else if (i == 1) {
            firstRound;
        } else { return i;
    }   ``
    }
}

let jesus = game()
console.log(jesus);


/*

function example() {
    for (let i = 0; i < 5; i++){
       console.log(i)
    }
}

let wtf = example()

*/