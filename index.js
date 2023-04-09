const R = "rock";
const P = "paper";
const S = "scissors";


function userInput(){
    // let input = prompt("write input rock,paper or scissors");
    let input = "RocK";
    let user_input = input.toLowerCase();
    return (user_input);
}

function computerInput(){
    let computer_options = ["rock", "paper", "scissors"]
    let random_index = Math.floor(Math.random() * computer_options.length);
    return(computer_options[random_index]);

}

function play(user, computer){
    console.log("user =", user,);
    console.log("computer =", computer);
    if(user === computer){
        return("tie");
    }
    else if( user === R && computer === S || user === S && computer === P || user === P && computer === R){
        return("userwin");
    }
    else{
        return("computerwin");
    }
}

function game(){
    let userScore = 0;
    let computerScore = 0;
    let round = 5;
    for(let i = 1; i<=round ; i++){
        console.log(`=====================Round ${i} ========================`);
        let result = play(userInput(), computerInput());
        
        if(result === "userwin"){
            console.log(` i = ${i} , round = ${round}`)
            userScore++;
            console.log("you beats computer");
        }
        else if(result === "computerwin"){
            console.log(` i = ${i} , round = ${round}`)
            computerScore++;
            console.log("computer beats you");
        }
        else{
            console.log(` i = ${i} , round = ${round}`)
            console.log(result);
            ++round;
        }
    }

    console.log(`user + computer = ${userScore + computerScore}`);
}

game();

