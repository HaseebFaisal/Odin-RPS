// first create a function that randomly returns rock paper scissors
function computerPlay() {
    let result = Math.random()
    if (result < 0.333) {
        return ("ROCK");
    }
    else if (result < 0.666) {
        return ("PAPER");
    }
    else {
        return ("SCISSORS");
    }
}

function chooseMove() {
    let playerSelection = prompt('What is your choice?', 'Rock');
    return playerSelection.toUpperCase();
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("It's a tie!");
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        return ("player");
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        return ("player");
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        return ("player");
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        return ("computer");
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        return ("computer");
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        return ("computer");
    }

}

const computerSelection = computerPlay();
const playerSelection = chooseMove();

let playerWins = 0
let computerWins = 0
let nobodyWins = 0

function game() {
    for (i = 0; i < 5; i++) {
        chooseMove();
        const computerSelection = computerPlay();
        let roundWinner = (playRound(playerSelection, computerSelection));
            if (roundWinner === 'player') {
            playerWins++;
          } 
            else if (roundWinner === 'computer') {
            computerWins++;
          } else {
            nobodyWins++;
          }
    }
    console.log(`The player has won ${playerWins} times. The computer has won ${computerWins} times. There was ${nobodyWins} ties.`);
}

console.log(game());