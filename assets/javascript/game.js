var wordPool = ["Joe", "Potato", "Pickles", "Bears"]

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
var gamestart = "";
var guessedBefore = false;
var isLetter = false;

for (var i = 0; i < currentWord.length; i++) {
  currentVsUser.push("_");
}

winCon = currentWord.length;

document.getElementById("start").innerHTML = "Press any key to get started!";
// take a look at this later
/* document.getElementById("start").onkeyup = function() {hideStart()};

function hideStart() {
  document.getElementById("start").style.backgroundColor = "red";
  console.log("Hello world");
} */
/* document.getElementById("start").style.visibility = "hidden"; */

/* document.getElementById("start").onkeyup = function() {
  document.getElementById("start").style.visibility = "hidden";
 */
document.getElementById("current-word").innerHTML = currentVsUser;
document.getElementById("wins-").innerHTML = wins;
document.getElementById("guesses-Remaining").innerHTML = guessesRemaining;

document.onkeyup = function (getkey) {
  userGuess = getkey.key;

  if (userGuess.search(/[^a-zA-Z]+/) === -1) {


    for (var m = 0; m < userGuessed.length; m++) {
      if (userGuessed[m] == userGuess) {
        guessedBefore = true;
      }
    }

    var a = 0;

    if (guessedBefore == false) {
      userGuessed.push(userGuess);
      currentWordAr.forEach(function (currentLetter) {
        if (userGuess === currentWordAr[a]) {
          currentVsUser[a] = currentLetter;
          guessedCorrectly = true;
        }
        a++


      });
    } else {
      alert("You guessed that before! Try a new letter.");
    }
    if (guessedCorrectly == false && guessedBefore == false) {
      guessesRemaining--;
    }

    if (guessedCorrectly == true) {
      amountCorrect++;
    }
    guessedCorrectly = false;
    guessedBefore = false;
    document.getElementById("user-guessed").innerHTML = userGuessed;
    document.getElementById("current-word").innerHTML = currentVsUser;
    document.getElementById("guesses-Remaining").innerHTML = guessesRemaining;
    //get user input
    // enter funtion when yes is press to play
    // loop that ends when Fails=6 or winCon met
    // run game logic

    if (winCon == amountCorrect) {
      document.getElementById("play-again").innerHTML = "You Win! Do you want to try again?";
    }
    if (guessesRemaining === 0) {
      document.getElementById("play-again").innerHTML = "You lose! Do you want to try again?";
    }
  }
};

// make game start -- do this last
// instead of alert on allreadyguessed make it a toast