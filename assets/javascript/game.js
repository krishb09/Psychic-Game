// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
//half the alphabet: a-l (12 values)
var appChoices= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]; 

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
//keep counter
var wins = 0;
var losses = 0;


// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var leftoverGuess = document.getElementById("guessesleft-text"); 
var guessesMade = document.getElementById("guesses"); 
var userArr = [];
var guessesLeft = 12; 

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();
    if(userGuess.match(/[a-z]/) && userGuess !== "capslock"){
        var guessText = userGuess;
    // Determines which key was pressed.

    console.log(event.key); 
    console.log('Key press');
    

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var appGuess = appChoices[Math.floor(Math.random() * appChoices.length)];
    console.log(appGuess); 

    //This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number

    if (userGuess === appGuess) {
        wins++;
    }
    else if(guessesLeft === 0) { //sees if there's no guesses left
        losses++; //then the user lost
        guessesLeft = 12; //have to reset the guesses
        guessesMade.textContent= "Your Guesses so far: " + " "; 
    }else{
        guessesLeft--; //this keeps track of guesses
        guessesMade.textContent +=  " " + guessText; 
    }
    userArr.push(userGuess); 
   
    // Display the user and computer guesses, and wins/losses/ties.
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    leftoverGuess.textContent =  "Guesses left: " + guessesLeft;
  
    }
};