// first create a function that randomly returns rock paper scissors
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const score = document.querySelector('.score');
const playerScore = document.querySelector('.player-counter');
const compScore = document.querySelector('.computer-counter');
const gameReset = document.querySelector('.game-reset');
const choices = document.querySelector('.play');


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

choices.forEach(choice => choice.addEventListener('click', computerPlay));

let playerScoreCount = 0;
let computerScoreCount = 0;

gameReset.addEventListener("click", () => {
    playerScoreCount = 0;
    computerScoreCount = 0;
    playerScore.innerHTML = playerScoreCount;
    compScore.innerHTML = computerScoreCount;
    score.innerHTML = 'New Game';
});

function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
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
    if (playerScoreCount === 5) {
        score.textContent = 'Player Wins!';
    }
    else if (computerScoreCount === 5) {
        score.textContent = 'Computer Wins!';
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

