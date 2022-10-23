const playerSelection = window.prompt("Rock, paper or scissors?")
const computerSelection = getComputerChoice()

function getComputerChoice() {
    let random = ["Rock", "Paper", "Scissors"]
    return random[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "Draw! You both picked scissors!"
    } else if (computerSelection === "Rock") {
        return "Computer picked rock. You lose!"
    } else {
        return "You win!"
    }
    if (playerSelection === "Paper") {
        if (computerSelection === "Paper") {
            return "Draw! You both picked paper."
        } else if (computerSelection === "Scissors") {
            return "Computer picked scissors. You lose!"
        } else {
            return "You win!"
        }
    }
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            return "Draw! You both picked rock."
        } else if (computerSelection === "Paper") {
            return "Computer picked paper. You lose!"
        } else {
            return "You win!"
        }
    }
}

function game() {
    playRound()
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()