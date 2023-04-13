const R = "rock";
const P = "paper";
const S = "scissors";

// Taking user input
function userInput(e){
    console.log(e.target)
    let input = e.target.getAttribute('id');           // this is telling that which button has triggered that click event
    return(input)
}  

// Generating automatic computer input
function computerInput(){
    let computer_options = ["rock", "paper", "scissors"]
    let random_index = Math.floor(Math.random() * computer_options.length);
    return(computer_options[random_index]);

}

// Playing Rounds
function play(user, computer){
    console.log("user =", user);                // for debugging
    console.log("computer =", computer);

    if(user === computer){
        let userImgParent = document.querySelector('.user-image');
        userImgParent.innerHTML = `<img src="./${user}.png">`

        let computerImgParent = document.querySelector('.computer-image');
        computerImgParent.innerHTML = `<img src="./${computer}.png">`

        return("tie");
    }
    else if( user === R && computer === S || user === S && computer === P || user === P && computer === R){
        let userImgParent = document.querySelector('.user-image');
        userImgParent.innerHTML = `<img src="./${user}.png">`;

        let computerImgParent = document.querySelector('.computer-image');
        computerImgParent.innerHTML = `<img src="./${computer}.png">`;
        return("userwin");
    }
    else{
        let userImgParent = document.querySelector('.user-image');
        userImgParent.innerHTML = `<img src="./${user}.png">`;

        let computerImgParent = document.querySelector('.computer-image');
        computerImgParent.innerHTML = `<img src="./${computer}.png">`;

        return("computerwin");
    }
}



// Congratulatory message
function congrats(userScore, computerScore){
    let result = document.querySelector('#result');
    result.classList.remove('visibility')
    if(userScore === 5){
        result.textContent = "Congrats !! You Won"
        
    }
    else{
        result.textContent = "Sedd !! You Lost"
    }
}


// Message announcing winner when game completes successefully or when game is cancelled by the user
function gameEnd(userScore, computerScore){ 
    // console.log(`Your Score ---> ${userScore}`);
    // console.log(`Computer Score ---> ${computerScore}`);   // for Debugging
    
    if(userScore === 5 || computerScore === 5){
        congrats(userScore, computerScore);
    }
}
let userScore = 0;
let computerScore = 0;
let level = 1;

// main game function
function game(e){
    if(userScore < 5 && computerScore <5){
        let result = play(userInput(e), computerInput(e));

        if(result === "userwin"){
            userScore++;

            let user = document.getElementById('user-score');
            user.textContent = `${userScore}`;

            let beat = document.querySelector('#beat');
            beat.textContent = `"You beat Computer"`;
        }
        else if(result === "computerwin"){
            computerScore++;

            let computer = document.getElementById('computer-score');
            computer.textContent = `${computerScore}`

            let beat = document.querySelector('#beat');
            beat.textContent = `"Computer beats You"`
        }
        else{
            let beat = document.querySelector('#beat');
            beat.textContent = `"Tie!!!"`
        }


        if(userScore < 5 && computerScore < 5){
            ++level;
            let round = document.querySelector('#round');
            round.textContent = `Round ${level} :`;
        }
        else{
            gameEnd(userScore, computerScore);
        }

    }

}


let btnList = document.querySelectorAll('button');

    btnList.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            game(e);
        })
    })





