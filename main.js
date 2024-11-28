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



    if (result ==="tie") {
        alert(`Computer chose: ${computerSelection}
              Human chose: ${humanSelection}
              Result: It was a tie!
              ${getScore(result)}`);
    } else {
        alert(`Computer chose: ${computerSelection}
                Human chose: ${humanSelection}
                Result: The ${result} is the winner!
                ${getScore(result)}`);
    }

    return result;
}
let computerScore = 0;
let humanScore = 0;
function getScore(result){
    if (result === "Computer"){
        computerScore += 1;
    } else if (result === "Human"){
        humanScore +=1;
    }
    return `Score: C = ${computerScore}, H = ${humanScore}`;
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
