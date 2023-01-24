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

let compScore = 0
let playerScore = 0

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound("rock"));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound("paper"));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound("scissors"));

const results = document.querySelector('#results');

const answer = document.createElement('p');
answer.classList.add('answer');

const score = document.createElement('h1');
score.classList.add('score');
score.textContent = playerScore + "/" + compScore;

results.appendChild(score)

function playRound(playerSelection) {
    //run getComputerChoice()
    let computerSelection = getComputerChoice()

    //compare answers
    if(playerSelection === "rock" && computerSelection === "rock") {
        answer.textContent = "Rock ties against Rock!";
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        answer.textContent = "Rock loses to Paper! You Lose!";
        compScore++;
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        answer.textContent = "Rock beats Scissors! You Win!";
        playerScore++;
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        answer.textContent = "Paper beats Rock! You Win!";
        playerScore++;
    } else if(playerSelection === "paper" && computerSelection === "paper") {
        answer.textContent = "Paper ties against Paper";
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        answer.textContent = "Paper loses to Scissors! You Lose!";
        compScore++;
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        answer.textContent = "Scissors loses to Rock! You Lose!";
        compScore++;
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        answer.textContent = "Scissors beats Paper! You Win!";
        playerScore++;
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        answer.textContent = "Scissors ties against Scissors!";
    }
    //return winner
    score.textContent = playerScore + "/" + compScore;
    return results.appendChild(answer);
}

function game() {
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
}