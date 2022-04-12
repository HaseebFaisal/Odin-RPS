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

const computerSelection = computerPlay();
const playerSelection = chooseMove();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("It's a tie!");
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        let gameWinner = 1;
        return ("Player wins!");
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        let gameWinner = 1;
        return ("Player wins!");
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        let gameWinner = 1;
        return ("Player wins!");
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        let gameWinner = 2;
        return ("Computer wins!");
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        let gameWinner = 2;
        return ("Computer wins!");
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        let gameWinner = 2;
        return ("Computer wins!");
    }
}

console.log(playRound(playerSelection, computerSelection));

function game() {
    for (i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        chooseMove();
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());