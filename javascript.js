const rounds = parseInt(prompt("How many rounds you want to play:"));

function randomChoice (){
    return Math.floor(Math.random()*3 + 1);
}

function getComputerChoice(choice){
    switch(choice){
        case 1:
            return "Rock";
        case 2:
            return "Scissors";
        case 3:
            return "Paper";
    }
}

function playRound(humanPlayer,computerPlayer){
    console.log(humanPlayer);
    console.log(computerPlayer);
    if(humanPlayer == computerPlayer){
        return "It's a Draw";
    }
    else if(humanPlayer == "Rock" && computerPlayer == "Paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(humanPlayer == "Rock" && computerPlayer == "Scissors"){
        return "You Lose! Rock beats Scissors";
    }
    else if(humanPlayer == "Paper" && computerPlayer == "Rock"){
        return "You Lose! Paper beats Rock";
    }
    else if(humanPlayer == "Paper" && computerPlayer == "Scissors"){
        return "You Lose! Scissors beats Paper";
    }
    else if(humanPlayer == "Scissors" && computerPlayer == "Rock"){
        return "You Lose! Rock beats Scissors";
    }
    else if(humanPlayer == "Scissors" && computerPlayer == "Paper"){
        return "You Lose! Scissors beats Paper";
    }
    else{
        return "Wrong input";
    }
}

function formatHumanChoice(choice){
    choice = choice.toLowerCase();
    let firstCharacter = choice.charAt(0);
    firstCharacter = firstCharacter.toUpperCase();
    choice = choice.slice(1);
    return firstCharacter+choice;    
}

function validChoice(choice){
    if(choice == "Rock" || choice == "Scissors"|| choice == "Paper"){
        return choice;
    }
    else{
        return "Invalid";
    }
}

function getHumanChoice(choice){
    choice=formatHumanChoice(choice);
    choice=validChoice(choice);
    return choice;
}

function game(numberRounds){
    for(let i = 1; i<= numberRounds; i++){
        let selection = prompt("Enter either Rock, Paper or Scissors:");
        console.log(playRound(getHumanChoice(selection),getComputerChoice(randomChoice())));
    }
}

if (typeof(rounds)!= NaN ){
    game(rounds);
}
else{
    console.log("Wrong amount of rounds selected");
}

