// function computerPlay("Rock", "Paper", "Scissors") {

// }

console.log("Is this working?")


/* function computerPlay() {
    const myArray = ["Rock", "Paper", "Scissors"]
    const random = [Math.floor(Math.random() * myArray.length)]
    console.log(random)
} */


const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(months[random]);

function computerPlay() {
const myArray = ["Rock", "Paper", "Scissors"]
const random2 = [Math.floor(Math.random() * myArray.length)]
console.log(myArray[random2])
}

computerPlay() 


function playerPlay() {
    const myArray = ["Rock", "Paper", "Scissors"]
    const random2 = [Math.floor(Math.random() * myArray.length)]
    console.log(myArray[random2])
    }

playerPlay()

/* else if (computerPlay === playerPlay) {
    return "It's a tie!";
} */


/* function Winner() {
    if ((computerPlay === "Paper") && (playerPlay === "Rock")) {
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