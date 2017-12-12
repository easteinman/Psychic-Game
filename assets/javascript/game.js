// Available letters to guess
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables for my scoreboard
var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var lettersGuessed = [];
var userGuess = null;


// Create an onkeyup event for the user guess.
document.onkeyup = function(event) {

  // Record the users guess to the userGuess variable. toLowerCase is incase the user has cap locks on.
  var userGuess = event.key;

  // Randomly choose a letter from the "options" array. This is the Computer's guess.
  var computerGuess = options[Math.floor(Math.random() * options.length)];

    if (lettersGuessed.indexOf(userGuess) < 0 && options.indexOf(userGuess) >= 0) {
        lettersGuessed[lettersGuessed.length] = userGuess;
    // if it is a new letter then decrease remaining guesses by 1
        remainingGuesses--;
    }

    if userGuess = computerGuess {
        wins++;
        alert("Well, congrats...you're psychic. But you already knew that.");
        remainingGuesses = 9;
        lettersGuessed = [];
        computerGuess = options[Math.floor(Math.random() * options.length)]; 
    }

    if remainingGuesses == 0 {
        losses++;
        alert("Fraud! You're not psychic.");
        remainingGuesses = 9;
        lettersGuessed = [];
        computerGuess = options[Math.floor(Math.random() * options.length)]; 
    }


    // Creating a variable to hold the new HTML. This will allow the HTML to keep track of the user and computer guesses, and the wins/losses.
    var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + remainingGuesses + "</p>" +
          "<p>Your Guesses so far: " + lettersGuessed + "</p>" +;

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }
    };