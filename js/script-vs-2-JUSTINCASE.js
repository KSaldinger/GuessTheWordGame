
const guessedLetters = document.querySelector(".guessed-letters");// ul where guesses appear
const guessButton = document.querySelector(".guess")  //Guess button
const letter = document.querySelector("#letter");  //text input where letter will be typed
const inProgress = document.querySelector(".word-in-progress");  // where word will appear
const remaining = document.querySelector(".remaining");  // remaining guesses will display
const guessesLeft = document.querySelector("span");
const message = document.querySelector(".message");   /// where message will appear
const againButton = document.querySelector(".play-again");  // play again button
const word = "magnolia"; // starting word 

//Placeholders for the letters
const circleSymbol = function () {
    inProgress.innerText = circleSymbol.join("");
    };
circleSymbol(word);

// let ??? = circleSymbol.split("") ???

