function getComputerChoice() {
    choice = Math.floor(Math.random() * 4);
    if (choice == 1) {
        return 'rock';
    } else if (choice == 2)
        return 'paper';
    else {
        return 'scissors'
    }
}

let playerCount = 0;
let computerCount=0;

function playRound(player) {
    console.log('player: ',player)
    let computer = getComputerChoice();
    console.log('computer',computer)
    let body = document.querySelector('body');
    let p = document.querySelector('.computerResult');
    p.innerHTML = 'You chose: ' + player + '<br>Computer chose: ' + computer;
    resTag = document.querySelector('h2');
    getMatchResult(player, computer);
    resTag.textContent = 'Player: ' +  playerCount + ' - ' + 'Computer: ' + computerCount ;
}
function reset(){
    playerCount = 0;
    computerCount=0;
    resTag = document.querySelector('h2');
    resTag.textContent = 'Player: ' +  playerCount + ' - ' + 'Computer: ' + computerCount ;
}

function getMatchResult(player, computer) {
    if (player == 'rock' && computer == 'paper') {
        computerCount++;
    } else if (player == 'rock' && computer == 'rock') {
        playerCount++;
        computerCount++;
    } else if (player == 'rock' && computer == 'scissors') {
        playerCount++;
    } else if (player == 'paper' && computer == 'rock') {
        playerCount++;
    } else if (player == 'paper' && computer == 'scissors') {
        computerCount++;
    } else if (player == 'paper' && computer == 'paper') {
        playerCount++;
        computerCount++;
    } else if (player == 'scissors' && computer == 'paper') {
        playerCount++;
    } else if (player == 'scissors' && computer == 'rock') {
        computerCount++;
    } else if (player=='scissors'&&computer =='scissors') {
        playerCount++;
        computerCount++;
    }
}
