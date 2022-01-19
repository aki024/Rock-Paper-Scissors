let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock').addEventListener('click',play);
const paper = document.querySelector('#paper').addEventListener('click',play);
const scissors = document.querySelector('#scissors').addEventListener('click',play);
const pScore = document.querySelector('.yourScore');
const cScore = document.querySelector('.computerScore');
const proba = document.querySelector('.rps');
const gameLog = document.querySelector('.result');
const finish = document.querySelectorAll('i');

function play(e)
{
let playerChoice = e.target.id;
let computer = computerChoice();

let winner = getWinner(playerChoice,computer);
setScore(winner,playerChoice,computer);

gameFinished(playerScore,computerScore);

}

function computerChoice()
{
    let n = Math.floor(Math.random() * 3);
    
    if(n===0)
    {
        return 'rock';
    }
    else if(n===1)
    {
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function getWinner(p,c)
{
    if(p==='rock' & c==='rock')
    {
       return 'Draw';
    }
    else if(p==='rock' & c==='paper')
    {
        return 'Computer';
    }
    else if(p==='rock' & c==='scissors')
    {
        return 'Player';
    }
    else if(p==='paper' & c==='scissors')
    {
        return 'Computer';
    }
    else if(p==='paper' & c==='rock')
    {
        return 'Player';
    }
    else if(p==='paper' & c==='paper')
    {
        return 'Draw';
    }
    else if(p==='scissors' & c==='scissors')
    {
        return 'Draw';
    }
    else if(p==='scissors' & c==='paper')
    {
        return 'Player';
    }
    else 
    {
        return 'Computer';
    }
}

function setScore(g,p,c)
{
if(g==='Player')
{
    playerScore++;
    pScore.innerHTML = `Your score:${playerScore}`;
    gameLog.innerHTML = `<h2>You chose ${p} Computer chose ${c}</h2> <br> <h2>YOU WIN!</h2>`;
}
else if(g==='Computer')
{
    computerScore++;
    cScore.innerHTML = `Computer score:${computerScore}`;
    gameLog.innerHTML = `<h2>You chose ${p} Computer chose ${c}</h2> <br> <h2>YOU LOSE!</h2>`;
}
else{
    
    gameLog.innerHTML = `<h2>You chose ${p} Computer chose ${c}</h2> <br> <h2>IT\'S A DRAW!</h2>`;
}
}

function gameFinished(p,c)
{
    if(playerScore===5)
    {
        gameLog.innerHTML = `<h2>You win ${p} to ${c}</h2>
        <br>
        <h2>New game?</h2>
        <button id='restart' onclick='cao()'>RESTART GAME</button>
        `
        finish.forEach((i) =>
        {
            i.classList.toggle('gg');
            i.removeEventListener('click',play);
         })
    }
    else if(computerScore===5)
    {
        gameLog.innerHTML = `<h2>You lose ${c} to ${p}</h2>
         <br>
        <h2>New game?</h2>
        <button id='restart' onclick='cao()'>RESTART GAME</button>
        `
        finish.forEach((i) =>
        {
            i.classList.toggle('gg');
            i.removeEventListener('click',play);
        })
    }
    else{
        
    }
}

function cao()
{
    playerScore = 0;
    computerScore = 0;
    pScore.innerHTML = `Your score:${playerScore}`;
    cScore.innerHTML = `Computer score:${computerScore}`;
    gameLog.innerHTML = '';
    finish.forEach((i) =>
    {
        i.classList.toggle('gg');
        i.addEventListener('click',play);
    })
}
