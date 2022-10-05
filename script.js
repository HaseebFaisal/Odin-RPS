// first create a function that randomly returns rock paper scissors
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const score = document.querySelector('.score');
const playerScore = document.querySelector('.player-counter');
const compScore = document.querySelector('.computer-counter');
const gameReset = document.querySelector('.game-reset')

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

let playerScoreCount = 0;
let computerScoreCount = 0;

gameReset.addEventListener("click", () => {
    playerScoreCount = 0;
    computerScoreCount = 0;
    playerScore.textContent = playerScoreCount;
    compScore.textContent = computerScoreCount;
    score.textContent = 'New Game';
});

function playRound(playerSelection, computerSelection) {
    if (playerScoreCount === 5) {
        score.textContent = 'Player Wins!';
    }
    else if (computerScoreCount === 5) {
        score.textContent = 'Computer Wins!';
    }
    else if (playerSelection === computerSelection) {
        score.textContent = "It's a tie!";
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        score.textContent = "You win!";
        playerScoreCount++;
        console.log(playerScoreCount);
        playerScore.textContent = playerScoreCount;
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        score.textContent = "You win!";
        playerScoreCount++;
        console.log(playerScoreCount);
        playerScore.textContent = playerScoreCount;
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        score.textContent = "You win!";
        playerScoreCount++;
        console.log(playerScoreCount);
        playerScore.textContent = playerScoreCount;
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        score.textContent = "You lose!";
        computerScoreCount++;
        console.log(computerScoreCount);
        compScore.textContent = computerScoreCount;
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        score.textContent = "You lose!";
        computerScoreCount++;
        console.log(computerScoreCount);
        compScore.textContent = computerScoreCount;
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        score.textContent = "You lose!";
        computerScoreCount++;
        console.log(computerScoreCount);
        compScore.textContent = computerScoreCount;
    }

}



rock.addEventListener("click", () => {
    const computerSelection = computerPlay();
    playRound('ROCK', computerSelection);
});
paper.addEventListener("click", () => {
    const computerSelection = computerPlay();
    playRound('PAPER', computerSelection);
});
scissors.addEventListener("click", () => {
    const computerSelection = computerPlay();
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