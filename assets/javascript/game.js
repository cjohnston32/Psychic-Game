/* VARIABLES */
var guessesL = 10; // Guesses left
var wins = 0;
var losses = 0;
var guessIndex = 0; // Holds the index of current guess for id="letGuessed" array
var lettersGuessed = [];

/* 1) Computer Guess */
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); // Creates a lower-case alphabetic array
var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)]; // Take notes on using prototype to extend native objects!

/* USER INPUT */
document.onkeyup = function (event) {
  var userG = event.key;  // User guess stored, but as an OBJECT! not a string
  guessesL--;
  document.getElementById("guessC").innerHTML = guessesL;
  if (guessesL === 0) {
    losses++;
    userG = '';
    guessesL = 10;
    lettersGuessed = [];
    guessIndex = 0;
    document.getElementById("guessC").innerHTML = guessesL;
    document.getElementById("letGuessed").innerHTML = lettersGuessed;
    document.getElementById("lossC").innerHTML = losses;
    compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  else {
    if (userG == compGuess) {
      wins++;
      userG = '';
      guessesL = 10;
      lettersGuessed = [];
      guessIndex = 0;
      document.getElementById("guessC").innerHTML = guessesL;
      document.getElementById("letGuessed").innerHTML = lettersGuessed;
      document.getElementById("winC").innerHTML = wins;
      compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
      return;
    }
    else {
      lettersGuessed[guessIndex] = userG; // Assigns previously guessed letter to array
      guessIndex++;
      document.getElementById("letGuessed").innerHTML = lettersGuessed;
    }
  }
}
