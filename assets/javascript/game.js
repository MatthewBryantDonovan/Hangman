
var wordPool = ["Joe", "Potato", "Pickles", "Bears"]

var currentWord = wordPool[Math.floor(Math.random() * wordPool.length)];

var currentWordAr = currentWord.toLowerCase().split("");

function report(string) {
    console.log(string);
  }

currentWordAr.forEach(function(currentLetter) {
    report(currentLetter);
    if (currentLetter == guessedLetter) {
        // add letter to 
    }
  });
