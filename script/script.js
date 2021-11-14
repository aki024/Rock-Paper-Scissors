let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let choice = Math.floor(Math.random() * 3 + 1);
    switch (choice) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
    }
    return choice;
}

let capitalize = (input) => {

    if (typeof input !== 'string') return ''

    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}


function playerSelection() {



    let input = prompt('Rock,Paper,Scissors?');




    if (capitalize(input) == 'Rock'.toString()) {

        return 'Rock';


    } else if (capitalize(input) == 'Paper'.toString()) {
        return 'Paper';

    } else if (capitalize(input) == 'Scissors'.toString()) {

        return 'Scissors';
    } else {

        return 'That\'s not an option';
    }

}



let pleee = playerSelection;

let computerSelection = computerPlay();
computerSelection.toString();

function win(playRound) {

    playerScore += 1;



}

function lose1() {

    computerScore += 1;



}


function playRound() {

    if (pleee == 'Rock' && computerSelection == 'Paper') {
        console.log('You played:' + pleee + ' ------ Computer played:' + computerSelection);
        console.log('You lose ' + computerSelection + ' beats ' + pleee);
        lose1();
        console.log('You:' + playerScore + ' Computer:' + computerScore)





    } else if (pleee == 'Rock' && computerSelection == 'Scissors') {
        console.log('You played:' + pleee + ' ------ Computer played:' + computerSelection);
        console.log('You win ' + pleee + ' beats ' + computerSelection);
        win();
        console.log('You:' + playerScore + ' Computer:' + computerScore)

    } else if (pleee == 'Rock' && computerSelection == 'Rock') {
        console.log('You played:' + pleee + ' ------ Computer played:' + computerSelection);
        console.log('It\'s a draw you both played ' + computerSelection);
        console.log('You:' + playerScore + ' Computer:' + computerScore)

    } else if (pleee == 'Paper' && computerSelection == 'Scissors') {
        console.log('You played:' + pleee + ' ------ Computer played:' + computerSelection);
        console.log('You lose ' + computerSelection + ' beat ' + pleee);
        lose1();
        console.log('You:' + playerScore + ' Computer:' + computerScore)

    } else if (pleee == 'Paper' && computerSelection == 'Rock') {
        console.log('You played:' + pleee + ' ------ Computer played:' + computerSelection);
        console.log('You win ' + pleee + ' beats ' + computerSelection);
        win();
        console.log('You:' + playerScore + ' Computer:' + computerScore)

    } else if (pleee == 'Paper' && computerSelection == 'Paper') {
        console.log('You played:' + pleee + ' ------ Computer played:' + computerSelection);
        console.log('It\'s a draw you both played ' + computerSelection);
        console.log('You:' + playerScore + ' Computer:' + computerScore)

    } else if (pleee == 'Scissors' && computerSelection == 'Rock') {
        console.log('You played:' + pleee + ' ------ Computer played:' + computerSelection);
        console.log('You lose ' + computerSelection + ' beats ' + pleee);
        lose1();
        console.log('You:' + playerScore + ' Computer:' + computerScore)

    } else if (pleee == 'Scissors' && computerSelection == 'Paper') {
        console.log('You played:' + pleee + ' ------ Computer played:' + computerSelection);
        console.log('You win ' + pleee + ' beats ' + computerSelection);
        win();
        console.log('You:' + playerScore + ' Computer:' + computerScore)

    } else if (pleee == 'Scissors' && computerSelection == 'Scissors') {
        console.log('You played:' + pleee + ' ------ Computer played:' + computerSelection);
        console.log('It\'s a draw you both played ' + computerSelection);
        console.log('You:' + playerScore + ' Computer:' + computerScore)

    } else {

        console.log("Choose only Rock,Paper or Scissors")
    }



}



function newRound() {

    pleee = playerSelection();
    computerSelection = computerPlay();

}

function game() {

    for (let i = 0; playerScore < 3 && computerScore < 3; i++) {
        newRound();
        playRound();

        if (playerScore == 3) {

            console.log('You win ' + playerScore + ' to ' + computerScore);
            break;
        } else if (computerScore == 3) {
            console.log('Computer wins ' + computerScore + ' to ' + playerScore);
            break;

        }
    }



}
game();