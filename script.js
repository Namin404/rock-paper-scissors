
/* Your game is going to play against the computer, so begin with a
function called computerPlay that will randomly return either
‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to
make the computer’s play. Tip: use the console to make sure this is
returning the expected output before moving to the next step! */

function computerPlay() {
    const myArray = ["Rock", "Paper", "Scissors"]
    const random2 = [Math.floor(Math.random() * myArray.length)]
    return myArray[random2];
    }

let computerSelection = computerPlay();
console.log(computerSelection)

/*
function playerPlay() {
    const myArray = ["Rock", "Paper", "Scissors"]
    const random2 = [Math.floor(Math.random() * myArray.length)]
    console.log(myArray[random2])
    }

    playerPlay()

function Winner() {
    if (computerPlay === "Paper" && playerPlay === "Rock") {
        return "You lose! Paper beats rock";
    }
    else if (computerPlay === "Rock" && playerPlay === "Scissors") {
        return "You lose! Rock beats scissors";
    }
    else if (computerPlay === "Scissors" && playerPlay === "Paper") {
        return "You lose! Scissors beats paper";


    }
    else if (computerPlay === "Rock" && playerPlay === "Paper") {
        return "You win! Paper beats rock";
    }
    else if (computerPlay === "Scissors" && playerPlay === "Rock") {
        return "You win! Rock beats scissors";
    }
    else if (computerPlay == "Paper" && playerPlay === "Scissors") {
        return "You win! Scissors beats paper";
    }

   
} */