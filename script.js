
// function to get computer's choice
function getComputerChoice(){
    // Array to store string of choices
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length); // generate random index between 0 and 2
    return choices[randomIndex]; // return random choice from array
    // using array is cleaner than using if-else statements
}

// function to get user's choice
function getHumanChoice(){
    // prompt user for input
    let humanChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase(); // convert input to lowercase
    // validate input, ask for input until valid. change to lower case to ensure case insensitivity
    while (!["rock", "paper", "scissors"].includes(humanChoice)) {
        humanChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return humanChoice; // return valid choice
}

// Variable to store the scores
let humanScore = 0;
let computerScore = 0;

// function to play a single round of the game
function playRound(humanChoice, computerChoice){
    // check if humanChoice is equal to computerChoice
    if (humanChoice === computerChoice) {
        return "It's a tie!"; // return tie message
    }
    // check if humanChoice beats computerChoice
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper" )
     ) {
        humanScore++; // increment human score
        return `You win! ${humanChoice} beats ${computerChoice}.`; // return win message
        
    }
    else {
        computerScore++; // increment computer score
        return `You lose! ${computerChoice} beats ${humanChoice}.`; // return lose message
 
    }
        
}
console.log(playRound(getHumanChoice(), getComputerChoice())); // test the function to ensure it works