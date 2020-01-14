var wordPool = ["Psychokinesis", "Vulcan", "Raven", "Mantis", "Ocelot", "Campbell", "Nanomachines", "Zanzibar", "Foxhound", "Foxdie"];
var pastGameWords = [];
var currentWord = wordPool[Math.floor(Math.random() * wordPool.length)];
var currentWordAr = currentWord.toLowerCase().split("");
var userGuess;
var userGuessed = [];
var currentVsUser = [];
var winCon = 0;
var amountCorrect = 0;
var wins = 0;
var guessesRemaining = 6;
var guessedCorrectly = false;
var guessedBefore = false;
var gameStart = false;
var firstInput = false;
var hasWon = false;
var mainThemeMP3 = document.getElementById("main-theme");
var alertMP3 = document.getElementById("alert");
var snakeMP3 = document.getElementById("snake");
var winOneMP3 = document.getElementById("win-one");
var winTwoMP3 = document.getElementById("win-two");
var winThreeMP3 = document.getElementById("win-three");
var winFourMP3 = document.getElementById("win-four");
var winFiveMP3 = document.getElementById("win-five");
var winSixMP3 = document.getElementById("win-six");
var winSevenMP3 = document.getElementById("win-seven");
var winEightMP3 = document.getElementById("win-eight");
var winNineMP3 = document.getElementById("win-nine");
var winTenMP3 = document.getElementById("win-ten");
var x = window.matchMedia("(max-width: 1025px)")


  //TODO: make a div with a high z-index to  that tells user to move phone sideways
if (x.matches) {
  console.log("small screen");
  document.getElementById("vkb-toggle").style.display = "initial";
} else {
  console.log("big screen");
  document.getElementById("vkb-toggle").style.display = "none";
}

// Allows the virtual keyboard to only appear on small screens (mobile) as the base game requires a keyboard
x.addListener(function (changed) {
  if (changed.matches) {
    console.log("small screen");
    document.getElementById("vkb-toggle").style.display = "initial";
  } else {
    console.log("big screen");

  }
});


// Sound functions to be used later
function mainSound() {
  mainThemeMP3.volume = 0.2;
  mainThemeMP3.play();
}

function snakeSound() {
  snakeMP3.volume = 0.5;
  snakeMP3.play();
}

function alertSound() {
  alertMP3.volume = 0.7;
  alertMP3.play();
}

function winOneSound() {
  winOneMP3.volume = 0.7;
  winOneMP3.play();
}

function winTwoSound() {
  winTwoMP3.volume = 0.7;
  winTwoMP3.play();
}

function winThreeSound() {
  winThreeMP3.volume = 0.7;
  winThreeMP3.play();
}

function winFourSound() {
  winFourMP3.volume = 0.7;
  winFourMP3.play();
}

function winFiveSound() {
  winFiveMP3.volume = 0.7;
  winFiveMP3.play();
}

function winSixSound() {
  winSixMP3.volume = 0.7;
  winSixMP3.play();
}

function winSevenSound() {
  winSevenMP3.volume = 0.7;
  winSevenMP3.play();
}

function winEightSound() {
  winEightMP3.volume = 0.7;
  winEightMP3.play();
}

function winNineSound() {
  winNineMP3.volume = 0.7;
  winNineMP3.play();
}

function winTenSound() {
  winTenMP3.volume = 0.7;
  winTenMP3.play();
}

//make an array of blank spaces for user to guess
for (var i = 0; i < currentWord.length; i++) {
  currentVsUser.push("_");
}

//make the win condition equal to the length of the word we are guessing
winCon = currentWord.length;

