// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userArray = [];


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    userArray.push(userGuess);
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // if user choice  equals computer choice 
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        userArray.length = 0;
    }
    else if (userGuess != computerGuess) {
        guessesLeft--;
    }
    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        userArray.length = 0;
    }

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =

        "<p>I think I Know What you are thinking:" + "</p>" +

        "<p>The computer chose: " + computerGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>You have picked: " + userArray + "</p>";
    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;

};