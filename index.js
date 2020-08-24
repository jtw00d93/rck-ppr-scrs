const results = document.getElementById('results');
const score = document.getElementById('score-number');
const playAgain = document.getElementById('play-again-btn');
const rules = document.getElementById('rules');
const closeBtn = document.getElementById('close-btn');
const modal = document.getElementById('modal');


const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');

const field = document.querySelector('.field-of-play');
const choices = document.querySelector('.choices');


const humanPick = document.getElementById('human-pick');
const compPick = document.getElementById('comp-pick');
const humanChoicewrapper = document.getElementById('hpick-wrapper');
const cpuChoicewrapper = document.getElementById('cpick-wrapper');
const huWin = document.getElementById('human-win');
const cpuWin = document.getElementById('cpu-win');

let cpuChoice;
let userChoice;
let counter = 0;

const paperIcon = './images/icon-paper.svg' ;
const rockIcon = './images/icon-rock.svg' ;
const scissorsIcon = './images/icon-scissors.svg' ;

function generateNumber(){
  return Math.floor(Math.random() * 3);
}

const computerChoice = function(){
    let randomNumber = generateNumber();
    if(randomNumber === 0){
        cpuChoice = 'rock' ;
        compPick.src = rockIcon;
        cpuChoicewrapper.classList.add('rock-wrapper');
    } else if (randomNumber === 1){
        cpuChoice = 'paper';
        compPick.src = paperIcon;
        cpuChoicewrapper.classList.add('paper-wrapper');
    } else if (randomNumber === 2){
        cpuChoice = 'scissors';
        compPick.src = scissorsIcon;
        cpuChoicewrapper.classList.add('scissors-wrapper');
    }
} 

let gameState;

const game = function(){
    if(userChoice === 'paper' && cpuChoice === 'rock'){
        results.innerHTML = 'You Win!';
        playAgain.visibility = true ;
        counter++;
        huWin.classList.add('winner');
        gameState = 'Userwin';
    } else if (userChoice === 'paper' && cpuChoice === 'scissors'){
        results.innerHTML = 'You Lose!';
        playAgain.visibility = true ;
        cpuWin.classList.add('winner');
        gameState = 'Cpuwin';
    } else if (userChoice === 'rock' && cpuChoice === 'scissors'){
        results.innerHTML = 'You Win!';
        playAgain.visibility = true ;
        counter++;
        huWin.classList.add('winner');
        gameState = 'Userwin';
    } else if (userChoice === 'rock' && cpuChoice === 'paper'){
        results.innerHTML = 'You Lose!';
        playAgain.visibility = true ;
        cpuWin.classList.add('winner');
        gameState = 'Cpuwin';
    } else if (userChoice === 'scissors' && cpuChoice === 'paper'){
        results.innerHTML = 'You Win!';
        playAgain.visibility = true ;
        counter++;
        huWin.classList.add('winner');
        gameState = 'Userwin';
    } else if (userChoice === 'scissors' && cpuChoice === 'rock'){
        results.innerHTML = 'You lose!';
        playAgain.visibility = true ;
        cpuWin.classList.add('winner');
        gameState = 'Cpuwin';
    } else if (userChoice === 'rock' && cpuChoice === 'rock' || userChoice === 'paper' && cpuChoice === 'paper' || userChoice === 'scissors' && cpuChoice === 'scissors'){
        results.innerHTML = 'Draw!'
        playAgain.visibility = true ;
        gameState = 'draw'
    }  
}

paper.onclick = () => { 
    userChoice = 'paper';
    field.classList.add('hide');
    choices.classList.remove('hide');
    humanPick.src = paperIcon;
    computerChoice();
    game();
    score.innerHTML = counter;
    playAgain.classList.remove('hide');
    humanChoicewrapper.classList.add('paper-wrapper');
}

rock.onclick = () => {
    userChoice = 'rock'
    field.classList.add('hide');
    choices.classList.remove('hide');
    humanPick.src = rockIcon;
    computerChoice();
    game();
    score.innerHTML = counter;
    playAgain.classList.remove('hide');
    humanChoicewrapper.classList.add('rock-wrapper');
}

scissors.onclick = () => {
    userChoice = 'scissors'
    field.classList.add('hide');
    choices.classList.remove('hide');
    humanPick.src = scissorsIcon;
    computerChoice();
    game();
    score.innerHTML = counter;
    playAgain.classList.remove('hide');
    humanChoicewrapper.classList.add('scissors-wrapper');
}


const startOver = function(){
    field.classList.remove('hide');
    choices.classList.add('hide');
    playAgain.classList.add('hide')
    results.innerHTML = '';
    generateNumber();

    if(cpuChoice === 'rock'){
        cpuChoicewrapper.classList.remove('rock-wrapper');
    } else if (cpuChoice === 'paper'){
        cpuChoicewrapper.classList.remove('paper-wrapper');
    } else if (cpuChoice === 'scissors'){
        cpuChoicewrapper.classList.remove('scissors-wrapper');
    }
    
    if(userChoice === 'rock'){
        humanChoicewrapper.classList.remove('rock-wrapper');
    } else if(userChoice === 'scissors'){
        humanChoicewrapper.classList.remove('scissors-wrapper');
    } else if (userChoice === 'paper'){
        humanChoicewrapper.classList.remove('paper-wrapper')
    }     

    if(gameState === 'Userwin'){
        huWin.classList.remove('winner');
    } else if(gameState === 'Cpuwin'){
        cpuWin.classList.remove('winner');
    } else {
        cpuWin.classList.remove('winner');
        huWin.classList.remove('winner');
    }
    

}

playAgain.onclick = () => {
    startOver();    
}

rules.onclick = () => {
    modal.classList.remove('hide');
}

closeBtn.onclick = () => {
    modal.classList.add('hide');
}