//push some content to html so it can be utilized later
document.getElementById("start").innerHTML = "Snake to enter this facility we are going to have hack it's passwords... Press any key to get started.";
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
      document.getElementById("user-guessed").innerHTML = "Letters already guessed: " + userGuessed.join(" ");
      amountCorrect = 0;
      guessesRemaining = 6;
      //make an array of blank spaces for user to guess
      for (var i = 0; i < currentWord.length; i++) {
        currentVsUser.push("_");
      }

      //make the win condition equal to the length of the word we are guessing
      winCon = currentWord.length;

      //reset info for user
      document.getElementById("current-word").innerHTML = "Facility password: " + currentVsUser.join(" ");
      document.getElementById("guesses-Remaining").innerHTML = "Incorrect guesses remaining: " + guessesRemaining;
      gameStart = false;
      firstInput = false;
    }
    // end gamestart



    // eat first input to apply playerboard
    if (firstInput == false) {
      document.getElementById("start").innerHTML = "";
      document.getElementById("play-again").innerHTML = "";
      document.getElementById("current-word").innerHTML = "Facility password: " + currentVsUser.join(" ");
      document.getElementById("wins-").innerHTML = "Successful hacks: " + wins;
      document.getElementById("guesses-Remaining").innerHTML = "Incorrect guesses remaining: " + guessesRemaining;
      document.getElementById("user-guessed").innerHTML = "Letters already guessed: ";
      firstInput = true;
    } else {

        // get user keypress
      userGuess = getkey.key;
      userGuess = userGuess.toLowerCase();
      document.getElementById("error").innerHTML = "";
      //only run logic if user inputs a letter
      if (userGuess.search(/[a-z]/) === 0 && userGuess.length == 1) {

        //see if user guessed the letter before
        for (var m = 0; m < userGuessed.length; m++) {
          if (userGuessed[m] == userGuess) {
            guessedBefore = true;
          }
        }

        //add the letters to the board if found in word
        var a = 0;
        if (guessedBefore == false && currentVsUser.indexOf(userGuess) == -1) {
          currentWordAr.forEach(function (currentLetter) {
            if (userGuess === currentWordAr[a]) {
              currentVsUser[a] = currentLetter;
              guessedCorrectly = true;
              //add the amount of letters correct to check against win conditon later
              amountCorrect++;
            }
            a++;
          });
          if (currentVsUser.indexOf(userGuess) == -1) {
            userGuessed.push(userGuess);}
        } else {
          document.getElementById("error").innerHTML = "! Snake, you tried that already !";
          alertSound();
          document.getElementById("error").style.color = "red";
          /*           document.getElementById("error").style.display = "none"; */
        }

        // if used didn't guess correctly - take away a guess
        if (guessedCorrectly == false && guessedBefore == false && currentVsUser.indexOf(userGuess) == -1) {
          guessesRemaining--;
        }

        // reset and tally varibles for next run
        guessedCorrectly = false;
        guessedBefore = false;
        document.getElementById("user-guessed").innerHTML = "Letters already guessed: " + userGuessed.join(" ");
        document.getElementById("current-word").innerHTML = "Facility password: " + currentVsUser.join(" ");
        document.getElementById("guesses-Remaining").innerHTML = "Incorrect guesses remaining: " + guessesRemaining;

        //winning condition
        if (winCon == amountCorrect) {
          wins++;
          document.getElementById("current-word").innerHTML = "";
          document.getElementById("wins-").innerHTML = "";
          document.getElementById("guesses-Remaining").innerHTML = "";
          document.getElementById("user-guessed").innerHTML = "";

          if (wins == 1) {
            document.getElementById("wins-").innerHTML = "Password entered: " + currentWord;
            winOneSound();
            document.getElementById("play-again").innerHTML = "That's one password down. Keep 'em coming snake!";
          } else if (wins < wordPool.length) {
            document.getElementById("wins-").innerHTML = "Password entered: " + currentWord;
            if (wins == 2) {
              winTwoSound();
            }
            if (wins == 3) {
              winThreeSound();
            }
            if (wins == 4) {
              winFourSound();
            }
            if (wins == 5) {
              winFiveSound();
            }
            if (wins == 6) {
              winSixSound();
            }
            if (wins == 7) {
              winSevenSound();
            }
            if (wins == 8) {
              winEightSound();
            }
            if (wins == 9) {
              winNineSound();
            }
            document.getElementById("play-again").innerHTML = "That's another password down! One step closer to entry!";
          } else if (wins == wordPool.length) {
            document.getElementById("wins-").innerHTML = "Password entered: " + currentWord;
            winTenSound();
            document.getElementById("play-again").innerHTML = "You hacked all the passwords!";

          }
          gameStart = true;
          hasWon = true;
        }
        //losing condition
        if (guessesRemaining === 0) {
          document.getElementById("current-word").innerHTML = "";
          document.getElementById("wins-").innerHTML = "";
          document.getElementById("guesses-Remaining").innerHTML = "";
          document.getElementById("user-guessed").innerHTML = "";
          document.getElementById("play-again").innerHTML = "Snake? What Happened!? Snake!? Snaaaake!";
          snakeSound();
          gameStart = true;
        }
      } else {
      }
    }
  } else {
    document.getElementById("wins-").innerHTML = "";
    document.getElementById("mission-complete").innerHTML = "Quick infiltrate the facility!";
    document.getElementById("play-again").innerHTML = "";
  }
  mainSound();
}




