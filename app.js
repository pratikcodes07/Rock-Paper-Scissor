let userscore=0;
let compscore=0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = ()=>{
    let options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() *3);
    return options[randomIdx];
}

const drawGame = ()=>{
    console.log("Game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("you win");
        msg.innerText = `You win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScorePara.innerHTML=compscore;
        console.log("you lose");
        msg.innerText = `You lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice)=>{
    console.log("User choice = ",userChoice);
    //Computer generated response
    const compChoice = genComputerChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice==compChoice){
        //DrawGame
        drawGame();
    }else{
        let userWin = true;
        if(userChoice=="rock"){
            userWin = compChoice=="paper"?false:true;
        }else if(userChoice=="paper"){
            userWin = compChoice=="scissors"?false:true;
        }else{
            userWin = compChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
})