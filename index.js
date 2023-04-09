const R = "rock";
const P = "paper";
const S = "scissors";


function userInput(){
    let input = prompt("write input rock,paper or scissors");
    // let input = "RocK";
    let user_input = input.toLowerCase();
    // return(userInput);

    // Artificial Intelligence
    let suggested_input = user_input.slice(0) === "r" ? "rock" : user_input.slice(0,2) === "p" ? "paper" : user_input.slice(0,2) === "s" ? "scissors" : console.log("Wrong input");
    //
    return (suggested_input);
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

function congrats(userScore, computerScore){
    (userScore === 5) ? console.log("Congrats!! You win") : console.log("COngrats!! You lost") ;
}

function game(){
    let userScore = 0;
    let computerScore = 0;
    let round = 1;
    while(!(userScore === 5 || computerScore === 5)){
        console.log(`=====================Round ${round} ========================`);
        let result = play(userInput(), computerInput());

        if(result === "userwin"){
            userScore++;
            console.log("you beats computer");
        }
        else if(result === "computerwin"){
            computerScore++;
            console.log("computer beats you");
        }
        else{
            console.log(result);
        }
        ++round;
    }

    console.log(`user = ${userScore} \n computer = ${computerScore} \n user + computer = ${userScore + computerScore}`);

    congrats(userScore, computerScore);
}

const playgame = document.querySelector('button');
playgame.addEventListener('click', game);