// onclick version of lines 133 - 296
document.onclick = function (getkey) {
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
      document.getElementById("user-guessed").innerHTML = "Letters already guessed: " + userGuessed.join(" ");
      amountCorrect = 0;
      guessesRemaining = 6;
      //make an array of blank spaces for user to guess
      for (var i = 0; i < currentWord.length; i++) {
        currentVsUser.push("_");
      }

      //make the win condition equal to the length of the word we are guessing
      winCon = currentWord.length;

      //reset info for user
      document.getElementById("current-word").innerHTML = "Facility password: " + currentVsUser.join(" ");
      document.getElementById("guesses-Remaining").innerHTML = "Incorrect guesses remaining: " + guessesRemaining;
      gameStart = false;
      firstInput = false;
    }
    // end gamestart




    if (firstInput == false) {
      document.getElementById("start").innerHTML = "";
      document.getElementById("play-again").innerHTML = "";
      document.getElementById("current-word").innerHTML = "Facility password: " + currentVsUser.join(" ");
      document.getElementById("wins-").innerHTML = "Successful hacks: " + wins;
      document.getElementById("guesses-Remaining").innerHTML = "Incorrect guesses remaining: " + guessesRemaining;
      document.getElementById("user-guessed").innerHTML = "Letters already guessed: ";
      firstInput = true;
    } else {
      
      userGuess = Keyboard.lastKeyPressed;
      userGuess = userGuess.toLowerCase();
      
      document.getElementById("error").innerHTML = "";
      //only run logic if user inputs a letter
      if (userGuess.search(/[a-z]/) === 0 && userGuess.length == 1) {

        //see if user guessed the letter before
        for (var m = 0; m < userGuessed.length; m++) {
          if (userGuessed[m] == userGuess) {
            guessedBefore = true;
          }
        }

        //add the letters to the board if found in word
        var a = 0;
        if (guessedBefore == false && currentVsUser.indexOf(userGuess) == -1) {
          currentWordAr.forEach(function (currentLetter) {
            if (userGuess === currentWordAr[a]) {
              currentVsUser[a] = currentLetter;
              guessedCorrectly = true;
              //add the amount of letters correct to check against win conditon later
              amountCorrect++;
            }
            a++;
          });
          if (currentVsUser.indexOf(userGuess) == -1) {
            userGuessed.push(userGuess);}
        } else {
          document.getElementById("error").innerHTML = "! Snake, you tried that already !";
          alertSound();
          document.getElementById("error").style.color = "red";
          /*           document.getElementById("error").style.display = "none"; */
        }

        // if used didn't guess correctly - take away a guess
        if (guessedCorrectly == false && guessedBefore == false && currentVsUser.indexOf(userGuess) == -1) {
          guessesRemaining--;
        }

        // reset and tally varibles for next run
        guessedCorrectly = false;
        guessedBefore = false;
        document.getElementById("user-guessed").innerHTML = "Letters already guessed: " + userGuessed.join(" ");
        document.getElementById("current-word").innerHTML = "Facility password: " + currentVsUser.join(" ");
        document.getElementById("guesses-Remaining").innerHTML = "Incorrect guesses remaining: " + guessesRemaining;

        //winning condition
        if (winCon == amountCorrect) {
          wins++;
          document.getElementById("current-word").innerHTML = "";
          document.getElementById("wins-").innerHTML = "";
          document.getElementById("guesses-Remaining").innerHTML = "";
          document.getElementById("user-guessed").innerHTML = "";

          if (wins == 1) {
            document.getElementById("wins-").innerHTML = "Password entered: " + currentWord;
            winOneSound();
            document.getElementById("play-again").innerHTML = "That's one password down. Keep 'em coming snake!";
          } else if (wins < wordPool.length) {
            document.getElementById("wins-").innerHTML = "Password entered: " + currentWord;
            if (wins == 2) {
              winTwoSound();
            }
            if (wins == 3) {
              winThreeSound();
            }
            if (wins == 4) {
              winFourSound();
            }
            if (wins == 5) {
              winFiveSound();
            }
            if (wins == 6) {
              winSixSound();
            }
            if (wins == 7) {
              winSevenSound();
            }
            if (wins == 8) {
              winEightSound();
            }
            if (wins == 9) {
              winNineSound();
            }
            document.getElementById("play-again").innerHTML = "That's another password down! One step closer to entry!";
          } else if (wins == wordPool.length) {
            document.getElementById("wins-").innerHTML = "Password entered: " + currentWord;
            winTenSound();
            document.getElementById("play-again").innerHTML = "You hacked all the passwords!";

          }
          gameStart = true;
          hasWon = true;
        }
        //losing condition
        if (guessesRemaining === 0) {
          document.getElementById("current-word").innerHTML = "";
          document.getElementById("wins-").innerHTML = "";
          document.getElementById("guesses-Remaining").innerHTML = "";
          document.getElementById("user-guessed").innerHTML = "";
          document.getElementById("play-again").innerHTML = "Snake? What Happened!? Snake!? Snaaaake!";
          snakeSound();
          gameStart = true;
        }
      } else {
      }
    }
  } else {
    document.getElementById("wins-").innerHTML = "";
    document.getElementById("mission-complete").innerHTML = "Quick infiltrate the facility!";
    document.getElementById("play-again").innerHTML = "";
  }
  mainSound();
  Keyboard.lastKeyPressed = "";
}