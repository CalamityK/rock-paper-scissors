function getComputerChoice() {
    //pick a number between 1 and 3
    compPick = Math.floor(Math.random() * 3)
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