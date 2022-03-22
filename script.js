let secretNumber;
let lastGuess;
let guessesRemaining = 10;
let passGuesses = [];

let CORRECT_MESSAGE = "Correct! You must be a powerful psychic.";
let HIGH_MESSAGE = "Incorrect. You are merely a normal human.";
let LOW_MESSAGE = "Incorrect. You are merely a normal human.";

function generateNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

secretNumber = generateNumber(1, 10);

function checkIsCorrect() {
  if (lastGuess > secretNumber) {
    return 1;
  } else if (lastGuess === secretNumber) {
    return 0;
  } else {
    return -1;
  }
}
// MILESTONE 4: Right now every guess will be true. Change
// the above code so it checks to make sure lastGuess
// is equal to secretNumber.

function makeGuess() {
  if (!secretNumber) {
    generateNumber();
  }
  // MILESTONE 3: ADD CODE HERE to pop up a dialog box
  // asking the user for a number.
  var userguess = prompt("What is your guess?");
  lastGuess = parseInt(userguess);

  // MILESTONE 5: Past Guesses, Remaining Guesses, Too Low/Too High

  passGuesses.push(lastGuess);
  guessesRemaining = guessesRemaining - 1;

  //--------------------------------------------
  updatePage();
}

// Don't worry about this part! Feel free to play around,
// but we'll teach you all about how JavaScript and HTML
// work together in the next section. If you're done Milestone
// 5, you'll need to fiddle around in here a bit.

function updatePage() {
  document.getElementById("last-guess").innerHTML = lastGuess;
  const correct = document.getElementById("correct");
  const isCorrect = checkIsCorrect();
  if (isCorrect > 0) {
    HIGH_MESSAGE = `Sorry! 
    Your guess of ${lastGuess} was too high! 
    You have guessed ${passGuesses.length} times. 
    Your previous guesses were ${passGuesses.join()}. 
    You are merely a normal human.`;
    correct.innerHTML = HIGH_MESSAGE;
    correct.setAttribute("class", "wrong");
  } else if (isCorrect === 0) {
    correct.innerHTML = CORRECT_MESSAGE;
    correct.setAttribute("class", "right");
  } else {
    LOW_MESSAGE = `Sorry! 
    Your guess of ${lastGuess} was too low! 
    You have guessed ${passGuesses.length} times. 
    Your previous guesses were ${passGuesses.join()}. 
    You are merely a normal human.`;
    correct.innerHTML = LOW_MESSAGE;
    correct.setAttribute("class", "wrong");
  }

  const remaining = document.getElementById("guesses-remaining");
  remaining.innerHTML = guessesRemaining;
}
