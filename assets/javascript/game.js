// Start by declaring Variables
var wordPool = ["Joe", "Potato", "Pickles", "Bears"]
var pastGameWords = [];
var currentWord = wordPool[Math.floor(Math.random() * wordPool.length)];
var currentWordAr = currentWord.toLowerCase().split("");
var userGuess
var userGuessed = [];
var currentVsUser = [];
var winCon = 0;
var amountCorrect = 0;
var wins = 0;
var guessesRemaining = 6;
var guessedCorrectly = false;
var guessedBefore = false;
var gameStart = true;
var firstInput = false;
var hasWon = false;

//make an array of blank spaces for user to guess
for (var i = 0; i < currentWord.length; i++) {
  currentVsUser.push("_");
}

//make the win condition equal to the length of the word we are guessing
winCon = currentWord.length;

//push some content to html so it can be utilized later
document.getElementById("start").innerHTML = "Press any key to get started!";
document.getElementById("current-word").innerHTML = currentVsUser;
document.getElementById("wins-").innerHTML = wins;
document.getElementById("guesses-Remaining").innerHTML = guessesRemaining;
gameStart = false;

//have user input a key
document.onkeyup = function (getkey) {
  if (wins < wordPool.length) {

    //establish new game info
    if (gameStart == true) {
      if (hasWon == true) {
        pastGameWords.push(currentWord);
        hasWon = false;
      }
      if (wordPool.length != pastGameWords.length) {
        do {
          currentWord = wordPool[Math.floor(Math.random() * wordPool.length)];
        } while (pastGameWords.indexOf(currentWord) != -1);
      }
      currentWordAr = currentWord.toLowerCase().split("");
      currentVsUser = [];
      userGuessed = [];
      document.getElementById("user-guessed").innerHTML = userGuessed;
      amountCorrect = 0;
      guessesRemaining = 6;
      //make an array of blank spaces for user to guess
      for (var i = 0; i < currentWord.length; i++) {
        currentVsUser.push("_");
      }

      //make the win condition equal to the length of the word we are guessing
      winCon = currentWord.length;

      //reset info for user
      document.getElementById("current-word").innerHTML = currentVsUser;
      document.getElementById("guesses-Remaining").innerHTML = guessesRemaining;
      gameStart = false;
      firstInput = false;
    }
    // end gamestart



    if (firstInput == false) {
      document.getElementById("start").innerHTML = "";
      document.getElementById("play-again").innerHTML = "";
      firstInput = true;

    } else {
      userGuess = getkey.key;
      document.getElementById("play-again").innerHTML = "";
      //only run logic if user inputs a letter
      if (userGuess.search(/[^a-zA-Z]+/) === -1) {

        //see if user guessed the letter before
        for (var m = 0; m < userGuessed.length; m++) {
          if (userGuessed[m] == userGuess) {
            guessedBefore = true;
          }
        }

        //add the letters to the board if found in word
        var a = 0;
        if (guessedBefore == false) {
          userGuessed.push(userGuess);
          currentWordAr.forEach(function (currentLetter) {
            if (userGuess === currentWordAr[a]) {
              currentVsUser[a] = currentLetter;
              guessedCorrectly = true;
              //add the amount of letters correct to check against win conditon later
              amountCorrect++;
            }
            a++
          });
        } else {
          document.getElementById("play-again").innerHTML = "You guessed that before! Try a new letter.";
        }

        // if used didn't guess correctly - take away a guess
        if (guessedCorrectly == false && guessedBefore == false) {
          guessesRemaining--;
        }

        // reset and tally varibles for next run
        guessedCorrectly = false;
        guessedBefore = false;
        document.getElementById("user-guessed").innerHTML = userGuessed;
        document.getElementById("current-word").innerHTML = currentVsUser;
        document.getElementById("guesses-Remaining").innerHTML = guessesRemaining;

        //winning condition
        if (winCon == amountCorrect) {
          wins++;
          document.getElementById("wins-").innerHTML = wins;
          document.getElementById("play-again").innerHTML = "You Win! Press any key to try again?";
          gameStart = true;
          hasWon = true;
        }
        //losing condition
        if (guessesRemaining === 0) {
          document.getElementById("play-again").innerHTML = "You lose! Press any key to try again?";
          gameStart = true;
        }
      }
    }
  } else {
    document.getElementById("mission-complete").innerHTML = "Oh my! You guessed every word!";
    document.getElementById("play-again").innerHTML = "";
  }
}
// new game word never equals old game word