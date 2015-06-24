////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

// get player move
function playerMove(move) {
    move = move || getInput();
    return move;
}

//get comp move
function computerMove(move) {
    move = move || randomPlay();
    return move;
}

//determine who won match
function getWinner(playerMove,computerMove) {
    var winner;
// tie
    if (playerMove === computerMove) {
        winner = 'tie';
    } 
// player chooses rock
    else if (playerMove === 'rock'){
        if (computerMove === 'scissors'){
            winner = 'player';
        } else {
            winner = 'computer';
        }
    } 
// player chooses scissors
    else if (playerMove === 'scissors'){
        if (computerMove === 'paper'){
            winner = 'player';
        } else {
            winner = 'computer';
        }
    }
//player chooses paper
    else if (playerMove === 'paper'){
        if (computerMove === 'rock'){
            winner = 'player';
        } else{
            winner = 'computer'
        }
    }
    return winner;
} 

//determine if game is won or if game continues. update/keep track of score 
function playToFive(getWinner) {
    console.log("Let's play Rock, Paper, Scissors!");
    var playerWins = 0;
    var computerWins = 0;
    (getWinner === 'tie' ? console.log('We have a tie!') : (getWinner==='player' ?  playerWins++ : computerWins++));
    (playerWins<5 && computerWins<5 ? console.log('Player chose ' + playerMove + ' while the Computer chose ' + computerMove + '. The score is currently ' + playerWins + ' to ' + computerWins + '.') : (playerWins === 5 ? (console.log('Congratulations Player! You vanquished the mighty machine '+playerWins+' to '+computerWins+'!')) : console.log('Oh no! The mighty machine has defeated the human '+computerMove+' to '+playerMove+'. Get back on that horse for the sake of the Human race!')));
}
