function getComputerChoice(){
    let n = Math.floor(Math.random() * 3);
    let computerChoice;
    if (n === 0){
        computerChoice = "rock";
    } else if (n === 1){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice(button){
    return button.id;
}


function playRound(button){
    console.clear();
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice(button);
    const result = whoIsWinner(computerSelection, humanSelection);

    console.log(`Computer chose: ${computerSelection}`);
    console.log(`You chose: ${humanSelection}`);
    if (result ==="tie") {
        console.log("Result: It was a tie!");
    } else {
        console.log(`Result: ${result} is the winner!`);
    }

    return result;
}

function whoIsWinner(computerSelection, humanSelection){
    //if there's a tie
    if(computerSelection === humanSelection){
        return "tie";
    }
    //if computer is the winner
    if( (computerSelection === "rock" && humanSelection === "scissors") ||
        (computerSelection === "paper" && humanSelection === "rock") ||
        (computerSelection === "scissors" && humanSelection === "paper")){
        return "Computer";
    } else {
        return "Human";  // else human is the winner if no tie and computer isn't winner
    }
}
