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

function game() {
    let score = 0; 
    for (let i =0; i<5; i++) {
        let playerSelection = prompt('Put here');
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result)
        if (result.includes('Won')) {
            score+=1;
        }
        if (result.includes('Lose')) {
            score-=1;
        }
    }
    if (score < 0) {
        console.log('And the winner is... COMPUTER!!!')
    }
    else if (score > 0) {
        console.log('And the winner is... HUMAN!!!')
    }    
    else {
        console.log("It's a Draw)")
    }
}

game()










