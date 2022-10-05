// first create a function that randomly returns rock paper scissors
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        console.log("player");
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        console.log("player");
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        console.log("player");
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        console.log("computer");
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        console.log("computer");
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        console.log("computer");
    }

}

const computerSelection = computerPlay();

rock.addEventListener("click", () => {
    playRound('ROCK', computerSelection);
    computerPlay();
});
paper.addEventListener("click", () => {
    playRound('PAPER', computerSelection);
});
scissors.addEventListener("click", () => {
    playRound('SCISSORS', computerSelection)
});


/* function chooseMove() {
    let playerSelection = prompt('What is your choice?', 'Rock');
    return playerSelection.toUpperCase();
} */

// let playerSelection = chooseMove();

let playerWins = 0
let computerWins = 0
let nobodyWins = 0

/*

function game() {
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
    if (playerWins > computerWins) {
        console.log(`Player wins! ${playerWins} - ${computerWins}`);

    } else if (computerWins > playerWins) {
        console.log(`Computer wins! ${computerWins} - ${playerWins}`);

    } else if (playerWins === computerWins) {
        console.log(`It's a tie! ${computerWins} - ${playerWins}`);
    }
}

console.log(game());
*/