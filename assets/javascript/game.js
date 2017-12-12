// 
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables for my scoreboard
var wins = 0;
var losses = 0;
var remaining = 9;
var guessed = [];
var userGuess = null;

// Randomly choose a letter from the "options" array. This is the Computer's guess.
var computerGuess = options[Math.floor(Math.random() * options.length)];

// start listening for events
document.onkeyup = function(event) {

  // When user presses a key, it records it and saves to userGuess
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

var html =
  "<p>Wins: " + wins + "</p>" +
  "<p>Losses: " + losses + "</p>" +
  "<p>Guesses Left: " + remaining + "</p>" +
  "<p>Your Guesses so far: " + guessed.join(' , ') + "</p>";
    
  document.querySelector("#game").innerHTML = html;
}