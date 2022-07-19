
let computerSelection = computerPlay();
let playerSelection = playerPlay();
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    const myArray = ["ROCK", "PAPER", "SCISSORS"]
    const random2 = [Math.floor(Math.random() * myArray.length)]
    return myArray[random2];
    }

function playerPlay() {
    let player = prompt("Rock, Paper or Scissors?")
    let answer = player.toUpperCase();
    return answer
}


function playRound(computerSelection, playerSelection) {

    if (computerSelection == "PAPER" && playerSelection == "ROCK") {
        computerScore++;
    } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
        computerScore++;
    } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
        computerScore++;


    } else if (computerSelection == "ROCK" && playerSelection == "PAPER") {
        playerScore++;
    } else if (computerSelection == "SCISSORS" && playerSelection == "ROCK") {
        playerScore++;
    } else if (computerSelection == "PAPER" && playerSelection == "SCISSORS") {
        playerScore++;

    } else if (computerSelection == playerSelection) {
        console.log("It's a tie!");
    } else return "Uh-oh, try again!"
}


// let firstRound = playRound(computerSelection, playerSelection)


function game() {
for (let i = 0; i < 5; i++) {

    let computerSelection = computerPlay();
    let playerSelection = playerPlay();

    playRound(computerSelection, playerSelection);
       
        if (computerScore > 0) {
        console.log("Computer wins this round!");
        console.log(computerScore);

    }   else if (playerScore > 0) {
        console.log("You win this round!");
        console.log(playerScore);

    } else 
        console.log("This round's a tie!");
    
    if (i == 4) {
        if (computerScore > playerScore) {
            console.log("Computer Wins");
        } else if (playerScore > computerScore) {
            console.log("You win");
        } else console.log ("tie");
      
    }
        
    }   
}

game();
