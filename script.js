function getComputerChoice() {
    let items = ["Rock", "Paper", "Scissors"]
    return items[Math.floor(Math.random() * items.length)]
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == 'Rock') {
            return "It's a Draw! You both have Rock"
        }
        if (computerSelection == 'Paper') {
            return "You Lose! Paper beats Rock"
        }
        else {
            return "You Won! Rock beats Scissors"
        }
    }
    if (playerSelection == "Paper") {
        if (computerSelection == 'Paper') {
            return "It's a Draw! You both have Paper"
        }
        if (computerSelection == 'Scissors') {
            return "You Lose! Scissors beats Paper"
        }
        else {
            return "You Won! Paper beats Rock"
        }
    }
    if (playerSelection == "Scissors") {
        if (computerSelection == 'Scissors') {
            return "It's a Draw! You both have Scissors"
        }
        if (computerSelection == 'Rock') {
            return "You Lose! Rock beats Scissors"
        }
        else {
            return "You Won! Scissors beats Paper"
        }
    }

}

let playerScore = 0;
let compScore = 0;
let result = '';

let rps = document.querySelectorAll('button')
rps.forEach(choice => 
    choice.addEventListener('click',() =>eventFunc(choice)))

function eventFunc(choice) {
    result = playRound(choice.getAttribute('id'), getComputerChoice());
    if (result.includes('Won')) {
        playerScore += 1;
    }
    if (result.includes('Lose')) {
        compScore +=1;
    }
    res = document.querySelector('#result');
    res.textContent = result;
    score = document.querySelector('#score');
    score.textContent = `Score is ${playerScore} - ${compScore}`;

    if (playerScore ==5) {
        final = document.querySelector('#finalScore');
        final.textContent = 'You won that game! Gratz!';
    } 
    else if (compScore ==5) {
        final = document.querySelector('#finalScore');
        final.textContent = 'You lost that game:( Sorry!';
    } 
}












