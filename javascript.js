// function computerPlay("Rock", "Paper", "Scissors") {

// }

console.log("Is this working?")


function computerPlay() {
    const myArray = ["Rock", "Paper", "Scissors"]
    const random = [Math.floor(Math.random() * myArray.length)]
    console.log(random)
}


const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);


const myArray = ["Rock", "Paper", "Scissors"]
const random2 = [Math.floor(Math.random() * myArray.length)]
console.log(myArray[random2])