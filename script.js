function getComputerChoice(){
let choice;
const RPS = Math.random();
if (RPS<0.34)
choice = "rock";
else if (RPS<0.67)
choice = "paper";
else 
choice = "scissors";
return choice;
}

 function playRound(player, computer){
if (player == computer)
console.log("It's a draw")
else if (player == "rock"){
        if (computer == "paper"){
            console.log("You lose. Computer wins!")
        return 1;}
            else {console.log("You win!")
            return 2;}
    }
else if (player == "paper"){
        if (computer == "scissors"){
        console.log("You lose. Computer wins!")
        return 1;}
        else {console.log("You win!")
        return 2;}
    }
else if (player == "scissors"){
        if (computer == "rock"){
        console.log("You lose. Computer wins!")
        return 1;}
        else {console.log("You win!")
        return 2;}
    }
    else console.log("Your input was inorrect!!!")
}



function game(){
let winNumber = prompt("Best of how many games ?");
winNumber = winNumber/2 -winNumber%2 + 1;

for (let i = 0,j = 0, k = 1;i<winNumber && j <winNumber;k++){
console.log("Round " + k + ":")
let playerChoice = prompt("Rock, paper or scissors ?");
playerChoice = playerChoice.toLowerCase();
let computerChoice = getComputerChoice();


let result = playRound(playerChoice,computerChoice);
if (result==1)
i++;
else if (result == 2)
j++;

console.log("Your choice: " + playerChoice + " | Computers choice: " + computerChoice)
console.log("Player wins:" + j + " | Computer wins:" + i)
if (i >= winNumber || j >= winNumber)
if (i >= winNumber)
console.log("\nComputer is winner with " + i + " wins.")
else console.log("\nYou are winner with " + j + " wins.")
}
}
game();
 