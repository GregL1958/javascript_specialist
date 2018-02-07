var numGames = 0;
var userWins = 0;
var computerWins = 0;
var ties = 0;

window.onload = function() {
    //alert("Let's play! Think of a rock,paper or scissors!");
    document.getElementById('playAgain').addEventListener('click', reload);
    document.getElementById('playRock').addEventListener('click', function() {randomNumber("rock")}); 
    document.getElementById('playPaper').addEventListener('click', function() {randomNumber("paper")}); 
    document.getElementById('playScissors').addEventListener('click', function() {randomNumber("scissors")}); 
}

function randomNumber(userGuess) {
    var computerAnswer = Math.random();
    var computerGuess = "";
    var computerAnswerText;

    
    switch (true) {
        case (computerAnswer <= 0.33):
            computerAnswerText = "Computer chose rock!"; 
            computerGuess = "rock";
            break;
        case  (computerAnswer > 0.33 && computerAnswer<= 0.66):
            computerAnswerText ="Computer chose paper!";
            computerGuess = "paper";
            break;
        default:
            computerAnswerText ="Computer chose scissors!";
            computerGuess = "scissors";
    }
    
    document.getElementById("computerGuess").innerHTML = "You chose " + " " + userGuess + " and " + " " + computerAnswerText; 
    winner(userGuess,computerGuess);
    
};

function winner(userGuess,computerGuess) {
    var winnerIsText;
    //var numGames = 0;
    //var userWins = 0;
    //var computerWins = 0;
    //var ties = 0;  
    numGames++;
    if( userGuess === computerGuess) {
        winnerIsText = "Tie Game no winner!!!!!!!!";
        ties++;
    }
    else {
        if(userGuess==="rock"){
            if(computerGuess==="scissors"){
                winnerIsText = "User wins. Rock crushes scissors";
                userWins++;
            }
            else{
                winnerIsText = "Computer wins. Paper covers Rock  ";
                computerWins++;
            }
        }
        if(userGuess==="paper"){
            if(computerGuess==="rock"){
                winnerIsText = "User wins. Paper covers Rock  ";
                userWins++
            }
            else{
                winnerIsText = "Computer wins. Scissors cut paper";
                computerWins++;
            }
        }
        if(userGuess==="scissors"){
            if(computerGuess==="rock"){
                winnerIsText = "Computer wins. Rock crushes scissors";
                computerWins++;
            }
            else{
                winnerIsText = "User wins. Scissors cut paper";
                userWins++
            }
        }
    }
    
    
    document.getElementById("winnerIs").innerHTML = winnerIsText;
    document.getElementById("score").innerHTML = "Total Games = "+ numGames + " User Wins = " + userWins + " Computer Wins = " + computerWins + " Ties = " + ties;
}


function reload(e) {
    location.reload();
}