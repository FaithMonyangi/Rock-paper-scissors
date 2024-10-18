let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    let computerChoice;
    switch(randomChoice) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    // Prompt the user for their choice
    let humanChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();

    // Validate the choice and return it if it's valid
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        if (humanChoice === "") {
            humanChoice = prompt("Input cannot be empty! Please enter rock, paper, or scissors:").toLowerCase();
        } else {
            humanChoice = prompt("Invalid choice! Please enter rock, paper, or scissors:").toLowerCase();
        }
    }

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let result = "";

    switch(humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                result = "You have won this round!!";
                ++humanScore;
            } else if (computerChoice === "paper") {
                result = "You have lost";
                ++computerScore;
            } else {
                result = "The game was a draw";
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                result = "You have won this round!!";
                ++humanScore;
            } else if (computerChoice === "scissors") {
                result = "You have lost";
                ++computerScore;
            } else {
                result = "The game was a draw";
            }
            break;
        case "scissors":
            if (computerChoice === "paper") {
                result = "You have won this round!!";
                ++humanScore;
            } else if (computerChoice === "rock") {
                result = "You have lost";
                ++computerScore;
            } else {
                result = "The game was a draw";
            }
            break;
    }

    console.log(result);
    console.log('\tHuman Score:', humanScore);
    console.log('\tComputer Score:', computerScore);

    alert(`
        Round: ${roundCount}
        Your score was ${humanScore}
        and the computer's score was ${computerScore}
        ** ${result} **

        Score so far is >>>
        \tComputer score: ${computerScore}
        \tHuman score: ${humanScore}
    `);
}

function playGame() {
    for (let index = 0; index < 5; index++) {
        roundCount++;
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice != null) {
            playRound(humanChoice, computerChoice);
        } else {
            console.log('Game cancelled!\n\n');
            index = 5; 
        }  
    }

    console.log('---------------------------------');
    console.log('\nFINAL SCORE IS >>>');
    console.log('\tComputer score:', computerScore);
    console.log('\tHuman score:', humanScore);

    alert(`
        ---------------------------------
        FINAL SCORE IS >>>
            \tComputer score: ${computerScore}
            \tHuman score: ${humanScore}
    `);

    reset();
}

function reset() {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.createElement("button");
    button.textContent = "Start Game";
    document.body.appendChild(button);

    button.addEventListener("click", playGame);
});