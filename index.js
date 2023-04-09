const R = "rock";
const P = "paper";
const S = "scissors";


// Taking user input
function userInput(){
    let input = prompt("write input rock, pper or scissors");

    // console.log(input);             // for debugging

    if(input == undefined){
        return ("cancelled");
    }
    else{
        let trimmed_input = input.trim();
        let user_input = trimmed_input.toLowerCase();
        // return(userInput);

        // Artificial Intelligence
        let suggested_input = user_input[0] === "r" ? "rock" : user_input[0] === "p" ? "paper" : user_input[0]=== "s" ? "scissors" : "wrong_input";
        //
        return (suggested_input);
    }
    
}

// Generating automatic computer input
function computerInput(){

    let computer_options = ["rock", "paper", "scissors"]
    let random_index = Math.floor(Math.random() * computer_options.length);
    return(computer_options[random_index]);

}

// Playing Rounds
function play(user, computer){
    // console.log("user =", user,);                // for debugging
    // console.log("computer =", computer);

    if(user === "cancelled" ){
        return undefined;                           // by default return returns undefined
    }

    else if (user === "wrong_input"){
        return ("again");
    }
    else{
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
    
}


// Congratulatory message
function congrats(userScore, computerScore){
    (userScore === 5) ? console.log("Congrats!! You win") : console.log("Sedd!! You lost") ;
}


// Message announcing winner when game completes successefully or when game is cancelled by the user
function gameEnd(userScore, computerScore){ 
    if(userScore === 5 || computerScore === 5){
        congrats(userScore, computerScore);
    }
    else{
        console.log("Game remains unfinished :(")
    }
}


// main game function
function game(){
    let userScore = 0;
    let computerScore = 0;
    let round = 1;
    while(!(userScore === 5 || computerScore === 5)){
        console.log(`=====================Round ${round} ========================`);
        let result = play(userInput(), computerInput());

        if(result == undefined){
            alert("you cancelled the game")
            break;
        }

        else if(result === "again"){
            continue;
        }
        else{
            if(result === "userwin"){
                userScore++;
                console.log("you beats computer");
            }
            else if(result === "computerwin"){
                computerScore++;
                console.log("computer beats you");
            }
            else{
                console.log(result);  // here result = "tie"
            }
            ++round;
        }
    }

    gameEnd(userScore, computerScore);

    // console.log(`user = ${userScore} \n computer = ${computerScore} \n user + computer = ${userScore + computerScore}`); // for debugging
 
}

// accessing HTML button
const playgame = document.querySelector('button');
playgame.addEventListener('click', game);



