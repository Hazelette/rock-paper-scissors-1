// console.log("Test"); // ensures script is loaded

// function to get computer's choice
function getComputerChoice(){
    // Array to store string of choices
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length); // generate random index between 0 and 2
    return choices[randomIndex]; // return random choice from array
    // using array is cleaner than using if-else statements
}

const computerChoice = getComputerChoice(); // call the function and store the result
console.log(computerChoice); // test the function to ensure all 3 string are randomly selected
