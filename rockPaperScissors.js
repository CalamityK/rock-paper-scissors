function getComputerChoice() {
    //pick a number between 1 and 3
    let compPick = Math.floor(Math.random() * 3)
    //if 0 return rock
    if(compPick === 0) {
        return "rock"
    }
    //if 1 return paper
    if(compPick === 1) {
        return "paper"
    }
    //if 2 return scissors
    if(compPick === 2) {
        return "scissors"
    }
}

function getPlayerChoice() {
    //prompt player to pick between rock paper or scissors
    let answer = prompt("Would you like to pick rock, paper or scissors?")
    //turn string into an all lower case version
    return answer.toLowerCase()
    //return lowercase string
}

function playGame() {
    //run getPlayerChoice()
    let playerSelection = getPlayerChoice()
    //check player choice is valid answer
    if(playerSelection !== "rock" || "paper" || "scissors") {
        return alert("I'm sorry that is not a valid answer, please try again");
    }
    //if no, run getPlayerChoice() again
    //run getComputerChoice()
    let computerSelection = getComputerChoice()
    //compare answers
    if(playerSelection === "rock" && computerSelection === "rock") {
        return "Rock ties against Rock!"
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        return "Rock loses to Paper! You Lose!"
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        return "Rock beats Scissors! You Win!"
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        return "Paper beats Rock! You Win!"
    } else if(playerSelection === "paper" && computerSelection === "paper") {
        return "Paper ties against Paper"
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        return "Paper loses to Scissors! You Lose!"
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        return "Scissors loses to Rock! You Lose!"
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "Scissors beats Paper! You Win!"
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        return "Scissors ties against Scissors!"
    }
    //return winner
}