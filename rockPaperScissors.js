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

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound("rock"));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound("paper"));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound("scissors"));

function playRound(playerSelection) {
    //run getComputerChoice()
    let computerSelection = getComputerChoice()
    //compare answers
    if(playerSelection === "rock" && computerSelection === "rock") {
        return console.log("Rock ties against Rock!")
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        console.log("Rock loses to Paper! You Lose!")
        return compScore++
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock beats Scissors! You Win!")
        return playerScore++
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        console.log("Paper beats Rock! You Win!")
        return playerScore++
    } else if(playerSelection === "paper" && computerSelection === "paper") {
        return console.log("Paper ties against Paper")
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Paper loses to Scissors! You Lose!")
        return compScore++
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Scissors loses to Rock! You Lose!")
        return compScore++
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Scissors beats Paper! You Win!")
        return playerScore++
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        return console.log("Scissors ties against Scissors!")
    }
    //return winner
}
let compScore = 0
let playerScore = 0

/* function game() {
    //set comp and player scores to 0
    compScore = 0
    playerScore = 0
    //run playRound 5 times
    for (let i = 0; i < 5; i++) {
        playRound()
        if (compScore === 3 || playerScore === 3) {
            i = 5
            if (playerScore > compScore) {
                console.log("You Win the game!")
            } else if (compScore > playerScore) {
                console.log("You Lose the game!")
            } else {
                console.log("It's a Tie!")
            }
        }
        //check who the winner is
        //add 1 to their score
        //if either score reachs 3 exit loop and return winner
    }
} */