function getComputerChoice(){
    let n = Math.floor(Math.random() * 3);
    let choice;
    if (n === 0){
        choice = "rock";
    } else if (n === 1){
        choice = "paper";
    } else if (n === 2){
        choice = "scissors";
    }
    return choice;
}

function getHumanChoice(button){
    console.log(button.id);
}


console.log(getComputerChoice());