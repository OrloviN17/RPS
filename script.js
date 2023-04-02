function getComputerChoice(){
    let choice;
    const RPS = Math.random();
    if (RPS<0.34){
        choice = "rock";
        }
    else if (RPS<0.67){
        choice = "paper";
        }
    else{ 
        choice = "scissors";
        }
    return choice;
}

function playRound(player, computer){
    if (player == computer){
        console.log("It's a draw")
        }
    else if (player == "rock"){
        if (computer == "paper"){
            console.log("You lose. Computer wins!")
            return 1;
        }
        else {
            console.log("You win!")
            return 2;
        }
    }
    else if (player == "paper"){
            if (computer == "scissors"){
                console.log("You lose. Computer wins!")
                return 1;}
            else {
                console.log("You win!")
                return 2;
                }
        }
    else if (player == "scissors"){
        if (computer == "rock"){
            console.log("You lose. Computer wins!")
            return 1;}
        else {console.log("You win!")
            return 2;}
        }
}



function game(playerChoice){
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice,computerChoice);
    console.log("Your choice: " + playerChoice + " | Computers choice: " + computerChoice)
    return result;
}


var pWins = 0, cWins = 0;
let winner;


function getWinner(winner){
    if (winner == 1){
        cWins++;
    } else if(winner == 2){
        pWins++;
    }
    console.log(cWins)
    console.log(pWins)
    const scoreText = document.querySelector('#score');
    scoreText.innerHTML = "Player wins:" + pWins + " | Computer wins:" + cWins;
    if (cWins == 5|| pWins == 5){
        if (cWins == 5){
            alert("Computer is winner with " + cWins + " wins!")
        }
        else {
            alert("Player is winner with " + pWins + " wins!")
        }
        let playAgain = prompt("Do you want to play again ?(yes/no");
        playAgain = playAgain.toLocaleLowerCase();
        if (playAgain == "yes"){
            cWins = 0;
            pWins = 0;
        }
        
        alert(playAgain);
        
    }
}


    const rockPlayer = document.querySelector('#rock');
    rockPlayer.addEventListener('click',function(e){
        winner = game("rock");
        getWinner(winner);
        
    })
    
    const paperPlayer = document.querySelector('#paper');
    paperPlayer.addEventListener('click',function(e){
        winner = game("paper");
        getWinner(winner);
    })
    
    const scissorsPlayer = document.querySelector('#scissors');
    scissorsPlayer.addEventListener('click',function(e){
        winner = game("scissors");
        getWinner(winner);
    })
